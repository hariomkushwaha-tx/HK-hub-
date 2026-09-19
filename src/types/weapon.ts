export interface EngineeringRecipe17 {
  problem: string;
  objective: string;
  scientificPrinciples: string[];
  systemRequirements: string[];
  systemArchitecture: string;
  majorSubsystems: { name: string; specs: string; function: string }[];
  engineeringDesignProcess: string;
  simulationAndModelling: { tool: string; method: string; focusArea: string }[];
  materialsAndManufacturing: string[];
  prototypeDevelopment: string;
  testingMethodology: { testName: string; procedure: string; criteria: string }[];
  failureAnalysis: string[];
  validation: string;
  qualityAssurance: string;
  maintenance: string;
  upgradePath: string;
  futureTechnology: string;
}

export interface LearningLevel {
  levelNumber: 1 | 2 | 3 | 4 | 5;
  levelName: string;
  focus: string;
  summary: string;
  keyConcepts: string[];
  technicalVocabulary: { term: string; meaning: string }[];
  learningCheck: { question: string; answer: string }[];
  safeProjectIdea: { title: string; description: string; expectedOutcome: string };
  furtherReading: string[];
}

export interface DefenceCaseStudy {
  programmeName: string;
  leadAgency: string;
  historicalBackground: string;
  researchProblem: string;
  technologyDevelopment: string;
  prototypeMilestone: string;
  testingMethod: string;
  evaluationResults: string;
  productionScale: string;
  deploymentStatus: string;
  upgradesAndRoadmap: string;
}

export interface SafePracticalProject {
  id: string;
  title: string;
  category: string;
  objective: string;
  requiredLearning: string[];
  systemArchitecture: string[];
  softwareOrSimulation: string;
  implementationConcept: string;
  testing: string[];
  expectedResult: string;
  troubleshooting: { issue: string; resolution: string }[];
  furtherImprovements: string[];
  interactiveSimulatorType?: 'uav-flight' | 'radar' | 'sensor-fusion' | 'control-loop' | 'digital-twin' | 'composite-stress' | 'telemetry' | 'generic';
}

export interface EducationalDiagram {
  id: string;
  title: string;
  type: 'lifecycle' | 'generic-arch' | 'aircraft' | 'radar' | 'sensor-fusion' | 'uav' | 'ai-pipeline' | 'control-loop' | 'digital-twin' | 'r-and-d-pipeline';
  description: string;
  nodes: { id: string; label: string; role: string; details: string }[];
  connections: { from: string; to: string; label?: string }[];
}

export interface WeaponChapter {
  id: string; // e.g. 'hw-ch-1'
  chapterNumber: number; // 1 to 75
  partNumber: number; // 1 to 10
  partTitle: string;
  title: string;
  subtitle: string;
  category: string;
  readTimeMinutes: number;
  badge?: string;

  // Structural sections
  introduction: string;
  engineeringContext: string;
  coreScientificPrinciples: string[];
  systemArchitecture: {
    title: string;
    description: string;
    subsystems: { name: string; function: string; engineeringNotes: string }[];
  };
  diagramPlaceholder: {
    title: string;
    caption: string;
    labels: string[];
  };
  indianProgrammesAndHistory?: {
    programmeName: string;
    organization: string;
    historicalContext: string;
    indigenousMilestone: string;
    publicSources: string[];
  };
  engineeringChallenges: string[];
  manufacturingAndQuality: string;
  keyTakeaways: string[];
  importantTerms: { term: string; definition: string }[];
  furtherLearning: { topic: string; referenceDoc: string }[];
  quiz: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];

  // Upgraded Engineering Recipe & Multi-level Framework
  engineeringRecipe?: EngineeringRecipe17;
  learningLevels?: LearningLevel[];
  caseStudy?: DefenceCaseStudy;
  safeProjects?: SafePracticalProject[];
  diagrams?: EducationalDiagram[];
}

export interface WeaponPart {
  partNumber: number;
  title: string;
  description: string;
  chaptersRange: string;
  icon: string;
}

export interface WeaponAccessSession {
  token: string;
  authenticatedAt: number;
  expiresAt: number;
  userEmail?: string;
}
