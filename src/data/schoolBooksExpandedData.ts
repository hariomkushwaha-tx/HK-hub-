import { EBookItem } from '../types';

export const SCHOOL_BOOKS_EXPANDED_DATA: EBookItem[] = [
  // ==========================================
  // CLASS 9 EXPANDED SUBJECTS
  // ==========================================
  {
    id: 'class9-english-mastery',
    title: 'Class 9 English Language & Literature Handbook',
    subtitle: 'NCERT Beehive, Moments, Reading Comprehension & Creative Writing',
    author: 'Sunita Sharma & HK English Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 9',
    schoolClass: 'Class 9',
    subject: 'English',
    bookType: 'Study Guide',
    pages: 260,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Beginner',
    rating: 4.88,
    reviewCount: 290,
    badge: 'NCERT Aligned',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-600 to-orange-700',
    tags: ['Class 9', 'English', 'Beehive', 'Moments', 'Grammar', 'Writing Skills', 'CBSE'],
    topics: ['The Fun They Had', 'The Sound of Music', 'The Road Not Taken', 'Wind', 'Tenses', 'Modals', 'Formal Letter Writing', 'Diary Entry'],
    language: 'English with Hindi Notes',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Open Educational Curriculum & HK English Academic Cell',
    whatYoullLearn: [
      'Deconstruct prose and poetry themes with critical thinking answers for CBSE exams',
      'Master English grammar: Subject-verb agreement, Reported Speech, Tenses, and Prepositions',
      'Format diary entries, descriptive paragraphs, and informal letters with full mark rubrics',
      'Unseen reading passage skimming, scanning, and vocabulary inference techniques'
    ],
    tableOfContents: [
      'Chapter 1: Beehive Prose In-Depth Analysis & Character Sketches',
      'Chapter 2: Poetic Devices, Themes & Rhyme Schemes (Beehive Poetry)',
      'Chapter 3: Moments Supplementary Reader Summaries & Moral Dilemmas',
      'Chapter 4: Integrated Grammar (Tenses, Modals, Determiners, Subject-Verb Concord)',
      'Chapter 5: Reported Speech & Direct-Indirect Transformations',
      'Chapter 6: Creative Writing: Descriptive Paragraphs & Diary Entries',
      'Chapter 7: Unseen Reading Comprehension Strategies & Vocabulary Building',
      'Chapter 8: Board-Pattern Sample Question Papers & Model Answers'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Beehive Prose In-Depth Analysis & Character Sketches',
        summary: 'Detailed chapter summaries of foundational stories: "The Fun They Had" by Isaac Asimov exploring future computerized schooling, and "The Sound of Music" depicting Evelyn Glennie’s inspiring triumph over hearing impairment.',
        keyPoints: [
          'Isaac Asimov contrast: mechanical teacher on a screen vs human teacher in a shared social classroom.',
          'Evelyn Glennie learned to feel musical vibrations through her body instead of ears, proving determination conquers physical barriers.',
          'Bismillah Khan’s dedication brought the shehnai from royal naubat khana to the classical concert stage.'
        ],
        codeSnippet: `Reading Strategy:
1. Skim headings and first sentences of paragraphs.
2. Underline unfamiliar adjectives; deduce meaning from context.
3. For character sketches, note 3 traits with supporting text evidence.`,
        realWorldUse: 'Develops empathy, critical literary appreciation, and clear written English communication.'
      },
      {
        title: 'Chapter 4: Integrated Grammar (Tenses, Modals, Determiners, Subject-Verb Concord)',
        summary: 'Systematic explanation of 12 tenses with visual timeline charts, rules of concord (singular subject takes singular verb, either/neither rules), and correct usage of modal auxiliaries.',
        keyPoints: [
          'Neither of the students *is* present (indefinite pronouns neither/either take singular verbs).',
          'Past Perfect vs Simple Past: The train *had left* (earlier past) before we *reached* (past) the station.',
          'Modals of obligation: "Must" conveys internal/strong necessity, while "Should" conveys advice.'
        ],
        codeSnippet: `Rule of Proximity vs Subject Head:
The quality of these mangoes [is / are] great.
-> Subject is "quality" (singular), not "mangoes"!
-> Correct: The quality of these mangoes is great.`,
        realWorldUse: 'Essential for high-scoring school examinations, competitive aptitude tests, and everyday professional correspondence.'
      }
    ],
    studyNotes: [
      'In poetry questions, always mention the poetic device: Alliteration, Personification, Metaphor, or Onomatopoeia with the exact line quote.',
      'In diary entry, always maintain personal first-person voice (I, my) and capture authentic emotional reactions.'
    ]
  },
  {
    id: 'class9-hindi-mastery',
    title: 'कक्षा 9 हिंदी साहित्य एवं व्यावहारिक व्याकरण गाइड (Class 9 Hindi)',
    subtitle: 'क्षितिज, कृतिका, रस, समास, उपसर्ग-प्रत्यय एवं रचनात्मक लेखन',
    author: 'डॉ. आभा कुलश्रेष्ठ एवं एचके हिंदी संकाय',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 9',
    schoolClass: 'Class 9',
    subject: 'Hindi',
    bookType: 'Study Guide',
    pages: 250,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Beginner',
    rating: 4.91,
    reviewCount: 265,
    badge: 'CBSE Aligned',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-rose-600 to-red-800',
    tags: ['Class 9', 'Hindi', 'Kshitij', 'Kritika', 'Vyakaran', 'Samas', 'Alankar', 'CBSE'],
    topics: ['दो बैलों की कथा', 'ल्हासा की ओर', 'साखियाँ एवं सबद', 'वाख', 'उपसर्ग एवं प्रत्यय', 'समास', 'संवाद लेखन'],
    language: 'Hindi',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Open Education Hindi Repository',
    whatYoullLearn: [
      'मुंशी प्रेमचंद की "दो बैलों की कथा" व कबीरदास की साखियों का भावार्थ व संदेश',
      'उपसर्ग, प्रत्यय, अर्थ की दृष्टि से वाक्य भेद और समास (तत्पुरुष, द्वंद्व, कर्मधारय, द्विगु) की पहचान',
      'अनुच्छेद लेखन, पत्र लेखन, संवाद लेखन एवं लघुकथा लेखन की सटीक रूपरेखा',
      'अपठित गद्यांश व काव्यांश के प्रश्नों को हल करने की त्वरित तकनीक'
    ],
    tableOfContents: [
      'अध्याय 1: क्षितिज गद्य खंड - विस्तृत पाठ सार व चरित्र चित्रण',
      'अध्याय 2: क्षितिज काव्य खंड - कबीर, ललद्यद, रसखान की कविताओं का भावार्थ व शिल्प सौंदर्य',
      'अध्याय 3: कृतिका पूरक पाठ्यपुस्तक - "इस जल प्रलय में" व "मेरे संग की औरतें"',
      'अध्याय 4: शब्द निर्माण - उपसर्ग, प्रत्यय एवं संधि का सरल नियम',
      'अध्याय 5: समास परिचय, भेद व विग्रह (कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि)',
      'अध्याय 6: अर्थ की दृष्टि से वाक्य भेद (विधानवाचक, निषेधवाचक, आज्ञावाचक आदि)',
      'अध्याय 7: अलंकार - अनुप्रास, यमक, उपमा, रूपक, उत्प्रेक्षा, मानवीकरण',
      'अध्याय 8: रचनात्मक लेखन - अनुच्छेद, औपचारिक/अनौपचारिक पत्र व संवाद लेखन'
    ],
    chaptersPreview: [
      {
        title: 'अध्याय 1: क्षितिज गद्य खंड - दो बैलों की कथा (प्रेमचंद)',
        summary: 'प्रेमचंद की अमर कहानी झूरी के दो बैल हीरा और मोती के माध्यम से पशु और मानव के पारस्परिक स्नेह, स्वतंत्रता के लिए संघर्ष और स्वाभिमान का जीवंत चित्रण करती है।',
        keyPoints: [
          'हीरा और मोती का चरित्र: हीरा सहनशील और समझदार है, जबकि मोती क्रोधी और साहसी। दोनों का मेल सच्चे मित्र की मिसाल है।',
          'कांजीहौस का प्रसंग: स्वतंत्रता सहज नहीं मिलती, उसके लिए निरंतर संघर्ष और एकजुटता की आवश्यकता होती है।',
          'गधे का प्रतीकात्मक अर्थ: सहनशीलता और सीधेपन को समाज मूर्खता समझ लेता है, पर प्रेमचंद उसे ऋषि-मुनियों का गुण बताते हैं।'
        ],
        codeSnippet: `समास विग्रह उदाहरण:
1. माता-पिता = माता और पिता (द्वंद्व समास)
2. पीतांबर = पीला है जो अंबर (कर्मधारय) अथवा पीले वस्त्र वाला - श्रीकृष्ण (बहुव्रीहि)
3. त्रिफला = तीन फलों का समाहार (द्विगु समास)`,
        realWorldUse: 'मातृभाषा में स्पष्ट, व्याकरण सम्मत और प्रभावशाली अभिव्यक्ति की क्षमता विकसित करता है।'
      }
    ],
    studyNotes: [
      'अलंकार पहचानते समय यदि सा, सी, से, सम, सरिस आए तो निश्चित रूप से उपमा अलंकार होता है।',
      'पत्र लेखन में बाईं ओर सेवा में, विषय और भवदीय का प्रारूप सीबीएसई के नवीनतम दिशानिर्देशों के अनुसार होना चाहिए।'
    ]
  },
  {
    id: 'class9-social-science-mastery',
    title: 'Class 9 Social Science Complete Concept Handbook',
    subtitle: 'History (India & Contemporary World), Geography, Democratic Politics & Economics',
    author: 'Dr. Alok Verma & HK Social Science Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 9',
    schoolClass: 'Class 9',
    subject: 'Social Science',
    bookType: 'Handbook',
    pages: 310,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.89,
    reviewCount: 320,
    badge: 'NCERT Aligned',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-emerald-700 to-teal-800',
    tags: ['Class 9', 'Social Science', 'History', 'Geography', 'Civics', 'Economics', 'CBSE'],
    topics: ['French Revolution', 'Russian Revolution', 'Nazism', 'India Size & Location', 'Physical Features of India', 'Drainage', 'What is Democracy?', 'Constitutional Design', 'Poverty as a Challenge'],
    language: 'Bilingual (English + Hindi)',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Council of Educational Research & HK VELORA Social Studies Cell',
    whatYoullLearn: [
      'French Revolution causes (Estate system, Enlightenment thinkers, Bastille fall) and global legacy',
      'India’s physiographic divisions: Himalayas, Northern Plains, Peninsular Plateau, Coastal Plains, Thar Desert',
      'Democratic institutions: Why democracy, universal adult franchise, free and fair elections, and rule of law',
      'Economics basics: Factors of production (Land, Labour, Physical Capital, Human Capital) and poverty alleviation'
    ],
    tableOfContents: [
      'Unit 1: History - The French Revolution, Jacobins & Declaration of Rights',
      'Unit 2: History - Socialism in Europe & The Russian Revolution of 1917',
      'Unit 3: History - Nazism and the Rise of Hitler',
      'Unit 4: Geography - India: Size, Location, Standard Meridian & Neighbours',
      'Unit 5: Geography - Physical Features of India & Geological Formation',
      'Unit 6: Geography - Drainage Systems: Himalayan vs Peninsular Rivers',
      'Unit 7: Civics - What is Democracy? Why Democracy? Essential Features',
      'Unit 8: Civics - Constitutional Design & Making of the Indian Constitution',
      'Unit 9: Civics - Electoral Politics: Constituencies, Voters List & Model Code',
      'Unit 10: Economics - The Story of Village Palampur: Production Factors',
      'Unit 11: Economics - People as Resource: Education, Health & Human Capital',
      'Unit 12: Economics - Poverty as a Challenge: Poverty Line & Government Schemes'
    ],
    chaptersPreview: [
      {
        title: 'Unit 1: History - The French Revolution (1789)',
        summary: 'Comprehensive analysis of the crisis of the Ancien Régime in France: the burden of taxes on the Third Estate (tithes and taille), the intellectual awakening by Rousseau, Montesquieu, and Voltaire, and the storming of the Bastille on 14 July 1789.',
        keyPoints: [
          'Social structure: First Estate (Clergy) and Second Estate (Nobility) enjoyed tax exemptions; Third Estate (Peasants, Artisans, Middle class) bore all taxes.',
          'The National Assembly formulated the "Declaration of the Rights of Man and Citizen", declaring liberty, equality, and fraternity.',
          'Reign of Terror under Robespierre (1793-1794) used the guillotine to eliminate suspected enemies until his own fall.'
        ],
        codeSnippet: `Timeline Flashcard:
1774: Louis XVI becomes King of France; finds treasury empty.
1789: Estates General convened; Tennis Court Oath; Storming of Bastille.
1791: Constitution drafted limiting monarch power.
1792-93: France becomes a Republic; King executed.
1804: Napoleon Bonaparte crowns himself Emperor.`,
        realWorldUse: 'Essential foundation for understanding modern human rights, constitutional governments, and democracy worldwide.'
      }
    ],
    studyNotes: [
      'In Geography, always remember the Standard Meridian of India is 82°30’ E passing through Mirzapur (UP), which is 5 hours 30 minutes ahead of GMT.',
      'In Economics, remember human capital investment in education and healthcare yields higher economic returns than physical capital.'
    ]
  },

  // ==========================================
  // CLASS 10 EXPANDED SUBJECTS
  // ==========================================
  {
    id: 'class10-english-mastery',
    title: 'Class 10 English First Flight & Analytical Writing Guide',
    subtitle: 'Board-Exam Focused Prose Analysis, Poetic Devices, Grammatical Editing & Letter Writing',
    author: 'Sunita Sharma & HK English Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 10',
    schoolClass: 'Class 10',
    subject: 'English',
    bookType: 'Study Guide',
    pages: 275,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.93,
    reviewCount: 410,
    badge: 'Class 10 Board Pick',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-sky-700 to-indigo-900',
    tags: ['Class 10', 'English', 'First Flight', 'Footprints', 'Board Exam', 'Analytical Paragraph', 'CBSE'],
    topics: ['A Letter to God', 'Nelson Mandela: Long Walk to Freedom', 'Two Stories about Flying', 'Dust of Snow', 'Fire and Ice', 'Analytical Paragraph Writing', 'Formal Letters'],
    language: 'English with Hindi Notes',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA CBSE Board Prep Wing',
    whatYoullLearn: [
      'Key thematic questions, irony, and symbolism in "A Letter to God" and "Nelson Mandela"',
      'Analytical paragraph structure: Introductory statement, trend comparison, statistical evidence, conclusion',
      'Board-approved formal letter formats (Letter of Complaint, Inquiry, Placing Order, Editor)',
      'Error correction, sentence reordering, and reported speech conversions for full grammar marks'
    ],
    tableOfContents: [
      'Chapter 1: First Flight Prose - Thematic Explanations & Value-Based Questions',
      'Chapter 2: First Flight Poetry - Rhyme, Stanza Breakdown & Poetic Devices',
      'Chapter 3: Footprints without Feet - Character Analyses & Plot Summaries',
      'Chapter 4: Analytical Paragraph Writing - Mastering Bar Graphs, Pie Charts & Tables',
      'Chapter 5: Formal Letters: Letters to the Editor & Official Business Correspondence',
      'Chapter 6: Integrated Grammar: Editing, Gap Filling & Reported Speech',
      'Chapter 7: CBSE Board Exam Tips, Time Allocation & 10 Model Answers'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Prose Analysis - A Letter to God & Nelson Mandela',
        summary: 'Explores Lencho’s unwavering faith in God and the profound irony when he suspects the benevolent post office employees of being a "bunch of crooks"; alongside Nelson Mandela’s philosophical reflections on freedom, twin obligations, and the depths of oppression creating heights of character.',
        keyPoints: [
          'Situational Irony in Lencho: The postmaster raised money out of charity, yet Lencho believed they stole thirty pesos.',
          'Mandela’s Twin Obligations: Duty to his family and duty to his people and country.',
          'Freedom evolution: From boyhood freedom to run in the fields, to student freedom to stay out at night, to mature realization of freedom for all oppressed and oppressor alike.'
        ],
        codeSnippet: `Analytical Paragraph Structure Template:
1. Introduction: The given line graph / pie chart illustrates [Topic] from [Year] to [Year].
2. Body Paragraph 1: Primary trends, peak values, and sharp drops.
3. Body Paragraph 2: Comparative contrasts, similarities, and notable anomalies.
4. Conclusion: Overall, it is evident that [Main takeaway without personal opinion].`,
        realWorldUse: 'Prepares students for analytical reasoning, public discourse, and precision writing in academics and careers.'
      }
    ],
    studyNotes: [
      'Never use informal contractions (e.g. don\'t, can\'t) in formal letters or analytical paragraphs; always write "do not", "cannot".',
      'In Robert Frost\'s poems "Dust of Snow" and "Fire and Ice", observe how simple natural imagery conveys profound philosophical truths about mood transformation and human greed/hatred.'
    ]
  },
  {
    id: 'class10-hindi-mastery',
    title: 'कक्षा 10 हिंदी बोर्ड परीक्षा संपूर्ण गाइड (Class 10 Hindi Board Mastery)',
    subtitle: 'क्षितिज भाग 2, कृतिका भाग 2, पद-परिचय, वाक्य भेद, रस, वाच्य एवं रचनात्मक लेखन',
    author: 'डॉ. आभा कुलश्रेष्ठ एवं एचके हिंदी संकाय',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 10',
    schoolClass: 'Class 10',
    subject: 'Hindi',
    bookType: 'Study Guide',
    pages: 265,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.94,
    reviewCount: 380,
    badge: 'Board Exam Best Seller',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-red-600 to-amber-700',
    tags: ['Class 10', 'Hindi', 'Kshitij 2', 'Kritika 2', 'Pad Parichay', 'Vachya', 'Ras', 'Board Exam'],
    topics: ['नेताजी का चश्मा', 'बालगोबिन भगत', 'सूरदास के पद', 'राम-लक्ष्मण-परशुराम संवाद', 'पद परिचय', 'वाच्य परिवर्तन', 'रस निष्पत्ति'],
    language: 'Hindi',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Hindi Academic Council',
    whatYoullLearn: [
      'क्षितिज व कृतिका के महत्वपूर्ण प्रश्नोत्तर, चरित्र-चित्रण और केंद्रीय भाव',
      'पद परिचय की अचूक ट्रिक: संज्ञा, सर्वनाम, विशेषण, क्रिया व अव्यय का व्याकरणिक परिचय',
      'वाच्य के भेद: कर्तृवाच्य, कर्मवाच्य व भाववाच्य में परस्पर रूपांतरण के नियम',
      'रस के 9 स्थायी भाव, विभाव, अनुभाव, संचारी भाव और उदाहरण'
    ],
    tableOfContents: [
      'अध्याय 1: क्षितिज भाग 2 गद्य खंड - नेताजी का चश्मा, बालगोबिन भगत, लखनवी अंदाज',
      'अध्याय 2: क्षितिज भाग 2 काव्य खंड - सूरदास के पद, तुलसीदास (परशुराम संवाद), उत्साह व अट नहीं रही',
      'अध्याय 3: कृतिका भाग 2 - माता का अँचल, जॉर्ज पंचम की नाक, साना साना हाथ जोड़ि',
      'अध्याय 4: रचना के आधार पर वाक्य भेद (सरल, संयुक्त, मिश्र) व रूपांतरण',
      'अध्याय 5: वाच्य - कर्तृवाच्य, कर्मवाच्य एवं भाववाच्य परिवर्तन',
      'अध्याय 6: पद परिचय - संज्ञा से अव्यय तक शब्दों का वैज्ञानिक परिचय',
      'अध्याय 7: रस सिद्धांत - स्थायी भाव, विभाव, अनुभाव व संचारी भाव से रस की पहचान',
      'अध्याय 8: रचनात्मक लेखन - अनुच्छेद, औपचारिक पत्र, स्ववृत्त लेखन (Bio-data) व विज्ञापन लेखन'
    ],
    chaptersPreview: [
      {
        title: 'अध्याय 1: नेताजी का चश्मा (स्वयं प्रकाश) - देशभक्ति का वास्तविक अर्थ',
        summary: 'कैप्टन चश्मेवाले के माध्यम से लेखक दर्शाते हैं कि देशभक्ति केवल वर्दी पहनने या फौज में जाने से नहीं होती; अपने सामर्थ्य अनुसार देश के शहीदों और प्रतीकों का सम्मान करना ही सच्ची देशभक्ति है।',
        keyPoints: [
          'हालदार साहब की जिज्ञासा: वे हर पंद्रहवें दिन कस्बे से गुजरते और नेताजी सुभाष चंद्र बोस की मूर्ति पर बदलते चश्मे देखते।',
          'कैप्टन का त्याग: गरीब, लंगड़ा और फेरीवाला होने के बावजूद नेताजी की मूर्ति को बिना चश्मे के देखकर उसे कष्ट होता था।',
          'सरकंडे का चश्मा: कैप्टन की मृत्यु के बाद बच्चों द्वारा सरकंडे का चश्मा लगाना सिद्ध करता है कि आने वाली पीढ़ी में भी देशभक्ति जीवित है।'
        ],
        codeSnippet: `पद-परिचय ट्रिक:
"रोहन पुस्तक पढ़ता है।"
1. रोहन: व्यक्तिवाचक संज्ञा, पुल्लिंग, एकवचन, कर्ता कारक, 'पढ़ता है' क्रिया का कर्ता।
2. पुस्तक: जातिवाचक संज्ञा, स्त्रीलिंग, एकवचन, कर्म कारक।
3. पढ़ता है: सकर्मक क्रिया, वर्तमान काल, पुल्लिंग, एकवचन, कर्तृवाच्य।`,
        realWorldUse: 'हिंदी भाषा पर पूर्ण व्याकरणिक पकड़, बोर्ड परीक्षा में 95%+ स्कोर और उत्कृष्ट संप्रेषण क्षमता।'
      }
    ],
    studyNotes: [
      'मिश्र वाक्य पहचान: यदि वाक्य में कि, जो, क्योंकि, जैसा-वैसा, जब-तब, यदि-तो आए तो वह मिश्र वाक्य होता है।',
      'विज्ञापन लेखन में सदैव एक सुंदर पेंसिल बॉर्डर बनाएं, आकर्षक स्लोगन लिखें, और संपर्क/पता स्पष्ट दें।'
    ]
  },
  {
    id: 'class10-it-computer-mastery',
    title: 'Class 10 Information Technology (Skill Subject 402) Handbook',
    subtitle: 'Digital Documentation, Electronic Spreadsheets, DBMS (LibreOffice / SQL) & Cyber Security',
    author: 'Er. Hariom & HK Computer Science Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 10',
    schoolClass: 'Class 10',
    subject: 'Computer / IT',
    bookType: 'Handbook',
    pages: 290,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Beginner',
    rating: 4.96,
    reviewCount: 460,
    badge: 'Skill 402 Official',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-600 to-indigo-800',
    tags: ['Class 10', 'IT 402', 'DBMS', 'Spreadsheet', 'Digital Documentation', 'Web Security', 'CBSE'],
    topics: ['Styles in Documentation', 'Mail Merge', 'Goal Seek & Solver', 'Macros in Calc', 'Relational Database Management (RDBMS)', 'SQL Queries', 'Workplace Safety'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'CBSE Skill Education Board & HK Tech World Lab',
    whatYoullLearn: [
      'Create and manage paragraph, page, and character styles in LibreOffice Writer / MS Word',
      'Consolidate data, use What-If scenarios, Goal Seek, and record macros in spreadsheets',
      'Relational Database principles: Primary Key, Foreign Key, Composite Key, and normalization',
      'Write SQL queries (CREATE, INSERT, SELECT, UPDATE, DELETE, WHERE, ORDER BY, GROUP BY)',
      'Workplace ergonomics, hazards, fire safety protocols, and cyber attack prevention'
    ],
    tableOfContents: [
      'Unit 1: Employability Skills - Communication, Self-Management & ICT Skills',
      'Unit 2: Digital Documentation (Advanced) - Styles, Images, Templates & TOC',
      'Unit 3: Electronic Spreadsheet (Advanced) - Scenarios, Goal Seek, Linking & Macros',
      'Unit 4: Database Management System - Tables, Keys, Relationships & Data Types',
      'Unit 5: SQL Commands Masterclass: DDL vs DML and Querying Data',
      'Unit 6: Web Applications & Security - Networking Basics, P2P vs Client-Server, Cyber Hygiene',
      'Unit 7: Workplace Health, Safety & Accident Prevention Guidelines',
      'Unit 8: Practical Viva Questions & 100 Solved CBSE MCQ Bank'
    ],
    chaptersPreview: [
      {
        title: 'Unit 4: Database Management System & SQL Mastery',
        summary: 'Comprehensive guide to why RDBMS replaces flat files, eliminating data redundancy and ensuring data integrity through primary keys, foreign keys, and referential integrity rules.',
        keyPoints: [
          'Primary Key: Uniquely identifies each record; cannot contain NULL values and must be unique.',
          'Foreign Key: A field in one table that references the Primary Key in another table, establishing a parent-child relationship.',
          'DDL (Data Definition Language) commands define the schema (CREATE, ALTER, DROP), while DML (Data Manipulation Language) commands manipulate data (SELECT, INSERT, UPDATE, DELETE).'
        ],
        codeSnippet: `-- Create Students Table with Primary Key
CREATE TABLE Students (
  RollNo INT PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Class INT,
  Marks DECIMAL(5,2)
);

-- Query students scoring above 80 sorted by Marks
SELECT Name, Marks FROM Students 
WHERE Marks > 80.00 
ORDER BY Marks DESC;`,
        realWorldUse: 'Core foundation for software engineering, web application backends, and data analyst careers.'
      }
    ],
    studyNotes: [
      'Remember the difference: Goal Seek finds the input value required to achieve a specific target result (reverse calculation).',
      'In Mail Merge, the three primary components are: Main Document, Data Source, and Merged Document.'
    ]
  },

  // ==========================================
  // CLASS 11 EXPANDED SUBJECTS
  // ==========================================
  {
    id: 'class11-maths-mastery',
    title: 'Class 11 Mathematics Comprehensive Concept Guide',
    subtitle: 'Sets, Relations, Trigonometry, Complex Numbers, Permutations, Conic Sections & Calculus Intro',
    author: 'Prof. Ramesh K. & HK Academic Team',
    publisher: 'HK VELORA Open Education Series',
    category: 'Science & Mathematics',
    subcategory: 'Class 11',
    schoolClass: 'Class 11',
    stream: 'Science',
    subject: 'Mathematics',
    bookType: 'Handbook',
    pages: 360,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Advanced',
    rating: 4.95,
    reviewCount: 430,
    badge: 'JEE & CBSE Core',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-700 to-indigo-900',
    tags: ['Class 11', 'Mathematics', 'Trigonometry', 'Calculus', 'Complex Numbers', 'Conics', 'JEE Main'],
    topics: ['Sets & Relations', 'Trigonometric Functions', 'Complex Numbers & Quadratics', 'Permutations & Combinations', 'Binomial Theorem', 'Conic Sections (Parabola, Ellipse, Hyperbola)', 'Limits & Derivatives'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Mathematics & JEE Preparatory Cell',
    whatYoullLearn: [
      'De Morgan’s laws, Cartesian products, and domain-range mapping of functions',
      'Compound angle trigonometry, half-angle transformations, and general solutions',
      'Argand plane, polar representation of complex numbers, and Euler’s formula',
      'Permutation vs Combination distinctions, circular permutations, and Binomial expansions',
      'Standard equations, eccentricity, and foci of parabola, ellipse, and hyperbola',
      'Fundamental limits (sin x / x -> 1) and First Principle differentiation'
    ],
    tableOfContents: [
      'Chapter 1: Sets, Subsets, Power Sets & Venn Diagrams',
      'Chapter 2: Relations & Functions: Types, Domain, Co-domain & Range',
      'Chapter 3: Trigonometric Functions & Transformation Formulas',
      'Chapter 4: Complex Numbers & Quadratic Equations in Complex Plane',
      'Chapter 5: Linear Inequalities & Graphical Solutions',
      'Chapter 6: Permutations and Combinations: Fundamental Counting Principle',
      'Chapter 7: Binomial Theorem & General / Middle Terms',
      'Chapter 8: Sequences and Series: AP, GP, Special Sums',
      'Chapter 9: Straight Lines: Slope-Intercept, Normal Form & Distance Formula',
      'Chapter 10: Conic Sections: Circle, Parabola, Ellipse & Hyperbola',
      'Chapter 11: Introduction to Three Dimensional Geometry',
      'Chapter 12: Limits & Derivatives: First Principle & Product/Quotient Rules',
      'Chapter 13: Statistics & Probability: Variance, Standard Deviation, Axiomatic Approach'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 12: Limits & First Principle Derivatives',
        summary: 'Introduces the foundational idea of calculus: the limit of a function as x approaches c, indeterminate forms (0/0, inf/inf), standard trigonometric limits, and the derivative as the instantaneous rate of change.',
        keyPoints: [
          'Definition of derivative: f\'(x) = lim(h -> 0) [f(x + h) - f(x)] / h.',
          'Fundamental trigonometric limit: lim(x -> 0) [sin x / x] = 1 (where x is in radians).',
          'Product Rule: d/dx [u * v] = u * v\' + v * u\'; Quotient Rule: d/dx [u / v] = (v * u\' - u * v\') / v^2.'
        ],
        codeSnippet: `First Principle Example (Derivative of sin x):
f'(x) = lim(h->0) [sin(x + h) - sin x] / h
Using sin C - sin D = 2 * cos((C+D)/2) * sin((C-D)/2):
= lim(h->0) [2 * cos(x + h/2) * sin(h/2)] / h
= lim(h->0) cos(x + h/2) * lim(h->0) [sin(h/2) / (h/2)]
= cos x * 1 = cos x!`,
        realWorldUse: 'Indispensable tool for physics kinematics, engineering simulations, machine learning gradient descent, and financial modelling.'
      }
    ],
    studyNotes: [
      'For conic sections, remember eccentricity (e): Circle e = 0, Parabola e = 1, Ellipse e < 1, Hyperbola e > 1.',
      'In Permutations and Combinations, remember "OR" means addition (+), while "AND" means multiplication (*).'
    ]
  },
  {
    id: 'class11-biology-mastery',
    title: 'Class 11 Biology Comprehensive Theory & NEET Notes',
    subtitle: 'Plant & Animal Kingdom, Cell Biology, Biomolecules, Photosynthesis & Human Physiology',
    author: 'Dr. Shalini Gupta & HK Life Sciences Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'Science & Mathematics',
    subcategory: 'Class 11',
    schoolClass: 'Class 11',
    stream: 'Science',
    subject: 'Biology',
    bookType: 'Handbook',
    pages: 380,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.96,
    reviewCount: 450,
    badge: 'NEET Aligned',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-teal-600 to-emerald-800',
    tags: ['Class 11', 'Biology', 'NEET', 'Cell Biology', 'Biomolecules', 'Plant Physiology', 'Human Physiology'],
    topics: ['Five Kingdom Classification', 'Cell Structure & Organelles', 'Cell Cycle & Mitosis/Meiosis', 'Biomolecules (Enzymes)', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Chemical Coordination'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Council of Educational Research & HK NEET Medical Forum',
    whatYoullLearn: [
      'R.H. Whittaker’s Five Kingdom Classification criteria (Monera, Protista, Fungi, Plantae, Animalia)',
      'Detailed organelle functions: Endoplasmic reticulum, Golgi apparatus, Mitochondria, Ribosomes',
      'Cell cycle stages: G1, S phase (DNA replication), G2, and phases of Mitosis vs Meiosis I/II',
      'Light reaction (Z-scheme), Calvin cycle (C3 pathway), and Hatch-Slack (C4 pathway) in photosynthesis',
      'Endocrine glands, hormones, action mechanism (peptide vs steroid hormones)'
    ],
    tableOfContents: [
      'Unit 1: Diversity in the Living World - Living World & Biological Classification',
      'Unit 2: Plant Kingdom (Algae to Angiosperms) & Animal Kingdom Phyla',
      'Unit 3: Structural Organisation in Plants & Animals: Anatomy & Tissues',
      'Unit 4: Cell: The Unit of Life - Fluid Mosaic Model & Cell Organelles',
      'Unit 5: Biomolecules: Carbohydrates, Proteins, Nucleic Acids & Enzyme Kinetics',
      'Unit 6: Cell Cycle and Cell Division: Mitosis vs Meiosis Stages',
      'Unit 7: Plant Physiology: Photosynthesis (Light & Dark Reactions) & Cellular Respiration',
      'Unit 8: Human Physiology: Breathing, Circulation, Excretion & Neural Control'
    ],
    chaptersPreview: [
      {
        title: 'Unit 4: Cell - The Unit of Life & Organelle Function',
        summary: 'Detailed examination of prokaryotic vs eukaryotic cells, the Singer-Nicolson Fluid Mosaic Model of plasma membrane, semi-autonomous organelles (mitochondria and chloroplasts containing 70S ribosomes and circular DNA), and endomembrane coordination.',
        keyPoints: [
          'Endomembrane system includes Endoplasmic Reticulum, Golgi complex, Lysosomes, and Vacuoles working in coordinated fashion.',
          'Mitochondria: Double membrane-bound; inner membrane folds into cristae to maximize surface area for ATP synthase complexes.',
          'Fluid mosaic model: Phospholipid bilayer has quasi-fluid nature allowing lateral movement of proteins.'
        ],
        codeSnippet: `Cell Organelle Mnemonic (Endomembrane System):
G - Golgi Apparatus (Packaging & shipping)
E - Endoplasmic Reticulum (Synthesis: Rough = Proteins, Smooth = Lipids)
R - Ribosomes (Protein factories - not membrane bound)
L - Lysosomes (Suicidal bags with hydrolytic enzymes)`,
        realWorldUse: 'Foundational framework for biomedical sciences, pathology, genetics, pharmacology, and NEET medical admissions.'
      }
    ],
    studyNotes: [
      'For NEET, memorize that Rubisco (Ribulose-1,5-bisphosphate carboxylase-oxygenase) is the most abundant enzyme on Earth.',
      'In Meiosis, crossing over occurs between non-sister chromatids of homologous chromosomes during the Pachytene stage of Prophase I, mediated by the recombinase enzyme.'
    ]
  },
  {
    id: 'class11-business-studies-mastery',
    title: 'Class 11 Business Studies Comprehensive Handbook',
    subtitle: 'Nature of Business, Forms of Business Organisation, Emerging Modes & Social Responsibility',
    author: 'CA Rajesh Singhania & HK Commerce Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 11',
    schoolClass: 'Class 11',
    stream: 'Commerce',
    subject: 'Business Studies',
    bookType: 'Handbook',
    pages: 290,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Beginner',
    rating: 4.88,
    reviewCount: 310,
    badge: 'Commerce Core',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-700 to-yellow-800',
    tags: ['Class 11', 'Commerce', 'Business Studies', 'Company Formation', 'E-Business', 'CBSE'],
    topics: ['Sole Proprietorship', 'Partnership', 'Joint Hindu Family Business', 'Joint Stock Company', 'Formation of a Company', 'Sources of Business Finance', 'Small Business & MSME'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Commerce & Corporate Law Faculty',
    whatYoullLearn: [
      'Differentiate Sole Proprietorship, Partnership, and Joint Stock Company (liability, continuity, management)',
      'Steps in company incorporation: Promotion, Incorporation, Capital Subscription, Commencement of Business',
      'Sources of business finance: Retained earnings, Debentures, Equity shares, Preference shares, Commercial papers',
      'Emerging modes of business: B2B, B2C, C2C e-commerce, and Business Process Outsourcing (BPO/KPO)'
    ],
    tableOfContents: [
      'Chapter 1: Nature and Purpose of Business: Industry vs Commerce',
      'Chapter 2: Forms of Business Organisation: Sole Proprietor, Partnership, Cooperative, Company',
      'Chapter 3: Private, Public and Global Enterprises (MNCs & Joint Ventures)',
      'Chapter 4: Business Services: Banking, Insurance, Warehousing & Communication',
      'Chapter 5: Emerging Modes of Business: E-Business & Outsourcing Trends',
      'Chapter 6: Social Responsibilities of Business and Corporate Ethics',
      'Chapter 7: Sources of Business Finance: Equity vs Debt Capital',
      'Chapter 8: Small Business and Enterprises (MSME & Startup India)',
      'Chapter 9: Internal Trade: Wholesale, Retail, GST & Departmental Stores',
      'Chapter 10: International Business: Export-Import Procedures & WTO'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Forms of Business Organisation & Comparison',
        summary: 'Detailed evaluation of various legal entities in India. Analyzes unlimited personal liability of sole proprietors and partners versus the limited liability shield and perpetual succession of Joint Stock Companies registered under Companies Act 2013.',
        keyPoints: [
          'Perpetual Succession: "Members may come and members may go, but the company goes on forever."',
          'Memorandum of Association (MoA) is the charter of the company containing 6 mandatory clauses (Name, Registered Office, Object, Liability, Capital, Association).',
          'Articles of Association (AoA) govern the internal management and bye-laws of the company.'
        ],
        codeSnippet: `Key Comparison Matrix:
Feature          | Sole Proprietor | Partnership | Company
Liability        | Unlimited       | Unlimited   | Limited to unpaid shares
Continuity       | Unstable        | Dissolves   | Perpetual succession
Govt Regulation  | Minimum         | Moderate    | High compliance (MCA/ROC)`,
        realWorldUse: 'Essential foundation for entrepreneurs, startup founders, corporate managers, and CA/CS aspirants.'
      }
    ],
    studyNotes: [
      'In Company Law questions, remember the doctrine of Ultra Vires states any act beyond the object clause of the MoA is void ab initio.',
      'Equity shareholders are the true risk-bearers and owners who carry voting rights, whereas Debenture holders are creditors with fixed interest claims.'
    ]
  },
  {
    id: 'class11-microeconomics-mastery',
    title: 'Class 11 Microeconomics & Statistics for Economics',
    subtitle: 'Consumer Equilibrium, Demand & Elasticity, Production Functions, Cost & Market Equilibrium',
    author: 'Dr. Meenakshi Sundaram & HK Economics Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 11',
    schoolClass: 'Class 11',
    stream: 'Commerce',
    subject: 'Economics',
    bookType: 'Study Guide',
    pages: 310,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.91,
    reviewCount: 340,
    badge: 'CBSE & CUET Ready',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-emerald-700 to-green-900',
    tags: ['Class 11', 'Economics', 'Microeconomics', 'Statistics', 'Demand Elasticity', 'Production Cost', 'Commerce'],
    topics: ['Consumer Equilibrium (IC Analysis)', 'Law of Demand & Price Elasticity', 'Law of Variable Proportions', 'Cost Concepts (TC, AC, MC)', 'Revenue (TR, AR, MR)', 'Measures of Central Tendency', 'Correlation & Index Numbers'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Department of Economic Studies',
    whatYoullLearn: [
      'Understand Consumer Equilibrium via Utility Approach (Law of Diminishing Marginal Utility) and Indifference Curve Analysis (MRSxy = Px/Py)',
      'Calculate Price Elasticity of Demand using percentage method and geometric interpretation',
      'Explain short-run Law of Variable Proportions (Increasing, Diminishing, and Negative returns)',
      'Analyze the relationship between Average Cost (AC) and Marginal Cost (MC) curves',
      'Compute Mean, Median, Mode, Karl Pearson’s Correlation Coefficient, and Laspeyres/Paasche Index Numbers'
    ],
    tableOfContents: [
      'Part A: Statistics for Economics - Collection, Organisation & Presentation of Data',
      'Part A: Measures of Central Tendency - Mean, Median, Quartiles & Mode',
      'Part A: Measures of Dispersion & Correlation Analysis',
      'Part A: Index Numbers: Consumer Price Index (CPI) & Wholesale Price Index (WPI)',
      'Part B: Introduction to Microeconomics & Central Problems of an Economy (PPC)',
      'Part B: Consumer\'s Equilibrium: Cardinal Utility vs Ordinal Indifference Curve Approach',
      'Part B: Demand Theory & Price Elasticity of Demand (Ed)',
      'Part B: Production Function & The Law of Variable Proportions',
      'Part B: Cost Concepts: Fixed, Variable, Total, Average & Marginal Costs',
      'Part B: Revenue Curves & Producer\'s Equilibrium (MR = MC approach)',
      'Part B: Perfect Competition Market & Determination of Equilibrium Price'
    ],
    chaptersPreview: [
      {
        title: 'Part B: Consumer\'s Equilibrium - Indifference Curve Analysis',
        summary: 'Detailed derivation of how a rational consumer maximizes satisfaction subject to budget constraints using indifference maps, convex indifference curves exhibiting Diminishing Marginal Rate of Substitution (MRS), and the budget line slope.',
        keyPoints: [
          'Indifference curve properties: Downward sloping, convex to the origin (due to diminishing MRS), and two ICs never intersect each other.',
          'Budget Line equation: Px * Qx + Py * Qy = M (Income).',
          'Equilibrium condition: The budget line is tangent to the highest attainable IC; MRSxy = Px / Py.'
        ],
        codeSnippet: `Price Elasticity of Demand Formula:
Ed = - (Percentage Change in Quantity Demanded) / (Percentage Change in Price)
Ed = - (ΔQ / ΔP) * (P / Q)

Elasticity Scales:
|Ed| > 1 -> Elastic (Luxury goods)
|Ed| = 1 -> Unitary Elastic
|Ed| < 1 -> Inelastic (Essential medicines, salt)`,
        realWorldUse: 'Essential for pricing strategy in business, taxation policies, trade tariff negotiations, and consumer behavior analysis.'
      }
    ],
    studyNotes: [
      'Remember the U-shape of short-run Average Cost (AC) is due to the Law of Variable Proportions.',
      'Marginal Cost (MC) always intersects Average Variable Cost (AVC) and Average Cost (AC) at their minimum points from below.'
    ]
  },
  {
    id: 'class11-cs-python-mastery',
    title: 'Class 11 Computer Science with Python Handbook',
    subtitle: 'Computer Systems, Computational Thinking, Python Core, Algorithms & Cyber Law',
    author: 'Er. Hariom & HK Computer Science Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'Coding & Programming',
    subcategory: 'Class 11',
    schoolClass: 'Class 11',
    stream: 'Science',
    subject: 'Computer / IT',
    bookType: 'Handbook',
    pages: 340,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.97,
    reviewCount: 480,
    badge: 'CBSE CS 083',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-600 to-cyan-800',
    tags: ['Class 11', 'Python', 'Computer Science', 'CBSE 083', 'Algorithms', 'Data Types'],
    topics: ['Computer Organisation', 'Number Systems (Binary, Hex, Octal)', 'Boolean Logic', 'Python Syntax & Operators', 'Conditional & Iteration Loops', 'Strings, Lists, Tuples & Dictionaries', 'Cyber Safety & IT Act'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'CBSE Curriculum & HK Open Tech Laboratories',
    whatYoullLearn: [
      'Von Neumann architecture, CPU components (ALU, CU, Registers), and memory hierarchy',
      'Number conversion: Binary, Decimal, Octal, Hexadecimal, and 1\'s / 2\'s complement',
      'Write structured Python programs using if-elif-else, for and while loops, break and continue',
      'Master mutable vs immutable types: Strings, Lists, Tuples, Dictionaries, and Sets',
      'Bubble sort, Linear search, Binary search algorithms with step-by-step trace tables',
      'Cyber etiquette, digital footprints, intellectual property rights, open source licenses, and Indian IT Act 2000'
    ],
    tableOfContents: [
      'Unit 1: Computer Systems and Organisation - CPU, Memory & Number Systems',
      'Unit 2: Boolean Logic - Logic Gates, Truth Tables & De Morgan\'s Theorems',
      'Unit 3: Computational Thinking - Algorithms, Flowcharts & Pseudo-code',
      'Unit 4: Getting Started with Python - Variables, Dynamic Typing & Expressions',
      'Unit 5: Flow of Control - Conditional Statements & Loop Constructs',
      'Unit 6: String Manipulation - Slicing, Built-in Methods & Immutability',
      'Unit 7: Lists in Python - Creation, Indexing, Slicing & List Comprehension',
      'Unit 8: Tuples & Dictionaries - Key-Value Mappings & Operations',
      'Unit 9: Python Modules - math, random, statistics libraries',
      'Unit 10: Society, Law and Ethics - Digital Footprint, Cybercrimes & E-waste'
    ],
    chaptersPreview: [
      {
        title: 'Unit 7: Python Lists, Slicing & Algorithmic Operations',
        summary: 'Deep dive into Python lists as heterogeneous, ordered, mutable sequences. Covers indexing from positive [0 to n-1] and negative [-n to -1], nested lists, shallow vs deep copying, and in-place mutation methods.',
        keyPoints: [
          'List slicing syntax: list[start : stop : step]; omit parameters for default traversal.',
          'Mutability: lists can be modified in-place (append, extend, insert, pop, remove), unlike strings or tuples.',
          'Binary Search requirement: the list must be pre-sorted before applying binary search.'
        ],
        codeSnippet: `# Binary Search in Python (CBSE Class 11 Syllabus)
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid  # Target found at index mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
            
    return -1  # Not found

numbers = [12, 24, 35, 48, 56, 72, 89, 95]
print("Index of 56:", binary_search(numbers, 56))  # Output: 4`,
        realWorldUse: 'Essential stepping stone for software engineering, data science pipelines, and backend logic.'
      }
    ],
    studyNotes: [
      'Always remember: mutable objects passed to functions can be altered by side-effects, while immutable objects (integers, strings, tuples) behave like pass-by-value.',
      'In Number Systems, each Hexadecimal digit corresponds directly to a 4-bit binary nibble (e.g. 0xA = 1010).'
    ]
  },

  // ==========================================
  // CLASS 12 EXPANDED SUBJECTS
  // ==========================================
  {
    id: 'class12-chemistry-mastery',
    title: 'Class 12 Chemistry Comprehensive Board & JEE/NEET Handbook',
    subtitle: 'Physical, Inorganic & Organic Chemistry: Reactions, Mechanisms, Kinetics & Coordination',
    author: 'Dr. Vivek Saxena & HK Chemistry Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'Science & Mathematics',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Science',
    subject: 'Chemistry',
    bookType: 'Handbook',
    pages: 410,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Advanced',
    rating: 4.97,
    reviewCount: 520,
    badge: 'Class 12 Top Rated',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-rose-700 to-purple-900',
    tags: ['Class 12', 'Chemistry', 'Organic Chemistry', 'Electrochemistry', 'Chemical Kinetics', 'NEET', 'JEE'],
    topics: ['Solutions & Colligative Properties', 'Electrochemistry (Nernst Equation)', 'Chemical Kinetics (Rate Law & Arrhenius)', 'd & f Block Elements', 'Coordination Compounds (VBT & CFT)', 'Haloalkanes & Haloarenes', 'Alcohols, Phenols & Ethers', 'Aldehydes, Ketones & Carboxylic Acids', 'Amines & Diazonium Salts', 'Biomolecules'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Educational Council & HK VELORA Chemistry Laboratory',
    whatYoullLearn: [
      'Calculate osmotic pressure, elevation in boiling point, depression in freezing point, and van \'t Hoff factor (i)',
      'Apply Nernst equation for galvanic cells: Ecell = E°cell - (0.0591 / n) * log Q at 298 K',
      'Derive integrated rate equations for zero and first order reactions with half-life formulas',
      'Crystal Field Theory (CFT) splitting of d-orbitals in octahedral and tetrahedral complexes',
      'Name reaction mechanisms: Aldol condensation, Cannizzaro, Reimer-Tiemann, Kolbe\'s, Sandmeyer reaction',
      'Carbohydrate classification, peptide bonds, denaturation of proteins, and DNA vs RNA structure'
    ],
    tableOfContents: [
      'Chapter 1: Solutions: Raoult\'s Law, Colligative Properties & van \'t Hoff Factor',
      'Chapter 2: Electrochemistry: Kohlrausch\'s Law, Nernst Equation & Batteries',
      'Chapter 3: Chemical Kinetics: Rate of Reaction, Order, Molecularity & Arrhenius Equation',
      'Chapter 4: d- and f-Block Elements: Electronic Configuration, Transition Metals & Lanthanoids',
      'Chapter 5: Coordination Compounds: IUPAC Nomenclature, Isomerism, VBT & CFT',
      'Chapter 6: Haloalkanes and Haloarenes: SN1 vs SN2 Mechanisms & Stereochemistry',
      'Chapter 7: Alcohols, Phenols and Ethers: Preparation, Acidity & Electrophilic Substitution',
      'Chapter 8: Aldehydes, Ketones and Carboxylic Acids: Nucleophilic Addition & Name Reactions',
      'Chapter 9: Amines: Basicity, Carbylamine Test, Diazonium Salts & Synthetic Utility',
      'Chapter 10: Biomolecules: Glucose Structure, Amino Acids, Zwitterion & Nucleic Acids'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 6: Haloalkanes & Haloarenes - SN1 vs SN2 Reaction Mechanisms',
        summary: 'Comprehensive stereochemical and kinetic breakdown of Nucleophilic Substitution reactions. Contrast of carbocation stability in SN1 against backside attack and Walden inversion in bimolecular SN2.',
        keyPoints: [
          'SN1 Mechanism: Two-step, unimolecular rate = k[R-X], goes through carbocation intermediate, reactivity order 3° > 2° > 1°, leads to racemisation.',
          'SN2 Mechanism: One-step, bimolecular rate = k[R-X][Nu-], concerted transition state with backside attack, reactivity order 1° > 2° > 3°, leads to complete inversion of configuration (Walden Inversion).',
          'Aryl halides are extremely unreactive toward nucleophilic substitution due to resonance stabilization and sp2 hybridized carbon holding halogen tightly.'
        ],
        codeSnippet: `Key Reaction Summary:
1. Reimer-Tiemann Reaction:
   Phenol + CHCl3 + 3 NaOH (heat) -> Salicylaldehyde (o-hydroxybenzaldehyde)
2. Kolbe's Reaction:
   Phenol + NaOH -> Sodium phenoxide + CO2 (400 K, 4-7 atm) -> Salicylic acid
3. Aldol Condensation:
   2 CH3-CHO + dilute NaOH -> CH3-CH(OH)-CH2-CHO (heat) -> CH3-CH=CH-CHO (Crotonaldehyde)`,
        realWorldUse: 'Drug synthesis, pharmaceutical manufacturing, petrochemicals, and material science.'
      }
    ],
    studyNotes: [
      'For board exams, always draw the complete transition state bracket with dotted partial bonds when explaining SN2 mechanism.',
      'In coordination compounds, strong field ligands like CN-, CO, and NO2- cause pairing of electrons resulting in low-spin inner orbital complexes.'
    ]
  },
  {
    id: 'class12-biology-mastery',
    title: 'Class 12 Biology Complete Board & NEET Medical Guide',
    subtitle: 'Reproduction, Molecular Genetics, Evolution, Biotechnology Principles & Ecology',
    author: 'Dr. Shalini Gupta & HK Life Sciences Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'Science & Mathematics',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Science',
    subject: 'Biology',
    bookType: 'Handbook',
    pages: 420,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Advanced',
    rating: 4.98,
    reviewCount: 560,
    badge: 'NEET Gold Standard',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-emerald-700 to-cyan-900',
    tags: ['Class 12', 'Biology', 'NEET', 'Genetics', 'Biotechnology', 'Ecology', 'Medical'],
    topics: ['Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance (Mendelism)', 'Molecular Basis of Inheritance (DNA & RNA)', 'Evolution', 'Human Health & Disease', 'Biotechnology: Principles & Processes', 'Biotechnology Applications', 'Organisms and Populations', 'Ecosystem & Biodiversity'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Medical Sciences Wing & National Educational Council',
    whatYoullLearn: [
      'Double fertilisation in angiosperms (syngamy + triple fusion producing 3n endosperm)',
      'Spermatogenesis, oogenesis, menstrual cycle hormonal feedback loops (FSH, LH, Estrogen, Progesterone)',
      'Molecular biology: Hershey-Chase experiment, Meselson-Stahl experiment, DNA replication fork, transcription, genetic code, and lac operon',
      'Recombinant DNA technology: Restriction endonucleases, pBR322 vector features, PCR steps (Denaturation, Annealing, Extension), and bioreactors',
      'Ecological pyramids, energy flow (10% law), population growth models, and biodiversity conservation'
    ],
    tableOfContents: [
      'Unit 1: Reproduction - Sexual Reproduction in Flowering Plants & Human Reproduction',
      'Unit 2: Reproductive Health & Assisted Reproductive Technologies (IVF, ZIFT, GIFT, ICSI)',
      'Unit 3: Genetics & Evolution - Mendelian Inheritance, Chromosomal Disorders & Pedigree',
      'Unit 4: Molecular Basis of Inheritance - DNA Structure, Replication, Transcription & Translation',
      'Unit 5: The Lac Operon & Human Genome Project (HGP)',
      'Unit 6: Evolution - Origin of Life, Darwinism, Hardy-Weinberg Equilibrium',
      'Unit 7: Biology in Human Welfare - Immunity, AIDS, Cancer, Drugs & Microbes',
      'Unit 8: Biotechnology Principles & Genetic Engineering Tools',
      'Unit 9: Biotechnology Applications in Agriculture (Bt Cotton) & Medicine (Humulin)',
      'Unit 10: Ecology - Population Ecology, Ecosystem Energetics & Biodiversity Conservation'
    ],
    chaptersPreview: [
      {
        title: 'Unit 4: Molecular Basis of Inheritance - DNA Replication & Transcription',
        summary: 'Rigorous molecular examination of the genetic material. Analyzes antiparallel double-helix structure, semi-conservative replication by DNA Polymerase III, leading vs lagging strand (Okazaki fragments), and transcription in prokaryotes vs eukaryotes (splicing, capping, tailing).',
        keyPoints: [
          'Meselson and Stahl (1958) demonstrated semi-conservative replication using 15N and 14N heavy isotope centrifugation in CsCl density gradients.',
          'DNA Polymerase can only polymerize in the 5\' -> 3\' direction; hence the lagging strand is synthesized discontinuously.',
          'Lac Operon is an inducible operon: in the presence of allolactose (inducer), the repressor is inactivated, allowing RNA polymerase to transcribe lacZ, lacY, and lacA genes.'
        ],
        codeSnippet: `Genetic Code Key Properties:
1. Triplet nature: 64 codons code for 20 amino acids; 3 stop codons (UAA, UAG, UGA).
2. Unambiguous & Specific: One codon codes for only one amino acid.
3. Degenerate: Some amino acids are coded by more than one codon (e.g. Leucine, Serine).
4. Universal: UUU codes for Phenylalanine in bacteria as well as humans.
5. Initiator Codon: AUG has dual function (codes for Methionine and acts as Start codon).`,
        realWorldUse: 'Essential foundation for medicine, forensic science (DNA fingerprinting), genetic counseling, and mRNA vaccine engineering.'
      }
    ],
    studyNotes: [
      'Hardy-Weinberg Principle equation: p^2 + 2pq + q^2 = 1. Remember factors affecting equilibrium: Gene migration, Genetic drift, Mutation, Genetic recombination, and Natural selection.',
      'In recombinant DNA technology, remember EcoRI cuts DNA at the palindromic recognition sequence 5\'-GAATTC-3\'.'
    ]
  },
  {
    id: 'class12-accountancy-mastery',
    title: 'Class 12 Accountancy Comprehensive Board Guide',
    subtitle: 'Partnership Accounts, Accounting for Companies (Share Capital & Debentures) & Cash Flow Statements',
    author: 'CA Rajesh Singhania & HK Commerce Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Commerce',
    subject: 'Accountancy',
    bookType: 'Handbook',
    pages: 390,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Advanced',
    rating: 4.96,
    reviewCount: 490,
    badge: 'Class 12 Board Gold',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-800 to-yellow-900',
    tags: ['Class 12', 'Commerce', 'Accountancy', 'Partnership Accounts', 'Share Capital', 'Cash Flow', 'CBSE'],
    topics: ['Partnership Fundamentals & Goodwill', 'Admission of a Partner', 'Retirement & Death of a Partner', 'Dissolution of Partnership Firm', 'Issue and Forfeiture of Shares', 'Issue and Redemption of Debentures', 'Financial Statement Analysis', 'Accounting Ratios', 'Cash Flow Statement (AS-3)'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Institute of Chartered Accountants & Commerce Wing',
    whatYoullLearn: [
      'Prepare Profit and Loss Appropriation Accounts, Partner Capital Accounts (Fixed vs Fluctuating)',
      'Calculate Sacrificing Ratio, Gaining Ratio, and revalue assets/liabilities on admission or retirement',
      'Pass journal entries for Realisation Account on dissolution of a partnership firm',
      'Master pro-rata allotment, forfeiture of shares for non-payment of calls, and reissue to Capital Reserve',
      'Compute Liquidity, Solvency, Turnover, and Profitability ratios (Current Ratio, Debt-Equity, Inventory Turnover)',
      'Prepare Cash Flow Statement operating, investing, and financing activities as per revised Accounting Standard 3'
    ],
    tableOfContents: [
      'Chapter 1: Accounting for Partnership: Fundamentals, Interest on Capital & Drawings',
      'Chapter 2: Valuation of Goodwill: Average Profit, Super Profit & Capitalisation Methods',
      'Chapter 3: Admission of a Partner: Revaluation Account & Capital Adjustments',
      'Chapter 4: Retirement and Death of a Partner: Deceased Partner\'s Share of Profit',
      'Chapter 5: Dissolution of Partnership Firm: Realisation Account & Settlement of Debts',
      'Chapter 6: Accounting for Share Capital: Issue at Par/Premium, Pro-Rata & Forfeiture',
      'Chapter 7: Issue and Terms of Redemption of Debentures & Writing off Discount',
      'Chapter 8: Financial Statements of a Company: Balance Sheet & P&L Formats (Schedule III)',
      'Chapter 9: Financial Statement Analysis: Comparative & Common Size Statements',
      'Chapter 10: Accounting Ratios: Current, Quick, Debt-Equity, Interest Coverage, ROI',
      'Chapter 11: Cash Flow Statement (Indirect Method as per AS-3 Revised)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 6: Issue, Forfeiture & Reissue of Shares with Pro-Rata Allotment',
        summary: 'In-depth guide to one of the most critical high-scoring topics in Class 12 board exams. Explains pro-rata category tables, adjustment of excess application money towards allotment and calls, forfeiture journal entries, and transfer of reissue balance to Capital Reserve.',
        keyPoints: [
          'When shares issued at a premium are forfeited, if Securities Premium has already been received, it is NEVER reversed (Securities Premium A/c is not debited).',
          'Maximum permissible discount on reissue of forfeited shares cannot exceed the amount already forfeited on those specific reissued shares.',
          'Profit on reissue transferred to Capital Reserve = (Amount forfeited on reissued shares) - (Discount allowed on reissue).'
        ],
        codeSnippet: `Journal Entry for Forfeiture of Shares:
Share Capital A/c (No. of shares forfeited * Called-up value)  Dr.
  To Calls-in-Arrears A/c (Unpaid amount on calls)
  To Forfeited Shares A/c (Amount actually received on capital)

Journal Entry for Reissue of Forfeited Shares:
Bank A/c (Amount received per share * No. of shares)           Dr.
Forfeited Shares A/c (Discount allowed on reissue)            Dr.
  To Share Capital A/c (Paid-up value * No. of shares)

Transfer to Capital Reserve:
Forfeited Shares A/c                                          Dr.
  To Capital Reserve A/c (Net gain on reissued shares)`,
        realWorldUse: 'Core accounting foundation for CA Foundation/Inter, CS, CMA, investment banking, and corporate finance.'
      }
    ],
    studyNotes: [
      'In Cash Flow Statement, Non-cash expenses (Depreciation, Amortisation) and Non-operating expenses (Loss on sale of fixed assets, Interest paid) are added back to Net Profit before Tax.',
      'Remember Securities Premium can only be utilized for 5 specific purposes defined under Section 52(2) of Companies Act 2013.'
    ]
  },
  {
    id: 'class12-business-studies-mastery',
    title: 'Class 12 Business Studies Principles & Management Guide',
    subtitle: 'Fayol & Taylor Principles, Planning, Organising, Staffing, Directing, Controlling & Financial Management',
    author: 'Prof. Ramesh K. & HK Commerce Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Commerce',
    subject: 'Business Studies',
    bookType: 'Handbook',
    pages: 330,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.93,
    reviewCount: 420,
    badge: 'Commerce Board Pick',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-600 to-orange-800',
    tags: ['Class 12', 'Commerce', 'Business Studies', 'Management', 'Fayol', 'Taylor', 'Marketing', 'CBSE'],
    topics: ['Nature & Significance of Management', 'Principles of Management (Fayol & Taylor)', 'Business Environment (PESTLE)', 'Planning Process', 'Organising (Delegation & Decentralisation)', 'Staffing & Training', 'Directing (Motivation & Leadership)', 'Financial Management & Capital Structure', 'Marketing Management (4Ps)', 'Consumer Protection Act 2019'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Commerce & Management Academic Council',
    whatYoullLearn: [
      'Fayol\'s 14 administrative principles vs Taylor\'s scientific management techniques (Time study, Motion study, Fatigue study)',
      'Steps in the planning process and barriers to effective organizational planning',
      'Maslow\'s need hierarchy theory, Herzberg hygiene factors, and leadership styles (Autocratic, Democratic, Laissez-faire)',
      'Trading on Equity, Debt-Equity choice, and factors determining fixed vs working capital requirements',
      'The 4 Ps of Marketing mix (Product, Price, Place, Promotion) and Consumer redressal commissions under CPA 2019'
    ],
    tableOfContents: [
      'Chapter 1: Nature and Significance of Management: Effectiveness vs Efficiency',
      'Chapter 2: Principles of Management: Fayol\'s 14 Principles vs Taylor\'s Scientific Techniques',
      'Chapter 3: Business Environment: Dimensions (Economic, Social, Technological, Political, Legal)',
      'Chapter 4: Planning: Meaning, Limitations & Step-by-Step Planning Process',
      'Chapter 5: Organising: Functional vs Divisional Structures, Delegation & Decentralisation',
      'Chapter 6: Staffing: Recruitment Sources (Internal vs External) & Selection Process',
      'Chapter 7: Directing: Elements of Directing (Supervision, Motivation, Leadership, Communication)',
      'Chapter 8: Controlling: Controlling Process & Relationship between Planning and Controlling',
      'Chapter 9: Financial Management: Investment, Financing and Dividend Decisions',
      'Chapter 10: Financial Markets: Money Market Instruments vs Capital Market (NSE/BSE/SEBI)',
      'Chapter 11: Marketing Management: Marketing Philosophies & 4Ps Mix',
      'Chapter 12: Consumer Protection: Rights and Responsibilities under Consumer Protection Act 2019'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Principles of Management - Fayol vs Taylor',
        summary: 'Systematic comparison of Henri Fayol\'s administrative theory focusing on top-level management with F.W. Taylor\'s scientific management techniques focused on shop-floor efficiency and eliminating wasted worker motions.',
        keyPoints: [
          'Fayol\'s Unity of Command: An employee should receive orders from one and only one superior to prevent confusion and conflict.',
          'Fayol\'s Unity of Direction: One head and one plan for a group of activities having the same objective.',
          'Taylor\'s Differential Piece Wage System rewards efficient workers with higher wage rates, incentivizing benchmark productivity.'
        ],
        codeSnippet: `Fayol\'s 14 Principles Mnemonic: "DAD U SEE U R SO COOL"
D - Division of work
A - Authority and Responsibility
D - Discipline
U - Unity of Command
S - Subordination of individual interest
E - Remuneration
E - Centralisation & Decentralisation
U - Unity of Direction
S - Scalar Chain (Gang Plank for emergency)
O - Order
E - Equity
S - Stability of tenure of personnel
I - Initiative
E - Esprit de Corps (Team spirit)`,
        realWorldUse: 'Executive leadership, organizational development, human resources, and business administration.'
      }
    ],
    studyNotes: [
      'Gang Plank is a shorter direct communication route permitting two employees of the same level to communicate directly during emergency without violating the scalar chain.',
      'Remember Trading on Equity is beneficial only when Return on Investment (ROI) is higher than the rate of interest on debt capital.'
    ]
  },
  {
    id: 'class12-macroeconomics-mastery',
    title: 'Class 12 Macroeconomics & Indian Economic Development Handbook',
    subtitle: 'National Income Accounting, Money & Banking, Income Determination, Government Budget & 1991 Reforms',
    author: 'Dr. Meenakshi Sundaram & HK Economics Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Commerce',
    subject: 'Economics',
    bookType: 'Handbook',
    pages: 350,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.95,
    reviewCount: 460,
    badge: 'Class 12 Board Gold',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-green-700 to-emerald-900',
    tags: ['Class 12', 'Commerce', 'Economics', 'Macroeconomics', 'National Income', 'Government Budget', 'CBSE'],
    topics: ['Circular Flow of Income', 'National Income Aggregates (GDP, NNP at FC)', 'Credit Creation by Commercial Banks', 'Monetary Policy Tools (Repo, CRR, SLR)', 'Keynesian Multiplier (k = 1 / MPS)', 'Deficit Budgets (Fiscal, Revenue, Primary)', 'Balance of Payments & Foreign Exchange', '1991 LPG Reforms', 'Rural Development & Sustainable Growth'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Department of Macroeconomic Research',
    whatYoullLearn: [
      'Calculate National Income using Value Added, Income, and Expenditure methods with standard adjustments (NFIA, NIT, Depreciation)',
      'Mechanism of Credit Creation by commercial banks: Money Multiplier = 1 / Legal Reserve Ratio (LRR)',
      'RBI monetary instruments: Repo rate, Reverse Repo rate, Cash Reserve Ratio (CRR), Statutory Liquidity Ratio (SLR), Open Market Operations (OMO)',
      'Short-run equilibrium output determination and Keynesian Investment Multiplier',
      'Fiscal deficit, Revenue deficit, and Primary deficit implications on inflation and national debt',
      'Critique of Indian Economic Reforms since 1991 (Liberalisation, Privatisation, Globalisation) and comparative development with China and Pakistan'
    ],
    tableOfContents: [
      'Part A: Introductory Macroeconomics - Circular Flow of Income & National Income Aggregates',
      'Part A: Measurement of National Income (Value Added, Income, Expenditure Methods)',
      'Part A: Money and Banking: Money Supply Measures (M1, M3) & Credit Creation',
      'Part A: Central Bank Functions & Monetary Policy Instruments (RBI Control)',
      'Part A: Determination of Income and Employment: Aggregate Demand, MPC, MPS & Multiplier',
      'Part A: Excess Demand (Inflationary Gap) & Deficient Demand (Deflationary Gap) Remedies',
      'Part A: Government Budget and the Economy: Revenue vs Capital Receipts, Deficit Types',
      'Part A: Balance of Payments (BoP Current vs Capital Accounts) & Foreign Exchange Rates',
      'Part B: Indian Economic Development - State of Indian Economy on the Eve of Independence',
      'Part B: Indian Economy (1950-1990): Five Year Plans & Import Substitution Industrialisation',
      'Part B: Economic Reforms Since 1991: New Economic Policy (LPG Strategies)',
      'Part B: Current Challenges: Human Capital Formation, Rural Credit, Employment & Sustainable Development',
      'Part B: Comparative Development Experiences of India, China and Pakistan'
    ],
    chaptersPreview: [
      {
        title: 'Part A: Measurement of National Income & Three Methods',
        summary: 'Step-by-step mathematical breakdown of calculating Gross Domestic Product at Market Price (GDPmp) and Net National Product at Factor Cost (NNPfc - National Income) using Value Added Method, Factor Income Method, and Final Expenditure Method.',
        keyPoints: [
          'Value Added Method: Value Added = Value of Output - Intermediate Consumption; deduct change in stock (Closing Stock - Opening Stock).',
          'Income Method: Compensation of Employees + Operating Surplus (Rent + Royalty + Interest + Profit) + Mixed Income of Self-employed = NDPfc.',
          'Expenditure Method: Private Final Consumption Expenditure (PFCE) + Government Final Consumption Expenditure (GFCE) + Gross Domestic Capital Formation (GDCF) + Net Exports (X - M) = GDPmp.'
        ],
        codeSnippet: `Key National Income Transformation Bridges:
1. Gross to Net: Deduct Depreciation (Consumption of Fixed Capital)
2. Domestic to National: Add Net Factor Income from Abroad (NFIA)
3. Market Price to Factor Cost: Deduct Net Indirect Taxes (NIT = Indirect Taxes - Subsidies)

National Income = NNP at Factor Cost (NNPfc)`,
        realWorldUse: 'Essential for economic policy analysis, civil services (UPSC), banking exams, RBI Grade B, and economic journalism.'
      }
    ],
    studyNotes: [
      'Transfer payments (scholarships, old age pensions, gifts) are NOT included in National Income because they are unearned and do not reflect any production of goods or services.',
      'Primary Deficit = Fiscal Deficit - Interest Payments. A zero primary deficit indicates the government is borrowing money solely to pay interest on past loans.'
    ]
  },
  {
    id: 'class12-pol-science-mastery',
    title: 'Class 12 Political Science: World Politics & Independent India',
    subtitle: 'Cold War Era to Multi-Polarity, Contemporary South Asia, Nation Building, Planned Development & Democratic Order',
    author: 'Dr. Ananya Ray & HK Political Science Wing',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Humanities / Arts',
    subject: 'Political Science',
    bookType: 'Handbook',
    pages: 340,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.92,
    reviewCount: 370,
    badge: 'Humanities Gold',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-800 to-slate-900',
    tags: ['Class 12', 'Political Science', 'World Politics', 'Indian Politics', 'Humanities', 'UPSC Foundation', 'CBSE'],
    topics: ['The End of Bipolarity (Soviet Disintegration)', 'New Centres of Power (EU, ASEAN, BRICS)', 'Contemporary South Asia', 'United Nations & Global Organisations', 'Security in Contemporary World', 'Challenges of Nation Building (Partition & Princely States)', 'Era of One-Party Dominance', 'Politics of Planned Development', 'Crisis of the Democratic Order (Emergency 1975)', 'Recent Developments in Indian Politics'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Council of Educational Research & HK VELORA Political Studies Wing',
    whatYoullLearn: [
      'Causes and global consequences of Soviet Union disintegration in 1991 and Shock Therapy',
      'Rise of alternative centres of power: European Union, ASEAN, China\'s economic ascent, and BRICS',
      'Integration of 565 Princely States into India by Sardar Vallabhbhai Patel (Instrument of Accession, Junagadh, Hyderabad, Manipur)',
      'States Reorganisation Commission 1953 and linguistic reorganisation of Indian states',
      'Background, declaration, resistance, and constitutional lessons of the 1975 National Emergency',
      'Coalition politics era in India and emergence of Mandal commission recommendations'
    ],
    tableOfContents: [
      'Part A: Contemporary World Politics - The End of Bipolarity & Fall of Berlin Wall',
      'Part A: Contemporary Centres of Power: European Union, ASEAN, Rise of China',
      'Part A: Contemporary South Asia: India-Pakistan, Bangladesh, Sri Lanka Conflicts & SAARC',
      'Part A: International Organisations: UN Restructuring & Security Council Veto Debates',
      'Part A: Security in Contemporary World: Traditional vs Non-Traditional Security Threats',
      'Part A: Environment & Natural Resources: Kyoto Protocol, Paris Accord & Commons',
      'Part A: Globalisation: Political, Economic and Cultural Dimensions',
      'Part B: Politics in India Since Independence - Challenges of Nation Building (Partition & Integration)',
      'Part B: Era of One-Party Dominance: Congress System & First Three General Elections',
      'Part B: Politics of Planned Development: Planning Commission, Five Year Plans & Bombay Plan',
      'Part B: India\'s External Relations: Non-Aligned Movement (NAM), 1962 China War, 1965 & 1971 Pak Wars',
      'Part B: Crisis of the Democratic Order: The 1975 Emergency, Press Censorship & 1977 Elections',
      'Part B: Regional Aspirations & Insurgencies (Punjab, Northeast, Kashmir)',
      'Part B: Recent Developments: Era of Coalitions, 2014 Mandate & Major Governance Shifts'
    ],
    chaptersPreview: [
      {
        title: 'Part B: Challenges of Nation Building - Integration of Princely States',
        summary: 'Examines the monumental challenge faced by newly independent India in August 1947: integrating over 565 autonomous princely states. Evaluates the visionary diplomacy of Sardar Vallabhbhai Patel and V.P. Menon in securing accessions without the balkanization of the country.',
        keyPoints: [
          'The British declaration that paramountcy would lapse left princely states legally free to join India, Pakistan, or remain independent.',
          'Sardar Patel\'s approach: appeal to historical kinship, offer of Privy Purses, and firm diplomacy.',
          'Four difficult accessions: Junagadh (plebiscite), Hyderabad (Operation Polo police action), Kashmir (Instrument of Accession post-tribal invasion), and Manipur (Constitutional Monarchy plebiscite).'
        ],
        codeSnippet: `Constitutional Lessons of 1975 Emergency:
1. 44th Constitutional Amendment (1978): Replaced "internal disturbance" with "armed rebellion" as the ground for National Emergency under Article 352.
2. Council of Ministers written recommendation to the President was made mandatory.
3. Fundamental rights under Article 20 (Protection against conviction) and Article 21 (Right to life and personal liberty) cannot be suspended even during Emergency!`,
        realWorldUse: 'Essential for civil services (UPSC/State PSC), constitutional law, diplomacy, and political journalism.'
      }
    ],
    studyNotes: [
      'In Cold War history, remember the Cuban Missile Crisis took place in October 1962 and is widely regarded as the high point of Cold War tensions between JFK and Nikita Khrushchev.',
      'Sardar Vallabhbhai Patel earned the title "Iron Man of India" for uniting 565 princely states into a unified constitutional republic.'
    ]
  },
  {
    id: 'class12-cs-python-mastery',
    title: 'Class 12 Computer Science with Python Handbook',
    subtitle: 'Data Structures (Stack), Python Functions, File Handling (Text/Binary/CSV), Computer Networks & MySQL Interfacing',
    author: 'Er. Hariom & HK Computer Science Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'Coding & Programming',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Science',
    subject: 'Computer / IT',
    bookType: 'Handbook',
    pages: 370,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Advanced',
    rating: 4.98,
    reviewCount: 540,
    badge: 'CBSE 083 Full Marks',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-700 to-slate-900',
    tags: ['Class 12', 'Computer Science', 'Python', 'MySQL', 'Stacks', 'File Handling', 'Networking', 'CBSE'],
    topics: ['Functions & Scope', 'File Handling (read, write, append, seek, tell)', 'Binary File Handling (pickle module)', 'CSV File Handling (csv.reader, csv.writer)', 'Data Structure: Linear Stack (push, pop, peek)', 'Computer Networks (Topologies, OSI, Protocols, IP)', 'Database Management (MySQL Queries, Joins)', 'Python-MySQL Connector Interfacing'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Open Technology Labs & CBSE Computer Wing',
    whatYoullLearn: [
      'Write modular Python functions with default, positional, keyword arguments and recursion',
      'Text files, binary files (pickle.dump, pickle.load), and CSV files processing with exception handling',
      'Implement Stack data structure (LIFO) in Python: Push, Pop, Peek, Display with Underflow / Overflow checks',
      'Computer network devices (Switch, Router, Gateway, Repeater) and transmission media (Twisted pair, Coaxial, Fiber optic)',
      'Write complex SQL queries involving GROUP BY, HAVING, ORDER BY, aggregate functions (COUNT, SUM, AVG), and Cartesian/Equi-Joins',
      'Connect Python application to MySQL database using mysql.connector to perform full CRUD operations'
    ],
    tableOfContents: [
      'Unit 1: Computational Thinking and Programming - Python Functions & Scope Rules (LEGB)',
      'Unit 1: File Handling in Python: Text Files, tell() and seek() Pointers',
      'Unit 1: Binary Files Handling: pickle Module Serialization and Deserialization',
      'Unit 1: CSV Files Handling: csv.reader and csv.writer with newline parameter',
      'Unit 1: Data Structures: Linear Stack Implementation using Lists',
      'Unit 2: Computer Networks: Types of Networks (LAN, MAN, WAN), Topologies (Star, Bus, Tree, Mesh)',
      'Unit 2: Network Protocols: TCP/IP, HTTP, HTTPS, FTP, SMTP, POP3, VoIP & DNS',
      'Unit 2: Network Security: Firewall, Cookies, Cyber Crimes, Malware & Phishing Defense',
      'Unit 3: Database Management: Relational Model, SQL Constraints (NOT NULL, UNIQUE, CHECK)',
      'Unit 3: SQL Advanced Queries: Aggregate Functions, GROUP BY, HAVING, and Table Joins',
      'Unit 3: Python-MySQL Database Connectivity (mysql.connector module)',
      'Unit 4: Practical Lab Manual, Project Guide & 100 Solved Viva-Voce Questions'
    ],
    chaptersPreview: [
      {
        title: 'Unit 1: Linear Stack Implementation in Python (Push, Pop, Peek)',
        summary: 'Complete implementation of the Stack abstract data type adhering strictly to the Last-In-First-Out (LIFO) discipline. Covers step-by-step code for stack overflow and underflow conditions required for the CBSE board practical exam.',
        keyPoints: [
          'Stack operations: Push adds an item to the top; Pop removes and returns the top item; Peek inspects the top item without removing.',
          'Underflow occurs when an attempt is made to pop from an empty stack.',
          'In Python, a standard list is used where append() acts as push() and pop() removes the last element in O(1) time.'
        ],
        codeSnippet: `# CBSE Board Pattern Stack Implementation
stack = []

def push(item):
    stack.append(item)
    print(f"Pushed {item} to stack. Current top: {stack[-1]}")

def pop():
    if not stack:
        print("Stack Underflow! Stack is empty.")
        return None
    return stack.pop()

def peek():
    if not stack:
        return "Stack is empty"
    return stack[-1]

# Example run
push("Chapter 1")
push("Chapter 2")
print("Top element is:", peek()) # Output: Chapter 2
print("Popped element:", pop())    # Output: Chapter 2`,
        realWorldUse: 'Fundamental algorithm construct used in function call stacks, undo/redo mechanisms, browser history traversal, and compiler syntax parsing.'
      }
    ],
    studyNotes: [
      'In Python-MySQL connection, always call mycon.commit() after executing INSERT, UPDATE, or DELETE queries; otherwise changes will not persist in the database.',
      'In file handling, \'r+\' opens file for both reading and writing with file pointer at beginning, while \'w+\' truncates existing content before reading/writing.'
    ]
  }
];
