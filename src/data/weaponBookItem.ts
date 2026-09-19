import { EBookItem } from '../types';
import { WEAPON_BOOK_INFO, WEAPON_PARTS } from './weaponMasterData';
import { WEAPON_CHAPTERS_CATALOG } from './weaponChaptersCatalog';

export const WEAPON_EBOOK_ITEM: EBookItem = {
  id: WEAPON_BOOK_INFO.id,
  title: WEAPON_BOOK_INFO.title,
  subtitle: WEAPON_BOOK_INFO.subtitle,
  slug: WEAPON_BOOK_INFO.slug,
  author: WEAPON_BOOK_INFO.author,
  authorId: WEAPON_BOOK_INFO.authorId,
  authorBio: WEAPON_BOOK_INFO.authorBio,
  publisher: WEAPON_BOOK_INFO.publisher,
  category: WEAPON_BOOK_INFO.category,
  subcategory: WEAPON_BOOK_INFO.subcategory,
  genre: WEAPON_BOOK_INFO.genre,
  bookType: WEAPON_BOOK_INFO.bookType,
  description: WEAPON_BOOK_INFO.description,
  shortDescription: WEAPON_BOOK_INFO.shortDescription,
  pages: WEAPON_BOOK_INFO.pages,
  format: WEAPON_BOOK_INFO.format,
  difficulty: WEAPON_BOOK_INFO.difficulty,
  rating: WEAPON_BOOK_INFO.rating,
  reviewCount: WEAPON_BOOK_INFO.reviewCount,
  badge: WEAPON_BOOK_INFO.badge,
  coverGradient: WEAPON_BOOK_INFO.coverGradient,
  downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks&book=hk-weapon',
  readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks&book=hk-weapon',
  tags: WEAPON_BOOK_INFO.tags,
  topics: WEAPON_BOOK_INFO.topics,
  language: WEAPON_BOOK_INFO.language,
  featured: true,
  trending: true,
  studentPick: true,
  yearPublished: WEAPON_BOOK_INFO.yearPublished,
  updatedDate: WEAPON_BOOK_INFO.updatedDate,
  isbn: WEAPON_BOOK_INFO.isbn,
  price: WEAPON_BOOK_INFO.price,
  isFree: WEAPON_BOOK_INFO.isFree,
  rightsHolder: WEAPON_BOOK_INFO.rightsHolder,
  licenseType: WEAPON_BOOK_INFO.licenseType,
  permissionStatus: 'Original Publication',
  whatYoullLearn: [
    'रक्षा प्रणालियों का वैज्ञानिक एवं बहु-आयामी सिस्टम-ऑफ-सिस्टम्स आर्किटेक्चर',
    'मिसाइल एयरोडायनामिक्स, प्रोपल्शन (सॉलिड, रैमजेट) और जीएनसी (GNC) नेविगेशन गाइडेंस',
    'लड़ाकू विमानों की उड़ान गतिकी, क्वाड-रिडंडेंट फ्लाई-बाय-वायर और LCA तेजस की पूर्ण विकास यात्रा',
    'AESA रडार की कार्यप्रणाली, GaN टी/आर मॉड्यूल्स, डॉपलर सिग्नल प्रोसेसिंग और सेंसर फ्यूजन',
    'इलेक्ट्रॉनिक वारफेयर (EW), फ्रीक्वेंसी हॉपिंग सुरक्षित सैन्य संचार और स्पेक्ट्रम सुरक्षा',
    'स्वायत्त ड्रोन (UAVs), जीपीएस-डिनाइड नेविगेशन, एज-AI कंप्यूटर विजन और स्वार्म ऑटोनॉमी',
    'हाइपरसोनिक स्क्रैमजेट विज्ञान, डीआरडीओ HSTDV और डायरेक्टेड एनर्जी लेजर (DEW) भौतिकी',
    'सिस्टम्स इंजीनियरिंग लाइफसाइकिल: 3D CAD/CFD सिमुलेशन, प्रोटोटाइपिंग, MIL-STD लैब टेस्टिंग से फील्ड ट्रायल्स',
    'भारत का रक्षा विनिर्माण इकोसिस्टम: डीआरडीओ लैब्स, डीपीएसयू (HAL, BEL), मेक-इन-इंडिया और iDEX स्टार्टअप्स',
    'भविष्य की रक्षा प्रौद्योगिकियां: कॉग्निटिव AI, 6th जेन एयरक्राफ्ट, स्पेस डिफेंस और 2047 विजन'
  ],
  tableOfContents: [
    'Cover, Copyright, Disclaimer & Author Preface',
    ...WEAPON_PARTS.map(p => `${p.title} (${p.chaptersRange})`),
    ...WEAPON_CHAPTERS_CATALOG.map(c => `Chapter ${c.chapterNumber}: ${c.title} — ${c.subtitle}`),
    'Comprehensive Defence Engineering Glossary',
    'Further Reading & Scholarly Research References',
    'About HK VELORA Defence Research Wing'
  ],
  chaptersPreview: WEAPON_CHAPTERS_CATALOG.slice(0, 10).map(c => ({
    title: `Chapter ${c.chapterNumber}: ${c.title}`,
    summary: c.subtitle,
    keyPoints: c.keyTopics,
    realWorldUse: `Applied in advanced defence aerospace, electronics and strategic R&D across national defense programs.`
  })),
  studyNotes: [
    'Note 1: Safety & Academic Scope — This book strictly focuses on fundamental scientific and engineering principles. It contains zero weaponization recipes or sensitive tactical targeting codes.',
    'Note 2: Multi-disciplinary Depth — Spans aerodynamics, thermodynamics, solid-state microwave physics, and digital signal processors.',
    'Note 3: National Pride & Self-Reliance — Highlights India’s self-reliant engineering milestones from IGMDP to Tejas and Pinaka.'
  ]
};
