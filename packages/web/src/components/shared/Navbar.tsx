import { APP_NAME } from '@editor/constants/app';
import Link from 'next/link';
import { FC } from 'react';
import { Dropdown } from './Dropdown';

export const Navbar: FC = () => {
  return (
    <nav className="container mx-auto px-8 py-4">
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
              { id: 'roman', href: '/calc/roman', label: 'Roman' },
              { id: 'weight', href: '/calc/weight', label: 'Weight' },
            ]}
          />
          <Dropdown
            title="Clock"
            options={[
              { id: 'pomodoro', href: '/clock/pomodoro', label: 'Pomodoro' },
              { id: 'timezones', href: '/clock/timezones', label: 'Timezones' },
            ]}
          />
          <Dropdown
            title="Converter"
            options={[
              { id: 'code', href: '/converter/code', label: 'Code' },
              { id: 'colors', href: '/converter/colors', label: 'Colors' },
              { id: 'csv', href: '/converter/csv', label: 'CSV' },
              { id: 'json', href: '/converter/json', label: 'JSON' },
              { id: 'openapi2postmanv2', href: '/converter/openapi2postmanv2', label: 'OpenAPI to PostmanV2' },
              { id: 'strings', href: '/converter/strings', label: 'Strings' },
              { id: 'yaml', href: '/converter/yaml', label: 'YAML' },
            ]}
          />
          <Dropdown
            title="Editor"
            options={[
              { id: 'manifest', href: '/editor/manifest', label: 'Manifest' },
              { id: 'markup', href: '/editor/markup', label: 'Markup' },
              { id: 'redact', href: '/editor/redact', label: 'Redact' },
            ]}
          />
          <Dropdown
            title="Generator"
            options={[
              { id: 'qrcode', href: '/generator/qrcode', label: 'QRCode' },
              { id: 'uuid', href: '/generator/uuid', label: 'UUID' },
            ]}
          />
          <Dropdown
            title="Other"
            options={[
              { id: 'status', href: '/other/status', label: 'Status' },
              { id: 'periodic-table', href: '/other/periodic-table', label: 'Periodic Table' },
            ]}
          />
        </div>
      </div>
    </nav>
  );
};
