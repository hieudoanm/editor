(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [583],
  {
    6658: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { default: () => o }));
      var n = r(5640),
        a = r(9524),
        s = r(2635),
        l = r(8732),
        i = r(148);
      let o = () => {
        let [{ manifest: e = '', type: t = '' }, r] = (0, i.useState)({
          manifest: (0, l.Pq)(s.lP).format().beautify(),
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
                          let t = (0, l.Pq)((0, l.Gl)(e, []))
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
                          let t = (0, l.Pq)((0, l.Gl)(e, []))
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
                          let t = (0, l.Pq)((0, l.Gl)(e, []))
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
                              ? (0, l.Pq)(s.lP, {}).format().beautify()
                              : (0, l.Pq)(s._z, {}).format().beautify();
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
    8732: (e, t, r) => {
      'use strict';
      r.d(t, { Pq: () => E, Gl: () => N });
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
              _isOutputStart: x = !0,
              header: N,
              attributeReplacements: O = {},
              attributeFilter: j,
              attributeExplicitTrue: g = !1,
              contentReplacements: _ = {},
              contentMap: S,
              selfCloseTags: v = !0,
            } = t,
            A = 'boolean' != typeof O || O ? { ...b, ...O } : {},
            E = 'boolean' != typeof _ || _ ? { ...b, ..._ } : {},
            J = 'string' == typeof a,
            T = l(a, r),
            $ = i(e),
            k = y({ header: N, indent: a, depth: r, isOutputStart: x }),
            C = x && !k && u && 0 === r,
            w = J && !C ? '\n' : '',
            L = '';
          switch ($) {
            case n.JSTOXML_OBJECT: {
              let { _name: a, _content: l } = e;
              if (null === l && 'function' != typeof S) {
                L = `${w}${T}${a}`;
                break;
              }
              if (Array.isArray(l) && l.every(m))
                return l.map((e) => h({ _name: a, _content: e }, { ...t, depth: r, _isOutputStart: !1 })).join('');
              if (s.includes(a)) break;
              let c = h(l, { ...t, depth: r + 1, _isOutputStart: C }),
                u = i(c),
                d = p(c),
                y = o(c),
                b = `${w}${T}`;
              if ('_comment' === a) {
                L += `${b}<!-- ${l} -->`;
                break;
              }
              let x = 'undefined' === u || '' === c,
                N = e._selfCloseTag,
                O = typeof N === n.BOOLEAN ? x && N : x && v,
                _ = f(e._attrs, A, j, g),
                E = `<${a}${_}${O ? '/' : ''}>`,
                $ =
                  !J || d || y
                    ? ''
                    : `
${T}`,
                k = O ? '' : `${c}${$}</${a}>`;
              L += `${b}${E}${k}`;
              break;
            }
            case n.OBJECT: {
              let r = Object.keys(e);
              L = r
                .map((a, l) => {
                  let o = { ...t, _isFirstItem: 0 === l, _isLastItem: l + 1 === r.length, _isOutputStart: C },
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
                  h(r, { ...t, _isFirstItem: 0 === n, _isLastItem: n + 1 === e.length, _isOutputStart: C }),
                )
                .join('');
              break;
            default:
              L = c(e, E, S);
          }
          return `${k}${L}`;
        };
      var x = r(9e3);
      let N = (e, t) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return (console.error('error', e), t);
          }
        },
        O = { delimiter: ',', headers: [], quote: '"' },
        j = function (e) {
          let {
            delimiter: t = ',',
            headers: r = [],
            quote: n = '"',
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
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
        S = (e) => JSON.stringify(JSON.parse(e)),
        v = (e) => h(N(e, {}), { indent: '  ' }),
        A = (e) => (0, x.As)(N(e, {})),
        E = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            parse: () => N(JSON.stringify(e), t),
            format: () => ({
              beautify: () => _(JSON.stringify(e)),
              minify: () => S(JSON.stringify(e)),
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
                if ('xml' === t) return v(JSON.stringify(e));
                if ('yaml' === t) return A(JSON.stringify(e));
                return 'Invalid Format';
              } catch (e) {
                return (console.error(e), e.message);
              }
            },
          };
        };
    },
    9524: (e, t, r) => {
      'use strict';
      r.d(t, { F: () => i });
      var n = r(5640),
        a = r(2635),
        s = r(7864),
        l = r.n(s);
      let i = () =>
        (0, n.jsx)('nav', {
          className: 'border-b border-neutral-800 shadow-sm',
          children: (0, n.jsx)('div', {
            className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
            children: (0, n.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2 md:gap-x-4',
              children: [
                (0, n.jsx)(l(), { href: '/', children: (0, n.jsx)('h1', { className: 'font-black', children: a.C3 }) }),
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
                      l(),
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
    9719: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/manifest',
        function () {
          return r(6658);
        },
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [864, 0, 636, 593, 792], () => t(9719)), (_N_E = e.O()));
  },
]);
