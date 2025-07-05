import { APP_NAME } from '@json/constants';
import Link from 'next/link';
import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <nav className="border-b border-neutral-800 shadow-sm">
      <div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
        <div className="flex items-center justify-between gap-x-2 md:gap-x-4">
          <Link href="/">
            <h1 className="font-black">{APP_NAME}</h1>
          </Link>
          <div className="flex items-center gap-x-2 text-sm text-neutral-500 md:gap-x-4 md:text-base">
            {[
              { id: 'converter', href: '/converter', label: 'Converter' },
              { id: 'editor', href: '/editor', label: 'Editor' },
              { id: 'yaml', href: '/yaml', label: 'YAML' },
            ].map(({ id = '', href = '', label = '' }) => {
              return (
                <Link key={id} href={href} className="text-neutral-500 hover:text-neutral-100">
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
