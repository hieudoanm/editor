import { APP_NAME } from '@converter/constants';
import Link from 'next/link';
import { FC } from 'react';

const links: { id: string; href: string; label: string }[] = [
  { id: 'colors', href: '/colors', label: 'Colors' },
  { id: 'csv', href: '/csv', label: 'CSV' },
  { id: 'json', href: '/json', label: 'JSON' },
  { id: 'yaml', href: '/yaml', label: 'YAML' },
  { id: 'manifest', href: '/manifest', label: 'Manifest' },
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
