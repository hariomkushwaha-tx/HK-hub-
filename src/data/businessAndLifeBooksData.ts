import { EBookItem } from '../types';

export const BUSINESS_AND_LIFE_BOOKS_DATA: EBookItem[] = [
  {
    id: 'biz-personal-finance-investing',
    title: 'Personal Finance & Stock Market for Beginners',
    subtitle: 'Compound Interest, Mutual Funds (SIP), Emergency Funds, Stock Valuation & Risk Management',
    author: 'Hariom Kushwaha & Financial Freedom Desk',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Advocate for early financial literacy, compounding, and student financial independence.',
    publisher: 'HK VELORA Open Education Series',
    description: 'A step-by-step roadmap to achieving financial independence in your 20s and 30s. Learn how inflation erodes savings, how mutual fund SIPs work, and how to analyze profitable Indian companies.',
    shortDescription: 'Compound interest math, Index funds vs Active funds, SIPs, PE ratios, and Risk diversification.',
    category: 'Digital Skills & Practical Guides',
    subcategory: 'Finance & Investing',
    coverGradient: 'from-emerald-900 via-teal-950 to-slate-950',
    pages: 280,
    format: 'EPUB / PDF',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewCount: 380,
    price: 0,
    isFree: true,
    badge: 'Life Essential',
    tags: ['Finance', 'Stock Market', 'Mutual Funds', 'Investing', 'SIP', 'Financial Literacy'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Financial Literacy Program',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'The Psychology of Money: Wants vs Needs, Delayed Gratification and The Power of Compounding',
      'The Core Financial Pyramid: Emergency Fund (6 Months of Expenses), Term Insurance & Health Insurance',
      'Demystifying Inflation: Why Keeping Cash in Savings Accounts (3%) Loses Wealth Against Inflation (6-7%)',
      'Mutual Funds Explained: Equity vs Debt Funds, Large-Cap vs Mid/Small-Cap, and Expense Ratios',
      'The Systematic Investment Plan (SIP) Miracle: Rupee Cost Averaging and Long-Term Wealth Creation',
      'Introduction to the Stock Market: BSE, NSE, SEBI Regulations, Nifty 50 and Sensex',
      'Fundamental Analysis Basics: Balance Sheet Assets/Liabilities, P/E Ratio, ROE and Debt-to-Equity',
      'Behavioral Traps: Avoiding F&O Speculation, Ponzi Schemes, and The Golden Rules of Asset Allocation'
    ],
    chaptersPreview: [
      {
        title: 'The Core Financial Pyramid: Emergency Funds, Term Insurance & Compounding',
        summary: 'Never invest in equities until your defensive financial moat is fortified: emergency reserves and low-cost pure risk protection.',
        keyPoints: [
          'Rule 1 of investing: Protect against catastrophic downside before chasing upside returns.',
          'An emergency fund must cover 6 months of essential living expenses parked in liquid FDs or overnight funds.',
          'Pure term insurance provides high life cover (e.g. ₹1 Crore) at minimal cost without mixing investment with insurance.',
          'The Rule of 72: Divide 72 by the annual interest rate to find approximately how many years it takes to double your money.'
        ],
        content: `### वित्तीय स्वतंत्रता का आधार स्तंभ (The Financial Independence Pyramid)

अधिकांश युवा पहली नौकरी मिलते ही शेयर बाजार या क्रिप्टोकरेंसी में सारा पैसा लगा देते हैं। बाजार में मंदी आते ही वे घबराकर घाटे में बेचते हैं।

#### वित्तीय सुरक्षा के तीन अनिवार्य चरण:
1. **स्वास्थ्य बीमा (Health Insurance):**
   - एक गंभीर बीमारी जीवन भर की बचत समाप्त कर सकती है। परिवार के लिए फ्लोटर हेल्थ प्लान अनिवार्य है।
2. **शुद्ध टर्म इंश्योरेंस (Pure Term Insurance):**
   - यदि आपके ऊपर माता-पिता या परिवार आश्रित हैं, तो अपनी वार्षिक आय का कम से कम 10 से 15 गुना का टर्म प्लान लें। कभी भी 'यूलिप' (ULIP) या 'मनी-बैक' पॉलिसी न लें जिनमें रिटर्न केवल 4-5% होता है।
3. **आपातकालीन निधि (Emergency Fund):**
   - कम से कम 6 महीने के अनिवार्य खर्च (किराया, राशन, ईएमआई) को लिक्विड फंड या फिक्स्ड डिपॉजिट में रखें, जिसे आपातकाल में 24 घंटे में निकाला जा सके।

#### 72 का नियम (The Rule of 72):
पैसे को दोगुना होने में लगने वाले वर्षों की गणना:
$$\\text{वर्ष} \\approx \\frac{72}{\\text{वार्षिक रिटर्न दर (\\%)}}$$
- यदि बैंक बचत खाता 3% देता है: $72 / 3 = 24$ वर्ष में पैसा दोगुना होगा (जबकि 6% महंगाई के कारण वास्तविक मूल्य घट जाएगा!)।
- यदि इंडेक्स फंड 12% सीएजीआर (CAGR) देता है: $72 / 12 = 6$ वर्ष में पैसा दोगुना होगा!`,
        realWorldUse: 'Prevents debt traps, predatory loan cycles, and builds generational family security.',
        exercise: 'Calculate your monthly unavoidable expenses and determine the exact amount needed for your 6-month emergency fund.'
      }
    ],
    studyNotes: [
      'Expense Ratio matters: In mutual funds, choose "Direct Plan - Growth" over "Regular Plan" to save 1% to 1.5% intermediary commission annually.',
      'Never trade Futures and Options (F&O) with your savings; SEBI studies show over 90% of retail intraday/F&O traders lose money.'
    ]
  },
  {
    id: 'biz-gst-taxation-practical',
    title: 'Practical GST & Income Tax Guide for Students & Freelancers',
    subtitle: 'PAN, Income Tax Slabs (Old vs New Regime), TDS Returns, GST Registration & Invoicing',
    author: 'CA Ananya Deshmukh & HK VELORA Commerce Cell',
    authorBio: 'Practicing Chartered Accountant and tax educator helping young professionals navigate Indian taxation smoothly.',
    publisher: 'HK VELORA Open Education Series',
    description: 'An actionable, jargon-free guide to Indian taxes for college students, freelancers, coders, and small businesses. Understand TDS refunds, GST thresholds, and filing ITR-1/ITR-4.',
    shortDescription: 'Income tax slabs, Old vs New tax regimes, Section 87A rebate, TDS deduction, and GST invoicing.',
    category: 'Digital Skills & Practical Guides',
    subcategory: 'Finance & Taxation',
    coverGradient: 'from-slate-900 via-indigo-950 to-slate-950',
    pages: 250,
    format: 'EPUB / PDF',
    difficulty: 'Beginner',
    rating: 4.8,
    reviewCount: 215,
    price: 0,
    isFree: true,
    tags: ['Taxation', 'Income Tax', 'GST', 'ITR', 'TDS', 'Finance', 'Freelancers'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Commerce & Financial Law Cell',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Overview of Indian Tax Architecture: Direct Taxes (CBDT) vs Indirect Taxes (CBIC)',
      'Income Tax Slabs: Old Tax Regime (Deductions 80C, 80D) vs New Simplified Regime (Section 115BAC)',
      'Tax Deducted at Source (TDS): Form 26AS, AIS/TIS, and Claiming TDS Refunds via ITR Filing',
      'Types of ITR Forms: When to use ITR-1 (Sahaj), ITR-2, and ITR-4 (Presumptive Taxation 44ADA)',
      'Goods & Services Tax (GST) Architecture: CGST, SGST, IGST and HSN/SAC Codes',
      'GST Thresholds: ₹20 Lakh/₹40 Lakh turnover rules and Composition Scheme benefits',
      'Freelancer & Remote Worker Taxes: Foreign remittances, FIRC, and Export of Services without GST (LUT)',
      'Digital Assets Taxation: 30% flat tax on Virtual Digital Assets (Crypto/NFTs) and 1% TDS (194S)'
    ],
    chaptersPreview: [
      {
        title: 'Income Tax Slabs & Section 87A Rebate: Old vs New Regime',
        summary: 'Clear comparison of tax liabilities under the default New Tax Regime versus the deduction-heavy Old Regime.',
        keyPoints: [
          'Under the New Tax Regime (Section 115BAC), total income up to ₹7 Lakh pays zero tax due to Section 87A rebate.',
          'Standard Deduction of ₹50,000/₹75,000 is available to salaried individuals under both regimes.',
          'Old Regime allows claiming 80C (up to ₹1.5 Lakh in PF/PPF/ELSS), 80D (health insurance), and HRA exemption.',
          'Freelancers with income under ₹50 Lakh can use Section 44ADA to declare 50% of gross receipts as profit without maintaining books.'
        ],
        content: `### आयकर की बुनियादी समझ: पुरानी बनाम नई कर व्यवस्था

प्रत्येक नागरिक को अपनी वार्षिक आय पर देश के विकास हेतु आयकर (Income Tax) देना होता है।

#### नई कर व्यवस्था (New Tax Regime) की मुख्य विशेषताएं:
- यह अब **डिफ़ॉल्ट (Default)** कर व्यवस्था है।
- **कर छूट (Tax Rebate under Section 87A):** यदि आपकी शुद्ध कर योग्य आय ₹7,00,000 तक है, तो धारा 87A के तहत पूरी कर छूट मिल जाती है, यानी आपको **₹0 (शून्य)** टैक्स देना होगा।

#### फ्रीलांसर और पेशेवरों के लिए धारा 44ADA (Presumptive Taxation):
यदि आप सॉफ्टवेयर डेवलपर, लेखक, डिजाइनर या ट्यूटर के रूप में काम करते हैं और आपकी वार्षिक आय ₹50 लाख (या डिजिटल भुगतानों के साथ ₹75 लाख) से कम है:
- आपको जटिल खाते (Balance Sheet/P&L) नहीं बनाने पड़ते।
- आप अपनी कुल आय का सीधा **50% शुद्ध लाभ (Profit)** घोषित करके उसी पर सामान्य स्लैब से टैक्स दे सकते हैं!`,
        realWorldUse: 'Filing annual tax returns, claiming back deducted TDS, and legally optimizing tax savings.',
        exercise: 'Determine whether a salaried employee earning ₹8,50,000 with ₹1.5L 80C investment saves more in Old or New regime.'
      }
    ],
    studyNotes: [
      'Always download Form 26AS and AIS (Annual Information Statement) from the income tax portal before filing ITR.',
      'Letter of Undertaking (LUT) allows Indian software exporters and freelancers to export services at 0% GST without upfront payment.'
    ]
  },
  {
    id: 'biz-effective-communication-skills',
    title: 'Mastering Public Speaking & Professional Communication',
    subtitle: 'Body Language, Persuasion, Pitch Decks, Executive Emails & Interview Mastery',
    author: 'Radhika Sen & HK VELORA Soft Skills Faculty',
    authorBio: 'Corporate communications director, executive speech coach, and mentor to college campus leaders.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Transform self-doubt and stage fright into magnetic executive presence. Master active listening, structured speaking (Pyramid Principle), and high-impact email writing.',
    shortDescription: 'Overcoming glossophobia, voice modulation, structuring presentations, active listening, and salary negotiations.',
    category: 'Digital Skills & Practical Guides',
    subcategory: 'Communication & Leadership',
    coverGradient: 'from-purple-900 via-violet-950 to-slate-950',
    pages: 240,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.9,
    reviewCount: 320,
    price: 0,
    isFree: true,
    badge: 'Career Accelerator',
    tags: ['Communication', 'Public Speaking', 'Soft Skills', 'Interviews', 'Leadership', 'Presentation'],
    language: 'English with Hindi insights',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Soft Skills & Executive Presence Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Deconstructing Stage Fright: The Biology of Glossophobia and The 3-Second Pause Technique',
      'Vocal Dynamics: Tone, Pace, Pitch, Warmth and Eliminating Filler Words (Um, Uh, Like)',
      'Body Language Mastery: Eye Contact, The Open Palm Gesture and Grounded Stance',
      'The Minto Pyramid Principle: Start with the Core Conclusion, Follow with Supporting Arguments',
      'Crafting Unforgettable Presentations: Story Arcs, Data Visualization & The 10-20-30 Rule',
      'Professional Email Etiquette: Clear Subject Lines, The BLUF Method (Bottom Line Up Front) and Brevity',
      'Crucial Conversations: Conflict Resolution, Delivering Constructive Feedback & Empathy',
      'Interview Psychology: The STAR Method (Situation, Task, Action, Result) and Confident Salary Negotiation'
    ],
    chaptersPreview: [
      {
        title: 'The STAR Method for Acing Behavioral & Technical Job Interviews',
        summary: 'How to structure answers to behavioral questions ("Tell me about a time you failed") with undeniable competence and clear business metrics.',
        keyPoints: [
          'Vague answers get rejected; structured narratives with quantified impact get hired.',
          'Situation (S): Set the context in 2 sentences (Where, when, what was the stakes).',
          'Task (T): Define the specific challenge or objective you were responsible for.',
          'Action (A): Describe the exact steps YOU personally took (70% of your total answer time).',
          'Result (R): Conclude with quantifiable business outcomes (e.g. reduced load times by 40%, saved 15 engineering hours).'
        ],
        content: `### साक्षात्कार में सफलता: STAR पद्धति (The STAR Method)

जब साक्षात्कारकर्ता पूछता है: *"हमें किसी ऐसी स्थिति के बारे में बताएं जब आपकी टीम में कोई संकट आया और आपने उसका समाधान किया,"* अधिकांश उम्मीदवार भटक जाते हैं।

#### STAR पद्धति का 4-चरणीय ढांचा:
1. **Situation (परिस्थिति):**
   - *"पिछले वर्ष हमारी कॉलेज फेस्ट वेबसाइट पर उद्घाटन वाले दिन अचानक 10,000 छात्रों का ट्रैफिक आने से सर्वर क्रैश हो गया।"*
2. **Task (कार्यभार):**
   - *"तकनीकी लीड होने के नाते मेरी जिम्मेदारी थी कि 30 मिनट के भीतर सर्वर को बहाल किया जाए ताकि ऑनलाइन रजिस्ट्रेशन न रुकें।"*
3. **Action (आपकी कार्यवाही - सबसे महत्वपूर्ण भाग):**
   - *"मैंने सबसे पहले सर्वर लॉग्स का विश्लेषण किया और पाया कि डेटाबेस पर बिना इंडेक्स वाले सर्च प्रश्नों से सीपीयू 100% पहुंच गया था। मैंने तुरंत डेटाबेस पर बी-ट्री इंडेक्स लगाया, क्लाउडफ्लेयर कैशिंग सक्रिय की, और गैर-जरूरी भारी इमेजों को संपीड़ित किया।"*
4. **Result (परिणाम - संख्याओं में मापें):**
   - *"वेबसाइट 18 मिनट में पुनः चालू हो गई, रिस्पॉन्स टाइम 4 सेकंड से घटकर 200 मिलीसेकंड हो गया, और उस दिन रिकॉर्ड 8,500 रजिस्ट्रेशन बिना किसी रुकावट के संपन्न हुए।"*`,
        realWorldUse: 'Standard format evaluated across FAANG, Fortune 500 companies, and civil services personality boards.',
        exercise: 'Write down two personal stories from your academic or project journey formatted strictly according to the STAR method.'
      }
    ],
    studyNotes: [
      'BLUF Rule: In work emails, always put your request or main decision in the very first sentence.',
      'Replace filler words ("umm", "aaah") with deliberate 2-second silence; pauses convey authority and confidence.'
    ]
  },
  {
    id: 'biz-startup-building-playbook',
    title: 'The Indian Startup Playbook: From Idea to Product-Market Fit',
    subtitle: 'Problem Validation, MVP Prototyping, Unit Economics, Pitch Decks & DPIIT Registration',
    author: 'Hariom Kushwaha & HK Tech Ventures',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Serial founder building open developer platforms and student tech ecosystems.',
    publisher: 'HK VELORA Open Education Series',
    description: 'A no-nonsense execution manual for aspiring Indian entrepreneurs. Learn how to validate painful customer problems, build MVPs without burning cash, achieve CAC < LTV, and raise seed capital.',
    shortDescription: 'Idea validation, Lean MVP building, Product-Market Fit signals, Unit Economics (LTV/CAC), and Pitching.',
    category: 'Digital Skills & Practical Guides',
    subcategory: 'Entrepreneurship & Startups',
    coverGradient: 'from-amber-900 via-orange-950 to-slate-950',
    pages: 310,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 360,
    price: 0,
    isFree: true,
    badge: 'Founder Favorite',
    tags: ['Startups', 'Entrepreneurship', 'Product Market Fit', 'MVP', 'Pitch Deck', 'Business'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Startup Incubation Hub',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'The Fallacy of the "Million-Dollar Idea": Why Execution, Distribution & Timing Trump Novelty',
      'The "Mom Test" for Customer Discovery: Asking Questions that Reveal Honest Behavior, Not Flattery',
      'Building the Scrappy Minimum Viable Product (MVP): No-Code, Concierge, and Wizard-of-Oz MVPs',
      'The Mathematical Reality of Product-Market Fit (PMF): Sean Ellis Test (>40% "Very Disappointed") & Organic Retention',
      'Mastering Unit Economics: Customer Acquisition Cost (CAC), Lifetime Value (LTV), Payback Period and Churn Rate',
      'Startup India Framework: DPIIT Recognition, Section 80-IAC Tax Exemption, and GeM Portal Bidding',
      'The 10-Slide Pitch Deck: Problem, Solution, Market Size (TAM/SAM/SOM), Traction, Team & The Ask',
      'Bootstrapping vs Venture Capital: Preserving Equity vs Blitzscaling and Avoiding Premature Scaling'
    ],
    chaptersPreview: [
      {
        title: 'Mastering Unit Economics: The Lifeblood of Sustainable Startups',
        summary: 'Understand why growth without positive unit economics leads to startup bankruptcy, and master the core formula LTV > 3x CAC.',
        keyPoints: [
          'A business that loses money on every transaction cannot make it up on volume.',
          'Customer Acquisition Cost (CAC) = Total Sales & Marketing Expenses / Number of New Customers Acquired.',
          'Customer Lifetime Value (LTV) = Average Order Value × Purchase Frequency × Gross Margin / Churn Rate.',
          'The Golden Startup Ratio: LTV / CAC should be at least 3.0 with a payback period under 12 months.'
        ],
        content: `### यूनिट इकोनॉमिक्स: स्टार्टअप की वास्तविक जीवनरेखा

कई स्टार्टअप लाखों का फंड जुटाने के बाद भी बंद हो जाते हैं क्योंकि उनके पास लाभदायक **यूनिट इकोनॉमिक्स (Unit Economics)** नहीं होती।

#### मुख्य वित्तीय सूत्र:
1. **ग्राहक अधिग्रहण लागत (Customer Acquisition Cost - CAC):**
   $$\\text{CAC} = \\frac{\\text{विपणन एवं विज्ञापन पर कुल खर्च}}{\\text{प्राप्त किए गए नए ग्राहकों की संख्या}}$$
   *यदि आपने फेसबुक विज्ञापनों पर ₹50,000 खर्च किए और 50 नए भुगतान करने वाले ग्राहक मिले, तो आपका CAC = ₹1,000 है।*

2. **ग्राहक का जीवनकाल मूल्य (Customer Lifetime Value - LTV):**
   एक ग्राहक अपने पूरे जुड़ाव काल में आपके व्यवसाय को शुद्ध कितना लाभ देता है।

3. **स्वर्णिम अनुपात (The Golden Ratio):**
   $$\\frac{\\text{LTV}}{\\text{CAC}} \\ge 3.0$$
   - **यदि अनुपात < 1.0:** आपका व्यवसाय प्रत्येक नए ग्राहक पर पैसे गंवा रहा है।
   - **यदि अनुपात = 1.0:** आप केवल ब्रेक-ईवन कर रहे हैं, वेतन और सर्वर खर्च नहीं निकलेंगे।
   - **यदि अनुपात > 3.0:** आपका व्यवसाय अत्यंत स्वस्थ है और निवेश के योग्य है!`,
        realWorldUse: 'Evaluated by angel investors and venture capital firms (Sequoia, Accel, Y Combinator) during due diligence.',
        exercise: 'Calculate the CAC and LTV for an educational SaaS tool charging ₹499/month with a 5% monthly churn rate.'
      }
    ],
    studyNotes: [
      'The Sean Ellis PMF Test: Survey your active users asking "How would you feel if you could no longer use this product?" If 40%+ answer "Very disappointed", you have reached Product-Market Fit.',
      'Never incorporate a private limited company until you have validated customer willingness to pay through manual prototypes or pre-orders.'
    ]
  },
  {
    id: 'biz-digital-marketing-seo',
    title: 'Digital Marketing, SEO & Content Strategy Blueprint',
    subtitle: 'Technical SEO, High-Intent Keyword Research, Meta/Google Ads & Funnel Conversion',
    author: 'Pooja Kashyap & HK VELORA Growth Desk',
    authorBio: 'Growth marketing strategist and search engine optimization director at HK VELORA Open Education Series.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Learn modern performance marketing from first principles. Master Google Search Console, Core Web Vitals, programmatic SEO, email automation, and conversion rate optimization (CRO).',
    shortDescription: 'SEO keyword intent, Technical crawlability, Meta Ads campaigns, Landing page CRO, and Email funnels.',
    category: 'Digital Skills & Practical Guides',
    subcategory: 'Digital Marketing',
    coverGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    pages: 260,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 280,
    price: 0,
    isFree: true,
    tags: ['Digital Marketing', 'SEO', 'Google Ads', 'Content Strategy', 'CRO', 'Growth'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Digital Marketing & Growth Lab',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'How Search Engines Work: Crawling, Indexing, RankBrain, and Semantic Entity Graph',
      'Keyword Research: Informational vs Commercial vs Transactional Intent & Long-Tail Opportunities',
      'On-Page SEO: Title Tags, Meta Descriptions, Header Hierarchy, Schema Markup & Internal Linking',
      'Technical SEO: Core Web Vitals (LCP, INP, CLS), XML Sitemaps, Robots.txt & Canonical Tags',
      'Content Marketing: The Hub-and-Spoke Pillar Model and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)',
      'Paid Acquisition: Google Search Ads (Ad Rank = Max CPC × Quality Score) & Negative Keywords',
      'Meta Performance Ads: Pixel Tracking, Custom Audiences, Lookalikes & Creative Testing',
      'Conversion Rate Optimization (CRO): A/B Testing Headlines, Social Proof and Micro-copy Tweaks'
    ],
    chaptersPreview: [
      {
        title: 'Keyword Intent & The Hub-and-Spoke Content Model',
        summary: 'Why ranking for high-volume vanity keywords produces zero revenue, and how to build topical authority through structured content silos.',
        keyPoints: [
          'Search intent classifies user queries into Informational, Navigational, Commercial, and Transactional.',
          'Transactional keywords ("buy competitive exam book online") convert 10x higher than generic queries ("books").',
          'The Hub-and-Spoke (Pillar-Cluster) model establishes topical authority in Google’s Knowledge Graph.',
          'Always link cluster articles back to the main pillar page using descriptive keyword-rich anchor text.'
        ],
        content: `### सर्च इंटेंट और टॉपिकल अथॉरिटी (Topical Authority)

सर्च इंजन ऑप्टिमाइजेशन (SEO) में सबसे बड़ी गलती केवल 'सर्च वॉल्यूम' देखकर लेख लिखना है।

#### 1. सर्च इंटेंट के चार प्रकार (Four Search Intents):
- **Informational (सूचनात्मक):** *उदा. "HCF क्या होता है?"* (उपयोगकर्ता केवल सीखना चाहता है, खरीदारी की संभावना कम)।
- **Navigational (नेविगेशनल):** *उदा. "HK VELORA ई-बुक्स लॉगिन"* (उपयोगकर्ता किसी विशिष्ट वेबसाइट पर जाना चाहता है)।
- **Commercial Investigation (व्यावसायिक अनुसंधान):** *उदा. "बेस्ट कोडिंग बुक्स फॉर बिगिनर्स रिव्यू"* (उपयोगकर्ता तुलना कर रहा है)।
- **Transactional (लेनदेन संबंधी):** *उदा. "डाउनलोड फ्री पाइथन ई-बुक पीडीएफ"* (उपयोगकर्ता तुरंत एक्शन लेने को तैयार है)।

#### 2. हब-एंड-स्पोक मॉडल (Hub and Spoke Architecture):
एक केंद्रीय विस्तृत पृष्ठ बनाएं (जैसे: *'वेब डेवलपमेंट का संपूर्ण गाइड'* - Hub)। इसके चारों ओर 10 विस्तृत उप-विषयों पर लेख लिखें (उदा: HTML, CSS, JavaScript, React - Spokes)। सभी उप-पृष्ठ मुख्य पृष्ठ को लिंक करते हैं, जिससे गूगल समझता है कि आपकी वेबसाइट इस विषय पर पूर्ण अधिकार (Authority) रखती है।`,
        realWorldUse: 'Drives millions of organic visits to ed-tech platforms, e-commerce stores, and software companies.',
        exercise: 'Select a niche topic and map out 1 pillar page title and 5 cluster sub-page titles targeting long-tail queries.'
      }
    ],
    studyNotes: [
      'Core Web Vitals: Largest Contentful Paint (LCP) must load within 2.5 seconds; Interaction to Next Paint (INP) must be under 200 milliseconds.',
      'Google E-E-A-T: Always include real author bios, publisher credentials, and primary research citations in educational articles.'
    ]
  },
  {
    id: 'biz-time-management-deep-work',
    title: 'Focus & Deep Work for Students: The Ultimate Productivity Blueprint',
    subtitle: 'Overcoming Procrastination, Dopamine Detox, Pomodoro Mastery & Habit Stacking',
    author: 'Hariom Kushwaha & Student Success Cell',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Productivity researcher passionate about student mental clarity and deep work habits.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Reclaim your attention span in an era of TikTok reels and algorithmic distraction. Master high-intensity focused study sessions, time-blocking, and emotional self-regulation.',
    shortDescription: 'Deep work rules, Dopamine reset, Pomodoro technique, Time blocking calendar, and Atomic habit loops.',
    category: 'Digital Skills & Practical Guides',
    subcategory: 'Productivity & Habits',
    coverGradient: 'from-teal-900 via-emerald-950 to-slate-950',
    pages: 220,
    format: 'EPUB / PDF',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewCount: 410,
    price: 0,
    isFree: true,
    badge: 'Student Essential',
    tags: ['Productivity', 'Deep Work', 'Habits', 'Time Management', 'Focus', 'Study Skills'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Student Mental Well-being & Focus Project',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'The Attention Crisis: How Infinite Scroll & Short-Form Video Hijack Human Dopamine Circuits',
      'Shallow Work vs Deep Work: Why 4 Hours of Intense Focus Beats 10 Hours of Distracted Multitasking',
      'The Biology of Procrastination: The Amygdala Hijack and The 5-Second Rule',
      'Mastering the Advanced Pomodoro: 50/10 Focus Blocks and Active Physical Rest',
      'Time Blocking & Day Theming: Replacing Ambiguous To-Do Lists with Concrete Calendar Appointments',
      'The Habit Loop: Cue, Craving, Response, Reward and The Power of 1% Daily Compounding',
      'Digital Hygiene Protocol: Grayscale Screen Mode, App Timers, and Notification Annihilation',
      'Evening Shutdown Ritual: Clearing Working Memory to Prevent Exam Anxiety and Sleep Deprivation'
    ],
    chaptersPreview: [
      {
        title: 'Shallow Work vs Deep Work: The High-Yield Study Formula',
        summary: 'High-achieving students do not study 16 hours a day; they achieve superior academic results through concentrated, uninterrupted deep work.',
        keyPoints: [
          'Deep Work: Professional activities performed in a state of distraction-free concentration that push cognitive capabilities to their limit.',
          'Attention Residue: Switching tasks leaves a cognitive penalty behind, reducing IQ and memory recall for up to 20 minutes.',
          'Law of Productivity: High-Quality Work Produced = (Time Spent) × (Intensity of Focus).',
          'Protecting 3 hours of uninterrupted morning focus yields more breakthroughs than an entire day of distracted study.'
        ],
        content: `### गहरा ध्यान बनाम सतही कार्य (Deep Work vs Shallow Work)

अक्सर विद्यार्थी शिकायत करते हैं: *"मैं दिन भर में 10 घंटे मेज पर बैठा रहता हूं, फिर भी कोर्स पूरा नहीं हो रहा!"*

इसका कारण है **अटेंशन रेजिड्यू (Attention Residue - ध्यान का अवशेष)**। जब आप पढ़ते समय हर 10 मिनट में फोन पर व्हाट्सएप या इंस्टाग्राम नोटिफिकेशन चेक करते हैं, तो आपका दिमाग तुरंत पढ़ाई पर वापस केंद्रित नहीं हो पाता। दिमाग का एक हिस्सा पिछले मैसेज पर ही अटका रहता है।

#### उत्पादकता का नियम:
$$\\text{उत्पादित कार्य की गुणवत्ता} = \\text{लगाया गया समय} \\times \\text{एकाग्रता की तीव्रता}$$

यदि एकाग्रता की तीव्रता (0 से 10 के पैमाने पर) केवल 2 है, तो 10 घंटे अध्ययन करने पर भी $10 \\times 2 = 20$ यूनिट परिणाम मिलेगा।
किंतु यदि आप फोन को दूसरे कमरे में रखकर 4 घंटे पूर्ण एकाग्रता (तीव्रता = 9) से पढ़ते हैं, तो $4 \\times 9 = 36$ यूनिट परिणाम मिलेगा — यानी आधे से भी कम समय में दोगुना उत्पादकता!`,
        realWorldUse: 'Used by top competitive exam toppers, software architects, researchers, and professional writers.',
        exercise: 'Conduct a 48-hour digital distraction audit tracking every time you unlock your smartphone during study hours.'
      }
    ],
    studyNotes: [
      'The 2-Minute Rule: If a task takes less than 2 minutes, do it immediately instead of writing it down on a to-do list.',
      'Sleep consolidation: The human brain transfers facts from short-term hippocampus to long-term neocortex memory during deep slow-wave sleep.'
    ]
  }
];

