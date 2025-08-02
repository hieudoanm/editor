import { CallToAction } from '@editor/components/landing/CallToAction';
import { Features } from '@editor/components/landing/Features';
import { Footer } from '@editor/components/landing/Footer';
import { Hero } from '@editor/components/landing/Hero';
import { Logos } from '@editor/components/landing/Logos';
import { Divider } from '@editor/components/shared/Divider';
import { Linear } from '@editor/components/shared/Linear';
import { Navbar } from '@editor/components/shared/Navbar';
import { FC } from 'react';

const content = {
  landing: {
    hero: {
      headline: 'The Ultimate In-Browser Toolkit for Devs & Makers',
      tagline:
        'Edit JSON, convert YAML, redact PDFs, analyze GitHub, generate UUIDs, and more — all locally, instantly, and without signups.',
      action: 'Go to Chat',
      href: '/other/chat',
    },
    features: {
      title: 'Blazing-Fast Tools — All in Your Browser',
      subtitle:
        'From chess utilities to text converters, calculators, redaction tools, and GitHub preview generators — every feature works offline, with privacy built-in. No accounts. No uploads.',
      // List of features with descriptions and links
      // Each feature has an id, href, title, and description
      features: [
        // Chess
        {
          id: 'chess-board',
          title: '🔀 Chessboard',
          description: 'Explore randomized Chess960 starting positions and understand their dynamics.',
          href: '/chess/board',
        },
        {
          id: 'chess-elo',
          title: '📈 ELO Calculator',
          description: 'Estimate your new rating after a game or tournament using customizable ELO formulas.',
          href: '/chess/elo',
        },
        // Clock
        {
          id: 'pomodoro-timer',
          title: '⏳ Pomodoro Timer',
          description: 'Boost focus and productivity with guided Pomodoro sessions.',
          href: '/clock/pomodoro',
        },
        {
          id: 'timezone-viewer',
          title: '🌍 Timezone Viewer',
          description: 'Compare global timezones at a glance.',
          href: '/clock/timezones',
        },
        // Converter
        {
          id: 'csv-converter',
          title: '📂 CSV Tools',
          description: 'Edit, preview, and convert CSV files with ease.',
          href: '/converter/csv',
        },
        {
          id: 'json-converter',
          title: '🧾 JSON Tools',
          description: 'Clean, format, and validate JSON in-browser.',
          href: '/converter/json',
        },
        {
          id: 'yaml-converter',
          title: '📄 YAML Tools',
          description: 'Edit and convert YAML safely with real-time linting.',
          href: '/converter/yaml',
        },
        {
          id: 'color-tools',
          title: '🎨 Color Converter',
          description: 'Convert HEX, RGB, and HSL formats — visually.',
          href: '/converter/colors',
        },
        {
          id: 'string-tools',
          title: '🔤 String Utilities',
          description: 'Transform, decode, and clean text or encoded strings to braille/morse.',
          href: '/converter/strings',
        },
        // Dev
        {
          id: 'dev-openapi-postmanv2',
          title: '🔁 OpenAPI to Postman V2',
          description:
            'Convert OpenAPI specifications to Postman Collection V2.1 format in-browser — no upload needed.',
          href: '/dev/openapi/postmanv2',
        },
        {
          id: 'dev-reverse-proxy',
          title: '🔀 Reverse Proxy',
          description: 'Securely route and manage external API calls through a single, unified gateway.',
          href: '/dev/reverse/proxy',
        },
        {
          id: 'dev-uuid',
          title: '🆔 UUID Generator',
          description: 'Generate secure UUIDs locally with zero tracking.',
          href: '/dev/uuid',
        },
        // Editor
        {
          id: 'markdown-editor',
          title: '📝 Markdown Editor',
          description: 'Write and preview Markdown with live formatting, syntax highlighting, and export support.',
          href: '/editor/markup',
        },
        {
          id: 'manifest-editor',
          title: '📘 Manifest Editor for PWA & Extensions',
          description:
            'Edit and validate manifest.json files for Progressive Web Apps and browser extensions with intelligent suggestions and structure-aware editing.',
          href: '/editor/manifest',
        },
        {
          id: 'pdf-redaction',
          title: '🛡️ PDF Redaction',
          description: 'Redact sensitive content visually or permanently — all offline.',
          href: '/editor/redact',
        },
        // GitHub
        {
          id: 'github-languages',
          title: '📊 GitHub Language Stats',
          description: 'Visualize language distribution in any public GitHub repository.',
          href: '/github/languages',
        },
        {
          id: 'github-preview',
          title: '🖼️ GitHub Social Preview Generator',
          description: 'Generate sleek Open Graph preview images for your GitHub repositories.',
          href: '/github/preview',
        },
        // Images
        {
          id: 'image-filter',
          title: '🎨 Image Filter',
          description: 'Apply artistic filters and effects to enhance or stylize your photos.',
          href: '/images/filter',
        },
        {
          id: 'image-ocr',
          title: '🔎 Image OCR',
          description: 'Extract and copy text from images using built-in OCR technology.',
          href: '/images/ocr',
        },
        {
          id: 'image-qrcode',
          title: '📷 QR Code Generator',
          description: 'Generate QR codes from text, links, or contact info.',
          href: '/images/qrcode',
        },
        // Other
        {
          id: 'calculator',
          title: '📏 Universal Calculator',
          description:
            'All-in-one converter for bases, currencies, and measurements — including crypto, forex, length, weight, angle, temperature, data (bits/bytes), and time units.',
          href: '/other/calculator',
        },
        {
          id: 'chat-tool',
          title: '💬 AI Chat',
          description:
            'Use a built-in AI chat assistant for productivity, questions, or coding help — locally in your browser.',
          href: '/other/chat',
        },
        {
          id: 'doi-tool',
          title: '🔗 DOI Reference Lookup',
          description: 'Retrieve and format scholarly references from DOI links in APA style.',
          href: '/other/doi',
        },
        {
          id: 'periodic-table',
          title: '🧪 Periodic Table Explorer',
          description: 'Explore detailed info about all chemical elements.',
          href: '/other/periodic-table',
        },
        {
          id: 'status-dashboard',
          title: '📊 Status Monitor',
          description: 'Check the current system status and service uptime.',
          href: '/other/status',
        },
      ],
    },
    callToAction: {
      title: 'All-in-One Productivity & Dev Suite — No Installs Required',
      subtitle:
        'Whether you’re editing code, converting formats, redacting PDFs, exploring chess theory, or generating visuals — do it all, instantly, right in your browser.',
      action: 'Go to Chat',
      href: '/other/chat',
    },
  },
};

export const Landing: FC = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-900 text-neutral-100">
      <Linear.Background />
      <div className="relative z-10">
        <Navbar />
        <Divider />
        <Hero
          headline={content.landing.hero.headline}
          tagline={content.landing.hero.tagline}
          action={content.landing.hero.action}
          href={content.landing.hero.href}
        />
        <Divider />
        <Features
          title={`${content.landing.features.title} (${content.landing.features.features.length})`}
          subtitle={content.landing.features.subtitle}
          features={content.landing.features.features}
        />
        <Divider />
        <Logos />
        <Divider />
        <CallToAction
          title={content.landing.callToAction.title}
          subtitle={content.landing.callToAction.subtitle}
          action={content.landing.callToAction.action}
          href={content.landing.callToAction.href}
        />
        <Divider />
        <Footer />
      </div>
    </div>
  );
};
