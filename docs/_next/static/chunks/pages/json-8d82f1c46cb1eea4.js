(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [310],
  {
    3725: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/json',
        function () {
          return r(9023);
        },
      ]);
    },
    8732: (e, t, r) => {
      'use strict';
      r.d(t, { Pq: () => A, Gl: () => N });
      let n = {
          ARRAY: 'array',
          BOOLEAN: 'boolean',
          DATE: 'date',
          FUNCTION: 'function',
          JSTOXML_OBJECT: 'jstoxml-object',
          NULL: 'null',
          NUMBER: 'number',
          OBJECT: 'object',
          STRING: 'string',
        },
        a = [n.STRING, n.NUMBER, n.BOOLEAN],
        l = ['_selfCloseTag', '_attrs'],
        s = (e = '', t = 0) => e.repeat(t),
        o = (e) =>
          (Array.isArray(e) && n.ARRAY) ||
          (typeof e === n.OBJECT && null !== e && e._name && n.JSTOXML_OBJECT) ||
          (e instanceof Date && n.DATE) ||
          (null === e && n.NULL) ||
          typeof e,
        i = (e) => e.startsWith('<![CDATA['),
        c = (e = '', t = {}, r) => {
          let a = e;
          if (typeof e === n.STRING) {
            if (i(e)) return e;
            let r = RegExp(`(${Object.keys(t).join('|')})(?!(\\w|#)*;)`, 'g');
            a = String(e).replace(r, (e, r) => t[r] || '');
          }
          return 'function' == typeof r ? r(a) : a;
        },
        u = (e = {}, t, r, a) =>
          (Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({ [e]: t }))).reduce((e, l) => {
            let s = Object.keys(l)[0],
              o = l[s];
            if (typeof r === n.FUNCTION && r(s, o)) return e;
            let i = t ? c(o, t) : o,
              u = a || !0 !== i ? `="${i}"` : '';
            return (e.push(`${s}${u}`), e);
          }, []),
        d = (e = {}, t, r, n) => {
          let a = u(e, t, r, n);
          if (0 === a.length) return '';
          let l = a.join(' ');
          return ` ${l}`;
        },
        f = (e = {}) => Object.keys(e).map((t) => ({ _name: t, _content: e[t] })),
        m = (e) => a.includes(o(e)),
        p = (e) => !e.match('<'),
        y = ({ header: e, isOutputStart: t }) =>
          e && t ? (typeof e === n.BOOLEAN ? '<?xml version="1.0" encoding="UTF-8"?>' : e) : '',
        h = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' },
        x = (e = {}, t = {}) => {
          let {
              depth: r = 0,
              indent: a,
              _isFirstItem: u,
              _isOutputStart: b = !0,
              header: N,
              attributeReplacements: O = {},
              attributeFilter: g,
              attributeExplicitTrue: j = !1,
              contentReplacements: v = {},
              contentMap: _,
              selfCloseTags: S = !0,
            } = t,
            w = 'boolean' != typeof O || O ? { ...h, ...O } : {},
            A = 'boolean' != typeof v || v ? { ...h, ...v } : {},
            T = 'string' == typeof a,
            J = s(a, r),
            $ = o(e),
            C = y({ header: N, indent: a, depth: r, isOutputStart: b }),
            E = b && !C && u && 0 === r,
            k = T && !E ? '\n' : '',
            L = '';
          switch ($) {
            case n.JSTOXML_OBJECT: {
              let { _name: a, _content: s } = e;
              if (null === s && 'function' != typeof _) {
                L = `${k}${J}${a}`;
                break;
              }
              if (Array.isArray(s) && s.every(m))
                return s.map((e) => x({ _name: a, _content: e }, { ...t, depth: r, _isOutputStart: !1 })).join('');
              if (l.includes(a)) break;
              let c = x(s, { ...t, depth: r + 1, _isOutputStart: E }),
                u = o(c),
                f = p(c),
                y = i(c),
                h = `${k}${J}`;
              if ('_comment' === a) {
                L += `${h}<!-- ${s} -->`;
                break;
              }
              let b = 'undefined' === u || '' === c,
                N = e._selfCloseTag,
                O = typeof N === n.BOOLEAN ? b && N : b && S,
                v = d(e._attrs, w, g, j),
                A = `<${a}${v}${O ? '/' : ''}>`,
                $ =
                  !T || f || y
                    ? ''
                    : `
${J}`,
                C = O ? '' : `${c}${$}</${a}>`;
              L += `${h}${A}${C}`;
              break;
            }
            case n.OBJECT: {
              let r = Object.keys(e);
              L = r
                .map((a, s) => {
                  let i = { ...t, _isFirstItem: 0 === s, _isLastItem: s + 1 === r.length, _isOutputStart: E },
                    c = { _name: a };
                  if (
                    o(e[a]) === n.OBJECT &&
                    (l.forEach((t) => {
                      let r = e[a][t];
                      void 0 !== r && ((c[t] = r), delete e[a][t]);
                    }),
                    void 0 !== e[a]._content && Object.keys(e[a]).length > 1)
                  ) {
                    let t = Object.assign({}, e[a]);
                    (delete t._content, (c._content = [...f(t), e[a]._content]));
                  }
                  return (void 0 === c._content && (c._content = e[a]), x(c, i));
                }, t)
                .join('');
              break;
            }
            case n.FUNCTION:
              L = x(e(t), t);
              break;
            case n.ARRAY:
              L = e
                .map((r, n) =>
                  x(r, { ...t, _isFirstItem: 0 === n, _isLastItem: n + 1 === e.length, _isOutputStart: E }),
                )
                .join('');
              break;
            default:
              L = c(e, A, _);
          }
          return `${C}${L}`;
        };
      var b = r(9e3);
      let N = (e, t) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return (console.error('error', e), t);
          }
        },
        O = { delimiter: ',', headers: [], quote: '"' },
        g = function (e) {
          let {
            delimiter: t = ',',
            headers: r = [],
            quote: n = '"',
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
          0 === r.length && (r = [...new Set(e.flatMap((e) => Object.keys(e)))]);
          let a = r.map((e) => ''.concat(n).concat(e).concat(n)).join(t),
            l = e
              .map((e) =>
                r
                  .map((t) => {
                    let r = (e[t] || '').toString();
                    return ''.concat(n).concat(r).concat(n);
                  })
                  .join(t),
              )
              .join('\n');
          return ''.concat(a, '\n').concat(l);
        },
        j = (e) => {
          let t = JSON.parse(e),
            r = Object.keys(t).sort((e, t) => (e > t ? 1 : -1)),
            n = {};
          for (let e of r) n[e] = t[e];
          return JSON.stringify(n, null, 2);
        },
        v = (e) => JSON.stringify(JSON.parse(e), null, 2),
        _ = (e) => JSON.stringify(JSON.parse(e)),
        S = (e) => x(N(e, {}), { indent: '  ' }),
        w = (e) => (0, b.As)(N(e, {})),
        A = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            parse: () => N(JSON.stringify(e), t),
            format: () => ({
              beautify: () => v(JSON.stringify(e)),
              minify: () => _(JSON.stringify(e)),
              sort: () => j(JSON.stringify(e)),
            }),
            convert: (t) => {
              try {
                if ('csv' === t) {
                  if (Array.isArray(e)) {
                    if (0 === e.length) return 'Empty List';
                    return g(e);
                  }
                  return 'Not A List';
                }
                if ('xml' === t) return S(JSON.stringify(e));
                if ('yaml' === t) return w(JSON.stringify(e));
                return 'Invalid Format';
              } catch (e) {
                return (console.error(e), e.message);
              }
            },
          };
        };
    },
    9023: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { default: () => c }));
      var n = r(5640),
        a = r(9524),
        l = r(2635),
        s = r(8732),
        o = r(148);
      let i = 'yaml',
        c = () => {
          let [
            {
              data: e = l.wY,
              from: t = (0, s.Pq)(l.wY).format().beautify(),
              to: r = (0, s.Pq)(l.wY).convert(i),
              format: c = i,
            },
            u,
          ] = (0, o.useState)({
            data: l.wY,
            from: (0, s.Pq)(l.wY).format().beautify(),
            to: (0, s.Pq)(l.wY).convert(i),
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
                            let t = (0, s.Pq)(e).format().beautify();
                            u((e) => ({ ...e, from: t }));
                          },
                          children: 'Beautify',
                        }),
                        (0, n.jsx)('button', {
                          type: 'button',
                          className: 'cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                          onClick: () => {
                            let t = (0, s.Pq)(e).format().minify();
                            u((e) => ({ ...e, from: t }));
                          },
                          children: 'Minify',
                        }),
                        (0, n.jsx)('button', {
                          type: 'button',
                          className: 'cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                          onClick: () => {
                            let t = (0, s.Pq)(e).format().sort();
                            u((e) => ({ ...e, from: t }));
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
                        u((r) => {
                          let n = e.target.value,
                            a = (0, s.Gl)(t, []),
                            l = (0, s.Pq)(a).convert(n);
                          return { ...r, data: a, format: n, to: l };
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
                            value: t,
                            onChange: (e) => {
                              let t = e.target.value,
                                r = (0, s.Gl)(t, []),
                                n = (0, s.Pq)(r).convert(c);
                              u((e) => ({ ...e, from: t, to: n, data: r }));
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
                            value: r,
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
    9524: (e, t, r) => {
      'use strict';
      r.d(t, { F: () => o });
      var n = r(5640),
        a = r(2635),
        l = r(7864),
        s = r.n(l);
      let o = () =>
        (0, n.jsx)('nav', {
          className: 'border-b border-neutral-800 shadow-sm',
          children: (0, n.jsx)('div', {
            className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
            children: (0, n.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2 md:gap-x-4',
              children: [
                (0, n.jsx)(s(), { href: '/', children: (0, n.jsx)('h1', { className: 'font-black', children: a.C3 }) }),
                (0, n.jsx)('div', {
                  className: 'flex items-center gap-x-2 text-sm text-neutral-500 md:gap-x-4 md:text-base',
                  children: [
                    { id: 'csv', href: '/csv', label: 'CSV' },
                    { id: 'json', href: '/json', label: 'JSON' },
                    { id: 'yaml', href: '/yaml', label: 'YAML' },
                    { id: 'manifest', href: '/manifest', label: 'Manifest' },
                  ].map((e) => {
                    let { id: t = '', href: r = '', label: a = '' } = e;
                    return (0, n.jsx)(
                      s(),
                      { href: r, className: 'text-neutral-500 hover:text-neutral-100', children: a },
                      t,
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
    var t = (t) => e((e.s = t));
    (e.O(0, [864, 0, 636, 593, 792], () => t(3725)), (_N_E = e.O()));
  },
]);
