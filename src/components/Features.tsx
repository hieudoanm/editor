import { FC } from 'react';

export const Features: FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto p-4 text-center md:p-8">
        <h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our JSON Toolkit?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
          Format, convert, and edit your JSON — including <code>manifest.json</code> — instantly and securely in your
          browser.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">⚡ Real-Time Formatting</h4>
            <p className="mt-2 text-sm text-neutral-500">
              Clean and beautify your JSON as you type — no extra tools needed.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">🔄 Format & Convert</h4>
            <p className="mt-2 text-sm text-neutral-500">
              Convert between JSON and other formats like YAML or minified versions with one click.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
            <h4 className="text-lg font-semibold">📝 Manifest Editor</h4>
            <p className="mt-2 text-sm text-neutral-500">
              Easily edit <code>manifest.json</code> files with structure-aware helpers and validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
