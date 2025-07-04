'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [230],
  {
    3087: (e, t, n) => {
      let r;
      n.d(t, { As: () => tN });
      let i = Symbol.for('yaml.alias'),
        s = Symbol.for('yaml.document'),
        o = Symbol.for('yaml.map'),
        l = Symbol.for('yaml.pair'),
        a = Symbol.for('yaml.scalar'),
        c = Symbol.for('yaml.seq'),
        f = Symbol.for('yaml.node.type'),
        u = (e) => !!e && 'object' == typeof e && e[f] === i,
        m = (e) => !!e && 'object' == typeof e && e[f] === s,
        h = (e) => !!e && 'object' == typeof e && e[f] === o,
        d = (e) => !!e && 'object' == typeof e && e[f] === l,
        g = (e) => !!e && 'object' == typeof e && e[f] === a,
        p = (e) => !!e && 'object' == typeof e && e[f] === c;
      function y(e) {
        if (e && 'object' == typeof e)
          switch (e[f]) {
            case o:
            case c:
              return !0;
          }
        return !1;
      }
      function b(e) {
        if (e && 'object' == typeof e)
          switch (e[f]) {
            case i:
            case o:
            case a:
            case c:
              return !0;
          }
        return !1;
      }
      let v = (e) => (g(e) || y(e)) && !!e.anchor,
        O = Symbol('break visit'),
        E = Symbol('skip children'),
        w = Symbol('remove node');
      function N(e, t) {
        let n = I(t);
        m(e)
          ? S(null, e.contents, n, Object.freeze([e])) === w && (e.contents = null)
          : S(null, e, n, Object.freeze([]));
      }
      function S(e, t, n, r) {
        let i = A(e, t, n, r);
        if (b(i) || d(i)) return (_(e, r, i), S(e, i, n, r));
        if ('symbol' != typeof i) {
          if (y(t)) {
            r = Object.freeze(r.concat(t));
            for (let e = 0; e < t.items.length; ++e) {
              let i = S(e, t.items[e], n, r);
              if ('number' == typeof i) e = i - 1;
              else {
                if (i === O) return O;
                i === w && (t.items.splice(e, 1), (e -= 1));
              }
            }
          } else if (d(t)) {
            r = Object.freeze(r.concat(t));
            let e = S('key', t.key, n, r);
            if (e === O) return O;
            e === w && (t.key = null);
            let i = S('value', t.value, n, r);
            if (i === O) return O;
            i === w && (t.value = null);
          }
        }
        return i;
      }
      async function k(e, t) {
        let n = I(t);
        m(e)
          ? (await $(null, e.contents, n, Object.freeze([e]))) === w && (e.contents = null)
          : await $(null, e, n, Object.freeze([]));
      }
      async function $(e, t, n, r) {
        let i = await A(e, t, n, r);
        if (b(i) || d(i)) return (_(e, r, i), $(e, i, n, r));
        if ('symbol' != typeof i) {
          if (y(t)) {
            r = Object.freeze(r.concat(t));
            for (let e = 0; e < t.items.length; ++e) {
              let i = await $(e, t.items[e], n, r);
              if ('number' == typeof i) e = i - 1;
              else {
                if (i === O) return O;
                i === w && (t.items.splice(e, 1), (e -= 1));
              }
            }
          } else if (d(t)) {
            r = Object.freeze(r.concat(t));
            let e = await $('key', t.key, n, r);
            if (e === O) return O;
            e === w && (t.key = null);
            let i = await $('value', t.value, n, r);
            if (i === O) return O;
            i === w && (t.value = null);
          }
        }
        return i;
      }
      function I(e) {
        return 'object' == typeof e && (e.Collection || e.Node || e.Value)
          ? Object.assign(
              { Alias: e.Node, Map: e.Node, Scalar: e.Node, Seq: e.Node },
              e.Value && { Map: e.Value, Scalar: e.Value, Seq: e.Value },
              e.Collection && { Map: e.Collection, Seq: e.Collection },
              e,
            )
          : e;
      }
      function A(e, t, n, r) {
        return 'function' == typeof n
          ? n(e, t, r)
          : h(t)
            ? n.Map?.(e, t, r)
            : p(t)
              ? n.Seq?.(e, t, r)
              : d(t)
                ? n.Pair?.(e, t, r)
                : g(t)
                  ? n.Scalar?.(e, t, r)
                  : u(t)
                    ? n.Alias?.(e, t, r)
                    : void 0;
      }
      function _(e, t, n) {
        let r = t[t.length - 1];
        if (y(r)) r.items[e] = n;
        else if (d(r)) 'key' === e ? (r.key = n) : (r.value = n);
        else if (m(r)) r.contents = n;
        else {
          let e = u(r) ? 'alias' : 'scalar';
          throw Error(`Cannot replace node with ${e} parent`);
        }
      }
      ((N.BREAK = O), (N.SKIP = E), (N.REMOVE = w), (k.BREAK = O), (k.SKIP = E), (k.REMOVE = w));
      let T = { '!': '%21', ',': '%2C', '[': '%5B', ']': '%5D', '{': '%7B', '}': '%7D' },
        C = (e) => e.replace(/[!,[\]{}]/g, (e) => T[e]);
      class L {
        constructor(e, t) {
          ((this.docStart = null),
            (this.docEnd = !1),
            (this.yaml = Object.assign({}, L.defaultYaml, e)),
            (this.tags = Object.assign({}, L.defaultTags, t)));
        }
        clone() {
          let e = new L(this.yaml, this.tags);
          return ((e.docStart = this.docStart), e);
        }
        atDocument() {
          let e = new L(this.yaml, this.tags);
          switch (this.yaml.version) {
            case '1.1':
              this.atNextDocument = !0;
              break;
            case '1.2':
              ((this.atNextDocument = !1),
                (this.yaml = { explicit: L.defaultYaml.explicit, version: '1.2' }),
                (this.tags = Object.assign({}, L.defaultTags)));
          }
          return e;
        }
        add(e, t) {
          this.atNextDocument &&
            ((this.yaml = { explicit: L.defaultYaml.explicit, version: '1.1' }),
            (this.tags = Object.assign({}, L.defaultTags)),
            (this.atNextDocument = !1));
          let n = e.trim().split(/[ \t]+/),
            r = n.shift();
          switch (r) {
            case '%TAG': {
              if (2 !== n.length && (t(0, '%TAG directive should contain exactly two parts'), n.length < 2)) return !1;
              let [e, r] = n;
              return ((this.tags[e] = r), !0);
            }
            case '%YAML': {
              if (((this.yaml.explicit = !0), 1 !== n.length))
                return (t(0, '%YAML directive should contain exactly one part'), !1);
              let [e] = n;
              if ('1.1' === e || '1.2' === e) return ((this.yaml.version = e), !0);
              {
                let n = /^\d+\.\d+$/.test(e);
                return (t(6, `Unsupported YAML version ${e}`, n), !1);
              }
            }
            default:
              return (t(0, `Unknown directive ${r}`, !0), !1);
          }
        }
        tagName(e, t) {
          if ('!' === e) return '!';
          if ('!' !== e[0]) return (t(`Not a valid tag: ${e}`), null);
          if ('<' === e[1]) {
            let n = e.slice(2, -1);
            return '!' === n || '!!' === n
              ? (t(`Verbatim tags aren't resolved, so ${e} is invalid.`), null)
              : ('>' !== e[e.length - 1] && t('Verbatim tags must end with a >'), n);
          }
          let [, n, r] = e.match(/^(.*!)([^!]*)$/s);
          r || t(`The ${e} tag has no suffix`);
          let i = this.tags[n];
          if (i)
            try {
              return i + decodeURIComponent(r);
            } catch (e) {
              return (t(String(e)), null);
            }
          return '!' === n ? e : (t(`Could not resolve tag: ${e}`), null);
        }
        tagString(e) {
          for (let [t, n] of Object.entries(this.tags)) if (e.startsWith(n)) return t + C(e.substring(n.length));
          return '!' === e[0] ? e : `!<${e}>`;
        }
        toString(e) {
          let t,
            n = this.yaml.explicit ? [`%YAML ${this.yaml.version || '1.2'}`] : [],
            r = Object.entries(this.tags);
          if (e && r.length > 0 && b(e.contents)) {
            let n = {};
            (N(e.contents, (e, t) => {
              b(t) && t.tag && (n[t.tag] = !0);
            }),
              (t = Object.keys(n)));
          } else t = [];
          for (let [i, s] of r)
            ('!!' !== i || 'tag:yaml.org,2002:' !== s) &&
              (!e || t.some((e) => e.startsWith(s))) &&
              n.push(`%TAG ${i} ${s}`);
          return n.join('\n');
        }
      }
      function x(e) {
        if (/[\x00-\x19\s,[\]{}]/.test(e)) {
          let t = JSON.stringify(e);
          throw Error(`Anchor must not contain whitespace or control characters: ${t}`);
        }
        return !0;
      }
      function j(e) {
        let t = new Set();
        return (
          N(e, {
            Value(e, n) {
              n.anchor && t.add(n.anchor);
            },
          }),
          t
        );
      }
      function B(e, t) {
        for (let n = 1; ; ++n) {
          let r = `${e}${n}`;
          if (!t.has(r)) return r;
        }
      }
      function M(e, t, n, r) {
        if (r && 'object' == typeof r)
          if (Array.isArray(r))
            for (let t = 0, n = r.length; t < n; ++t) {
              let n = r[t],
                i = M(e, r, String(t), n);
              void 0 === i ? delete r[t] : i !== n && (r[t] = i);
            }
          else if (r instanceof Map)
            for (let t of Array.from(r.keys())) {
              let n = r.get(t),
                i = M(e, r, t, n);
              void 0 === i ? r.delete(t) : i !== n && r.set(t, i);
            }
          else if (r instanceof Set)
            for (let t of Array.from(r)) {
              let n = M(e, r, t, t);
              void 0 === n ? r.delete(t) : n !== t && (r.delete(t), r.add(n));
            }
          else
            for (let [t, n] of Object.entries(r)) {
              let i = M(e, r, t, n);
              void 0 === i ? delete r[t] : i !== n && (r[t] = i);
            }
        return e.call(t, n, r);
      }
      function D(e, t, n) {
        if (Array.isArray(e)) return e.map((e, t) => D(e, String(t), n));
        if (e && 'function' == typeof e.toJSON) {
          if (!n || !v(e)) return e.toJSON(t, n);
          let r = { aliasCount: 0, count: 1, res: void 0 };
          (n.anchors.set(e, r),
            (n.onCreate = (e) => {
              ((r.res = e), delete n.onCreate);
            }));
          let i = e.toJSON(t, n);
          return (n.onCreate && n.onCreate(i), i);
        }
        return 'bigint' != typeof e || n?.keep ? e : Number(e);
      }
      ((L.defaultYaml = { explicit: !1, version: '1.2' }), (L.defaultTags = { '!!': 'tag:yaml.org,2002:' }));
      class R {
        constructor(e) {
          Object.defineProperty(this, f, { value: e });
        }
        clone() {
          let e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
          return (this.range && (e.range = this.range.slice()), e);
        }
        toJS(e, { mapAsMap: t, maxAliasCount: n, onAnchor: r, reviver: i } = {}) {
          if (!m(e)) throw TypeError('A document argument is required');
          let s = {
              anchors: new Map(),
              doc: e,
              keep: !0,
              mapAsMap: !0 === t,
              mapKeyWarned: !1,
              maxAliasCount: 'number' == typeof n ? n : 100,
            },
            o = D(this, '', s);
          if ('function' == typeof r) for (let { count: e, res: t } of s.anchors.values()) r(t, e);
          return 'function' == typeof i ? M(i, { '': o }, '', o) : o;
        }
      }
      class K extends R {
        constructor(e) {
          (super(i),
            (this.source = e),
            Object.defineProperty(this, 'tag', {
              set() {
                throw Error('Alias nodes cannot have tags');
              },
            }));
        }
        resolve(e, t) {
          let n, r;
          for (let i of (t?.aliasResolveCache
            ? (n = t.aliasResolveCache)
            : ((n = []),
              N(e, {
                Node: (e, t) => {
                  (u(t) || v(t)) && n.push(t);
                },
              }),
              t && (t.aliasResolveCache = n)),
          n)) {
            if (i === this) break;
            i.anchor === this.source && (r = i);
          }
          return r;
        }
        toJSON(e, t) {
          if (!t) return { source: this.source };
          let { anchors: n, doc: r, maxAliasCount: i } = t,
            s = this.resolve(r, t);
          if (!s) throw ReferenceError(`Unresolved alias (the anchor must be set before the alias): ${this.source}`);
          let o = n.get(s);
          if ((o || (D(s, null, t), (o = n.get(s))), !o || void 0 === o.res))
            throw ReferenceError('This should not happen: Alias anchor was not resolved?');
          if (
            i >= 0 &&
            ((o.count += 1),
            0 === o.aliasCount &&
              (o.aliasCount = (function e(t, n, r) {
                if (u(n)) {
                  let e = n.resolve(t),
                    i = r && e && r.get(e);
                  return i ? i.count * i.aliasCount : 0;
                }
                if (y(n)) {
                  let i = 0;
                  for (let s of n.items) {
                    let n = e(t, s, r);
                    n > i && (i = n);
                  }
                  return i;
                }
                return d(n) ? Math.max(e(t, n.key, r), e(t, n.value, r)) : 1;
              })(r, s, n)),
            o.count * o.aliasCount > i)
          )
            throw ReferenceError('Excessive alias count indicates a resource exhaustion attack');
          return o.res;
        }
        toString(e, t, n) {
          let r = `*${this.source}`;
          if (e) {
            if ((x(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)))
              throw Error(`Unresolved alias (the anchor must be set before the alias): ${this.source}`);
            if (e.implicitKey) return `${r} `;
          }
          return r;
        }
      }
      let U = (e) => !e || ('function' != typeof e && 'object' != typeof e);
      class P extends R {
        constructor(e) {
          (super(a), (this.value = e));
        }
        toJSON(e, t) {
          return t?.keep ? this.value : D(this.value, e, t);
        }
        toString() {
          return String(this.value);
        }
      }
      function F(e, t, n) {
        let r;
        if ((m(e) && (e = e.contents), b(e))) return e;
        if (d(e)) {
          let t = n.schema[o].createNode?.(n.schema, null, n);
          return (t.items.push(e), t);
        }
        (e instanceof String ||
          e instanceof Number ||
          e instanceof Boolean ||
          ('undefined' != typeof BigInt && e instanceof BigInt)) &&
          (e = e.valueOf());
        let { aliasDuplicateObjects: i, onAnchor: s, onTagObj: l, schema: a, sourceObjects: f } = n;
        if (i && e && 'object' == typeof e) {
          if ((r = f.get(e))) return (r.anchor ?? (r.anchor = s(e)), new K(r.anchor));
          ((r = { anchor: null, node: null }), f.set(e, r));
        }
        t?.startsWith('!!') && (t = 'tag:yaml.org,2002:' + t.slice(2));
        let u = (function (e, t, n) {
          if (t) {
            let e = n.filter((e) => e.tag === t),
              r = e.find((e) => !e.format) ?? e[0];
            if (!r) throw Error(`Tag ${t} not found`);
            return r;
          }
          return n.find((t) => t.identify?.(e) && !t.format);
        })(e, t, a.tags);
        if (!u) {
          if ((e && 'function' == typeof e.toJSON && (e = e.toJSON()), !e || 'object' != typeof e)) {
            let t = new P(e);
            return (r && (r.node = t), t);
          }
          u = e instanceof Map ? a[o] : Symbol.iterator in Object(e) ? a[c] : a[o];
        }
        l && (l(u), delete n.onTagObj);
        let h = u?.createNode
          ? u.createNode(n.schema, e, n)
          : 'function' == typeof u?.nodeClass?.from
            ? u.nodeClass.from(n.schema, e, n)
            : new P(e);
        return (t ? (h.tag = t) : u.default || (h.tag = u.tag), r && (r.node = h), h);
      }
      function J(e, t, n) {
        let r = n;
        for (let e = t.length - 1; e >= 0; --e) {
          let n = t[e];
          if ('number' == typeof n && Number.isInteger(n) && n >= 0) {
            let e = [];
            ((e[n] = r), (r = e));
          } else r = new Map([[n, r]]);
        }
        return F(r, void 0, {
          aliasDuplicateObjects: !1,
          keepUndefined: !1,
          onAnchor: () => {
            throw Error('This should not happen, please report a bug.');
          },
          schema: e,
          sourceObjects: new Map(),
        });
      }
      ((P.BLOCK_FOLDED = 'BLOCK_FOLDED'),
        (P.BLOCK_LITERAL = 'BLOCK_LITERAL'),
        (P.PLAIN = 'PLAIN'),
        (P.QUOTE_DOUBLE = 'QUOTE_DOUBLE'),
        (P.QUOTE_SINGLE = 'QUOTE_SINGLE'));
      let q = (e) => null == e || ('object' == typeof e && !!e[Symbol.iterator]().next().done);
      class Y extends R {
        constructor(e, t) {
          (super(e),
            Object.defineProperty(this, 'schema', { value: t, configurable: !0, enumerable: !1, writable: !0 }));
        }
        clone(e) {
          let t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
          return (
            e && (t.schema = e),
            (t.items = t.items.map((t) => (b(t) || d(t) ? t.clone(e) : t))),
            this.range && (t.range = this.range.slice()),
            t
          );
        }
        addIn(e, t) {
          if (q(e)) this.add(t);
          else {
            let [n, ...r] = e,
              i = this.get(n, !0);
            if (y(i)) i.addIn(r, t);
            else if (void 0 === i && this.schema) this.set(n, J(this.schema, r, t));
            else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
          }
        }
        deleteIn(e) {
          let [t, ...n] = e;
          if (0 === n.length) return this.delete(t);
          let r = this.get(t, !0);
          if (y(r)) return r.deleteIn(n);
          throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`);
        }
        getIn(e, t) {
          let [n, ...r] = e,
            i = this.get(n, !0);
          return 0 === r.length ? (!t && g(i) ? i.value : i) : y(i) ? i.getIn(r, t) : void 0;
        }
        hasAllNullValues(e) {
          return this.items.every((t) => {
            if (!d(t)) return !1;
            let n = t.value;
            return null == n || (e && g(n) && null == n.value && !n.commentBefore && !n.comment && !n.tag);
          });
        }
        hasIn(e) {
          let [t, ...n] = e;
          if (0 === n.length) return this.has(t);
          let r = this.get(t, !0);
          return !!y(r) && r.hasIn(n);
        }
        setIn(e, t) {
          let [n, ...r] = e;
          if (0 === r.length) this.set(n, t);
          else {
            let e = this.get(n, !0);
            if (y(e)) e.setIn(r, t);
            else if (void 0 === e && this.schema) this.set(n, J(this.schema, r, t));
            else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
          }
        }
      }
      let G = (e) => e.replace(/^(?!$)(?: $)?/gm, '#');
      function V(e, t) {
        return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
      }
      let W = (e, t, n) =>
          e.endsWith('\n') ? V(n, t) : n.includes('\n') ? '\n' + V(n, t) : (e.endsWith(' ') ? '' : ' ') + n,
        H = 'flow',
        Q = 'block',
        X = 'quoted';
      function z(
        e,
        t,
        n = 'flow',
        { indentAtStart: r, lineWidth: i = 80, minContentWidth: s = 20, onFold: o, onOverflow: l } = {},
      ) {
        let a, c, f;
        if (!i || i < 0) return e;
        i < s && (s = 0);
        let u = Math.max(1 + s, 1 + i - t.length);
        if (e.length <= u) return e;
        let m = [],
          h = {},
          d = i - t.length;
        'number' == typeof r && (r > i - Math.max(2, s) ? m.push(0) : (d = i - r));
        let g = !1,
          p = -1,
          y = -1,
          b = -1;
        for (n === Q && -1 !== (p = Z(e, p, t.length)) && (d = p + u); (f = e[(p += 1)]); ) {
          if (n === X && '\\' === f) {
            switch (((y = p), e[p + 1])) {
              case 'x':
                p += 3;
                break;
              case 'u':
                p += 5;
                break;
              case 'U':
                p += 9;
                break;
              default:
                p += 1;
            }
            b = p;
          }
          if ('\n' === f) (n === Q && (p = Z(e, p, t.length)), (d = p + t.length + u), (a = void 0));
          else {
            if (' ' === f && c && ' ' !== c && '\n' !== c && '	' !== c) {
              let t = e[p + 1];
              t && ' ' !== t && '\n' !== t && '	' !== t && (a = p);
            }
            if (p >= d)
              if (a) (m.push(a), (d = a + u), (a = void 0));
              else if (n === X) {
                for (; ' ' === c || '	' === c; ) ((c = f), (f = e[(p += 1)]), (g = !0));
                let t = p > b + 1 ? p - 2 : y - 1;
                if (h[t]) return e;
                (m.push(t), (h[t] = !0), (d = t + u), (a = void 0));
              } else g = !0;
          }
          c = f;
        }
        if ((g && l && l(), 0 === m.length)) return e;
        o && o();
        let v = e.slice(0, m[0]);
        for (let r = 0; r < m.length; ++r) {
          let i = m[r],
            s = m[r + 1] || e.length;
          0 === i
            ? (v = `
${t}${e.slice(0, s)}`)
            : (n === X && h[i] && (v += `${e[i]}\\`),
              (v += `
${t}${e.slice(i + 1, s)}`));
        }
        return v;
      }
      function Z(e, t, n) {
        let r = t,
          i = t + 1,
          s = e[i];
        for (; ' ' === s || '	' === s; )
          if (t < i + n) s = e[++t];
          else {
            do s = e[++t];
            while (s && '\n' !== s);
            ((r = t), (s = e[(i = t + 1)]));
          }
        return r;
      }
      let ee = (e, t) => ({
          indentAtStart: t ? e.indent.length : e.indentAtStart,
          lineWidth: e.options.lineWidth,
          minContentWidth: e.options.minContentWidth,
        }),
        et = (e) => /^(%|---|\.\.\.)/m.test(e);
      function en(e, t) {
        let n = JSON.stringify(e);
        if (t.options.doubleQuotedAsJSON) return n;
        let { implicitKey: r } = t,
          i = t.options.doubleQuotedMinMultiLineLength,
          s = t.indent || (et(e) ? '  ' : ''),
          o = '',
          l = 0;
        for (let e = 0, t = n[e]; t; t = n[++e])
          if (
            (' ' === t &&
              '\\' === n[e + 1] &&
              'n' === n[e + 2] &&
              ((o += n.slice(l, e) + '\\ '), (e += 1), (l = e), (t = '\\')),
            '\\' === t)
          )
            switch (n[e + 1]) {
              case 'u':
                {
                  o += n.slice(l, e);
                  let t = n.substr(e + 2, 4);
                  switch (t) {
                    case '0000':
                      o += '\\0';
                      break;
                    case '0007':
                      o += '\\a';
                      break;
                    case '000b':
                      o += '\\v';
                      break;
                    case '001b':
                      o += '\\e';
                      break;
                    case '0085':
                      o += '\\N';
                      break;
                    case '00a0':
                      o += '\\_';
                      break;
                    case '2028':
                      o += '\\L';
                      break;
                    case '2029':
                      o += '\\P';
                      break;
                    default:
                      '00' === t.substr(0, 2) ? (o += '\\x' + t.substr(2)) : (o += n.substr(e, 6));
                  }
                  ((e += 5), (l = e + 1));
                }
                break;
              case 'n':
                if (r || '"' === n[e + 2] || n.length < i) e += 1;
                else {
                  for (o += n.slice(l, e) + '\n\n'; '\\' === n[e + 2] && 'n' === n[e + 3] && '"' !== n[e + 4]; )
                    ((o += '\n'), (e += 2));
                  ((o += s), ' ' === n[e + 2] && (o += '\\'), (e += 1), (l = e + 1));
                }
                break;
              default:
                e += 1;
            }
        return ((o = l ? o + n.slice(l) : n), r ? o : z(o, s, X, ee(t, !1)));
      }
      function er(e, t) {
        if (!1 === t.options.singleQuote || (t.implicitKey && e.includes('\n')) || /[ \t]\n|\n[ \t]/.test(e))
          return en(e, t);
        let n = t.indent || (et(e) ? '  ' : ''),
          r =
            "'" +
            e.replace(/'/g, "''").replace(
              /\n+/g,
              `$&
${n}`,
            ) +
            "'";
        return t.implicitKey ? r : z(r, n, H, ee(t, !1));
      }
      function ei(e, t) {
        let n,
          { singleQuote: r } = t.options;
        if (!1 === r) n = en;
        else {
          let t = e.includes('"'),
            i = e.includes("'");
          n = t && !i ? er : i && !t ? en : r ? er : en;
        }
        return n(e, t);
      }
      try {
        r = RegExp('(^|(?<!\n))\n+(?!\n|$)', 'g');
      } catch {
        r = /\n+(?!\n|$)/g;
      }
      function es({ comment: e, type: t, value: n }, i, s, o) {
        let l,
          a,
          c,
          { blockQuote: f, commentString: u, lineWidth: m } = i.options;
        if (!f || /\n[\t ]+$/.test(n) || /^\s*$/.test(n)) return ei(n, i);
        let h = i.indent || (i.forceBlockIndent || et(n) ? '  ' : ''),
          d =
            'literal' === f ||
            ('folded' !== f &&
              t !== P.BLOCK_FOLDED &&
              (t === P.BLOCK_LITERAL ||
                !(function (e, t, n) {
                  if (!t || t < 0) return !1;
                  let r = t - n,
                    i = e.length;
                  if (i <= r) return !1;
                  for (let t = 0, n = 0; t < i; ++t)
                    if ('\n' === e[t]) {
                      if (t - n > r) return !0;
                      if (i - (n = t + 1) <= r) return !1;
                    }
                  return !0;
                })(n, m, h.length)));
        if (!n) return d ? '|\n' : '>\n';
        for (a = n.length; a > 0; --a) {
          let e = n[a - 1];
          if ('\n' !== e && '	' !== e && ' ' !== e) break;
        }
        let g = n.substring(a),
          p = g.indexOf('\n');
        (-1 === p ? (l = '-') : n === g || p !== g.length - 1 ? ((l = '+'), o && o()) : (l = ''),
          g &&
            ((n = n.slice(0, -g.length)),
            '\n' === g[g.length - 1] && (g = g.slice(0, -1)),
            (g = g.replace(r, `$&${h}`))));
        let y = !1,
          b = -1;
        for (c = 0; c < n.length; ++c) {
          let e = n[c];
          if (' ' === e) y = !0;
          else if ('\n' === e) b = c;
          else break;
        }
        let v = n.substring(0, b < c ? b + 1 : c);
        v && ((n = n.substring(v.length)), (v = v.replace(/\n+/g, `$&${h}`)));
        let O = h ? '2' : '1',
          E = (y ? O : '') + l;
        if ((e && ((E += ' ' + u(e.replace(/ ?[\r\n]+/g, ' '))), s && s()), !d)) {
          let e = n
              .replace(/\n+/g, '\n$&')
              .replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2')
              .replace(/\n+/g, `$&${h}`),
            r = !1,
            s = ee(i, !0);
          'folded' !== f &&
            t !== P.BLOCK_FOLDED &&
            (s.onOverflow = () => {
              r = !0;
            });
          let o = z(`${v}${e}${g}`, h, Q, s);
          if (!r)
            return `>${E}
${h}${o}`;
        }
        return (
          (n = n.replace(/\n+/g, `$&${h}`)),
          `|${E}
${h}${v}${n}${g}`
        );
      }
      function eo(e, t, n, r) {
        let { implicitKey: i, inFlow: s } = t,
          o = 'string' == typeof e.value ? e : Object.assign({}, e, { value: String(e.value) }),
          { type: l } = e;
        l !== P.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (l = P.QUOTE_DOUBLE);
        let a = (e) => {
            switch (e) {
              case P.BLOCK_FOLDED:
              case P.BLOCK_LITERAL:
                return i || s ? ei(o.value, t) : es(o, t, n, r);
              case P.QUOTE_DOUBLE:
                return en(o.value, t);
              case P.QUOTE_SINGLE:
                return er(o.value, t);
              case P.PLAIN:
                return (function (e, t, n, r) {
                  let { type: i, value: s } = e,
                    { actualString: o, implicitKey: l, indent: a, indentStep: c, inFlow: f } = t;
                  if ((l && s.includes('\n')) || (f && /[[\]{},]/.test(s))) return ei(s, t);
                  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s))
                    return l || f || !s.includes('\n') ? ei(s, t) : es(e, t, n, r);
                  if (!l && !f && i !== P.PLAIN && s.includes('\n')) return es(e, t, n, r);
                  if (et(s)) {
                    if ('' === a) return ((t.forceBlockIndent = !0), es(e, t, n, r));
                    else if (l && a === c) return ei(s, t);
                  }
                  let u = s.replace(
                    /\n+/g,
                    `$&
${a}`,
                  );
                  if (o) {
                    let e = (e) => e.default && 'tag:yaml.org,2002:str' !== e.tag && e.test?.test(u),
                      { compat: n, tags: r } = t.doc.schema;
                    if (r.some(e) || n?.some(e)) return ei(s, t);
                  }
                  return l ? u : z(u, a, H, ee(t, !1));
                })(o, t, n, r);
              default:
                return null;
            }
          },
          c = a(l);
        if (null === c) {
          let { defaultKeyType: e, defaultStringType: n } = t.options,
            r = (i && e) || n;
          if (null === (c = a(r))) throw Error(`Unsupported default string type ${r}`);
        }
        return c;
      }
      function el(e, t) {
        let n,
          r = Object.assign(
            {
              blockQuote: !0,
              commentString: G,
              defaultKeyType: null,
              defaultStringType: 'PLAIN',
              directives: null,
              doubleQuotedAsJSON: !1,
              doubleQuotedMinMultiLineLength: 40,
              falseStr: 'false',
              flowCollectionPadding: !0,
              indentSeq: !0,
              lineWidth: 80,
              minContentWidth: 20,
              nullStr: 'null',
              simpleKeys: !1,
              singleQuote: null,
              trueStr: 'true',
              verifyAliasOrder: !0,
            },
            e.schema.toStringOptions,
            t,
          );
        switch (r.collectionStyle) {
          case 'block':
            n = !1;
            break;
          case 'flow':
            n = !0;
            break;
          default:
            n = null;
        }
        return {
          anchors: new Set(),
          doc: e,
          flowCollectionPadding: r.flowCollectionPadding ? ' ' : '',
          indent: '',
          indentStep: 'number' == typeof r.indent ? ' '.repeat(r.indent) : '  ',
          inFlow: n,
          options: r,
        };
      }
      function ea(e, t, n, r) {
        let i;
        if (d(e)) return e.toString(t, n, r);
        if (u(e)) {
          if (t.doc.directives) return e.toString(t);
          if (t.resolvedAliases?.has(e)) throw TypeError('Cannot stringify circular structure without alias nodes');
          (t.resolvedAliases ? t.resolvedAliases.add(e) : (t.resolvedAliases = new Set([e])), (e = e.resolve(t.doc)));
        }
        let s = b(e) ? e : t.doc.createNode(e, { onTagObj: (e) => (i = e) });
        i ??
          (i = (function (e, t) {
            let n, r;
            if (t.tag) {
              let n = e.filter((e) => e.tag === t.tag);
              if (n.length > 0) return n.find((e) => e.format === t.format) ?? n[0];
            }
            if (g(t)) {
              n = t.value;
              let i = e.filter((e) => e.identify?.(n));
              if (i.length > 1) {
                let e = i.filter((e) => e.test);
                e.length > 0 && (i = e);
              }
              r = i.find((e) => e.format === t.format) ?? i.find((e) => !e.format);
            } else ((n = t), (r = e.find((e) => e.nodeClass && n instanceof e.nodeClass)));
            if (!r) {
              let e = n?.constructor?.name ?? (null === n ? 'null' : typeof n);
              throw Error(`Tag not resolved for ${e} value`);
            }
            return r;
          })(t.doc.schema.tags, s));
        let o = (function (e, t, { anchors: n, doc: r }) {
          if (!r.directives) return '';
          let i = [],
            s = (g(e) || y(e)) && e.anchor;
          s && x(s) && (n.add(s), i.push(`&${s}`));
          let o = e.tag ?? (t.default ? null : t.tag);
          return (o && i.push(r.directives.tagString(o)), i.join(' '));
        })(s, i, t);
        o.length > 0 && (t.indentAtStart = (t.indentAtStart ?? 0) + o.length + 1);
        let l =
          'function' == typeof i.stringify ? i.stringify(s, t, n, r) : g(s) ? eo(s, t, n, r) : s.toString(t, n, r);
        return o
          ? g(s) || '{' === l[0] || '[' === l[0]
            ? `${o} ${l}`
            : `${o}
${t.indent}${l}`
          : l;
      }
      let ec = {
          identify: (e) => '<<' === e || ('symbol' == typeof e && '<<' === e.description),
          default: 'key',
          tag: 'tag:yaml.org,2002:merge',
          test: /^<<$/,
          resolve: () => Object.assign(new P(Symbol('<<')), { addToJSMap: eu }),
          stringify: () => '<<',
        },
        ef = (e, t) =>
          (ec.identify(t) || (g(t) && (!t.type || t.type === P.PLAIN) && ec.identify(t.value))) &&
          e?.doc.schema.tags.some((e) => e.tag === ec.tag && e.default);
      function eu(e, t, n) {
        if (p((n = e && u(n) ? n.resolve(e.doc) : n))) for (let r of n.items) em(e, t, r);
        else if (Array.isArray(n)) for (let r of n) em(e, t, r);
        else em(e, t, n);
      }
      function em(e, t, n) {
        let r = e && u(n) ? n.resolve(e.doc) : n;
        if (!h(r)) throw Error('Merge sources must be maps or map aliases');
        for (let [n, i] of r.toJSON(null, e, Map))
          t instanceof Map
            ? t.has(n) || t.set(n, i)
            : t instanceof Set
              ? t.add(n)
              : Object.prototype.hasOwnProperty.call(t, n) ||
                Object.defineProperty(t, n, { value: i, writable: !0, enumerable: !0, configurable: !0 });
        return t;
      }
      function eh(e, t, { key: n, value: r }) {
        if (b(n) && n.addToJSMap) n.addToJSMap(e, t, r);
        else if (ef(e, n)) eu(e, t, r);
        else {
          let i = D(n, '', e);
          if (t instanceof Map) t.set(i, D(r, i, e));
          else if (t instanceof Set) t.add(i);
          else {
            let s = (function (e, t, n) {
                if (null === t) return '';
                if ('object' != typeof t) return String(t);
                if (b(e) && n?.doc) {
                  let t = el(n.doc, {});
                  for (let e of ((t.anchors = new Set()), n.anchors.keys())) t.anchors.add(e.anchor);
                  ((t.inFlow = !0), (t.inStringifyKey = !0));
                  let s = e.toString(t);
                  if (!n.mapKeyWarned) {
                    var r, i;
                    let e = JSON.stringify(s);
                    (e.length > 40 && (e = e.substring(0, 36) + '..."'),
                      (r = n.doc.options.logLevel),
                      (i = `Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),
                      ('debug' === r || 'warn' === r) && console.warn(i),
                      (n.mapKeyWarned = !0));
                  }
                  return s;
                }
                return JSON.stringify(t);
              })(n, i, e),
              o = D(r, s, e);
            s in t
              ? Object.defineProperty(t, s, { value: o, writable: !0, enumerable: !0, configurable: !0 })
              : (t[s] = o);
          }
        }
        return t;
      }
      function ed(e, t, n) {
        return new eg(F(e, void 0, n), F(t, void 0, n));
      }
      class eg {
        constructor(e, t = null) {
          (Object.defineProperty(this, f, { value: l }), (this.key = e), (this.value = t));
        }
        clone(e) {
          let { key: t, value: n } = this;
          return (b(t) && (t = t.clone(e)), b(n) && (n = n.clone(e)), new eg(t, n));
        }
        toJSON(e, t) {
          let n = t?.mapAsMap ? new Map() : {};
          return eh(t, n, this);
        }
        toString(e, t, n) {
          return e?.doc
            ? (function ({ key: e, value: t }, n, r, i) {
                let s,
                  o,
                  l,
                  {
                    allNullValues: a,
                    doc: c,
                    indent: f,
                    indentStep: u,
                    options: { commentString: m, indentSeq: h, simpleKeys: d },
                  } = n,
                  v = (b(e) && e.comment) || null;
                if (d) {
                  if (v) throw Error('With simple keys, key nodes cannot have comments');
                  if (y(e) || (!b(e) && 'object' == typeof e))
                    throw Error('With simple keys, collection cannot be used as a key value');
                }
                let O =
                  !d &&
                  (!e ||
                    (v && null == t && !n.inFlow) ||
                    y(e) ||
                    (g(e) ? e.type === P.BLOCK_FOLDED || e.type === P.BLOCK_LITERAL : 'object' == typeof e));
                n = Object.assign({}, n, { allNullValues: !1, implicitKey: !O && (d || !a), indent: f + u });
                let E = !1,
                  w = !1,
                  N = ea(
                    e,
                    n,
                    () => (E = !0),
                    () => (w = !0),
                  );
                if (!O && !n.inFlow && N.length > 1024) {
                  if (d) throw Error('With simple keys, single line scalar must not span more than 1024 characters');
                  O = !0;
                }
                if (n.inFlow) {
                  if (a || null == t) return (E && r && r(), '' === N ? '?' : O ? `? ${N}` : N);
                } else if ((a && !d) || (null == t && O))
                  return ((N = `? ${N}`), v && !E ? (N += W(N, n.indent, m(v))) : w && i && i(), N);
                (E && (v = null),
                  O
                    ? (v && (N += W(N, n.indent, m(v))),
                      (N = `? ${N}
${f}:`))
                    : ((N = `${N}:`), v && (N += W(N, n.indent, m(v)))),
                  b(t)
                    ? ((s = !!t.spaceBefore), (o = t.commentBefore), (l = t.comment))
                    : ((s = !1), (o = null), (l = null), t && 'object' == typeof t && (t = c.createNode(t))),
                  (n.implicitKey = !1),
                  !O && !v && g(t) && (n.indentAtStart = N.length + 1),
                  (w = !1),
                  !(!h && u.length >= 2 && !n.inFlow && !O && p(t)) ||
                    t.flow ||
                    t.tag ||
                    t.anchor ||
                    (n.indent = n.indent.substring(2)));
                let S = !1,
                  k = ea(
                    t,
                    n,
                    () => (S = !0),
                    () => (w = !0),
                  ),
                  $ = ' ';
                if (v || s || o) {
                  if ((($ = s ? '\n' : ''), o)) {
                    let e = m(o);
                    $ += `
${V(e, n.indent)}`;
                  }
                  '' !== k || n.inFlow
                    ? ($ += `
${n.indent}`)
                    : '\n' === $ && ($ = '\n\n');
                } else if (!O && y(t)) {
                  let e = k[0],
                    r = k.indexOf('\n'),
                    i = -1 !== r,
                    s = n.inFlow ?? t.flow ?? 0 === t.items.length;
                  if (i || !s) {
                    let t = !1;
                    if (i && ('&' === e || '!' === e)) {
                      let n = k.indexOf(' ');
                      ('&' === e && -1 !== n && n < r && '!' === k[n + 1] && (n = k.indexOf(' ', n + 1)),
                        (-1 === n || r < n) && (t = !0));
                    }
                    t ||
                      ($ = `
${n.indent}`);
                  }
                } else ('' === k || '\n' === k[0]) && ($ = '');
                return (
                  (N += $ + k),
                  n.inFlow ? S && r && r() : l && !S ? (N += W(N, n.indent, m(l))) : w && i && i(),
                  N
                );
              })(this, e, t, n)
            : JSON.stringify(this);
        }
      }
      function ep(e, t, n) {
        return (
          (t.inFlow ?? e.flow)
            ? function ({ items: e }, t, { flowChars: n, itemIndent: r }) {
                let {
                    indent: i,
                    indentStep: s,
                    flowCollectionPadding: o,
                    options: { commentString: l },
                  } = t,
                  a = Object.assign({}, t, { indent: (r += s), inFlow: !0, type: null }),
                  c = !1,
                  f = 0,
                  u = [];
                for (let n = 0; n < e.length; ++n) {
                  let i = e[n],
                    s = null;
                  if (b(i)) (i.spaceBefore && u.push(''), ey(t, u, i.commentBefore, !1), i.comment && (s = i.comment));
                  else if (d(i)) {
                    let e = b(i.key) ? i.key : null;
                    e && (e.spaceBefore && u.push(''), ey(t, u, e.commentBefore, !1), e.comment && (c = !0));
                    let n = b(i.value) ? i.value : null;
                    n
                      ? (n.comment && (s = n.comment), n.commentBefore && (c = !0))
                      : null == i.value && e?.comment && (s = e.comment);
                  }
                  s && (c = !0);
                  let o = ea(i, a, () => (s = null));
                  (n < e.length - 1 && (o += ','),
                    s && (o += W(o, r, l(s))),
                    !c && (u.length > f || o.includes('\n')) && (c = !0),
                    u.push(o),
                    (f = u.length));
                }
                let { start: m, end: h } = n;
                if (0 === u.length) return m + h;
                if (!c) {
                  let e = u.reduce((e, t) => e + t.length + 2, 2);
                  c = t.options.lineWidth > 0 && e > t.options.lineWidth;
                }
                if (!c) return `${m}${o}${u.join(' ')}${o}${h}`;
                {
                  let e = m;
                  for (let t of u)
                    e += t
                      ? `
${s}${i}${t}`
                      : '\n';
                  return `${e}
${i}${h}`;
                }
              }
            : function (
                { comment: e, items: t },
                n,
                { blockItemPrefix: r, flowChars: i, itemIndent: s, onChompKeep: o, onComment: l },
              ) {
                let a,
                  {
                    indent: c,
                    options: { commentString: f },
                  } = n,
                  u = Object.assign({}, n, { indent: s, type: null }),
                  m = !1,
                  h = [];
                for (let e = 0; e < t.length; ++e) {
                  let i = t[e],
                    o = null;
                  if (b(i))
                    (!m && i.spaceBefore && h.push(''), ey(n, h, i.commentBefore, m), i.comment && (o = i.comment));
                  else if (d(i)) {
                    let e = b(i.key) ? i.key : null;
                    e && (!m && e.spaceBefore && h.push(''), ey(n, h, e.commentBefore, m));
                  }
                  m = !1;
                  let l = ea(
                    i,
                    u,
                    () => (o = null),
                    () => (m = !0),
                  );
                  (o && (l += W(l, s, f(o))), m && o && (m = !1), h.push(r + l));
                }
                if (0 === h.length) a = i.start + i.end;
                else {
                  a = h[0];
                  for (let e = 1; e < h.length; ++e) {
                    let t = h[e];
                    a += t
                      ? `
${c}${t}`
                      : '\n';
                  }
                }
                return (e ? ((a += '\n' + V(f(e), c)), l && l()) : m && o && o(), a);
              }
        )(e, t, n);
      }
      function ey({ indent: e, options: { commentString: t } }, n, r, i) {
        if ((r && i && (r = r.replace(/^\n+/, '')), r)) {
          let i = V(t(r), e);
          n.push(i.trimStart());
        }
      }
      function eb(e, t) {
        let n = g(t) ? t.value : t;
        for (let r of e) if (d(r) && (r.key === t || r.key === n || (g(r.key) && r.key.value === n))) return r;
      }
      class ev extends Y {
        static get tagName() {
          return 'tag:yaml.org,2002:map';
        }
        constructor(e) {
          (super(o, e), (this.items = []));
        }
        static from(e, t, n) {
          let { keepUndefined: r, replacer: i } = n,
            s = new this(e),
            o = (e, o) => {
              if ('function' == typeof i) o = i.call(t, e, o);
              else if (Array.isArray(i) && !i.includes(e)) return;
              (void 0 !== o || r) && s.items.push(ed(e, o, n));
            };
          if (t instanceof Map) for (let [e, n] of t) o(e, n);
          else if (t && 'object' == typeof t) for (let e of Object.keys(t)) o(e, t[e]);
          return ('function' == typeof e.sortMapEntries && s.items.sort(e.sortMapEntries), s);
        }
        add(e, t) {
          let n;
          n = d(e) ? e : e && 'object' == typeof e && 'key' in e ? new eg(e.key, e.value) : new eg(e, e?.value);
          let r = eb(this.items, n.key),
            i = this.schema?.sortMapEntries;
          if (r) {
            if (!t) throw Error(`Key ${n.key} already set`);
            g(r.value) && U(n.value) ? (r.value.value = n.value) : (r.value = n.value);
          } else if (i) {
            let e = this.items.findIndex((e) => 0 > i(n, e));
            -1 === e ? this.items.push(n) : this.items.splice(e, 0, n);
          } else this.items.push(n);
        }
        delete(e) {
          let t = eb(this.items, e);
          return !!t && this.items.splice(this.items.indexOf(t), 1).length > 0;
        }
        get(e, t) {
          let n = eb(this.items, e),
            r = n?.value;
          return (!t && g(r) ? r.value : r) ?? void 0;
        }
        has(e) {
          return !!eb(this.items, e);
        }
        set(e, t) {
          this.add(new eg(e, t), !0);
        }
        toJSON(e, t, n) {
          let r = n ? new n() : t?.mapAsMap ? new Map() : {};
          for (let e of (t?.onCreate && t.onCreate(r), this.items)) eh(t, r, e);
          return r;
        }
        toString(e, t, n) {
          if (!e) return JSON.stringify(this);
          for (let e of this.items)
            if (!d(e)) throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);
          return (
            !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, { allNullValues: !0 })),
            ep(this, e, {
              blockItemPrefix: '',
              flowChars: { start: '{', end: '}' },
              itemIndent: e.indent || '',
              onChompKeep: n,
              onComment: t,
            })
          );
        }
      }
      let eO = {
        collection: 'map',
        default: !0,
        nodeClass: ev,
        tag: 'tag:yaml.org,2002:map',
        resolve: (e, t) => (h(e) || t('Expected a mapping for this tag'), e),
        createNode: (e, t, n) => ev.from(e, t, n),
      };
      class eE extends Y {
        static get tagName() {
          return 'tag:yaml.org,2002:seq';
        }
        constructor(e) {
          (super(c, e), (this.items = []));
        }
        add(e) {
          this.items.push(e);
        }
        delete(e) {
          let t = ew(e);
          return 'number' == typeof t && this.items.splice(t, 1).length > 0;
        }
        get(e, t) {
          let n = ew(e);
          if ('number' != typeof n) return;
          let r = this.items[n];
          return !t && g(r) ? r.value : r;
        }
        has(e) {
          let t = ew(e);
          return 'number' == typeof t && t < this.items.length;
        }
        set(e, t) {
          let n = ew(e);
          if ('number' != typeof n) throw Error(`Expected a valid index, not ${e}.`);
          let r = this.items[n];
          g(r) && U(t) ? (r.value = t) : (this.items[n] = t);
        }
        toJSON(e, t) {
          let n = [];
          t?.onCreate && t.onCreate(n);
          let r = 0;
          for (let e of this.items) n.push(D(e, String(r++), t));
          return n;
        }
        toString(e, t, n) {
          return e
            ? ep(this, e, {
                blockItemPrefix: '- ',
                flowChars: { start: '[', end: ']' },
                itemIndent: (e.indent || '') + '  ',
                onChompKeep: n,
                onComment: t,
              })
            : JSON.stringify(this);
        }
        static from(e, t, n) {
          let { replacer: r } = n,
            i = new this(e);
          if (t && Symbol.iterator in Object(t)) {
            let e = 0;
            for (let s of t) {
              if ('function' == typeof r) {
                let n = t instanceof Set ? s : String(e++);
                s = r.call(t, n, s);
              }
              i.items.push(F(s, void 0, n));
            }
          }
          return i;
        }
      }
      function ew(e) {
        let t = g(e) ? e.value : e;
        return (
          t && 'string' == typeof t && (t = Number(t)),
          'number' == typeof t && Number.isInteger(t) && t >= 0 ? t : null
        );
      }
      let eN = {
          collection: 'seq',
          default: !0,
          nodeClass: eE,
          tag: 'tag:yaml.org,2002:seq',
          resolve: (e, t) => (p(e) || t('Expected a sequence for this tag'), e),
          createNode: (e, t, n) => eE.from(e, t, n),
        },
        eS = {
          identify: (e) => 'string' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:str',
          resolve: (e) => e,
          stringify: (e, t, n, r) => eo(e, (t = Object.assign({ actualString: !0 }, t)), n, r),
        },
        ek = {
          identify: (e) => null == e,
          createNode: () => new P(null),
          default: !0,
          tag: 'tag:yaml.org,2002:null',
          test: /^(?:~|[Nn]ull|NULL)?$/,
          resolve: () => new P(null),
          stringify: ({ source: e }, t) => ('string' == typeof e && ek.test.test(e) ? e : t.options.nullStr),
        },
        e$ = {
          identify: (e) => 'boolean' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:bool',
          test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
          resolve: (e) => new P('t' === e[0] || 'T' === e[0]),
          stringify: ({ source: e, value: t }, n) =>
            e && e$.test.test(e) && t === ('t' === e[0] || 'T' === e[0])
              ? e
              : t
                ? n.options.trueStr
                : n.options.falseStr,
        };
      function eI({ format: e, minFractionDigits: t, tag: n, value: r }) {
        if ('bigint' == typeof r) return String(r);
        let i = 'number' == typeof r ? r : Number(r);
        if (!isFinite(i)) return isNaN(i) ? '.nan' : i < 0 ? '-.inf' : '.inf';
        let s = JSON.stringify(r);
        if (!e && t && (!n || 'tag:yaml.org,2002:float' === n) && /^\d/.test(s)) {
          let e = s.indexOf('.');
          e < 0 && ((e = s.length), (s += '.'));
          let n = t - (s.length - e - 1);
          for (; n-- > 0; ) s += '0';
        }
        return s;
      }
      let eA = {
          identify: (e) => 'number' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
          resolve: (e) =>
            'nan' === e.slice(-3).toLowerCase()
              ? NaN
              : '-' === e[0]
                ? Number.NEGATIVE_INFINITY
                : Number.POSITIVE_INFINITY,
          stringify: eI,
        },
        e_ = {
          identify: (e) => 'number' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          format: 'EXP',
          test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
          resolve: (e) => parseFloat(e),
          stringify(e) {
            let t = Number(e.value);
            return isFinite(t) ? t.toExponential() : eI(e);
          },
        },
        eT = {
          identify: (e) => 'number' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
          resolve(e) {
            let t = new P(parseFloat(e)),
              n = e.indexOf('.');
            return (-1 !== n && '0' === e[e.length - 1] && (t.minFractionDigits = e.length - n - 1), t);
          },
          stringify: eI,
        },
        eC = (e) => 'bigint' == typeof e || Number.isInteger(e),
        eL = (e, t, n, { intAsBigInt: r }) => (r ? BigInt(e) : parseInt(e.substring(t), n));
      function ex(e, t, n) {
        let { value: r } = e;
        return eC(r) && r >= 0 ? n + r.toString(t) : eI(e);
      }
      let ej = {
          identify: (e) => eC(e) && e >= 0,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          format: 'OCT',
          test: /^0o[0-7]+$/,
          resolve: (e, t, n) => eL(e, 2, 8, n),
          stringify: (e) => ex(e, 8, '0o'),
        },
        eB = {
          identify: eC,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          test: /^[-+]?[0-9]+$/,
          resolve: (e, t, n) => eL(e, 0, 10, n),
          stringify: eI,
        },
        eM = {
          identify: (e) => eC(e) && e >= 0,
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          format: 'HEX',
          test: /^0x[0-9a-fA-F]+$/,
          resolve: (e, t, n) => eL(e, 2, 16, n),
          stringify: (e) => ex(e, 16, '0x'),
        },
        eD = [eO, eN, eS, ek, e$, ej, eB, eM, eA, e_, eT];
      function eR(e) {
        return 'bigint' == typeof e || Number.isInteger(e);
      }
      let eK = ({ value: e }) => JSON.stringify(e),
        eU = [eO, eN].concat(
          [
            {
              identify: (e) => 'string' == typeof e,
              default: !0,
              tag: 'tag:yaml.org,2002:str',
              resolve: (e) => e,
              stringify: eK,
            },
            {
              identify: (e) => null == e,
              createNode: () => new P(null),
              default: !0,
              tag: 'tag:yaml.org,2002:null',
              test: /^null$/,
              resolve: () => null,
              stringify: eK,
            },
            {
              identify: (e) => 'boolean' == typeof e,
              default: !0,
              tag: 'tag:yaml.org,2002:bool',
              test: /^true$|^false$/,
              resolve: (e) => 'true' === e,
              stringify: eK,
            },
            {
              identify: eR,
              default: !0,
              tag: 'tag:yaml.org,2002:int',
              test: /^-?(?:0|[1-9][0-9]*)$/,
              resolve: (e, t, { intAsBigInt: n }) => (n ? BigInt(e) : parseInt(e, 10)),
              stringify: ({ value: e }) => (eR(e) ? e.toString() : JSON.stringify(e)),
            },
            {
              identify: (e) => 'number' == typeof e,
              default: !0,
              tag: 'tag:yaml.org,2002:float',
              test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
              resolve: (e) => parseFloat(e),
              stringify: eK,
            },
          ],
          {
            default: !0,
            tag: '',
            test: /^/,
            resolve: (e, t) => (t(`Unresolved plain scalar ${JSON.stringify(e)}`), e),
          },
        ),
        eP = {
          identify: (e) => e instanceof Uint8Array,
          default: !1,
          tag: 'tag:yaml.org,2002:binary',
          resolve(e, t) {
            if ('function' != typeof atob)
              return (t('This environment does not support reading binary tags; either Buffer or atob is required'), e);
            {
              let t = atob(e.replace(/[\n\r]/g, '')),
                n = new Uint8Array(t.length);
              for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
              return n;
            }
          },
          stringify({ comment: e, type: t, value: n }, r, i, s) {
            let o;
            if (!n) return '';
            if ('function' == typeof btoa) {
              let e = '';
              for (let t = 0; t < n.length; ++t) e += String.fromCharCode(n[t]);
              o = btoa(e);
            } else
              throw Error('This environment does not support writing binary tags; either Buffer or btoa is required');
            if ((t ?? (t = P.BLOCK_LITERAL), t !== P.QUOTE_DOUBLE)) {
              let e = Math.max(r.options.lineWidth - r.indent.length, r.options.minContentWidth),
                n = Math.ceil(o.length / e),
                i = Array(n);
              for (let t = 0, r = 0; t < n; ++t, r += e) i[t] = o.substr(r, e);
              o = i.join(t === P.BLOCK_LITERAL ? '\n' : ' ');
            }
            return eo({ comment: e, type: t, value: o }, r, i, s);
          },
        };
      function eF(e, t) {
        if (p(e))
          for (let n = 0; n < e.items.length; ++n) {
            let r = e.items[n];
            if (!d(r)) {
              if (h(r)) {
                r.items.length > 1 && t('Each pair must have its own sequence indicator');
                let e = r.items[0] || new eg(new P(null));
                if (
                  (r.commentBefore &&
                    (e.key.commentBefore = e.key.commentBefore
                      ? `${r.commentBefore}
${e.key.commentBefore}`
                      : r.commentBefore),
                  r.comment)
                ) {
                  let t = e.value ?? e.key;
                  t.comment = t.comment
                    ? `${r.comment}
${t.comment}`
                    : r.comment;
                }
                r = e;
              }
              e.items[n] = d(r) ? r : new eg(r);
            }
          }
        else t('Expected a sequence for this tag');
        return e;
      }
      function eJ(e, t, n) {
        let { replacer: r } = n,
          i = new eE(e);
        i.tag = 'tag:yaml.org,2002:pairs';
        let s = 0;
        if (t && Symbol.iterator in Object(t))
          for (let e of t) {
            let o, l;
            if (('function' == typeof r && (e = r.call(t, String(s++), e)), Array.isArray(e)))
              if (2 === e.length) ((o = e[0]), (l = e[1]));
              else throw TypeError(`Expected [key, value] tuple: ${e}`);
            else if (e && e instanceof Object) {
              let t = Object.keys(e);
              if (1 === t.length) l = e[(o = t[0])];
              else throw TypeError(`Expected tuple with one key, not ${t.length} keys`);
            } else o = e;
            i.items.push(ed(o, l, n));
          }
        return i;
      }
      let eq = { collection: 'seq', default: !1, tag: 'tag:yaml.org,2002:pairs', resolve: eF, createNode: eJ };
      class eY extends eE {
        constructor() {
          (super(),
            (this.add = ev.prototype.add.bind(this)),
            (this.delete = ev.prototype.delete.bind(this)),
            (this.get = ev.prototype.get.bind(this)),
            (this.has = ev.prototype.has.bind(this)),
            (this.set = ev.prototype.set.bind(this)),
            (this.tag = eY.tag));
        }
        toJSON(e, t) {
          if (!t) return super.toJSON(e);
          let n = new Map();
          for (let e of (t?.onCreate && t.onCreate(n), this.items)) {
            let r, i;
            if ((d(e) ? ((r = D(e.key, '', t)), (i = D(e.value, r, t))) : (r = D(e, '', t)), n.has(r)))
              throw Error('Ordered maps must not include duplicate keys');
            n.set(r, i);
          }
          return n;
        }
        static from(e, t, n) {
          let r = eJ(e, t, n),
            i = new this();
          return ((i.items = r.items), i);
        }
      }
      eY.tag = 'tag:yaml.org,2002:omap';
      let eG = {
        collection: 'seq',
        identify: (e) => e instanceof Map,
        nodeClass: eY,
        default: !1,
        tag: 'tag:yaml.org,2002:omap',
        resolve(e, t) {
          let n = eF(e, t),
            r = [];
          for (let { key: e } of n.items)
            g(e) &&
              (r.includes(e.value) ? t(`Ordered maps must not include duplicate keys: ${e.value}`) : r.push(e.value));
          return Object.assign(new eY(), n);
        },
        createNode: (e, t, n) => eY.from(e, t, n),
      };
      function eV({ value: e, source: t }, n) {
        return t && (e ? eW : eH).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr;
      }
      let eW = {
          identify: (e) => !0 === e,
          default: !0,
          tag: 'tag:yaml.org,2002:bool',
          test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
          resolve: () => new P(!0),
          stringify: eV,
        },
        eH = {
          identify: (e) => !1 === e,
          default: !0,
          tag: 'tag:yaml.org,2002:bool',
          test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
          resolve: () => new P(!1),
          stringify: eV,
        },
        eQ = (e) => 'bigint' == typeof e || Number.isInteger(e);
      function eX(e, t, n, { intAsBigInt: r }) {
        let i = e[0];
        if ((('-' === i || '+' === i) && (t += 1), (e = e.substring(t).replace(/_/g, '')), r)) {
          switch (n) {
            case 2:
              e = `0b${e}`;
              break;
            case 8:
              e = `0o${e}`;
              break;
            case 16:
              e = `0x${e}`;
          }
          let t = BigInt(e);
          return '-' === i ? BigInt(-1) * t : t;
        }
        let s = parseInt(e, n);
        return '-' === i ? -1 * s : s;
      }
      function ez(e, t, n) {
        let { value: r } = e;
        if (eQ(r)) {
          let e = r.toString(t);
          return r < 0 ? '-' + n + e.substr(1) : n + e;
        }
        return eI(e);
      }
      class eZ extends ev {
        constructor(e) {
          (super(e), (this.tag = eZ.tag));
        }
        add(e) {
          let t;
          ((t = d(e)
            ? e
            : e && 'object' == typeof e && 'key' in e && 'value' in e && null === e.value
              ? new eg(e.key, null)
              : new eg(e, null)),
            eb(this.items, t.key) || this.items.push(t));
        }
        get(e, t) {
          let n = eb(this.items, e);
          return !t && d(n) ? (g(n.key) ? n.key.value : n.key) : n;
        }
        set(e, t) {
          if ('boolean' != typeof t)
            throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);
          let n = eb(this.items, e);
          n && !t ? this.items.splice(this.items.indexOf(n), 1) : !n && t && this.items.push(new eg(e));
        }
        toJSON(e, t) {
          return super.toJSON(e, t, Set);
        }
        toString(e, t, n) {
          if (!e) return JSON.stringify(this);
          if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, { allNullValues: !0 }), t, n);
          throw Error('Set items must all have null values');
        }
        static from(e, t, n) {
          let { replacer: r } = n,
            i = new this(e);
          if (t && Symbol.iterator in Object(t))
            for (let e of t) ('function' == typeof r && (e = r.call(t, e, e)), i.items.push(ed(e, null, n)));
          return i;
        }
      }
      eZ.tag = 'tag:yaml.org,2002:set';
      let e0 = {
        collection: 'map',
        identify: (e) => e instanceof Set,
        nodeClass: eZ,
        default: !1,
        tag: 'tag:yaml.org,2002:set',
        createNode: (e, t, n) => eZ.from(e, t, n),
        resolve(e, t) {
          if (h(e))
            if (e.hasAllNullValues(!0)) return Object.assign(new eZ(), e);
            else t('Set items must all have null values');
          else t('Expected a mapping for this tag');
          return e;
        },
      };
      function e1(e, t) {
        let n = e[0],
          r = '-' === n || '+' === n ? e.substring(1) : e,
          i = (e) => (t ? BigInt(e) : Number(e)),
          s = r
            .replace(/_/g, '')
            .split(':')
            .reduce((e, t) => e * i(60) + i(t), i(0));
        return '-' === n ? i(-1) * s : s;
      }
      function e2(e) {
        let { value: t } = e,
          n = (e) => e;
        if ('bigint' == typeof t) n = (e) => BigInt(e);
        else if (isNaN(t) || !isFinite(t)) return eI(e);
        let r = '';
        t < 0 && ((r = '-'), (t *= n(-1)));
        let i = n(60),
          s = [t % i];
        return (
          t < 60
            ? s.unshift(0)
            : ((t = (t - s[0]) / i), s.unshift(t % i), t >= 60 && ((t = (t - s[0]) / i), s.unshift(t))),
          r +
            s
              .map((e) => String(e).padStart(2, '0'))
              .join(':')
              .replace(/000000\d*$/, '')
        );
      }
      let e9 = {
          identify: (e) => 'bigint' == typeof e || Number.isInteger(e),
          default: !0,
          tag: 'tag:yaml.org,2002:int',
          format: 'TIME',
          test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
          resolve: (e, t, { intAsBigInt: n }) => e1(e, n),
          stringify: e2,
        },
        e8 = {
          identify: (e) => 'number' == typeof e,
          default: !0,
          tag: 'tag:yaml.org,2002:float',
          format: 'TIME',
          test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
          resolve: (e) => e1(e, !1),
          stringify: e2,
        },
        e4 = {
          identify: (e) => e instanceof Date,
          default: !0,
          tag: 'tag:yaml.org,2002:timestamp',
          test: RegExp(
            '^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$',
          ),
          resolve(e) {
            let t = e.match(e4.test);
            if (!t) throw Error('!!timestamp expects a date, starting with yyyy-mm-dd');
            let [, n, r, i, s, o, l] = t.map(Number),
              a = Date.UTC(n, r - 1, i, s || 0, o || 0, l || 0, t[7] ? Number((t[7] + '00').substr(1, 3)) : 0),
              c = t[8];
            if (c && 'Z' !== c) {
              let e = e1(c, !1);
              (30 > Math.abs(e) && (e *= 60), (a -= 6e4 * e));
            }
            return new Date(a);
          },
          stringify: ({ value: e }) => e?.toISOString().replace(/(T00:00:00)?\.000Z$/, '') ?? '',
        },
        e6 = [
          eO,
          eN,
          eS,
          ek,
          eW,
          eH,
          {
            identify: eQ,
            default: !0,
            tag: 'tag:yaml.org,2002:int',
            format: 'BIN',
            test: /^[-+]?0b[0-1_]+$/,
            resolve: (e, t, n) => eX(e, 2, 2, n),
            stringify: (e) => ez(e, 2, '0b'),
          },
          {
            identify: eQ,
            default: !0,
            tag: 'tag:yaml.org,2002:int',
            format: 'OCT',
            test: /^[-+]?0[0-7_]+$/,
            resolve: (e, t, n) => eX(e, 1, 8, n),
            stringify: (e) => ez(e, 8, '0'),
          },
          {
            identify: eQ,
            default: !0,
            tag: 'tag:yaml.org,2002:int',
            test: /^[-+]?[0-9][0-9_]*$/,
            resolve: (e, t, n) => eX(e, 0, 10, n),
            stringify: eI,
          },
          {
            identify: eQ,
            default: !0,
            tag: 'tag:yaml.org,2002:int',
            format: 'HEX',
            test: /^[-+]?0x[0-9a-fA-F_]+$/,
            resolve: (e, t, n) => eX(e, 2, 16, n),
            stringify: (e) => ez(e, 16, '0x'),
          },
          {
            identify: (e) => 'number' == typeof e,
            default: !0,
            tag: 'tag:yaml.org,2002:float',
            test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
            resolve: (e) =>
              'nan' === e.slice(-3).toLowerCase()
                ? NaN
                : '-' === e[0]
                  ? Number.NEGATIVE_INFINITY
                  : Number.POSITIVE_INFINITY,
            stringify: eI,
          },
          {
            identify: (e) => 'number' == typeof e,
            default: !0,
            tag: 'tag:yaml.org,2002:float',
            format: 'EXP',
            test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
            resolve: (e) => parseFloat(e.replace(/_/g, '')),
            stringify(e) {
              let t = Number(e.value);
              return isFinite(t) ? t.toExponential() : eI(e);
            },
          },
          {
            identify: (e) => 'number' == typeof e,
            default: !0,
            tag: 'tag:yaml.org,2002:float',
            test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
            resolve(e) {
              let t = new P(parseFloat(e.replace(/_/g, ''))),
                n = e.indexOf('.');
              if (-1 !== n) {
                let r = e.substring(n + 1).replace(/_/g, '');
                '0' === r[r.length - 1] && (t.minFractionDigits = r.length);
              }
              return t;
            },
            stringify: eI,
          },
          eP,
          ec,
          eG,
          eq,
          e0,
          e9,
          e8,
          e4,
        ],
        e7 = new Map([
          ['core', eD],
          ['failsafe', [eO, eN, eS]],
          ['json', eU],
          ['yaml11', e6],
          ['yaml-1.1', e6],
        ]),
        e3 = {
          binary: eP,
          bool: e$,
          float: eT,
          floatExp: e_,
          floatNaN: eA,
          floatTime: e8,
          int: eB,
          intHex: eM,
          intOct: ej,
          intTime: e9,
          map: eO,
          merge: ec,
          null: ek,
          omap: eG,
          pairs: eq,
          seq: eN,
          set: e0,
          timestamp: e4,
        },
        e5 = {
          'tag:yaml.org,2002:binary': eP,
          'tag:yaml.org,2002:merge': ec,
          'tag:yaml.org,2002:omap': eG,
          'tag:yaml.org,2002:pairs': eq,
          'tag:yaml.org,2002:set': e0,
          'tag:yaml.org,2002:timestamp': e4,
        };
      function te(e, t, n) {
        let r = e7.get(t);
        if (r && !e) return n && !r.includes(ec) ? r.concat(ec) : r.slice();
        let i = r;
        if (!i)
          if (Array.isArray(e)) i = [];
          else {
            let e = Array.from(e7.keys())
              .filter((e) => 'yaml11' !== e)
              .map((e) => JSON.stringify(e))
              .join(', ');
            throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`);
          }
        if (Array.isArray(e)) for (let t of e) i = i.concat(t);
        else 'function' == typeof e && (i = e(i.slice()));
        return (
          n && (i = i.concat(ec)),
          i.reduce((e, t) => {
            let n = 'string' == typeof t ? e3[t] : t;
            if (!n) {
              let e = JSON.stringify(t),
                n = Object.keys(e3)
                  .map((e) => JSON.stringify(e))
                  .join(', ');
              throw Error(`Unknown custom tag ${e}; use one of ${n}`);
            }
            return (e.includes(n) || e.push(n), e);
          }, [])
        );
      }
      let tt = (e, t) => (e.key < t.key ? -1 : +(e.key > t.key));
      class tn {
        constructor({
          compat: e,
          customTags: t,
          merge: n,
          resolveKnownTags: r,
          schema: i,
          sortMapEntries: s,
          toStringDefaults: l,
        }) {
          ((this.compat = Array.isArray(e) ? te(e, 'compat') : e ? te(null, e) : null),
            (this.name = ('string' == typeof i && i) || 'core'),
            (this.knownTags = r ? e5 : {}),
            (this.tags = te(t, this.name, n)),
            (this.toStringOptions = l ?? null),
            Object.defineProperty(this, o, { value: eO }),
            Object.defineProperty(this, a, { value: eS }),
            Object.defineProperty(this, c, { value: eN }),
            (this.sortMapEntries = 'function' == typeof s ? s : !0 === s ? tt : null));
        }
        clone() {
          let e = Object.create(tn.prototype, Object.getOwnPropertyDescriptors(this));
          return ((e.tags = this.tags.slice()), e);
        }
      }
      class tr {
        constructor(e, t, n) {
          ((this.commentBefore = null),
            (this.comment = null),
            (this.errors = []),
            (this.warnings = []),
            Object.defineProperty(this, f, { value: s }));
          let r = null;
          'function' == typeof t || Array.isArray(t) ? (r = t) : void 0 === n && t && ((n = t), (t = void 0));
          let i = Object.assign(
            {
              intAsBigInt: !1,
              keepSourceTokens: !1,
              logLevel: 'warn',
              prettyErrors: !0,
              strict: !0,
              stringKeys: !1,
              uniqueKeys: !0,
              version: '1.2',
            },
            n,
          );
          this.options = i;
          let { version: o } = i;
          (n?._directives
            ? ((this.directives = n._directives.atDocument()),
              this.directives.yaml.explicit && (o = this.directives.yaml.version))
            : (this.directives = new L({ version: o })),
            this.setSchema(o, n),
            (this.contents = void 0 === e ? null : this.createNode(e, r, n)));
        }
        clone() {
          let e = Object.create(tr.prototype, { [f]: { value: s } });
          return (
            (e.commentBefore = this.commentBefore),
            (e.comment = this.comment),
            (e.errors = this.errors.slice()),
            (e.warnings = this.warnings.slice()),
            (e.options = Object.assign({}, this.options)),
            this.directives && (e.directives = this.directives.clone()),
            (e.schema = this.schema.clone()),
            (e.contents = b(this.contents) ? this.contents.clone(e.schema) : this.contents),
            this.range && (e.range = this.range.slice()),
            e
          );
        }
        add(e) {
          ti(this.contents) && this.contents.add(e);
        }
        addIn(e, t) {
          ti(this.contents) && this.contents.addIn(e, t);
        }
        createAlias(e, t) {
          if (!e.anchor) {
            let n = j(this);
            e.anchor = !t || n.has(t) ? B(t || 'a', n) : t;
          }
          return new K(e.anchor);
        }
        createNode(e, t, n) {
          let r;
          if ('function' == typeof t) ((e = t.call({ '': e }, '', e)), (r = t));
          else if (Array.isArray(t)) {
            let e = t.filter((e) => 'number' == typeof e || e instanceof String || e instanceof Number).map(String);
            (e.length > 0 && (t = t.concat(e)), (r = t));
          } else void 0 === n && t && ((n = t), (t = void 0));
          let { aliasDuplicateObjects: i, anchorPrefix: s, flow: o, keepUndefined: l, onTagObj: a, tag: c } = n ?? {},
            {
              onAnchor: f,
              setAnchors: u,
              sourceObjects: m,
            } = (function (e, t) {
              let n = [],
                r = new Map(),
                i = null;
              return {
                onAnchor: (r) => {
                  (n.push(r), i ?? (i = j(e)));
                  let s = B(t, i);
                  return (i.add(s), s);
                },
                setAnchors: () => {
                  for (let e of n) {
                    let t = r.get(e);
                    if ('object' == typeof t && t.anchor && (g(t.node) || y(t.node))) t.node.anchor = t.anchor;
                    else {
                      let t = Error('Failed to resolve repeated object (this should not happen)');
                      throw ((t.source = e), t);
                    }
                  }
                },
                sourceObjects: r,
              };
            })(this, s || 'a'),
            h = {
              aliasDuplicateObjects: i ?? !0,
              keepUndefined: l ?? !1,
              onAnchor: f,
              onTagObj: a,
              replacer: r,
              schema: this.schema,
              sourceObjects: m,
            },
            d = F(e, c, h);
          return (o && y(d) && (d.flow = !0), u(), d);
        }
        createPair(e, t, n = {}) {
          return new eg(this.createNode(e, null, n), this.createNode(t, null, n));
        }
        delete(e) {
          return !!ti(this.contents) && this.contents.delete(e);
        }
        deleteIn(e) {
          return q(e)
            ? null != this.contents && ((this.contents = null), !0)
            : !!ti(this.contents) && this.contents.deleteIn(e);
        }
        get(e, t) {
          return y(this.contents) ? this.contents.get(e, t) : void 0;
        }
        getIn(e, t) {
          return q(e)
            ? !t && g(this.contents)
              ? this.contents.value
              : this.contents
            : y(this.contents)
              ? this.contents.getIn(e, t)
              : void 0;
        }
        has(e) {
          return !!y(this.contents) && this.contents.has(e);
        }
        hasIn(e) {
          return q(e) ? void 0 !== this.contents : !!y(this.contents) && this.contents.hasIn(e);
        }
        set(e, t) {
          null == this.contents
            ? (this.contents = J(this.schema, [e], t))
            : ti(this.contents) && this.contents.set(e, t);
        }
        setIn(e, t) {
          q(e)
            ? (this.contents = t)
            : null == this.contents
              ? (this.contents = J(this.schema, Array.from(e), t))
              : ti(this.contents) && this.contents.setIn(e, t);
        }
        setSchema(e, t = {}) {
          let n;
          switch (('number' == typeof e && (e = String(e)), e)) {
            case '1.1':
              (this.directives ? (this.directives.yaml.version = '1.1') : (this.directives = new L({ version: '1.1' })),
                (n = { resolveKnownTags: !1, schema: 'yaml-1.1' }));
              break;
            case '1.2':
            case 'next':
              (this.directives ? (this.directives.yaml.version = e) : (this.directives = new L({ version: e })),
                (n = { resolveKnownTags: !0, schema: 'core' }));
              break;
            case null:
              (this.directives && delete this.directives, (n = null));
              break;
            default: {
              let t = JSON.stringify(e);
              throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`);
            }
          }
          if (t.schema instanceof Object) this.schema = t.schema;
          else if (n) this.schema = new tn(Object.assign(n, t));
          else throw Error('With a null YAML version, the { schema: Schema } option is required');
        }
        toJS({ json: e, jsonArg: t, mapAsMap: n, maxAliasCount: r, onAnchor: i, reviver: s } = {}) {
          let o = {
              anchors: new Map(),
              doc: this,
              keep: !e,
              mapAsMap: !0 === n,
              mapKeyWarned: !1,
              maxAliasCount: 'number' == typeof r ? r : 100,
            },
            l = D(this.contents, t ?? '', o);
          if ('function' == typeof i) for (let { count: e, res: t } of o.anchors.values()) i(t, e);
          return 'function' == typeof s ? M(s, { '': l }, '', l) : l;
        }
        toJSON(e, t) {
          return this.toJS({ json: !0, jsonArg: e, mapAsMap: !1, onAnchor: t });
        }
        toString(e = {}) {
          if (this.errors.length > 0) throw Error('Document with errors cannot be stringified');
          if ('indent' in e && (!Number.isInteger(e.indent) || 0 >= Number(e.indent))) {
            let t = JSON.stringify(e.indent);
            throw Error(`"indent" option must be a positive integer, not ${t}`);
          }
          return (function (e, t) {
            let n = [],
              r = !0 === t.directives;
            if (!1 !== t.directives && e.directives) {
              let t = e.directives.toString(e);
              t ? (n.push(t), (r = !0)) : e.directives.docStart && (r = !0);
            }
            r && n.push('---');
            let i = el(e, t),
              { commentString: s } = i.options;
            if (e.commentBefore) {
              1 !== n.length && n.unshift('');
              let t = s(e.commentBefore);
              n.unshift(V(t, ''));
            }
            let o = !1,
              l = null;
            if (e.contents) {
              if (b(e.contents)) {
                if ((e.contents.spaceBefore && r && n.push(''), e.contents.commentBefore)) {
                  let t = s(e.contents.commentBefore);
                  n.push(V(t, ''));
                }
                ((i.forceBlockIndent = !!e.comment), (l = e.contents.comment));
              }
              let t = l ? void 0 : () => (o = !0),
                a = ea(e.contents, i, () => (l = null), t);
              (l && (a += W(a, '', s(l))),
                ('|' === a[0] || '>' === a[0]) && '---' === n[n.length - 1]
                  ? (n[n.length - 1] = `--- ${a}`)
                  : n.push(a));
            } else n.push(ea(e.contents, i));
            if (e.directives?.docEnd)
              if (e.comment) {
                let t = s(e.comment);
                t.includes('\n') ? (n.push('...'), n.push(V(t, ''))) : n.push(`... ${t}`);
              } else n.push('...');
            else {
              let t = e.comment;
              (t && o && (t = t.replace(/^\n+/, '')),
                t && ((!o || l) && '' !== n[n.length - 1] && n.push(''), n.push(V(s(t), ''))));
            }
            return n.join('\n') + '\n';
          })(this, e);
        }
      }
      function ti(e) {
        if (y(e)) return !0;
        throw Error('Expected a YAML collection as document contents');
      }
      function ts(e, { flow: t, indicator: n, next: r, offset: i, onError: s, parentIndent: o, startOnNewline: l }) {
        let a = !1,
          c = l,
          f = l,
          u = '',
          m = '',
          h = !1,
          d = !1,
          g = null,
          p = null,
          y = null,
          b = null,
          v = null,
          O = null,
          E = null;
        for (let i of e)
          switch (
            (d &&
              ('space' !== i.type &&
                'newline' !== i.type &&
                'comma' !== i.type &&
                s(i.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space'),
              (d = !1)),
            g &&
              (c &&
                'comment' !== i.type &&
                'newline' !== i.type &&
                s(g, 'TAB_AS_INDENT', 'Tabs are not allowed as indentation'),
              (g = null)),
            i.type)
          ) {
            case 'space':
              (!t && ('doc-start' !== n || r?.type !== 'flow-collection') && i.source.includes('	') && (g = i),
                (f = !0));
              break;
            case 'comment': {
              f || s(i, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
              let e = i.source.substring(1) || ' ';
              (u ? (u += m + e) : (u = e), (m = ''), (c = !1));
              break;
            }
            case 'newline':
              (c ? (u ? (u += i.source) : (O && 'seq-item-ind' === n) || (a = !0)) : (m += i.source),
                (c = !0),
                (h = !0),
                (p || y) && (b = i),
                (f = !0));
              break;
            case 'anchor':
              (p && s(i, 'MULTIPLE_ANCHORS', 'A node can have at most one anchor'),
                i.source.endsWith(':') &&
                  s(i.offset + i.source.length - 1, 'BAD_ALIAS', 'Anchor ending in : is ambiguous', !0),
                (p = i),
                E ?? (E = i.offset),
                (c = !1),
                (f = !1),
                (d = !0));
              break;
            case 'tag':
              (y && s(i, 'MULTIPLE_TAGS', 'A node can have at most one tag'),
                (y = i),
                E ?? (E = i.offset),
                (c = !1),
                (f = !1),
                (d = !0));
              break;
            case n:
              ((p || y) && s(i, 'BAD_PROP_ORDER', `Anchors and tags must be after the ${i.source} indicator`),
                O && s(i, 'UNEXPECTED_TOKEN', `Unexpected ${i.source} in ${t ?? 'collection'}`),
                (O = i),
                (c = 'seq-item-ind' === n || 'explicit-key-ind' === n),
                (f = !1));
              break;
            case 'comma':
              if (t) {
                (v && s(i, 'UNEXPECTED_TOKEN', `Unexpected , in ${t}`), (v = i), (c = !1), (f = !1));
                break;
              }
            default:
              (s(i, 'UNEXPECTED_TOKEN', `Unexpected ${i.type} token`), (c = !1), (f = !1));
          }
        let w = e[e.length - 1],
          N = w ? w.offset + w.source.length : i;
        return (
          d &&
            r &&
            'space' !== r.type &&
            'newline' !== r.type &&
            'comma' !== r.type &&
            ('scalar' !== r.type || '' !== r.source) &&
            s(r.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space'),
          g &&
            ((c && g.indent <= o) || r?.type === 'block-map' || r?.type === 'block-seq') &&
            s(g, 'TAB_AS_INDENT', 'Tabs are not allowed as indentation'),
          {
            comma: v,
            found: O,
            spaceBefore: a,
            comment: u,
            hasNewline: h,
            anchor: p,
            tag: y,
            newlineAfterProp: b,
            end: N,
            start: E ?? N,
          }
        );
      }
      function to(e) {
        if (!e) return null;
        switch (e.type) {
          case 'alias':
          case 'scalar':
          case 'double-quoted-scalar':
          case 'single-quoted-scalar':
            if (e.source.includes('\n')) return !0;
            if (e.end) {
              for (let t of e.end) if ('newline' === t.type) return !0;
            }
            return !1;
          case 'flow-collection':
            for (let t of e.items) {
              for (let e of t.start) if ('newline' === e.type) return !0;
              if (t.sep) {
                for (let e of t.sep) if ('newline' === e.type) return !0;
              }
              if (to(t.key) || to(t.value)) return !0;
            }
            return !1;
          default:
            return !0;
        }
      }
      function tl(e, t, n) {
        if (t?.type === 'flow-collection') {
          let r = t.end[0];
          r.indent === e &&
            (']' === r.source || '}' === r.source) &&
            to(t) &&
            n(r, 'BAD_INDENT', 'Flow end indicator should be more indented than parent', !0);
        }
      }
      function ta(e, t, n) {
        let { uniqueKeys: r } = e.options;
        if (!1 === r) return !1;
        let i = 'function' == typeof r ? r : (e, t) => e === t || (g(e) && g(t) && e.value === t.value);
        return t.some((e) => i(e.key, n));
      }
      let tc = 'All mapping items must start at the same column';
      function tf(e, t, n, r) {
        let i = '';
        if (e) {
          let s = !1,
            o = '';
          for (let l of e) {
            let { source: e, type: a } = l;
            switch (a) {
              case 'space':
                s = !0;
                break;
              case 'comment': {
                n &&
                  !s &&
                  r(l, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
                let t = e.substring(1) || ' ';
                (i ? (i += o + t) : (i = t), (o = ''));
                break;
              }
              case 'newline':
                (i && (o += e), (s = !0));
                break;
              default:
                r(l, 'UNEXPECTED_TOKEN', `Unexpected ${a} at node end`);
            }
            t += e.length;
          }
        }
        return { comment: i, offset: t };
      }
      let tu = 'Block collections are not allowed within flow collections',
        tm = (e) => e && ('block-map' === e.type || 'block-seq' === e.type);
      function th(e, t, n, r, i, s) {
        let o =
            'block-map' === n.type
              ? (function ({ composeNode: e, composeEmptyNode: t }, n, r, i, s) {
                  let o = new (s?.nodeClass ?? ev)(n.schema);
                  n.atRoot && (n.atRoot = !1);
                  let l = r.offset,
                    a = null;
                  for (let s of r.items) {
                    let { start: c, key: f, sep: u, value: m } = s,
                      h = ts(c, {
                        indicator: 'explicit-key-ind',
                        next: f ?? u?.[0],
                        offset: l,
                        onError: i,
                        parentIndent: r.indent,
                        startOnNewline: !0,
                      }),
                      d = !h.found;
                    if (d) {
                      if (
                        (f &&
                          ('block-seq' === f.type
                            ? i(l, 'BLOCK_AS_IMPLICIT_KEY', 'A block sequence may not be used as an implicit map key')
                            : 'indent' in f && f.indent !== r.indent && i(l, 'BAD_INDENT', tc)),
                        !h.anchor && !h.tag && !u)
                      ) {
                        ((a = h.end),
                          h.comment && (o.comment ? (o.comment += '\n' + h.comment) : (o.comment = h.comment)));
                        continue;
                      }
                      (h.newlineAfterProp || to(f)) &&
                        i(f ?? c[c.length - 1], 'MULTILINE_IMPLICIT_KEY', 'Implicit keys need to be on a single line');
                    } else h.found?.indent !== r.indent && i(l, 'BAD_INDENT', tc);
                    n.atKey = !0;
                    let g = h.end,
                      p = f ? e(n, f, h, i) : t(n, g, c, null, h, i);
                    (n.schema.compat && tl(r.indent, f, i),
                      (n.atKey = !1),
                      ta(n, o.items, p) && i(g, 'DUPLICATE_KEY', 'Map keys must be unique'));
                    let y = ts(u ?? [], {
                      indicator: 'map-value-ind',
                      next: m,
                      offset: p.range[2],
                      onError: i,
                      parentIndent: r.indent,
                      startOnNewline: !f || 'block-scalar' === f.type,
                    });
                    if (((l = y.end), y.found)) {
                      d &&
                        (m?.type !== 'block-map' ||
                          y.hasNewline ||
                          i(l, 'BLOCK_AS_IMPLICIT_KEY', 'Nested mappings are not allowed in compact mappings'),
                        n.options.strict &&
                          h.start < y.found.offset - 1024 &&
                          i(
                            p.range,
                            'KEY_OVER_1024_CHARS',
                            'The : indicator must be at most 1024 chars after the start of an implicit block mapping key',
                          ));
                      let a = m ? e(n, m, y, i) : t(n, l, u, null, y, i);
                      (n.schema.compat && tl(r.indent, m, i), (l = a.range[2]));
                      let c = new eg(p, a);
                      (n.options.keepSourceTokens && (c.srcToken = s), o.items.push(c));
                    } else {
                      (d && i(p.range, 'MISSING_CHAR', 'Implicit map keys need to be followed by map values'),
                        y.comment && (p.comment ? (p.comment += '\n' + y.comment) : (p.comment = y.comment)));
                      let e = new eg(p);
                      (n.options.keepSourceTokens && (e.srcToken = s), o.items.push(e));
                    }
                  }
                  return (
                    a && a < l && i(a, 'IMPOSSIBLE', 'Map comment with trailing content'),
                    (o.range = [r.offset, l, a ?? l]),
                    o
                  );
                })(e, t, n, r, s)
              : 'block-seq' === n.type
                ? (function ({ composeNode: e, composeEmptyNode: t }, n, r, i, s) {
                    let o = new (s?.nodeClass ?? eE)(n.schema);
                    (n.atRoot && (n.atRoot = !1), n.atKey && (n.atKey = !1));
                    let l = r.offset,
                      a = null;
                    for (let { start: s, value: c } of r.items) {
                      let f = ts(s, {
                        indicator: 'seq-item-ind',
                        next: c,
                        offset: l,
                        onError: i,
                        parentIndent: r.indent,
                        startOnNewline: !0,
                      });
                      if (!f.found)
                        if (f.anchor || f.tag || c)
                          c && 'block-seq' === c.type
                            ? i(f.end, 'BAD_INDENT', 'All sequence items must start at the same column')
                            : i(l, 'MISSING_CHAR', 'Sequence item without - indicator');
                        else {
                          ((a = f.end), f.comment && (o.comment = f.comment));
                          continue;
                        }
                      let u = c ? e(n, c, f, i) : t(n, f.end, s, null, f, i);
                      (n.schema.compat && tl(r.indent, c, i), (l = u.range[2]), o.items.push(u));
                    }
                    return ((o.range = [r.offset, l, a ?? l]), o);
                  })(e, t, n, r, s)
                : (function ({ composeNode: e, composeEmptyNode: t }, n, r, i, s) {
                    let o = '{' === r.start.source,
                      l = o ? 'flow map' : 'flow sequence',
                      a = new (s?.nodeClass ?? (o ? ev : eE))(n.schema);
                    a.flow = !0;
                    let c = n.atRoot;
                    (c && (n.atRoot = !1), n.atKey && (n.atKey = !1));
                    let f = r.offset + r.start.source.length;
                    for (let s = 0; s < r.items.length; ++s) {
                      let c = r.items[s],
                        { start: u, key: m, sep: h, value: g } = c,
                        p = ts(u, {
                          flow: l,
                          indicator: 'explicit-key-ind',
                          next: m ?? h?.[0],
                          offset: f,
                          onError: i,
                          parentIndent: r.indent,
                          startOnNewline: !1,
                        });
                      if (!p.found) {
                        if (!p.anchor && !p.tag && !h && !g) {
                          (0 === s && p.comma
                            ? i(p.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${l}`)
                            : s < r.items.length - 1 && i(p.start, 'UNEXPECTED_TOKEN', `Unexpected empty item in ${l}`),
                            p.comment && (a.comment ? (a.comment += '\n' + p.comment) : (a.comment = p.comment)),
                            (f = p.end));
                          continue;
                        }
                        !o &&
                          n.options.strict &&
                          to(m) &&
                          i(
                            m,
                            'MULTILINE_IMPLICIT_KEY',
                            'Implicit keys of flow sequence pairs need to be on a single line',
                          );
                      }
                      if (0 === s) p.comma && i(p.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${l}`);
                      else if ((p.comma || i(p.start, 'MISSING_CHAR', `Missing , between ${l} items`), p.comment)) {
                        let e = '';
                        e: for (let t of u)
                          switch (t.type) {
                            case 'comma':
                            case 'space':
                              break;
                            case 'comment':
                              e = t.source.substring(1);
                              break e;
                            default:
                              break e;
                          }
                        if (e) {
                          let t = a.items[a.items.length - 1];
                          (d(t) && (t = t.value ?? t.key),
                            t.comment ? (t.comment += '\n' + e) : (t.comment = e),
                            (p.comment = p.comment.substring(e.length + 1)));
                        }
                      }
                      if (o || h || p.found) {
                        n.atKey = !0;
                        let s = p.end,
                          d = m ? e(n, m, p, i) : t(n, s, u, null, p, i);
                        (tm(m) && i(d.range, 'BLOCK_IN_FLOW', tu), (n.atKey = !1));
                        let y = ts(h ?? [], {
                          flow: l,
                          indicator: 'map-value-ind',
                          next: g,
                          offset: d.range[2],
                          onError: i,
                          parentIndent: r.indent,
                          startOnNewline: !1,
                        });
                        if (y.found) {
                          if (!o && !p.found && n.options.strict) {
                            if (h)
                              for (let e of h) {
                                if (e === y.found) break;
                                if ('newline' === e.type) {
                                  i(
                                    e,
                                    'MULTILINE_IMPLICIT_KEY',
                                    'Implicit keys of flow sequence pairs need to be on a single line',
                                  );
                                  break;
                                }
                              }
                            p.start < y.found.offset - 1024 &&
                              i(
                                y.found,
                                'KEY_OVER_1024_CHARS',
                                'The : indicator must be at most 1024 chars after the start of an implicit flow sequence key',
                              );
                          }
                        } else
                          g &&
                            ('source' in g && g.source && ':' === g.source[0]
                              ? i(g, 'MISSING_CHAR', `Missing space after : in ${l}`)
                              : i(y.start, 'MISSING_CHAR', `Missing , or : between ${l} items`));
                        let b = g ? e(n, g, y, i) : y.found ? t(n, y.end, h, null, y, i) : null;
                        b
                          ? tm(g) && i(b.range, 'BLOCK_IN_FLOW', tu)
                          : y.comment && (d.comment ? (d.comment += '\n' + y.comment) : (d.comment = y.comment));
                        let v = new eg(d, b);
                        if ((n.options.keepSourceTokens && (v.srcToken = c), o))
                          (ta(n, a.items, d) && i(s, 'DUPLICATE_KEY', 'Map keys must be unique'), a.items.push(v));
                        else {
                          let e = new ev(n.schema);
                          ((e.flow = !0), e.items.push(v));
                          let t = (b ?? d).range;
                          ((e.range = [d.range[0], t[1], t[2]]), a.items.push(e));
                        }
                        f = b ? b.range[2] : y.end;
                      } else {
                        let r = g ? e(n, g, p, i) : t(n, p.end, h, null, p, i);
                        (a.items.push(r), (f = r.range[2]), tm(g) && i(r.range, 'BLOCK_IN_FLOW', tu));
                      }
                    }
                    let u = o ? '}' : ']',
                      [m, ...h] = r.end,
                      g = f;
                    if (m && m.source === u) g = m.offset + m.source.length;
                    else {
                      let e = l[0].toUpperCase() + l.substring(1),
                        t = c
                          ? `${e} must end with a ${u}`
                          : `${e} in block collection must be sufficiently indented and end with a ${u}`;
                      (i(f, c ? 'MISSING_CHAR' : 'BAD_INDENT', t), m && 1 !== m.source.length && h.unshift(m));
                    }
                    if (h.length > 0) {
                      let e = tf(h, g, n.options.strict, i);
                      (e.comment && (a.comment ? (a.comment += '\n' + e.comment) : (a.comment = e.comment)),
                        (a.range = [r.offset, g, e.offset]));
                    } else a.range = [r.offset, g, g];
                    return a;
                  })(e, t, n, r, s),
          l = o.constructor;
        return ('!' === i || i === l.tagName ? (o.tag = l.tagName) : i && (o.tag = i), o);
      }
      function td(e) {
        let t, n;
        try {
          ((t = RegExp('(.*?)(?<![ 	])[ 	]*\r?\n', 'sy')), (n = RegExp('[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?\n', 'sy')));
        } catch {
          ((t = /(.*?)[ \t]*\r?\n/sy), (n = /[ \t]*(.*?)[ \t]*\r?\n/sy));
        }
        let r = t.exec(e);
        if (!r) return e;
        let i = r[1],
          s = ' ',
          o = t.lastIndex;
        for (n.lastIndex = o; (r = n.exec(e)); )
          ('' === r[1] ? ('\n' === s ? (i += s) : (s = '\n')) : ((i += s + r[1]), (s = ' ')), (o = n.lastIndex));
        let l = /[ \t]*(.*)/sy;
        return ((l.lastIndex = o), (r = l.exec(e)), i + s + (r?.[1] ?? ''));
      }
      let tg = {
        0: '\0',
        a: '\x07',
        b: '\b',
        e: '\x1b',
        f: '\f',
        n: '\n',
        r: '\r',
        t: '	',
        v: '\v',
        N: '\x85',
        _: '\xa0',
        L: '\u2028',
        P: '\u2029',
        ' ': ' ',
        '"': '"',
        '/': '/',
        '\\': '\\',
        '	': '	',
      };
      function tp(e, t, n, r) {
        let i,
          s,
          {
            value: o,
            type: l,
            comment: c,
            range: f,
          } = 'block-scalar' === t.type
            ? (function (e, t, n) {
                let r = t.offset,
                  i = (function ({ offset: e, props: t }, n, r) {
                    if ('block-scalar-header' !== t[0].type)
                      return (r(t[0], 'IMPOSSIBLE', 'Block scalar header not found'), null);
                    let { source: i } = t[0],
                      s = i[0],
                      o = 0,
                      l = '',
                      a = -1;
                    for (let t = 1; t < i.length; ++t) {
                      let n = i[t];
                      if (l || ('-' !== n && '+' !== n)) {
                        let r = Number(n);
                        !o && r ? (o = r) : -1 === a && (a = e + t);
                      } else l = n;
                    }
                    -1 !== a && r(a, 'UNEXPECTED_TOKEN', `Block scalar header includes extra characters: ${i}`);
                    let c = !1,
                      f = '',
                      u = i.length;
                    for (let e = 1; e < t.length; ++e) {
                      let i = t[e];
                      switch (i.type) {
                        case 'space':
                          c = !0;
                        case 'newline':
                          u += i.source.length;
                          break;
                        case 'comment':
                          (n &&
                            !c &&
                            r(
                              i,
                              'MISSING_CHAR',
                              'Comments must be separated from other tokens by white space characters',
                            ),
                            (u += i.source.length),
                            (f = i.source.substring(1)));
                          break;
                        case 'error':
                          (r(i, 'UNEXPECTED_TOKEN', i.message), (u += i.source.length));
                          break;
                        default: {
                          let e = `Unexpected token in block scalar header: ${i.type}`;
                          r(i, 'UNEXPECTED_TOKEN', e);
                          let t = i.source;
                          t && 'string' == typeof t && (u += t.length);
                        }
                      }
                    }
                    return { mode: s, indent: o, chomp: l, comment: f, length: u };
                  })(t, e.options.strict, n);
                if (!i) return { value: '', type: null, comment: '', range: [r, r, r] };
                let s = '>' === i.mode ? P.BLOCK_FOLDED : P.BLOCK_LITERAL,
                  o = t.source
                    ? (function (e) {
                        let t = e.split(/\n( *)/),
                          n = t[0],
                          r = n.match(/^( *)/),
                          i = [r?.[1] ? [r[1], n.slice(r[1].length)] : ['', n]];
                        for (let e = 1; e < t.length; e += 2) i.push([t[e], t[e + 1]]);
                        return i;
                      })(t.source)
                    : [],
                  l = o.length;
                for (let e = o.length - 1; e >= 0; --e) {
                  let t = o[e][1];
                  if ('' === t || '\r' === t) l = e;
                  else break;
                }
                if (0 === l) {
                  let e = '+' === i.chomp && o.length > 0 ? '\n'.repeat(Math.max(1, o.length - 1)) : '',
                    n = r + i.length;
                  return (
                    t.source && (n += t.source.length),
                    { value: e, type: s, comment: i.comment, range: [r, n, n] }
                  );
                }
                let a = t.indent + i.indent,
                  c = t.offset + i.length,
                  f = 0;
                for (let t = 0; t < l; ++t) {
                  let [r, s] = o[t];
                  if ('' === s || '\r' === s) 0 === i.indent && r.length > a && (a = r.length);
                  else {
                    (r.length < a &&
                      n(
                        c + r.length,
                        'MISSING_CHAR',
                        'Block scalars with more-indented leading empty lines must use an explicit indentation indicator',
                      ),
                      0 === i.indent && (a = r.length),
                      (f = t),
                      0 !== a || e.atRoot || n(c, 'BAD_INDENT', 'Block scalar values in collections must be indented'));
                    break;
                  }
                  c += r.length + s.length + 1;
                }
                for (let e = o.length - 1; e >= l; --e) o[e][0].length > a && (l = e + 1);
                let u = '',
                  m = '',
                  h = !1;
                for (let e = 0; e < f; ++e) u += o[e][0].slice(a) + '\n';
                for (let e = f; e < l; ++e) {
                  let [t, r] = o[e];
                  c += t.length + r.length + 1;
                  let l = '\r' === r[r.length - 1];
                  if ((l && (r = r.slice(0, -1)), r && t.length < a)) {
                    let e = i.indent ? 'explicit indentation indicator' : 'first line',
                      s = `Block scalar lines must not be less indented than their ${e}`;
                    (n(c - r.length - (l ? 2 : 1), 'BAD_INDENT', s), (t = ''));
                  }
                  s === P.BLOCK_LITERAL
                    ? ((u += m + t.slice(a) + r), (m = '\n'))
                    : t.length > a || '	' === r[0]
                      ? (' ' === m ? (m = '\n') : h || '\n' !== m || (m = '\n\n'),
                        (u += m + t.slice(a) + r),
                        (m = '\n'),
                        (h = !0))
                      : '' === r
                        ? '\n' === m
                          ? (u += '\n')
                          : (m = '\n')
                        : ((u += m + r), (m = ' '), (h = !1));
                }
                switch (i.chomp) {
                  case '-':
                    break;
                  case '+':
                    for (let e = l; e < o.length; ++e) u += '\n' + o[e][0].slice(a);
                    '\n' !== u[u.length - 1] && (u += '\n');
                    break;
                  default:
                    u += '\n';
                }
                let d = r + i.length + t.source.length;
                return { value: u, type: s, comment: i.comment, range: [r, d, d] };
              })(e, t, r)
            : (function (e, t, n) {
                let r,
                  i,
                  { offset: s, type: o, source: l, end: a } = e,
                  c = (e, t, r) => n(s + e, t, r);
                switch (o) {
                  case 'scalar':
                    ((r = P.PLAIN),
                      (i = (function (e, t) {
                        let n = '';
                        switch (e[0]) {
                          case '	':
                            n = 'a tab character';
                            break;
                          case ',':
                            n = 'flow indicator character ,';
                            break;
                          case '%':
                            n = 'directive indicator character %';
                            break;
                          case '|':
                          case '>':
                            n = `block scalar indicator ${e[0]}`;
                            break;
                          case '@':
                          case '`':
                            n = `reserved character ${e[0]}`;
                        }
                        return (n && t(0, 'BAD_SCALAR_START', `Plain value cannot start with ${n}`), td(e));
                      })(l, c)));
                    break;
                  case 'single-quoted-scalar':
                    var f, u;
                    ((r = P.QUOTE_SINGLE),
                      (f = l),
                      (u = c),
                      ("'" !== f[f.length - 1] || 1 === f.length) &&
                        u(f.length, 'MISSING_CHAR', "Missing closing 'quote"),
                      (i = td(f.slice(1, -1)).replace(/''/g, "'")));
                    break;
                  case 'double-quoted-scalar':
                    ((r = P.QUOTE_DOUBLE),
                      (i = (function (e, t) {
                        let n = '';
                        for (let r = 1; r < e.length - 1; ++r) {
                          let i = e[r];
                          if ('\r' !== i || '\n' !== e[r + 1])
                            if ('\n' === i) {
                              let { fold: t, offset: i } = (function (e, t) {
                                let n = '',
                                  r = e[t + 1];
                                for (
                                  ;
                                  (' ' === r || '	' === r || '\n' === r || '\r' === r) &&
                                  ('\r' !== r || '\n' === e[t + 2]);

                                )
                                  ('\n' === r && (n += '\n'), (t += 1), (r = e[t + 1]));
                                return (n || (n = ' '), { fold: n, offset: t });
                              })(e, r);
                              ((n += t), (r = i));
                            } else if ('\\' === i) {
                              let i = e[++r],
                                s = tg[i];
                              if (s) n += s;
                              else if ('\n' === i) for (i = e[r + 1]; ' ' === i || '	' === i; ) i = e[++r + 1];
                              else if ('\r' === i && '\n' === e[r + 1])
                                for (i = e[++r + 1]; ' ' === i || '	' === i; ) i = e[++r + 1];
                              else if ('x' === i || 'u' === i || 'U' === i) {
                                let s = { x: 2, u: 4, U: 8 }[i];
                                ((n += (function (e, t, n, r) {
                                  let i = e.substr(t, n),
                                    s = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
                                  if (isNaN(s)) {
                                    let i = e.substr(t - 2, n + 2);
                                    return (r(t - 2, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${i}`), i);
                                  }
                                  return String.fromCodePoint(s);
                                })(e, r + 1, s, t)),
                                  (r += s));
                              } else {
                                let i = e.substr(r - 1, 2);
                                (t(r - 1, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${i}`), (n += i));
                              }
                            } else if (' ' === i || '	' === i) {
                              let t = r,
                                s = e[r + 1];
                              for (; ' ' === s || '	' === s; ) s = e[++r + 1];
                              '\n' !== s && ('\r' !== s || '\n' !== e[r + 2]) && (n += r > t ? e.slice(t, r + 1) : i);
                            } else n += i;
                        }
                        return (
                          ('"' !== e[e.length - 1] || 1 === e.length) &&
                            t(e.length, 'MISSING_CHAR', 'Missing closing "quote'),
                          n
                        );
                      })(l, c)));
                    break;
                  default:
                    return (
                      n(e, 'UNEXPECTED_TOKEN', `Expected a flow scalar value, but found: ${o}`),
                      { value: '', type: null, comment: '', range: [s, s + l.length, s + l.length] }
                    );
                }
                let m = s + l.length,
                  h = tf(a, m, t, n);
                return { value: i, type: r, comment: h.comment, range: [s, m, h.offset] };
              })(t, e.options.strict, r),
          u = n ? e.directives.tagName(n.source, (e) => r(n, 'TAG_RESOLVE_FAILED', e)) : null;
        i =
          e.options.stringKeys && e.atKey
            ? e.schema[a]
            : u
              ? (function (e, t, n, r, i) {
                  if ('!' === n) return e[a];
                  let s = [];
                  for (let t of e.tags)
                    if (!t.collection && t.tag === n)
                      if (!t.default || !t.test) return t;
                      else s.push(t);
                  for (let e of s) if (e.test?.test(t)) return e;
                  let o = e.knownTags[n];
                  return o && !o.collection
                    ? (e.tags.push(Object.assign({}, o, { default: !1, test: void 0 })), o)
                    : (i(r, 'TAG_RESOLVE_FAILED', `Unresolved tag: ${n}`, 'tag:yaml.org,2002:str' !== n), e[a]);
                })(e.schema, o, u, n, r)
              : 'scalar' === t.type
                ? (function ({ atKey: e, directives: t, schema: n }, r, i, s) {
                    let o =
                      n.tags.find((t) => (!0 === t.default || (e && 'key' === t.default)) && t.test?.test(r)) || n[a];
                    if (n.compat) {
                      let e = n.compat.find((e) => e.default && e.test?.test(r)) ?? n[a];
                      if (o.tag !== e.tag) {
                        let n = t.tagString(o.tag),
                          r = t.tagString(e.tag);
                        s(i, 'TAG_RESOLVE_FAILED', `Value may be parsed as either ${n} or ${r}`, !0);
                      }
                    }
                    return o;
                  })(e, o, t, r)
                : e.schema[a];
        try {
          let l = i.resolve(o, (e) => r(n ?? t, 'TAG_RESOLVE_FAILED', e), e.options);
          s = g(l) ? l : new P(l);
        } catch (e) {
          (r(n ?? t, 'TAG_RESOLVE_FAILED', e instanceof Error ? e.message : String(e)), (s = new P(o)));
        }
        return (
          (s.range = f),
          (s.source = o),
          l && (s.type = l),
          u && (s.tag = u),
          i.format && (s.format = i.format),
          c && (s.comment = c),
          s
        );
      }
      let ty = null;
      function tb(e, t, n, r, { spaceBefore: i, comment: s, anchor: o, tag: l, end: a }, c) {
        let f = tp(
          e,
          {
            type: 'scalar',
            offset: (function (e, t, n) {
              if (t) {
                n ?? (n = t.length);
                for (let r = n - 1; r >= 0; --r) {
                  let n = t[r];
                  switch (n.type) {
                    case 'space':
                    case 'comment':
                    case 'newline':
                      e -= n.source.length;
                      continue;
                  }
                  for (n = t[++r]; n?.type === 'space'; ) ((e += n.source.length), (n = t[++r]));
                  break;
                }
              }
              return e;
            })(t, n, r),
            indent: -1,
            source: '',
          },
          l,
          c,
        );
        return (
          o &&
            ((f.anchor = o.source.substring(1)),
            '' === f.anchor && c(o, 'BAD_ALIAS', 'Anchor cannot be an empty string')),
          i && (f.spaceBefore = !0),
          s && ((f.comment = s), (f.range[2] = a)),
          f
        );
      }
      let tv = Symbol('break visit'),
        tO = Symbol('skip children'),
        tE = Symbol('remove item');
      function tw(e, t) {
        ('type' in e && 'document' === e.type && (e = { start: e.start, value: e.value }),
          (function e(t, n, r) {
            let i = r(n, t);
            if ('symbol' == typeof i) return i;
            for (let s of ['key', 'value']) {
              let o = n[s];
              if (o && 'items' in o) {
                for (let n = 0; n < o.items.length; ++n) {
                  let i = e(Object.freeze(t.concat([[s, n]])), o.items[n], r);
                  if ('number' == typeof i) n = i - 1;
                  else {
                    if (i === tv) return tv;
                    i === tE && (o.items.splice(n, 1), (n -= 1));
                  }
                }
                'function' == typeof i && 'key' === s && (i = i(n, t));
              }
            }
            return 'function' == typeof i ? i(n, t) : i;
          })(Object.freeze([]), e, t));
      }
      ((tw.BREAK = tv),
        (tw.SKIP = tO),
        (tw.REMOVE = tE),
        (tw.itemAtPath = (e, t) => {
          let n = e;
          for (let [e, r] of t) {
            let t = n?.[e];
            if (!t || !('items' in t)) return;
            n = t.items[r];
          }
          return n;
        }),
        (tw.parentCollection = (e, t) => {
          let n = tw.itemAtPath(e, t.slice(0, -1)),
            r = t[t.length - 1][0],
            i = n?.[r];
          if (i && 'items' in i) return i;
          throw Error('Parent collection not found');
        }));
      function tN(e, t, n) {
        let r = null;
        if (
          ('function' == typeof t || Array.isArray(t) ? (r = t) : void 0 === n && t && (n = t),
          'string' == typeof n && (n = n.length),
          'number' == typeof n)
        ) {
          let e = Math.round(n);
          n = e < 1 ? void 0 : e > 8 ? { indent: 8 } : { indent: e };
        }
        if (void 0 === e) {
          let { keepUndefined: e } = n ?? t ?? {};
          if (!e) return;
        }
        return m(e) && !r ? e.toString(n) : new tr(e, r, n).toString(n);
      }
    },
    4670: (e, t, n) => {
      n.d(t, { P: () => y });
      let r = {
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
        i = [r.STRING, r.NUMBER, r.BOOLEAN],
        s = ['_selfCloseTag', '_attrs'],
        o = (e = '', t = 0) => e.repeat(t),
        l = (e) =>
          (Array.isArray(e) && r.ARRAY) ||
          (typeof e === r.OBJECT && null !== e && e._name && r.JSTOXML_OBJECT) ||
          (e instanceof Date && r.DATE) ||
          (null === e && r.NULL) ||
          typeof e,
        a = (e) => e.startsWith('<![CDATA['),
        c = (e = '', t = {}, n) => {
          let i = e;
          if (typeof e === r.STRING) {
            if (a(e)) return e;
            let n = RegExp(`(${Object.keys(t).join('|')})(?!(\\w|#)*;)`, 'g');
            i = String(e).replace(n, (e, n) => t[n] || '');
          }
          return 'function' == typeof n ? n(i) : i;
        },
        f = (e = {}, t, n, i) =>
          (Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({ [e]: t }))).reduce((e, s) => {
            let o = Object.keys(s)[0],
              l = s[o];
            if (typeof n === r.FUNCTION && n(o, l)) return e;
            let a = t ? c(l, t) : l,
              f = i || !0 !== a ? `="${a}"` : '';
            return (e.push(`${o}${f}`), e);
          }, []),
        u = (e = {}, t, n, r) => {
          let i = f(e, t, n, r);
          if (0 === i.length) return '';
          let s = i.join(' ');
          return ` ${s}`;
        },
        m = (e = {}) => Object.keys(e).map((t) => ({ _name: t, _content: e[t] })),
        h = (e) => i.includes(l(e)),
        d = (e) => !e.match('<'),
        g = ({ header: e, isOutputStart: t }) =>
          e && t ? (typeof e === r.BOOLEAN ? '<?xml version="1.0" encoding="UTF-8"?>' : e) : '',
        p = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' },
        y = (e = {}, t = {}) => {
          let {
              depth: n = 0,
              indent: i,
              _isFirstItem: f,
              _isOutputStart: b = !0,
              header: v,
              attributeReplacements: O = {},
              attributeFilter: E,
              attributeExplicitTrue: w = !1,
              contentReplacements: N = {},
              contentMap: S,
              selfCloseTags: k = !0,
            } = t,
            $ = 'boolean' != typeof O || O ? { ...p, ...O } : {},
            I = 'boolean' != typeof N || N ? { ...p, ...N } : {},
            A = 'string' == typeof i,
            _ = o(i, n),
            T = l(e),
            C = g({ header: v, indent: i, depth: n, isOutputStart: b }),
            L = b && !C && f && 0 === n,
            x = A && !L ? '\n' : '',
            j = '';
          switch (T) {
            case r.JSTOXML_OBJECT: {
              let { _name: i, _content: o } = e;
              if (null === o && 'function' != typeof S) {
                j = `${x}${_}${i}`;
                break;
              }
              if (Array.isArray(o) && o.every(h))
                return o.map((e) => y({ _name: i, _content: e }, { ...t, depth: n, _isOutputStart: !1 })).join('');
              if (s.includes(i)) break;
              let c = y(o, { ...t, depth: n + 1, _isOutputStart: L }),
                f = l(c),
                m = d(c),
                g = a(c),
                p = `${x}${_}`;
              if ('_comment' === i) {
                j += `${p}<!-- ${o} -->`;
                break;
              }
              let b = 'undefined' === f || '' === c,
                v = e._selfCloseTag,
                O = typeof v === r.BOOLEAN ? b && v : b && k,
                N = u(e._attrs, $, E, w),
                I = `<${i}${N}${O ? '/' : ''}>`,
                T =
                  !A || m || g
                    ? ''
                    : `
${_}`,
                C = O ? '' : `${c}${T}</${i}>`;
              j += `${p}${I}${C}`;
              break;
            }
            case r.OBJECT: {
              let n = Object.keys(e);
              j = n
                .map((i, o) => {
                  let a = { ...t, _isFirstItem: 0 === o, _isLastItem: o + 1 === n.length, _isOutputStart: L },
                    c = { _name: i };
                  if (
                    l(e[i]) === r.OBJECT &&
                    (s.forEach((t) => {
                      let n = e[i][t];
                      void 0 !== n && ((c[t] = n), delete e[i][t]);
                    }),
                    void 0 !== e[i]._content && Object.keys(e[i]).length > 1)
                  ) {
                    let t = Object.assign({}, e[i]);
                    (delete t._content, (c._content = [...m(t), e[i]._content]));
                  }
                  return (void 0 === c._content && (c._content = e[i]), y(c, a));
                }, t)
                .join('');
              break;
            }
            case r.FUNCTION:
              j = y(e(t), t);
              break;
            case r.ARRAY:
              j = e
                .map((n, r) =>
                  y(n, { ...t, _isFirstItem: 0 === r, _isLastItem: r + 1 === e.length, _isOutputStart: L }),
                )
                .join('');
              break;
            default:
              j = c(e, I, S);
          }
          return `${C}${j}`;
        };
    },
  },
]);
