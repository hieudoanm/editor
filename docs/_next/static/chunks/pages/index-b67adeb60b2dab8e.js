(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    7735: (e, r, t) => {
      'use strict';
      (t.r(r), t.d(r, { default: () => x }));
      var a = t(5640),
        n = t(4670),
        l = t(3087);
      let o = (e, r) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return (console.error('error', e), r);
          }
        },
        s = { delimiter: ',', headers: [], quote: '"' },
        i = function (e) {
          let {
            delimiter: r = ',',
            headers: t = [],
            quote: a = '"',
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
          0 === t.length && (t = [...new Set(e.flatMap((e) => Object.keys(e)))]);
          let n = t.map((e) => ''.concat(a).concat(e).concat(a)).join(r),
            l = e
              .map((e) =>
                t
                  .map((r) => {
                    let t = (e[r] || '').toString();
                    return ''.concat(a).concat(t).concat(a);
                  })
                  .join(r),
              )
              .join('\n');
          return ''.concat(n, '\n').concat(l);
        },
        c = (e) => {
          let r = JSON.parse(e),
            t = Object.keys(r).sort((e, r) => (e > r ? 1 : -1)),
            a = {};
          for (let e of t) a[e] = r[e];
          return JSON.stringify(a, null, 2);
        },
        u = (e) => JSON.stringify(JSON.parse(e), null, 2),
        d = (e) => JSON.stringify(JSON.parse(e)),
        m = (e) => (0, n.P)(o(e, {}), { indent: '  ' }),
        f = (e) => (0, l.As)(o(e, {})),
        y = function (e) {
          let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            parse: () => o(JSON.stringify(e), r),
            format: () => ({
              beautify: () => u(JSON.stringify(e)),
              minify: () => d(JSON.stringify(e)),
              sort: () => c(JSON.stringify(e)),
            }),
            convert: (r) => {
              try {
                if ('csv' === r) {
                  if (Array.isArray(e)) {
                    if (0 === e.length) return 'Empty List';
                    return i(e);
                  }
                  return 'Not A List';
                }
                if ('xml' === r) return m(JSON.stringify(e));
                if ('yaml' === r) return f(JSON.stringify(e));
                return 'Invalid Format';
              } catch (e) {
                return (console.error(e), e.message);
              }
            },
          };
        };
      var p = t(148);
      let v = [
          { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
          { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
          { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
          { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
        ],
        h = 'yaml',
        x = () => {
          let [{ data: e = v, from: r = y(v).format().beautify(), to: t = y(v).convert(h), format: n = h }, l] = (0,
          p.useState)({ data: v, from: y(v).format().beautify(), to: y(v).convert(h), format: h });
          return (
            console.log(e),
            (0, a.jsxs)('div', {
              className: 'flex h-screen w-screen flex-col',
              children: [
                (0, a.jsx)('nav', {
                  className: 'border-b border-neutral-200 shadow-sm',
                  children: (0, a.jsx)('div', {
                    className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
                    children: (0, a.jsxs)('div', {
                      className: 'flex items-center justify-between gap-x-2 md:gap-x-4',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'flex items-center gap-x-2 md:gap-x-4',
                          children: [
                            (0, a.jsx)('h1', { className: 'font-black', children: 'CSV' }),
                            (0, a.jsx)('button', {
                              type: 'button',
                              className: 'cursor-pointer',
                              onClick: () => {
                                let r = y(e).format().beautify();
                                l((e) => ({ ...e, from: r }));
                              },
                              children: 'Beautify',
                            }),
                            (0, a.jsx)('button', {
                              type: 'button',
                              className: 'cursor-pointer',
                              onClick: () => {
                                let r = y(e).format().minify();
                                l((e) => ({ ...e, from: r }));
                              },
                              children: 'Minify',
                            }),
                            (0, a.jsx)('button', {
                              type: 'button',
                              className: 'cursor-pointer',
                              onClick: () => {
                                let r = y(e).format().sort();
                                l((e) => ({ ...e, from: r }));
                              },
                              children: 'Sort',
                            }),
                          ],
                        }),
                        (0, a.jsx)('div', {
                          className: 'flex items-center gap-x-2 md:gap-x-4',
                          children: [
                            { id: 'csv', label: 'CSV' },
                            { id: 'xml', label: 'XML' },
                            { id: 'yaml', label: 'YAML' },
                          ].map((e) => {
                            let { id: t, label: s } = e;
                            return (0, a.jsx)(
                              'button',
                              {
                                type: 'button',
                                className: 'cursor-pointer '.concat(n === t ? 'font-semibold' : ''),
                                onClick: () =>
                                  l((e) => {
                                    let a = o(r, []),
                                      n = y(a).convert(t);
                                    return { ...e, data: a, format: t, to: n };
                                  }),
                                children: s,
                              },
                              t,
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)('main', {
                  className: 'container mx-auto grow p-4 md:p-8',
                  children: (0, a.jsxs)('div', {
                    className: 'grid h-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8',
                    children: [
                      (0, a.jsx)('div', {
                        className: 'col-span-1',
                        children: (0, a.jsx)('textarea', {
                          id: 'from',
                          name: 'from',
                          placeholder: 'From',
                          className:
                            'h-full w-full resize-none rounded-xl border border-neutral-200 p-4 whitespace-nowrap shadow focus:outline-none',
                          value: r,
                          onChange: (e) => {
                            let r = e.target.value,
                              t = o(r, []),
                              a = y(t).convert(n);
                            l((e) => ({ ...e, from: r, to: a, data: t }));
                          },
                        }),
                      }),
                      (0, a.jsx)('div', {
                        className: 'col-span-1',
                        children: (0, a.jsx)('textarea', {
                          id: 'to',
                          name: 'to',
                          placeholder: 'To',
                          className:
                            'h-full w-full resize-none rounded-xl border border-neutral-200 p-4 whitespace-nowrap shadow focus:outline-none',
                          value: t,
                          readOnly: !0,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
    },
    8898: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(7735);
        },
      ]);
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    (e.O(0, [230, 636, 593, 792], () => r(8898)), (_N_E = e.O()));
  },
]);
