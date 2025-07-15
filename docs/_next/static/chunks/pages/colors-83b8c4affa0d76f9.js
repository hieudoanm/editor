(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [196],
  {
    2283: (e, t, l) => {
      'use strict';
      l.d(t, { c: () => n });
      var a = l(5640);
      let n = () => (0, a.jsx)('div', { className: 'w-full border-t border-neutral-800' });
    },
    4433: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/colors',
        function () {
          return l(6596);
        },
      ]);
    },
    4850: (e, t, l) => {
      'use strict';
      l.d(t, { F: () => o });
      var a = l(5640),
        n = l(4539),
        c = l(9064),
        s = l.n(c);
      let r = [
          { id: 'colors', href: '/colors', label: 'Colors' },
          { id: 'csv', href: '/csv', label: 'CSV' },
          { id: 'json', href: '/json', label: 'JSON' },
          { id: 'yaml', href: '/yaml', label: 'YAML' },
          { id: 'manifest', href: '/manifest', label: 'Manifest' },
        ],
        o = () =>
          (0, a.jsx)('nav', {
            className: 'container mx-auto px-6 py-4',
            children: (0, a.jsxs)('div', {
              className: 'flex items-center justify-between',
              children: [
                (0, a.jsx)('div', {
                  className: 'text-xl font-bold',
                  children: (0, a.jsx)(s(), { href: '/', children: n.C3 }),
                }),
                (0, a.jsx)('div', {
                  className: 'hidden space-x-4 md:flex',
                  children: r.map((e) => {
                    let { id: t, href: l, label: n } = e;
                    return (0, a.jsx)(s(), { href: l, className: 'hover:underline', children: n }, t);
                  }),
                }),
              ],
            }),
          });
    },
    6596: (e, t, l) => {
      'use strict';
      (l.r(t), l.d(t, { HomePage: () => x, default: () => p }));
      var a = l(5640),
        n = l(2283),
        c = l(4850);
      let s = (e) => {
          (3 === (e = e.replace('#', '')).length &&
            (e = ''.concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2])),
            3 === e.length && (e = ''.concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2])));
          let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
        },
        r = (e) => {
          3 === (e = e.replace(/^#/, '')).length &&
            (e = e
              .split('')
              .map((e) => e + e)
              .join(''));
          let t = parseInt(e.substring(0, 2), 16) / 255,
            l = parseInt(e.substring(2, 4), 16) / 255,
            a = parseInt(e.substring(4, 6), 16) / 255,
            n = Math.max(t, l, a),
            c = Math.min(t, l, a),
            s = 0,
            r = 0,
            o = (n + c) / 2,
            i = n - c;
          if (0 !== i)
            switch (((r = i / (1 - Math.abs(2 * o - 1))), n)) {
              case t:
                s = ((l - a) / i + 6 * (l < a)) * 60;
                break;
              case l:
                s = ((a - t) / i + 2) * 60;
                break;
              case a:
                s = ((t - l) / i + 4) * 60;
            }
          let d = Math.round(100 * o);
          return { h: (s = Math.round(s)), s: (r = Math.round(100 * r)), l: d };
        },
        o = (e) => {
          3 === (e = e.replace(/^#/, '')).length &&
            (e = e
              .split('')
              .map((e) => e + e)
              .join(''));
          let t = parseInt(e.slice(0, 2), 16) / 255,
            l = parseInt(e.slice(2, 4), 16) / 255,
            a = parseInt(e.slice(4, 6), 16) / 255,
            n = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)),
            c = n(t),
            s = n(l),
            r = n(a),
            o = Math.cbrt(0.4122214708 * c + 0.5363325363 * s + 0.0514459929 * r),
            i = Math.cbrt(0.2119034982 * c + 0.6806995451 * s + 0.1073969566 * r),
            d = Math.cbrt(0.0883024619 * c + 0.2817188376 * s + 0.6299787005 * r),
            h = 1.9779984951 * o - 2.428592205 * i + 0.4505937099 * d,
            u = 0.0259040371 * o + 0.7827717662 * i - 0.808675766 * d,
            x = Math.sqrt(h * h + u * u),
            p = (180 / Math.PI) * Math.atan2(u, h);
          return {
            l: parseFloat((0.2104542553 * o + 0.793617785 * i - 0.0040720468 * d).toFixed(4)),
            c: parseFloat(x.toFixed(4)),
            h: parseFloat(((p + 360) % 360).toFixed(2)),
          };
        },
        i = (e) => {
          let t = e.startsWith('#') ? e.substring(1) : e;
          3 === t.length && (t = ''.concat(t[0]).concat(t[0]).concat(t[1]).concat(t[1]).concat(t[2]).concat(t[2]));
          let l = parseInt(t, 16);
          return 0.299 * ((l >> 16) & 255) + 0.587 * ((l >> 8) & 255) + 0.114 * ((0 | l) & 255) < 186;
        },
        d = () => {
          let e = (1048575 * Math.random() * 1e6).toString(16);
          return '#'.concat(e.slice(0, 6));
        };
      var h = l(148);
      let u = '#171717',
        x = () => {
          let [{ hex: e = u, hsl: t = r(u), rgb: l = s(u), oklch: x = o(u) }, p] = (0, h.useState)({
            hex: u,
            hsl: r(u),
            rgb: s(u),
            oklch: o(u),
          });
          return (
            (0, h.useEffect)(() => {
              let e = (e) => {
                if ('Space' === e.code || ' ' === e.key) {
                  let e = d();
                  p((t) => ({ ...t, hex: e, hsl: r(e), rgb: s(e), oklch: o(e) }));
                }
              };
              return (
                window.addEventListener('keydown', e),
                () => {
                  window.removeEventListener('keydown', e);
                }
              );
            }, []),
            (0, a.jsxs)('div', {
              className: 'flex h-screen w-screen flex-col',
              children: [
                (0, a.jsx)(c.F, {}),
                (0, a.jsx)(n.c, {}),
                (0, a.jsx)('div', {
                  className: 'grow',
                  children: (0, a.jsx)('div', {
                    className: 'flex h-full items-center justify-center p-4 md:p-8',
                    style: { backgroundColor: e, color: i(e) ? '#ffffff' : '#101828' },
                    children: (0, a.jsxs)('div', {
                      className:
                        'flex w-full max-w-md flex-col divide-y divide-dotted rounded-xl border border-dotted text-center',
                      children: [
                        (0, a.jsx)('input', {
                          id: 'hex',
                          name: 'hex',
                          placeholder: 'HEX',
                          className: 'w-full px-3 py-1 text-center text-sm uppercase focus:outline-none',
                          value: e,
                          onChange: (e) => {
                            let t = e.target.value;
                            p((e) => ({ ...e, hex: t, hsl: r(t), rgb: s(t), oklch: o(t) }));
                          },
                        }),
                        (0, a.jsx)('input', {
                          id: 'rgb',
                          name: 'rgb',
                          placeholder: 'RGB',
                          className: 'w-full px-3 py-1 text-center text-sm focus:outline-none',
                          value: 'rgb('
                            .concat(null == l ? void 0 : l.r, ', ')
                            .concat(null == l ? void 0 : l.g, ', ')
                            .concat(null == l ? void 0 : l.b, ')'),
                          readOnly: !0,
                        }),
                        (0, a.jsx)('input', {
                          id: 'hsl',
                          name: 'hsl',
                          placeholder: 'HSL',
                          className: 'w-full px-3 py-1 text-center text-sm focus:outline-none',
                          value: 'hsl('
                            .concat(null == t ? void 0 : t.h, ', ')
                            .concat(null == t ? void 0 : t.s, ', ')
                            .concat(null == t ? void 0 : t.l, '%)'),
                          readOnly: !0,
                        }),
                        (0, a.jsx)('input', {
                          id: 'oklch',
                          name: 'oklch',
                          placeholder: 'HSL',
                          className: 'w-full px-3 py-1 text-center text-sm focus:outline-none',
                          value: 'oklch('
                            .concat(null == x ? void 0 : x.l, ', ')
                            .concat(null == x ? void 0 : x.c, ', ')
                            .concat(null == x ? void 0 : x.h, '%)'),
                          readOnly: !0,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        p = x;
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [64, 636, 593, 792], () => t(4433)), (_N_E = e.O()));
  },
]);
