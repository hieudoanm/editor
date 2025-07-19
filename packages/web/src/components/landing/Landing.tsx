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
      headline: 'The Ultimate In-Browser Editor for Structured Data & Utilities',
      tagline:
        'Edit, convert, generate, and redact all types of structured data — from CSV and JSON to UUIDs and QR codes. Everything runs privately in your browser.',
      action: 'Launch the Editor',
      href: '/editor/markup',
    },
    features: [
      {
        id: 'real-time-formatting',
        title: '⚡ Real-Time Formatting',
        description: 'Beautify JSON, YAML, and CSV instantly as you type.',
        href: '/editor/markup',
      },
      {
        id: 'one-click-conversion',
        title: '🔄 Format Conversion',
        description: 'Convert between CSV, JSON, and YAML locally with a single click.',
        href: '/data/csv',
      },
      {
        id: 'smart-validation',
        title: '🧠 Validation & Auto-Correction',
        description: 'Fix common syntax issues and validate structured data formats.',
        href: '/editor/manifest',
      },
      {
        id: 'pdf-redaction',
        title: '🛡️ PDF Redaction',
        description: 'Redact text in PDFs visually or permanently — safely and offline.',
        href: '/editor/redact',
      },
      {
        id: 'schema-aware-editing',
        title: '📘 Schema-Aware Editing',
        description: 'Edit config files and manifests with tailored schema support.',
        href: '/editor/manifest',
      },
      {
        id: 'string-utilities',
        title: '🔠 String Tools',
        description: 'Clean, transform, and analyze text or encoded data.',
        href: '/converter/strings',
      },
      {
        id: 'color-tools',
        title: '🎨 Color Converter',
        description: 'Work with HEX, RGB, HSL, and generate color palettes.',
        href: '/converter/colors',
      },
      {
        id: 'code-helpers',
        title: '💻 Code Converter',
        description: 'Convert code snippets, encode content, or sanitize safely.',
        href: '/converter/code',
      },
      {
        id: 'uuid-generator',
        title: '🆔 UUID Generator',
        description: 'Generate UUID v4 identifiers securely with no server.',
        href: '/generator/uuid',
      },
      {
        id: 'qrcode-creator',
        title: '📷 QR Code Generator',
        description: 'Create QR codes from URLs, text, or contact info.',
        href: '/generator/qrcode',
      },
      {
        id: 'timezones-clock',
        title: '🌍 Timezone Viewer',
        description: 'View and compare global timezones — perfect for remote teams.',
        href: '/clock/timezones',
      },
      {
        id: 'pomodoro-timer',
        title: '⏳ Pomodoro Timer',
        description: 'Focus better with built-in Pomodoro cycles and task reminders.',
        href: '/clock/pomodoro',
      },
      {
        id: 'base-calculator',
        title: '🧮 Base Calculator',
        description: 'Convert between decimal, binary, octal, and hex effortlessly.',
        href: '/calc/base',
      },
      {
        id: 'crypto-calculator',
        title: '🪙 Crypto Calculator',
        description: 'Convert between crypto assets and fiat currencies in real time.',
        href: '/calc/crypto',
      },
      {
        id: 'forex-calculator',
        title: '💱 Forex Calculator',
        description: 'Accurate foreign exchange rate conversions in your browser.',
        href: '/calc/forex',
      },
      {
        id: 'length-converter',
        title: '📏 Length Converter',
        description: 'Switch between metric and imperial length units on the fly.',
        href: '/calc/length',
      },
      {
        id: 'weight-converter',
        title: '⚖️ Weight Converter',
        description: 'Quickly convert between kilograms, pounds, grams, and more.',
        href: '/calc/weight',
      },
      {
        id: 'roman-numerals',
        title: '🏛️ Roman Numeral Converter',
        description: 'Convert between Roman and Arabic numerals instantly.',
        href: '/calc/roman',
      },
    ],
    callToAction: {
      title: 'All-in-One Tool for Developers, Writers & Data Wranglers',
      subtitle:
        'From simple conversions to advanced redaction, editing, and smart data transformations — get everything you need in one fast, privacy-first platform.',
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
        <Features features={content.landing.features} />
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
