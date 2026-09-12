import { EBookChapter, EBookItem } from '../types';
import { resolveTopicContent } from './ebooksSubjectPools';

export interface EnrichedChapter extends EBookChapter {
  chapterNumber: number;
  readTime: string;
  coreConcepts: string[];
  detailedNotes?: string[];
  vivaQuestions?: { q: string; a: string }[];
  quiz?: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
}

export type BookSubjectDomain =
  | 'literature-hindi'
  | 'literature-english'
  | 'academics-science'
  | 'academics-physics'
  | 'academics-chemistry'
  | 'academics-biology'
  | 'academics-math'
  | 'academics-social'
  | 'competitive-exams'
  | 'business-life'
  | 'puzzles-logic'
  | 'tech-dsa'
  | 'tech-python'
  | 'tech-web'
  | 'tech-ai'
  | 'tech-cyber'
  | 'tech-systems';

export function detectBookDomain(book: EBookItem, chapterTitle: string = ''): BookSubjectDomain {
  const cat = (book.category || '').toLowerCase();
  const title = (book.title || '').toLowerCase();
  const desc = (book.description || '').toLowerCase();
  const tags = (book.tags || []).map(t => t.toLowerCase());
  const ch = (chapterTitle || '').toLowerCase();
  const combined = `${title} ${desc} ${tags.join(' ')} ${ch}`;

  // 1. Puzzles & Logic
  if (
    cat.includes('puzzles') ||
    title.includes('पहेलियाँ') ||
    title.includes('riddle') ||
    title.includes('brain teaser') ||
    title.includes('chess') ||
    title.includes('सुडोकू') ||
    combined.includes('lateral thinking') ||
    title.includes('विक्रम और बेताल')
  ) {
    return 'puzzles-logic';
  }

  // 2. Tech: AI & Machine Learning
  if (
    cat.includes('artificial intelligence') ||
    tags.includes('ai') ||
    tags.includes('llm') ||
    combined.includes('generative ai') ||
    combined.includes('prompt engineering') ||
    combined.includes('machine learning') ||
    combined.includes('deep learning') ||
    combined.includes('data science') ||
    combined.includes('rag architecture') ||
    combined.includes('transformer')
  ) {
    return 'tech-ai';
  }

  // 3. Tech: Web Development
  if (
    cat.includes('web development') ||
    tags.includes('frontend') ||
    tags.includes('fullstack') ||
    title.includes('web developer') ||
    title.includes('react') ||
    title.includes('next.js') ||
    title.includes('html & css') ||
    title.includes('typescript') ||
    title.includes('javascript') ||
    title.includes('tailwind')
  ) {
    return 'tech-web';
  }

  // 4. Tech: Cybersecurity
  if (
    cat.includes('cybersecurity') ||
    tags.includes('security') ||
    title.includes('ethical hacking') ||
    title.includes('cybersecurity') ||
    combined.includes('penetration testing') ||
    combined.includes('owasp') ||
    combined.includes('zero-trust')
  ) {
    return 'tech-cyber';
  }

  // 5. Tech: Python & Scripting
  if (
    (tags.includes('python') || title.includes('python')) &&
    !combined.includes('data science') &&
    !combined.includes('machine learning')
  ) {
    return 'tech-python';
  }

  // 6. Tech: DSA
  if (
    tags.includes('dsa') ||
    title.includes('data structures') ||
    title.includes('algorithms') ||
    title.includes('leetcode')
  ) {
    return 'tech-dsa';
  }

  // 7. Tech: Systems, Mobile, Cloud, DevOps, Database, IT
  if (
    cat.includes('coding') ||
    cat.includes('programming') ||
    cat.includes('computers') ||
    cat.includes('cloud') ||
    cat.includes('smartphone') ||
    cat.includes('mobile') ||
    title.includes('docker') ||
    title.includes('kubernetes') ||
    title.includes('devops') ||
    title.includes('operating system') ||
    title.includes('computer network') ||
    title.includes('database') ||
    title.includes('sql') ||
    title.includes('postgresql') ||
    title.includes('linux') ||
    title.includes('bash') ||
    title.includes('rust') ||
    title.includes('c & c++') ||
    title.includes('java ') ||
    title.includes('flutter') ||
    title.includes('react native') ||
    title.includes('git & github') ||
    title.includes('information technology') ||
    title.includes('skill subject 402') ||
    title.includes('api documentation') ||
    combined.includes('cloud computing')
  ) {
    return 'tech-systems';
  }

  // 8. Social Science & Humanities
  if (
    title.includes('social science') ||
    title.includes('सामाजिक विज्ञान') ||
    title.includes('history') ||
    title.includes('इतिहास') ||
    title.includes('geography') ||
    title.includes('भूगोल') ||
    title.includes('political science') ||
    title.includes('राजनीति') ||
    title.includes('civics') ||
    title.includes('संविधान') ||
    title.includes('constitution') ||
    title.includes('economics') ||
    title.includes('अर्थशास्त्र') ||
    title.includes('वीर गाथा') ||
    title.includes('biographies') ||
    title.includes('शिवाजी') ||
    title.includes('सुभाष चंद्र बोस') ||
    title.includes('सरदार पटेल') ||
    title.includes('वल्लभभाई') ||
    title.includes('चंद्रगुप्त') ||
    title.includes('सम्राट अशोक') ||
    title.includes('मौर्य') ||
    title.includes('कुशवाहा') ||
    title.includes('स्वर्णिम') ||
    title.includes('महाराणा प्रताप') ||
    title.includes('विजयनगर') ||
    title.includes('चोल') ||
    title.includes('pedagogy') ||
    title.includes('cdp')
  ) {
    return 'academics-social';
  }

  // 8b. Stories, Literature & Indian Philosophy / Classics
  if (
    cat.includes('stories') ||
    cat.includes('literature') ||
    title.includes('विवेकानंद') ||
    title.includes('कबीर') ||
    title.includes('चाणक्य') ||
    title.includes('गीता') ||
    title.includes('भगवद्गीता') ||
    title.includes('भर्तृहरि') ||
    title.includes('रहीम') ||
    title.includes('हितोपदेश') ||
    title.includes('प्रेमचंद') ||
    title.includes('पंचतंत्र') ||
    title.includes('दोहा') ||
    title.includes('दोहे') ||
    title.includes('शेर') ||
    title.includes('गुलदस्ता') ||
    title.includes('अकबर-बीरबल') ||
    title.includes('तेनालीराम') ||
    title.includes('सुभाषित') ||
    title.includes('गोदान') ||
    title.includes('गबन') ||
    title.includes('ईदगाह') ||
    title.includes('कफ़न')
  ) {
    if (
      title.includes('english') ||
      title.includes('sherlock') ||
      title.includes('jungle book') ||
      title.includes('time machine') ||
      title.includes('wells') ||
      title.includes('conan doyle')
    ) {
      return 'literature-english';
    }
    return 'literature-hindi';
  }

  // 8c. Competitive Exams (UPSC, SSC, Banking, CSAT)
  if (
    cat.includes('competitive') ||
    tags.includes('upsc') ||
    tags.includes('ssc') ||
    title.includes('upsc') ||
    title.includes('ssc cgl') ||
    title.includes('csat')
  ) {
    if (title.includes('math') || title.includes('गणित') || title.includes('geometry') || title.includes('algebra') || title.includes('vedic')) {
      return 'academics-math';
    }
    if (title.includes('environment') || title.includes('पर्यावरण') || title.includes('ecology') || title.includes('पारिस्थितिकी')) {
      return 'academics-science';
    }
    if (title.includes('general science') || title.includes('सामान्य विज्ञान')) {
      if (ch.includes('cell') || ch.includes('plant') || ch.includes('biology') || ch.includes('hormone') || ch.includes('genetics') || ch.includes('organ') || ch.includes('human') || ch.includes('जीव विज्ञान')) {
        return 'academics-biology';
      }
      if (ch.includes('periodic') || ch.includes('acid') || ch.includes('base') || ch.includes('metal') || ch.includes('chemical') || ch.includes('रसायन')) {
        return 'academics-chemistry';
      }
      if (ch.includes('motion') || ch.includes('light') || ch.includes('electric') || ch.includes('current') || ch.includes('gravitation') || ch.includes('work') || ch.includes('sound') || ch.includes('भौतिक')) {
        return 'academics-physics';
      }
      return 'academics-science';
    }
    return 'competitive-exams';
  }

  // 8d. Business, Investing & Personal Finance
  if (
    cat.includes('business') ||
    cat.includes('self-help') ||
    title.includes('personal finance') ||
    title.includes('investing') ||
    title.includes('बजटिंग') ||
    title.includes('वित्तीय')
  ) {
    return 'business-life';
  }

  // 9a. Specific Science Chapter Checks (High Priority before general math/science)
  const isTechBook = cat.includes('coding') || cat.includes('programming') || title.includes('rust') || title.includes('python') || title.includes('web developer') || title.includes('c++') || title.includes('java ') || title.includes('docker');

  if (!isTechBook) {
    // 9b. Science: Physics chapters
    if (
      title.includes('physics') ||
      title.includes('भौतिक') ||
      title.includes('gravitation') ||
      title.includes('गुरुत्वाकर्षण') ||
      ch.includes('light') ||
      ch.includes('प्रकाश') ||
      ch.includes('reflection') ||
      ch.includes('refraction') ||
      ch.includes('परावर्तन') ||
      ch.includes('अपवर्तन') ||
      ch.includes('electricity') ||
      ch.includes('circuits') ||
      ch.includes('विद्युत') ||
      ch.includes('current') ||
      ch.includes('motion') ||
      ch.includes(' गति ') ||
      ch.startsWith('गति ') ||
      ch.includes('गति के') ||
      ch.includes('चाल और गति') ||
      ch.includes('सरल रेखा में गति') ||
      ch.includes('वृत्तीय गति') ||
      ch.includes('optics') ||
      ch.includes('lens') ||
      ch.includes('लेंस') ||
      ch.includes('mirror') ||
      ch.includes('दर्पण') ||
      ch.includes('magnetic') ||
      ch.includes('magnet') ||
      ch.includes('चुंबक') ||
      ch.includes('sound') ||
      ch.includes('ध्वनि') ||
      ch.includes('wave') ||
      ch.includes('तरंग') ||
      ch.includes('ohm') ||
      ch.includes('resistance') ||
      ch.includes('प्रतिरोध')
    ) {
      return 'academics-physics';
    }

    // 9c. Science: Chemistry chapters
    if (
      title.includes('chemistry') ||
      title.includes('रसायन') ||
      combined.includes('chemical reaction') ||
      combined.includes('रासायनिक अभिक्रिया') ||
      ch.includes('acid') ||
      ch.includes('अम्ल') ||
      ch.includes('base') ||
      ch.includes('क्षार') ||
      ch.includes('metal') ||
      ch.includes('non-metal') ||
      ch.includes('धातु') ||
      ch.includes('अधातु') ||
      ch.includes('carbon') ||
      ch.includes('कार्बन') ||
      ch.includes('periodic') ||
      ch.includes('आवर्त सारणी') ||
      ch.includes('electrochemistry') ||
      ch.includes('विद्युत रसायन') ||
      ch.includes('solution') ||
      ch.includes('विलयन') ||
      ch.includes('chemical')
    ) {
      return 'academics-chemistry';
    }

    // 9d. Science: Biology chapters
    if (
      title.includes('biology') ||
      title.includes('जीव विज्ञान') ||
      title.includes('zoology') ||
      title.includes('botany') ||
      title.includes('neet biology') ||
      combined.includes('human physiology') ||
      combined.includes('cell biology') ||
      ch.includes('cell biology') ||
      ch.includes('plant cell') ||
      ch.includes('animal cell') ||
      ch.includes('कोशिका') ||
      ch.includes('dna') ||
      ch.includes('reproduction') ||
      ch.includes('जनन') ||
      ch.includes('photosynthesis') ||
      ch.includes('प्रकाश संश्लेषण') ||
      ch.includes('life process') ||
      ch.includes('जैव प्रक्रम') ||
      ch.includes('heredity') ||
      ch.includes('आनुवंशिकता') ||
      ch.includes('tissue') ||
      ch.includes('ऊतक')
    ) {
      return 'academics-biology';
    }
  }

  // 10. Mathematics
  if (
    (cat === 'mathematics' || (cat.includes('mathematics') && !cat.includes('science'))) ||
    (!title.includes('science') && (
      title.includes('गणित') ||
      title.includes('mathematics') ||
      title.includes('math') ||
      title.includes('speed math') ||
      title.includes('vedic math') ||
      title.includes('quantitative aptitude') ||
      title.includes('algebra') ||
      title.includes('trigonometry') ||
      title.includes('calculus') ||
      title.includes('geometry') ||
      title.includes('संख्या पद्धति')
    )) ||
    ch.includes('संख्या पद्धति') ||
    ch.includes('algebra') ||
    ch.includes('geometry') ||
    ch.includes('trigonometry') ||
    ch.includes('calculus') ||
    ch.includes('बीजगणित') ||
    ch.includes('ज्यामिति') ||
    ch.includes('त्रिकोणमिति') ||
    ch.includes('समांतर श्रेढ़ी') ||
    ch.includes('द्विघात समीकरण') ||
    ch.includes('प्रायिकता') ||
    ch.includes('सांख्यिकी')
  ) {
    return 'academics-math';
  }

  // 10d. Science: General Science & Lab
  if (
    cat.includes('science') ||
    title.includes('विज्ञान') ||
    title.includes('general science') ||
    title.includes('lab manual') ||
    title.includes('viva voce') ||
    title.includes('scientists')
  ) {
    return 'academics-science';
  }

  // 11. Business, Commerce, Accounts, Career & Self-Help
  if (
    cat.includes('business') ||
    cat.includes('self-help') ||
    cat.includes('digital skills') ||
    title.includes('accountancy') ||
    title.includes('लेखांकन') ||
    title.includes('business studies') ||
    title.includes('व्यवसाय') ||
    title.includes('finance') ||
    title.includes('budgeting') ||
    title.includes('money') ||
    title.includes('investing') ||
    title.includes('freelancing') ||
    title.includes('career') ||
    title.includes('habits') ||
    title.includes('focus') ||
    title.includes('public speaking') ||
    title.includes('digital marketing') ||
    title.includes('seo') ||
    title.includes('excel') ||
    title.includes('sheets') ||
    title.includes('income tax') ||
    title.includes('startup')
  ) {
    return 'business-life';
  }

  // 12. Competitive Exams
  if (
    cat.includes('competitive') ||
    cat.includes('general knowledge') ||
    tags.includes('upsc') ||
    tags.includes('ssc') ||
    tags.includes('banking') ||
    title.includes('gk') ||
    title.includes('सामान्य ज्ञान') ||
    title.includes('reasoning') ||
    title.includes('economy') ||
    title.includes('environment') ||
    title.includes('biodiversity')
  ) {
    return 'competitive-exams';
  }

  // 13. English Literature & Communication
  if (
    title.includes('english') ||
    title.includes('beehive') ||
    title.includes('moments') ||
    title.includes('first flight') ||
    title.includes('footprints') ||
    title.includes('vistas') ||
    title.includes('flamingo') ||
    title.includes('sherlock') ||
    title.includes('jungle book') ||
    title.includes('time machine') ||
    title.includes('rudyard') ||
    title.includes('wells') ||
    title.includes('conan doyle')
  ) {
    return 'literature-english';
  }

  // 14. Hindi Literature & Stories (Default)
  return 'literature-hindi';
}

/**
 * Generates an in-depth, subject-accurate chapter study guide for any book and chapter title
 * Authored by Hariom Kushwaha (HK Tech World)
 */
export function getChapterDetails(book: EBookItem, chapterIndex: number): EnrichedChapter {
  const toc = book.tableOfContents || [];
  const rawChapterTitle = toc[chapterIndex] || `Chapter ${chapterIndex + 1}`;
  const cleanTitle = rawChapterTitle
    .replace(/^(?:अध्याय|Chapter|पाठ)\s*\d+[:.\-\s]*/i, '')
    .replace(/^\d+[:.\-\s]+/, '')
    .trim();
  const domain = detectBookDomain(book, cleanTitle);
  const curated = resolveTopicContent(cleanTitle, book.title, domain);

  // Check if there is an explicit preview matching this chapter index or title
  const previews = book.chaptersPreview || [];
  const explicitPreview = previews.find(
    ch => (ch.title && cleanTitle && ch.title.toLowerCase().includes(cleanTitle.toLowerCase())) ||
          (ch.title && ch.title.toLowerCase().includes(`chapter ${chapterIndex + 1}:`))
  ) || (previews[chapterIndex] && previews[chapterIndex].title && previews[chapterIndex].title.includes(cleanTitle) ? previews[chapterIndex] : null);

  const isHindiSubject =
    domain === 'literature-hindi' ||
    domain === 'academics-social' ||
    domain === 'academics-math' ||
    domain === 'academics-science' ||
    domain === 'academics-physics' ||
    domain === 'academics-chemistry' ||
    domain === 'academics-biology';

  if (explicitPreview) {
    const core = getCuratedCoreConcepts(cleanTitle, domain);
    const keyPts = (explicitPreview.keyPoints && explicitPreview.keyPoints.length > 0)
      ? explicitPreview.keyPoints
      : (curated?.keyPoints || getDefaultKeyPoints(cleanTitle, domain));
    const detailedNotes = generateDetailedNotes(cleanTitle, domain, book.title);
    const { viva, quiz } = getTopicSpecificVivaAndQuiz(cleanTitle, domain, book.title);

    return {
      chapterNumber: chapterIndex + 1,
      title: explicitPreview.title.includes('Chapter') || explicitPreview.title.includes('अध्याय') 
        ? explicitPreview.title 
        : (isHindiSubject ? `अध्याय ${chapterIndex + 1}: ${cleanTitle}` : `Chapter ${chapterIndex + 1}: ${cleanTitle}`),
      summary: explicitPreview.summary,
      readTime: '12-15 min read',
      keyPoints: keyPts,
      coreConcepts: core,
      detailedNotes: detailedNotes,
      codeSnippet: explicitPreview.codeSnippet || curated?.referenceSnippet || getDomainReferenceSnippet(cleanTitle, domain),
      vivaQuestions: (curated?.viva && curated.viva.length > 0) ? curated.viva : viva,
      quiz: (curated?.quiz && curated.quiz.length > 0) ? curated.quiz : quiz
    };
  }

  // Otherwise generate domain-specific high quality chapter study guide
  return generateDomainChapter(book, chapterIndex, cleanTitle, domain);
}

function getCuratedCoreConcepts(cleanTitle: string, domain: BookSubjectDomain): string[] {
  switch (domain) {
    case 'literature-hindi':
      return [
        'पाठ सार व केंद्रीय भाव (Core Theme)',
        'प्रमुख पात्र एवं चरित्र-चित्रण (Character Study)',
        'महत्वपूर्ण गद्यांश / काव्यांश सप्रसंग व्याख्या',
        'बोर्ड परीक्षा महत्वपूर्ण प्रश्नोत्तर (Board Exam Q&A)'
      ];
    case 'literature-english':
      return [
        'Central Theme & Summary',
        'Character Analysis & Tone',
        'Literary Devices & Vocabulary',
        'Board Exam High-Yield Long Answers'
      ];
    case 'academics-math':
      return [
        'मूल प्रमेय व सर्वसमिकाएं (Theorems & Formulas)',
        'चरणबद्ध हल प्रविधि (Step-by-Step Proofs)',
        'आम गणना त्रुटियाँ (Common Calculation Pitfalls)',
        'बोर्ड परीक्षा हॉट्स प्रश्न (HOTS Practice)'
      ];
    case 'academics-physics':
      return [
        'भौतिक नियम व आधारभूत समीकरण (Laws & Formulas)',
        'किरण व परिपथ आरेख (Ray & Circuit Diagrams)',
        'संख्यात्मक प्रश्नों की चरणबद्ध विधि (Numerical Solving)',
        'प्रैक्टिकल लैब वाइवा प्रश्न (Lab Viva Questions)'
      ];
    case 'academics-chemistry':
      return [
        'रासायनिक समीकरण व संतुलन (Balanced Equations)',
        'आणविक संरचना व रासायनिक आबंध (Molecular Bonding)',
        'प्रयोगशाला परीक्षण व रंग परिवर्तन (Lab Observations)',
        'बोर्ड परीक्षा महत्वपूर्ण अभिक्रियाएं व गुणधर्म'
      ];
    case 'academics-biology':
      return [
        'शारीरिक क्रियाएं व जैव चक्र (Physiological Cycles)',
        'स्वच्छ नामांकित आरेख (Well-Labeled Diagrams)',
        'कोशिकीय क्रियाविधि व आनुवंशिकी (Cell & Genetics)',
        'प्रायोगिक स्लाइड अध्ययन एवं वाइवा प्रश्न'
      ];
    case 'academics-science':
      return [
        'वैज्ञानिक सिद्धांत व परिभाषाएं (Core Laws & Definitions)',
        'दैनिक जीवन में प्रायोगिक अनुप्रयोग (Real-World Applications)',
        'महत्वपूर्ण सूत्र व SI मात्रक (Units & Formulas)',
        'प्रैक्टिकल वाइवा एवं बोर्ड परीक्षा प्रश्न'
      ];
    case 'academics-social':
      return [
        'ऐतिहासिक एवं भौगोलिक पृष्ठभूमि (Context & Timeline)',
        'संवैधानिक व आर्थिक प्रभाव (Constitutional & Economic Impact)',
        'मुख्य तिथियां व मानचित्र कार्य (Dates & Map Work)',
        'बोर्ड परीक्षा दीर्घ उत्तरीय प्रश्न (Long Answer Mastery)'
      ];
    case 'competitive-exams':
      return [
        'प्रीलिम्स फैक्ट्स एवं वन-लाइनर (High-Yield MCQs)',
        'मेन्स विश्लेषणात्मक दृष्टिकोण (Analytical Depth)',
        'समसामयिक घटनाक्रम जुड़ाव (Current Affairs Linkage)',
        'प्रीवियस इयर्स पेपर्स (PYQ Trend Analysis)'
      ];
    case 'business-life':
      return [
        'व्यावहारिक जीवन सिद्धांत (Core Life Principles)',
        'वास्तविक केस स्टडी (Case Study Breakdown)',
        'दैनिक आदत निर्माण (Actionable Micro-Habits)',
        'वित्तीय व व्यक्तिगत निर्णय क्षमता'
      ];
    case 'puzzles-logic':
      return [
        'तार्किक विश्लेषण व पैटर्न (Pattern Recognition)',
        'शॉर्टकट ट्रिक्स व समय प्रबंधन (Speed Solving)',
        'कॉमन ट्रैप्स व एलिमिनेशन तकनीक (Trap Elimination)',
        'ब्रेन टीज़र एवं एप्टीट्यूड अभ्यास'
      ];
    case 'tech-ai':
      return [
        'Transformer & Attention Intuition',
        'Vector Embeddings & Cosine Distance',
        'RAG Pipeline & Production Grounding',
        'Prompt Optimization & Hallucination Defense'
      ];
    case 'tech-web':
      return [
        'Reactive State Architecture (UI = f(State))',
        'DOM Hydration & Component Lifecycle',
        'Async Event Loop & 60 FPS Optimization',
        'Production Frontend Error Boundaries'
      ];
    case 'tech-cyber':
      return [
        'Zero-Trust Architecture & Threat Modeling',
        'OWASP Top 10 Vulnerabilities & Mitigations',
        'Defensive Input Sanitization & CSP',
        'Cryptographic Invariants & Secure Auth'
      ];
    case 'tech-python':
      return [
        'Pythonic Idioms & Clean PEP 8 Code',
        'Automated Workflow Engineering',
        'Defensive Exception Handling',
        'Memory-Safe Iterators & Generators'
      ];
    case 'tech-dsa':
      return [
        'Algorithmic Intuition & Real-World Analogy',
        'Time & Space Complexity Bounds (Big-O)',
        'Boundary Cases & Edge Conditions',
        'Technical Placement Interview Questions'
      ];
    case 'tech-systems':
    default:
      return [
        'System Architecture & Core Mechanics',
        'Scalability & Concurrency Trade-offs',
        'Memory Footprint & Resource Management',
        'Production Placement Viva Questions'
      ];
  }
}

function getDefaultKeyPoints(cleanTitle: string, domain: BookSubjectDomain): string[] {
  switch (domain) {
    case 'literature-hindi':
      return [
        `पाठ का मूल संदेश: "${cleanTitle}" हमें मानवीय संवेदना, सामाजिक उत्तरदायित्व और आत्म-सम्मान का बोध कराता है।`,
        `पात्रों का विश्लेषण: मुख्य पात्रों के आचरण और विचारों के माध्यम से लेखक समाज की यथार्थ परिस्थितियों पर गहरा प्रकाश डालते हैं।`,
        `भाषा शैली: सहज, प्रभावोत्पादक भाषा, सटीक मुहावरों और प्रतीकात्मक बिंबों का प्रयोग कर भावों को सजीव बनाया गया है।`,
        `बोर्ड परीक्षा टिप: लेखक का नाम, संदर्भ, प्रसंग और विशेष (काव्यगत/गद्यगत सौंदर्य) को अलग-अलग बिंदुओं में लिखने पर पूरे अंक मिलते हैं।`
      ];
    case 'literature-english':
      return [
        `Central Theme: "${cleanTitle}" explores human emotions, individual integrity, and perseverance against formidable odds.`,
        `Literary Devices: The author employs deliberate metaphors, tone shifts, and authentic imagery to amplify the underlying conflict.`,
        `Character Arc: Characters undergo psychological transformation through moral dilemmas and choices.`,
        `Board Exam Strategy: Support all qualitative claims with textual references and direct character dialogue evidence.`
      ];
    case 'academics-math':
      return [
        `मूल सिद्धांत: "${cleanTitle}" में प्रत्येक निष्कर्ष ठोस गणितीय परिभाषाओं, बीजगणितीय सर्वसमिकाओं और ज्यामितीय प्रमेयों पर आधारित है।`,
        `गणना में सावधानी: चिन्हों (+ व -), कोष्ठक (brackets) और इकाई रूपांतरण (Units) पर विशेष ध्यान दें ताकि सिली मिस्टेक न हो।`,
        `चरणबद्ध हल (Step-Marking): प्रश्न में 'दिया है', 'ज्ञात करना है', 'प्रयुक्त सूत्र', 'गणना' और 'अंतिम उत्तर मात्रक सहित' अवश्य लिखें।`,
        `परीक्षा टिप: कठिन गणना वाले प्रश्नों को अंत के लिए रखें और पहले सीधे फॉर्मूला-आधारित प्रश्नों को सटीक रूप से हल करें।`
      ];
    case 'academics-physics':
      return [
        `मूल भौतिक सिद्धांत: "${cleanTitle}" में सभी निष्कर्ष प्रयोगों, संरक्षण नियमों (ऊर्जा, संवेग, आवेश) और गणितीय संबंधों पर आधारित हैं।`,
        `मात्रक एवं सदिश दिशा: भौतिकी के प्रश्नों में मानों को मानक SI मात्रक (MKS प्रणाली) में लिखना और सदिश राशियों में दिशा का ध्यान रखना अनिवार्य है।`,
        `संख्यात्मक हल रणनीति: आंकिक प्रश्नों में 'दिया है', 'ज्ञात करना है', 'प्रयुक्त सूत्र' और 'गणना' को अलग-अलग पंक्तियों में प्रस्तुत करें।`
      ];
    case 'academics-chemistry':
      return [
        `रासायनिक संकल्पना: "${cleanTitle}" में परमाणुओं, संयोजकता, इलेक्ट्रॉनिक विन्यास और रासायनिक अभिक्रियाओं के सटीक नियमों का अध्ययन किया जाता है।`,
        `संतुलित समीकरण: रासायनिक समीकरणों में द्रव्यमान संरक्षण के नियम का पालन करें तथा अभिकारकों व उत्पादों की भौतिक अवस्थाएं (s, l, g, aq) अवश्य दर्शाएं।`,
        `प्रयोगशाला परीक्षण: विशिष्ट अभिकारकों द्वारा गैस निष्कासन (जैसे CO₂, H₂), अवक्षेप निर्माण और लिटमस रंग परिवर्तन को उत्तर में रेखांकित करें।`
      ];
    case 'academics-biology':
      return [
        `जैविक संकल्पना: "${cleanTitle}" सजीवों की जटिल शारीरिक क्रियाओं, कोशिकीय संरचना और पारिस्थितिक संतुलन का व्यवस्थित अध्ययन कराता है।`,
        `नामांकित चित्र: जीव विज्ञान में एक स्पष्ट, स्वच्छ और सही नामांकित आरेख (Well-labeled diagram) उत्तर को प्रामाणिक बनाकर सर्वोच्च अंक दिलाता है।`,
        `वैज्ञानिक शब्दावली: मुख्य जैविक शब्दों (जैसे माइटोकॉन्ड्रिया, नेफ्रॉन, जाइलम, ATP) का सही वर्तनी के साथ सटीक संदर्भ में उपयोग करें।`
      ];
    case 'academics-science':
      return [
        `वैज्ञानिक संकल्पना: "${cleanTitle}" में प्राकृतिक नियमों का अवलोकन, सैद्धांतिक व्याख्या और गणितीय संबंधों का सटीक समन्वय है।`,
        `समीकरण व मात्रक: रासायनिक समीकरणों को संतुलित रूप में लिखें तथा भौतिक राशियों के मान हमेशा मानक SI मात्रक में व्यक्त करें।`,
        `चित्र व आरेख: स्वच्छ, स्पष्ट और नामांकित (well-labeled) चित्र बनाने से विज्ञान में परीक्षक से सर्वोच्च अंक प्राप्त होते हैं।`
      ];
    case 'academics-social':
      return [
        `ऐतिहासिक/भौगोलिक संदर्भ: "${cleanTitle}" समाज, भूगोल, संविधान और अर्थव्यवस्था के अंतर्संबंधों को तथ्यात्मक रूप से स्पष्ट करता है।`,
        `महत्वपूर्ण तिथियां व अनुच्छेद: प्रमुख घटनाओं के वर्ष, संधियां, संवैधानिक धाराएं और भौगोलिक विशेषताओं को उत्तर में रेखांकित करें।`,
        `मानचित्र एवं फ्लोचार्ट: 5 अंक वाले प्रश्नों में बुलेट प्वाइंट्स, फ्लोचार्ट और संबंधित मानचित्र कार्य से उत्तर की प्रामाणिकता बढ़ती है।`
      ];
    case 'competitive-exams':
      return [
        `परीक्षा ट्रेंड: "${cleanTitle}" से प्रतियोगी परीक्षाओं (UPSC, SSC, State PCS) में विश्लेषणात्मक व तथ्यात्मक दोनों प्रकार के प्रश्न पूछे जाते हैं।`,
        `एलिमिनेशन तकनीक: चार विकल्पों में से 2 असंगत विकल्पों को पहले छांटें, फिर सर्वाधिक तार्किक विकल्प का चयन करें।`,
        `रिवीजन फॉर्मूला: पिछले 10 वर्षों के हल प्रश्नपत्रों (PYQs) और शॉर्ट बुलेट नोट्स का बार-बार पुनरावलोकन करें।`
      ];
    case 'business-life':
      return [
        `व्यावहारिक सिद्धांत: "${cleanTitle}" दीर्घकालिक मूल्य निर्माण, अनुशासित निर्णय और वित्तीय समझ पर केंद्रित है।`,
        `आदत व क्रियान्वयन: केवल पढ़ने से बदलाव नहीं आता; सिद्धांतों को छोटे दैनिक लक्ष्यों (Micro-habits) में तुरंत लागू करें।`,
        `जोखिम प्रबंधन: भावनाओं में बहकर निर्णय लेने के बजाय डेटा, तर्क और परखे हुए जोखिम (Calculated Risk) पर भरोसा रखें।`
      ];
    case 'puzzles-logic':
      return [
        `तार्किक दृष्टिकोण: "${cleanTitle}" में समस्या को छोटे घटकों में तोड़कर उलटी दिशा (Backward Reasoning) में सोचना सबसे प्रभावी है।`,
        `झांसे (Traps) से बचाव: जो उत्तर पहली नज़र में सबसे सरल दिखता है, उसमें अक्सर छिपी शर्तें (Constraints) होती हैं।`,
        `अभ्यास लाभ: तार्किक पहेलियां मस्तिष्क की समस्या-समाधान गति, एकाग्रता और निर्णय लेने की तीक्ष्णता को कई गुना बढ़ाती हैं।`
      ];
    case 'tech-ai':
      return [
        `Architectural Paradigm: "${cleanTitle}" hinges on transformer self-attention, tensor operations, and probabilistic token inference.`,
        `Production RAG Pipeline: Vector chunking, hybrid keyword + semantic retrieval, and reranking mitigate generative hallucinations.`,
        `Operational Safety: Implement guardrails, prompt boundary defense, and deterministic token limits in production APIs.`
      ];
    case 'tech-web':
      return [
        `Declarative State: In "${cleanTitle}", UI is a pure projection of state. Avoid direct DOM tampering and enforce unidirectional data flow.`,
        `Rendering Performance: Minimize unnecessary component re-renders through stable callbacks, memoization, and optimal DOM virtualization.`,
        `Defensive Engineering: Wrap critical component boundaries in ErrorBoundaries to prevent entire client-side tree crashes.`
      ];
    case 'tech-cyber':
      return [
        `Zero Trust Mantra: Never trust, always verify. Every request in "${cleanTitle}" must undergo strict authentication and authorization.`,
        `Input Sanitization: Parameterize all database queries, enforce Content Security Policy (CSP), and encode contextual outputs against XSS.`,
        `Cryptographic Integrity: Employ salt-hashed passwords (bcrypt/Argon2) and modern TLS 1.3 ciphers for all data in transit.`
      ];
    case 'tech-python':
      return [
        `Pythonic Idioms: Leverage list/dict comprehensions, context managers (with statements), and generator expressions for memory efficiency.`,
        `Type Hints & PEP 8: Write self-documenting code using explicit type annotations and strict exception handling.`,
        `Performance Optimization: Use built-in C-accelerated modules and avoid quadratic nested loops over massive collections.`
      ];
    case 'tech-dsa':
      return [
        `Complexity Constraints: Always compute Time (O) and Auxiliary Space (O) before writing code for "${cleanTitle}".`,
        `Edge Case Mastery: Test against empty inputs, single-element collections, duplicate values, and integer boundary limits.`,
        `Interview Communication: Explain your brute-force approach first, analyze its bottleneck, and progressively optimize.`
      ];
    case 'tech-systems':
    default:
      return [
        `Core Invariant: "${cleanTitle}" demands clear separation of concerns, robust logging, and graceful degradation under load.`,
        `Resource Management: Prevent memory leaks and file descriptor exhaustion by releasing connections and streams in finally blocks.`,
        `Concurrency Hazards: Guard shared states with proper locks, semaphores, or prefer immutable message-passing channels.`
      ];
  }
}

/**
 * Generates in-depth conceptual lecture notes with structured sections
 */
function generateDetailedNotes(cleanTitle: string, domain: BookSubjectDomain, bookTitle: string): string[] {
  if (domain.startsWith('tech-')) {
    return [
      `1. Core Architectural Foundation & Mental Model:\n${cleanTitle} establishes the baseline engineering contract in ${bookTitle}. In modern scalable software, systems cannot rely on naive implementations. You must understand how memory layout, thread scheduling, and CPU cache hierarchies affect this module under heavy throughput.`,
      `2. Step-by-Step Production Implementation Workflow:\nWhen deploying ${cleanTitle}, engineers structure logic into decoupled layers: (a) Input validation with strict boundary guards, (b) Idempotent processing with deterministic outputs, and (c) Fail-fast error propagation. Never swallow exceptions silently.`,
      `3. Real-World Trade-Offs & Scalability Constraints:\nEvery architectural choice entails a trade-off. Choosing optimized time complexity may increase auxiliary memory footprint. For ${cleanTitle}, benchmark throughput using profiling tools before and after applying optimizations.`,
      `4. Placement & Senior Engineering Checklist:\nIn technical interviews, describe the brute force intuition first (O(N^2)), identify the operational bottleneck, and demonstrate how applying ${cleanTitle} brings asymptotic performance down to O(N) or O(log N).`
    ];
  }

  if (domain === 'academics-math') {
    return [
      `1. सैद्धांतिक आधार एवं मूल परिभाषा (Mathematical Foundation):\n"${cleanTitle}" गणितीय तर्क और निगमनात्मक चिंतन (Deductive Reasoning) का एक अनिवार्य अंग है। इस अध्याय के सभी प्रश्न कुछ निश्चित प्राथमिक अभिगृहीतों (Axioms), सर्वसमिकाओं और आधारभूत प्रमेयों से सीधे निगमित किए जाते हैं।`,
      `2. महत्वपूर्ण सूत्र एवं चरणबद्ध प्रविधि (Core Formulas & Steps):\nइस टॉपिक के प्रश्नों को हल करते समय सबसे पहले दिए गए चरों (Variables) और अचरों (Constants) को स्पष्ट लिखें। सूत्र का मूल रूप पहले लिखें, फिर उसमें मान प्रतिस्थापित करें। गणना के प्रत्येक चरण को स्वतंत्र पंक्ति में दर्शाएं ताकि स्टेप-मार्किंग में पूरे अंक मिलें।`,
      `3. आम गलतियां एवं सावधानियां (Common Pitfalls to Avoid):\nछात्र अक्सर पक्षांतरण (Transposition) करते समय ऋण चिन्ह (-) भूल जाते हैं, अथवा वर्गमूल लेते समय केवल धनात्मक मान लिखते हैं जबकि ± दोनों मान संभव होते हैं। प्रत्येक गणना के बाद उत्तर को दिए गए समीकरण में रखकर जांचना (Verification) सर्वोत्तम रणनीति है।`,
      `4. बोर्ड परीक्षा उच्च-अंक रणनीति (Board Scoring Master Tip):\nहॉट्स (HOTS) प्रश्नों में चित्र या ज्यामितीय आरेख अवश्य बनाएं। प्रमेय को सिद्ध करते समय: दिया है (Given), सिद्ध करना है (To Prove), रचना (Construction), और उपपत्ति (Proof) को अलग-अलग हेडिंग्स में स्पष्ट रूप से प्रस्तुत करें।`
    ];
  }

  if (domain === 'academics-physics') {
    return [
      `1. आधारभूत भौतिक नियम एवं संकल्पना (Physics Core Law):\n"${cleanTitle}" भौतिक जगत के मौलिक नियमों जैसे गति, ऊर्जा, विद्युत, चुंबकत्व अथवा प्रकाशिकी के सिद्धांतों पर आधारित है। किसी भी भौतिक राशि की परिभाषा उसके गणितीय संबंध और मानक SI मात्रक के साथ स्पष्ट होनी चाहिए।`,
      `2. प्रायोगिक अवलोकन एवं गणितीय व्युत्पत्ति (Derivations & Experimental Invariants):\nइस अध्याय के मुख्य सूत्रों की उपपत्ति (Derivation) को चरणबद्ध रूप में समझें। किरण आरेख (Ray Diagram) या परिपथ आरेख (Circuit Diagram) बनाते समय प्रकाश की दिशा (तीर का निशान) और धारा की दिशा का विशेष ध्यान रखें।`,
      `3. संख्यात्मक प्रश्नों में त्रुटि निवारण (Numerical Problem Strategy):\nभौतिकी के आंकिक प्रश्नों को हल करते समय सबसे पहले सभी राशियों को एक ही मात्रक प्रणाली (SI System: मीटर, किलोग्राम, सेकंड) में बदलें। उत्तर लिखते समय अंतिम मान के साथ उचित मात्रक लिखना न भूलें।`,
      `4. बोर्ड एवं प्रतियोगी परीक्षा टिप्स (HOTS & Viva Strategy):\nकारण-कथन प्रश्नों में पहले सिद्धांत की प्रासंगिकता जांचें। वाइवा में परीक्षक अक्सर सूत्र की सीमाएं (Limitations) और दैनिक जीवन में उनके प्रत्यक्ष उदाहरण पूछते हैं।`
    ];
  }

  if (domain === 'academics-chemistry') {
    return [
      `1. रासायनिक सिद्धांत एवं अभिक्रिया तंत्र (Chemical Foundations & Mechanism):\n"${cleanTitle}" के माध्यम से रासायनिक परिवर्तनों, आणविक अंतर्क्रियाओं और पदार्थ के भौतिक-रासायनिक गुणों का गहन विश्लेषण किया जाता है। रासायनिक परिवर्तनों को सदैव संतुलित समीकरण के माध्यम से व्यक्त करना चाहिए।`,
      `2. संतुलित समीकरण एवं प्रायोगिक लक्षण (Balanced Equations & Lab Indicators):\nअम्ल-क्षारक सूचकों (लिटमस, फिनॉल्फथेलिन), गैस निष्कासन (CO₂, H₂) और अवक्षेपण के रासायनिक परीक्षण इस अध्याय की जान हैं। परीक्षा में पूर्ण संतुलित समीकरण लिखने पर ही स्टेप-मार्किंग में पूरे अंक मिलते हैं।`,
      `3. औद्योगिक एवं दैनिक जीवन में अनुप्रयोग (Practical Applications):\nदैनिक जीवन में होने वाली रासायनिक अभिक्रियाएं जैसे संक्षारण (Rusting), विकृतगंधिता (Rancidity), एंटासिड का उपयोग और धातुओं का निष्कर्षण परीक्षा के लिए अत्यंत महत्वपूर्ण विषय हैं।`,
      `4. परीक्षा रणनीति एवं सावधानियां (Exam Tips & Nomenclature):\nकार्बनिक यौगिकों में IUPAC नामकरण और प्रकार्यात्मक समूहों (Functional Groups) की संरचनात्मक ज्यामिति को स्वच्छ रूप में बनाएं।`
    ];
  }

  if (domain === 'academics-biology') {
    return [
      `1. जैविक संरचना एवं कार्यप्रणाली (Biological Structure & Physiological Function):\n"${cleanTitle}" सजीवों के जीवन चक्र, आंतरिक अंगों के समन्वय और आनुवंशिक निरंतरता का क्रमबद्ध अध्ययन कराता है। संरचना और उसके द्वारा किए जाने वाले कार्य का संबंध समझना अत्यंत आवश्यक है।`,
      `2. कोशिकीय एवं जैव-रासायनिक प्रक्रम (Cellular Pathways & Bio-energetics):\nप्रकाश संश्लेषण, श्वसन (ग्लूकोज का विखंडन), उत्सर्जन और रक्त परिसंचरण के प्रवाह चार्ट (Flowcharts) और चक्रों को बार-बार अभ्यास करके याद करें।`,
      `3. स्वच्छ नामांकित आरेख (Well-Labeled Diagrams):\nजीव विज्ञान में उत्तर की गुणवत्ता चित्रों पर निर्भर करती है। नामांकित आरेख में सभी तीरों को दाईं ओर सीध में रखकर स्पष्ट अक्षरों में नाम लिखने से परीक्षक प्रभावित होते हैं।`,
      `4. बोर्ड परीक्षा उच्च-अंक रणनीति (Board Scoring Master Formula):\nविभेदन (Difference) वाले प्रश्नों (जैसे जाइलम बनाम फ्लोएम, वायवीय बनाम अवायवीय श्वसन) को हमेशा दो स्तंभों (Columns) में तुलनात्मक बिंदुओं के रूप में लिखें।`
    ];
  }

  if (domain === 'academics-science') {
    return [
      `1. वैज्ञानिक सिद्धांत एवं आधारभूत संकल्पना (Scientific Core Theory):\n"${cleanTitle}" के माध्यम से प्रकृति में होने वाली भौतिक, रासायनिक अथवा जैविक परिघटनाओं के अंतर्निहित नियमों का अध्ययन किया जाता है। विज्ञान में कोई भी नियम अमूर्त नहीं है; वह प्रेक्षणों, प्रयोगों और गणितीय संबंधों पर आधारित है।`,
      `2. प्रायोगिक कार्यप्रणाली एवं अवलोकन (Experimental Observations & Equations):\nइस अध्याय के समीकरणों को संतुलित रूप में लिखना अनिवार्य है। भौतिक विज्ञान के संख्यात्मक प्रश्नों में मात्रक (SI Units) का रूपांतरण (जैसे सेमी को मीटर में बदलना) सबसे पहले करें। जीव विज्ञान में स्वच्छ, नामांकित आरेख (Well-labeled diagram) उत्तर को प्रामाणिक बनाता है।`,
      `3. दैनिक जीवन में व्यावहारिक अनुप्रयोग (Real-World Applications):\nइस वैज्ञानिक सिद्धांत का उपयोग आधुनिक तकनीकों, औद्योगिक संयंत्रों, चिकित्सा प्रणालियों और घरेलू उपकरणों में किस प्रकार होता है, इसे समझने से विषय न केवल रोचक बनता है बल्कि परीक्षा में एप्लीकेशन-बेस्ड प्रश्नों में पूरे अंक दिलाता है।`,
      `4. बोर्ड एवं प्रतियोगी परीक्षा टिप्स (Exam Strategy):\nपरिभाषाओं को वैज्ञानिक शब्दावली में ही लिखें। कारण-कथन (Assertion-Reason) वाले प्रश्नों में पहले यह जांचें कि क्या दोनों कथन सत्य हैं, और फिर देखें कि क्या कारण वास्तव में कथन की सही वैज्ञानिक व्याख्या करता है।`
    ];
  }

  if (domain === 'literature-hindi' || domain === 'literature-english') {
    return [
      `1. पाठ का केंद्रीय भाव एवं संदर्भ (Central Theme & Context):\n"${cleanTitle}" साहित्य की एक उत्कृष्ट रचना है, जो पाठक को जीवन के गूढ़ यथार्थ, संवेदना और नैतिक आदर्शों से साक्षात्कार कराती है। लेखक/कवि का मुख्य उद्देश्य केवल कथा सुनाना नहीं, बल्कि सामाजिक सरोकारों और मानवीय मनोभावों को झकझोरना है।`,
      `2. चरित्र-चित्रण एवं परिस्थितिजन्य द्वंद्व (Character Evolution & Conflicts):\nकहानी/कविता के पात्र सामान्य व्यक्ति की तरह कमजोरियों और अच्छाइयों से भरे हैं। परिस्थितियों के संघर्ष से गुजरते हुए उनका जो मनोवैज्ञानिक विकास होता है, वही इस अध्याय की आत्मा है।`,
      `3. भाषा-शैली एवं साहित्यिक सौंदर्य (Style, Diction & Tone):\nरचनाकार ने विषय के अनुरूप भाषा का चयन किया है। मुहावरों, प्रतीकों, व्यंग्य और अलंकारों के सटीक प्रयोग से कथ्य में सजीवता और संप्रेषणीयता आ गई है।`,
      `4. परीक्षा में उत्तर लेखन की कला (High-Scoring Answering Formula):\nसप्रसंग व्याख्या करते समय: (क) संदर्भ (पुस्तक व पाठ का नाम, लेखक का परिचय), (ख) प्रसंग (संबंधित घटना की पृष्ठभूमि), (ग) भावार्थ (सरल व स्पष्ट अर्थ), और (घ) विशेष (भाषा शैली, रस, छंद, अलंकार) को बिंदुवार लिखने से परीक्षक प्रभावित होते हैं।`
    ];
  }

  if (domain === 'academics-social' || domain === 'competitive-exams') {
    return [
      `1. ऐतिहासिक/संवैधानिक पृष्ठभूमि (Historical & Legal Background):\n"${cleanTitle}" का अध्ययन हमें देश की शासन व्यवस्था, ऐतिहासिक संघर्षों, सामाजिक विकास और भौगोलिक विविधता की गहरी समझ प्रदान करता है। किसी भी घटना का विश्लेषण उसके कारणों, घटनाक्रम और दूरगामी परिणामों के त्रि-आयामी दृष्टिकोण से करना चाहिए।`,
      `2. मुख्य प्रावधान, तिथियां एवं प्रमुख आंकड़े (Crucial Facts & Articles):\nसंवैधानिक अनुच्छेद, संशोधन, प्रमुख आयोगों की सिफारिशें और ऐतिहासिक तिथियों को एक सुव्यवस्थित क्रम में याद रखना परीक्षा में त्वरित उत्तर देने के लिए अनिवार्य है।`,
      `3. समसामयिक जुड़ाव एवं व्यावहारिक प्रभाव (Contemporary Relevance):\nइस अध्याय के सिद्धांतों का वर्तमान समाज, राष्ट्रीय अर्थव्यवस्था और अंतर्राष्ट्रीय संबंधों पर क्या प्रभाव पड़ रहा है? इस जुड़ाव को अपने उत्तर में शामिल करने से आपके अंक सामान्य से 20-30% बढ़ जाते हैं।`,
      `4. परीक्षा में 5-अंक वाले प्रश्नों का खाका (5-Marker Blueprint):\nउत्तर की शुरुआत 2 पंक्तियों की संक्षिप्त भूमिका से करें, मुख्य बिंदु बुलेट के रूप में लिखें, उप-शीर्षक (Sub-headings) का प्रयोग करें, और अंत में एक संतुलित, सकारात्मक निष्कर्ष (Conclusion) दें।`
    ];
  }

  // Default Business/Life/General
  return [
    `1. मूल जीवन सिद्धांत (Core Life Philosophy):\n"${cleanTitle}" हमें यह सिखाता है कि सफलता संयोग से नहीं, बल्कि सही आदतों, स्पष्ट प्राथमिकताओं और सतत अनुशासन से प्राप्त होती है। जीवन में अधिकांश समस्याएं ज्ञान की कमी से नहीं, बल्कि क्रियान्वयन (Execution) के अभाव से उत्पन्न होती हैं।`,
    `2. व्यावहारिक कार्य-योजना (Action Framework):\nइस अध्याय की सीख को केवल पढ़कर भूलने के बजाय अपने दैनिक दिनचर्या में शामिल करें। समय प्रबंधन, वित्तीय अनुशासन और भावनात्मक नियंत्रण ही स्थायी सफलता के तीन मुख्य स्तंभ हैं।`,
    `3. गलतियों से सीखना एवं अनुकूलन (Reflection & Adaptation):\nगलतियां प्रगति का स्वाभाविक प्रमाण हैं, बशर्ते उनसे सीखकर अपनी रणनीति को तुरंत बदला जाए। अपनी कमजोरियों को पहचानना और उन पर निरंतर काम करना ही परिपक्वता है।`,
    `4. दीर्घकालिक दृष्टि (Long-Term Compounding):\nछोटे-छोटे सकारात्मक प्रयास समय के साथ मिलकर चक्रवृद्धिकारी (Compounding) परिणाम देते हैं। तात्कालिक संतुष्टि के बजाय दीर्घकालिक लक्ष्यों पर ध्यान केंद्रित रखें।`
  ];
}

/**
 * Domain-appropriate reference snippet generator
 */
function getDomainReferenceSnippet(cleanTitle: string, domain: BookSubjectDomain): string {
  switch (domain) {
    case 'academics-math':
      return `// गणितीय सूत्र व प्रमेय रूपरेखा (Key Mathematical Blueprint)
1. मूल सर्वसमिका / प्रमेय:
   • दिया है / Given Conditions: f(x) = ax² + bx + c = 0
   • विविक्तकर / Discriminant (D) = b² - 4ac
   • यदि D > 0: दो भिन्न वास्तविक मूल (Two distinct real roots)
   • यदि D = 0: दो बराबर वास्तविक मूल (Two equal real roots: -b / 2a)
   • यदि D < 0: कोई वास्तविक मूल नहीं (No real roots, imaginary)
2. हल करने का नियम:
   x = (-b ± √(b² - 4ac)) / (2a)
3. परीक्षा टिप: स्टेप-मार्किंग के लिए प्रत्येक पद को अलग पंक्ति में दर्शाएं।`;

    case 'academics-physics':
      return `# भौतिकी सूत्र व नियम रूपरेखा (Physics Blueprint & Key Laws)
• ओह्म का नियम / Ohm's Law: V = I × R (विभवांतर = धारा × प्रतिरोध)
• जूल का ऊष्मीय नियम / Joule's Heating: H = I²Rt (ऊष्मा ऊर्जा Joules में)
• विद्युत शक्ति / Electric Power: P = VI = I²R = V² / R (Watt)
• दर्पण सूत्र / Mirror Formula: 1/f = 1/v + 1/u (f = R/2)
• लेंस सूत्र / Lens Formula: 1/f = 1/v - 1/u
• लेंस की क्षमता / Power of Lens: P = 1 / f(m) [मात्रक: डायोप्टर (D)]
• गति के समीकरण: v = u + at, s = ut + ½at², v² = u² + 2as`;

    case 'academics-chemistry':
      return `# रसायन विज्ञान अभिक्रिया व नियम रूपरेखा (Chemistry Blueprint)
• मोल संकल्पना / Mole Concept: n = w / M = N / NA (मोल = भार / अणुभार)
• pH पैमाना / pH Scale: pH = -log₁₀[H⁺], pH + pOH = 14 (at 25°C)
• अम्ल + क्षारक उदासीनीकरण: Acid + Base → Salt + Water (उदा. HCl + NaOH → NaCl + H₂O)
• रेडॉक्स अभिक्रिया: Oxidation = Loss of e⁻ (उपचयन); Reduction = Gain of e⁻ (अपचयन)
• आधुनिक आवर्त नियम: तत्वों के गुणधर्म उनकी परमाणु संख्या (Z) के आवर्ती फलन होते हैं।`;

    case 'academics-biology':
      return `# जीव विज्ञान प्रक्रम व आरेख रूपरेखा (Biology Blueprint)
• प्रकाश संश्लेषण समीकरण: 6CO₂ + 12H₂O + सूर्य प्रकाश + क्लोरोफिल → C₆H₁₂O₆ + 6O₂ + 6H₂O
• श्वसन चक्र: ग्लूकोज (C₆) → पाइरूवेट (C₃) [कोशिकाद्रव्य] → 36/38 ATP + CO₂ + H₂O [माइटोकॉन्ड्रिया]
• रक्त परिसंचरण: महाशिरा → दायाँ अलिंद → दायाँ निलय → फुफ्फुसीय धमनी → फेफड़े → बायाँ अलिंद → महाधमनी
• मेंडल अनुपात: एकसंकर F₂ लक्षणप्ररूपी = 3:1, जीनप्ररूपी = 1:2:1; द्विसंकर = 9:3:3:1`;

    case 'academics-science':
      return `# विज्ञान संदर्भ व नियम रूपरेखा (Scientific Blueprint & Equations)
• नियम / Law: V = I × R (ओह्म का नियम / Ohm's Law)
• शक्ति / Electric Power (P): P = V × I = I²R = V² / R (Watt)
• जूल का ऊष्मीय नियम / Joule's Heating: H = I² × R × t (Joules)
• प्रकाशिकी दर्पण सूत्र / Mirror Formula: 1/f = 1/v + 1/u
• लेंस सूत्र / Lens Formula: 1/f = 1/v - 1/u
• लेंस की क्षमता / Power of Lens: P = 1 / f(in meters) [मात्रक: डायोप्टर (D)]`;

    case 'academics-social':
      return `/* ऐतिहासिक समय-रेखा एवं प्रमुख तथ्य (Key Historical & Civics Timeline) */
• 1919: रौलेट एक्ट (Rowlatt Act) पारित; 13 अप्रैल को जलियांवाला बाग हत्याकांड।
• 1920-22: महात्मा गांधी द्वारा असहयोग आंदोलन (Non-Cooperation Movement)।
• 1929: लाहौर अधिवेशन (Lahore Session) - 'पूर्ण स्वराज' (Purna Swaraj) का संकल्प।
• 1930: 12 मार्च से 6 अप्रैल तक ऐतिहासिक दांडी मार्च व सविनय अवज्ञा आंदोलन।
• भारतीय संविधान: अनुच्छेद 14-18 (समानता का अधिकार), अनुच्छेद 19-22 (स्वतंत्रता का अधिकार)।`;

    case 'literature-hindi':
      return `/* साहित्यिक संदर्भ एवं बोर्ड परीक्षा व्याख्या सूत्र */
1. संदर्भ:
   प्रस्तुत पद्यांश/गद्यांश हमारी पाठ्यपुस्तक के पाठ "${cleanTitle}" से उद्धृत है।
2. प्रसंग:
   इसमें रचनाकार ने पात्रों के माध्यम से मानवीय संवेदना, कर्तव्यनिष्ठा एवं नैतिक मूल्यों को उजागर किया है।
3. काव्यगत/गद्यगत सौंदर्य:
   • भाषा: तत्सम तद्भव युक्त, प्रवाहपूर्ण एवं भावोद्दीपक।
   • शैली: संवादात्मक एवं चित्रात्मक शैली का कुशल प्रयोग।
   • रस/अलंकार: उपयुक्त रस परिपाक तथा अनुप्रास, उपमा आदि अलंकारों का स्वाभाविक प्रयोग।`;

    case 'literature-english':
      return `/* Literature Study Reference & Analysis Framework */
1. Context & Setting:
   Excerpt from "${cleanTitle}" exploring profound character conflict and societal themes.
2. Thematic Anchor:
   The narrative underscores human resilience, moral dignity, and the irony of circumstance.
3. High-Scoring Exam Structure:
   • Thesis Sentence: State the author's primary motif directly.
   • Textual Citation: Quote or reference key plot turning points.
   • Critical Analysis: Conclude with the universal relevance of the theme.`;

    case 'competitive-exams':
      return `// उच्च-प्रायिकता प्रतियोगी परीक्षा चीटशीट (High-Yield Exam Flashcard)
• 50-50 एलिमिनेशन रणनीति:
  1. प्रश्न के नकारात्मक शब्दों ('नहीं है', 'असत्य है', 'Not true') को पहले गोला बनाएं।
  2. निश्चित रूप से गलत विकल्पों को तुरंत काट दें।
  3. शेष दो विकल्पों में कथन-कारण संबंध या ऐतिहासिक निरंतरता का मिलान करें।
• मुख्य नीतिगत दरें: रेपो रेट (Repo Rate), रिवर्स रेपो, CRR, SLR का अर्थव्यवस्था पर प्रभाव।`;

    case 'puzzles-logic':
      return `/* तार्किक पहेली हल करने का एल्गोरिदम (Logic Puzzle Algorithm) */
Step 1: प्रश्न में दी गई सभी कठोर शर्तों (Hard Constraints) की सूची बनाएं।
Step 2: जो निश्चित जानकारी (Absolute Fact) है, उसे टेबल/ग्रिड में पहले भरें।
Step 3: नकारात्मक सूचनाओं (Negative Clues) को एलिमिनेट करें (उदा. 'A, B के पास नहीं बैठता')।
Step 4: शेष संभावित विकल्पों में से विरोधाभास (Contradiction) खोजकर सही उत्तर तक पहुँचें।`;

    case 'business-life':
      return `// वित्तीय व जीवन प्रबंधन नियम (Wealth & Life Principles)
• 50-30-20 नियम: 50% अनिवार्य आवश्यकताएं, 30% व्यक्तिगत इच्छाएं, 20% बचत व निवेश।
• चक्रवृद्धि का नियम (Rule of 72): 72 ÷ वार्षिक रिटर्न दर = पैसे दोगुना होने के वर्ष।
• डीप वर्क नियम: दिन के प्रथम 90 मिनट बिना फोन/इंटरनेट के सबसे महत्वपूर्ण कार्य को समर्पित करें।`;

    case 'tech-python':
      return `# Python Idioms & Clean Implementation Blueprint
from typing import List, Dict, Optional

def process_pipeline(items: List[int]) -> List[int]:
    """Demonstrates pythonic list comprehension and defensive filtering."""
    if not items:
        return []
    # O(N) memory-safe transformation
    return [x * 2 for x in items if x > 0]

# Verification
if __name__ == "__main__":
    assert process_pipeline([1, -2, 3]) == [2, 6]
    print("Execution completed safely.")`;

    case 'tech-web':
      return `// React 19 / TypeScript Production Blueprint
import React, { useState, useMemo, useCallback } from 'react';

interface ComponentProps {
  initialTitle: string;
}

export const ModernModule: React.FC<ComponentProps> = ({ initialTitle }) => {
  const [activeState, setActiveState] = useState<boolean>(false);

  // Stable callback avoids unnecessary child re-renders
  const handleToggle = useCallback(() => {
    setActiveState(prev => !prev);
  }, []);

  return (
    <div className="p-4 rounded-xl border border-slate-700 bg-slate-900 text-slate-100">
      <h3 className="font-bold text-sm">{initialTitle}</h3>
      <button 
        onClick={handleToggle}
        className="mt-2 px-3 py-1 bg-indigo-600 hover:bg-indigo-700 rounded text-xs"
      >
        State: {activeState ? 'ACTIVE' : 'IDLE'}
      </button>
    </div>
  );
};`;

    case 'tech-dsa':
      return `// Asymptotic Time & Space Bounds:
// Time Complexity: O(N log N) | Auxiliary Space: O(1) in-place

function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Avoid integer overflow bug in (left + right) / 2
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Target not found
}`;

    case 'tech-ai':
      return `// Production Vector Retrieval & Prompt Grounding Pipeline
import { GoogleGenAI } from '@google/genai';

export async function groundedAnswer(query: string, contextChunks: string[]): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const prompt = \`
Context:
\${contextChunks.join('\\n---\\n')}

Question: \${query}
Grounding Constraint: Answer ONLY using the facts in the context above. If unsure, state 'Insufficient context'.
\`;
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt
  });
  return response.text || '';
}`;

    case 'tech-cyber':
      return `// Defensive Security Invariant: SQLi & XSS Prevention
// BAD: db.query("SELECT * FROM users WHERE email = '" + email + "'");
// GOOD: Prepared Parameterized Statement

export async function authenticateUser(db: any, email: string, passwordHash: string) {
  // Safe against SQL Injection
  const sql = 'SELECT id, email, role FROM users WHERE email = $1 AND password_hash = $2';
  const result = await db.query(sql, [email, passwordHash]);
  return result.rows[0] || null;
}`;

    case 'tech-systems':
    default:
      return `// Systems Engineering Invariant: Graceful Resource Management
import fs from 'fs/promises';

export async function processFileSafely(filePath: string): Promise<string> {
  let fileHandle: any = null;
  try {
    fileHandle = await fs.open(filePath, 'r');
    const data = await fileHandle.readFile({ encoding: 'utf-8' });
    return data;
  } finally {
    // Guaranteed release of file descriptor to prevent memory/resource leaks
    if (fileHandle) {
      await fileHandle.close();
    }
  }
}`;
  }
}

/**
 * Intelligent topic resolver for specific Viva questions and high-accuracy Quizzes
 */
function getTopicSpecificVivaAndQuiz(cleanTitle: string, domain: BookSubjectDomain, bookTitle: string) {
  // First priority: Check dedicated curated subject pools for factually verified questions and solutions
  const curated = resolveTopicContent(cleanTitle, bookTitle, domain);
  if (curated && curated.viva && curated.viva.length > 0 && curated.quiz && curated.quiz.length > 0) {
    return {
      viva: curated.viva,
      quiz: curated.quiz
    };
  }

  const t = cleanTitle.toLowerCase();
  const bt = bookTitle.toLowerCase();
  const combined = `${t} ${bt}`;

  // ==========================================
  // 0. TECH & COMPUTERS (DSA, Web, AI, Python, Systems, Rust, C++)
  // Must be first so technical keywords like 'Cell<T>' or 'mirror' never hit science/biology
  // ==========================================
  if (domain.startsWith('tech-')) {
    return {
      viva: [
        {
          q: `In the context of ${cleanTitle}, how do you evaluate the asymptotic Time and Space trade-offs in production?`,
          a: 'We evaluate algorithms using Big-O worst-case and average-case analysis. For example, replacing a naive O(N²) nested scan with a hash map achieves O(N) lookup time at the deliberate expense of O(N) auxiliary memory space.'
        },
        {
          q: `What is the most critical edge case or production hazard when implementing ${cleanTitle}?`,
          a: 'Null or undefined pointers, unhandled network timeouts, race conditions under concurrent async requests, and memory leaks caused by uncleaned event listeners or open database connection pools.'
        },
        {
          q: `How do you ensure defensive fault tolerance and security when exposing ${cleanTitle} via an API?`,
          a: 'Strict schema validation at entry boundaries, parameterization against injection attacks, rate limiting with token-bucket algorithms, and structured error responses that never leak raw stack traces to client browsers.'
        }
      ],
      quiz: [
        {
          question: `What is the optimal average time complexity of searching an element in a balanced Binary Search Tree (BST) or sorted array via Binary Search?`,
          options: ['O(N)', 'O(1)', 'O(log N)', 'O(N log N)'],
          answerIndex: 2,
          explanation: 'Binary Search halves the search space in each iteration, resulting in O(log N) logarithmic time complexity.'
        },
        {
          question: `In RESTful HTTP architecture, which status code correctly signifies that a resource was successfully created?`,
          options: ['200 OK', '201 Created', '204 No Content', '304 Not Modified'],
          answerIndex: 1,
          explanation: 'HTTP 201 Created indicates that the request succeeded and led to the creation of a new resource on the server.'
        },
        {
          question: `What primary vulnerability does input sanitization and parameterized queries protect against?`,
          options: ['Cross-Site Scripting (XSS)', 'Denial of Service (DoS)', 'DNS Spoofing', 'SQL Injection (SQLi)'],
          answerIndex: 3,
          explanation: 'Parameterized queries decouple untrusted user parameters from executable SQL query logic, neutralizing SQL Injection.'
        }
      ]
    };
  }

  // ==========================================
  // 1. MATHEMATICS SPECIFIC TOPICS
  // ==========================================
  if (combined.includes('trigonometr') || combined.includes('त्रिकोणमिति') || combined.includes('heights and distances') || combined.includes('ऊंचाई और दूरी')) {
    return {
      viva: [
        {
          q: 'त्रिकोणमितीय सर्वसमिका sin²θ + cos²θ = 1 की उपपत्ति समकोण त्रिभुज से कैसे की जाती है?',
          a: 'पाइथागोरस प्रमेय के अनुसार: लंब² + आधार² = कर्ण² (P² + B² = H²)। दोनों पक्षों को H² से भाग देने पर: (P/H)² + (B/H)² = 1 प्राप्त होता है। चूँकि P/H = sinθ और B/H = cosθ, अतः sin²θ + cos²θ = 1 सिद्ध होता है।'
        },
        {
          q: 'उन्नयन कोण (Angle of Elevation) और अवनमन कोण (Angle of Depression) में क्या अंतर है?',
          a: 'जब प्रेक्षक अपनी आंख से ऊपर स्थित वस्तु को देखता है, तो दृष्टि रेखा और क्षैतिज रेखा के बीच बना कोण उन्नयन कोण कहलाता है। जब प्रेक्षक नीचे स्थित वस्तु को देखता है, तो क्षैतिज रेखा के नीचे बना कोण अवनमन कोण कहलाता है। दोनों एकांतर कोण होने के कारण संख्यात्मक रूप से बराबर होते हैं।'
        },
        {
          q: 'tan 90° का मान अपरिभाषित (Undefined / ∞) क्यों होता है?',
          a: 'tanθ = sinθ / cosθ होता है। जब θ = 90° होता है, तो sin 90° = 1 और cos 90° = 0 होता है। किसी भी संख्या को शून्य (0) से भाग देना गणित में अपरिभाषित है, इसलिए tan 90° का मान निर्धारित नहीं किया जा सकता।'
        }
      ],
      quiz: [
        {
          question: 'यदि sin θ = 3/5 है, तो cos θ और tan θ का मान क्रमशः क्या होगा?',
          options: ['4/5 और 3/4', '3/4 और 4/5', '5/4 और 4/3', '1/2 और √3/2'],
          answerIndex: 0,
          explanation: 'समकोण त्रिभुज में लंब = 3, कर्ण = 5, अतः पाइथागोरस प्रमेय से आधार = √(5² - 3²) = 4। इसलिए cos θ = 4/5 और tan θ = 3/4।'
        },
        {
          question: 'sec² θ - tan² θ का मान सदैव कितना होता है?',
          options: ['0', '1', '2', '-1'],
          answerIndex: 1,
          explanation: 'त्रिकोणमितीय मानक सर्वसमिका 1 + tan² θ = sec² θ के अनुसार, sec² θ - tan² θ = 1 होता है।'
        },
        {
          question: 'एक 30 मीटर ऊंचे टॉवर की जमीन पर छाया की लंबाई 10√3 मीटर है। उस समय सूर्य का उन्नयन कोण कितना होगा?',
          options: ['30°', '45°', '60°', '90°'],
          answerIndex: 2,
          explanation: 'tan θ = ऊंचाई / छाया = 30 / (10√3) = 3 / √3 = √3। चूंकि tan 60° = √3 होता है, अतः उन्नयन कोण 60° होगा।'
        }
      ]
    };
  }

  if (combined.includes('quadratic') || combined.includes('द्विघात') || combined.includes('polynomial') || combined.includes('बहुपद')) {
    return {
      viva: [
        {
          q: 'द्विघात समीकरण ax² + bx + c = 0 के मूलों की प्रकृति विविक्तकर (Discriminant D) पर कैसे निर्भर करती है?',
          a: 'D = b² - 4ac होता है। यदि D > 0 है तो दो भिन्न वास्तविक मूल (Distinct Real Roots) होते हैं; यदि D = 0 है तो दो समान वास्तविक मूल (x = -b/2a) होते हैं; और यदि D < 0 है तो कोई वास्तविक मूल नहीं होता (मूल काल्पनिक होते हैं)।'
        },
        {
          q: 'द्विघात बहुपद के मूलों के योग (Sum of Roots) और गुणनफल (Product of Roots) का सूत्र क्या है?',
          a: 'यदि α और β द्विघात समीकरण ax² + bx + c = 0 के दो मूल हैं, तो मूलों का योग (α + β) = -b/a और मूलों का गुणनफल (αβ) = c/a होता है।'
        },
        {
          q: 'पूर्ण वर्ग बनाने की विधि (Completing the Square Method) का मुख्य सिद्धांत क्या है?',
          a: 'समीकरण को a से भाग देकर x का गुणांक इकाई बनाते हैं, फिर x के गुणांक के आधे का वर्ग (b/2a)² दोनों पक्षों में जोड़ते हैं, जिससे बायाँ पक्ष (x + b/2a)² का पूर्ण वर्ग बन जाता है।'
        }
      ],
      quiz: [
        {
          question: 'समीकरण 2x² - 4x + 3 = 0 के मूलों की प्रकृति कैसी होगी?',
          options: ['दो बराबर वास्तविक मूल', 'कोई वास्तविक मूल नहीं (काल्पनिक)', 'दो भिन्न वास्तविक मूल', 'अनंत वास्तविक मूल'],
          answerIndex: 1,
          explanation: 'विविक्तकर D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8। चूंकि D < 0 है, अतः समीकरण के कोई वास्तविक मूल नहीं होंगे।'
        },
        {
          question: 'यदि द्विघात समीकरण x² - 5x + 6 = 0 के मूल α और β हैं, तो α + β का मान क्या है?',
          options: ['-5', '5', '6', '-6'],
          answerIndex: 1,
          explanation: 'मूलों का योग α + β = -b/a = -(-5)/1 = 5।'
        },
        {
          question: 'द्विघात समीकरण x² - 9 = 0 के हल क्या होंगे?',
          options: ['3 केवल', '-3 केवल', 'x = 3 और x = -3', 'x = 0'],
          answerIndex: 2,
          explanation: 'x² = 9 => x = ±√9 = ±3। अतः दो मूल +3 और -3 होंगे।'
        }
      ]
    };
  }

  if (combined.includes('arithmetic progression') || combined.includes('समांतर श्रेढ़ी') || combined.includes(' ap ')) {
    return {
      viva: [
        {
          q: 'समांतर श्रेढ़ी (Arithmetic Progression - AP) की सार्व अंतर (Common Difference d) धनात्मक, ऋणात्मक या शून्य हो सकता है?',
          a: 'हाँ, सार्व अंतर (d) धनात्मक (बढ़ती हुई श्रेढ़ी), ऋणात्मक (घटती हुई श्रेढ़ी) अथवा शून्य (स्थिर श्रेढ़ी जैसे 5, 5, 5...) तीनों हो सकता है।'
        },
        {
          q: 'AP के प्रथम n पदों के योग का सूत्र Sn = n/2[2a + (n-1)d] कैसे व्युत्पन्न हुआ?',
          a: 'श्रेढ़ी के पदों को सीधे क्रम में और फिर उल्टे क्रम में लिखकर दोनों समीकरणों को जोड़ने पर प्रत्येक पद का मान (2a + (n-1)d) बन जाता है। n पदों के कुल योग 2Sn = n[2a + (n-1)d] होता है, जिससे Sn = n/2[2a + (n-1)d] प्राप्त होता है।'
        },
        {
          q: 'यदि किसी श्रेढ़ी का n-वां पद an दिया हो, तो सार्व अंतर d कैसे निकाला जाता है?',
          a: 'सार्व अंतर d = an - a(n-1) होता है। अर्थात किसी भी पद में से उसके ठीक पूर्ववर्ती पद को घटाने पर सार्व अंतर प्राप्त होता है।'
        }
      ],
      quiz: [
        {
          question: 'समांतर श्रेढ़ी 2, 7, 12, 17... का 10वाँ पद क्या होगा?',
          options: ['45', '47', '50', '52'],
          answerIndex: 1,
          explanation: 'a = 2, d = 7 - 2 = 5। an = a + (n-1)d => a10 = 2 + (10 - 1)×5 = 2 + 45 = 47।'
        },
        {
          question: 'प्रथम n प्राकृतिक संख्याओं का योगफल ज्ञात करने का सही सूत्र क्या है?',
          options: ['n(n + 1) / 2', 'n² / 2', 'n(n - 1) / 2', '2n + 1'],
          answerIndex: 0,
          explanation: 'प्रथम n प्राकृतिक संख्याओं का योग Sn = n(n + 1) / 2 होता है।'
        },
        {
          question: 'यदि किसी AP का पहला पद a = 5 और अंतिम पद l = 45 है तथा कुल पद n = 10 हैं, तो योग Sn क्या होगा?',
          options: ['200', '225', '250', '300'],
          answerIndex: 2,
          explanation: 'Sn = n/2 × (a + l) = 10/2 × (5 + 45) = 5 × 50 = 250।'
        }
      ]
    };
  }

  if (combined.includes('coordinate') || combined.includes('निर्देशांक') || combined.includes('geometry') || combined.includes('ज्यामिति') || combined.includes('triangle') || combined.includes('त्रिभुज') || combined.includes('circle') || combined.includes('वृत्त')) {
    return {
      viva: [
        {
          q: 'आधारभूत समानुपातिकता प्रमेय (थेल्स प्रमेय / BPT) का कथन क्या है?',
          a: 'यदि किसी त्रिभुज की एक भुजा के समांतर अन्य दो भुजाओं को भिन्न-भिन्न बिंदुओं पर प्रतिच्छेद करने के लिए एक रेखा खींची जाए, तो ये अन्य दो भुजाएं एक ही अनुपात में विभाजित हो जाती हैं।'
        },
        {
          q: 'वृत्त के किसी बाह्य बिंदु से खींची गई दो स्पर्श रेखाओं की लंबाइयों में क्या संबंध होता है?',
          a: 'वृत्त के बाह्य बिंदु से खींची गई दोनों स्पर्श रेखाओं की लंबाइयाँ सदैव समान (बराबर) होती हैं, और वे वृत्त के केंद्र पर समान कोण अंतरित करती हैं।'
        },
        {
          q: 'निर्देशांक ज्यामिति में विभाजन सूत्र (Section Formula) का क्या उपयोग है?',
          a: 'यदि दो बिंदु A(x1, y1) और B(x2, y2) को जोड़ने वाले रेखाखंड को कोई बिंदु P आंतरिक रूप से m1:m2 के अनुपात में विभाजित करता है, तो P के निर्देशांक [(m1*x2 + m2*x1)/(m1 + m2), (m1*y2 + m2*y1)/(m1 + m2)] होते हैं।'
        }
      ],
      quiz: [
        {
          question: 'मूल बिंदु (0, 0) से बिंदु P(3, 4) की दूरी कितनी होगी?',
          options: ['7 मात्रक', '5 मात्रक', '25 मात्रक', '1 मात्रक'],
          answerIndex: 1,
          explanation: 'दूरी = √(x² + y²) = √(3² + 4²) = √(9 + 16) = √25 = 5 मात्रक।'
        },
        {
          question: 'एक वृत्त पर बाह्य बिंदु से अधिकतम कितनी स्पर्श रेखाएँ खींची जा सकती हैं?',
          options: ['1', '2', '3', 'अनंत'],
          answerIndex: 1,
          explanation: 'किसी वृत्त के बाह्य बिंदु से केवल और केवल दो स्पर्श रेखाएं खींची जा सकती हैं, जो लंबाई में बराबर होती हैं।'
        },
        {
          question: 'बिंदुओं A(2, 3) और B(6, 7) को मिलाने वाले रेखाखंड के मध्य बिंदु के निर्देशांक क्या होंगे?',
          options: ['(4, 5)', '(8, 10)', '(3, 4)', '(4, 4)'],
          answerIndex: 0,
          explanation: 'मध्य बिंदु के निर्देशांक = ((x1 + x2)/2, (y1 + y2)/2) = ((2 + 6)/2, (3 + 7)/2) = (8/2, 10/2) = (4, 5)।'
        }
      ]
    };
  }

  // ==========================================
  // 2. SCIENCE (PHYSICS) SPECIFIC TOPICS
  // ==========================================
  if (combined.includes('light') || combined.includes('प्रकाश') || combined.includes('reflection') || combined.includes('refraction') || combined.includes('परावर्तन') || combined.includes('अपवर्तन') || combined.includes('lens') || combined.includes('लेंस') || combined.includes('mirror') || combined.includes('दर्पण')) {
    return {
      viva: [
        {
          q: 'स्नेल का अपवर्तन नियम (Snell\'s Law of Refraction) क्या है?',
          a: 'किन्हीं दो माध्यमों और एक ही रंग के प्रकाश के लिए आपतन कोण की ज्या (sin i) और अपवर्तन कोण की ज्या (sin r) का अनुपात सदैव एक स्थिरांक होता है, जिसे दूसरे माध्यम का पहले माध्यम के सापेक्ष अपवर्तनांक कहते हैं: sin i / sin r = n (अपवर्तनांक)।'
        },
        {
          q: 'वाहनों के पश्च-दृश्य (Rear View Mirror) के रूप में उत्तल दर्पण (Convex Mirror) का ही उपयोग क्यों किया जाता है?',
          a: 'क्योंकि उत्तल दर्पण सदैव सीधा और छोटा प्रतिबिंब बनाता है तथा बाहर की ओर वक्रित होने के कारण इसका दृष्टि-क्षेत्र (Field of View) बहुत बड़ा होता है, जिससे चालक को पीछे का विस्तृत ट्रैफिक दिखाई देता है।'
        },
        {
          q: 'लेंस की क्षमता (Power of Lens) की परिभाषा और इसका SI मात्रक क्या है?',
          a: 'किसी लेंस द्वारा प्रकाश किरणों को अभिसारित (converge) या अपसारित (diverge) करने की सामर्थ्य को लेंस की क्षमता कहते हैं। यह फोकस दूरी के व्युत्क्रमानुपाती होती है (P = 1/f मीटर में)। इसका SI मात्रक डायोप्टर (Dioptre, D) है।'
        }
      ],
      quiz: [
        {
          question: 'एक उत्तल लेंस की फोकस दूरी +0.5 मीटर है। इस लेंस की क्षमता (Power) कितनी होगी?',
          options: ['+2 D', '-2 D', '+0.5 D', '+5 D'],
          answerIndex: 0,
          explanation: 'P = 1 / f (मीटर में) = 1 / 0.5 = +2 डायोप्टर (+2 D)। उत्तल लेंस की क्षमता सदैव धनात्मक होती है।'
        },
        {
          question: 'समतल दर्पण द्वारा बना प्रतिबिंब सदैव कैसा होता है?',
          options: ['वास्तविक और उल्टा', 'आभासी और सीधा', 'वास्तविक और सीधा', 'आभासी और उल्टा'],
          answerIndex: 1,
          explanation: 'समतल दर्पण सदैव आभासी, सीधा, वस्तु के बराबर और पार्श्व-परिवर्तित (Laterally Inverted) प्रतिबिंब बनाता है।'
        },
        {
          question: 'निर्वात में प्रकाश की चाल कितनी होती है?',
          options: ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10¹⁰ m/s', '3 × 10⁵ m/s'],
          answerIndex: 1,
          explanation: 'निर्वात में प्रकाश की चाल 3 × 10⁸ मीटर प्रति सेकंड (लगभग 3 लाख किमी/सेकंड) होती है।'
        }
      ]
    };
  }

  if (combined.includes('electricity') || combined.includes('विद्युत') || combined.includes('ohm') || combined.includes('circuit') || combined.includes('परिपथ') || combined.includes('current') || combined.includes('धारा')) {
    return {
      viva: [
        {
          q: 'ओह्म का नियम (Ohm\'s Law) क्या है और इसकी सीमाएं क्या हैं?',
          a: 'यदि किसी चालक की भौतिक अवस्थाएं (जैसे तापमान, लंबाई आदि) स्थिर रहें, तो चालक के सिरों पर लगाया गया विभवांतर (V) उसमें प्रवाहित विद्युत धारा (I) के समानुपाती होता है: V = IR। यह नियम केवल ओह्मीय चालकों (जैसे धातु) पर लागू होता है, डायोड और ट्रांजिस्टर पर नहीं।'
        },
        {
          q: 'घरों में सभी विद्युत उपकरणों को श्रेणीक्रम (Series) के बजाय समांतर क्रम (Parallel) में क्यों जोड़ा जाता है?',
          a: 'समांतर क्रम में सभी उपकरणों को समान वोल्टेज (220V) मिलता है, प्रत्येक उपकरण का अपना अलग स्विच होता है, और यदि एक उपकरण खराब हो जाए तो शेष उपकरण सामान्य रूप से काम करते रहते हैं। साथ ही कुल प्रतिरोध न्यूनतम रहता है।'
        },
        {
          q: 'विद्युत फ्यूज (Electric Fuse) का क्या कार्य है और इसका तार किस पदार्थ का बनता है?',
          a: 'फ्यूज एक सुरक्षा उपकरण है जो अतिभारण (Overloading) या लघुपथन (Short Circuit) होने पर पिघलकर परिपथ को तोड़ देता है। इसका तार टिन और लेड (सीसा) के मिश्रधातु का बनता है, जिसका गलनांक (Melting Point) कम होता है।'
        }
      ],
      quiz: [
        {
          question: 'विद्युत प्रतिरोधकता (Resistivity) का मानक SI मात्रक क्या है?',
          options: ['ओह्म (Ω)', 'ओह्म-मीटर (Ω·m)', 'एम्पियर (A)', 'वोल्ट/मीटर'],
          answerIndex: 1,
          explanation: 'R = ρ(L/A) => ρ = (R × A) / L = (Ω × m²) / m = Ω·m (ओह्म-मीटर)।'
        },
        {
          question: '2 Ω और 3 Ω के दो प्रतिरोधकों को समांतर क्रम (Parallel) में जोड़ने पर तुल्य प्रतिरोध कितना होगा?',
          options: ['5 Ω', '1.2 Ω', '0.6 Ω', '6 Ω'],
          answerIndex: 1,
          explanation: '1/R = 1/2 + 1/3 = (3 + 2)/6 = 5/6 => R = 6/5 = 1.2 Ω।'
        },
        {
          question: 'विद्युत धारा (Electric Current) मापने वाले यंत्र को क्या कहा जाता है और इसे परिपथ में कैसे जोड़ा जाता है?',
          options: ['वोल्टमीटर, श्रेणीक्रम में', 'अमीटर, श्रेणीक्रम में', 'अमीटर, समांतर क्रम में', 'गैल्वेनोमीटर, समांतर क्रम में'],
          answerIndex: 1,
          explanation: 'विद्युत धारा को अमीटर (Ammeter) से मापा जाता है और इसे परिपथ में सदैव श्रेणीक्रम (Series) में लगाया जाता है।'
        }
      ]
    };
  }

  if (combined.includes('motion') || combined.includes('गति') || combined.includes('gravitation') || combined.includes('गुरुत्वाकर्षण') || combined.includes('force') || combined.includes('बल') || combined.includes('newton')) {
    return {
      viva: [
        {
          q: 'न्यूटन के गति के दूसरे नियम (F = ma) से संवेग संरक्षण का नियम कैसे समझा जा सकता है?',
          a: 'बल = संवेग परिवर्तन की दर (F = dp/dt)। यदि किसी निकाय पर बाह्य बल शून्य (F = 0) हो, तो संवेग परिवर्तन की दर भी शून्य होगी, अर्थात निकाय का कुल संवेग सदैव स्थिर (संरक्षित) रहता है।'
        },
        {
          q: 'द्रव्यमान (Mass) और भार (Weight) में क्या अंतर है?',
          a: 'द्रव्यमान किसी वस्तु में उपस्थित पदार्थ की मात्रा है, जो पूरे ब्रह्मांड में अचर (Constant) रहता है (मात्रक: किग्रा)। भार वह गुरुत्वीय बल है जिससे पृथ्वी वस्तु को अपने केंद्र की ओर खींचती है (W = mg), जो स्थान बदलने पर गुरुत्वीय त्वरण g के अनुसार बदलता है (मात्रक: न्यूटन)।'
        },
        {
          q: 'गुरुत्वीय त्वरण \'g\' और सार्वत्रिक गुरुत्वाकर्षण स्थिरांक \'G\' में क्या संबंध है?',
          a: 'g = (G × M) / R² होता है, जहाँ M पृथ्वी का द्रव्यमान और R पृथ्वी की त्रिज्या है। पृथ्वी की सतह पर g का औसत मान 9.8 m/s² होता है, जबकि G का मान 6.67 × 10⁻¹¹ N·m²/kg² एक सार्वत्रिक स्थिरांक है।'
        }
      ],
      quiz: [
        {
          question: 'गति के तीसरे नियम (Newton\'s Third Law) के अनुसार क्रिया और प्रतिक्रिया बल किस प्रकार कार्य करते हैं?',
          options: ['एक ही वस्तु पर समान दिशा में', 'दो भिन्न वस्तुओं पर विपरीत दिशा में', 'एक ही वस्तु पर विपरीत दिशा में', 'समय के अंतराल के साथ'],
          answerIndex: 1,
          explanation: 'प्रत्येक क्रिया के बराबर और विपरीत प्रतिक्रिया होती है, और ये दोनों बल सदैव दो भिन्न वस्तुओं पर एक साथ कार्य करते हैं।'
        },
        {
          question: 'यदि किसी वस्तु का द्रव्यमान पृथ्वी पर 60 किग्रा है, तो चंद्रमा पर उसका द्रव्यमान कितना होगा?',
          options: ['10 किग्रा', '60 किग्रा', '360 किग्रा', '0 किग्रा'],
          answerIndex: 1,
          explanation: 'द्रव्यमान (Mass) स्थान बदलने पर कभी नहीं बदलता; वह चंद्रमा पर भी 60 किग्रा ही रहेगा। केवल भार (Weight) 1/6 रह जाएगा।'
        },
        {
          question: 'गति के प्रथम समीकरण v = u + at में \'u\' किस राशि को प्रदर्शित करता है?',
          options: ['अंतिम वेग', 'प्रारंभिक वेग', 'त्वरण', 'विस्थापन'],
          answerIndex: 1,
          explanation: 'गति के समीकरणों में u = प्रारंभिक वेग (Initial Velocity), v = अंतिम वेग, a = त्वरण, और t = समय होता है।'
        }
      ]
    };
  }

  // ==========================================
  // 3. SCIENCE (CHEMISTRY) SPECIFIC TOPICS
  // ==========================================
  if (combined.includes('acid') || combined.includes('अम्ल') || combined.includes('base') || combined.includes('क्षार') || combined.includes('salt') || combined.includes('लवण') || combined.includes('ph')) {
    return {
      viva: [
        {
          q: 'pH स्केल क्या है और मानव रक्त का सामान्य pH मान कितना होता है?',
          a: 'pH स्केल विलयन में हाइड्रोजन आयनों (H⁺) की सांद्रता मापने का पैमाना है (pH = -log[H⁺])। इसका मान 0 से 14 तक होता है (7 उदासीन, 7 से कम अम्लीय, 7 से अधिक क्षारीय)। मानव रक्त का सामान्य pH 7.35 से 7.45 के बीच (हल्का क्षारीय) होता है।'
        },
        {
          q: 'प्लास्टर ऑफ पेरिस (POP) का रासायनिक नाम, सूत्र और इसे जल से बचाकर क्यों रखा जाता है?',
          a: 'POP का रासायनिक नाम कैल्शियम सल्फेट हेमीहाइड्रेट (CaSO4·½H2O) है। यह नमी या जल के संपर्क में आते ही पुनः जिप्सम (CaSO4·2H2O) में बदलकर कठोर ठोस बन जाता है, इसलिए इसे वायुरोधी डिब्बों में रखा जाता है।'
        },
        {
          q: 'बेकिंग सोडा (खाने का सोडा) और धावन सोडा (धोने का सोडा) के रासायनिक सूत्रों में क्या अंतर है?',
          a: 'बेकिंग सोडा सोडियम हाइड्रोजन कार्बोनेट (NaHCO3) है, जबकि धावन सोडा सोडियम कार्बोनेट डेकाहाइड्रेट (Na2CO3·10H2O) है, जिसमें क्रिस्टलन जल के 10 अणु होते हैं।'
        }
      ],
      quiz: [
        {
          question: 'नीले लिटमस पत्र को लाल रंग में कौन परिवर्तित करता है?',
          options: ['क्षारक (Base)', 'अम्ल (Acid)', 'लवण (Salt)', 'आसुत जल'],
          answerIndex: 1,
          explanation: 'अम्ल नीले लिटमस पत्र को लाल कर देते हैं, जबकि क्षारक लाल लिटमस पत्र को नीला कर देते हैं।'
        },
        {
          question: 'शुद्ध जल का pH मान कितना होता है?',
          options: ['0', '7', '14', '1'],
          answerIndex: 1,
          explanation: 'शुद्ध जल पूर्णतः उदासीन (Neutral) होता है, जिसका pH मान कमरे के तापमान पर 7 होता है।'
        },
        {
          question: 'चींटी के डंक में कौन सा प्राकृतिक अम्ल पाया जाता है, जिससे जलन होती है?',
          options: ['साइट्रिक अम्ल', 'एसिटिक अम्ल', 'मेथेनॉइक अम्ल (फॉर्मिक अम्ल)', 'टार्टरिक अम्ल'],
          answerIndex: 2,
          explanation: 'चींटी और बिच्छू के डंक में मेथेनॉइक अम्ल (Methanoic Acid / Formic Acid) होता है, जिसके उपचार के लिए बेकिंग सोडा लगाया जाता है।'
        }
      ]
    };
  }

  if (combined.includes('carbon') || combined.includes('कार्बन') || combined.includes('metal') || combined.includes('धातु') || combined.includes('periodic') || combined.includes('आवर्त सारणी') || combined.includes('chemical reaction') || combined.includes('अभिक्रिया')) {
    return {
      viva: [
        {
          q: 'कार्बन इतने अधिक यौगिक क्यों बनाता है (कार्बन की सर्वतोमुखी प्रकृति के दो मुख्य कारण क्या हैं)?',
          a: 'पहला कारण शृंखलन (Catenation) है, जिसके द्वारा कार्बन परमाणु आपस में सीधे बंध बनाकर लंबी शृंखलाएं बना सकते हैं। दूसरा कारण इसकी चतुःसंयोजकता (Tetravalency) है, जिससे यह चार अन्य परमाणुओं के साथ सहसंयोजी आबंध बना सकता है।'
        },
        {
          q: 'उभयधर्मी ऑक्साइड (Amphoteric Oxides) क्या होते हैं? दो उदाहरण दीजिए।',
          a: 'जो धातु ऑक्साइड अम्ल और क्षारक दोनों के साथ अभिक्रिया करके लवण तथा जल बनाते हैं, उन्हें उभयधर्मी ऑक्साइड कहते हैं। उदाहरण: एल्यूमिनियम ऑक्साइड (Al2O3) और जिंक ऑक्साइड (ZnO)।'
        },
        {
          q: 'रेडॉक्स अभिक्रिया (Redox Reaction) की परिभाषा क्या है?',
          a: 'वह रासायनिक अभिक्रिया जिसमें एक अभिकारक का उपचयन (ऑक्सीकरण - इलेक्ट्रॉन की हानि या ऑक्सीजन का योग) तथा दूसरे अभिकारक का अपचयन (इलेक्ट्रॉन का लाभ या हाइड्रोजन का योग) एक साथ होता है, उसे रेडॉक्स अभिक्रिया कहते हैं।'
        }
      ],
      quiz: [
        {
          question: 'कार्बन का कौन सा अपररूप (Allotrope) विद्युत का सुचालक होता है?',
          options: ['हीरा (Diamond)', 'ग्रेफाइट (Graphite)', 'फुलेरीन (Fullerene)', 'कोयला'],
          answerIndex: 1,
          explanation: 'ग्रेफाइट में प्रत्येक कार्बन परमाणु तीन अन्य कार्बन से जुड़ा होता है और एक मुक्त इलेक्ट्रॉन होने के कारण यह विद्युत का अच्छा सुचालक होता है।'
        },
        {
          question: 'आधुनिक आवर्त सारणी (Modern Periodic Table) तत्वों के किस गुणधर्म पर आधारित है?',
          options: ['परमाणु द्रव्यमान', 'परमाणु संख्या (Atomic Number)', 'परमाणु घनत्व', 'संयोजकता'],
          answerIndex: 1,
          explanation: 'हेनरी मोजले द्वारा विकसित आधुनिक आवर्त नियम के अनुसार तत्वों के भौतिक और रासायनिक गुण उनकी परमाणु संख्या के आवर्ती फलन होते हैं।'
        },
        {
          question: 'लोहे को जंग (Rusting) से बचाने के लिए उस पर जस्ते (Zinc) की परत चढ़ाने की प्रक्रिया क्या कहलाती है?',
          options: ['विद्युत अपघटन', 'यषदलेपन (Galvanization)', 'एनोडीकरण', 'मिश्रधातु बनाना'],
          answerIndex: 1,
          explanation: 'लोहे और इस्पात को जंग से सुरक्षित रखने के लिए उन पर जस्ते (जिंक) की पतली परत चढ़ाने को यशदलेपन (गैल्वनीकरण) कहते हैं।'
        }
      ]
    };
  }

  // ==========================================
  // 4. SCIENCE (BIOLOGY) SPECIFIC TOPICS
  // ==========================================
  if (combined.includes('life process') || combined.includes('जैव प्रक्रम') || combined.includes('photosynthesis') || combined.includes('प्रकाश संश्लेषण') || combined.includes('reproduction') || combined.includes('जनन') || combined.includes('heredity') || combined.includes('आनुवंशिकता') || combined.includes('cell') || combined.includes('कोशिका')) {
    return {
      viva: [
        {
          q: 'पौधों में जाइलम (Xylem) और फ्लोएम (Phloem) के कार्यों में क्या अंतर है?',
          a: 'जाइलम जड़ों द्वारा अवशोषित जल और खनिज लवणों का संवहन ऊपर की ओर पत्तियों तक करता है (एकदिशीय संवहन)। फ्लोएम पत्तियों द्वारा प्रकाश संश्लेषण से निर्मित भोज्य पदार्थों (सुक्रोज) का संवहन पौधे के सभी भागों में करता है (द्विदिशीय संवहन)।'
        },
        {
          q: 'नेफ्रॉन (Nephron) क्या है और यह मूत्र निर्माण कैसे करता है?',
          a: 'नेफ्रॉन वृक्क (Kidney) की संरचनात्मक और कार्यात्मक इकाई है। इसमें बोमन संपुट और केशिका गुच्छ (Glomerulus) द्वारा रक्त का निस्यंदन (Filtration) होता है, जिसके बाद उपयोगी पदार्थों (ग्लूकोज, लवण, जल) का पुनरावशोषण होकर मूत्र बनता है।'
        },
        {
          q: 'मेंडल के एकसंकर संकरण (Monohybrid Cross) में F2 पीढ़ी का लक्षणप्ररूपी (Phenotypic) और जीनप्ररूपी (Genotypic) अनुपात क्या होता है?',
          a: 'लक्षणप्ररूपी अनुपात 3:1 (3 लंबे : 1 बौना) होता है, जबकि जीनप्ररूपी अनुपात 1:2:1 (1 शुद्ध लंबा TT : 2 संकर लंबे Tt : 1 शुद्ध बौना tt) होता है।'
        }
      ],
      quiz: [
        {
          question: 'प्रकाश संश्लेषण (Photosynthesis) के दौरान कौन सी गैस मुक्त होती है और वह किससे निकलती है?',
          options: ['कार्बन डाइऑक्साइड, ग्लूकोज से', 'ऑक्सीजन, जल के अणुओं के अपघटन से', 'नाइट्रोजन, मिट्टी से', 'हाइड्रोजन, क्लोरोफिल से'],
          answerIndex: 1,
          explanation: 'प्रकाश अभिक्रिया में जल (H2O) के अणुओं का प्रकाश-अपघटन होता है, जिससे ऑक्सीजन (O2) गैस सह-उत्पाद के रूप में मुक्त होती है।'
        },
        {
          question: 'मानव शरीर में इंसुलिन (Insulin) हार्मोन का स्राव किस ग्रंथि द्वारा होता है?',
          options: ['थायरॉयड ग्रंथि', 'पीयूष ग्रंथि', 'अग्न्याशय (Pancreas)', 'अधिवृक्क ग्रंथि'],
          answerIndex: 2,
          explanation: 'अग्न्याशय के लैंगरहेंस की द्वीपिकाओं की बीटा कोशिकाओं द्वारा इंसुलिन हार्मोन स्रावित होता है जो रक्त शर्करा को नियंत्रित करता है।'
        },
        {
          question: 'कोशिका का "पावर हाउस" (ऊर्जा घर) किसे कहा जाता है?',
          options: ['राइबोसोम', 'माइटोकॉन्ड्रिया', 'गॉल्जीकाय', 'लाइसोसोम'],
          answerIndex: 1,
          explanation: 'माइटोकॉन्ड्रिया में कोशिकीय श्वसन द्वारा ATP के रूप में ऊर्जा का निर्माण और संचय होता है, इसलिए इसे ऊर्जा घर कहते हैं।'
        }
      ]
    };
  }

  // ==========================================
  // 5. HINDI LITERATURE & GRAMMAR GRANULAR BLOCKS
  // ==========================================
  if (combined.includes('सूरदास')) {
    return {
      viva: [
        {
          q: 'सूरदास के पदों में गोपियों ने उद्धव के योग संदेश को किसके समान बताया है और क्यों?',
          a: 'गोपियों ने उद्धव के योग संदेश को \'कड़वी ककड़ी\' (तिक्त ककड़ी) और एक ऐसी \'बीमारी\' (व्याधि) के समान बताया है जिसे न कभी पहले देखा न सुना। गोपियों का प्रेम एकनिष्ठ सगुण कृष्ण के प्रति है, अतः उन्हें शुष्क निर्गुण योग व्यर्थ लगता है।'
        },
        {
          q: 'सूरदास के पदों की भाषा और रस क्या है?',
          a: 'सूरदास के पद साहित्यिक ब्रजभाषा में रचित हैं तथा इसमें विप्रलंभ (वियोग) शृंगार रस और वात्सल्य रस की प्रधानता है।'
        },
        {
          q: 'गोपियों ने स्वयं को \'गुर चांटी ज्यौं पागी\' क्यों कहा है?',
          a: 'जिस प्रकार चींटियां गुड़ से चिपट जाती हैं और अपने प्राण त्याग देती हैं किंतु गुड़ को नहीं छोड़तीं, उसी प्रकार गोपियां भी कृष्ण-प्रेम में अनन्य भाव से समर्पित हैं।'
        }
      ],
      quiz: [
        {
          question: 'सूरदास के पदों में गोपियों ने अपने प्रेम की तुलना गुड़ से चिपटी किस जीव से की है?',
          options: ['मधुमक्खी', 'चींटी (गुर चांटी ज्यौं पागी)', 'भौंरा', 'कोयल'],
          answerIndex: 1,
          explanation: 'गोपियों ने कहा "गुर चांटी ज्यौं पागी" अर्थात जैसे चींटियां गुड़ से चिपट जाती हैं और प्राण त्याग देती हैं पर अलग नहीं होतीं, वैसे ही हम कृष्ण प्रेम में लीन हैं।'
        },
        {
          question: 'सूरदास के भ्रमरगीत सार में उद्धव किस मार्ग के प्रचारक बनकर गोकुल आए थे?',
          options: ['ज्ञान एवं निर्गुण योग मार्ग', 'प्रेम एवं सगुण भक्ति मार्ग', 'कर्मकांड मार्ग', 'हठयोग मार्ग'],
          answerIndex: 0,
          explanation: 'उद्धव को अपने ज्ञान का गर्व था और वे गोपियों को निर्गुण निराकार ब्रह्म का उपदेश देने आए थे।'
        },
        {
          question: 'सूरदास के काव्य की मुख्य भाषा कौन सी है?',
          options: ['ब्रजभाषा', 'अवधी', 'खड़ी बोली', 'भोजपुरी'],
          answerIndex: 0,
          explanation: 'महाकवि सूरदास ने अपने वात्सल्य और शृंगार के पदों की रचना मधुर ब्रजभाषा में की है।'
        }
      ]
    };
  }

  if (combined.includes('नेताजी का चश्मा')) {
    return {
      viva: [
        {
          q: '\'नेताजी का चश्मा\' पाठ का मुख्य संदेश क्या है?',
          a: 'मुख्य संदेश यह है कि देशप्रेम किसी वर्दी या पद का मोहताज नहीं है; प्रत्येक नागरिक अपने सीमित साधनों से राष्ट्र नायकों का सम्मान करके देश निर्माण में योगदान दे सकता है।'
        },
        {
          q: 'कैप्टन फेरीवाले को लोग \'कैप्टन\' क्यों कहते थे?',
          a: 'वह सेना में न होते हुए भी नेताजी सुभाष चंद्र बोस के प्रति अगाध श्रद्धा रखता था और उनकी बिना चश्मे वाली मूर्ति पर चश्मा लगाकर अपनी देशभक्ति प्रकट करता था।'
        },
        {
          q: 'हालदार साहब को अंत में सरकंडे का चश्मा देखकर भावुकता क्यों हुई?',
          a: 'सरकंडे का चश्मा बच्चों ने लगाया था, जिससे हालदार साहब को विश्वास हो गया कि देश की आने वाली पीढ़ी में भी देशभक्ति की भावना जीवित है।'
        }
      ],
      quiz: [
        {
          question: '\'नेताजी का चश्मा\' कहानी में नेताजी की संगमरमर की मूर्ति पर वास्तविक चश्मा कौन पहनाता था?',
          options: ['हालदार साहब', 'पानवाला', 'कैप्टन चश्मेवाला (फेरीवाला)', 'कस्बे का मास्टर मोतीलाल'],
          answerIndex: 2,
          explanation: 'मास्टर जी मूर्ति पर संगमरमर का चश्मा बनाना भूल गए थे, अतः देशभक्त कैप्टन चश्मेवाला अपनी फेरी के चश्मों में से एक चश्मा मूर्ति पर लगा देता था।'
        },
        {
          question: 'मूर्ति पर अंत में सरकंडे का चश्मा किसने लगाया था?',
          options: ['कस्बे के बच्चों ने', 'हालदार साहब ने', 'पानवाले ने', 'नगरपालिका अध्यक्ष ने'],
          answerIndex: 0,
          explanation: 'कैप्टन की मृत्यु के बाद कस्बे के नन्हे बच्चों ने अपनी श्रद्धा से सरकंडे का छोटा चश्मा बनाकर मूर्ति पर लगाया था।'
        },
        {
          question: '\'नेताजी का चश्मा\' पाठ के लेखक कौन हैं?',
          options: ['स्वयं प्रकाश', 'रामवृक्ष बेनीपुरी', 'यशपाल', 'सर्वेश्वर दयाल सक्सेना'],
          answerIndex: 0,
          explanation: '\'नेताजी का चश्मा\' प्रसिद्ध कहानीकार स्वयं प्रकाश द्वारा रचित एक संवेदनशील कहानी है।'
        }
      ]
    };
  }

  if (combined.includes('माता का अँचल')) {
    return {
      viva: [
        {
          q: '\'माता का अँचल\' पाठ में लेखक ने अपने बचपन में विपत्ति आने पर पिता के स्थान पर माता की शरण क्यों ली?',
          a: 'विपत्ति के समय बालक को पिता के स्नेह की अपेक्षा माँ के आँचल में अधिक वात्सल्य, शांति और सुरक्षा की अनुभूति होती है।'
        },
        {
          q: 'पाठ में लेखक के पिता की दैनिक दिनचर्या कैसी थी?',
          a: 'पिता भोर में उठकर पूजा-पाठ करते, रामनामा बही पर राम-नाम लिखते और आटे की गोलियां गंगाजी में मछलियों को खिलाते थे।'
        },
        {
          q: 'इस पाठ में ग्रामीण संस्कृति के किन-किन खेलों का वर्णन किया गया है?',
          a: 'बचपन में बारात का जुलूस निकालना, खेती करना, मिठाई की दुकान लगाना, और धूल-मिट्टी के खिलौनों से खेलना प्रमुख खेल थे।'
        }
      ],
      quiz: [
        {
          question: '\'माता का अँचल\' उपन्यास \'देहाती दुनिया\' के किस लेखक द्वारा रचित संस्मरणात्मक अंश है?',
          options: ['शिवपूजन सहाय', 'कमलेश्वर', 'फणीश्वर नाथ रेणु', 'प्रेमचंद'],
          answerIndex: 0,
          explanation: 'यह प्रसिद्ध उपन्यास \'देहाती दुनिया\' से लिया गया अंश है जिसके लेखक शिवपूजन सहाय हैं।'
        },
        {
          question: 'साँप निकलने पर बच्चे रोते-चिल्लाते हुए किसकी शरण में जाकर छिप गए?',
          options: ['माता के आँचल में', 'बाबूजी के कुर्ते में', 'पेड़ के पीछे', 'गोशाला में'],
          answerIndex: 0,
          explanation: 'साँप के भय से कांपते हुए बच्चे माँ के आँचल में छिप गए जहाँ उन्हें पूर्ण सुरक्षा और ममता मिली।'
        },
        {
          question: 'लेखक का वास्तविक बचपन का नाम क्या था?',
          options: ['तारकेश्वरनाथ', 'भोलानाथ', 'बैजू', 'मूसन तिवारी'],
          answerIndex: 0,
          explanation: 'लेखक का वास्तविक नाम तारकेश्वरनाथ था, परंतु पिता उन्हें प्यार से भोलानाथ कहकर पुकारते थे।'
        }
      ]
    };
  }

  if (combined.includes('व्याकरण') || combined.includes('पद परिचय') || combined.includes('वाच्य') || combined.includes('समास')) {
    return {
      viva: [
        {
          q: 'पद परिचय देते समय संज्ञा या क्रिया पद में क्या बताना अनिवार्य होता है?',
          a: 'संज्ञा में भेद, लिंग, वचन, कारक व क्रिया से संबंध; तथा क्रिया में अकर्मक/सकर्मक, काल, वाच्य, लिंग, वचन और कर्ता का उल्लेख आवश्यक है।'
        },
        {
          q: 'कर्तृवाच्य और कर्मवाच्य में क्या भेद है?',
          a: 'कर्तृवाच्य में कर्ता प्रधान होता है और क्रिया कर्ता के अनुसार होती है। कर्मवाच्य में कर्म प्रधान होता है और क्रिया कर्म के लिंग, वचन के अनुसार होती है।'
        },
        {
          q: 'कर्मधारय और बहुव्रीहि समास में मुख्य अंतर क्या होता है?',
          a: 'कर्मधारय में विशेषण-विशेष्य या उपमान-उपमेय का संबंध होता है, जबकि बहुव्रीहि में दोनों पद मिलकर किसी अन्य तीसरे पद का बोध कराते हैं।'
        }
      ],
      quiz: [
        {
          question: '\'यथाशक्ति\' शब्द में कौन सा समास प्रयुक्त है?',
          options: ['तत्पुरुष समास', 'अव्ययीभाव समास', 'द्विगु समास', 'द्वंद्व समास'],
          answerIndex: 1,
          explanation: '\'यथाशक्ति\' का विग्रह \'शक्ति के अनुसार\' है। इसमें पहला पद \'यथा\' अव्यय है, अतः यह अव्ययीभाव समास है।'
        },
        {
          question: '"राम पत्र लिखता है।" वाक्य का कर्मवाच्य रूप क्या होगा?',
          options: ['राम द्वारा पत्र लिखा जाता है।', 'राम से पत्र नहीं लिखा गया।', 'राम पत्र लिखेगा।', 'पत्र ने राम को लिखा।'],
          answerIndex: 0,
          explanation: 'कर्तृवाच्य को कर्मवाच्य में बदलने के लिए कर्ता के साथ "द्वारा" और क्रिया कर्म के अनुसार "लिखा जाता है" होती है।'
        },
        {
          question: 'रचना के आधार पर "सूर्य निकला और पक्षी चहचहाने लगे" कैसा वाक्य है?',
          options: ['संयुक्त वाक्य', 'सरल वाक्य', 'मिश्र वाक्य', 'विधानवाचक वाक्य'],
          answerIndex: 0,
          explanation: 'यहाँ दो स्वतंत्र उपवाक्य समानाधिकरण योजक "और" से जुड़े हैं, अतः यह संयुक्त वाक्य है।'
        }
      ]
    };
  }

  if (domain === 'literature-hindi') {
    return {
      viva: [
        {
          q: `"${cleanTitle}" का मूल संदेश और लेखक/कवि का केंद्रीय दृष्टिकोण क्या है?`,
          a: 'इस रचना के माध्यम से रचनाकार ने मानवीय संवेदना, सामाजिक परिस्थितियों और नैतिक मूल्यों का सजीव चित्रण किया है। कथ्य का मुख्य उद्देश्य समाज की विसंगतियों पर प्रकाश डालते हुए पाठकों में मानवीय सहानुभूति और विवेक जागृत करना है।'
        },
        {
          q: `इस पाठ (${cleanTitle}) में भाषा-शैली और पात्रों के चरित्र-चित्रण की क्या विशेषता है?`,
          a: 'पात्रों का आचरण स्वाभाविक और यथार्थवादी है। भाषा सरल, प्रवाहपूर्ण और विषय के अनुकूल है, जिसमें मुहावरों और प्रतीकों का सुंदर प्रयोग किया गया है।'
        },
        {
          q: 'बोर्ड परीक्षा में इस पाठ से संबंधित सप्रसंग व्याख्या लिखते समय किन मुख्य बातों का ध्यान रखना चाहिए?',
          a: 'संदर्भ में पाठ व लेखक का नाम, प्रसंग में संबंधित परिस्थिति की पृष्ठभूमि, भावार्थ में सरल अर्थ और विशेष में भाषा, रस तथा अलंकारों का बिंदुवार उल्लेख करना चाहिए।'
        }
      ],
      quiz: [
        {
          question: `अध्याय "${cleanTitle}" के संदर्भ में लेखक का मुख्य उद्देश्य क्या रेखांकित होता है?`,
          options: [
            'मानवीय संवेदना और जीवन मूल्यों का बोध कराना',
            'केवल मनोरंजन करना',
            'कठिन शब्दों का प्रदर्शन करना',
            'बिना किसी उद्देश्य के कथा कहना'
          ],
          answerIndex: 0,
          explanation: 'साहित्य का मुख्य उद्देश्य समाज को जागरूक करना और जीवन मूल्यों की अनुभूति कराना होता है।'
        },
        {
          question: 'साहित्यिक दृष्टिकोण से किसी भी रचना की दीर्घकालिक प्रासंगिकता किस पर निर्भर करती है?',
          options: [
            'कथा में प्रयुक्त पृष्ठों की संख्या पर',
            'उसके द्वारा उठाए गए मानवीय और सामाजिक सरोकारों की गहराई पर',
            'केवल कठिन व्याकरण के प्रयोग पर',
            'चित्रों की अधिकता पर'
          ],
          answerIndex: 1,
          explanation: 'गहरे मानवीय सरोकार और यथार्थवादी चित्रण ही किसी रचना को कालजयी बनाते हैं।'
        },
        {
          question: 'गद्यांश या काव्यांश की सप्रसंग व्याख्या करते समय विशेष (काव्यगत/गद्यगत सौंदर्य) में क्या लिखना अनिवार्य है?',
          options: [
            'भाषा शैली, प्रयुक्त रस, अलंकार व शब्द शक्ति का विश्लेषण',
            'केवल लेखक की जन्म तिथि',
            'पूरी कहानी का सारांश दोबारा लिखना',
            'केवल व्याकरण के नियम'
          ],
          answerIndex: 0,
          explanation: 'विशेष में भाषा की सुंदरता, अलंकारों का प्रयोग, रस और शैली का बिंदुवार उल्लेख किया जाता है।'
        }
      ]
    };
  }

  // ==========================================
  // 6. ENGLISH LITERATURE & GRAMMAR
  // ==========================================
  const isFirstFlightOrLencho =
    combined.includes('lencho') ||
    combined.includes('mandela') ||
    combined.includes('anne frank') ||
    combined.includes('bholi') ||
    combined.includes('first flight') ||
    combined.includes('footprints');

  if (isFirstFlightOrLencho) {
    return {
      viva: [
        {
          q: 'What is the dramatic irony in the story "A Letter to God" regarding the post office employees?',
          a: 'The postmaster and employees collected money from their own salaries to help Lencho and sustain his faith in God. However, when Lencho received 70 pesos instead of 100, he suspected those very kind employees and called them "a bunch of crooks".'
        },
        {
          q: 'According to Nelson Mandela, what does "courage" truly mean?',
          a: 'Mandela learned that courage was not the absence of fear, but the triumph over it. The brave person is not someone who does not feel afraid, but someone who conquers that fear.'
        },
        {
          q: 'What transformed Bholi (Sulekha) from a dumb cow into an assertive young woman?',
          a: 'The compassionate encouragement and patient mentorship of her school teacher built her self-confidence, allowing her to speak clearly, master education, and proudly reject the greedy dowry-demanding bridegroom Bishamber.'
        }
      ],
      quiz: [
        {
          question: 'In "A Letter to God", what destroyed Lencho’s entire harvest?',
          options: ['A devastating locust invasion', 'A violent hailstorm', 'An unprecedented drought', 'Floods from the nearby river'],
          answerIndex: 1,
          explanation: 'A severe hailstorm accompanied by strong winds battered the valley for an hour, covering the field like white salt and destroying all crops.'
        },
        {
          question: 'Choose the grammatically correct sentence according to Subject-Verb Agreement:',
          options: [
            'Neither of the students were present in the laboratory.',
            'Neither of the students was present in the laboratory.',
            'Neither of the students are present in the laboratory.',
            'Neither of the students have been present in the laboratory.'
          ],
          answerIndex: 1,
          explanation: '\'Neither of\' refers to singular distribution, hence takes the singular verb \'was\'.'
        },
        {
          question: 'What was the secret name given by Anne Frank to her personal diary?',
          options: ['Margot', 'Kitty', 'Lizzie', 'Peter'],
          answerIndex: 1,
          explanation: 'Anne Frank personified her diary as an intimate, trustworthy friend and named it "Kitty".'
        }
      ]
    };
  }

  if (domain === 'literature-english') {
    return {
      viva: [
        {
          q: `What is the core thematic exploration and authorial message in "${cleanTitle}"?`,
          a: 'The work delves into complex human conflicts, moral dilemmas, and existential journeys, examining how individuals confront adversity and societal conventions.'
        },
        {
          q: `How does the author utilize diction, symbolism, or narrative tone in "${cleanTitle}"?`,
          a: 'The author employs deliberate imagery, subtle tone shifts, and symbolic motifs to reflect the internal psychological evolution of the characters.'
        },
        {
          q: 'What is the most effective approach for writing long analytical answers for this chapter in examinations?',
          a: 'Structure the response with a concise thematic thesis, embed direct textual evidence and dialogue references in the body, and conclude with a synthesis of universal human themes.'
        }
      ],
      quiz: [
        {
          question: `In the study of "${cleanTitle}", what represents the primary driving force behind character decisions?`,
          options: [
            'Moral principles, personal aspirations, and internal conflict',
            'Arbitrary coincidences without motive',
            'Superficial desires for material wealth alone',
            'Passive surrender to external forces'
          ],
          answerIndex: 0,
          explanation: 'Compelling literature roots narrative progression in authentic psychological drives and moral decisions.'
        },
        {
          question: 'What is the function of dramatic irony or thematic foreshadowing in literature?',
          options: [
            'To create cognitive suspense and reveal deeper insights to the audience before characters realize them',
            'To confuse readers and obscure the plot',
            'To shorten the required length of chapters',
            'To eliminate dialogue between characters'
          ],
          answerIndex: 0,
          explanation: 'Literary devices like dramatic irony heighten narrative tension by granting the audience greater perspective than individual characters possess.'
        },
        {
          question: 'When analyzing literary texts, what distinguishes a primary theme from a simple plot summary?',
          options: [
            'The theme captures the universal human truth or moral insight, while the plot simply recounts what happened',
            'The theme is always stated in the title',
            'The plot contains no characters',
            'There is no difference between theme and plot'
          ],
          answerIndex: 0,
          explanation: 'Theme reflects the underlying philosophy and universal truth, whereas plot details the chronological sequence of events.'
        }
      ]
    };
  }

  // ==========================================
  // 7. SOCIAL SCIENCE & HISTORY & CIVICS
  // ==========================================
  if (domain === 'academics-social' || (!domain.startsWith('tech-') && !domain.startsWith('literature-') && (combined.includes('history') || combined.includes('इतिहास') || combined.includes('constitution') || combined.includes('संविधान') || combined.includes('nationalism') || combined.includes('राष्ट्रवाद') || combined.includes('geography') || combined.includes('भूगोल')))) {
    return {
      viva: [
        {
          q: 'महात्मा गांधी ने सविनय अवज्ञा आंदोलन (Civil Disobedience) की शुरुआत के लिए नमक (Salt) को ही मुख्य प्रतीक क्यों चुना?',
          a: 'नमक अमीर और गरीब सभी के भोजन का एक अनिवार्य अंग था। ब्रिटिश सरकार द्वारा नमक पर लगाया गया कर और उसके उत्पादन पर सरकारी एकाधिकार दमनकारी ब्रिटिश शासन का सबसे क्रूर चेहरा था, जिससे सभी भारतीय एकजुट हो सके।'
        },
        {
          q: 'भारतीय संविधान में वर्णित मौलिक अधिकारों (Fundamental Rights) और राज्य के नीति निदेशक तत्वों (DPSP) में क्या अंतर है?',
          a: 'मौलिक अधिकार (अनुच्छेद 12-35) न्यायोचित (Justiciable) हैं, अर्थात उल्लंघन होने पर सीधे सर्वोच्च न्यायालय (अनुच्छेद 32) जा सकते हैं। जबकि नीति निदेशक तत्व (अनुच्छेद 36-51) गैर-न्यायोचित हैं, ये कल्याणकारी राज्य के निर्माण के लिए सरकारों हेतु नैतिक व नीतिगत दिशा-निर्देश हैं।'
        },
        {
          q: 'भारत में दक्षिण-पश्चिम मानसून (South-West Monsoon) की उत्पत्ति का मुख्य कारण क्या है?',
          a: 'ग्रीष्म ऋतु में उत्तर-पश्चिम भारत के भूभाग का अत्यधिक गर्म होना, जिससे वहां निम्न वायुदाब (Low Pressure) का केंद्र बनता है, जबकि हिंद महासागर पर उच्च वायुदाब रहता है। इस दाबांतर के कारण नमी युक्त पवनें समुद्र से स्थल की ओर चलने लगती हैं।'
        }
      ],
      quiz: [
        {
          question: 'भारतीय संविधान के किस अनुच्छेद को डॉ. भीमराव अंबेडकर ने "संविधान का हृदय और आत्मा" कहा था?',
          options: ['अनुच्छेद 14 (समानता का अधिकार)', 'अनुच्छेद 19 (स्वतंत्रता का अधिकार)', 'अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार)', 'अनुच्छेद 21 (प्राण और दैहिक स्वतंत्रता)'],
          answerIndex: 2,
          explanation: 'अनुच्छेद 32 नागरिकों को अपने मौलिक अधिकारों के प्रवर्तन के लिए सीधे सर्वोच्च न्यायालय में रिट याचिका दाखिल करने की गारंटी देता है।'
        },
        {
          question: 'काली मिट्टी (Black Soil / Regur Soil) किस फसल की खेती के लिए सर्वाधिक उपयुक्त मानी जाती है?',
          options: ['गेहूं', 'कपास (Cotton)', 'चाय', 'गन्ना'],
          answerIndex: 1,
          explanation: 'काली मिट्टी में नमी धारण करने की उच्च क्षमता होती है और यह कपास (Cotton) की उत्कृष्ट खेती के लिए भारत भर में प्रसिद्ध है।'
        },
        {
          question: 'साइमन कमीशन (Simon Commission) का भारत में तीव्र विरोध क्यों किया गया था?',
          options: ['क्योंकि इसमें किसी भी भारतीय सदस्य को शामिल नहीं किया गया था', 'क्योंकि इसने नमक पर भारी टैक्स लगाया था', 'क्योंकि यह केवल मद्रास तक सीमित था', 'क्योंकि इसने हिंदी भाषा पर प्रतिबंध लगाया था'],
          answerIndex: 0,
          explanation: '1927 में गठित 7 सदस्यीय साइमन कमीशन में एक भी भारतीय सदस्य नहीं था, इसलिए इसका पूरे देश में काले झंडे दिखाकर विरोध किया गया।'
        }
      ]
    };
  }

  // ==========================================
  // 8. TECH & COMPUTERS (DSA, Web, AI, Python)
  // ==========================================
  if (domain.startsWith('tech-')) {
    return {
      viva: [
        {
          q: `In the context of ${cleanTitle}, how do you evaluate the asymptotic Time and Space trade-offs in production?`,
          a: 'We evaluate algorithms using Big-O worst-case and average-case analysis. For example, replacing a naive O(N²) nested scan with a hash map achieves O(N) lookup time at the deliberate expense of O(N) auxiliary memory space.'
        },
        {
          q: `What is the most critical edge case or production hazard when implementing ${cleanTitle}?`,
          a: 'Null or undefined pointers, unhandled network timeouts, race conditions under concurrent async requests, and memory leaks caused by uncleaned event listeners or open database connection pools.'
        },
        {
          q: `How do you ensure defensive fault tolerance and security when exposing ${cleanTitle} via an API?`,
          a: 'Strict schema validation at entry boundaries, parameterization against injection attacks, rate limiting with token-bucket algorithms, and structured error responses that never leak raw stack traces to client browsers.'
        }
      ],
      quiz: [
        {
          question: `What is the optimal average time complexity of searching an element in a balanced Binary Search Tree (BST) or sorted array via Binary Search?`,
          options: ['O(N)', 'O(1)', 'O(log N)', 'O(N log N)'],
          answerIndex: 2,
          explanation: 'Binary Search halves the search space in each iteration, resulting in O(log N) logarithmic time complexity.'
        },
        {
          question: `In RESTful HTTP architecture, which status code correctly signifies that a resource was successfully created?`,
          options: ['200 OK', '201 Created', '204 No Content', '304 Not Modified'],
          answerIndex: 1,
          explanation: 'HTTP 201 Created indicates that the request succeeded and led to the creation of a new resource on the server.'
        },
        {
          question: `What primary vulnerability does input sanitization and parameterized queries protect against?`,
          options: ['Cross-Site Scripting (XSS)', 'Denial of Service (DoS)', 'DNS Spoofing', 'SQL Injection (SQLi)'],
          answerIndex: 3,
          explanation: 'Parameterized queries decouple untrusted user parameters from executable SQL query logic, neutralizing SQL Injection.'
        }
      ]
    };
  }

  // ==========================================
  // 8.5 SCIENCE DOMAIN SPECIFIC SYNTHESIZERS
  // ==========================================
  if (domain === 'academics-physics') {
    return {
      viva: [
        {
          q: `अध्याय "${cleanTitle}" के मूल भौतिक सिद्धांत और दैनिक जीवन में इसके अनुप्रयोग क्या हैं?`,
          a: 'यह अध्याय भौतिकी के मूलभूत नियमों, ऊर्जा संरक्षण और गणितीय संबंधों को स्पष्ट करता है। दैनिक जीवन में यह आधुनिक उपकरणों, गतिशीलता और इंजीनियरिंग में प्रत्यक्ष रूप से प्रयुक्त होता है।'
        },
        {
          q: `इस अध्याय (${cleanTitle}) के संख्यात्मक प्रश्नों को हल करते समय सबसे महत्वपूर्ण चरण क्या है?`,
          a: 'सभी भौतिक राशियों को मानक SI मात्रकों में बदलना, उचित किरण/परिपथ आरेख बनाना, सही सूत्र लिखकर चरणबद्ध गणना करना और अंतिम उत्तर के साथ मात्रक लिखना।'
        },
        {
          q: 'भौतिक विज्ञान परीक्षा में हॉट्स (HOTS) प्रश्नों में पूरे अंक प्राप्त करने की क्या रणनीति है?',
          a: 'केवल सूत्र रटने के बजाय उसके पीछे के सिद्धांत को समझें और कारण-कथन प्रश्नों में पहले सिद्धांत की प्रासंगिकता जांचें।'
        }
      ],
      quiz: [
        {
          question: `भौतिकी में किसी भी गणना को शुरू करने से पहले भौतिक राशियों के मात्रकों के विषय में क्या नियम अनिवार्य है?`,
          options: [
            'सभी राशियों को एक ही मानक मात्रक प्रणाली (SI प्रणाली) में रूपांतरित करना',
            'मात्रकों पर ध्यान दिए बिना केवल संख्याओं को गुणा करना',
            'केवल अंतिम उत्तर में कोई भी मात्रक लिख देना',
            'मात्रकों को छोड़ देना'
          ],
          answerIndex: 0,
          explanation: 'सटीक गणना के लिए सभी राशियों का समान मात्रक प्रणाली (SI System: m, kg, s) में होना अनिवार्य है।'
        },
        {
          question: `भौतिकी के नियमों (जैसे न्यूटन के नियम, ऊर्जा संरक्षण नियम) की मुख्य विशेषता क्या है?`,
          options: [
            'वे सार्वभौमिक और प्रयोगों द्वारा प्रमाणित होते हैं',
            'वे केवल प्रयोगशाला तक सीमित रहते हैं',
            'वे समय-समय पर मनमाने ढंग से बदलते हैं',
            'वे केवल काल्पनिक धारणाएं हैं'
          ],
          answerIndex: 0,
          explanation: 'भौतिक नियम सार्वभौमिक होते हैं और प्रत्येक दशा में वैज्ञानिक प्रयोगों द्वारा सत्यापित होते हैं।'
        },
        {
          question: `किसी भी संख्यात्मक प्रश्न में अंतिम उत्तर के साथ उपयुक्त SI मात्रक न लिखने पर क्या प्रभाव पड़ता है?`,
          options: [
            'स्टेप-मार्किंग में अंक कट जाते हैं और मान अधूरा माना जाता है',
            'कोई प्रभाव नहीं पड़ता',
            'अंक दुगुने हो जाते हैं',
            'प्रश्न स्वतः सही मान लिया जाता है'
          ],
          answerIndex: 0,
          explanation: 'भौतिकी में बिना मात्रक के केवल संख्या का कोई वैज्ञानिक अर्थ नहीं होता, अतः मात्रक लिखना अनिवार्य है।'
        }
      ]
    };
  }

  if (domain === 'academics-chemistry') {
    return {
      viva: [
        {
          q: `अध्याय "${cleanTitle}" में रासायनिक अभिक्रियाओं और यौगिकों के अध्ययन का क्या महत्व है?`,
          a: 'यह अध्याय पदार्थों की आणविक संरचना, रासायनिक बंध, अभिक्रिया वेग और आवर्ती प्रवृत्तियों को समझाता है, जो उद्योगों, औषधि निर्माण और दैनिक जीवन में अनिवार्य हैं।'
        },
        {
          q: `रासायनिक समीकरण को संतुलित करना द्रव्यमान संरक्षण के नियम के अनुसार क्यों आवश्यक है?`,
          a: 'द्रव्यमान संरक्षण के नियम के अनुसार रासायनिक अभिक्रिया में न तो द्रव्यमान का निर्माण होता है और न ही विनाश। इसलिए अभिकारकों और उत्पादों के दोनों पक्षों में प्रत्येक तत्व के परमाणुओं की संख्या बराबर होनी चाहिए।'
        },
        {
          q: 'प्रयोगशाला में रसायनों के साथ काम करते समय कौन सी सुरक्षा सावधानियां अनिवार्य हैं?',
          a: 'सुरक्षा चश्मा पहनना, अम्लों को तनु करते समय सदैव जल में धीरे-धीरे अम्ल मिलाना (न कि अम्ल में जल), और उचित संवातन सुनिश्चित करना।'
        }
      ],
      quiz: [
        {
          question: `किसी भी रासायनिक समीकरण को संतुलित करते समय किस नियम का पालन अनिवार्य रूप से किया जाता है?`,
          options: [
            'द्रव्यमान संरक्षण का नियम (Law of Conservation of Mass)',
            'ऊर्जा ह्रास का नियम',
            'बॉयल का नियम',
            'आर्किमिडीज का सिद्धांत'
          ],
          answerIndex: 0,
          explanation: 'रासायनिक अभिक्रिया में कुल द्रव्यमान अपरिवर्तित रहता है, इसलिए दोनों ओर परमाणुओं की संख्या समान की जाती है।'
        },
        {
          question: `सांद्र अम्ल को तनु (Dilute) करते समय कौन सी विधि रासायनिक रूप से सुरक्षित है?`,
          options: [
            'जल में धीरे-धीरे लगातार हिलाते हुए अम्ल मिलाना',
            'अम्ल में एक साथ अधिक जल डालना',
            'अम्ल को तेजी से उबालना',
            'दोनों को बिना हिलाए मिलाना'
          ],
          answerIndex: 0,
          explanation: 'अम्ल का जल में घुलना अत्यधिक ऊष्माक्षेपी होता है; जल में धीरे-धीरे अम्ल मिलाने से मिश्रण छलकने से बचता है।'
        },
        {
          question: `आधुनिक आवर्त सारणी में तत्वों को किस आधार पर वर्गीकृत किया गया है?`,
          options: [
            'बढ़ते हुए परमाणु क्रमांक (Atomic Number) के आधार पर',
            'घटते हुए परमाणु भार के आधार पर',
            'केवल गैसीय अवस्था के आधार पर',
            'रंग और चमक के आधार पर'
          ],
          answerIndex: 0,
          explanation: 'आधुनिक आवर्त नियम तत्वों की परमाणु संख्या (परमाणु क्रमांक) पर आधारित है।'
        }
      ]
    };
  }

  if (domain === 'academics-biology') {
    return {
      viva: [
        {
          q: `अध्याय "${cleanTitle}" में जैविक प्रक्रमों और शारीरिक क्रियाओं का क्या महत्व है?`,
          a: 'यह अध्याय सजीवों के जीवन चक्र, ऊर्जा रूपांतरण, कोशिका संगठन और जैव विविधता के संतुलन को स्पष्ट करता है, जो स्वास्थ्य विज्ञान और पारिस्थितिकी की नींव है।'
        },
        {
          q: `जीव विज्ञान परीक्षा में नामांकित आरेख (Well-labeled Diagram) का क्या महत्व है?`,
          a: 'आरेख जैविक संरचनाओं की स्पष्ट समझ प्रदर्शित करते हैं। पेंसिल से स्वच्छ चित्र बनाकर सभी मुख्य अंगों को सही तीर से दाईं ओर नामांकित करने पर पूर्ण अंक मिलते हैं।'
        },
        {
          q: 'पौधों और जंतुओं में पोषण विधि का मुख्य अंतर क्या है?',
          a: 'पौधे स्वपोषी होते हैं जो प्रकाश संश्लेषण द्वारा स्वयं भोजन बनाते हैं, जबकि जंतु परपोषी होते हैं जो प्रत्यक्ष या अप्रत्यक्ष रूप से पौधों पर निर्भर रहते हैं।'
        }
      ],
      quiz: [
        {
          question: `जीव विज्ञान में नामांकित चित्र बनाते समय किस नियम का पालन करना सर्वाधिक उपयुक्त माना जाता है?`,
          options: [
            'स्पष्ट रेखांकन और सभी मुख्य भागों का सही नामकरण (Labeling)',
            'केवल रंगों से भरना बिना नाम लिखे',
            'आकार को जितना संभव हो छोटा बनाना',
            'बिना शीर्षक के चित्र बनाना'
          ],
          answerIndex: 0,
          explanation: 'स्वच्छ रेखांकन और सही नामकरण से परीक्षक को छात्र के अवधारणात्मक ज्ञान की स्पष्ट जानकारी मिलती है।'
        },
        {
          question: `जीवों में ऊर्जा उत्पादन का मुख्य केंद्र कौन सा कोशिकांग होता है?`,
          options: [
            'माइटोकॉन्ड्रिया (Mitochondria)',
            'लाइसोसोम',
            'रिक्तिका',
            'कोशिका भित्ति'
          ],
          answerIndex: 0,
          explanation: 'माइटोकॉन्ड्रिया में कोशिकीय श्वसन द्वारा ATP (ऊर्जा मुद्रा) का निर्माण होता है।'
        },
        {
          question: `सजीवों के लक्षणप्ररूपी (Phenotypic) और जीनप्ररूपी (Genotypic) गुणों में क्या मूलभूत अंतर है?`,
          options: [
            'लक्षणप्ररूपी बाह्य दिखाई देने वाले लक्षण हैं जबकि जीनप्ररूपी आनुवंशिक संरचना है',
            'दोनों में कोई अंतर नहीं है',
            'जीनप्ररूपी केवल रंग बताता है',
            'लक्षणप्ररूपी केवल पौधों में होता है'
          ],
          answerIndex: 0,
          explanation: 'Phenotype बाह्य रूप-रंग को दर्शाता है और Genotype उस लक्षण के पीछे के आनुवंशिक युग्मों (Alleles) को दर्शाता है।'
        }
      ]
    };
  }

  // ==========================================
  // 9. DEFAULT ACADEMIC / GENERAL SYNTHESIZER
  // ==========================================
  return {
    viva: [
      {
        q: `"${cleanTitle}" के अध्ययन का मूल उद्देश्य और व्यावहारिक जीवन में इसकी क्या महत्ता है?`,
        a: `यह अध्याय विषय की मूलभूत संकल्पनाओं को स्पष्ट करता है तथा विश्लेषणात्मक चिंतन, समस्या-समाधान क्षमता और तार्किक निर्णय लेने की योग्यता का विकास करता है।`
      },
      {
        q: `इस अध्याय (${cleanTitle}) से परीक्षा में पूछे जाने वाले दीर्घ उत्तरीय प्रश्नों को हल करने की सर्वोत्तम विधि क्या है?`,
        a: `उत्तर को विषयवार शीर्षकों में विभाजित करें, मुख्य तकनीकी/साहित्यिक शब्दों को रेखांकित करें, उपयुक्त उदाहरण या समीकरण प्रस्तुत करें, और अंत में एक सुसंगत निष्कर्ष लिखें।`
      },
      {
        q: `इस अध्याय के कठिन बिंदुओं को याद रखने के लिए कौन सी वैज्ञानिक तकनीक सबसे प्रभावी है?`,
        a: `सक्रिय स्मरण (Active Recall), स्पेसड् रिपीटिशन (Spaced Repetition) और प्रत्येक मुख्य बिंदु का स्वयं के शब्दों में संक्षिप्त माइंड मैप बनाना।`
      }
    ],
    quiz: [
      {
        question: `अध्याय "${cleanTitle}" के गहन अध्ययन के पश्चात सबसे महत्वपूर्ण निष्कर्ष क्या प्राप्त होता है?`,
        options: [
          'सिद्धांतों की सही समझ ही व्यावहारिक सफलता और परीक्षा में पूर्ण अंक दिलाती है',
          'केवल प्रश्नों के उत्तर रट लेना पर्याप्त है',
          'बिना योजना के अध्ययन करने से समय की बचत होती है',
          'कठिन विषयों को छोड़ देना चाहिए'
        ],
        answerIndex: 0,
        explanation: 'सटीक वैचारिक समझ और निरंतर अभ्यास ही किसी भी विषय में महारत हासिल करने का एकमात्र प्रमाणित मार्ग है।'
      },
      {
        question: `इस विषय में सर्वोत्तम प्रदर्शन सुनिश्चित करने के लिए अध्ययन की सही कार्यप्रणाली क्या होनी चाहिए?`,
        options: [
          'परीक्षा से ठीक एक दिन पहले पूरी पुस्तक पढ़ना',
          'अवधारणाओं का चरणबद्ध अध्ययन, हस्तलिखित नोट्स और विगत वर्षों के प्रश्नों का अभ्यास',
          'केवल बहुविकल्पीय प्रश्नों को देखना और थ्योरी को छोड़ देना',
          'बिना समझे केवल सूत्रों को याद करना'
        ],
        answerIndex: 1,
        explanation: 'नियमित रूप से बुलेट नोट्स बनाना और पिछले वर्षों के प्रश्नों का अभ्यास करना परीक्षा में शीर्ष रैंक सुनिश्चित करता है।'
      },
      {
        question: `किसी भी विषय की तैयारी करते समय समय प्रबंधन (Time Management) का क्या महत्व है?`,
        options: [
          'इसका कोई विशेष महत्व नहीं है',
          'इससे केवल कठिन अध्यायों की ही पढ़ाई हो पाती है',
          'यह पढ़ाई की गति को धीमा कर देता है',
          'यह सभी अध्यायों को संतुलित समय देकर परीक्षा हॉल के तनाव को समाप्त करता है'
        ],
        answerIndex: 3,
        explanation: 'संतुलित समय प्रबंधन से सभी टॉपिक्स का समय पर रिवीज़न होता है और छात्र आत्मविश्वास के साथ परीक्षा दे पाता है।'
      }
    ]
  };
}

/**
 * Generates an enriched domain chapter
 */
function generateDomainChapter(
  book: EBookItem,
  chapterIndex: number,
  cleanTitle: string,
  domain: BookSubjectDomain
): EnrichedChapter {
  const isHindiSubject =
    domain === 'literature-hindi' ||
    domain === 'academics-social' ||
    domain === 'academics-math' ||
    domain === 'academics-science' ||
    domain === 'academics-physics' ||
    domain === 'academics-chemistry' ||
    domain === 'academics-biology';

  const chapterNum = chapterIndex + 1;
  const formattedTitle = isHindiSubject
    ? `अध्याय ${chapterNum}: ${cleanTitle}`
    : `Chapter ${chapterNum}: ${cleanTitle}`;

  // Domain specific rich summary
  let summary = '';
  switch (domain) {
    case 'literature-hindi':
      summary = `यह अध्याय (${cleanTitle}) मानवीय संवेदना, सामाजिक सरोकारों और जीवन मूल्यों का अत्यंत गहन एवं मार्मिक विश्लेषण प्रस्तुत करता है। लेखक/कवि ने अपनी सशक्त भाषा-शैली, जीवंत पात्रों और सटीक बिंबों के माध्यम से पाठकों को एक गहरा चिंतनशील दृष्टिकोण प्रदान किया है, जो बोर्ड परीक्षा के दृष्टिकोण से अत्यंत महत्वपूर्ण है।`;
      break;
    case 'literature-english':
      summary = `This chapter explores "${cleanTitle}" through rich narrative perspectives, character psychological journeys, and timeless thematic undertones. The author employs deliberate literary techniques, subtle irony, and emotional resonance to deliver a compelling reading experience designed for academic mastery.`;
      break;
    case 'academics-math':
      summary = `यह अध्याय "${cleanTitle}" के मूल प्रमेयों, सर्वसमिकाओं, बीजगणितीय सिद्धांतों और चरणबद्ध हल प्रविधियों की संपूर्ण अवधारणात्मक समझ प्रदान करता है। बोर्ड एवं प्रतियोगी परीक्षाओं में पूछे जाने वाले मानक प्रश्नों, हॉट्स (HOTS) समस्याओं और सामान्य गणना त्रुटियों से बचने के नियमों का इसमें व्यवस्थित विश्लेषण किया गया है।`;
      break;
    case 'academics-physics':
      summary = `इस अध्याय में "${cleanTitle}" के भौतिकी नियमों, गणितीय समीकरणों, किरण व परिपथ आरेखों तथा संख्यात्मक प्रश्नों की संपूर्ण चरणबद्ध व्याख्या प्रस्तुत की गई है। छात्र इसके माध्यम से बोर्ड परीक्षा तथा प्रतियोगी परीक्षाओं में सटीक वैचारिक समझ और अधिकतम अंक सुनिश्चित कर सकते हैं।`;
      break;
    case 'academics-chemistry':
      summary = `यह अध्याय "${cleanTitle}" की रासायनिक अभिक्रियाओं, आणविक संरचनाओं, आवर्ती प्रवृत्तियों और संतुलित समीकरणों का व्यवस्थित अध्ययन कराता है। प्रायोगिक अवलोकनों और महत्वपूर्ण अभिक्रियाओं की रासायनिक क्रियाविधि को सरल भाषा में स्पष्ट किया गया है।`;
      break;
    case 'academics-biology':
      summary = `इस अध्याय में "${cleanTitle}" के जैविक तंत्रों, कोशिकीय प्रक्रियाओं, नामांकित आरेखों और जीवन चक्र की विस्तृत एवं प्रामाणिक व्याख्या की गई है। बोर्ड परीक्षा के दृष्टिकोण से 5-अंक वाले आरेख आधारित प्रश्नों की विशेष तैयारी इसमें समाहित है।`;
      break;
    case 'academics-science':
      summary = `इस अध्याय में "${cleanTitle}" के वैज्ञानिक नियमों, भौतिक/रासायनिक परिघटनाओं, संतुलित रासायनिक समीकरणों और प्रायोगिक अवलोकनों का विस्तृत एवं प्रामाणिक विवरण दिया गया है। छात्र इस अध्याय के माध्यम से सिद्धांतों के दैनिक जीवन में अनुप्रयोग और प्रयोगशाला वाइवा के सभी प्रमुख पहलुओं को समझ सकेंगे।`;
      break;
    case 'academics-social':
      summary = `यह अध्याय "${cleanTitle}" की ऐतिहासिक, भौगोलिक, संवैधानिक और आर्थिक पृष्ठभूमि का विस्तृत तथ्यात्मक अध्ययन कराता है। प्रमुख तिथियां, संवैधानिक अनुच्छेद, भौगोलिक मानचित्र कार्य और 5-अंक वाले बोर्ड परीक्षा प्रश्नों की सटीक संरचना इसमें विश्लेषित की गई है।`;
      break;
    case 'competitive-exams':
      summary = `प्रतियोगी परीक्षाओं (UPSC, SSC, State PCS, Banking) के नवीनतम ट्रेंड के अनुसार, "${cleanTitle}" से जुड़े सभी उच्च-प्राथमिकता वाले वन-लाइनर फैक्ट्स, प्रीलिम्स कॉन्सेप्ट्स, मेन्स विश्लेषणात्मक बिंदु और 50-50 एलिमिनेशन ट्रिक्स को इस अध्याय में संकलित किया गया है।`;
      break;
    case 'business-life':
      summary = `यह अध्याय "${cleanTitle}" के माध्यम से व्यावहारिक जीवन दर्शन, वित्तीय अनुशासन, दैनिक आदत निर्माण और रणनीतिक निर्णय लेने की कला सिखाता है। वास्तविक केस स्टडीज और व्यावहारिक चेकलिस्ट के साथ यह अध्याय जीवन और करियर में स्थायी सफलता की रूपरेखा तैयार करता है।`;
      break;
    case 'puzzles-logic':
      summary = `इस अध्याय में "${cleanTitle}" से संबंधित तार्किक पहेलियों, पैटर्न रिकग्निशन, एलिमिनेशन तकनीकों और उलटी दिशा में सोचने (Backward Reasoning) के तरीकों का व्यवस्थित विश्लेषण है। यह मस्तिष्क की समस्या-समाधान गति और एप्टीट्यूड को तीक्ष्ण बनाता है।`;
      break;
    case 'tech-ai':
      summary = `An architectural deep-dive into ${cleanTitle} covering transformer attention equations, vector cosine metrics, token distribution mechanics, and production RAG pipeline implementation with defensive guardrails against hallucinations.`;
      break;
    case 'tech-web':
      summary = `Comprehensive engineering guide to ${cleanTitle} detailing declarative reactive state propagation, DOM reconciliation trees, memoization heuristics, accessibility compliance, and robust full-stack error handling.`;
      break;
    case 'tech-cyber':
      summary = `Defensive cybersecurity breakdown of ${cleanTitle} covering OWASP vulnerability matrices, cryptographic cipher suites, zero-trust perimeter enforcement, and structured penetration testing methodologies.`;
      break;
    case 'tech-python':
      summary = `In-depth Python engineering handbook chapter for ${cleanTitle} analyzing memory-efficient generators, idiomatic comprehensions, defensive typing protocols, and production automation pipelines.`;
      break;
    case 'tech-dsa':
      summary = `Algorithmic analysis of ${cleanTitle} dissecting asymptotic Time/Space complexity bounds, array/pointer boundary invariant conditions, and placement interview solutions.`;
      break;
    case 'tech-systems':
    default:
      summary = `Systems architecture handbook chapter for ${cleanTitle} breaking down concurrency primitives, memory layout barriers, network socket lifecycle management, and scalable enterprise deployment patterns.`;
      break;
  }

  const curated = resolveTopicContent(cleanTitle, book.title, domain);
  const { viva, quiz } = getTopicSpecificVivaAndQuiz(cleanTitle, domain, book.title);

  return {
    chapterNumber: chapterNum,
    title: formattedTitle,
    summary,
    readTime: '12-15 min read',
    coreConcepts: getCuratedCoreConcepts(cleanTitle, domain),
    detailedNotes: generateDetailedNotes(cleanTitle, domain, book.title),
    keyPoints: curated?.keyPoints || getDefaultKeyPoints(cleanTitle, domain),
    codeSnippet: curated?.referenceSnippet || getDomainReferenceSnippet(cleanTitle, domain),
    vivaQuestions: (curated?.viva && curated.viva.length > 0) ? curated.viva : viva,
    quiz: (curated?.quiz && curated.quiz.length > 0) ? curated.quiz : quiz
  };
}
