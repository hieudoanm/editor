import { APP_NAME } from '@editor/constants/app';
import Link from 'next/link';
import { FC } from 'react';
import { Dropdown } from './Dropdown';

const links = [
  {
    id: 'chess',
    title: 'Chess',
    options: [
      { id: 'chess-fen2png', href: '/chess/converter/fen2png', label: 'FEN to PNG' },
      { id: 'chess-pgn2gif', href: '/chess/converter/pgn2gif', label: 'PGN to GIF' },
      { id: 'chess-chess960', href: '/chess/theory/chess960', label: 'Chess960' },
      { id: 'chess-openings', href: '/chess/theory/openings', label: 'Openings' },
      { id: 'chess-clock', href: '/chess/tools/clock', label: 'Clock' },
      { id: 'chess-elo', href: '/chess/tools/elo', label: 'ELO' },
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
    id: 'downloads',
    title: 'Downloads',
    options: [{ id: 'cli', href: '/downloads/cli', label: 'CLI' }],
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
    id: 'images',
    title: 'Images',
    options: [
      { id: 'filter', href: '/images/filter', label: 'Filter' },
      { id: 'ocr', href: '/images/ocr', label: 'OCR' },
    ],
  },
  {
    id: 'other',
    title: 'Other',
    options: [
      { id: 'calculator', href: '/other/calculator', label: 'Calculator' },
      { id: 'chat', href: '/other/chat', label: 'Chat' },
      { id: 'doi', href: '/other/doi', label: 'DOI' },
      { id: 'status', href: '/other/status', label: 'Status' },
      { id: 'periodic-table', href: '/other/periodic-table', label: 'Periodic Table' },
    ],
  },
];

export const Navbar: FC = () => {
  return (
    <nav className="container mx-auto px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">{APP_NAME}</Link>
        </div>
        <div className="hidden space-x-4 lg:flex">
          {links.map(({ id, title, options }) => {
            return <Dropdown key={id} title={title} options={options} />;
          })}
        </div>
      </div>
    </nav>
  );
};
