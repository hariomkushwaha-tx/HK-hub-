import { ProjectItem } from '../types';

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-campus-tracker',
    title: 'Campus GPA & Attendance Forecaster',
    description: 'A web app for university students to track minimum attendance thresholds, calculate aggregate SGPA, and set automated study reminders.',
    authorName: 'Rohan Sharma',
    authorUsername: 'rohan_dev',
    category: 'Student Project',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
    demoUrl: 'https://github.com/topics/student-projects',
    repoUrl: 'https://github.com/rohan_dev/campus-tracker',
    likes: 42,
    featured: true,
    createdAt: '2 days ago'
  },
  {
    id: 'proj-offline-markdown',
    title: 'ZenMark: Zero-Distraction Markdown Note App',
    description: 'An ultra-lightweight client-side note editor featuring live side-by-side preview, LaTeX math rendering, and local encrypted file export.',
    authorName: 'Aarav Patel',
    authorUsername: 'aarav_p',
    category: 'Utility Tool',
    technologies: ['Web API', 'JavaScript', 'IndexedDB', 'CSS3'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com/aarav_p/zenmark',
    likes: 38,
    featured: true,
    createdAt: '5 days ago'
  },
  {
    id: 'proj-study-flashcards',
    title: 'NeuroCards: Active Recall Study Deck',
    description: 'Spaced repetition flashcard app built specifically for engineering and computer science students with syntax highlighting for code blocks.',
    authorName: 'Priya Verma',
    authorUsername: 'priya_v',
    category: 'Student Project',
    technologies: ['React', 'Tailwind', 'Web Speech API', 'PWA'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com/priya_v/neuro-cards',
    likes: 56,
    featured: true,
    createdAt: '1 week ago'
  },
  {
    id: 'proj-api-tester',
    title: 'MicroFetch: Lightweight In-Browser REST API Client',
    description: 'Clean in-browser API tester with JSON syntax coloration, header manager, and cURL snippet generator. No account needed.',
    authorName: 'Karan Singh',
    authorUsername: 'karan_s',
    category: 'Web App',
    technologies: ['TypeScript', 'Vite', 'Tailwind CSS', 'Fetch API'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com/karan_s/microfetch',
    likes: 64,
    featured: false,
    createdAt: '2 weeks ago'
  }
];
