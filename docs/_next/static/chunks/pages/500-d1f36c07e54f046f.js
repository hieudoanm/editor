(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [421],
  {
    645: (e, t, n) => {
      'use strict';
      (n.r(t), n.d(t, { default: () => s }));
      var l = n(5640),
        r = n(7864),
        a = n.n(r);
      let s = () =>
        (0, l.jsx)('main', {
          className: 'flex min-h-screen flex-col items-center justify-center bg-neutral-900 px-4 text-neutral-100',
          children: (0, l.jsxs)('div', {
            className: 'flex flex-col items-center gap-6 text-center',
            children: [
              (0, l.jsx)('h1', { className: 'text-6xl font-bold', children: '500' }),
              (0, l.jsx)('p', {
                className: 'text-xl text-neutral-400',
                children: 'Something went wrong on our end. Please try again later.',
              }),
              (0, l.jsx)(a(), {
                href: '/',
                className:
                  'rounded-xl bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition hover:bg-neutral-200',
                children: 'Go back home',
              }),
            ],
          }),
        });
    },
    5534: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/500',
        function () {
          return n(645);
        },
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [864, 636, 593, 792], () => t(5534)), (_N_E = e.O()));
  },
]);
