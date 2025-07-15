import { APP_NAME } from '@converter/constants';
import Link from 'next/link';
import { FC } from 'react';

const links: { id: string; href: string; label: string }[] = [
  { id: 'calc-base', href: '/calc/base', label: 'Base' },
  { id: 'calc-crypto', href: '/calc/crypto', label: 'Crypto' },
  { id: 'calc-forex', href: '/calc/forex', label: 'Forex' },
  { id: 'calc-length', href: '/calc/length', label: 'Length' },
  { id: 'calc-roman', href: '/calc/roman', label: 'Roman' },
  { id: 'calc-weight', href: '/calc/weight', label: 'Weight' },
  { id: 'code', href: '/code', label: 'Code' },
  { id: 'colors', href: '/colors', label: 'Colors' },
  { id: 'data-csv', href: '/data/csv', label: 'CSV' },
  { id: 'data-json', href: '/data/json', label: 'JSON' },
  { id: 'data-yaml', href: '/data/yaml', label: 'YAML' },
  { id: 'manifest', href: '/manifest', label: 'Manifest' },
  { id: 'strings', href: '/strings', label: 'Strings' },
  { id: 'uuid', href: '/uuid', label: 'UUID' },
];

export const Navbar: FC = () => {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">{APP_NAME}</Link>
        </div>
        <div className="hidden space-x-4 md:flex">
          {links.map(({ id, href, label }) => {
            return (
              <Link key={id} href={href} className="hover:underline">
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
