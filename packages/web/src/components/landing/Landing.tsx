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
      headline: 'Convert Everything with Ease',
      tagline:
        'Instantly convert and edit .csv, .json, and .yaml files — all locally in your browser with no setup, no uploads.',
      action: 'Start Converting',
    },
    features: [
      {
        id: 'real-time-formatting',
        title: '⚡ Real-Time Formatting',
        description: 'Clean and beautify your JSON or YAML as you type — no extra tools needed.',
      },
      {
        id: 'local-processing',
        title: '🔄 Convert Between Formats',
        description: 'Easily switch between CSV, JSON, and YAML with a single click — all processed locally.',
      },
      {
        id: 'smart-editing-tools',
        title: '🧩 Smart Editing Tools',
        description:
          'Edit structured data with syntax highlighting, validation, and smart helpers for common file types.',
      },
    ],
    callToAction: {
      title: 'Convert CSV, JSON, and YAML effortlessly',
      subtitle:
        'Seamlessly convert between .csv, .json, and .yaml formats directly in your browser — fast, private, and with zero setup.',
      action: 'Start Converting',
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
        />
        <Divider />
        <Features features={content.landing.features} />
        <Divider />
        <CallToAction
          title={content.landing.callToAction.title}
          subtitle={content.landing.callToAction.subtitle}
          action={content.landing.callToAction.action}
        />
        <Divider />
        <Footer />
      </div>
    </div>
  );
};
