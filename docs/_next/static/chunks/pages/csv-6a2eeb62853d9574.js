(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [408],
  {
    2283: (e, l, a) => {
      'use strict';
      a.d(l, { c: () => t });
      var r = a(5640);
      let t = () => (0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' });
    },
    3867: (e, l, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/csv',
        function () {
          return a(8119);
        },
      ]);
    },
    4850: (e, l, a) => {
      'use strict';
      a.d(l, { F: () => o });
      var r = a(5640),
        t = a(4539),
        n = a(9064),
        s = a.n(n);
      let c = [
          { id: 'colors', href: '/colors', label: 'Colors' },
          { id: 'csv', href: '/csv', label: 'CSV' },
          { id: 'json', href: '/json', label: 'JSON' },
          { id: 'yaml', href: '/yaml', label: 'YAML' },
          { id: 'manifest', href: '/manifest', label: 'Manifest' },
        ],
        o = () =>
          (0, r.jsx)('nav', {
            className: 'container mx-auto px-6 py-4',
            children: (0, r.jsxs)('div', {
              className: 'flex items-center justify-between',
              children: [
                (0, r.jsx)('div', {
                  className: 'text-xl font-bold',
                  children: (0, r.jsx)(s(), { href: '/', children: t.C3 }),
                }),
                (0, r.jsx)('div', {
                  className: 'hidden space-x-4 md:flex',
                  children: c.map((e) => {
                    let { id: l, href: a, label: t } = e;
                    return (0, r.jsx)(s(), { href: a, className: 'hover:underline', children: t }, l);
                  }),
                }),
              ],
            }),
          });
    },
    8119: (e, l, a) => {
      'use strict';
      (a.r(l), a.d(l, { INITIAL_CSV: () => h, default: () => v }));
      var r = a(5640),
        t = a(2283),
        n = a(4850);
      let s = (e) => {
          var l;
          if (!(null == (l = navigator) ? void 0 : l.clipboard)) return alert('Incompatible');
          (navigator.clipboard.writeText(e), alert('Copy "'.concat(e, '" to Clipboard')));
        },
        c = { delimiter: ',', quote: '"' },
        o = function (e) {
          var l;
          let { delimiter: a = ',', quote: r = '"' } =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
            t = e.split('\n'),
            n = null != (l = t[0]) ? l : '';
          if (!n) return [];
          let s = t.splice(1),
            o = n.split(a);
          return s.map((e) => {
            let l = e.split(a),
              t = {};
            for (let [e, a] of o.entries()) {
              let n = RegExp(r, 'g');
              Object.assign(t, { [a.replace(n, '')]: (l[e] || '').toString().replace(n, '') });
            }
            return t;
          });
        },
        i = (e) => {
          var l;
          let a = o(e),
            r = Object.keys(null != (l = a[0]) ? l : {}),
            t = r.map((e) => {
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
              t.length > 0
                ? '| '.concat(
                    t
                      .map((e) => {
                        let { header: l = '', length: a = 0 } = e,
                          r = Math.max(0, a - l.length);
                        return ''.concat(l).concat(' '.repeat(r));
                      })
                      .join(' | '),
                    ' |',
                  )
                : '',
            s =
              r.length > 0
                ? '| '.concat(
                    t
                      .map((e) => {
                        let { length: l = 0 } = e;
                        return '-'.repeat(l);
                      })
                      .join(' | '),
                    ' |',
                  )
                : '',
            c = a
              .map((e) => {
                let l = t
                  .map((l) => {
                    var a, r;
                    let { header: t, length: n } = l,
                      s = null != (a = e[t]) ? a : '',
                      c = Math.max(0, n - (null != (r = s.length) ? r : 0));
                    return ''.concat(s).concat(' '.repeat(c));
                  })
                  .join(' | ');
                return '| '.concat(l, ' |');
              })
              .join('\n');
          return ''.concat(n, '\n').concat(s, '\n').concat(c);
        },
        d = (e) =>
          o(e)
            .map((e) => {
              let l = Object.keys(e),
                a = Object.values(e),
                r = l.map((e) => '"'.concat(e, '"')).join(', '),
                t = a.map((e) => '"'.concat(e, '"')).join(', ');
              return 'INSERT INTO schema.table ('.concat(r, ') VALUES (').concat(t, ')');
            })
            .join(';\n'),
        u = (e) => ({
          format: (l) => ('json' === l ? JSON.stringify(o(e), null, 2) : 'md' === l ? i(e) : 'sql' === l ? d(e) : e),
        });
      var m = a(148);
      let h =
          'header1,header2,header3,header4\nvalue1,value2,value3,value4\nvalue1,value2,value3,value4\nvalue1,value2,value3,value4\nvalue1,value2,value3,value4',
        p = (e) => {
          let { csv: l = '' } = e,
            a = o(l, { delimiter: ',' });
          return (0, r.jsxs)('div', {
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, r.jsx)('div', {
                className: 'w-full overflow-auto rounded border border-neutral-800',
                children: (0, r.jsxs)('table', {
                  id: 'csv-html-table',
                  className: 'w-full',
                  children: [
                    a[0]
                      ? (0, r.jsx)('thead', {
                          children: (0, r.jsx)('tr', {
                            children: Object.keys(a[0]).map((e) =>
                              (0, r.jsx)(
                                'th',
                                {
                                  align: 'left',
                                  children: (0, r.jsx)('p', { className: 'truncate p-2', title: e, children: e }),
                                },
                                e,
                              ),
                            ),
                          }),
                        })
                      : (0, r.jsx)(r.Fragment, {}),
                    (0, r.jsx)('tbody', {
                      children: a.map((e) =>
                        (0, r.jsx)(
                          'tr',
                          {
                            className: 'border-t border-neutral-800',
                            children: Object.values(e).map((e) =>
                              (0, r.jsx)(
                                'td',
                                { children: (0, r.jsx)('p', { className: 'truncate p-2', title: e, children: e }) },
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
              (0, r.jsx)('button', {
                type: 'button',
                className: 'cursor-pointer rounded-lg bg-neutral-100 px-4 py-2 text-neutral-900',
                onClick: () => {
                  var e, l;
                  s(
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
        v = () => {
          let [{ from: e = h, to: l = '', format: a = 'html' }, s] = (0, m.useState)({
            from: h,
            to: d(h),
            format: 'sql',
          });
          return (0, r.jsxs)('div', {
            className: 'flex h-screen w-screen flex-col',
            children: [
              (0, r.jsx)(n.F, {}),
              (0, r.jsx)(t.c, {}),
              (0, r.jsx)('main', {
                className: 'container mx-auto grow p-4 md:p-8',
                children: (0, r.jsxs)('div', {
                  className: 'flex h-full flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, r.jsxs)('select', {
                      id: 'file-format',
                      name: 'file-format',
                      className: 'appearance-none rounded-full border border-neutral-800 px-4 py-2',
                      value: a,
                      onChange: (l) =>
                        s((a) => {
                          let r = u(e).format(l.target.value);
                          return { ...a, format: l.target.value, to: r };
                        }),
                      children: [
                        (0, r.jsx)('option', { value: 'html', children: 'HTML' }),
                        (0, r.jsx)('option', { value: 'json', children: 'JSON' }),
                        (0, r.jsx)('option', { value: 'md', children: 'Markdown' }),
                        (0, r.jsx)('option', { value: 'sql', children: 'SQL' }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className: 'grid h-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8',
                      children: [
                        (0, r.jsx)('div', {
                          className: 'col-span-1',
                          children: (0, r.jsx)('textarea', {
                            id: 'from',
                            name: 'from',
                            placeholder: 'From',
                            className:
                              'h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none',
                            value: e,
                            onChange: (l) => {
                              s((r) => {
                                let t = u(e).format(a);
                                return { ...r, from: l.target.value, to: t };
                              });
                            },
                          }),
                        }),
                        (0, r.jsx)('div', {
                          className: 'col-span-1',
                          children:
                            'html' === a
                              ? (0, r.jsx)(p, { csv: e })
                              : (0, r.jsx)('textarea', {
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
  },
  (e) => {
    var l = (l) => e((e.s = l));
    (e.O(0, [64, 636, 593, 792], () => l(3867)), (_N_E = e.O()));
  },
]);
