import { AuthorProfile } from '../types';

export const AUTHORS_DATA: AuthorProfile[] = [
  {
    id: 'hk-academic',
    name: 'HK HUB Academic & Engineering Team',
    role: 'Editorial & Curriculum Architects',
    bio: 'A multidisciplinary team of senior software engineers, academic professors, and open-source contributors dedicated to creating high-yield technical handbooks for students and builders.',
    avatarUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80',
    publishedBooksCount: 8,
    verified: true,
    socialLinks: {
      github: 'https://github.com/hkhub',
      website: 'https://hkhub.dev'
    }
  },
  {
    id: 'al-sweigart',
    name: 'Al Sweigart',
    role: 'Developer, Author & Open Educator',
    bio: 'Veteran Python developer and author of celebrated open-access programming textbooks taught in high schools and universities worldwide.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    publishedBooksCount: 4,
    verified: true,
    socialLinks: {
      website: 'https://automatetheboringstuff.com'
    }
  },
  {
    id: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    role: 'AI Researcher & Applied ML Lead',
    bio: 'PhD in Machine Learning and Generative Models. Advisor to AI startup founders and author of practical deep learning curricula.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    publishedBooksCount: 3,
    verified: true,
    socialLinks: {
      twitter: 'https://twitter.com/priyanair_ai'
    }
  },
  {
    id: 'vikram-sen',
    name: 'Vikram Sen',
    role: 'Cloud Native & Infrastructure Architect',
    bio: 'Kubernetes contributor, CNCF ambassador, and author of production reliability and Linux systems manuals.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    publishedBooksCount: 2,
    verified: true,
    socialLinks: {
      github: 'https://github.com/vikramsen'
    }
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Cybersecurity Analyst & Penetration Tester',
    bio: 'Specialist in offensive security, binary exploitation, and zero-trust perimeter defense. Creator of university CTF competitions.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    publishedBooksCount: 2,
    verified: true
  }
];
