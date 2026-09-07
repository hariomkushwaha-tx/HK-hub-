import { GuideItem } from '../types';

export const COMPREHENSIVE_GUIDES: GuideItem[] = [
  {
    id: 'how-to-create-a-website',
    title: 'How to Build & Host Your First Website for Free (Zero Cost)',
    category: 'Web Development',
    readTime: '6 min read',
    difficulty: 'Beginner',
    intro: 'A complete step-by-step roadmap for students and beginners to build a modern responsive webpage and deploy it to a live public URL using free, industry-standard developer platforms.',
    steps: [
      {
        stepNumber: 1,
        title: 'Set Up Your Local Workspace',
        details: 'Install VS Code (Visual Studio Code) and the Live Server extension. Create a project directory named `my-first-site` and an `index.html` file.',
        tip: 'Type `!` in VS Code and press Tab to auto-generate the HTML5 boilerplate in one second.'
      },
      {
        stepNumber: 2,
        title: 'Structure Your Semantic Markup',
        details: 'Add header, navigation bar, hero banner, content articles, and footer tags. Keep CSS in an external stylesheet or use Tailwind CSS via CDN.',
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Alex Student Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white p-8">
  <h1 class="text-3xl font-bold">Hello World!</h1>
</body>
</html>`
      },
      {
        stepNumber: 3,
        title: 'Push Code to GitHub',
        details: 'Create a free account on GitHub. Create a new public repository named `my-portfolio` and push your code files using Git or GitHub Desktop.',
        tip: 'Keep your repository public so potential internship recruiters and peers can see your source code.'
      },
      {
        stepNumber: 4,
        title: 'Deploy to Vercel, Cloud Run, or GitHub Pages',
        details: 'Connect your GitHub repository to Cloud Run or Vercel. With continuous deployment, any time you push an update to GitHub, your live website automatically updates in seconds with a free SSL certificate!'
      }
    ],
    relatedTools: ['code-beautifier', 'html-basics', 'color-picker'],
    faqs: [
      {
        question: 'Do I need to buy a domain name?',
        answer: 'No! Platforms like GitHub Pages and Vercel provide free subdomains (e.g. username.github.io or project.vercel.app) with automatic HTTPS included.'
      },
      {
        question: 'Can I use this website for my student resume or internship applications?',
        answer: 'Absolutely. A live hosted portfolio with links to your source code is one of the strongest assets for landing technical internships.'
      }
    ],
    updatedAt: 'Updated Recently'
  },
  {
    id: 'mastering-account-security',
    title: 'Ultimate Personal Cybersecurity: Passkeys, 2FA & Digital Hygiene',
    category: 'Cybersecurity Awareness',
    readTime: '7 min read',
    difficulty: 'Beginner',
    intro: '90% of account takeovers happen due to reused passwords and lack of multi-factor authentication. Here is the step-by-step blueprint to secure your digital identity without losing access.',
    steps: [
      {
        stepNumber: 1,
        title: 'Migrate to a Dedicated Password Manager',
        details: 'Stop using browser password saving or writing passwords on sticky notes. Set up Bitwarden or 1Password. Generate random 16+ character passwords for every website.',
        tip: 'Use a memorable 4-word passphrase with spaces as your master password.'
      },
      {
        stepNumber: 2,
        title: 'Replace SMS Verification with TOTP or Passkeys',
        details: 'SMS 2FA is susceptible to SIM swapping attacks. Download Aegis (Android) or Ente Auth (Cross-platform) and scan QR codes on Google, GitHub, and email accounts.',
        tip: 'Always print or safely store the emergency one-time backup codes provided during 2FA setup.'
      },
      {
        stepNumber: 3,
        title: 'Audit Connected Third-Party App Permissions',
        details: 'Visit your Google, Apple, and social media Security settings. Revoke access for old apps, games, and quizzes that you haven’t used in the past 6 months.'
      }
    ],
    relatedTools: ['password-generator', 'hash-generator'],
    faqs: [
      {
        question: 'What happens if I lose my phone with my authenticator app?',
        answer: 'If you saved your 16-digit backup codes in an encrypted manager, you can restore access immediately. Modern authenticators like Aegis and Ente also offer encrypted cloud/export backups.'
      }
    ],
    updatedAt: 'Updated Recently'
  },
  {
    id: 'ai-prompt-engineering-mastery',
    title: 'Prompt Engineering Blueprint: Get Exact Results from AI',
    category: 'AI',
    readTime: '5 min read',
    difficulty: 'Intermediate',
    intro: 'Learn how software engineers and researchers craft precise prompts for Gemini, Claude, and ChatGPT to produce production-grade code, accurate study notes, and research syntheses.',
    steps: [
      {
        stepNumber: 1,
        title: 'Provide Role and Explicit Boundaries',
        details: 'Always begin by defining the exact persona and domain limits. Instead of "Write a function", state "Act as a Senior TypeScript architect writing strict null-safe code."'
      },
      {
        stepNumber: 2,
        title: 'Use Few-Shot Demonstration (Input -> Output examples)',
        details: 'Show the AI one or two exact examples of the input format and expected output format. This reduces hallucination by over 80%.'
      },
      {
        stepNumber: 3,
        title: 'Enforce Step-by-Step Chain-of-Thought',
        details: 'Tell the model: "Think step-by-step. First list the requirements, then analyze potential edge cases, and finally write the implementation."'
      }
    ],
    relatedTools: ['json-formatter', 'regex-tester'],
    faqs: [
      {
        question: 'Does temperature matter?',
        answer: 'Yes! For coding, math, and data extraction, use low temperature (0.0 - 0.2) for determinism. For creative writing, use higher values (0.7 - 0.9).'
      }
    ],
    updatedAt: 'Updated Recently'
  },
  {
    id: 'student-tech-productivity-guide',
    title: 'The Tech-Savvy Student: Best Free Tools & Study Workflows',
    category: 'Student Guides',
    readTime: '8 min read',
    difficulty: 'Beginner',
    intro: 'How modern top students organize course materials, automate references, take searchable notes with Obsidian, and save 10+ hours every week using free digital resources.',
    steps: [
      {
        stepNumber: 1,
        title: 'Establish a Central Knowledge Base with Markdown',
        details: 'Use Obsidian or Notion. Organize by Semester > Course Code > Week > Topic. Use markdown headers and tags for instant cross-referencing.'
      },
      {
        stepNumber: 2,
        title: 'Automate PDF & Research Papers Organization',
        details: 'Use Zotero for free automatic citation generation (APA, IEEE, Harvard format) and PDF annotation syncing.'
      },
      {
        stepNumber: 3,
        title: 'Leverage Student Tech Discounts & Free Developer Packs',
        details: 'Sign up for the GitHub Student Developer Pack using your university/school email to receive free domain names, cloud credits, and premium developer tools.'
      }
    ],
    relatedTools: ['word-counter', 'timer-stopwatch', 'pdf-merger'],
    faqs: [
      {
        question: 'How do I get free cloud hosting as a student?',
        answer: 'The GitHub Student Developer Pack includes credits for DigitalOcean, Microsoft Azure, namecheap domains, and GitHub Copilot.'
      }
    ],
    updatedAt: 'Updated Recently'
  }
];
