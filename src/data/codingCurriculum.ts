import { CodingLesson } from '../types';

export const CODING_SANDBOX_TEMPLATES: Record<string, { html: string; css: string; js: string }> = {
  counter: {
    html: `<div class="card">
  <h2>Interactive Counter</h2>
  <div class="display" id="count">0</div>
  <div class="actions">
    <button id="decrement" class="btn btn-secondary">-1</button>
    <button id="reset" class="btn btn-ghost">Reset</button>
    <button id="increment" class="btn btn-primary">+1</button>
  </div>
</div>`,
    css: `body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0f172a;
  color: #f8fafc;
}
.card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #334155;
  text-align: center;
  width: 280px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}
h2 { font-size: 1.25rem; margin-top: 0; color: #94a3b8; }
.display {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 1.5rem 0;
  font-family: monospace;
  color: #38bdf8;
}
.actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
.btn {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s;
}
.btn:active { transform: scale(0.95); }
.btn-primary { background: #6366f1; color: white; }
.btn-secondary { background: #475569; color: white; }
.btn-ghost { background: transparent; color: #94a3b8; border: 1px solid #475569; }`,
    js: `let count = 0;
const display = document.getElementById('count');
document.getElementById('increment').addEventListener('click', () => {
  count++;
  display.innerText = count;
});
document.getElementById('decrement').addEventListener('click', () => {
  count--;
  display.innerText = count;
});
document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  display.innerText = count;
});`
  },
  clock: {
    html: `<div class="clock-container">
  <div class="badge">HK HUB SYSTEM TIME</div>
  <div id="time" class="time-display">00:00:00</div>
  <div id="date" class="date-display">Today</div>
</div>`,
    css: `body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #090d16;
  color: #fff;
  font-family: monospace;
}
.clock-container {
  background: #111827;
  padding: 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid #1f2937;
  text-align: center;
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.15);
}
.badge {
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: #818cf8;
  margin-bottom: 0.75rem;
}
.time-display {
  font-size: 3rem;
  font-weight: 900;
  color: #38bdf8;
  letter-spacing: 4px;
}
.date-display {
  font-size: 0.9rem;
  color: #9ca3af;
  margin-top: 0.75rem;
}`,
    js: `function updateClock() {
  const now = new Date();
  document.getElementById('time').innerText = now.toLocaleTimeString();
  document.getElementById('date').innerText = now.toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'
  });
}
setInterval(updateClock, 1000);
updateClock();`
  },
  todo: {
    html: `<div class="todo-app">
  <h3>Quick Student Tasks</h3>
  <div class="input-row">
    <input id="todo-input" placeholder="Type a new task..." />
    <button id="add-btn">Add</button>
  </div>
  <ul id="todo-list"></ul>
</div>`,
    css: `body {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: #0f172a;
  color: #f1f5f9;
  font-family: sans-serif;
}
.todo-app {
  width: 320px;
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #334155;
}
h3 { margin-top: 0; font-size: 1.1rem; }
.input-row { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
input {
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #475569;
  background: #0f172a;
  color: #fff;
  outline: none;
}
button {
  padding: 0.5rem 0.8rem;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
ul { list-style: none; padding: 0; margin: 0; }
li {
  padding: 0.5rem;
  background: #0f172a;
  border-radius: 0.5rem;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}`,
    js: `const list = document.getElementById('todo-list');
const input = document.getElementById('todo-input');
document.getElementById('add-btn').addEventListener('click', () => {
  if (!input.value.trim()) return;
  const li = document.createElement('li');
  li.textContent = input.value;
  li.onclick = () => li.remove();
  list.appendChild(li);
  input.value = '';
});`
  }
};

export const CODING_LESSONS: CodingLesson[] = [
  {
    id: 'html-basics',
    language: 'html',
    title: 'HTML5 Semantic Foundations',
    description: 'Learn the core anatomy of web elements, tags, attributes, and accessible semantic structures.',
    level: 'Beginner',
    content: `HTML (HyperText Markup Language) defines the fundamental structure of all web pages. Semantic elements like <header>, <nav>, <main>, <article>, and <footer> ensure proper screen-reader accessibility and optimal search engine indexing.

Key Semantic Elements:
• <main>: Wraps the primary unique content of the page.
• <nav>: Contains navigation hyperlinks.
• <article>: Self-contained block of content that makes sense independently.
• <section>: A thematic grouping of related elements.`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Semantic HTML Page</title>
</head>
<body>
  <header>
    <h1>Welcome to HK HUB</h1>
  </header>
  <main>
    <article>
      <h2>Understanding Web Semantics</h2>
      <p>Clean structure enables high performance.</p>
    </article>
  </main>
</body>
</html>`
  },
  {
    id: 'css-flexbox',
    language: 'css',
    title: 'Modern CSS Flexbox Layouts',
    description: 'Master display: flex, justify-content, align-items, and flex-wrap for responsive design.',
    level: 'Beginner',
    content: `Flexbox is designed for 1-dimensional layouts (rows or columns). It handles spacing, distribution, and alignment effortlessly without messy float hacks.

Core Flexbox Properties:
• display: flex; (Enables flex context for direct child items)
• justify-content: space-between / center / flex-start (Main axis alignment)
• align-items: center / stretch (Cross axis alignment)
• flex-wrap: wrap (Allows items to flow into multiple lines on mobile screens)`,
    codeExample: `.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0f172a;
  color: #f8fafc;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}`
  },
  {
    id: 'js-async',
    language: 'javascript',
    title: 'JavaScript Async / Await & Fetch API',
    description: 'Handle asynchronous HTTP requests, promises, try/catch error handling, and JSON parsing.',
    level: 'Intermediate',
    content: `JavaScript executes on a single event loop thread. To fetch server data without freezing user interface animations, we rely on asynchronous Promises and async/await syntax.

Best Practices:
• Always wrap awaits in try/catch blocks to gracefully handle network dropouts.
• Check res.ok before parsing JSON.
• Use abort controllers to cancel stale requests.`,
    codeExample: `async function fetchTechNews() {
  try {
    const res = await fetch('https://api.example.com/articles');
    if (!res.ok) throw new Error('Failed to load articles');
    const data = await res.json();
    console.log('Received data:', data);
  } catch (error) {
    console.error('Network error:', error.message);
  }
}`
  },
  {
    id: 'python-basics',
    language: 'python',
    title: 'Python Core Logic & Data Structures',
    description: 'Lists, dictionaries, list comprehensions, and clean functional programming patterns in Python.',
    level: 'Beginner',
    content: `Python is celebrated for its clean, readable syntax and enormous ecosystem of scientific, automation, and AI libraries.

Key Python Structures:
• Lists: Ordered, mutable collections ([1, 2, 3]).
• Dictionaries: Key-value lookup tables ({"name": "HK HUB"}).
• List Comprehensions: Elegant 1-line transformation of datasets.`,
    codeExample: `# Filtering student marks above passing grade
marks = [88, 45, 92, 74, 55, 38]
passing_marks = [m for m in marks if m >= 50]
print(f"Passing grades: {passing_marks}")`
  }
];

export const STUDENT_PROJECT_IDEAS = [
  {
    title: 'Campus Notes & PDF Hub',
    level: 'Beginner',
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'LocalStorage'],
    description: 'A student portal to upload, tag by semester/subject, search, and download lecture notes and study checklists locally.',
    features: ['Subject categorization', 'Search bar with instant highlight', 'Downloadable PDF export', 'Night study mode']
  },
  {
    title: 'Student Grade & GPA Predictor',
    level: 'Beginner',
    techStack: ['React', 'TypeScript', 'Lucide Icons'],
    description: 'Calculate semester SGPA and cumulative CGPA with credit weighting, grade scale charts, and required scores for target GPA.',
    features: ['Custom credit weights', 'Target GPA calculator', 'Visual grade distribution', 'Printable PDF transcript report']
  },
  {
    title: 'Focus Pomodoro & Soundscape Timer',
    level: 'Intermediate',
    techStack: ['React', 'Web Audio API', 'Canvas'],
    description: 'A distraction-free study timer with 25/5 intervals, ambient rain/white noise audio synthesizers, and daily study statistics.',
    features: ['Custom interval presets', 'Lap & session logs', 'Ambient frequency sound generator', 'Streak tracker']
  },
  {
    title: 'AI Lecture Audio Transcriber & Note Summarizer',
    level: 'Advanced',
    techStack: ['Node.js', 'Express', 'Gemini API', 'React'],
    description: 'Record or upload lecture audio to generate structured study flashcards, key definition lists, and practice multiple choice questions.',
    features: ['Audio processing', 'Bullet-point study cards', 'Auto-generated quiz questions', 'Export to Markdown']
  }
];
