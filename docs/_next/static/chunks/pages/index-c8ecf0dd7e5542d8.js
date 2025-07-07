(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    1027: (e, s, l) => {
      'use strict';
      (l.r(s), l.d(s, { default: () => u }));
      var r = l(5640),
        t = l(7864),
        a = l.n(t);
      let n = () =>
          (0, r.jsx)('section', {
            className: 'w-full py-16',
            children: (0, r.jsxs)('div', {
              className: 'mx-auto max-w-3xl px-4 text-center md:px-8',
              children: [
                (0, r.jsx)('h3', {
                  className: 'text-2xl font-bold sm:text-3xl',
                  children: 'Convert CSV, JSON, and YAML effortlessly',
                }),
                (0, r.jsxs)('p', {
                  className: 'mt-4 text-neutral-500',
                  children: [
                    'Seamlessly convert between ',
                    (0, r.jsx)('code', { children: '.csv' }),
                    ', ',
                    (0, r.jsx)('code', { children: '.json' }),
                    ', and ',
                    (0, r.jsx)('code', { children: '.yaml' }),
                    ' formats directly in your browser — fast, private, and with zero setup.',
                  ],
                }),
                (0, r.jsx)('div', {
                  className: 'mt-8',
                  children: (0, r.jsx)(a(), {
                    href: '/csv',
                    className: 'cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3',
                    children: 'Start Converting',
                  }),
                }),
              ],
            }),
          }),
        d = () =>
          (0, r.jsx)('section', {
            className: 'py-16',
            children: (0, r.jsxs)('div', {
              className: 'container mx-auto p-4 text-center md:p-8',
              children: [
                (0, r.jsx)('h3', {
                  className: 'text-3xl font-semibold sm:text-4xl',
                  children: 'Why Use Our Data Converter?',
                }),
                (0, r.jsxs)('p', {
                  className: 'mx-auto mt-4 max-w-2xl text-neutral-500',
                  children: [
                    'Convert, format, and edit ',
                    (0, r.jsx)('code', { children: '.csv' }),
                    ', ',
                    (0, r.jsx)('code', { children: '.json' }),
                    ', and ',
                    (0, r.jsx)('code', { children: '.yaml' }),
                    ' files instantly and securely in your browser — no uploads, no setup.',
                  ],
                }),
                (0, r.jsxs)('div', {
                  className: 'mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3',
                  children: [
                    (0, r.jsxs)('div', {
                      className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                      children: [
                        (0, r.jsx)('h4', { className: 'text-lg font-semibold', children: '⚡ Real-Time Formatting' }),
                        (0, r.jsx)('p', {
                          className: 'mt-2 text-sm text-neutral-500',
                          children: 'Clean and beautify your JSON or YAML as you type — no extra tools needed.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                      children: [
                        (0, r.jsx)('h4', {
                          className: 'text-lg font-semibold',
                          children: '\uD83D\uDD04 Convert Between Formats',
                        }),
                        (0, r.jsx)('p', {
                          className: 'mt-2 text-sm text-neutral-500',
                          children:
                            'Easily switch between CSV, JSON, and YAML with a single click — all processed locally.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                      children: [
                        (0, r.jsx)('h4', {
                          className: 'text-lg font-semibold',
                          children: '\uD83E\uDDE9 Smart Editing Tools',
                        }),
                        (0, r.jsx)('p', {
                          className: 'mt-2 text-sm text-neutral-500',
                          children:
                            'Edit structured data with syntax highlighting, validation, and smart helpers for common file types.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
      var c = l(2635);
      let i = () =>
          (0, r.jsx)('footer', {
            className: 'w-full',
            children: (0, r.jsxs)('div', {
              className:
                'container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 text-sm text-neutral-500 sm:flex-row md:gap-4 md:px-8 md:py-4',
              children: [
                (0, r.jsxs)('p', {
                  children: ['\xa9 ', new Date().getFullYear(), ' ', c.C3, '. All rights reserved.'],
                }),
                (0, r.jsx)('div', {
                  className: 'space-x-4',
                  children: (0, r.jsx)(a(), {
                    href: 'https://github.com/hieudoanm/numbers',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'hover:underline',
                    children: 'GitHub',
                  }),
                }),
              ],
            }),
          }),
        x = () =>
          (0, r.jsx)('div', {
            className:
              'fixed top-0 right-0 bottom-0 left-0 z-0 m-auto flex w-screen items-center justify-center bg-neutral-900',
            children: (0, r.jsx)('div', {
              className: 'aspect-square w-full max-w-xl bg-[radial-gradient(#510424_0,_transparent_72%)]',
            }),
          }),
        o = (e) => {
          let { children: s = (0, r.jsx)(r.Fragment, {}) } = e;
          return (0, r.jsx)('span', {
            className: 'bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent',
            children: s,
          });
        },
        m = () =>
          (0, r.jsx)('section', {
            className: 'w-full py-20',
            children: (0, r.jsxs)('div', {
              className: 'mx-auto max-w-3xl px-4 text-center sm:px-6',
              children: [
                (0, r.jsx)('h2', {
                  className: 'text-4xl font-extrabold text-neutral-100 sm:text-5xl',
                  children: (0, r.jsx)(o, { children: c.C3 }),
                }),
                (0, r.jsxs)('p', {
                  className: 'mt-6 text-lg text-neutral-500',
                  children: [
                    'Instantly convert and edit ',
                    (0, r.jsx)('code', { children: '.csv' }),
                    ', ',
                    (0, r.jsx)('code', { children: '.json' }),
                    ', and ',
                    (0, r.jsx)('code', { children: '.yaml' }),
                    ' files — all locally in your browser with no setup, no uploads.',
                  ],
                }),
                (0, r.jsx)('div', {
                  className: 'mt-8',
                  children: (0, r.jsx)(a(), {
                    href: '/csv',
                    className: 'cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3',
                    children: 'Start Converting',
                  }),
                }),
              ],
            }),
          });
      var h = l(9524);
      let u = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(x, {}),
            (0, r.jsxs)('div', {
              className: 'relative z-10',
              children: [
                (0, r.jsx)(h.F, {}),
                (0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
                (0, r.jsx)(m, {}),
                (0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
                (0, r.jsx)(d, {}),
                (0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
                (0, r.jsx)(n, {}),
                (0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
                (0, r.jsx)(i, {}),
              ],
            }),
          ],
        });
    },
    8898: (e, s, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return l(1027);
        },
      ]);
    },
    9524: (e, s, l) => {
      'use strict';
      l.d(s, { F: () => d });
      var r = l(5640),
        t = l(2635),
        a = l(7864),
        n = l.n(a);
      let d = () =>
        (0, r.jsx)('nav', {
          className: 'border-b border-neutral-800 shadow-sm',
          children: (0, r.jsx)('div', {
            className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
            children: (0, r.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2 md:gap-x-4',
              children: [
                (0, r.jsx)(n(), { href: '/', children: (0, r.jsx)('h1', { className: 'font-black', children: t.C3 }) }),
                (0, r.jsx)('div', {
                  className: 'flex items-center gap-x-2 text-sm text-neutral-500 md:gap-x-4 md:text-base',
                  children: [
                    { id: 'csv', href: '/csv', label: 'CSV' },
                    { id: 'json', href: '/json', label: 'JSON' },
                    { id: 'yaml', href: '/yaml', label: 'YAML' },
                    { id: 'manifest', href: '/manifest', label: 'Manifest' },
                  ].map((e) => {
                    let { id: s = '', href: l = '', label: t = '' } = e;
                    return (0, r.jsx)(
                      n(),
                      { href: l, className: 'text-neutral-500 hover:text-neutral-100', children: t },
                      s,
                    );
                  }),
                }),
              ],
            }),
          }),
        });
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    (e.O(0, [864, 636, 593, 792], () => s(8898)), (_N_E = e.O()));
  },
]);
