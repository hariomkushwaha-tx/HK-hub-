import { ToolItem } from '../types';

export const ALL_TOOLS: ToolItem[] = [
  // Text Tools
  {
    id: 'word-counter',
    name: 'Word & Character Counter',
    description: 'Calculate real-time words, characters, sentences, paragraphs, reading and speaking time.',
    category: 'text',
    iconName: 'FileText',
    isPopular: true,
    isStudentPick: true,
    tags: ['words', 'characters', 'essay', 'reading time', 'text analysis']
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text instantly to UPPERCASE, lowercase, Title Case, camelCase, snake_case, and kebab-case.',
    category: 'text',
    iconName: 'Type',
    tags: ['case', 'uppercase', 'camelcase', 'formatter']
  },
  {
    id: 'text-cleaner',
    name: 'Text Formatter & Cleaner',
    description: 'Remove redundant spaces, strip duplicate lines, sort alphabetical lines, remove blank rows, and trim.',
    category: 'text',
    iconName: 'Sparkles',
    tags: ['cleaner', 'duplicates', 'spaces', 'sort lines', 'format']
  },
  {
    id: 'lorem-generator',
    name: 'Lorem Ipsum Generator',
    description: 'Generate customizable dummy placeholder text by paragraphs, sentences, or word counts.',
    category: 'text',
    iconName: 'AlignLeft',
    tags: ['dummy text', 'placeholder', 'lorem ipsum', 'mockup']
  },

  // Developer Tools
  {
    id: 'json-formatter',
    name: 'JSON Formatter & Validator',
    description: 'Format, validate syntax, beautify, and minify JSON data with instant error line detection.',
    category: 'developer',
    iconName: 'Braces',
    isPopular: true,
    tags: ['json', 'beautify', 'validate', 'minify', 'developer']
  },
  {
    id: 'base64-tool',
    name: 'Base64 Encoder & Decoder',
    description: 'Encode plain text or inspect file binary representations directly to and from Base64.',
    category: 'developer',
    iconName: 'Binary',
    tags: ['base64', 'encode', 'decode', 'crypto', 'ascii']
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder & Decoder',
    description: 'Safely encode URL queries, query parameters, URI components, and inspect decoded paths.',
    category: 'developer',
    iconName: 'Link',
    tags: ['url', 'uri', 'percent encoding', 'web']
  },
  {
    id: 'regex-tester',
    name: 'Regular Expression Tester',
    description: 'Test Regex patterns in real time with regex flags, match groups, and highlighted text spans.',
    category: 'developer',
    iconName: 'Regex',
    isPopular: true,
    tags: ['regex', 'regular expression', 'pattern', 'test']
  },
  {
    id: 'uuid-generator',
    name: 'UUID / GUID Generator',
    description: 'Generate cryptographically random UUID v4 strings in single or bulk batches with one-click copy.',
    category: 'developer',
    iconName: 'KeyRound',
    tags: ['uuid', 'guid', 'v4', 'unique id']
  },
  {
    id: 'timestamp-converter',
    name: 'Unix Timestamp Converter',
    description: 'Convert Unix epoch timestamps (seconds & milliseconds) to human-readable UTC/Local date time.',
    category: 'developer',
    iconName: 'Clock',
    tags: ['timestamp', 'epoch', 'unix', 'time converter']
  },
  {
    id: 'hash-generator',
    name: 'Cryptographic Hash Generator',
    description: 'Compute cryptographic hashes (SHA-256, SHA-512, SHA-1) directly using browser Web Crypto.',
    category: 'developer',
    iconName: 'ShieldCheck',
    tags: ['hash', 'sha256', 'sha512', 'sha1', 'security', 'crypto']
  },
  {
    id: 'code-beautifier',
    name: 'HTML / CSS / JS Formatter',
    description: 'Clean, indent, and format messy frontend code snippets with standard developer indentation.',
    category: 'developer',
    iconName: 'Code',
    tags: ['beautify', 'html', 'css', 'javascript', 'indent']
  },

  // Calculator Tools
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Solve percentage calculations: X% of Y, what percentage is X of Y, and percentage increase/decrease.',
    category: 'calculators',
    iconName: 'Percent',
    isPopular: true,
    isStudentPick: true,
    tags: ['percentage', 'math', 'increase', 'decrease', 'student']
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate precise age in years, months, days, total hours, and countdown to your upcoming birthday.',
    category: 'calculators',
    iconName: 'CalendarDays',
    isStudentPick: true,
    tags: ['age', 'birth date', 'days', 'birthday', 'student']
  },
  {
    id: 'date-calculator',
    name: 'Date & Duration Calculator',
    description: 'Calculate the exact span between two calendar dates, or add/subtract business and total days.',
    category: 'calculators',
    iconName: 'Calendar',
    isStudentPick: true,
    tags: ['date', 'calendar', 'days between', 'add days']
  },
  {
    id: 'discount-gst-calc',
    name: 'Discount & GST Calculator',
    description: 'Calculate post-discount price, GST/tax amounts (inclusive or exclusive), and total net savings.',
    category: 'calculators',
    iconName: 'Receipt',
    tags: ['discount', 'gst', 'tax', 'price', 'shopping']
  },
  {
    id: 'emi-calculator',
    name: 'EMI Loan Calculator',
    description: 'Compute Monthly Loan EMI, total interest payable, overall payment, and loan summary.',
    category: 'calculators',
    iconName: 'Landmark',
    tags: ['emi', 'loan', 'interest', 'monthly payment', 'finance']
  },
  {
    id: 'unit-converter',
    name: 'Universal Unit Converter',
    description: 'Convert units across Length, Weight, Temperature, Area, Speed, Volume, and Pressure.',
    category: 'calculators',
    iconName: 'Scale',
    isStudentPick: true,
    tags: ['units', 'length', 'weight', 'temperature', 'conversion', 'student']
  },
  {
    id: 'data-storage-calc',
    name: 'Data Storage Converter',
    description: 'Convert between Bytes, Kilobytes (KB), Megabytes (MB), Gigabytes (GB), and Terabytes (TB).',
    category: 'calculators',
    iconName: 'HardDrive',
    tags: ['storage', 'bytes', 'mb', 'gb', 'tb', 'data']
  },

  // Utility Tools
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Generate high-resolution QR codes for URLs, WiFi credentials, plain text, and contact vCards.',
    category: 'utilities',
    iconName: 'QrCode',
    isPopular: true,
    isStudentPick: true,
    tags: ['qr', 'qr code', 'barcode', 'wifi', 'download']
  },
  {
    id: 'color-picker',
    name: 'Color Picker & Converter',
    description: 'Pick colors visually and convert seamlessly between HEX, RGB, HSL, and CMYK with palette shades.',
    category: 'utilities',
    iconName: 'Palette',
    tags: ['color', 'hex', 'rgb', 'hsl', 'cmyk', 'design']
  },
  {
    id: 'password-generator',
    name: 'Secure Password Generator',
    description: 'Generate cryptographically random passwords with custom symbols, numbers, and strength score.',
    category: 'utilities',
    iconName: 'Lock',
    isPopular: true,
    tags: ['password', 'security', 'generator', 'strong password']
  },
  {
    id: 'random-generator',
    name: 'Random Number Generator',
    description: 'Generate random numbers within custom minimum/maximum bounds, with optional sorting and no-duplicates.',
    category: 'utilities',
    iconName: 'Shuffle',
    tags: ['random', 'number', 'lottery', 'dice']
  },
  {
    id: 'timer-stopwatch',
    name: 'Focus Timer & Stopwatch',
    description: 'Interactive countdown focus timer with student study presets and precision stopwatch with lap split tracker.',
    category: 'utilities',
    iconName: 'Timer',
    isStudentPick: true,
    tags: ['timer', 'stopwatch', 'pomodoro', 'study timer', 'student']
  },

  // Image Tools
  {
    id: 'image-compressor',
    name: 'Client-Side Image Compressor',
    description: 'Compress PNG, JPG, and WebP images directly in your browser with real-time file size comparison.',
    category: 'image',
    iconName: 'ImageDown',
    isPopular: true,
    tags: ['compress', 'image', 'reduce size', 'jpeg', 'png']
  },
  {
    id: 'image-resizer',
    name: 'Image Resizer & Scaler',
    description: 'Resize image dimensions by custom pixels or percentage while maintaining original aspect ratios.',
    category: 'image',
    iconName: 'Maximize2',
    tags: ['resize', 'dimensions', 'aspect ratio', 'scale']
  },
  {
    id: 'image-converter',
    name: 'Image Format Converter (JPG / PNG / WebP)',
    description: 'Convert between JPG, PNG, and modern WebP formats in browser memory without uploading to servers.',
    category: 'image',
    iconName: 'RefreshCw',
    tags: ['jpg to png', 'png to jpg', 'webp converter', 'image']
  },
  {
    id: 'image-rotator',
    name: 'Image Rotator & Flipper',
    description: 'Rotate images 90°, 180°, 270° or flip horizontally and vertically with instant export.',
    category: 'image',
    iconName: 'RotateCw',
    tags: ['rotate', 'flip', 'orient', 'image editing']
  },
  {
    id: 'image-checker',
    name: 'Image Dimension & Info Checker',
    description: 'Inspect exact image pixel dimensions, file size, aspect ratio ratio, and MIME format instantly.',
    category: 'image',
    iconName: 'Search',
    tags: ['dimension', 'resolution', 'aspect ratio', 'metadata']
  },

  // PDF Tools
  {
    id: 'pdf-merger',
    name: 'PDF Merger (Client-Side)',
    description: 'Combine multiple PDF documents into a single document entirely on your computer using web assembly.',
    category: 'pdf',
    iconName: 'FileStack',
    isPopular: true,
    isStudentPick: true,
    tags: ['pdf', 'merge', 'combine', 'client-side', 'privacy']
  },
  {
    id: 'pdf-splitter',
    name: 'PDF Page Splitter & Extractor',
    description: 'Extract specific pages or page ranges from a PDF document securely in your browser.',
    category: 'pdf',
    iconName: 'Scissors',
    tags: ['pdf', 'split', 'extract pages', 'privacy']
  },
  {
    id: 'jpg-to-pdf',
    name: 'JPG / Images to PDF Converter',
    description: 'Package one or multiple photos into a clean, paginated PDF file ready for submission or printing.',
    category: 'pdf',
    iconName: 'FilePlus',
    isStudentPick: true,
    tags: ['jpg to pdf', 'images to pdf', 'document', 'student assignment']
  }
];

export const TOOL_CATEGORIES = [
  { id: 'text', name: 'Text Tools' },
  { id: 'developer', name: 'Developer Tools' },
  { id: 'calculator', name: 'Calculators' },
  { id: 'utility', name: 'Utilities' },
  { id: 'image', name: 'Image Tools' },
  { id: 'pdf', name: 'PDF Tools' },
];
