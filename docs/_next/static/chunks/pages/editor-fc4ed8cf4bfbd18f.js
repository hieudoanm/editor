(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [451],
  {
    1091: (e, r, t) => {
      'use strict';
      t.d(r, { Gl: () => s, Pq: () => m });
      var n = t(4670),
        a = t(3087);
      let s = (e, r) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return (console.error('error', e), r);
          }
        },
        i = { delimiter: ',', headers: [], quote: '"' },
        l = function (e) {
          let {
            delimiter: r = ',',
            headers: t = [],
            quote: n = '"',
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
          0 === t.length && (t = [...new Set(e.flatMap((e) => Object.keys(e)))]);
          let a = t.map((e) => ''.concat(n).concat(e).concat(n)).join(r),
            s = e
              .map((e) =>
                t
                  .map((r) => {
                    let t = (e[r] || '').toString();
                    return ''.concat(n).concat(t).concat(n);
                  })
                  .join(r),
              )
              .join('\n');
          return ''.concat(a, '\n').concat(s);
        },
        o = (e) => {
          let r = JSON.parse(e),
            t = Object.keys(r).sort((e, r) => (e > r ? 1 : -1)),
            n = {};
          for (let e of t) n[e] = r[e];
          return JSON.stringify(n, null, 2);
        },
        c = (e) => JSON.stringify(JSON.parse(e), null, 2),
        d = (e) => JSON.stringify(JSON.parse(e)),
        u = (e) => (0, n.P)(s(e, {}), { indent: '  ' }),
        f = (e) => (0, a.As)(s(e, {})),
        m = function (e) {
          let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            parse: () => s(JSON.stringify(e), r),
            format: () => ({
              beautify: () => c(JSON.stringify(e)),
              minify: () => d(JSON.stringify(e)),
              sort: () => o(JSON.stringify(e)),
            }),
            convert: (r) => {
              try {
                if ('csv' === r) {
                  if (Array.isArray(e)) {
                    if (0 === e.length) return 'Empty List';
                    return l(e);
                  }
                  return 'Not A List';
                }
                if ('xml' === r) return u(JSON.stringify(e));
                if ('yaml' === r) return f(JSON.stringify(e));
                return 'Invalid Format';
              } catch (e) {
                return (console.error(e), e.message);
              }
            },
          };
        };
    },
    4463: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/editor',
        function () {
          return t(7434);
        },
      ]);
    },
    7434: (e, r, t) => {
      'use strict';
      (t.r(r), t.d(r, { default: () => o }));
      var n = t(5640),
        a = t(9524),
        s = t(2635),
        i = t(1091),
        l = t(148);
      let o = () => {
        let [{ manifest: e = '', type: r = '' }, t] = (0, l.useState)({
          manifest: (0, i.Pq)(s.lP).format().beautify(),
          type: 'extension',
        });
        return (0, n.jsxs)('div', {
          className: 'flex h-screen w-screen flex-col',
          children: [
            (0, n.jsx)(a.F, {}),
            (0, n.jsx)('main', {
              className: 'container mx-auto grow p-4 md:p-8',
              children: (0, n.jsxs)('div', {
                className: 'flex h-full flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'grid grid-cols-3 gap-x-4 md:gap-x-8',
                    children: [
                      (0, n.jsx)('button', {
                        type: 'button',
                        className: 'cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                        onClick: () => {
                          let r = (0, i.Pq)((0, i.Gl)(e, []))
                            .format()
                            .beautify();
                          t((e) => ({ ...e, manifest: r }));
                        },
                        children: 'Beautify',
                      }),
                      (0, n.jsx)('button', {
                        type: 'button',
                        className: 'cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                        onClick: () => {
                          let r = (0, i.Pq)((0, i.Gl)(e, []))
                            .format()
                            .minify();
                          t((e) => ({ ...e, manifest: r }));
                        },
                        children: 'Minify',
                      }),
                      (0, n.jsx)('button', {
                        type: 'button',
                        className: 'cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                        onClick: () => {
                          let r = (0, i.Pq)((0, i.Gl)(e, []))
                            .format()
                            .sort();
                          t((e) => ({ ...e, manifest: r }));
                        },
                        children: 'Sort',
                      }),
                    ],
                  }),
                  (0, n.jsxs)('select', {
                    id: 'file-format',
                    name: 'file-format',
                    className: 'appearance-none rounded-full border border-neutral-800 px-4 py-2',
                    value: r,
                    onChange: (e) =>
                      t((r) => {
                        let t = e.target.value,
                          n =
                            'extension' === t
                              ? (0, i.Pq)(s.lP, {}).format().beautify()
                              : (0, i.Pq)(s._z, {}).format().beautify();
                        return { ...r, type: t, manifest: n };
                      }),
                    children: [
                      (0, n.jsx)('option', { value: 'extension', children: 'Extension' }),
                      (0, n.jsx)('option', { value: 'pwa', children: 'PWA' }),
                    ],
                  }),
                  (0, n.jsx)('textarea', {
                    id: 'manifest.json',
                    name: 'manifest.json',
                    placeholder: 'manifest.json',
                    className:
                      'h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none',
                    value: e,
                    onChange: (e) => {
                      let r = e.target.value;
                      t((e) => ({ ...e, manifest: r }));
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    9524: (e, r, t) => {
      'use strict';
      t.d(r, { F: () => l });
      var n = t(5640),
        a = t(2635),
        s = t(7864),
        i = t.n(s);
      let l = () =>
        (0, n.jsx)('nav', {
          className: 'border-b border-neutral-800 shadow-sm',
          children: (0, n.jsx)('div', {
            className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
            children: (0, n.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2 md:gap-x-4',
              children: [
                (0, n.jsx)(i(), { href: '/', children: (0, n.jsx)('h1', { className: 'font-black', children: a.C3 }) }),
                (0, n.jsxs)('div', {
                  className: 'flex items-center gap-x-2 text-sm text-neutral-500 md:gap-x-4 md:text-base',
                  children: [
                    (0, n.jsx)(i(), { href: '/converter', children: 'Converter' }),
                    (0, n.jsx)(i(), { href: '/editor', children: 'Editor' }),
                  ],
                }),
              ],
            }),
          }),
        });
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    (e.O(0, [864, 230, 636, 593, 792], () => r(4463)), (_N_E = e.O()));
  },
]);
