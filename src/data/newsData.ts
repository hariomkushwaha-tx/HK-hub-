import { TechUpdate } from '../types';

export const TECH_UPDATES_DATA: TechUpdate[] = [
  {
    id: 'tech-update-1',
    title: 'W3C Advances WebGPU Standardization for Next-Gen Browser Computing',
    summary: 'WebGPU brings low-overhead graphics and high-performance machine learning acceleration directly to web browsers across modern hardware.',
    category: 'Web',
    source: 'HK HUB Tech Desk',
    date: 'September 2026',
    tag: 'Web Standards',
    readTime: '2 min read',
    highlights: [
      'Allows client-side AI model inference to run directly on the local user GPU',
      'Provides up to 3x rendering performance boost over traditional WebGL',
      'Supported out-of-the-box across modern Chromium, Safari, and Firefox engines'
    ]
  },
  {
    id: 'tech-update-2',
    title: 'Multimodal AI Models Reach Millisecond Latency for Live Code Assistance',
    summary: 'New compact neural models allow developers and computer science students to interact with voice-guided coding assistants without cloud round-trips.',
    category: 'AI',
    source: 'AI Research Dispatch',
    date: 'September 2026',
    tag: 'Artificial Intelligence',
    readTime: '3 min read',
    highlights: [
      'Under 100ms response time on local consumer-grade laptops and tablets',
      'Specialized AST (Abstract Syntax Tree) reasoning for real-time syntax checking',
      'Strict educational modes configured to encourage student reasoning'
    ]
  },
  {
    id: 'tech-update-3',
    title: 'Passkeys Adoption Crosses 70% Across Major Digital Platforms',
    summary: 'FIDO Alliance reports accelerated migration away from static passwords toward cryptographic passkeys backed by biometric hardware enclaves.',
    category: 'Technology',
    source: 'Cybersecurity Brief',
    date: 'August 2026',
    tag: 'Security & Privacy',
    readTime: '2 min read',
    highlights: [
      'Eliminates credential stuffing and phishing vector risks entirely',
      'Syncs securely across end-user devices via encrypted keychain clouds',
      'Supported on Windows Hello, Apple TouchID/FaceID, and Android Biometrics'
    ]
  },
  {
    id: 'tech-update-4',
    title: 'TypeScript 5.8 Introduces Native Type Stripping & Ultra-Fast Checking',
    summary: 'The latest TypeScript release deepens seamless Node.js runtime execution with zero compilation step required for backend microservices.',
    category: 'Software',
    source: 'Developer Ecosystem',
    date: 'August 2026',
    tag: 'Programming',
    readTime: '3 min read',
    highlights: [
      'Native type stripping flag for instant Node execution',
      'Up to 25% faster type checking on enterprise-scale mono-repositories',
      'Improved inlay hints and memory footprint during continuous editing'
    ]
  },
  {
    id: 'tech-update-5',
    title: 'Battery Longevity Tech: New Silicon-Anode Cells Deliver 80% Capacity After 1,500 Cycles',
    summary: 'Mobile hardware manufacturers unveil breakthrough battery chemistries offering faster charging with half the thermal degradation of standard lithium cells.',
    category: 'Gadgets',
    source: 'Hardware Insights',
    date: 'August 2026',
    tag: 'Hardware',
    readTime: '2 min read',
    highlights: [
      'Smart thermal throttling algorithms protect cell lifespan during fast charging',
      'Extends average smartphone and laptop battery health to 4+ years',
      'Reduces electronic waste and replacement battery costs for students'
    ]
  }
];
