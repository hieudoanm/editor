import { FC } from 'react';

export const CallToAction: FC = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-2xl font-bold sm:text-3xl">Work with JSON effortlessly</h3>
        <p className="mt-4 text-neutral-500">
          Format, convert, and edit your <code>manifest.json</code> files directly in the browser — fast, clean, and
          secure. No setup required.
        </p>
      </div>
    </section>
  );
};
