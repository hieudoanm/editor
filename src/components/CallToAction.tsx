import { FC } from 'react';
import Link from 'next/link';

export const CallToAction: FC = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h3 className="text-2xl font-bold sm:text-3xl">Convert CSV, JSON, and YAML effortlessly</h3>
        <p className="mt-4 text-neutral-500">
          Seamlessly convert between <code>.csv</code>, <code>.json</code>, and <code>.yaml</code> formats directly in
          your browser — fast, private, and with zero setup.
        </p>
        <div className="mt-8">
          <Link href="/csv" className="inline-block rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-900">
            Start Converting
          </Link>
        </div>
      </div>
    </section>
  );
};
