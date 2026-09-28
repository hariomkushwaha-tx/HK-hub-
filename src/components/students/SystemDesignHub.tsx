import React, { useState } from 'react';
import { 
  Layers, 
  Database, 
  Server, 
  Cpu, 
  Network, 
  HardDrive, 
  ShieldCheck, 
  ArrowRight, 
  Copy, 
  Check, 
  Sparkles,
  GitBranch,
  Boxes
} from 'lucide-react';

interface SystemArchitecture {
  id: string;
  name: string;
  scope: string;
  qpsEstimate: string;
  storageEstimate: string;
  summary: string;
  coreRequirements: {
    functional: string[];
    nonFunctional: string[];
  };
  components: {
    name: string;
    role: string;
    techRecommendation: string;
  }[];
  databaseSchema: string[];
  keyTradeoffs: string[];
  failureModes: string[];
}

const SYSTEM_DESIGNS: SystemArchitecture[] = [
  {
    id: 'url-shortener',
    name: 'High-Scale Distributed URL Shortener (Bitly)',
    scope: 'Classic High-Read System (100:1 Read-to-Write Ratio)',
    qpsEstimate: 'Write: ~1,200 writes/sec | Read: ~120,000 reads/sec',
    storageEstimate: '100M URLs/month × 500 bytes = ~50 GB/month (~3 TB in 5 years)',
    summary: 'Converts long URLs into 7-character Base62 alphanumeric slugs (e.g., https://hk.co/7xK9pQ). Prioritizes millisecond read redirects and zero hash collisions.',
    coreRequirements: {
      functional: [
        'Given a long URL, return a unique shortened URL alias.',
        'Given a shortened URL alias, perform HTTP 301 / 302 redirect to original destination.',
        'Custom aliases and optional URL expiration timestamps.'
      ],
      nonFunctional: [
        'Ultra-low read latency (< 10ms redirect turnaround).',
        'High availability (99.99%) - redirect service cannot fail if write service is degraded.',
        'Shortened URL slug must not be predictable to prevent scraping.'
      ]
    },
    components: [
      {
        name: 'API Gateway / Reverse Proxy',
        role: 'SSL termination, rate limiting, and geo-distributed request routing',
        techRecommendation: 'Cloudflare / Nginx / Envoy'
      },
      {
        name: 'Slug Generator Service (Token Service)',
        role: 'Pre-generates unique 64-bit integer IDs using Snowflake / ZooKeeper range counters to avoid database write lock contention.',
        techRecommendation: 'Go / Node.js + ZooKeeper range allocation'
      },
      {
        name: 'Distributed Cache Layer',
        role: 'Caches 20% hottest URLs (80/20 Pareto principle) in-memory using LRU eviction policy.',
        techRecommendation: 'Redis Cluster (Memory-optimized, sub-millisecond lookup)'
      },
      {
        name: 'Primary Persistent Database',
        role: 'Key-value or relational row store mapping short_code to original_url.',
        techRecommendation: 'PostgreSQL with read replicas OR Amazon DynamoDB'
      }
    ],
    databaseSchema: [
      'url_mapping (short_hash CHAR(7) PRIMARY KEY, original_url VARCHAR(2048), user_id UUID, created_at TIMESTAMP, expires_at TIMESTAMP)',
      'click_analytics (id BIGSERIAL, short_hash CHAR(7), ip_address VARCHAR(45), country_code CHAR(2), clicked_at TIMESTAMP)'
    ],
    keyTradeoffs: [
      'HTTP 301 (Permanent Redirect) vs 302 (Temporary): 301 caches in browser (saves server load) but makes click analytics tracking impossible; 302 routes every click through backend analytics.',
      'Base62 Hashing vs Auto-Increment ID: MD5/SHA256 truncation produces collisions; Auto-increment integer converted to Base62 guarantees zero collisions.'
    ],
    failureModes: [
      'Cache Stampede: Use distributed mutex locks or probabilistic early expiration.',
      'Database Hotspotting: Partition database by hash of short_slug rather than sequential auto-increment range.'
    ]
  },
  {
    id: 'chat-system',
    name: 'Real-Time Messaging & Chat Architecture (WhatsApp / Discord)',
    scope: 'High-Concurrency Stateful Persistent Connections',
    qpsEstimate: '500,000 active concurrent WebSocket connections | 50,000 msgs/sec peak',
    storageEstimate: 'Billions of daily messages; append-only distributed time-series store',
    summary: 'Stateful bidirectional messaging enabling instant 1:1 and group text delivery, online presence heartbeats, read receipts, and offline message queueing.',
    coreRequirements: {
      functional: [
        'Real-time low-latency 1-on-1 and small group messaging.',
        'Online / Offline presence indicators and "last seen" timestamps.',
        'Message delivered and read receipt checks (Double Tick).',
        'Store message history when recipient is offline and deliver upon reconnect.'
      ],
      nonFunctional: [
        'Instant message delivery (< 100ms end-to-end).',
        'Zero message loss guarantees (At-least-once delivery with client deduplication).',
        'End-to-End Encryption (E2EE) using Double Ratchet algorithm.'
      ]
    },
    components: [
      {
        name: 'WebSocket Gateway Cluster',
        role: 'Maintains persistent TCP/WebSocket connections with mobile and web clients.',
        techRecommendation: 'Go / Erlang / Elixir (BEAM VM) / Node.js ws'
      },
      {
        name: 'Presence & Session Registry',
        role: 'Maps user_id to the specific gateway server instance currently holding their socket.',
        techRecommendation: 'Redis Sentinel / Hash ring mapping'
      },
      {
        name: 'Distributed Message Queue / Pub-Sub',
        role: 'Routes messages between different WebSocket gateway servers across the fleet.',
        techRecommendation: 'Apache Kafka / RabbitMQ'
      },
      {
        name: 'Chat History Message Store',
        role: 'LSM-tree write-optimized database for append-heavy chat message logs.',
        techRecommendation: 'Apache Cassandra / ScyllaDB'
      }
    ],
    databaseSchema: [
      'messages (channel_id UUID, message_id TIMEUUID, sender_id UUID, content TEXT, status INT, PRIMARY KEY (channel_id, message_id) WITH CLUSTERING ORDER BY (message_id DESC))',
      'user_sessions (user_id UUID PRIMARY KEY, server_id VARCHAR(64), last_heartbeat TIMESTAMP, status VARCHAR(16))'
    ],
    keyTradeoffs: [
      'Polling vs Long-Polling vs WebSockets: WebSockets provide lowest latency and lowest header overhead for continuous bidirectional traffic.',
      'Cassandra vs MySQL: Relational databases lock row pages during heavy concurrent inserts; Cassandra append-only commit logs achieve 10x higher write throughput.'
    ],
    failureModes: [
      'Gateway Node Crash: Heartbeat timeout triggers presence server to mark connections offline; client reconnects to healthy node via DNS round-robin.',
      'Message Duplication on Retries: Unique client-generated UUID prevents double-inserting messages.'
    ]
  },
  {
    id: 'rate-limiter',
    name: 'Distributed API Rate Limiter (Token Bucket / Sliding Window)',
    scope: 'High-Throughput Middleware Security & DDoS Protection',
    qpsEstimate: 'Must inspect every single inbound request (> 200,000 QPS) with < 1ms overhead',
    storageEstimate: 'Minimal in-memory footprint (~100 bytes per client IP/API token)',
    summary: 'Protects backend microservices from resource exhaustion, brute force attacks, and noisy neighbor tenancy by capping API requests per window.',
    coreRequirements: {
      functional: [
        'Limit user requests based on IP address, API key, or User ID (e.g. 100 req/min).',
        'Return standard HTTP 429 "Too Many Requests" status code with Retry-After header.',
        'Tiered limits for free vs enterprise API accounts.'
      ],
      nonFunctional: [
        'Extremely low latency overhead (< 1ms per check).',
        'Distributed accuracy across multi-node autoscaling clusters (no race conditions).'
      ]
    },
    components: [
      {
        name: 'Edge Reverse Proxy Middleware',
        role: 'Intercepts incoming HTTP request, extracts client key, and queries rate limiter.',
        techRecommendation: 'Nginx Lua module / Kong API Gateway / Cloudflare Workers'
      },
      {
        name: 'Atomic Distributed Cache',
        role: 'Stores sliding window timestamps and remaining token counters atomically.',
        techRecommendation: 'Redis running atomic Lua scripts'
      }
    ],
    databaseSchema: [
      'Redis Key: rate:{api_key}:{window_timestamp} -> EXPIRE 60s',
      'Redis ZSET: key: client_ip, score: timestamp_ms, member: unique_req_id'
    ],
    keyTradeoffs: [
      'Token Bucket vs Sliding Window Counter: Token bucket allows controlled bursts while sliding window prevents boundary stampedes at minute edges.',
      'Centralized Redis vs Local In-Memory: Centralized Redis guarantees strict global limits across all containers; local memory is faster but limits multiply by replica count.'
    ],
    failureModes: [
      'Redis Downtime: Fail-Open vs Fail-Closed trade-off. Standard practice is to fail-open (allow traffic) so an internal cache glitch does not take down customer APIs.'
    ]
  },
  {
    id: 'video-stream',
    name: 'Global Video Streaming Pipeline (YouTube / Netflix Lite)',
    scope: 'Massive Bandwidth & Storage Transcoding System',
    qpsEstimate: 'Video playback: CDN cached | Uploads: Asynchronous batch queue',
    storageEstimate: 'Petabytes of multi-bitrate segmented video chunks (.ts / .m4s)',
    summary: 'Ingests raw creator video files, transcodes them into multi-resolution adaptive bitrate streams (HLS/DASH 1080p, 720p, 480p, 360p), and delivers chunks via edge CDNs.',
    coreRequirements: {
      functional: [
        'Chunked resumable video uploads for large raw files.',
        'Adaptive Bitrate Streaming (ABR): Automatically adjusts playback resolution based on client network bandwidth.',
        'Video metadata, comments, and engagement tracking.'
      ],
      nonFunctional: [
        'Buffer-free instant playback start (< 500ms initial segment load).',
        'Cost-effective video storage using multi-tier cloud storage lifecycle policies.'
      ]
    },
    components: [
      {
        name: 'Resumable Upload Gateway',
        role: 'Accepts multipart chunked raw video uploads via S3 signed URLs.',
        techRecommendation: 'AWS S3 / Cloudflare R2'
      },
      {
        name: 'Distributed Transcoding Cluster',
        role: 'Splits raw video into 5-second segments and encodes into HLS (m3u8 playlist) across resolutions using FFmpeg.',
        techRecommendation: 'Kubernetes worker pods / AWS Batch / FFmpeg'
      },
      {
        name: 'Edge Content Delivery Network (CDN)',
        role: 'Caches video chunks (.ts) close to viewers geographically.',
        techRecommendation: 'Cloudflare / AWS CloudFront / Fastly'
      }
    ],
    databaseSchema: [
      'videos (id UUID PRIMARY KEY, title VARCHAR(255), uploader_id UUID, duration INT, hls_playlist_url VARCHAR(512), status VARCHAR(32))',
      'video_views (video_id UUID, watched_seconds INT, viewer_ip VARCHAR(45), timestamp TIMESTAMP)'
    ],
    keyTradeoffs: [
      'HLS vs MPEG-DASH: HLS is supported natively on iOS Safari and Apple devices; DASH is open-standard. Most production sites transcode to HLS.',
      'On-demand Transcoding vs Eager Encoding: Eagerly encode popular formats, lazy-encode legacy 240p formats to save GPU compute costs.'
    ],
    failureModes: [
      'Transcoding Worker Crash: Job queue (RabbitMQ/SQS) with visibility timeout automatically re-assigns chunk to another worker.'
    ]
  }
];

export const SystemDesignHub: React.FC = () => {
  const [selectedArchId, setSelectedArchId] = useState<string>('url-shortener');
  const [copied, setCopied] = useState(false);

  const selectedArch = SYSTEM_DESIGNS.find(s => s.id === selectedArchId) || SYSTEM_DESIGNS[0];

  const copyBlueprintSummary = () => {
    const text = [
      `=== ${selectedArch.name} ===`,
      `Scope: ${selectedArch.scope}`,
      `QPS: ${selectedArch.qpsEstimate}`,
      `Storage: ${selectedArch.storageEstimate}`,
      '',
      `1. CORE COMPONENTS:`,
      ...selectedArch.components.map(c => `• ${c.name} (${c.techRecommendation}): ${c.role}`),
      '',
      `2. DATABASE SCHEMA:`,
      ...selectedArch.databaseSchema.map(d => `• ${d}`),
      '',
      `3. KEY TRADEOFFS:`,
      ...selectedArch.keyTradeoffs.map(t => `• ${t}`),
      '',
      `Source: HK VELORA System Design Hub`
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-600 dark:text-blue-400">
          <Boxes className="w-4 h-4" />
          <span>High-Scale Distributed Engineering Blueprints</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          System Design Architecture Blueprints
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Deep architectural breakdowns covering QPS capacity estimations, database partitioning, caching layers, failure modes, and engineering trade-offs tested in senior university defenses and tech interviews.
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Systems Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          {SYSTEM_DESIGNS.map(arch => {
            const isSelected = arch.id === selectedArch.id;
            return (
              <button
                key={arch.id}
                onClick={() => setSelectedArchId(arch.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all space-y-1 ${
                  isSelected
                    ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500/50 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${
                    isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-slate-100'
                  }`}>
                    {arch.name.split('(')[0].trim()}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">
                    {arch.id}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                  {arch.scope}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Blueprint Engine (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            {/* Header with Copy Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase">
                  {selectedArch.scope}
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mt-0.5">
                  {selectedArch.name}
                </h3>
              </div>

              <button
                onClick={copyBlueprintSummary}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Architecture Report</span>
                  </>
                )}
              </button>
            </div>

            {/* Capacity Estimation Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  THROUGHPUT &amp; CONCURRENCY (QPS)
                </span>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {selectedArch.qpsEstimate}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  DATA CAPACITY &amp; STORAGE GROWTH
                </span>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {selectedArch.storageEstimate}
                </p>
              </div>
            </div>

            {/* Architecture Overview */}
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {selectedArch.summary}
            </p>

            {/* Distributed Components Breakdown */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 block">
                Distributed Tiered Architecture Components:
              </span>
              <div className="space-y-2.5">
                {selectedArch.components.map((comp, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        {comp.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold">
                        {comp.techRecommendation}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {comp.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Schemas */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 block">
                Database Schema &amp; Partitioning Model:
              </span>
              <div className="space-y-1.5">
                {selectedArch.databaseSchema.map((schema, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-[11px] overflow-x-auto"
                  >
                    {schema}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Tradeoffs */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-2">
              <span className="font-bold text-amber-900 dark:text-amber-200 block">
                ⚖️ Critical Architecture Trade-offs &amp; Decisions:
              </span>
              <div className="space-y-1.5 text-amber-900 dark:text-amber-200">
                {selectedArch.keyTradeoffs.map((tradeoff, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="shrink-0">•</span>
                    <span>{tradeoff}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
