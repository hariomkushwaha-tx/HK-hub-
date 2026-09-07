export type NavigationTab = 
  | 'home'
  | 'technology'
  | 'tech'
  | 'ai'
  | 'tools'
  | 'ebooks'
  | 'students'
  | 'coding'
  | 'guides'
  | 'updates'
  | 'projects'
  | 'myspace';

export type ToolCategory = 'text' | 'image' | 'pdf' | 'developer' | 'calculator' | 'calculators' | 'utility' | 'utilities';

export interface ToolItem {
  id: string;
  name: string;
  description: string;
  category: string;
  iconName: string;
  isPopular?: boolean;
  popular?: boolean;
  isStudentPick?: boolean;
  tags: string[];
}

export interface TechArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  readTime: string;
}

export interface TechCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  topics?: {
    title: string;
    description: string;
    tips: string[];
    troubleshooting?: { problem: string; solution: string }[];
  }[];
  articles: TechArticle[];
}

export interface GuideStep {
  title: string;
  description?: string;
  stepNumber?: number;
  details?: string;
  codeSnippet?: string;
  tip?: string;
}

export interface GuideItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  intro: string;
  steps: GuideStep[];
  proTips?: string[];
  warnings?: string[];
  lastUpdated?: string;
  relatedTools?: string[];
  faqs?: { question: string; answer: string }[];
  updatedAt?: string;
}

export interface AiTool {
  name: string;
  category: string;
  pricing: 'Free' | 'Freemium' | 'Paid' | string;
  description: string;
  keyFeatures?: string[];
  bestFor: string;
  rating?: number;
  website?: string;
  link?: string;
}

export type AiToolInfo = AiTool;

export interface CodingLesson {
  id: string;
  language: 'html' | 'css' | 'javascript' | 'python' | 'webdev' | string;
  title: string;
  description: string;
  codeSnippet?: string;
  explanation?: string;
  challenge?: string;
  starterCode?: string;
  solutionCode?: string;
  level?: string;
  content?: string;
  codeExample?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  authorName: string;
  authorUsername: string;
  authorAvatar?: string;
  category: 'Web App' | 'Mobile App' | 'AI Project' | 'Student Project' | 'Utility Tool' | 'Open Source' | 'Web' | 'AI' | 'Mobile' | 'Python' | 'DevTool' | 'IoT' | string;
  technologies: string[];
  demoUrl?: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  githubUrl?: string;
  likes: number;
  featured?: boolean;
  createdAt: string;
}

export type ProjectShowcaseItem = ProjectItem;

export interface TechUpdate {
  id: string;
  title: string;
  summary: string;
  category: 'Technology' | 'AI' | 'Apps' | 'Software' | 'Gadgets' | 'Web' | string;
  source: string;
  date: string;
  tag: string;
  readTime: string;
  highlights: string[];
}

export interface StudentResource {
  id: string;
  title: string;
  type: 'Guide' | 'Tool' | 'Cheatsheet' | 'Project Idea' | 'Roadmap';
  category: string;
  description: string;
  linkText: string;
  action: () => void;
  badge?: string;
}

export interface UserProfile {
  username: string;
  name?: string;
  fullName?: string;
  bio: string;
  role?: 'Student' | 'Developer' | 'Tech Learner' | 'Enthusiast' | string;
  skills: string[];
  interests?: string[];
  avatarUrl?: string;
  joinedDate?: string;
}

export interface EBookChapter {
  title: string;
  summary: string;
  keyPoints?: string[];
  codeSnippet?: string;
  audioUrl?: string;
  duration?: string;
}

export type BookType = 'E-Book' | 'Guide' | 'Handbook' | 'Tutorial' | 'Study Material' | 'Reference' | 'Audio Book';

export interface BookReview {
  id: string;
  bookId: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verifiedReader?: boolean;
}

export interface BookOrder {
  id: string;
  bookId: string;
  bookTitle: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Unlocked' | 'Refunded';
  transactionRef: string;
  paymentMethod: string;
}

export interface ReadingProgress {
  bookId: string;
  currentChapterIndex: number;
  currentChapterTitle: string;
  percentage: number;
  lastReadTime: string;
  totalChapters: number;
}

export interface AuthorProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  publishedBooksCount: number;
  verified: boolean;
  socialLinks?: { github?: string; twitter?: string; website?: string };
}

export interface EBookItem {
  id: string;
  title: string;
  subtitle?: string;
  slug?: string;
  author: string;
  authorId?: string;
  authorBio?: string;
  publisher?: string;
  description: string;
  shortDescription?: string;
  coverImage?: string;
  coverGradient: string;
  category: string;
  subcategory?: string;
  genre?: string;
  bookType?: BookType;
  pages: number;
  format: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  rating: number;
  reviewCount?: number;
  badge?: string;
  downloadUrl: string;
  readOnlineUrl: string;
  tags: string[];
  topics?: string[];
  language?: string;
  featured?: boolean;
  trending?: boolean;
  isNewRelease?: boolean;
  studentPick?: boolean;
  dealOfTheDay?: boolean;
  hasAudioBook?: boolean;
  narrator?: string;
  audioDuration?: string;
  yearPublished?: string;
  updatedDate?: string;
  isbn?: string;
  price: number; // 0 for free, or ₹29, ₹49, ₹99, ₹149, ₹299, ₹499, ₹999 etc
  originalPrice?: number;
  discountPercentage?: number;
  isFree: boolean;
  copyrightStatus?: 'Open Access / Creative Commons' | 'Public Domain' | 'Authorized Academic Release' | 'HK HUB Exclusive' | string;
  whatYoullLearn?: string[];
  tableOfContents: string[];
  chaptersPreview: EBookChapter[];
  studyNotes: string[];
  reviews?: BookReview[];
}

