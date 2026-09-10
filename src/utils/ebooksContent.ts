import { EBookChapter, EBookItem } from '../types';

export interface EnrichedChapter extends EBookChapter {
  chapterNumber: number;
  readTime: string;
  coreConcepts: string[];
  vivaQuestions?: { q: string; a: string }[];
  quiz?: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
}

/**
 * Generates an in-depth, student-friendly chapter study guide for any book and chapter title
 * Authored by Hariom Kushwaha (HK Tech World)
 */
export function getChapterDetails(book: EBookItem, chapterIndex: number): EnrichedChapter {
  const toc = book.tableOfContents || [];
  const rawChapterTitle = toc[chapterIndex] || `Chapter ${chapterIndex + 1}`;
  const cleanTitle = rawChapterTitle.replace(/^\d+\.\s*/, '');

  // Check if there is an explicit preview matching this chapter index or title
  const previews = book.chaptersPreview || [];
  const explicitPreview = previews.find(
    ch => (ch.title && cleanTitle && ch.title.toLowerCase().includes(cleanTitle.toLowerCase())) ||
          (ch.title && ch.title.toLowerCase().includes(`chapter ${chapterIndex + 1}:`))
  ) || (previews[chapterIndex] && previews[chapterIndex].title && previews[chapterIndex].title.includes(cleanTitle) ? previews[chapterIndex] : null);

  if (explicitPreview) {
    return {
      chapterNumber: chapterIndex + 1,
      title: explicitPreview.title.includes('Chapter') ? explicitPreview.title : `Chapter ${chapterIndex + 1}: ${cleanTitle}`,
      summary: explicitPreview.summary,
      readTime: '10-15 min read',
      keyPoints: explicitPreview.keyPoints || [
        'Core algorithmic and design trade-offs applied to real-world software engineering.',
        'High-yield concepts frequently tested in university exams and tech placements.',
        'Practical implementation rules and complexity bounds.'
      ],
      coreConcepts: [
        'Theoretical Foundation & Real-Life Analogy',
        'Production Implementation Patterns',
        'Time & Space Complexity Trade-offs',
        'Common Student Pitfalls & Exam Traps'
      ],
      codeSnippet: explicitPreview.codeSnippet,
      vivaQuestions: getCuratedVivaQuestions(cleanTitle, book.category),
      quiz: getCuratedQuiz(cleanTitle, book.category)
    };
  }

  // Otherwise generate domain-specific high quality chapter study guide
  return generateDomainChapter(book, chapterIndex, cleanTitle);
}

function generateDomainChapter(book: EBookItem, chapterIndex: number, cleanTitle: string): EnrichedChapter {
  const category = book.category;
  const chNum = chapterIndex + 1;
  const lowerTitle = cleanTitle.toLowerCase();

  let summary = '';
  let keyPoints: string[] = [];
  let codeSnippet: string | undefined = undefined;

  // 1. Data Structures & Algorithms
  if (category === 'Coding & Programming' && (book.tags.includes('DSA') || lowerTitle.includes('tree') || lowerTitle.includes('graph') || lowerTitle.includes('stack') || lowerTitle.includes('queue') || lowerTitle.includes('hash') || lowerTitle.includes('array') || lowerTitle.includes('dp') || lowerTitle.includes('heap'))) {
    summary = `इस अध्याय में हम ${cleanTitle} के वास्तविक कार्यप्रणाली और Big-O विश्लेषण को बिल्कुल सरल और व्यावहारिक ढंग से समझेंगे। (This chapter provides an intuitive, step-by-step breakdown of ${cleanTitle}). हम देखेंगे कि कंप्यूटर मेमोरी में डेटा कैसे स्टोर होता है, टाइम और स्पेस कॉम्प्लेक्सिटी कैसे निकाली जाती है, और LeetCode तथा टेक्निकल इंटरव्यू में इस पैटर्न को कैसे तुरंत पहचाना जाता है।`;
    keyPoints = [
      `मूल संकल्पना (Core Concept): ${cleanTitle} का मुख्य उद्देश्य ऑपरेशन की गति बढ़ाना (Time Optimization) और मेमोरी का सदुपयोग करना (Space Optimization) है।`,
      `वास्तविक जीवन उदाहरण: जैसे सिनेमा टिकट की लाइन Queue (FIFO) है और प्लेटों का ढेर Stack (LIFO) है, वैसे ही डेटा स्ट्रक्चर रोज़मर्रा की ज़िंदगी के लॉजिक पर काम करते हैं।`,
      `कॉम्प्लेक्सिटी बाउंड्स (Big-O Bounds): बेस्ट, एवरेज और वर्स्ट केस टाइम कॉम्प्लेक्सिटी को कोड लिखने से पहले समझना अनिवार्य है।`,
      `अक्सर होने वाली गलतियाँ (Common Trap): बाउंड्री कंडीशन्स जैसे खाली इनपुट (empty array/null node), डुप्लीकेट वैल्यूज, और इंटीजर ओवरफ्लो को हमेशा पहले हैंडल करें।`
    ];
    codeSnippet = `// Clean Implementation by Hariom Kushwaha (HK Tech World)
// Topic: ${cleanTitle}
class OptimalAlgorithm {
    /**
     * Efficient traversal and constraint checking
     * Time Complexity: O(n) | Auxiliary Space: O(1)
     */
    public solve(elements: number[]): boolean {
        if (!elements || elements.length === 0) return false;
        
        let left = 0;
        let right = elements.length - 1;
        
        // Two-pointer / sliding window traversal pattern
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (elements[mid] === 0) return true;
            
            // Adjust pointers based on directional invariant
            if (elements[left] < elements[right]) {
                left++;
            } else {
                right--;
            }
        }
        return false;
    }
}`;
  } 
  // 2. Python & Automation
  else if (category === 'Coding & Programming' && (book.tags.includes('Python') || lowerTitle.includes('python') || lowerTitle.includes('scraping') || lowerTitle.includes('excel') || lowerTitle.includes('regex'))) {
    summary = `पायथन की सबसे बड़ी ताकत उसकी सरलता और ऑटोमेशन क्षमता है। ${cleanTitle} के इस अध्याय में हम सीखेंगे कि कैसे कुछ ही लाइनों के कोड से घंटों का उबाऊ काम (boring repetitive tasks) सेकंडों में ऑटोमेट किया जा सकता है।`;
    keyPoints = [
      `ऑटोमेशन माइंडसेट: जिस काम को करने में आपको बार-बार 10 मिनट लगते हों, उसे हमेशा पायथन स्क्रिप्ट से 1 क्लिक में बदलने का प्रयास करें।`,
      `साफ़ और पठनीय कोड: PEP 8 गाइडलाइंस का पालन करें, वैरिएबल के सार्थक नाम रखें और एरर हैंडलिंग (try-except) का उचित उपयोग करें।`,
      `मॉड्यूल्स की शक्ति: अंतर्निहित और लोकप्रिय लाइब्रेरीज़ का सही उपयोग कोड की जटिलता को 80% कम कर देता है।`,
      `स्टूडेंट टिप: कभी भी हार्ड-कोडेड पाथ या क्रेडेंशियल्स स्क्रिप्ट में न लिखें, हमेशा पर्यावरण चर (environment variables) या इनपुट पैरामीटर्स का उपयोग करें।`
    ];
    codeSnippet = `# Python Automation Script by Hariom Kushwaha (HK Tech World)
# Topic: ${cleanTitle}
import os
import sys

def automate_task(directory_path: str):
    """Scans, processes, and automates file workflows safely."""
    try:
        if not os.path.exists(directory_path):
            print(f"Directory not found: {directory_path}")
            return
            
        processed_count = 0
        for filename in os.listdir(directory_path):
            # Process files cleanly with defensive checks
            if not filename.startswith('.'):
                processed_count += 1
                
        print(f"Successfully processed {processed_count} items in {directory_path}.")
    except Exception as error:
        print(f"Error during execution: {error}", file=sys.stderr)`;
  }
  // 3. Web Development & React
  else if (category === 'Web Development' || lowerTitle.includes('react') || lowerTitle.includes('html') || lowerTitle.includes('css') || lowerTitle.includes('javascript') || lowerTitle.includes('dom')) {
    summary = `इस अध्याय में हम ${cleanTitle} की संपूर्ण कार्यप्रणाली को गहराई से समझेंगे। ब्राउज़र कैसे कोड को स्क्रीन पर रेंडर करता है, स्टेट (State) कैसे बदलती है, और आधुनिक प्रोडक्शन-ग्रेड वेब ऐप्स में परफॉर्मेंस लैग को कैसे रोका जाता है, यह सब विस्तार से समझाया गया है।`;
    keyPoints = [
      `रिएक्टिव आर्किटेक्चर: UI हमेशा स्टेट का परिणाम होता है: UI = f(State)। स्टेट बदलने पर केवल वही घटक अपडेट होता है।`,
      `इवेंट लूप और एसिंक: माइक्रो-टास्क (Promises) और मैक्रो-टास्क (setTimeout) की प्राथमिकता समझकर स्मूथ 60 FPS यूजर एक्सपीरियंस दें।`,
      `क्लीन कोड और हुक्स: स्टेट इम्यूटेबिलिटी (State Immutability) का ध्यान रखें, कभी भी स्टेट को डायरेक्ट म्यूटेट न करें।`,
      `मोबाइल-फर्स्ट डिज़ाइन: हमेशा पहले मोबाइल स्क्रीन के लिए लेआउट बनाएँ, फिर बड़े डेस्कटॉप स्क्रीन्स के लिए एक्सपैंड करें।`
    ];
    codeSnippet = `// Modern Production Web Pattern by Hariom Kushwaha
// Topic: ${cleanTitle}
import React, { useState, useEffect } from 'react';

export const DataViewer: React.FC<{ endpoint: string }> = ({ endpoint }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    
    async function loadData() {
      try {
        setLoading(true);
        const res = await fetch(endpoint, { signal: controller.signal });
        if (!res.ok) throw new Error(\`Server returned status \${res.status}\`);
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
    return () => controller.abort(); // Cleanup on unmount
  }, [endpoint]);

  if (loading) return <div className="p-4 text-xs text-slate-400">Loading data...</div>;
  if (error) return <div className="p-4 text-xs text-red-400">Error: {error}</div>;
  return <div className="p-4 text-xs text-slate-200">Loaded {data.length} records securely.</div>;
};`;
  }
  // 4. Artificial Intelligence & LLMs
  else if (category === 'Artificial Intelligence' || lowerTitle.includes('ai') || lowerTitle.includes('prompt') || lowerTitle.includes('rag') || lowerTitle.includes('llm') || lowerTitle.includes('agent')) {
    summary = `आर्टिफिशियल इंटेलिजेंस और लार्ज लैंग्वेज मॉडल्स (LLMs) की दुनिया में ${cleanTitle} एक क्रांतिकारी विषय है। इस अध्याय में हम समझेंगे कि मॉडल्स शब्दों की भविष्यवाणी (Next-Token Prediction) कैसे करते हैं, प्रॉम्प्ट को सटीक कैसे बनाया जाता है, और असली ऐप्स में AI को कैसे इंटीग्रेट किया जाता है।`;
    keyPoints = [
      `टोकनाइजेशन और एंबेडिंग्स: कंप्यूटर शब्दों को नहीं बल्कि वेक्टर्स (संख्याओं की सूचियों) को समझता है। समान अर्थ वाले शब्द वेक्टर स्पेस में पास-पास होते हैं।`,
      `सिस्टम प्रॉम्प्ट का जादू: AI को उसका रोल, इनपुट का दायरा, आउटपुट का स्ट्रक्चर (JSON) और सख्त नियम (Negative Constraints) स्पष्ट रूप से दें।`,
      `RAG (Retrieval Augmented Generation): AI को आपके निजी नोट्स या कंपनी के डेटा पर बात कराने के लिए पहले डेटाबेस से संबंधित टुकड़े ढूंढें और प्रॉम्प्ट में भेजें।`,
      `हैलुसिनेशन से बचाव: मॉडल को हमेशा निर्देश दें: "अगर संदर्भ में उत्तर न मिले, तो मनगढ़ंत उत्तर देने के बजाय स्पष्ट कहें कि जानकारी उपलब्ध नहीं है।"`,
    ];
    codeSnippet = `// AI Prompt Architecture Blueprint by Hariom Kushwaha
// Topic: ${cleanTitle}
export const AI_SYSTEM_PROMPT = \`You are an expert AI mentor powered by HK Tech World.
Goal: Provide clear, encouraging, and mathematically accurate explanations for students.

Format Instructions:
1. Explain the intuition in 2 simple sentences.
2. Provide a real-world analogy.
3. Show clean, bug-free implementation code with comments.
4. Conclude with 2 common viva interview questions and their ideal answers.

Constraint: Never output speculative facts; adhere strictly to standard computer science definitions.\`;`;
  }
  // 5. Cybersecurity & Ethical Hacking
  else if (category === 'Cybersecurity & Safety' || lowerTitle.includes('security') || lowerTitle.includes('hack') || lowerTitle.includes('owasp') || lowerTitle.includes('network') || lowerTitle.includes('crypto')) {
    summary = `सुरक्षा केवल पासवर्ड लगाने का नाम नहीं है, यह सिस्टम के हर हिस्से को सुरक्षित सोचने का नज़रिया (Defensive Mindset) है। इस अध्याय में हम ${cleanTitle} के सुरक्षा पहलुओं, संभावित हमलों और उनसे बचाव के पुख्ता तरीकों को विस्तार से समझेंगे।`;
    keyPoints = [
      `शून्य विश्वास (Zero-Trust Model): कभी भी किसी आने वाले इनपुट, हेडर या रिक्वेस्ट पर आँख मूंदकर भरोसा न करें। हर चीज़ को वैलिडेट करें।`,
      `हमलावरों की तकनीक: समझें कि हैकर्स सिस्टम में कमज़ोरियों को कैसे स्कैन करते हैं ताकि आप उनसे पहले उन कमज़ोरियों को बंद कर सकें।`,
      `डेटा प्राइवेसी और एन्क्रिप्शन: डेटा जब आराम में हो (At-Rest) या इंटरनेट पर सफ़र कर रहा हो (In-Transit), दोनों ही स्थितियों में मज़बूत एन्क्रिप्शन (AES-256, TLS 1.3) लागू करें।`,
      `छात्रों के लिए नियम: एथिकल हैकिंग के टूल्स का इस्तेमाल केवल अपनी अनुमति वाली लैब्स और परमिशन वाले सर्वर्स पर ही सीखने के उद्देश्य से करें।`
    ];
    codeSnippet = `// Defensive Security Input Sanitization by Hariom Kushwaha
// Topic: ${cleanTitle}
import DOMPurify from 'isomorphic-dompurify';

export function sanitizeUserInput(rawInput: string): string {
  if (!rawInput || typeof rawInput !== 'string') return '';
  
  // 1. Trim whitespace and limit maximum length to prevent buffer exhaustion
  const trimmed = rawInput.trim().slice(0, 5000);
  
  // 2. Strip any malicious executable script tags or dangerous attributes
  const clean = DOMPurify.sanitize(trimmed);
  
  return clean;
}`;
  }
  // 6. Core Engineering, OS, Networks, DB, Career & Cloud
  else {
    summary = `यह अध्याय ${cleanTitle} की बुनियादी थ्योरी को उद्योग के आधुनिक सॉफ्टवेयर इंजीनियरिंग पैटर्न से जोड़ता है। यहाँ आप आर्किटेक्चरल डिजाइन, प्रदर्शन के सिद्धांत और परीक्षा में पूछे जाने वाले महत्वपूर्ण प्रश्नों को आसानी से सीखेंगे।`;
    keyPoints = [
      `सिस्टम का मूल सिद्धांत: डेटा लेयर और प्रेजेंटेशन लॉजिक को हमेशा अलग रखें ताकि सिस्टम में स्केलेबिलिटी और विश्वसनीयता बनी रहे।`,
      `प्रदर्शन और रिसोर्स मैनेजमेंट: मेमोरी लीक्स, अनियंत्रित लूप्स और अनावश्यक नेटवर्क कॉल्स को रोककर सिस्टम को तेज़ और हल्का बनाए रखें।`,
      `परीक्षा और इंटरव्यू टिप: केवल उत्तर रटने के बजाय "यह तकनीक क्यों बनाई गई?" (The Why Behind The Tech) को समझें।`,
      `उद्योग का मानक: हमेशा ऐसे प्रोजेक्ट्स बनाएँ जो वास्तविक लोगों की किसी समस्या का समाधान करते हों।`
    ];
    codeSnippet = `// Production Engineering Pattern by Hariom Kushwaha
// Topic: ${cleanTitle}
export class SystemArchitecture {
  private status: 'HEALTHY' | 'DEGRADED' = 'HEALTHY';

  public executeTask(taskName: string): boolean {
    try {
      console.log(\`[HK Tech World] Executing: \${taskName}\`);
      return true;
    } catch (err) {
      this.status = 'DEGRADED';
      console.error(\`Task failed: \${err}\`);
      return false;
    }
  }
}`;
  }

  return {
    chapterNumber: chNum,
    title: `Chapter ${chNum}: ${cleanTitle}`,
    summary,
    readTime: '10-15 min read',
    keyPoints,
    coreConcepts: [
      'Core Architecture & Real-Life Analogy',
      'Step-by-Step Implementation Mechanics',
      'Common Student Pitfalls & Boundary Cases',
      'Semester Exam & Technical Interview Questions'
    ],
    codeSnippet,
    vivaQuestions: getCuratedVivaQuestions(cleanTitle, category),
    quiz: getCuratedQuiz(cleanTitle, category)
  };
}

function getCuratedVivaQuestions(topic: string, category: string): { q: string; a: string }[] {
  return [
    {
      q: `${topic} का वास्तविक सॉफ्टवेयर इंजीनियरिंग में क्या मुख्य लाभ (Primary Advantage) है?`,
      a: `यह सिस्टम की स्पीड (Time Complexity) को तेज़ करता है, मेमोरी की खपत को कम करता है, और कोड को इतना व्यवस्थित (Modular) बनाता है कि बड़े प्रोजेक्ट्स में बग्स आसानी से पकड़े और सुधारे जा सकें।`
    },
    {
      q: `${topic} को लागू करते समय सबसे बड़ी गलती या बॉर्डर केस (Edge Case) क्या हो सकता है?`,
      a: `खाली इनपुट (Null/Empty input), मेमोरी ओवरफ्लो, बिना सैनिटाइज़ किया हुआ यूज़र डेटा, या गलत बाउंड्री कंडीशन। एक अच्छा इंजीनियर हमेशा इन एज-केस को गार्ड क्लॉज़ (Guard Clauses) से पहले ही चेक कर लेता है।`
    },
    {
      q: `इंटरव्यूअर को ${topic} के ट्रेड-ऑफ्स (Trade-offs) कैसे समझाएँगे?`,
      a: `सॉफ्टवेयर में कोई भी समाधान मुफ़्त नहीं होता। हर डिज़ाइन में स्पीड बनाम मेमोरी, या सादगी बनाम लचीलेपन का संतुलन होता है। ${topic} थोड़ी सी अतिरिक्त मेमोरी या कोड के बदले बहुत तेज़ और भरोसेमंद परफॉर्मेंस प्रदान करता है।`
    }
  ];
}

function getCuratedQuiz(topic: string, category: string): { question: string; options: string[]; answerIndex: number; explanation: string }[] {
  return [
    {
      question: `${topic} के संदर्भ में सबसे बेहतरीन कोडिंग प्रैक्टिस (Best Practice) कौन सी है?`,
      options: [
        'बिना इनपुट चेक किए सीधे कोड चलाना',
        'शुरुआत में ही गार्ड क्लॉज़ से इनपुट और बाउंड्री कंडीशंस को सुरक्षित वैलिडेट करना',
        'सारे वेरिएबल्स को ग्लोबल घोषित कर देना',
        'कंपाइलर वार्निंग्स और लिंटर को बंद कर देना'
      ],
      answerIndex: 1,
      explanation: 'डिफेंसिव प्रोग्रामिंग और शुरुआती इनपुट वैलिडेशन से 90% से ज़्यादा बग्स और मेमोरी क्रैश हमेशा के लिए टल जाते हैं।'
    },
    {
      question: `${topic} के प्रदर्शन (Performance) को नापने के लिए सबसे महत्वपूर्ण पैमाना क्या है?`,
      options: [
        'कंप्यूटर स्क्रीन की ब्राइटनेस',
        'एल्गोरिदम की टाइम और स्पेस कॉम्प्लेक्सिटी (Big-O Notations)',
        'कोड फाइल का साइज किलोबाइट्स में',
        'टाइपिंग की स्पीड'
      ],
      answerIndex: 1,
      explanation: 'Big-O नोटेशन हमें बताता है कि इनपुट का आकार (n) लाखों में पहुँचने पर कोड कितना समय और मेमोरी लेगा।'
    },
    {
      question: `यदि ${topic} के निष्पादन के दौरान कोई अनपेक्षित एरर (Exception) आ जाए तो क्या करना चाहिए?`,
      options: [
        'एरर को नज़रअंदाज़ कर देना',
        'Try-Catch और लॉगिंग के साथ ग्रेसफुली हैंडल करना ताकि बाकी सिस्टम क्रैश न हो',
        'कंप्यूटर को तुरंत रीस्टार्ट कर देना',
        'सारे लॉग्स डिलीट कर देना'
      ],
      answerIndex: 1,
      explanation: 'ग्रेसफुल डिग्रेडेशन (Graceful Degradation) सुनिश्चित करता है कि एक एरर के कारण पूरा एप्लिकेशन क्रैश न हो।'
    }
  ];
}
