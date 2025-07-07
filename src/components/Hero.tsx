import { APP_NAME } from '@converter/constants';
import Link from 'next/link';
import { FC } from 'react';
import { LinearText } from './Linear';

export const Hero: FC = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-4xl font-extrabold text-neutral-100 sm:text-5xl">
          <LinearText>{APP_NAME}</LinearText>
        </h2>
        <p className="mt-6 text-lg text-neutral-500">
          Instantly convert and edit <code>.csv</code>, <code>.json</code>, and <code>.yaml</code> files — all locally
          in your browser with no setup, no uploads.
        </p>
        <div className="mt-8">
          <Link href="/csv" className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3">
            Start Converting
          </Link>
        </div>
      </div>
    </section>
  );
};
