(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [941],
  {
    1899: (n, a, e) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/yaml',
        function () {
          return e(9416);
        },
      ]);
    },
    9416: (n, a, e) => {
      'use strict';
      (e.r(a), e.d(a, { default: () => m }));
      var l = e(5640),
        r = e(148),
        i = e(9524),
        s = e(9e3);
      let t =
          '\n%YAML 1.2\n---\nYAML: YAML Ain\'t Markup Language™\n\nWhat It Is:\n  YAML is a human-friendly data serialization\n  language for all programming languages.\n\nYAML Resources:\n  YAML Specifications:\n  - YAML 1.2:\n    - Revision 1.2.2      # Oct 1, 2021 *New*\n    - Revision 1.2.1      # Oct 1, 2009\n    - Revision 1.2.0      # Jul 21, 2009\n  - YAML 1.1\n  - YAML 1.0\n\n  YAML Matrix Chat:  \'#chat:yaml.io\'     # Our New Group Chat Room!\n  YAML IRC Channel:  libera.chat#yaml    # The old chat\n  YAML News:         twitter.com/yamlnews\n  YAML Mailing List: yaml-core           # Obsolete, but historical\n\n  YAML on GitHub:                        # github.com/yaml/\n    YAML Specs:        yaml-spec/\n    YAML 1.2 Grammar:  yaml-grammar/\n    YAML Test Suite:   yaml-test-suite/\n    YAML Issues:       issues/\n\n  YAML Reference Parsers:\n  - Generated Reference Parsers\n  - YPaste Interactive Parser\n\n  YAML Test Matrix:   matrix.yaml.io\n\nYAML Frameworks and Tools:\n  C/C++:\n  - libfyaml      # "C" YAML 1.2 processor (YTS)\n  - libyaml       # "C" Fast YAML 1.1 (YTS)\n  - libcyaml      # YAML de/serialization of C data (using libyaml)\n  - yaml-cpp      # C++ YAML 1.2 implementation\n\n  Crystal:\n  - YAML          # YAML 1.1 from the standard library\n\n  C#/.NET:\n  - YamlDotNet    # YAML 1.1/(1.2) library + serialization (YTS)\n  - yaml-net      # YAML 1.1 library\n\n  D:\n  - D-YAML        # YAML 1.1 library w/ official community support (YTS)\n\n  Dart:\n  - yaml          # YAML package for Dart\n\n  Delphi:\n  - Neslib.Yaml   # YAML 1.1 Delphi binding to libyaml (YTS)\n\n  Elixir:\n  - yaml-elixir   # YAML support for the Elixir language\n\n  Erlang:\n  - yamerl        # YAML support for the Erlang language\n\n  Golang:\n  - Go-yaml       # YAML support for the Go language\n  - Go-gypsy      # Simplified YAML parser written in Go\n  - goccy/go-yaml # YAML 1.2 implementation in pure Go\n\n  Haskell:\n  - HsYAML         # YAML 1.2 implementation in pure Haskell (YTS)\n  - YamlReference  # Haskell 1.2 reference parser\n  - yaml           # YAML 1.1 Haskell framework (based on libyaml)\n\n  Java:\n  - SnakeYAML Engine  # Java 8+ / YAML 1.2\n  - SnakeYAML         # Java 5 / YAML 1.1\n  - YamlBeans         # To/from JavaBeans. YAML 1.0/1.1\n  - eo-yaml           # YAML 1.2 for Java 8. Packaged as a Module (Java 9+)\n  - Chronicle-Wire    # Java Implementation\n\n  JavaScript:\n  - yaml          # JavaScript parser/stringifier (YAML 1.2, 1.1) (YTS)\n  - js-yaml       # Native PyYAML port to JavaScript (Demo)\n\n  Nim:\n  - NimYAML       # YAML 1.2 implementation in pure Nim (YTS)\n\n  OCaml:\n  - ocaml-yaml    # YAML 1.1/1.2 via libyaml bindings\n  - ocaml-syck    # YAML 1.0 via syck bindings\n\n  Perl Modules:\n  - YAML          # Pure Perl YAML 1.0 Module\n  - YAML::XS      # Binding to libyaml\n  - YAML::Syck    # Binding to libsyck\n  - YAML::Tiny    # A small YAML subset module\n  - YAML::PP      # A YAML 1.2/1.1 processor (YTS)\n\n  PHP:\n  - The Yaml Component  # Symfony Yaml Component (YAML 1.2)\n  - php-yaml      # libyaml bindings (YAML 1.1)\n  - syck          # syck bindings (YAML 1.0)\n  - spyc          # yaml loader/dumper (YAML 1.?)\n\n  Python:\n  - PyYAML        # YAML 1.1, pure python and libyaml binding\n  - ruamel.yaml   # YAML 1.2, update of PyYAML; comments round-trip\n  - PySyck        # YAML 1.0, syck binding\n  - strictyaml    # Restricted YAML subset\n\n  R:\n  - R YAML        # libyaml wrapper\n\n  Raku:\n  - YAMLish       # Port of YAMLish to Raku\n  - YAML::Parser::LibYAML  # LibYAML wrapper\n\n  Ruby:\n  - psych         # libyaml wrapper (in Ruby core for 1.9.2)\n  - RbYaml        # YAML 1.1 (PyYAML Port)\n  - yaml4r        # YAML 1.0, standard library syck binding\n\n  Rust:\n  - yaml-rust     # YAML 1.2 implementation in pure Rust\n  - serde-yaml    # YAML de/serialization of structs\n\n  Shell:\n  - parse_yaml    # Simple YAML parser for Bash using sed and awk\n  - shyaml        # Read YAML files - jq style\n\n  Swift:\n  - Yams          # libyaml wrapper\n\n  Others:\n  - yamlvim       # YAML dumper/emitter in pure vimscript\n\nRelated Projects:\n  - Rx            # Multi-Language Schemata Tool for JSON/YAML\n  - Kwalify       # Ruby Schemata Tool for JSON/YAML \n  - pyKwalify     # Python Schemata Tool for JSON/YAML\n  - yatools.net   # Visual Studio editor for YAML\n  - JSON          # Official JSON Website\n  - Pygments      # Python language Syntax Colorizer /w YAML support\n  - yamllint      # YAML Linter based on PyYAML\n  - YAML Diff     # Semantically compare two YAML documents\n  - JSON Schema   # YAML-compliant JSON standard for data validation\n\n# Edit This Website\n...\n',
        o = (n) => JSON.stringify((0, s.qg)(n), null, 2),
        m = () => {
          let [{ yaml: n = t, json: a = o(t) }, e] = (0, r.useState)({ yaml: t, json: o(t) });
          return (0, l.jsxs)('div', {
            className: 'flex h-screen w-screen flex-col',
            children: [
              (0, l.jsx)(i.F, {}),
              (0, l.jsx)('main', {
                className: 'container mx-auto grow p-4 md:p-8',
                children: (0, l.jsxs)('div', {
                  className: 'grid h-full grow grid-cols-1 gap-4 md:grid-cols-2 md:gap-8',
                  children: [
                    (0, l.jsx)('div', {
                      className: 'col-span-1',
                      children: (0, l.jsx)('textarea', {
                        id: 'yaml',
                        name: 'yaml',
                        placeholder: 'YAML',
                        className:
                          'h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none',
                        value: n,
                        onChange: (n) => {
                          let a = n.target.value,
                            l = o(a);
                          e((n) => ({ ...n, yaml: a, json: l }));
                        },
                      }),
                    }),
                    (0, l.jsx)('div', {
                      className: 'col-span-1',
                      children: (0, l.jsx)('textarea', {
                        id: 'json',
                        name: 'json',
                        placeholder: 'JSON',
                        className:
                          'h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none',
                        value: a,
                        readOnly: !0,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    9524: (n, a, e) => {
      'use strict';
      e.d(a, { F: () => t });
      var l = e(5640),
        r = e(2635),
        i = e(7864),
        s = e.n(i);
      let t = () =>
        (0, l.jsx)('nav', {
          className: 'border-b border-neutral-800 shadow-sm',
          children: (0, l.jsx)('div', {
            className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
            children: (0, l.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2 md:gap-x-4',
              children: [
                (0, l.jsx)(s(), { href: '/', children: (0, l.jsx)('h1', { className: 'font-black', children: r.C3 }) }),
                (0, l.jsx)('div', {
                  className: 'flex items-center gap-x-2 text-sm text-neutral-500 md:gap-x-4 md:text-base',
                  children: [
                    { id: 'converter', href: '/converter', label: 'Converter' },
                    { id: 'editor', href: '/editor', label: 'Editor' },
                    { id: 'yaml', href: '/yaml', label: 'YAML' },
                  ].map((n) => {
                    let { id: a = '', href: e = '', label: r = '' } = n;
                    return (0, l.jsx)(
                      s(),
                      { href: e, className: 'text-neutral-500 hover:text-neutral-100', children: r },
                      a,
                    );
                  }),
                }),
              ],
            }),
          }),
        });
    },
  },
  (n) => {
    var a = (a) => n((n.s = a));
    (n.O(0, [864, 0, 636, 593, 792], () => a(1899)), (_N_E = n.O()));
  },
]);
