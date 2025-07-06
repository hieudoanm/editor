import { FC } from 'react';

export const Features: FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto p-4 text-center md:p-8">
        <h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our Data Converter?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
          Convert, format, and edit <code>.csv</code>, <code>.json</code>, and <code>.yaml</code> files instantly and
          securely in your browser — no uploads, no setup.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">⚡ Real-Time Formatting</h4>
            <p className="mt-2 text-sm text-neutral-500">
              Clean and beautify your JSON or YAML as you type — no extra tools needed.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">🔄 Convert Between Formats</h4>
            <p className="mt-2 text-sm text-neutral-500">
              Easily switch between CSV, JSON, and YAML with a single click — all processed locally.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">🧩 Smart Editing Tools</h4>
            <p className="mt-2 text-sm text-neutral-500">
              Edit structured data with syntax highlighting, validation, and smart helpers for common file types.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
