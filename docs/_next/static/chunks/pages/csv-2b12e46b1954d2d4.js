(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [408],
  {
    91: (e, l, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/csv',
        function () {
          return a(6026);
        },
      ]);
    },
    6026: (e, l, a) => {
      'use strict';
      (a.r(l), a.d(l, { INITIAL_CSV: () => m, default: () => p }));
      var t = a(5640),
        r = a(9524);
      let n = (e) => {
          var l;
          if (!(null == (l = navigator) ? void 0 : l.clipboard)) return alert('Incompatible');
          (navigator.clipboard.writeText(e), alert('Copy "'.concat(e, '" to Clipboard')));
        },
        s = { delimiter: ',', quote: '"' },
        c = function (e) {
          var l;
          let { delimiter: a = ',', quote: t = '"' } =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
            r = e.split('\n'),
            n = null != (l = r[0]) ? l : '';
          if (!n) return [];
          let c = r.splice(1),
            o = n.split(a);
          return c.map((e) => {
            let l = e.split(a),
              r = {};
            for (let [e, a] of o.entries()) {
              let n = RegExp(t, 'g');
              Object.assign(r, { [a.replace(n, '')]: (l[e] || '').toString().replace(n, '') });
            }
            return r;
          });
        },
        o = (e) => {
          var l;
          let a = c(e),
            t = Object.keys(null != (l = a[0]) ? l : {}),
            r = t.map((e) => {
              let l = Math.max(
                ...a
                  .map((l) => {
                    var a;
                    return null != (a = l[e]) ? a : '';
                  })
                  .map((e) => e.length),
                e.length,
              );
              return { header: e, length: l };
            }),
            n =
              r.length > 0
                ? '| '.concat(
                    r
                      .map((e) => {
                        let { header: l = '', length: a = 0 } = e,
                          t = Math.max(0, a - l.length);
                        return ''.concat(l).concat(' '.repeat(t));
                      })
                      .join(' | '),
                    ' |',
                  )
                : '',
            s =
              t.length > 0
                ? '| '.concat(
                    r
                      .map((e) => {
                        let { length: l = 0 } = e;
                        return '-'.repeat(l);
                      })
                      .join(' | '),
                    ' |',
                  )
                : '',
            o = a
              .map((e) => {
                let l = r
                  .map((l) => {
                    var a, t;
                    let { header: r, length: n } = l,
                      s = null != (a = e[r]) ? a : '',
                      c = Math.max(0, n - (null != (t = s.length) ? t : 0));
                    return ''.concat(s).concat(' '.repeat(c));
                  })
                  .join(' | ');
                return '| '.concat(l, ' |');
              })
              .join('\n');
          return ''.concat(n, '\n').concat(s, '\n').concat(o);
        },
        i = (e) =>
          c(e)
            .map((e) => {
              let l = Object.keys(e),
                a = Object.values(e),
                t = l.map((e) => '"'.concat(e, '"')).join(', '),
                r = a.map((e) => '"'.concat(e, '"')).join(', ');
              return 'INSERT INTO schema.table ('.concat(t, ') VALUES (').concat(r, ')');
            })
            .join(';\n'),
        d = (e) => ({
          format: (l) => ('json' === l ? JSON.stringify(c(e), null, 2) : 'md' === l ? o(e) : 'sql' === l ? i(e) : e),
        });
      var u = a(148);
      let m =
          'header1,header2,header3,header4\nvalue1,value2,value3,value4\nvalue1,value2,value3,value4\nvalue1,value2,value3,value4\nvalue1,value2,value3,value4',
        h = (e) => {
          let { csv: l = '' } = e,
            a = c(l, { delimiter: ',' });
          return (0, t.jsxs)('div', {
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, t.jsx)('div', {
                className: 'w-full overflow-auto rounded border border-neutral-800',
                children: (0, t.jsxs)('table', {
                  id: 'csv-html-table',
                  className: 'w-full',
                  children: [
                    a[0]
                      ? (0, t.jsx)('thead', {
                          children: (0, t.jsx)('tr', {
                            children: Object.keys(a[0]).map((e) =>
                              (0, t.jsx)(
                                'th',
                                {
                                  align: 'left',
                                  children: (0, t.jsx)('p', { className: 'truncate p-2', title: e, children: e }),
                                },
                                e,
                              ),
                            ),
                          }),
                        })
                      : (0, t.jsx)(t.Fragment, {}),
                    (0, t.jsx)('tbody', {
                      children: a.map((e) =>
                        (0, t.jsx)(
                          'tr',
                          {
                            className: 'border-t border-neutral-800',
                            children: Object.values(e).map((e) =>
                              (0, t.jsx)(
                                'td',
                                { children: (0, t.jsx)('p', { className: 'truncate p-2', title: e, children: e }) },
                                e,
                              ),
                            ),
                          },
                          'row-'.concat(JSON.stringify(e)),
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)('button', {
                type: 'button',
                className: 'cursor-pointer rounded-lg bg-neutral-100 px-4 py-2 text-neutral-900',
                onClick: () => {
                  var e, l;
                  n(
                    null != (l = null == (e = document.getElementById('csv-html-table')) ? void 0 : e.outerHTML)
                      ? l
                      : '',
                  );
                },
                children: 'Copy',
              }),
            ],
          });
        },
        p = () => {
          let [{ from: e = m, to: l = '', format: a = 'html' }, n] = (0, u.useState)({
            from: m,
            to: i(m),
            format: 'sql',
          });
          return (0, t.jsxs)('div', {
            className: 'flex h-screen w-screen flex-col',
            children: [
              (0, t.jsx)(r.F, {}),
              (0, t.jsx)('main', {
                className: 'container mx-auto grow p-4 md:p-8',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, t.jsxs)('select', {
                      id: 'file-format',
                      name: 'file-format',
                      className: 'appearance-none rounded-full border border-neutral-800 px-4 py-2',
                      value: a,
                      onChange: (l) =>
                        n((a) => {
                          let t = d(e).format(l.target.value);
                          return { ...a, format: l.target.value, to: t };
                        }),
                      children: [
                        (0, t.jsx)('option', { value: 'html', children: 'HTML' }),
                        (0, t.jsx)('option', { value: 'json', children: 'JSON' }),
                        (0, t.jsx)('option', { value: 'md', children: 'Markdown' }),
                        (0, t.jsx)('option', { value: 'sql', children: 'SQL' }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'grid h-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8',
                      children: [
                        (0, t.jsx)('div', {
                          className: 'col-span-1',
                          children: (0, t.jsx)('textarea', {
                            id: 'from',
                            name: 'from',
                            placeholder: 'From',
                            className:
                              'h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none',
                            value: e,
                            onChange: (l) => {
                              n((t) => {
                                let r = d(e).format(a);
                                return { ...t, from: l.target.value, to: r };
                              });
                            },
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className: 'col-span-1',
                          children:
                            'html' === a
                              ? (0, t.jsx)(h, { csv: e })
                              : (0, t.jsx)('textarea', {
                                  id: 'to',
                                  name: 'to',
                                  placeholder: 'To',
                                  className:
                                    'h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none',
                                  value: l,
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
    9524: (e, l, a) => {
      'use strict';
      a.d(l, { F: () => c });
      var t = a(5640),
        r = a(2635),
        n = a(7864),
        s = a.n(n);
      let c = () =>
        (0, t.jsx)('nav', {
          className: 'border-b border-neutral-800 shadow-sm',
          children: (0, t.jsx)('div', {
            className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
            children: (0, t.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2 md:gap-x-4',
              children: [
                (0, t.jsx)(s(), { href: '/', children: (0, t.jsx)('h1', { className: 'font-black', children: r.C3 }) }),
                (0, t.jsx)('div', {
                  className: 'flex items-center gap-x-2 text-sm text-neutral-500 md:gap-x-4 md:text-base',
                  children: [
                    { id: 'csv', href: '/csv', label: 'CSV' },
                    { id: 'json', href: '/json', label: 'JSON' },
                    { id: 'yaml', href: '/yaml', label: 'YAML' },
                    { id: 'manifest', href: '/manifest', label: 'Manifest' },
                  ].map((e) => {
                    let { id: l = '', href: a = '', label: r = '' } = e;
                    return (0, t.jsx)(
                      s(),
                      { href: a, className: 'text-neutral-500 hover:text-neutral-100', children: r },
                      l,
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
    var l = (l) => e((e.s = l));
    (e.O(0, [864, 636, 593, 792], () => l(91)), (_N_E = e.O()));
  },
]);
