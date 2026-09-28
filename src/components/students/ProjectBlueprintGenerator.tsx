import React, { useState } from 'react';
import { Sparkles, Copy, Check, CheckCircle2, ChevronRight, BookOpen, Layers, Terminal, Database, HelpCircle } from 'lucide-react';

interface ProjectBlueprint {
  title: string;
  domain: string;
  scope: string;
  problemStatement: string;
  architecture: string;
  keyFeatures: string[];
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    deployment: string;
  };
  databaseEntities: string[];
  milestones: { week: string; task: string }[];
  vivaQuestions: { q: string; a: string }[];
}

const BLUEPRINTS: Record<string, Record<string, ProjectBlueprint>> = {
  'web': {
    'mini': {
      title: 'Smart Campus Lost & Found Digital Verification Portal',
      domain: 'Fullstack Web Development',
      scope: '2nd / 3rd Year Mini Project',
      problemStatement: 'Manual notice boards for lost student ID cards, keys, and lab electronics suffer from zero verification, delayed reporting, and student privacy exposure.',
      architecture: 'Client-Side React SPA with Tailwind CSS communicating with a RESTful Express.js backend and SQLite/PostgreSQL database with encrypted contact exchanges.',
      keyFeatures: [
        'Geotagged campus zone tagging (Library, Science Block, Canteen, Sports Ground)',
        'Item claim verification questionnaire modal (Prevents false ownership claims)',
        'Automated status transitions: Reported → Claimed Under Review → Handed Over → Closed',
        'Student institutional email authentication with domain restriction'
      ],
      techStack: {
        frontend: 'React + TypeScript + Tailwind CSS',
        backend: 'Node.js + Express.js API',
        database: 'SQLite or PostgreSQL',
        deployment: 'Vercel (Frontend) + Render (Backend)'
      },
      databaseEntities: [
        'Users (id, student_id, email, full_name, phone, role)',
        'Items (id, title, category, description, location_zone, status, reporter_id, created_at)',
        'Claims (id, item_id, claimant_id, proof_description, verification_status, resolved_at)'
      ],
      milestones: [
        { week: 'Week 1', task: 'Entity design, database schema migration, and mock API route scaffolding' },
        { week: 'Week 2', task: 'User authentication, session tokens, and item reporting form' },
        { week: 'Week 3', task: 'Claim verification workflow, filter search, and student notification state' },
        { week: 'Week 4', task: 'Edge test cases, presentation deck, and college viva demonstration preparation' }
      ],
      vivaQuestions: [
        {
          q: 'How do you prevent malicious users from falsely claiming valuable items like calculators or phones?',
          a: 'By hiding specific identifying attributes (e.g. serial numbers or lock screen wallpaper) from public view and requiring claimants to answer a security verification questionnaire that only the legitimate owner can answer.'
        },
        {
          q: 'Why did you choose SQLite/PostgreSQL over MongoDB for this application?',
          a: 'Because the data model is strictly relational (Users have many Items, Items have many Claims). ACID compliance guarantees transactional integrity when two users claim the same item simultaneously.'
        }
      ]
    },
    'major': {
      title: 'Automated Academic Schedule & Timetable Optimization Engine with Genetic Algorithms',
      domain: 'Fullstack Web & Algorithms',
      scope: 'Final Year Capstone Project',
      problemStatement: 'Manual college timetable scheduling involves complex multi-variable combinatorial constraints: faculty availability, room capacities, lab equipment, and zero slot collisions.',
      architecture: 'Next.js frontend with visual timetable grid, backed by a Python/FastAPI microservice executing a Genetic Algorithm (Chromosome encoding, Fitness Function, Crossover, and Mutation).',
      keyFeatures: [
        'Constraint Matrix: Hard constraints (no faculty double-booking) and Soft constraints (balanced daily workload)',
        'Interactive Timetable Conflict Inspector with drag-and-drop manual fine-tuning',
        'Multi-format export: PDF room rosters, faculty individual schedules, and Google Calendar .ICS sync',
        'Departmental RBAC: Head of Department (Approval), Faculty (Read/Swap Request), Student (Read)'
      ],
      techStack: {
        frontend: 'Next.js (React 19) + Tailwind CSS',
        backend: 'FastAPI (Python 3.12) + NumPy constraint solver',
        database: 'PostgreSQL + Prisma ORM',
        deployment: 'Docker containers on AWS ECS / DigitalOcean'
      },
      databaseEntities: [
        'Faculty (id, emp_code, name, max_hours_per_day, unavailable_slots)',
        'Courses (id, code, title, lecture_hours, lab_hours, semester)',
        'Rooms (id, room_number, capacity, is_lab, projector_available)',
        'TimetableSlots (id, schedule_version_id, course_id, faculty_id, room_id, day, timeslot)'
      ],
      milestones: [
        { week: 'Week 1', task: 'Mathematical constraint formulation and Fitness Function definitions' },
        { week: 'Week 2', task: 'Genetic algorithm implementation (Population initialization, Roulette wheel selection)' },
        { week: 'Week 3', task: 'REST API wrapping and interactive Next.js timetable matrix editor' },
        { week: 'Week 4', task: 'Performance benchmarking against manual timetables and SRS submission' }
      ],
      vivaQuestions: [
        {
          q: 'What is the difference between hard and soft constraints in your scheduling algorithm?',
          a: 'Hard constraints must never be violated under any circumstance (e.g., a teacher cannot be in two classrooms at the same time). Soft constraints are optimization goals that increase schedule quality if satisfied (e.g., avoiding long gaps between lectures for students).'
        },
        {
          q: 'How does your Fitness Function score a generated timetable chromosome?',
          a: 'The fitness function penalizes each hard constraint violation by an infinite or large penalty (-1000 points) and deducts smaller penalties for soft constraint breaches, selecting chromosomes with maximum positive fitness.'
        }
      ]
    }
  },
  'ai': {
    'mini': {
      title: 'Automated Handwritten Exam Answer Sheet OCR & Grading Assistant',
      domain: 'AI & Computer Vision',
      scope: '2nd / 3rd Year Mini Project',
      problemStatement: 'Manual evaluation of subjective student answer scripts is labor-intensive and susceptible to fatigue-induced inconsistencies.',
      architecture: 'FastAPI computer vision backend with OpenCV image pre-processing (perspective correction, binarization) and transformer-based OCR pipeline.',
      keyFeatures: [
        'Document skew correction and bounding box segmentation for separate question answers',
        'Handwritten text extraction with confidence score indicators',
        'Keyword & semantic similarity scoring using Sentence-Transformers (Cosine similarity against model answer key)',
        'Teacher review dashboard allowing human-in-the-loop manual grade adjustment'
      ],
      techStack: {
        frontend: 'React + Tailwind CSS',
        backend: 'Python FastAPI + PyTorch + OpenCV',
        database: 'PostgreSQL with pgvector',
        deployment: 'Hugging Face Spaces or AWS EC2 G4dn'
      },
      databaseEntities: [
        'Exams (id, subject_code, total_marks, answer_key_json)',
        'Submissions (id, student_id, exam_id, scanned_pdf_url, total_score)',
        'AnswerEvaluations (id, submission_id, question_no, extracted_text, similarity_score, awarded_marks)'
      ],
      milestones: [
        { week: 'Week 1', task: 'Image pre-processing pipeline (Bilateral filtering, Hough transform angle correction)' },
        { week: 'Week 2', task: 'OCR integration and word bounding box extraction' },
        { week: 'Week 3', task: 'Semantic similarity matching using MiniLM-L6-v2 embeddings' },
        { week: 'Week 4', task: 'Frontend teacher verification interface and error analysis report' }
      ],
      vivaQuestions: [
        {
          q: 'Why use cosine similarity rather than exact string matching for answer grading?',
          a: 'Students express concepts using diverse vocabulary and sentence structures. Cosine similarity between embedding vectors evaluates semantic meaning in high-dimensional vector space rather than mechanical string equality.'
        }
      ]
    },
    'major': {
      title: 'Real-Time Edge Computer Vision for Industrial Safety & PPE Violation Detection',
      domain: 'Deep Learning & Edge AI',
      scope: 'Final Year Capstone Project',
      problemStatement: 'Industrial and construction sites experience catastrophic accidents due to failure to wear hard hats, safety vests, or protective eye goggles.',
      architecture: 'YOLOv10 deep learning model fine-tuned on custom annotated industrial PPE dataset, compiled to TensorRT/ONNX runtime for real-time edge processing at 30+ FPS.',
      keyFeatures: [
        'Multi-class object detection (Hardhat, High-vis vest, Safety harness, Safety boots)',
        'Worker tracking across surveillance frames using ByteTrack algorithm',
        'Automated real-time visual alert generation with timestamped snapshot logging',
        'Analytics dashboard displaying compliance percentages per operational zone'
      ],
      techStack: {
        frontend: 'React + WebRTC video player',
        backend: 'Python + TensorRT + FastAPI',
        database: 'TimescaleDB (Time-series incident logging)',
        deployment: 'NVIDIA Jetson / Local Edge Gateway + Cloud Dashboard'
      },
      databaseEntities: [
        'Cameras (id, location_zone, rtsp_stream_url, status)',
        'Incidents (id, camera_id, timestamp, violation_type, snapshot_path, confidence_score)',
        'ZoneSafetyMetrics (id, zone_name, compliance_percentage, date)'
      ],
      milestones: [
        { week: 'Week 1', task: 'Dataset curation, annotation, and data augmentation pipeline' },
        { week: 'Week 2', task: 'YOLO fine-tuning, hyperparameter tuning, and mAP@0.5 validation' },
        { week: 'Week 3', task: 'TensorRT optimization and RTSP video stream ingest pipeline' },
        { week: 'Week 4', task: 'Web monitoring UI and final technical thesis documentation' }
      ],
      vivaQuestions: [
        {
          q: 'What metric did you use to evaluate your object detection model accuracy?',
          a: 'Mean Average Precision at IoU 0.5 (mAP@0.5) and mAP@0.5:0.95, measuring the area under the Precision-Recall curve across all safety gear classes.'
        }
      ]
    }
  },
  'security': {
    'mini': {
      title: 'Encrypted Zero-Knowledge Student Identity & Credential Verification Protocol',
      domain: 'Cybersecurity & Cryptography',
      scope: '2nd / 3rd Year Mini Project',
      problemStatement: 'Students routinely upload unredacted government and college ID cards to third-party portals, creating catastrophic privacy risks and identity theft vulnerabilities.',
      architecture: 'Client-side cryptographic hashing and digital signatures using Ed25519 and SHA-256 with verifiable credential proofs.',
      keyFeatures: [
        'Selective Disclosure: Prove you are an active enrolled student WITHOUT revealing your birthdate or address',
        'Cryptographic tamper-proofing via institutional public key verification',
        'Offline verification capability via high-density signed QR codes',
        'Instant revocation list checking against university hash registry'
      ],
      techStack: {
        frontend: 'React + Web Crypto API',
        backend: 'Go (Golang) / Node.js Microservice',
        database: 'Redis (Revocation list cache) + SQLite',
        deployment: 'Cloudflare Workers / Vercel'
      },
      databaseEntities: [
        'Institutions (id, name, public_key_pem, domain)',
        'IssuedCredentials (id, credential_hash, issuer_id, issued_at, expires_at, is_revoked)'
      ],
      milestones: [
        { week: 'Week 1', task: 'Cryptographic schema design and keypair generation using Web Crypto' },
        { week: 'Week 2', task: 'Signed QR code encoder and camera scanner decoder' },
        { week: 'Week 3', task: 'Verification portal and tamper detection validation' },
        { week: 'Week 4', task: 'Security audit against replay attacks and documentation' }
      ],
      vivaQuestions: [
        {
          q: 'What is asymmetric cryptography and how is it used in your project?',
          a: 'Asymmetric cryptography uses a mathematically linked key pair: the university signs credentials using its private key, while any company or employer verifies authenticity using the university’s public key without needing privileged access.'
        }
      ]
    },
    'major': {
      title: 'Automated Network Packet Inspection & Distributed Denial of Service (DDoS) Anomaly Detector',
      domain: 'Network Security & Machine Learning',
      scope: 'Final Year Capstone Project',
      problemStatement: 'Enterprise networks face volumetric and application-layer DDoS attacks that overwhelm standard firewall rules without dynamic statistical traffic modeling.',
      architecture: 'Raw socket packet capture engine (Scapy / eBPF) streaming packet header features into an Isolation Forest and Random Forest anomaly detection pipeline.',
      keyFeatures: [
        'Real-time flow feature extraction: SYN/ACK packet ratios, flow duration, packet size entropy',
        'Detection of SYN Flood, UDP Amplification, and HTTP Slowloris attacks',
        'Automated IP blacklisting via iptables firewall rule injection upon alert',
        'Interactive live Grafana/React packet stream dashboard'
      ],
      techStack: {
        frontend: 'React + Recharts Live WebSockets',
        backend: 'Python (Scapy / Socket / Scikit-Learn)',
        database: 'InfluxDB (Time-series packet metrics)',
        deployment: 'Linux VM with promiscous network interface'
      },
      databaseEntities: [
        'TrafficFlows (timestamp, src_ip, dst_ip, src_port, dst_port, protocol, packet_count, byte_rate)',
        'Alerts (id, timestamp, attack_signature, severity, blocked_status)'
      ],
      milestones: [
        { week: 'Week 1', task: 'Packet sniffer setup and CICIDS-2017 benchmark dataset analysis' },
        { week: 'Week 2', task: 'Feature engineering and model training for anomaly classification' },
        { week: 'Week 3', task: 'Real-time pipeline integration and iptables automatic mitigation script' },
        { week: 'Week 4', task: 'Stress testing using hping3 in isolated network lab' }
      ],
      vivaQuestions: [
        {
          q: 'How does a SYN flood attack work and how does your system detect it?',
          a: 'A SYN flood sends massive TCP SYN packets with spoofed IPs without sending the final ACK. The server allocates TCB memory for half-open connections until exhaust. Our system monitors the ratio of unanswered SYNs to established connections per time window.'
        }
      ]
    }
  }
};

export const ProjectBlueprintGenerator: React.FC = () => {
  const [domain, setDomain] = useState<'web' | 'ai' | 'security'>('web');
  const [scope, setScope] = useState<'mini' | 'major'>('mini');
  const [copied, setCopied] = useState(false);

  const currentProject = BLUEPRINTS[domain]?.[scope] || BLUEPRINTS['web']['mini'];

  const copyFullSynopsis = () => {
    const text = [
      `=============================================================`,
      `COLLEGE PROJECT SYNOPSIS & SPECIFICATION REPORT`,
      `=============================================================`,
      `Project Title: ${currentProject.title}`,
      `Domain: ${currentProject.domain}`,
      `Scope: ${currentProject.scope}`,
      `-------------------------------------------------------------`,
      `1. PROBLEM STATEMENT:`,
      currentProject.problemStatement,
      `-------------------------------------------------------------`,
      `2. PROPOSED ARCHITECTURE:`,
      currentProject.architecture,
      `-------------------------------------------------------------`,
      `3. KEY FUNCTIONAL DELIVERABLES:`,
      ...currentProject.keyFeatures.map((f, i) => `   3.${i + 1} ${f}`),
      `-------------------------------------------------------------`,
      `4. RECOMMENDED TECH STACK:`,
      `   • Frontend: ${currentProject.techStack.frontend}`,
      `   • Backend: ${currentProject.techStack.backend}`,
      `   • Database: ${currentProject.techStack.database}`,
      `   • Deployment: ${currentProject.techStack.deployment}`,
      `-------------------------------------------------------------`,
      `5. DATABASE ENTITY SCHEMA OUTLINE:`,
      ...currentProject.databaseEntities.map(e => `   • ${e}`),
      `-------------------------------------------------------------`,
      `6. 4-WEEK IMPLEMENTATION MILESTONES:`,
      ...currentProject.milestones.map(m => `   [${m.week}] ${m.task}`),
      `-------------------------------------------------------------`,
      `7. SAMPLE EXTERNAL EXAMINER VIVA QUESTIONS:`,
      ...currentProject.vivaQuestions.map((v, i) => `   Q${i + 1}: ${v.q}\n   A: ${v.a}`),
      `=============================================================`,
      `Generated via HK VELORA Student Zone Engineering Portal`
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Selector Controls */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              College Capstone &amp; Mini-Project Architect
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Generate submission-ready blueprints with problem statements, schemas, timelines, and viva answers:
            </p>
          </div>

          <button
            onClick={copyFullSynopsis}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs shrink-0 self-start sm:self-auto"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Synopsis Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy College Synopsis</span>
              </>
            )}
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">
              Engineering Domain
            </label>
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              {[
                { id: 'web', label: 'Web & Distributed' },
                { id: 'ai', label: 'AI & Vision' },
                { id: 'security', label: 'Cybersecurity' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setDomain(t.id as any)}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-colors ${
                    domain === t.id
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">
              Project Level
            </label>
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              {[
                { id: 'mini', label: 'Mini Project (2nd/3rd Yr)' },
                { id: 'major', label: 'Capstone (Final Yr)' }
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => setScope(s.id as any)}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-colors ${
                    scope === s.id
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Card Display */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        {/* Header */}
        <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-5">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {currentProject.domain}
            </span>
            <span aria-hidden="true">·</span>
            <span>{currentProject.scope}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">University Approved Scope</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {currentProject.title}
          </h2>
        </div>

        {/* 1. Problem Statement & Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Problem Statement &amp; Motivation
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {currentProject.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              System Architecture
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {currentProject.architecture}
            </p>
          </div>
        </div>

        {/* 2. Key Deliverables & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider block">
              Core Deliverables &amp; Features
            </span>
            <div className="space-y-2">
              {currentProject.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider block">
              Recommended Tech Stack
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 block font-semibold">FRONTEND</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{currentProject.techStack.frontend}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 block font-semibold">BACKEND API</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{currentProject.techStack.backend}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 block font-semibold">DATABASE</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{currentProject.techStack.database}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 block font-semibold">DEPLOYMENT</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{currentProject.techStack.deployment}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Database Schema & Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider block">
              Database Entity Schema
            </span>
            <div className="space-y-1.5">
              {currentProject.databaseEntities.map((ent, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300">
                  {ent}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider block">
              4-Week Semester Timeline
            </span>
            <div className="space-y-2">
              {currentProject.milestones.map((m, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 shrink-0">{m.week}</span>
                  <span className="text-slate-700 dark:text-slate-300">{m.task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Viva Questions */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider block">
            Common External Examiner / Viva Questions
          </span>
          <div className="space-y-3">
            {currentProject.vivaQuestions.map((v, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 space-y-1 text-xs">
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-start gap-1.5">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">Q:</span>
                  <span>{v.q}</span>
                </div>
                <div className="text-slate-600 dark:text-slate-300 pl-4 leading-relaxed">
                  <strong className="text-slate-800 dark:text-slate-200">Recommended Answer:</strong> {v.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
