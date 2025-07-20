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
          {[
            {
              id: 'calculator',
              title: 'Calculator',
              options: [
                { id: 'base', href: '/calc/base', label: 'Base' },
                { id: 'crypto', href: '/calc/crypto', label: 'Crypto' },
                { id: 'forex', href: '/calc/forex', label: 'Forex' },
                { id: 'length', href: '/calc/length', label: 'Length' },
                { id: 'roman', href: '/calc/roman', label: 'Roman' },
                { id: 'weight', href: '/calc/weight', label: 'Weight' },
              ],
            },
            {
              id: 'clock',
              title: 'Clock',
              options: [
                { id: 'pomodoro', href: '/clock/pomodoro', label: 'Pomodoro' },
                { id: 'timezones', href: '/clock/timezones', label: 'Timezones' },
              ],
            },
            {
              id: 'converter',
              title: 'Converter',
              options: [
                { id: 'code', href: '/converter/code', label: 'Code' },
                { id: 'colors', href: '/converter/colors', label: 'Colors' },
                { id: 'csv', href: '/converter/csv', label: 'CSV' },
                { id: 'json', href: '/converter/json', label: 'JSON' },
                { id: 'openapi2postmanv2', href: '/converter/openapi2postmanv2', label: 'OpenAPI to PostmanV2' },
                { id: 'strings', href: '/converter/strings', label: 'Strings' },
                { id: 'yaml', href: '/converter/yaml', label: 'YAML' },
              ],
            },
            {
              id: 'editor',
              title: 'Editor',
              options: [
                { id: 'manifest', href: '/editor/manifest', label: 'Manifest' },
                { id: 'markup', href: '/editor/markup', label: 'Markup' },
                { id: 'redact', href: '/editor/redact', label: 'Redact' },
              ],
            },
            {
              id: 'generator',
              title: 'Generator',
              options: [
                { id: 'qrcode', href: '/generator/qrcode', label: 'QRCode' },
                { id: 'uuid', href: '/generator/uuid', label: 'UUID' },
              ],
            },
            {
              id: 'github',
              title: 'GitHub',
              options: [
                { id: 'languages', href: '/github/languages', label: 'Languages' },
                { id: 'social-preview', href: '/github/preview', label: 'Social Preview' },
              ],
            },
            {
              id: 'other',
              title: 'Other',
              options: [
                { id: 'status', href: '/other/status', label: 'Status' },
                { id: 'periodic-table', href: '/other/periodic-table', label: 'Periodic Table' },
              ],
            },
          ].map(({ id, title, options }) => {
            return <Dropdown key={id} title={title} options={options} />;
          })}
        </div>
      </div>
    </nav>
  );
};
