import { CallToAction } from '@editor/components/landing/CallToAction';
import { Features } from '@editor/components/landing/Features';
import { Footer } from '@editor/components/landing/Footer';
import { Hero } from '@editor/components/landing/Hero';
import { Divider } from '@editor/components/shared/Divider';
import { Linear } from '@editor/components/shared/Linear';
import { Navbar } from '@editor/components/shared/Navbar';
import { FC } from 'react';

const content = {
  landing: {
    hero: {
      headline: 'The Ultimate In-Browser Editor & Utility Suite',
      tagline:
        'Edit, convert, redact, calculate, and generate — all in one blazing-fast, privacy-first web app. No signups. No uploads. No nonsense.',
      action: 'Launch the Editor',
      href: '/editor/markup',
    },
    features: {
      title: 'Powerful Tools for Developers & Creatives',
      subtitle:
        'From editing JSON to converting YAML, redacting PDFs, or generating QR codes — everything runs privately, locally, and instantly in your browser.',
      // List of features with descriptions and links
      // Each feature has an id, href, title, and description
      features: [
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
          id: 'braille-morse-converter',
          title: '💬 Braille & Morse Code Converter',
          description: 'Convert text to and from Braille or Morse code with accurate formatting and symbol support.',
          href: '/converter/code',
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
          description: 'Transform, decode, and clean text or encoded strings.',
          href: '/converter/strings',
        },
        {
          id: 'openapi2postmanv2',
          title: '🔁 OpenAPI to Postman V2',
          description:
            'Convert OpenAPI specifications to Postman Collection V2.1 format in-browser — no upload needed.',
          href: '/converter/openapi2postmanv2',
        },
        // Generator
        {
          id: 'uuid-generator',
          title: '🆔 UUID Generator',
          description: 'Generate secure UUIDs locally with zero tracking.',
          href: '/generator/uuid',
        },
        {
          id: 'qrcode-generator',
          title: '📷 QR Code Generator',
          description: 'Generate QR codes from text, links, or contact info.',
          href: '/generator/qrcode',
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
        // Calculator
        {
          id: 'base-calculator',
          title: '🧮 Base Calculator',
          description: 'Convert between binary, decimal, hex, and more.',
          href: '/calc/base',
        },
        {
          id: 'crypto-calculator',
          title: '🪙 Crypto Calculator',
          description: 'Calculate crypto-to-fiat values using real-time rates.',
          href: '/calc/crypto',
        },
        {
          id: 'forex-calculator',
          title: '💱 Forex Calculator',
          description: 'Convert between currencies using up-to-date forex rates.',
          href: '/calc/forex',
        },
        {
          id: 'length-calculator',
          title: '📏 Length Converter',
          description: 'Easily convert between metric and imperial length units.',
          href: '/calc/length',
        },
        {
          id: 'weight-calculator',
          title: '⚖️ Weight Converter',
          description: 'Switch between kilograms, grams, pounds, and more.',
          href: '/calc/weight',
        },
        {
          id: 'roman-converter',
          title: '🏛️ Roman Numeral Converter',
          description: 'Convert to and from Roman numerals instantly.',
          href: '/calc/roman',
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

        // Other
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
      title: 'Your All-in-One Productivity & Dev Toolkit',
      subtitle:
        'Whether editing JSON, converting YAML, redacting PDFs, or generating QR codes — everything runs privately, locally, and instantly in your browser.',
      action: 'Launch the Editor',
      href: '/editor/markup',
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
