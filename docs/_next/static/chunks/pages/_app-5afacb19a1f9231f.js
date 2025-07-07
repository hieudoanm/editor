(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    2147: () => {},
    2635: (e, a, t) => {
      'use strict';
      t.d(a, { C3: () => s, _z: () => o, lP: () => n, wY: () => l });
      let s = 'Converter',
        l = [
          { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
          { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
          { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
          { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
        ],
        n = {
          browser_specific_settings: { gecko: { id: 'addon@example.com', strict_min_version: '42.0' } },
          background: { scripts: ['jquery.js', 'my-background.js'] },
          browser_action: {
            default_icon: { 19: 'button/geo-19.png', 38: 'button/geo-38.png' },
            default_title: 'Whereami?',
            default_popup: 'popup/geo.html',
          },
          commands: {
            'toggle-feature': {
              suggested_key: { default: 'Ctrl+Shift+Y', linux: 'Ctrl+Shift+U' },
              description: "Send a 'toggle-feature' event",
            },
          },
          content_security_policy: "script-src 'self' https://example.com; object-src 'self'",
          content_scripts: [
            {
              exclude_matches: ['*://developer.mozilla.org/*'],
              matches: ['*://*.mozilla.org/*'],
              js: ['borderify.js'],
            },
          ],
          default_locale: 'en',
          description: '…',
          icons: { 48: 'icon.png', 96: 'icon@2x.png' },
          manifest_version: 2,
          name: '…',
          page_action: {
            default_icon: { 19: 'button/geo-19.png', 38: 'button/geo-38.png' },
            default_title: 'Whereami?',
            default_popup: 'popup/geo.html',
          },
          permissions: ['webNavigation'],
          version: '0.1',
          user_scripts: { api_script: 'apiscript.js' },
          web_accessible_resources: ['images/my-image.png'],
        },
        o = {
          short_name: 'MDN',
          name: 'MDN Web Docs',
          icons: [
            { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
          ],
          start_url: '.',
          display: 'standalone',
          theme_color: '#000000',
          background_color: '#ffffff',
        };
    },
    4626: (e, a, t) => {
      e.exports = t(5274);
    },
    6404: (e, a, t) => {
      'use strict';
      (t.r(a), t.d(a, { default: () => p }));
      var s = t(5640),
        l = t(2635);
      t(2147);
      var n = t(7332),
        o = t.n(n),
        i = t(8580),
        r = t.n(i),
        c = t(4626),
        u = t.n(c);
      let p = (e) => {
        let { Component: a, pageProps: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(u(), { children: (0, s.jsx)('title', { children: l.C3 }) }),
            (0, s.jsx)('div', {
              className: ''.concat(o().className, ' ').concat(r().className, ' bg-neutral-900 text-neutral-100'),
              children: (0, s.jsx)(a, { ...t }),
            }),
          ],
        });
      };
    },
    7332: (e) => {
      e.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
        className: '__className_a3e5a0',
        variable: '__variable_a3e5a0',
      };
    },
    8462: (e, a, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return t(6404);
        },
      ]);
    },
    8580: (e) => {
      e.exports = {
        style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
        className: '__className_443f57',
        variable: '__variable_443f57',
      };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [593, 792], () => (a(8462), a(8231))), (_N_E = e.O()));
  },
]);
