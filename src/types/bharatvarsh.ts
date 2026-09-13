export interface GreatPersonalityProfile {
  fullName: string;
  birthDeath: string;
  birthPlace: string;
  era: string;
  domain: string;
  earlyLife: string;
  education: string;
  majorEvents: string[];
  coreContributions: string[];
  achievements: string[];
  challenges: string[];
  historicalImpact: string;
  legacy: string;
  verifiedFacts: string[];
  importantTimeline: { year: string; event: string }[];
  primaryReferences: string[];
}

export interface BharatvarshQuizItem {
  id?: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface BharatvarshShortQuestion {
  q: string;
  a: string;
}

export interface BharatvarshChapter {
  id: string; // e.g. 'bv-ch-1'
  chapterNumber: number; // 1 to 160
  partNumber: number; // 1 to 18
  partTitle: string;
  title: string;
  subtitle: string;
  era: string;
  period: string; // e.g. "c. 2600 BCE – 1900 BCE"
  domain: 'civilization' | 'empire' | 'warrior' | 'scientist' | 'thinker' | 'culture' | 'freedom' | 'modern';
  status: 'Published' | 'Under Review' | 'Draft';
  lastUpdated: string;
  version: string;
  contributors: string[];

  // 19 Professional Format Sections
  coverBadge?: string;
  introduction: string;
  historicalContext: string;
  mainNarrative: string[];
  personalityProfile?: GreatPersonalityProfile;
  importantPeople: { name: string; role: string; contribution: string }[];
  majorEvents: { title: string; year: string; significance: string }[];
  societyAndCulture: string;
  politicsAndAdministration: string;
  economyScienceEducation: string;
  primaryEvidence: {
    archaeologicalSites?: string[];
    inscriptions?: string[];
    coins?: string[];
    texts?: string[];
  };
  timeline: { year: string; event: string }[];
  importantFacts: string[];
  mythVsHistory?: { myth: string; historicalEvidence: string }[];
  historicalDebate?: { topic: string; views: string; consensus?: string };
  keyTakeaways: string[];
  revisionSummary: string;
  quiz: BharatvarshQuizItem[];
  shortQuestions: BharatvarshShortQuestion[];
  references: string[];

  // User interaction metadata
  readTimeMinutes?: number;
  relatedChapterIds?: number[];
}

export interface BharatvarshPart {
  partNumber: number;
  romanNumeral: string;
  title: string;
  hindiTitle: string;
  eraRange: string;
  description: string;
  chapterRange: { start: number; end: number };
  chapterCount: number;
  iconName: string;
  accentColor: string;
}

export interface BharatvarshCorrectionLogItem {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  date: string;
  reportedIssue: string;
  actionTaken: string;
  sourceCited: string;
  updatedBy: string;
  version: string;
}

export interface BharatvarshUserNote {
  id: string;
  chapterNumber: number;
  text: string;
  selectedQuote?: string;
  createdAt: string;
}

export interface BharatvarshHighlight {
  id: string;
  chapterNumber: number;
  text: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
  createdAt: string;
}

export interface HistoricalCorrectionProposal {
  id: string;
  chapterNumber: number;
  topic: string;
  proposedText: string;
  sourceCitation: string;
  submittedBy: string;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'incorporated';
}
