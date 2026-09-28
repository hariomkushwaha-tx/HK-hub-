import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Download, 
  Server, 
  Layers, 
  FileCode, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const DevOpsGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dockerfile' | 'compose' | 'nginx' | 'github-actions'>('dockerfile');
  const [copied, setCopied] = useState(false);

  // Dockerfile Config
  const [runtime, setRuntime] = useState<'node' | 'python' | 'go' | 'react-nginx'>('node');
  const [appPort, setAppPort] = useState('3000');
  const [includeNonRootUser, setIncludeNonRootUser] = useState(true);

  // Docker Compose Config
  const [includePostgres, setIncludePostgres] = useState(true);
  const [includeRedis, setIncludeRedis] = useState(true);
  const [includeNginxProxy, setIncludeNginxProxy] = useState(false);

  // Nginx Config
  const [domainName, setDomainName] = useState('api.hkvelora.com');
  const [upstreamPort, setUpstreamPort] = useState('3000');
  const [enableWebsockets, setEnableWebsockets] = useState(true);

  // GitHub Actions Config
  const [ciRuntime, setCiRuntime] = useState<'node' | 'python' | 'go'>('node');
  const [deployTarget, setDeployTarget] = useState<'docker-hub' | 'vercel'>('docker-hub');

  // Generator Functions
  const generateDockerfile = () => {
    if (runtime === 'node') {
      return `# Multi-stage Production Dockerfile for Node.js / Express / Next.js
# 1. Build & Dependency Isolation Stage
FROM node:20-alpine AS builder
WORKDIR /app

# Optimize layer caching
COPY package*.json ./
RUN npm ci --silent

COPY . .
RUN npm run build --if-present

# 2. Hardened Production Minimal Runtime Stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=${appPort}

${includeNonRootUser ? `# Security hardening: Execute as non-root user\nRUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 appuser\n` : ''}
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production --silent

COPY --from=builder /app/dist ./dist 2>/dev/null || COPY --from=builder /app ./

${includeNonRootUser ? `USER appuser\n` : ''}
EXPOSE ${appPort}

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \\
  CMD wget --no-verbose --tries=1 --spider http://localhost:${appPort}/health || exit 1

CMD ["node", "dist/index.js"]`;
    }

    if (runtime === 'react-nginx') {
      return `# Multi-Stage Dockerfile: Vite React build -> Hardened Nginx Alpine
# Stage 1: Build the static frontend bundle
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
COPY . .
RUN npm run build

# Stage 2: Serve using high-performance Nginx web server
FROM nginx:alpine-slim AS runner
COPY --from=build /app/dist /usr/share/nginx/html

# Replace default nginx config with Single Page Application (SPA) routing
RUN echo 'server { \\
    listen 80; \\
    location / { \\
        root /usr/share/nginx/html; \\
        index index.html index.htm; \\
        try_files $uri $uri/ /index.html; \\
    } \\
    gzip on; \\
    gzip_types text/css application/javascript application/json image/svg+xml; \\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`;
    }

    if (runtime === 'python') {
      return `# Production Dockerfile for Python FastAPI / Flask
FROM python:3.12-slim-bookworm AS runner

ENV PYTHONDONTWRITEBYTECODE=1 \\
    PYTHONUNBUFFERED=1 \\
    PORT=${appPort}

WORKDIR /app

# Install security updates & curl for healthcheck
RUN apt-get update && apt-get install -y --no-install-recommends curl \\
    && rm -rf /var/lib/apt/lists/*

${includeNonRootUser ? `# Run as non-privileged system user\nRUN useradd -u 1001 -m appuser\n` : ''}
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .
${includeNonRootUser ? `RUN chown -R appuser:appuser /app\nUSER appuser\n` : ''}
EXPOSE ${appPort}

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:${appPort}/health || exit 1

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "${appPort}"]`;
    }

    return `# Production Multi-Stage Dockerfile for Go Alpine
FROM golang:1.23-alpine AS builder
WORKDIR /app
RUN apk add --no-cache git ca-certificates tzdata

COPY go.mod go.sum* ./
RUN go mod download

COPY . .
# Compile statically linked binary with stripped debug symbols
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o server .

# Ultra-minimal Scratch / Alpine execution layer
FROM alpine:3.20 AS runner
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/server .
EXPOSE ${appPort}
CMD ["./server"]`;
  };

  const generateCompose = () => {
    return `version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: hk_app_service
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000${includePostgres ? '\n      - DATABASE_URL=postgresql://app_user:strong_password@postgres_db:5432/production_db' : ''}${includeRedis ? '\n      - REDIS_URL=redis://redis_cache:6379' : ''}
    depends_on:${includePostgres ? '\n      postgres_db:\n        condition: service_healthy' : ''}${includeRedis ? '\n      redis_cache:\n        condition: service_started' : ''}
    networks:
      - hk_internal_network
${includePostgres ? `
  postgres_db:
    image: postgres:16-alpine
    container_name: hk_postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: app_user
      POSTGRES_PASSWORD: strong_password
      POSTGRES_DB: production_db
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app_user -d production_db"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - hk_internal_network
` : ''}${includeRedis ? `
  redis_cache:
    image: redis:7-alpine
    container_name: hk_redis
    restart: unless-stopped
    command: redis-server --save 60 1 --loglevel warning
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data
    networks:
      - hk_internal_network
` : ''}${includeNginxProxy ? `
  nginx_proxy:
    image: nginx:alpine
    container_name: hk_nginx_proxy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - app
    networks:
      - hk_internal_network
` : ''}
networks:
  hk_internal_network:
    driver: bridge

volumes:${includePostgres ? '\n  pgdata:' : ''}${includeRedis ? '\n  redisdata:' : ''}`;
  };

  const generateNginx = () => {
    return `# Production Nginx Reverse Proxy Configuration
# Domain: ${domainName} -> Upstream Port: ${upstreamPort}

upstream backend_cluster {
    server 127.0.0.1:${upstreamPort};
    keepalive 32;
}

server {
    listen 80;
    server_name ${domainName};

    # Redirect all HTTP requests to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ${domainName};

    # SSL Certificates (managed via Certbot / Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/${domainName}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${domainName}/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Hardened Security Response Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    client_max_body_size 50M;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript application/xml image/svg+xml;

    location / {
        proxy_pass http://backend_cluster;
        proxy_http_version 1.1;
        
        # Proxy Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
${enableWebsockets ? `\n        # WebSocket Tunneling Support\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_read_timeout 86400s;\n` : ''}
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
    }
}`;
  };

  const generateGitHubActions = () => {
    return `# Production CI/CD Pipeline (.github/workflows/deploy.yml)
name: Production Continuous Delivery

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main ]

jobs:
  test-and-lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Setup Node.js Runtime
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Verify Code Linting
        run: npm run lint --if-present

      - name: Execute Automated Unit & Integration Tests
        run: npm test --if-present

  build-and-deliver:
    needs: test-and-lint
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Checkout Source
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to Docker Hub Registry
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build & Push Container Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            \${{ secrets.DOCKERHUB_USERNAME }}/hk-production-service:latest
            \${{ secrets.DOCKERHUB_USERNAME }}/hk-production-service:\${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max`;
  };

  const getActiveCode = () => {
    switch (activeTab) {
      case 'dockerfile': return generateDockerfile();
      case 'compose': return generateCompose();
      case 'nginx': return generateNginx();
      case 'github-actions': return generateGitHubActions();
      default: return '';
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case 'dockerfile': return 'Dockerfile';
      case 'compose': return 'docker-compose.yml';
      case 'nginx': return 'nginx.conf';
      case 'github-actions': return 'deploy.yml';
      default: return 'config';
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([getActiveCode()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = getFileName();
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-600 dark:text-blue-400">
          <Terminal className="w-4 h-4" />
          <span>Cloud &amp; Infrastructure Engineering Suite</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          DevOps, Docker &amp; CI/CD Config Generator
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Generate hardened, multi-stage Dockerfiles, full-stack docker-compose clusters, reverse-proxy Nginx servers, and GitHub Actions CI/CD workflows ready for production in one click.
        </p>
      </div>

      {/* Tabs Row */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto scrollbar-none">
        {[
          { id: 'dockerfile', label: '1. Multi-Stage Dockerfile' },
          { id: 'compose', label: '2. docker-compose.yml' },
          { id: 'nginx', label: '3. Nginx Reverse Proxy' },
          { id: 'github-actions', label: '4. GitHub Actions CI/CD' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Controls Box depending on activeTab */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        {activeTab === 'dockerfile' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">
                Runtime &amp; Framework
              </label>
              <select
                value={runtime}
                onChange={e => setRuntime(e.target.value as any)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-semibold outline-none"
              >
                <option value="node">Node.js / Express / Next.js</option>
                <option value="react-nginx">React Vite (Nginx Static Serve)</option>
                <option value="python">Python FastAPI / Flask</option>
                <option value="go">Go (Golang Alpine)</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">
                Application Expose Port
              </label>
              <input
                type="text"
                value={appPort}
                onChange={e => setAppPort(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono font-semibold outline-none"
              />
            </div>

            <div className="flex items-center pt-5">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeNonRootUser}
                  onChange={e => setIncludeNonRootUser(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Security: Run as non-root user
                </span>
              </label>
            </div>
          </div>
        )}

        {activeTab === 'compose' && (
          <div className="flex flex-wrap items-center gap-6 text-xs">
            <span className="font-bold text-slate-900 dark:text-slate-100">
              Include Stack Services:
            </span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includePostgres}
                onChange={e => setIncludePostgres(e.target.checked)}
                className="rounded text-blue-600"
              />
              <span className="font-semibold">PostgreSQL Database (Port 5432)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeRedis}
                onChange={e => setIncludeRedis(e.target.checked)}
                className="rounded text-blue-600"
              />
              <span className="font-semibold">Redis Cache (Port 6379)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNginxProxy}
                onChange={e => setIncludeNginxProxy(e.target.checked)}
                className="rounded text-blue-600"
              />
              <span className="font-semibold">Nginx Reverse Proxy Container</span>
            </label>
          </div>
        )}

        {activeTab === 'nginx' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">
                Domain / Server Name
              </label>
              <input
                type="text"
                value={domainName}
                onChange={e => setDomainName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono font-semibold outline-none"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">
                Upstream Backend Port
              </label>
              <input
                type="text"
                value={upstreamPort}
                onChange={e => setUpstreamPort(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono font-semibold outline-none"
              />
            </div>
            <div className="flex items-center pt-5">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={enableWebsockets}
                  onChange={e => setEnableWebsockets(e.target.checked)}
                  className="rounded text-blue-600"
                />
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  WebSocket Tunneling Proxy Headers
                </span>
              </label>
            </div>
          </div>
        )}

        {activeTab === 'github-actions' && (
          <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-300">
            <span className="font-bold">Workflow Trigger:</span>
            <span>Triggers automatically on Git Push to `main` branch with matrix testing and Docker image push.</span>
          </div>
        )}
      </div>

      {/* Code Editor Preview & Actions Box */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="font-bold text-slate-900 dark:text-slate-100">
              Generated File:
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/20">
              {getFileName()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyCode}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Configuration</span>
                </>
              )}
            </button>

            <button
              onClick={downloadFile}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download {getFileName()}</span>
            </button>
          </div>
        </div>

        {/* Code Canvas */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed shadow-lg">
          <pre>{getActiveCode()}</pre>
        </div>
      </div>
    </div>
  );
};
