(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [336],
  {
    2328: (e, t, n) => {
      'use strict';
      (n.r(t), n.d(t, { default: () => a }));
      var l = n(5640),
        r = n(7864),
        s = n.n(r);
      let a = () =>
        (0, l.jsx)('main', {
          className: 'flex min-h-screen flex-col items-center justify-center bg-neutral-900 px-4 text-neutral-100',
          children: (0, l.jsxs)('div', {
            className: 'flex flex-col items-center gap-6 text-center',
            children: [
              (0, l.jsx)('h1', { className: 'text-6xl font-bold', children: '404' }),
              (0, l.jsx)('p', {
                className: 'text-xl text-neutral-400',
                children: 'Sorry, the page you are looking for does not exist.',
              }),
              (0, l.jsx)(s(), {
                href: '/',
                className:
                  'rounded-xl bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition hover:bg-neutral-200',
                children: 'Go back home',
              }),
            ],
          }),
        });
    },
    5398: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return n(2328);
        },
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [864, 636, 593, 792], () => t(5398)), (_N_E = e.O()));
  },
]);
