import { TechCategory, TechArticle } from '../types';

export const COMMON_TROUBLESHOOTING_GUIDES = [
  {
    id: 'battery-drain',
    problem: 'Smartphone Battery Draining Rapidly or Overheating',
    category: 'Smartphones',
    steps: [
      'Navigate to Settings > Battery > Battery Usage to identify any rogue background processes.',
      'Turn off 5G Auto and switch to 4G/LTE if living in an area with fluctuating 5G coverage.',
      'Disable Bluetooth and Wi-Fi background location scanning in Settings > Location Services.',
      'Check screen brightness settings; set Auto-Brightness or Dark Theme for OLED displays.'
    ]
  },
  {
    id: 'pc-100-disk',
    problem: 'Computer Sluggish & 100% Disk Usage in Task Manager',
    category: 'Computers',
    steps: [
      'Open Task Manager (Ctrl + Shift + Esc) and click on the Startup tab to disable heavy third-party startup applications.',
      'Open Command Prompt as Administrator and run: "chkdsk C: /f /r" followed by "sfc /scannow" to fix corrupted file system indices.',
      'Disable Windows Search indexing temporarily or rebuild the search index.',
      'Ensure your operating system is installed on an NVMe or SATA SSD rather than a spinning mechanical hard drive.'
    ]
  },
  {
    id: 'wifi-connected-no-internet',
    problem: 'Wi-Fi Connected But Showing "No Internet Access"',
    category: 'Networking',
    steps: [
      'Restart both your Wi-Fi router and your client device (unplug router power for 30 seconds).',
      'Flush your DNS cache: Open Command Prompt or Terminal and type: "ipconfig /flushdns" (Windows) or "sudo dscacheutil -flushcache" (macOS).',
      'Change your DNS server to Cloudflare (1.1.1.1 and 1.0.0.1) or Google (8.8.8.8 and 8.8.4.4).',
      'Forget the Wi-Fi network in device settings and reconnect with the password.'
    ]
  },
  {
    id: 'app-crashing',
    problem: 'Smartphone or Desktop App Crashing Immediately Upon Launch',
    category: 'Apps & Software',
    steps: [
      'Clear the app cache and temporary storage files (Settings > Apps > Storage > Clear Cache).',
      'Check for updates in the app store or package manager to resolve known regression bugs.',
      'Verify required runtime dependencies (e.g., WebView updates on Android, Microsoft Visual C++ Redistributable on Windows).',
      'If corruption persists, uninstall, reboot device, and reinstall cleanly.'
    ]
  },
  {
    id: 'storage-full',
    problem: 'Low Storage Warnings Despite Deleting Media',
    category: 'Operating Systems',
    steps: [
      'Empty the device Trash / Recently Deleted albums in Photos and File Manager.',
      'Purge messaging app media caches (Telegram, WhatsApp, Discord store gigabytes of cached videos and voice notes).',
      'On Windows, run "cleanmgr" (Disk Cleanup) and click "Clean up system files" to purge obsolete Windows Update backups.',
      'Use open-source visualization utilities like WinDirStat or Baobab (Disk Usage Analyzer) to locate oversized forgotten files.'
    ]
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'smartphones',
    title: 'Smartphones & Mobile Tech',
    icon: 'Smartphone',
    description: 'Master Android and iOS: settings, battery preservation, privacy permissions, and diagnostics.',
    articles: [
      {
        id: 'android-speedup',
        title: 'Android Optimization: Hidden Developer Settings & Battery Life',
        summary: 'Unlock developer options, set animation scales to 0.5x, disable background tracking, and protect battery chemistry.',
        readTime: '6 min',
        content: `Android offers tremendous flexibility when configured properly. Here are the highest-impact system tweaks:

1. Enable Developer Options:
Open Settings > About Phone, find "Build Number", and tap it 7 times consecutively. Return to Settings > System > Developer Options.

2. Halve Animation Latency:
Scroll to the Drawing section in Developer Options. Change:
• Window animation scale: 0.5x
• Transition animation scale: 0.5x
• Animator duration scale: 0.5x
This makes app opening and multitasking feel instantly twice as responsive.

3. Restrict Rogue Background Apps:
Go to Settings > Apps > Special App Access > Battery Optimization. Change media and social media apps that send unsolicited notifications to "Restricted" or "Optimized".

4. Maintain Battery Chemistry:
Lithium-ion smartphone batteries degrade fastest when held at 100% state-of-charge under high heat. Enable "Protect Battery" (85% limit on Samsung) or "Optimized Charging" (Pixel/Motorola) to double battery lifespan.`
      },
      {
        id: 'ios-power-user',
        title: 'iPhone & iOS Power Guide: Privacy, Shortcuts & Storage',
        summary: 'Take full control of Apple iOS with Shortcuts automation, Focus profiles, and iCloud storage management.',
        readTime: '5 min',
        content: `Apple iOS includes numerous hidden tools that can streamline student and developer workflows:

1. Shortcuts & Back Tap:
Go to Settings > Accessibility > Touch > Back Tap. Set Double Tap to take a screenshot or toggle Flashlight, and Triple Tap to trigger an automated shortcut.

2. Audit App Tracking:
Open Settings > Privacy & Security > Tracking. Turn off "Allow Apps to Request to Track" to automatically deny cross-app tracking across all installed apps.

3. Prevent iCloud 5GB Free Tier Lockout:
iCloud often exhausts the free 5GB limit due to automatic device backups containing unnecessary apps. In Settings > [Your Name] > iCloud > Manage Account Storage > Backups, disable backups for streaming and social apps, which can be re-downloaded at any time.`
      }
    ]
  },
  {
    id: 'computers',
    title: 'Computers & Operating Systems',
    icon: 'Laptop',
    description: 'Practical guides for Windows, macOS, Linux, hardware upgrades, SSD maintenance, and PC speed.',
    articles: [
      {
        id: 'windows-speedup',
        title: 'Windows 11 Speedup & Clean Installation Blueprint',
        summary: 'Eliminate bloatware, disable telemetry, manage virtual memory, and configure Storage Sense.',
        readTime: '7 min',
        content: `Windows 11 comes with preloaded services and background tasks that degrade performance on older or mid-range machines.

1. Clean Startup Programs:
Press Ctrl + Shift + Esc to open Task Manager. Switch to the "Startup apps" tab. Right-click and Disable anything you do not need launching on boot (Spotify, Steam, Cortana, Discord, etc.).

2. Package Management with Winget:
Open Windows Terminal and run:
winget upgrade --all
This securely updates all installed software (VLC, Chrome, VS Code, Git) in a single command line pass.

3. Storage Sense Automation:
Settings > System > Storage > Storage Sense. Toggle it ON. Set it to automatically purge temporary user files and Recycle Bin items older than 30 days.`
      },
      {
        id: 'mac-productivity',
        title: 'macOS Terminal & Power-User Optimization',
        summary: 'Essential keyboard shortcuts, Homebrew package manager, and Activity Monitor diagnostics.',
        readTime: '6 min',
        content: `macOS is built on a Unix foundation, making it exceptional for development:

1. Install Homebrew Package Manager:
Open Terminal and run the official Homebrew script. It allows installing tools instantly:
brew install git node python3 visual-studio-code

2. Master Window Management:
Learn Spotlight shortcut (Cmd + Space) and use open-source window snapping tools like Rectangle to arrange windows side-by-side cleanly.

3. Activity Monitor Diagnostic:
When your Mac runs warm, launch Activity Monitor and sort by "% CPU" or "Energy Impact" to catch frozen background helper processes.`
      }
    ]
  },
  {
    id: 'networking',
    title: 'Internet & Networking',
    icon: 'Wifi',
    description: 'How the web works: DNS, IP protocols, Wi-Fi 6/7 standards, VPNs, and router speed optimization.',
    articles: [
      {
        id: 'dns-ip-explained',
        title: 'How the Internet Actually Works: DNS, IP & HTTP/HTTPS',
        summary: 'Step-by-step walkthrough of what happens from the millisecond you type a URL to when pixels render.',
        readTime: '8 min',
        content: `When you enter a URL like "https://hkhub.app" into your browser:

1. DNS Resolution:
Your browser checks local DNS cache. If missed, it queries your recursive DNS resolver (e.g. 1.1.1.1). The DNS hierarchy maps the human-readable domain to an IPv4 (like 142.250.190.46) or IPv6 address.

2. TCP Handshake & TLS Encryption:
The browser initiates a 3-way TCP handshake (SYN, SYN-ACK, ACK) with the remote server on port 443, followed by a TLS handshake where certificates are verified and symmetric encryption keys are negotiated.

3. HTTP Request & Response:
The browser sends an HTTP GET request. The server processes headers, queries the database, and returns HTML, CSS, JavaScript, and assets.

4. Browser Rendering:
The browser engine parses HTML to build the DOM tree, parses CSS to build the CSSOM, combines them into a Render Tree, and paints pixels onto your display.`
      },
      {
        id: 'wifi-optimization',
        title: 'Wi-Fi 6, 6E & 7 Explained: Eliminating Dead Zones',
        summary: 'Frequency bands (2.4GHz vs 5GHz vs 6GHz), channel congestion, and optimal router placement.',
        readTime: '5 min',
        content: `Understanding Wi-Fi frequency bands solves 90% of home and college Wi-Fi issues:

1. 2.4 GHz vs 5 GHz:
• 2.4 GHz: Long range, penetrates brick walls well, but low bandwidth and congested by microwaves and Bluetooth.
• 5 GHz: Short range, sensitive to walls, but 3x-5x faster bandwidth and less interference.

2. Wi-Fi 6E & Wi-Fi 7 (6 GHz band):
Adds wide, uncongested channels for ultra-low latency and multi-gigabit throughput.

3. Channel Selection:
Use free Wi-Fi analyzer apps to check neighbor channel overlap. On 2.4 GHz, strictly use non-overlapping channels 1, 6, or 11.`
      }
    ]
  },
  {
    id: 'apps-software',
    title: 'Apps & Open-Source Software',
    icon: 'Package',
    description: 'Best free and open-source alternatives (FOSS) to expensive commercial software for students.',
    articles: [
      {
        id: 'foss-alternatives',
        title: 'Top Free Open-Source Alternatives to Paid Software',
        summary: 'Replace expensive subscriptions with trusted, free open-source tools: Office, Photoshop, Premiere, and CAD.',
        readTime: '6 min',
        content: `You do not need pirated or paid software to create professional work:

• Microsoft 365 → LibreOffice or Google Docs: Full office suite with docx, xlsx, pptx compatibility.
• Adobe Photoshop → GIMP or Photopea: Advanced raster photo editing with layer masks, curves, and PSD support.
• Adobe Premiere → DaVinci Resolve or Kdenlive: Industry-standard video color grading and multi-track editing.
• Adobe Illustrator → Inkscape: Vector graphics creation with SVG export.
• Blender: 3D modeling, animation, and game asset generation completely free.`
      }
    ]
  },
  {
    id: 'web-technology',
    title: 'Web Technologies & Architecture',
    icon: 'Globe',
    description: 'Understand client-server architecture, modern web frameworks, cloud hosting, and web performance.',
    articles: [
      {
        id: 'frontend-backend-guide',
        title: 'Client vs Server: The Modern Web Architecture Guide',
        summary: 'Demystifying single-page apps (SPAs), server-side rendering (SSR), REST APIs, and databases.',
        readTime: '7 min',
        content: `Modern software consists of three interconnected layers:

1. Client (Frontend):
The user interface rendered in the browser. Technologies include HTML5, Tailwind CSS, JavaScript, and frameworks like React.

2. Server (Backend):
Runs in secure cloud containers (Node.js, Express, Python). Handles authentication, validates user inputs, and guards secret API keys.

3. Database:
Persists data. Structured SQL databases (PostgreSQL) use relational schemas, while NoSQL databases (Firestore) store flexible JSON documents.`
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Privacy',
    icon: 'ShieldAlert',
    description: 'Defensive, educational digital hygiene: 2FA, password managers, phishing recognition, and device hardening.',
    articles: [
      {
        id: 'passwords-and-2fa',
        title: 'Modern Password Defense & Multi-Factor Authentication',
        summary: 'Why passphrases beat complex short passwords, password managers, and hardware security keys.',
        readTime: '6 min',
        content: `Basic security precautions that eliminate 99% of unauthorized account takeovers:

1. Use a Dedicated Password Manager:
Never remember or reuse passwords. Use Bitwarden or 1Password to generate 16+ character random passwords for every single website.

2. Ditch SMS 2FA for TOTP or Passkeys:
SMS verification codes can be intercepted via SIM swapping. Use TOTP authenticator apps (Aegis, Ente Auth, Google Authenticator) or FIDO2 WebAuthn Passkeys.

3. Audit Data Breaches:
Check HaveIBeenPwned.com to see if your university or personal email was exposed in historic database leaks.`
      },
      {
        id: 'phishing-prevention',
        title: 'How to Spot Modern Phishing & Social Engineering Scams',
        summary: 'Analyze domain names, look out for urgency tactics, and identify counterfeit login portals.',
        readTime: '5 min',
        content: `Phishing attacks trick users into handing over credentials voluntarily:

1. Inspect the Domain Name:
Attackers use lookalike domains (e.g., paypa1.com, google-verify-support.net). Always check the exact root domain in your browser address bar.

2. Urgency & Fear Tactics:
Legitimate services never threaten "Account suspension within 2 hours unless you click here".

3. Verify Out-of-Band:
If you receive an urgent message from a friend or professor asking for gift cards or code verifications, contact them via another known phone number.`
      }
    ]
  }
];
