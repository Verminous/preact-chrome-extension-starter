(() => {
  var e = {
      182: (e, t, n) => {
        (t = n(645)(!1)).push([
          e.id,
          "#app-root{width:400px;height:75px;padding:2px}#app-root h1{text-align:center;color:darkblue;font-weight:bold;font-family:Helvetica;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,0.1),0 0 5px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3),0 3px 5px rgba(0,0,0,0.2),0 5px 10px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.2),0 20px 20px rgba(0,0,0,0.15)}\n",
          "",
        ]),
          (e.exports = t);
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = (function (e, t) {
                  var n,
                    r,
                    o,
                    i = e[1] || "",
                    a = e[3];
                  if (!a) return i;
                  if (t && "function" == typeof btoa) {
                    var c =
                        ((n = a),
                        (r = btoa(
                          unescape(encodeURIComponent(JSON.stringify(n)))
                        )),
                        (o =
                          "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                            r
                          )),
                        "/*# ".concat(o, " */")),
                      l = a.sources.map(function (e) {
                        return "/*# sourceURL="
                          .concat(a.sourceRoot || "")
                          .concat(e, " */");
                      });
                    return [i].concat(l).concat([c]).join("\n");
                  }
                  return [i].join("\n");
                })(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var l = [].concat(e[c]);
                (r && o[l[0]]) ||
                  (n &&
                    (l[2]
                      ? (l[2] = "".concat(n, " and ").concat(l[2]))
                      : (l[2] = n)),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      283: (e, t, n) => {
        var r = n(379),
          o = n(182);
        "string" == typeof (o = o.__esModule ? o.default : o) &&
          (o = [[e.id, o, ""]]);
        r(o, { insert: "head", singleton: !1 }), (e.exports = o.locals || {});
      },
      379: (e, t, n) => {
        "use strict";
        var r,
          o = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          i = [];
        function a(e) {
          for (var t = -1, n = 0; n < i.length; n++)
            if (i[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function c(e, t) {
          for (var n = {}, r = [], o = 0; o < e.length; o++) {
            var c = e[o],
              l = t.base ? c[0] + t.base : c[0],
              u = n[l] || 0,
              s = "".concat(l, " ").concat(u);
            n[l] = u + 1;
            var p = a(s),
              f = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== p
              ? (i[p].references++, i[p].updater(f))
              : i.push({ identifier: s, updater: h(f, t), references: 1 }),
              r.push(s);
          }
          return r;
        }
        function l(e) {
          var t = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var i = n.nc;
            i && (r.nonce = i);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              t.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var a = o(e.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(t);
          }
          return t;
        }
        var u,
          s =
            ((u = []),
            function (e, t) {
              return (u[e] = t), u.filter(Boolean).join("\n");
            });
        function p(e, t, n, r) {
          var o = n
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = s(t, o);
          else {
            var i = document.createTextNode(o),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]),
              a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
          }
        }
        function f(e, t, n) {
          var r = n.css,
            o = n.media,
            i = n.sourceMap;
          if (
            (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
            i &&
              "undefined" != typeof btoa &&
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var d = null,
          v = 0;
        function h(e, t) {
          var n, r, o;
          if (t.singleton) {
            var i = v++;
            (n = d || (d = l(t))),
              (r = p.bind(null, n, i, !1)),
              (o = p.bind(null, n, i, !0));
          } else
            (n = l(t)),
              (r = f.bind(null, n, t)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            r(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                r((e = t));
              } else o();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var n = c((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < n.length; r++) {
                var o = a(n[r]);
                i[o].references--;
              }
              for (var l = c(e, t), u = 0; u < n.length; u++) {
                var s = a(n[u]);
                0 === i[s].references && (i[s].updater(), i.splice(s, 1));
              }
              n = l;
            }
          };
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.nc = void 0),
    (() => {
      "use strict";
      var e = function () {},
        t = {},
        r = [],
        o = [];
      function i(n, i) {
        var a,
          c,
          l,
          u,
          s = o;
        for (u = arguments.length; u-- > 2; ) r.push(arguments[u]);
        for (
          i &&
          null != i.children &&
          (r.length || r.push(i.children), delete i.children);
          r.length;

        )
          if ((c = r.pop()) && void 0 !== c.pop)
            for (u = c.length; u--; ) r.push(c[u]);
          else
            "boolean" == typeof c && (c = null),
              (l = "function" != typeof n) &&
                (null == c
                  ? (c = "")
                  : "number" == typeof c
                  ? (c = String(c))
                  : "string" != typeof c && (l = !1)),
              l && a ? (s[s.length - 1] += c) : s === o ? (s = [c]) : s.push(c),
              (a = l);
        var p = new e();
        return (
          (p.nodeName = n),
          (p.children = s),
          (p.attributes = null == i ? void 0 : i),
          (p.key = null == i ? void 0 : i.key),
          void 0 !== t.vnode && t.vnode(p),
          p
        );
      }
      function a(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function c(e, t) {
        e && ("function" == typeof e ? e(t) : (e.current = t));
      }
      var l =
          "function" == typeof Promise
            ? Promise.resolve().then.bind(Promise.resolve())
            : setTimeout,
        u = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        s = [];
      function p(e) {
        !e._dirty &&
          (e._dirty = !0) &&
          1 == s.push(e) &&
          (t.debounceRendering || l)(f);
      }
      function f() {
        for (var e; (e = s.pop()); ) e._dirty && M(e);
      }
      function d(e, t, n) {
        return "string" == typeof t || "number" == typeof t
          ? void 0 !== e.splitText
          : "string" == typeof t.nodeName
          ? !e._componentConstructor && v(e, t.nodeName)
          : n || e._componentConstructor === t.nodeName;
      }
      function v(e, t) {
        return (
          e.normalizedNodeName === t ||
          e.nodeName.toLowerCase() === t.toLowerCase()
        );
      }
      function h(e) {
        var t = a({}, e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
        return t;
      }
      function m(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
      }
      function b(e, t, n, r, o) {
        if (("className" === t && (t = "class"), "key" === t));
        else if ("ref" === t) c(n, null), c(r, e);
        else if ("class" !== t || o)
          if ("style" === t) {
            if (
              ((r && "string" != typeof r && "string" != typeof n) ||
                (e.style.cssText = r || ""),
              r && "object" == typeof r)
            ) {
              if ("string" != typeof n)
                for (var i in n) i in r || (e.style[i] = "");
              for (var i in r)
                e.style[i] =
                  "number" == typeof r[i] && !1 === u.test(i)
                    ? r[i] + "px"
                    : r[i];
            }
          } else if ("dangerouslySetInnerHTML" === t)
            r && (e.innerHTML = r.__html || "");
          else if ("o" == t[0] && "n" == t[1]) {
            var a = t !== (t = t.replace(/Capture$/, ""));
            (t = t.toLowerCase().substring(2)),
              r
                ? n || e.addEventListener(t, y, a)
                : e.removeEventListener(t, y, a),
              ((e._listeners || (e._listeners = {}))[t] = r);
          } else if ("list" !== t && "type" !== t && !o && t in e) {
            try {
              e[t] = null == r ? "" : r;
            } catch (e) {}
            (null != r && !1 !== r) ||
              "spellcheck" == t ||
              e.removeAttribute(t);
          } else {
            var l = o && t !== (t = t.replace(/^xlink:?/, ""));
            null == r || !1 === r
              ? l
                ? e.removeAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    t.toLowerCase()
                  )
                : e.removeAttribute(t)
              : "function" != typeof r &&
                (l
                  ? e.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      t.toLowerCase(),
                      r
                    )
                  : e.setAttribute(t, r));
          }
        else e.className = r || "";
      }
      function y(e) {
        return this._listeners[e.type]((t.event && t.event(e)) || e);
      }
      var _ = [],
        g = 0,
        x = !1,
        C = !1;
      function w() {
        for (var e; (e = _.shift()); )
          t.afterMount && t.afterMount(e),
            e.componentDidMount && e.componentDidMount();
      }
      function S(e, t, n, r, o, i) {
        g++ ||
          ((x = null != o && void 0 !== o.ownerSVGElement),
          (C = null != e && !("__preactattr_" in e)));
        var a = N(e, t, n, r, i);
        return (
          o && a.parentNode !== o && o.appendChild(a),
          --g || ((C = !1), i || w()),
          a
        );
      }
      function N(e, t, n, r, o) {
        var i = e,
          a = x;
        if (
          ((null != t && "boolean" != typeof t) || (t = ""),
          "string" == typeof t || "number" == typeof t)
        )
          return (
            e && void 0 !== e.splitText && e.parentNode && (!e._component || o)
              ? e.nodeValue != t && (e.nodeValue = t)
              : ((i = document.createTextNode(t)),
                e &&
                  (e.parentNode && e.parentNode.replaceChild(i, e), k(e, !0))),
            (i.__preactattr_ = !0),
            i
          );
        var c,
          l,
          u = t.nodeName;
        if ("function" == typeof u)
          return (function (e, t, n, r) {
            for (
              var o = e && e._component,
                i = o,
                a = e,
                c = o && e._componentConstructor === t.nodeName,
                l = c,
                u = h(t);
              o && !l && (o = o._parentComponent);

            )
              l = o.constructor === t.nodeName;
            return (
              o && l && (!r || o._component)
                ? (O(o, u, 3, n, r), (e = o.base))
                : (i && !c && (B(i), (e = a = null)),
                  (o = T(t.nodeName, u, n)),
                  e && !o.nextBase && ((o.nextBase = e), (a = null)),
                  O(o, u, 1, n, r),
                  (e = o.base),
                  a && e !== a && ((a._component = null), k(a, !1))),
              e
            );
          })(e, t, n, r);
        if (
          ((x = "svg" === u || ("foreignObject" !== u && x)),
          (u = String(u)),
          (!e || !v(e, u)) &&
            ((c = u),
            ((l = x
              ? document.createElementNS("http://www.w3.org/2000/svg", c)
              : document.createElement(c)).normalizedNodeName = c),
            (i = l),
            e))
        ) {
          for (; e.firstChild; ) i.appendChild(e.firstChild);
          e.parentNode && e.parentNode.replaceChild(i, e), k(e, !0);
        }
        var s = i.firstChild,
          p = i.__preactattr_,
          f = t.children;
        if (null == p) {
          p = i.__preactattr_ = {};
          for (var y = i.attributes, _ = y.length; _--; )
            p[y[_].name] = y[_].value;
        }
        return (
          !C &&
          f &&
          1 === f.length &&
          "string" == typeof f[0] &&
          null != s &&
          void 0 !== s.splitText &&
          null == s.nextSibling
            ? s.nodeValue != f[0] && (s.nodeValue = f[0])
            : ((f && f.length) || null != s) &&
              (function (e, t, n, r, o) {
                var i,
                  a,
                  c,
                  l,
                  u,
                  s = e.childNodes,
                  p = [],
                  f = {},
                  v = 0,
                  h = 0,
                  b = s.length,
                  y = 0,
                  _ = t ? t.length : 0;
                if (0 !== b)
                  for (var g = 0; g < b; g++) {
                    var x = s[g],
                      C = x.__preactattr_;
                    null !=
                    (w =
                      _ && C
                        ? x._component
                          ? x._component.__key
                          : C.key
                        : null)
                      ? (v++, (f[w] = x))
                      : (C ||
                          (void 0 !== x.splitText
                            ? !o || x.nodeValue.trim()
                            : o)) &&
                        (p[y++] = x);
                  }
                if (0 !== _)
                  for (g = 0; g < _; g++) {
                    var w;
                    if (((u = null), null != (w = (l = t[g]).key)))
                      v &&
                        void 0 !== f[w] &&
                        ((u = f[w]), (f[w] = void 0), v--);
                    else if (h < y)
                      for (i = h; i < y; i++)
                        if (void 0 !== p[i] && d((a = p[i]), l, o)) {
                          (u = a),
                            (p[i] = void 0),
                            i === y - 1 && y--,
                            i === h && h++;
                          break;
                        }
                    (u = N(u, l, n, r)),
                      (c = s[g]),
                      u &&
                        u !== e &&
                        u !== c &&
                        (null == c
                          ? e.appendChild(u)
                          : u === c.nextSibling
                          ? m(c)
                          : e.insertBefore(u, c));
                  }
                if (v) for (var g in f) void 0 !== f[g] && k(f[g], !1);
                for (; h <= y; ) void 0 !== (u = p[y--]) && k(u, !1);
              })(i, f, n, r, C || null != p.dangerouslySetInnerHTML),
          (function (e, t, n) {
            var r;
            for (r in n)
              (t && null != t[r]) ||
                null == n[r] ||
                b(e, r, n[r], (n[r] = void 0), x);
            for (r in t)
              "children" === r ||
                "innerHTML" === r ||
                (r in n &&
                  t[r] === ("value" === r || "checked" === r ? e[r] : n[r])) ||
                b(e, r, n[r], (n[r] = t[r]), x);
          })(i, t.attributes, p),
          (x = a),
          i
        );
      }
      function k(e, t) {
        var n = e._component;
        n
          ? B(n)
          : (null != e.__preactattr_ && c(e.__preactattr_.ref, null),
            (!1 !== t && null != e.__preactattr_) || m(e),
            P(e));
      }
      function P(e) {
        for (e = e.lastChild; e; ) {
          var t = e.previousSibling;
          k(e, !0), (e = t);
        }
      }
      var j = [];
      function T(e, t, n) {
        var r,
          o = j.length;
        for (
          e.prototype && e.prototype.render
            ? ((r = new e(t, n)), E.call(r, t, n))
            : (((r = new E(t, n)).constructor = e), (r.render = U));
          o--;

        )
          if (j[o].constructor === e)
            return (r.nextBase = j[o].nextBase), j.splice(o, 1), r;
        return r;
      }
      function U(e, t, n) {
        return this.constructor(e, n);
      }
      function O(e, n, r, o, i) {
        e._disable ||
          ((e._disable = !0),
          (e.__ref = n.ref),
          (e.__key = n.key),
          delete n.ref,
          delete n.key,
          void 0 === e.constructor.getDerivedStateFromProps &&
            (!e.base || i
              ? e.componentWillMount && e.componentWillMount()
              : e.componentWillReceiveProps &&
                e.componentWillReceiveProps(n, o)),
          o &&
            o !== e.context &&
            (e.prevContext || (e.prevContext = e.context), (e.context = o)),
          e.prevProps || (e.prevProps = e.props),
          (e.props = n),
          (e._disable = !1),
          0 !== r &&
            (1 !== r && !1 === t.syncComponentUpdates && e.base
              ? p(e)
              : M(e, 1, i)),
          c(e.__ref, e));
      }
      function M(e, n, r, o) {
        if (!e._disable) {
          var i,
            c,
            l,
            u = e.props,
            s = e.state,
            p = e.context,
            f = e.prevProps || u,
            d = e.prevState || s,
            v = e.prevContext || p,
            m = e.base,
            b = e.nextBase,
            y = m || b,
            x = e._component,
            C = !1,
            N = v;
          if (
            (e.constructor.getDerivedStateFromProps &&
              ((s = a(a({}, s), e.constructor.getDerivedStateFromProps(u, s))),
              (e.state = s)),
            m &&
              ((e.props = f),
              (e.state = d),
              (e.context = v),
              2 !== n &&
              e.shouldComponentUpdate &&
              !1 === e.shouldComponentUpdate(u, s, p)
                ? (C = !0)
                : e.componentWillUpdate && e.componentWillUpdate(u, s, p),
              (e.props = u),
              (e.state = s),
              (e.context = p)),
            (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
            (e._dirty = !1),
            !C)
          ) {
            (i = e.render(u, s, p)),
              e.getChildContext && (p = a(a({}, p), e.getChildContext())),
              m &&
                e.getSnapshotBeforeUpdate &&
                (N = e.getSnapshotBeforeUpdate(f, d));
            var P,
              j,
              U = i && i.nodeName;
            if ("function" == typeof U) {
              var E = h(i);
              (c = x) && c.constructor === U && E.key == c.__key
                ? O(c, E, 1, p, !1)
                : ((P = c),
                  (e._component = c = T(U, E, p)),
                  (c.nextBase = c.nextBase || b),
                  (c._parentComponent = e),
                  O(c, E, 0, p, !1),
                  M(c, 1, r, !0)),
                (j = c.base);
            } else
              (l = y),
                (P = x) && (l = e._component = null),
                (y || 1 === n) &&
                  (l && (l._component = null),
                  (j = S(l, i, p, r || !m, y && y.parentNode, !0)));
            if (y && j !== y && c !== x) {
              var L = y.parentNode;
              L &&
                j !== L &&
                (L.replaceChild(j, y), P || ((y._component = null), k(y, !1)));
            }
            if ((P && B(P), (e.base = j), j && !o)) {
              for (var R = e, A = e; (A = A._parentComponent); )
                (R = A).base = j;
              (j._component = R), (j._componentConstructor = R.constructor);
            }
          }
          for (
            !m || r
              ? _.push(e)
              : C ||
                (e.componentDidUpdate && e.componentDidUpdate(f, d, N),
                t.afterUpdate && t.afterUpdate(e));
            e._renderCallbacks.length;

          )
            e._renderCallbacks.pop().call(e);
          g || o || w();
        }
      }
      function B(e) {
        t.beforeUnmount && t.beforeUnmount(e);
        var n = e.base;
        (e._disable = !0),
          e.componentWillUnmount && e.componentWillUnmount(),
          (e.base = null);
        var r = e._component;
        r
          ? B(r)
          : n &&
            (null != n.__preactattr_ && c(n.__preactattr_.ref, null),
            (e.nextBase = n),
            m(n),
            j.push(e),
            P(n)),
          c(e.__ref, null);
      }
      function E(e, t) {
        (this._dirty = !0),
          (this.context = t),
          (this.props = e),
          (this.state = this.state || {}),
          (this._renderCallbacks = []);
      }
      function L(e) {
        return (
          (L =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          L(e)
        );
      }
      function R(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== L(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" !== L(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(r.key)),
              "symbol" === L(o) ? o : String(o)),
              r
            );
        }
        var o;
      }
      function A(e, t) {
        return (
          (A = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          A(e, t)
        );
      }
      function D(e) {
        return (
          (D = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          D(e)
        );
      }
      a(E.prototype, {
        setState: function (e, t) {
          this.prevState || (this.prevState = this.state),
            (this.state = a(
              a({}, this.state),
              "function" == typeof e ? e(this.state, this.props) : e
            )),
            t && this._renderCallbacks.push(t),
            p(this);
        },
        forceUpdate: function (e) {
          e && this._renderCallbacks.push(e), M(this, 2);
        },
        render: function () {},
      }),
        n(283);
      var W,
        H,
        I,
        V = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && A(e, t);
          })(c, e);
          var t,
            n,
            r,
            o,
            a =
              ((r = c),
              (o = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = D(r);
                if (o) {
                  var n = D(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return (function (e, t) {
                  if (t && ("object" === L(t) || "function" == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(e);
                })(this, e);
              });
          function c() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a.apply(this, arguments)
            );
          }
          return (
            (t = c),
            (n = [
              {
                key: "render",
                value: function () {
                  return i(
                    "div",
                    { id: "app-root" },
                    i("h1", null, "Preact Chrome Extension Starter")
                  );
                },
              },
            ]) && R(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            c
          );
        })(E);
      (W = i(V, null)), (H = document.body), S(I, W, {}, !1, H, !1);
    })();
})();
