(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [583],
  {
    1202: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { default: () => c }));
      var n = r(5640),
        a = r(2283),
        s = r(4850),
        l = r(4539),
        i = r(5494),
        o = r(148);
      let c = () => {
        let [{ manifest: e = '', type: t = '' }, r] = (0, o.useState)({
          manifest: (0, i.Pq)(l.lP).format().beautify(),
          type: 'extension',
        });
        return (0, n.jsxs)('div', {
          className: 'flex h-screen w-screen flex-col',
          children: [
            (0, n.jsx)(s.F, {}),
            (0, n.jsx)(a.c, {}),
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
                          let t = (0, i.Pq)((0, i.Gl)(e, []))
                            .format()
                            .beautify();
                          r((e) => ({ ...e, manifest: t }));
                        },
                        children: 'Beautify',
                      }),
                      (0, n.jsx)('button', {
                        type: 'button',
                        className: 'cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                        onClick: () => {
                          let t = (0, i.Pq)((0, i.Gl)(e, []))
                            .format()
                            .minify();
                          r((e) => ({ ...e, manifest: t }));
                        },
                        children: 'Minify',
                      }),
                      (0, n.jsx)('button', {
                        type: 'button',
                        className: 'cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                        onClick: () => {
                          let t = (0, i.Pq)((0, i.Gl)(e, []))
                            .format()
                            .sort();
                          r((e) => ({ ...e, manifest: t }));
                        },
                        children: 'Sort',
                      }),
                    ],
                  }),
                  (0, n.jsxs)('select', {
                    id: 'file-format',
                    name: 'file-format',
                    className: 'appearance-none rounded-full border border-neutral-800 px-4 py-2',
                    value: t,
                    onChange: (e) =>
                      r((t) => {
                        let r = e.target.value,
                          n =
                            'extension' === r
                              ? (0, i.Pq)(l.lP, {}).format().beautify()
                              : (0, i.Pq)(l._z, {}).format().beautify();
                        return { ...t, type: r, manifest: n };
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
                      let t = e.target.value;
                      r((e) => ({ ...e, manifest: t }));
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    2283: (e, t, r) => {
      'use strict';
      r.d(t, { c: () => a });
      var n = r(5640);
      let a = () => (0, n.jsx)('div', { className: 'w-full border-t border-neutral-800' });
    },
    4116: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/manifest',
        function () {
          return r(1202);
        },
      ]);
    },
    4850: (e, t, r) => {
      'use strict';
      r.d(t, { F: () => o });
      var n = r(5640),
        a = r(4539),
        s = r(9064),
        l = r.n(s);
      let i = [
          { id: 'colors', href: '/colors', label: 'Colors' },
          { id: 'csv', href: '/csv', label: 'CSV' },
          { id: 'json', href: '/json', label: 'JSON' },
          { id: 'yaml', href: '/yaml', label: 'YAML' },
          { id: 'manifest', href: '/manifest', label: 'Manifest' },
        ],
        o = () =>
          (0, n.jsx)('nav', {
            className: 'container mx-auto px-6 py-4',
            children: (0, n.jsxs)('div', {
              className: 'flex items-center justify-between',
              children: [
                (0, n.jsx)('div', {
                  className: 'text-xl font-bold',
                  children: (0, n.jsx)(l(), { href: '/', children: a.C3 }),
                }),
                (0, n.jsx)('div', {
                  className: 'hidden space-x-4 md:flex',
                  children: i.map((e) => {
                    let { id: t, href: r, label: a } = e;
                    return (0, n.jsx)(l(), { href: r, className: 'hover:underline', children: a }, t);
                  }),
                }),
              ],
            }),
          });
    },
    5494: (e, t, r) => {
      'use strict';
      r.d(t, { Pq: () => E, Gl: () => O });
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
        s = ['_selfCloseTag', '_attrs'],
        l = (e = '', t = 0) => e.repeat(t),
        i = (e) =>
          (Array.isArray(e) && n.ARRAY) ||
          (typeof e === n.OBJECT && null !== e && e._name && n.JSTOXML_OBJECT) ||
          (e instanceof Date && n.DATE) ||
          (null === e && n.NULL) ||
          typeof e,
        o = (e) => e.startsWith('<![CDATA['),
        c = (e = '', t = {}, r) => {
          let a = e;
          if (typeof e === n.STRING) {
            if (o(e)) return e;
            let r = RegExp(`(${Object.keys(t).join('|')})(?!(\\w|#)*;)`, 'g');
            a = String(e).replace(r, (e, r) => t[r] || '');
          }
          return 'function' == typeof r ? r(a) : a;
        },
        u = (e = {}, t, r, a) =>
          (Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({ [e]: t }))).reduce((e, s) => {
            let l = Object.keys(s)[0],
              i = s[l];
            if (typeof r === n.FUNCTION && r(l, i)) return e;
            let o = t ? c(i, t) : i,
              u = a || !0 !== o ? `="${o}"` : '';
            return (e.push(`${l}${u}`), e);
          }, []),
        f = (e = {}, t, r, n) => {
          let a = u(e, t, r, n);
          if (0 === a.length) return '';
          let s = a.join(' ');
          return ` ${s}`;
        },
        d = (e = {}) => Object.keys(e).map((t) => ({ _name: t, _content: e[t] })),
        m = (e) => a.includes(i(e)),
        p = (e) => !e.match('<'),
        y = ({ header: e, isOutputStart: t }) =>
          e && t ? (typeof e === n.BOOLEAN ? '<?xml version="1.0" encoding="UTF-8"?>' : e) : '',
        b = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' },
        h = (e = {}, t = {}) => {
          let {
              depth: r = 0,
              indent: a,
              _isFirstItem: u,
              _isOutputStart: N = !0,
              header: O,
              attributeReplacements: x = {},
              attributeFilter: j,
              attributeExplicitTrue: g = !1,
              contentReplacements: _ = {},
              contentMap: v,
              selfCloseTags: S = !0,
            } = t,
            A = 'boolean' != typeof x || x ? { ...b, ...x } : {},
            E = 'boolean' != typeof _ || _ ? { ...b, ..._ } : {},
            J = 'string' == typeof a,
            T = l(a, r),
            $ = i(e),
            C = y({ header: O, indent: a, depth: r, isOutputStart: N }),
            k = N && !C && u && 0 === r,
            w = J && !k ? '\n' : '',
            L = '';
          switch ($) {
            case n.JSTOXML_OBJECT: {
              let { _name: a, _content: l } = e;
              if (null === l && 'function' != typeof v) {
                L = `${w}${T}${a}`;
                break;
              }
              if (Array.isArray(l) && l.every(m))
                return l.map((e) => h({ _name: a, _content: e }, { ...t, depth: r, _isOutputStart: !1 })).join('');
              if (s.includes(a)) break;
              let c = h(l, { ...t, depth: r + 1, _isOutputStart: k }),
                u = i(c),
                d = p(c),
                y = o(c),
                b = `${w}${T}`;
              if ('_comment' === a) {
                L += `${b}<!-- ${l} -->`;
                break;
              }
              let N = 'undefined' === u || '' === c,
                O = e._selfCloseTag,
                x = typeof O === n.BOOLEAN ? N && O : N && S,
                _ = f(e._attrs, A, j, g),
                E = `<${a}${_}${x ? '/' : ''}>`,
                $ =
                  !J || d || y
                    ? ''
                    : `
${T}`,
                C = x ? '' : `${c}${$}</${a}>`;
              L += `${b}${E}${C}`;
              break;
            }
            case n.OBJECT: {
              let r = Object.keys(e);
              L = r
                .map((a, l) => {
                  let o = { ...t, _isFirstItem: 0 === l, _isLastItem: l + 1 === r.length, _isOutputStart: k },
                    c = { _name: a };
                  if (
                    i(e[a]) === n.OBJECT &&
                    (s.forEach((t) => {
                      let r = e[a][t];
                      void 0 !== r && ((c[t] = r), delete e[a][t]);
                    }),
                    void 0 !== e[a]._content && Object.keys(e[a]).length > 1)
                  ) {
                    let t = Object.assign({}, e[a]);
                    (delete t._content, (c._content = [...d(t), e[a]._content]));
                  }
                  return (void 0 === c._content && (c._content = e[a]), h(c, o));
                }, t)
                .join('');
              break;
            }
            case n.FUNCTION:
              L = h(e(t), t);
              break;
            case n.ARRAY:
              L = e
                .map((r, n) =>
                  h(r, { ...t, _isFirstItem: 0 === n, _isLastItem: n + 1 === e.length, _isOutputStart: k }),
                )
                .join('');
              break;
            default:
              L = c(e, E, v);
          }
          return `${C}${L}`;
        };
      var N = r(9e3);
      let O = (e, t) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return (console.error('error', e), t);
          }
        },
        x = { delimiter: ',', headers: [], quote: '"' },
        j = function (e) {
          let {
            delimiter: t = ',',
            headers: r = [],
            quote: n = '"',
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
          0 === r.length && (r = [...new Set(e.flatMap((e) => Object.keys(e)))]);
          let a = r.map((e) => ''.concat(n).concat(e).concat(n)).join(t),
            s = e
              .map((e) =>
                r
                  .map((t) => {
                    let r = (e[t] || '').toString();
                    return ''.concat(n).concat(r).concat(n);
                  })
                  .join(t),
              )
              .join('\n');
          return ''.concat(a, '\n').concat(s);
        },
        g = (e) => {
          let t = JSON.parse(e),
            r = Object.keys(t).sort((e, t) => (e > t ? 1 : -1)),
            n = {};
          for (let e of r) n[e] = t[e];
          return JSON.stringify(n, null, 2);
        },
        _ = (e) => JSON.stringify(JSON.parse(e), null, 2),
        v = (e) => JSON.stringify(JSON.parse(e)),
        S = (e) => h(O(e, {}), { indent: '  ' }),
        A = (e) => (0, N.As)(O(e, {})),
        E = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            parse: () => O(JSON.stringify(e), t),
            format: () => ({
              beautify: () => _(JSON.stringify(e)),
              minify: () => v(JSON.stringify(e)),
              sort: () => g(JSON.stringify(e)),
            }),
            convert: (t) => {
              try {
                if ('csv' === t) {
                  if (Array.isArray(e)) {
                    if (0 === e.length) return 'Empty List';
                    return j(e);
                  }
                  return 'Not A List';
                }
                if ('xml' === t) return S(JSON.stringify(e));
                if ('yaml' === t) return A(JSON.stringify(e));
                return 'Invalid Format';
              } catch (e) {
                return (console.error(e), e.message);
              }
            },
          };
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [64, 0, 636, 593, 792], () => t(4116)), (_N_E = e.O()));
  },
]);
