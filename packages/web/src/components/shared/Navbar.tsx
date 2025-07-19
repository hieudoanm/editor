import { APP_NAME } from '@editor/constants';
import Link from 'next/link';
import { FC } from 'react';
import { Dropdown } from './Dropdown';

export const Navbar: FC = () => {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">{APP_NAME}</Link>
        </div>
        <div className="hidden space-x-4 md:flex">
          <Dropdown
            title="Calculator"
            options={[
              { id: 'base', href: '/calc/base', label: 'Base' },
              { id: 'crypto', href: '/calc/crypto', label: 'Crypto' },
              { id: 'forex', href: '/calc/forex', label: 'Forex' },
              { id: 'length', href: '/calc/length', label: 'Length' },
              { id: 'calc-roman', href: '/calc/roman', label: 'Roman' },
              { id: 'calc-weight', href: '/calc/weight', label: 'Weight' },
            ]}
          />
          <Dropdown
            title="Converter"
            options={[
              { id: 'code', href: '/code', label: 'Code' },
              { id: 'colors', href: '/colors', label: 'Colors' },
              { id: 'strings', href: '/strings', label: 'Strings' },
            ]}
          />
          <Dropdown
            title="Data"
            options={[
              { id: 'csv', href: '/data/csv', label: 'CSV' },
              { id: 'json', href: '/data/json', label: 'JSON' },
              { id: 'yaml', href: '/data/yaml', label: 'YAML' },
            ]}
          />
          <Dropdown
            title="Editor"
            options={[
              { id: 'manifest', href: '/editor/manifest', label: 'Manifest' },
              { id: 'markup', href: '/editor/markup', label: 'Markup' },
            ]}
          />{' '}
          <Dropdown title="Generator" options={[{ id: 'uuid', href: '/uuid', label: 'UUID' }]} />
        </div>
      </div>
    </nav>
  );
};
