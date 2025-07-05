(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [44],
  {
    1091: (e, r, t) => {
      'use strict';
      t.d(r, { Gl: () => l, Pq: () => m });
      var n = t(4670),
        a = t(3087);
      let l = (e, r) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return (console.error('error', e), r);
          }
        },
        o = { delimiter: ',', headers: [], quote: '"' },
        s = function (e) {
          let {
            delimiter: r = ',',
            headers: t = [],
            quote: n = '"',
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
          0 === t.length && (t = [...new Set(e.flatMap((e) => Object.keys(e)))]);
          let a = t.map((e) => ''.concat(n).concat(e).concat(n)).join(r),
            l = e
              .map((e) =>
                t
                  .map((r) => {
                    let t = (e[r] || '').toString();
                    return ''.concat(n).concat(t).concat(n);
                  })
                  .join(r),
              )
              .join('\n');
          return ''.concat(a, '\n').concat(l);
        },
        i = (e) => {
          let r = JSON.parse(e),
            t = Object.keys(r).sort((e, r) => (e > r ? 1 : -1)),
            n = {};
          for (let e of t) n[e] = r[e];
          return JSON.stringify(n, null, 2);
        },
        c = (e) => JSON.stringify(JSON.parse(e), null, 2),
        d = (e) => JSON.stringify(JSON.parse(e)),
        u = (e) => (0, n.P)(l(e, {}), { indent: '  ' }),
        f = (e) => (0, a.As)(l(e, {})),
        m = function (e) {
          let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            parse: () => l(JSON.stringify(e), r),
            format: () => ({
              beautify: () => c(JSON.stringify(e)),
              minify: () => d(JSON.stringify(e)),
              sort: () => i(JSON.stringify(e)),
            }),
            convert: (r) => {
              try {
                if ('csv' === r) {
                  if (Array.isArray(e)) {
                    if (0 === e.length) return 'Empty List';
                    return s(e);
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
    5445: (e, r, t) => {
      'use strict';
      (t.r(r), t.d(r, { default: () => c }));
      var n = t(5640),
        a = t(9524),
        l = t(2635),
        o = t(1091),
        s = t(148);
      let i = 'yaml',
        c = () => {
          let [
            {
              data: e = l.wY,
              from: r = (0, o.Pq)(l.wY).format().beautify(),
              to: t = (0, o.Pq)(l.wY).convert(i),
              format: c = i,
            },
            d,
          ] = (0, s.useState)({
            data: l.wY,
            from: (0, o.Pq)(l.wY).format().beautify(),
            to: (0, o.Pq)(l.wY).convert(i),
            format: i,
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
                            let r = (0, o.Pq)(e).format().beautify();
                            d((e) => ({ ...e, from: r }));
                          },
                          children: 'Beautify',
                        }),
                        (0, n.jsx)('button', {
                          type: 'button',
                          className: 'cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                          onClick: () => {
                            let r = (0, o.Pq)(e).format().minify();
                            d((e) => ({ ...e, from: r }));
                          },
                          children: 'Minify',
                        }),
                        (0, n.jsx)('button', {
                          type: 'button',
                          className: 'cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                          onClick: () => {
                            let r = (0, o.Pq)(e).format().sort();
                            d((e) => ({ ...e, from: r }));
                          },
                          children: 'Sort',
                        }),
                      ],
                    }),
                    (0, n.jsxs)('select', {
                      id: 'file-format',
                      name: 'file-format',
                      className: 'appearance-none rounded-full border border-neutral-800 px-4 py-2',
                      value: c,
                      onChange: (e) =>
                        d((t) => {
                          let n = e.target.value,
                            a = (0, o.Gl)(r, []),
                            l = (0, o.Pq)(a).convert(n);
                          return { ...t, data: a, format: n, to: l };
                        }),
                      children: [
                        (0, n.jsx)('option', { value: 'csv', children: 'CSV' }),
                        (0, n.jsx)('option', { value: 'xml', children: 'XML' }),
                        (0, n.jsx)('option', { value: 'yaml', children: 'YAML' }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className: 'grid h-full grow grid-cols-1 gap-4 md:grid-cols-2 md:gap-8',
                      children: [
                        (0, n.jsx)('div', {
                          className: 'col-span-1',
                          children: (0, n.jsx)('textarea', {
                            id: 'from',
                            name: 'from',
                            placeholder: 'From',
                            className:
                              'h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none',
                            value: r,
                            onChange: (e) => {
                              let r = e.target.value,
                                t = (0, o.Gl)(r, []),
                                n = (0, o.Pq)(t).convert(c);
                              d((e) => ({ ...e, from: r, to: n, data: t }));
                            },
                          }),
                        }),
                        (0, n.jsx)('div', {
                          className: 'col-span-1',
                          children: (0, n.jsx)('textarea', {
                            id: 'to',
                            name: 'to',
                            placeholder: 'To',
                            className:
                              'h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none',
                            value: t,
                            readOnly: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    9083: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/converter',
        function () {
          return t(5445);
        },
      ]);
    },
    9524: (e, r, t) => {
      'use strict';
      t.d(r, { F: () => s });
      var n = t(5640),
        a = t(2635),
        l = t(7864),
        o = t.n(l);
      let s = () =>
        (0, n.jsx)('nav', {
          className: 'border-b border-neutral-800 shadow-sm',
          children: (0, n.jsx)('div', {
            className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
            children: (0, n.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2 md:gap-x-4',
              children: [
                (0, n.jsx)(o(), { href: '/', children: (0, n.jsx)('h1', { className: 'font-black', children: a.C3 }) }),
                (0, n.jsxs)('div', {
                  className: 'flex items-center gap-x-2 text-sm text-neutral-500 md:gap-x-4 md:text-base',
                  children: [
                    (0, n.jsx)(o(), { href: '/converter', children: 'Converter' }),
                    (0, n.jsx)(o(), { href: '/editor', children: 'Editor' }),
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
    (e.O(0, [864, 230, 636, 593, 792], () => r(9083)), (_N_E = e.O()));
  },
]);
