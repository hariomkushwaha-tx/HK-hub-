import React, { useState, useMemo } from 'react';
import { ExternalLink, Search, Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface StudentOffer {
  id: string;
  name: string;
  category: 'cloud' | 'ides' | 'design' | 'productivity' | 'media';
  benefit: string;
  commercialValue: string;
  eligibility: string;
  link: string;
  highlightPoints: string[];
}

const OFFERS: StudentOffer[] = [
  {
    id: 'github-pack',
    name: 'GitHub Student Developer Pack',
    category: 'cloud',
    benefit: 'The ultimate engineering suite: GitHub Pro, $100 DigitalOcean credit, free .me/.tech domain names, JetBrains IDEs, Canva Pro, and 50+ developer tools completely free.',
    commercialValue: '$2,000+ per year',
    eligibility: 'College/university student email (.edu or institutional domain) or student ID card upload.',
    link: 'https://education.github.com/pack',
    highlightPoints: [
      'Free GitHub Pro with unlimited GitHub Codespaces hours',
      'Free 1-year domain name on Namecheap & Name.com',
      '$100 DigitalOcean cloud hosting credit (no card required)'
    ]
  },
  {
    id: 'jetbrains',
    name: 'JetBrains All Products Pack for Students',
    category: 'ides',
    benefit: 'Free individual subscription to all JetBrains commercial IDEs: IntelliJ IDEA Ultimate, PyCharm Professional, WebStorm, CLion, GoLand, Rider, and DataGrip.',
    commercialValue: '$649 / year',
    eligibility: 'Official university email or ISIC (International Student Identity Card).',
    link: 'https://www.jetbrains.com/community/education/',
    highlightPoints: [
      'Full commercial edition with all database and framework plugins',
      'Renewable annually as long as you remain a full-time student'
    ]
  },
  {
    id: 'azure-student',
    name: 'Microsoft Azure for Students',
    category: 'cloud',
    benefit: '$100 in Azure cloud credits plus free access to over 55+ always-free Azure cloud services (App Service, Cosmos DB, Linux VMs).',
    commercialValue: '$100 credit + free tier',
    eligibility: 'School/university email address (NO credit card needed).',
    link: 'https://azure.microsoft.com/en-us/free/students/',
    highlightPoints: [
      'Zero credit card required during sign-up (Safe from accidental bills)',
      'Free Linux & Windows virtual machine hours for academic labs'
    ]
  },
  {
    id: 'aws-educate',
    name: 'AWS Educate & Cloud Career Training',
    category: 'cloud',
    benefit: 'Hands-on cloud computing sandbox environments without an AWS credit card account, plus cloud certification badges.',
    commercialValue: 'Free access + labs',
    eligibility: 'Any student aged 13+ with an email address.',
    link: 'https://aws.amazon.com/education/awseducate/',
    highlightPoints: [
      'Access to pre-provisioned AWS management console sandbox',
      'Direct pipeline to AWS certified cloud practitioner preparation'
    ]
  },
  {
    id: 'notion-edu',
    name: 'Notion for Education (Plus Plan)',
    category: 'productivity',
    benefit: 'Unlimited page storage, unlimited block uploads, 5MB+ file uploads, and 30-day page version history for coursework notes and thesis drafts.',
    commercialValue: '$120 / year',
    eligibility: 'Sign up or change email to college/university email address.',
    link: 'https://www.notion.so/product/notion-for-education',
    highlightPoints: [
      'Unlimited file uploads for research papers, lecture PDFs, and slides',
      'Invite up to 100 guest collaborators for group semester assignments'
    ]
  },
  {
    id: 'figma-edu',
    name: 'Figma for Education (Professional Plan)',
    category: 'design',
    benefit: 'Full Figma and FigJam Professional tier access with unlimited Figma files, shared team libraries, and dev mode prototyping.',
    commercialValue: '$144 / year',
    eligibility: 'Proof of current academic enrollment (student ID or syllabus doc).',
    link: 'https://www.figma.com/education/',
    highlightPoints: [
      'Unlimited projects and version history',
      'Dev Mode inspection for React/CSS code generation'
    ]
  },
  {
    id: 'canva-edu',
    name: 'Canva Pro for Students',
    category: 'design',
    benefit: 'Access to premium templates, background remover, brand kits, and presentation tools for college seminars and project pitch decks.',
    commercialValue: '$120 / year',
    eligibility: 'Included directly via GitHub Student Developer Pack or educator invite.',
    link: 'https://www.canva.com/education/',
    highlightPoints: [
      '100M+ premium stock photos, icons, and illustrations',
      'One-click slide deck animations for college viva presentations'
    ]
  },
  {
    id: 'spotify-student',
    name: 'Spotify & Apple Music Student Discount',
    category: 'media',
    benefit: '50% off monthly premium music streaming subscriptions with ad-free listening and offline download capabilities.',
    commercialValue: '50% discount recurring',
    eligibility: 'SheerID instant student enrollment verification.',
    link: 'https://www.spotify.com/student/',
    highlightPoints: [
      'Ad-free high-bitrate study playlists and podcast streaming',
      'Includes access to student bundle partner discounts'
    ]
  }
];

export const StudentDiscountsDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cloud' | 'ides' | 'design' | 'productivity' | 'media'>('all');
  const [search, setSearch] = useState('');

  const filteredOffers = useMemo(() => {
    return OFFERS.filter(offer => {
      const matchesCat = selectedCategory === 'all' || offer.category === selectedCategory;
      const q = search.toLowerCase().trim();
      if (!q) return matchesCat;
      return matchesCat && (
        offer.name.toLowerCase().includes(q) ||
        offer.benefit.toLowerCase().includes(q) ||
        offer.highlightPoints.some(p => p.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, search]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search GitHub pack, JetBrains, Azure, Figma, or Spotify..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none focus:ring-1 focus:ring-blue-500 shadow-xs"
          />
        </div>

        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: 'All Benefits' },
            { id: 'cloud', label: 'Cloud & Hosting' },
            { id: 'ides', label: 'IDEs & Tools' },
            { id: 'design', label: 'UI / Design' },
            { id: 'productivity', label: 'Productivity' },
            { id: 'media', label: 'Music & Media' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === tab.id
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Offers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOffers.map(offer => (
          <div
            key={offer.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  {offer.commercialValue}
                </span>
                <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 dark:text-slate-500">
                  {offer.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {offer.name}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {offer.benefit}
              </p>

              <div className="space-y-1.5 pt-1">
                {offer.highlightPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80">
                <strong className="text-slate-700 dark:text-slate-300">Eligibility:</strong> {offer.eligibility}
              </div>
            </div>

            <div className="pt-3">
              <a
                href={offer.link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Claim Official Student Benefit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
