(function (b) {
  function a(b, d) {
    if ({}.hasOwnProperty.call(a.cache, b)) return a.cache[b];
    var e = a.resolve(b);
    if (!e) throw new Error('Failed to resolve module ' + b);
    var c = {
      id: b,
      require: a,
      filename: b,
      exports: {},
      loaded: !1,
      parent: d,
      children: [],
    };
    d && d.children.push(c);
    var f = b.slice(0, b.lastIndexOf('/') + 1);
    return ((a.cache[b] = c.exports), e.call(c.exports, c, c.exports, f, b), (c.loaded = !0), (a.cache[b] = c.exports));
  }
  ((a.modules = {}),
    (a.cache = {}),
    (a.resolve = function (b) {
      return {}.hasOwnProperty.call(a.modules, b) ? a.modules[b] : void 0;
    }),
    (a.define = function (b, c) {
      a.modules[b] = c;
    }),
    a.define('/gif.worker.coffee', function (d, e, f, g) {
      var b, c;
      ((b = a('/GIFEncoder.js', d)),
        (c = function (a) {
          var c, e, d, f;
          return (
            (c = new b(a.width, a.height)),
            a.index === 0 ? c.writeHeader() : (c.firstFrame = !1),
            c.setTransparent(a.transparent),
            c.setRepeat(a.repeat),
            c.setDelay(a.delay),
            c.setQuality(a.quality),
            c.addFrame(a.data),
            a.last && c.finish(),
            (d = c.stream()),
            (a.data = d.pages),
            (a.cursor = d.cursor),
            (a.pageSize = d.constructor.pageSize),
            a.canTransfer
              ? ((f = function (c) {
                  for (var b = 0, d = a.data.length; b < d; ++b) ((e = a.data[b]), c.push(e.buffer));
                  return c;
                }.call(this, [])),
                self.postMessage(a, f))
              : self.postMessage(a)
          );
        }),
        (self.onmessage = function (a) {
          return c(a.data);
        }));
    }),
    a.define('/GIFEncoder.js', function (e, h, i, j) {
      function c() {
        ((this.page = -1), (this.pages = []), this.newPage());
      }

      function b(a, b) {
        ((this.width = ~~a),
          (this.height = ~~b),
          (this.transparent = null),
          (this.transIndex = 0),
          (this.repeat = -1),
          (this.delay = 0),
          (this.image = null),
          (this.pixels = null),
          (this.indexedPixels = null),
          (this.colorDepth = null),
          (this.colorTab = null),
          (this.usedEntry = new Array()),
          (this.palSize = 7),
          (this.dispose = -1),
          (this.firstFrame = !0),
          (this.sample = 10),
          (this.out = new c()));
      }
      var f = a('/TypedNeuQuant.js', e),
        g = a('/LZWEncoder.js', e);
      ((c.pageSize = 4096), (c.charMap = {}));
      for (var d = 0; d < 256; d++) c.charMap[d] = String.fromCharCode(d);
      ((c.prototype.newPage = function () {
        ((this.pages[++this.page] = new Uint8Array(c.pageSize)), (this.cursor = 0));
      }),
        (c.prototype.getData = function () {
          var d = '';
          for (var a = 0; a < this.pages.length; a++)
            for (var b = 0; b < c.pageSize; b++) d += c.charMap[this.pages[a][b]];
          return d;
        }),
        (c.prototype.writeByte = function (a) {
          (this.cursor >= c.pageSize && this.newPage(), (this.pages[this.page][this.cursor++] = a));
        }),
        (c.prototype.writeUTFBytes = function (b) {
          for (var c = b.length, a = 0; a < c; a++) this.writeByte(b.charCodeAt(a));
        }),
        (c.prototype.writeBytes = function (b, d, e) {
          for (var c = e || b.length, a = d || 0; a < c; a++) this.writeByte(b[a]);
        }),
        (b.prototype.setDelay = function (a) {
          this.delay = Math.round(a / 10);
        }),
        (b.prototype.setFrameRate = function (a) {
          this.delay = Math.round(100 / a);
        }),
        (b.prototype.setDispose = function (a) {
          a >= 0 && (this.dispose = a);
        }),
        (b.prototype.setRepeat = function (a) {
          this.repeat = a;
        }),
        (b.prototype.setTransparent = function (a) {
          this.transparent = a;
        }),
        (b.prototype.addFrame = function (a) {
          ((this.image = a),
            this.getImagePixels(),
            this.analyzePixels(),
            this.firstFrame && (this.writeLSD(), this.writePalette(), this.repeat >= 0 && this.writeNetscapeExt()),
            this.writeGraphicCtrlExt(),
            this.writeImageDesc(),
            this.firstFrame || this.writePalette(),
            this.writePixels(),
            (this.firstFrame = !1));
        }),
        (b.prototype.finish = function () {
          this.out.writeByte(59);
        }),
        (b.prototype.setQuality = function (a) {
          (a < 1 && (a = 1), (this.sample = a));
        }),
        (b.prototype.writeHeader = function () {
          this.out.writeUTFBytes('GIF89a');
        }),
        (b.prototype.analyzePixels = function () {
          var g = this.pixels.length,
            d = g / 3;
          this.indexedPixels = new Uint8Array(d);
          var a = new f(this.pixels, this.sample);
          (a.buildColormap(), (this.colorTab = a.getColormap()));
          var b = 0;
          for (var c = 0; c < d; c++) {
            var e = a.lookupRGB(this.pixels[b++] & 255, this.pixels[b++] & 255, this.pixels[b++] & 255);
            ((this.usedEntry[e] = !0), (this.indexedPixels[c] = e));
          }
          ((this.pixels = null),
            (this.colorDepth = 8),
            (this.palSize = 7),
            this.transparent !== null && (this.transIndex = this.findClosest(this.transparent)));
        }),
        (b.prototype.findClosest = function (e) {
          if (this.colorTab === null) return -1;
          var k = (e & 16711680) >> 16,
            l = (e & 65280) >> 8,
            m = e & 255,
            c = 0,
            d = 16777216,
            j = this.colorTab.length;
          for (var a = 0; a < j; ) {
            var f = k - (this.colorTab[a++] & 255),
              g = l - (this.colorTab[a++] & 255),
              h = m - (this.colorTab[a] & 255),
              i = f * f + g * g + h * h,
              b = parseInt(a / 3);
            (this.usedEntry[b] && i < d && ((d = i), (c = b)), a++);
          }
          return c;
        }),
        (b.prototype.getImagePixels = function () {
          var a = this.width,
            g = this.height;
          this.pixels = new Uint8Array(a * g * 3);
          var b = this.image,
            c = 0;
          for (var d = 0; d < g; d++)
            for (var e = 0; e < a; e++) {
              var f = d * a * 4 + e * 4;
              ((this.pixels[c++] = b[f]), (this.pixels[c++] = b[f + 1]), (this.pixels[c++] = b[f + 2]));
            }
        }),
        (b.prototype.writeGraphicCtrlExt = function () {
          (this.out.writeByte(33), this.out.writeByte(249), this.out.writeByte(4));
          var b, a;
          (this.transparent === null ? ((b = 0), (a = 0)) : ((b = 1), (a = 2)),
            this.dispose >= 0 && (a = dispose & 7),
            (a <<= 2),
            this.out.writeByte(0 | a | 0 | b),
            this.writeShort(this.delay),
            this.out.writeByte(this.transIndex),
            this.out.writeByte(0));
        }),
        (b.prototype.writeImageDesc = function () {
          (this.out.writeByte(44),
            this.writeShort(0),
            this.writeShort(0),
            this.writeShort(this.width),
            this.writeShort(this.height),
            this.firstFrame ? this.out.writeByte(0) : this.out.writeByte(128 | this.palSize));
        }),
        (b.prototype.writeLSD = function () {
          (this.writeShort(this.width),
            this.writeShort(this.height),
            this.out.writeByte(240 | this.palSize),
            this.out.writeByte(0),
            this.out.writeByte(0));
        }),
        (b.prototype.writeNetscapeExt = function () {
          (this.out.writeByte(33),
            this.out.writeByte(255),
            this.out.writeByte(11),
            this.out.writeUTFBytes('NETSCAPE2.0'),
            this.out.writeByte(3),
            this.out.writeByte(1),
            this.writeShort(this.repeat),
            this.out.writeByte(0));
        }),
        (b.prototype.writePalette = function () {
          this.out.writeBytes(this.colorTab);
          var b = 768 - this.colorTab.length;
          for (var a = 0; a < b; a++) this.out.writeByte(0);
        }),
        (b.prototype.writeShort = function (a) {
          (this.out.writeByte(a & 255), this.out.writeByte((a >> 8) & 255));
        }),
        (b.prototype.writePixels = function () {
          var a = new g(this.width, this.height, this.indexedPixels, this.colorDepth);
          a.encode(this.out);
        }),
        (b.prototype.stream = function () {
          return this.out;
        }),
        (e.exports = b));
    }),
    a.define('/LZWEncoder.js', function (e, g, h, i) {
      function f(y, D, C, B) {
        function w(a, b) {
          ((r[f++] = a), f >= 254 && t(b));
        }

        function x(b) {
          (u(a), (k = i + 2), (j = !0), l(i, b));
        }

        function u(b) {
          for (var a = 0; a < b; ++a) h[a] = -1;
        }

        function A(z, r) {
          var g, t, d, e, y, w, s;
          for (
            q = z,
              j = !1,
              n_bits = q,
              m = p(n_bits),
              i = 1 << (z - 1),
              o = i + 1,
              k = i + 2,
              f = 0,
              e = v(),
              s = 0,
              g = a;
            g < 65536;
            g *= 2
          )
            ++s;
          ((s = 8 - s), (w = a), u(w), l(i, r));
          a: while ((t = v()) != c) {
            if (((g = (t << b) + e), (d = (t << s) ^ e), h[d] === g)) {
              e = n[d];
              continue;
            }
            if (h[d] >= 0) {
              ((y = w - d), d === 0 && (y = 1));
              do
                if (((d -= y) < 0 && (d += w), h[d] === g)) {
                  e = n[d];
                  continue a;
                }
              while (h[d] >= 0);
            }
            (l(e, r), (e = t), k < 1 << b ? ((n[d] = k++), (h[d] = g)) : x(r));
          }
          (l(e, r), l(o, r));
        }

        function z(a) {
          (a.writeByte(s), (remaining = y * D), (curPixel = 0), A(s + 1, a), a.writeByte(0));
        }

        function t(a) {
          f > 0 && (a.writeByte(f), a.writeBytes(r, 0, f), (f = 0));
        }

        function p(a) {
          return (1 << a) - 1;
        }

        function v() {
          if (remaining === 0) return c;
          --remaining;
          var a = C[curPixel++];
          return a & 255;
        }

        function l(a, c) {
          ((g &= d[e]), e > 0 ? (g |= a << e) : (g = a), (e += n_bits));
          while (e >= 8) (w(g & 255, c), (g >>= 8), (e -= 8));
          if (
            ((k > m || j) &&
              (j ? ((m = p((n_bits = q))), (j = !1)) : (++n_bits, n_bits == b ? (m = 1 << b) : (m = p(n_bits)))),
            a == o)
          ) {
            while (e > 0) (w(g & 255, c), (g >>= 8), (e -= 8));
            t(c);
          }
        }
        var s = Math.max(2, B),
          r = new Uint8Array(256),
          h = new Int32Array(a),
          n = new Int32Array(a),
          g,
          e = 0,
          f,
          k = 0,
          m,
          j = !1,
          q,
          i,
          o;
        this.encode = z;
      }
      var c = -1,
        b = 12,
        a = 5003,
        d = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
      e.exports = f;
    }),
    a.define('/TypedNeuQuant.js', function (A, F, E, D) {
      function C(A, B) {
        function I() {
          ((o = []),
            (q = new Int32Array(256)),
            (t = new Int32Array(a)),
            (y = new Int32Array(a)),
            (z = new Int32Array(a >> 3)));
          var c, d;
          for (c = 0; c < a; c++)
            ((d = (c << (b + 8)) / a), (o[c] = new Float64Array([d, d, d, 0])), (y[c] = e / a), (t[c] = 0));
        }

        function J() {
          for (var c = 0; c < a; c++) ((o[c][0] >>= b), (o[c][1] >>= b), (o[c][2] >>= b), (o[c][3] = c));
        }

        function K(b, a, c, e, f) {
          ((o[a][0] -= (b * (o[a][0] - c)) / d),
            (o[a][1] -= (b * (o[a][1] - e)) / d),
            (o[a][2] -= (b * (o[a][2] - f)) / d));
        }

        function L(j, e, n, l, k) {
          var h = Math.abs(e - j),
            i = Math.min(e + j, a),
            g = e + 1,
            f = e - 1,
            m = 1,
            b,
            d;
          while (g < i || f > h)
            ((d = z[m++]),
              g < i &&
                ((b = o[g++]),
                (b[0] -= (d * (b[0] - n)) / c),
                (b[1] -= (d * (b[1] - l)) / c),
                (b[2] -= (d * (b[2] - k)) / c)),
              f > h &&
                ((b = o[f--]),
                (b[0] -= (d * (b[0] - n)) / c),
                (b[1] -= (d * (b[1] - l)) / c),
                (b[2] -= (d * (b[2] - k)) / c)));
        }

        function C(p, s, q) {
          var h = 2147483647,
            k = h,
            d = -1,
            m = d,
            c,
            j,
            e,
            n,
            l;
          for (c = 0; c < a; c++)
            ((j = o[c]),
              (e = Math.abs(j[0] - p) + Math.abs(j[1] - s) + Math.abs(j[2] - q)),
              e < h && ((h = e), (d = c)),
              (n = e - (t[c] >> (i - b))),
              n < k && ((k = n), (m = c)),
              (l = y[c] >> g),
              (y[c] -= l),
              (t[c] += l << f));
          return ((y[d] += x), (t[d] -= r), m);
        }

        function D() {
          var d,
            b,
            e,
            c,
            h,
            g,
            f = 0,
            i = 0;
          for (d = 0; d < a; d++) {
            for (e = o[d], h = d, g = e[1], b = d + 1; b < a; b++) ((c = o[b]), c[1] < g && ((h = b), (g = c[1])));
            if (
              ((c = o[h]),
              d != h &&
                ((b = c[0]),
                (c[0] = e[0]),
                (e[0] = b),
                (b = c[1]),
                (c[1] = e[1]),
                (e[1] = b),
                (b = c[2]),
                (c[2] = e[2]),
                (e[2] = b),
                (b = c[3]),
                (c[3] = e[3]),
                (e[3] = b)),
              g != f)
            ) {
              for (q[f] = (i + d) >> 1, b = f + 1; b < g; b++) q[b] = d;
              ((f = g), (i = d));
            }
          }
          for (q[f] = (i + n) >> 1, b = f + 1; b < 256; b++) q[b] = n;
        }

        function E(j, i, k) {
          var b,
            d,
            c,
            e = 1e3,
            h = -1,
            f = q[i],
            g = f - 1;
          while (f < a || g >= 0)
            (f < a &&
              ((d = o[f]),
              (c = d[1] - i),
              c >= e
                ? (f = a)
                : (f++,
                  c < 0 && (c = -c),
                  (b = d[0] - j),
                  b < 0 && (b = -b),
                  (c += b),
                  c < e && ((b = d[2] - k), b < 0 && (b = -b), (c += b), c < e && ((e = c), (h = d[3]))))),
              g >= 0 &&
                ((d = o[g]),
                (c = i - d[1]),
                c >= e
                  ? (g = -1)
                  : (g--,
                    c < 0 && (c = -c),
                    (b = d[0] - j),
                    b < 0 && (b = -b),
                    (c += b),
                    c < e && ((b = d[2] - k), b < 0 && (b = -b), (c += b), c < e && ((e = c), (h = d[3]))))));
          return h;
        }

        function F() {
          var c,
            f = A.length,
            D = 30 + (B - 1) / 3,
            y = f / (3 * B),
            q = ~~(y / w),
            n = d,
            o = u,
            a = o >> h;
          for (a <= 1 && (a = 0), c = 0; c < a; c++) z[c] = n * (((a * a - c * c) * m) / (a * a));
          var i;
          f < s
            ? ((B = 1), (i = 3))
            : f % l !== 0
              ? (i = 3 * l)
              : f % k !== 0
                ? (i = 3 * k)
                : f % p !== 0
                  ? (i = 3 * p)
                  : (i = 3 * j);
          var r,
            t,
            x,
            e,
            g = 0;
          c = 0;
          while (c < y)
            if (
              ((r = (A[g] & 255) << b),
              (t = (A[g + 1] & 255) << b),
              (x = (A[g + 2] & 255) << b),
              (e = C(r, t, x)),
              K(n, e, r, t, x),
              a !== 0 && L(a, e, r, t, x),
              (g += i),
              g >= f && (g -= f),
              c++,
              q === 0 && (q = 1),
              c % q === 0)
            )
              for (n -= n / D, o -= o / v, a = o >> h, a <= 1 && (a = 0), e = 0; e < a; e++)
                z[e] = n * (((a * a - e * e) * m) / (a * a));
        }

        function G() {
          (I(), F(), J(), D());
        }

        function H() {
          var b = [],
            g = [];
          for (var c = 0; c < a; c++) g[o[c][3]] = c;
          var d = 0;
          for (var e = 0; e < a; e++) {
            var f = g[e];
            ((b[d++] = o[f][0]), (b[d++] = o[f][1]), (b[d++] = o[f][2]));
          }
          return b;
        }
        var o, q, t, y, z;
        ((this.buildColormap = G), (this.getColormap = H), (this.lookupRGB = E));
      }
      var w = 100,
        a = 256,
        n = a - 1,
        b = 4,
        i = 16,
        e = 1 << i,
        f = 10,
        B = 1 << f,
        g = 10,
        x = e >> g,
        r = e << (f - g),
        z = a >> 3,
        h = 6,
        t = 1 << h,
        u = z * t,
        v = 30,
        o = 10,
        d = 1 << o,
        q = 8,
        m = 1 << q,
        y = o + q,
        c = 1 << y,
        l = 499,
        k = 491,
        p = 487,
        j = 503,
        s = 3 * j;
      A.exports = C;
    }),
    a('/gif.worker.coffee'));
}).call(this, this);
