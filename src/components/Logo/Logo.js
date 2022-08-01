/* eslint-disable */
import styles from "./Logo.module.css";
import { useEffect, useState } from "react";
import { ReactComponent as LogoSVG } from "../../assets/Logo.svg";
import { ReactComponent as ReverseSVG } from "../../assets/ReverseLogo.svg";

export default function Logo() {
  const { svgContainer, practice } = styles;
  const SVGs = { logo: <LogoSVG />, reverse: <ReverseSVG /> };
  const [SVG, setSVG] = useState("logo");
  const [throttles, setthrottles] = useState(true);

  useEffect(() => {
    !(function (t, n) {
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = n())
        : "function" == typeof define && define.amd
        ? define(n)
        : (((t =
            "undefined" != typeof globalThis
              ? globalThis
              : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
          (t.__SVGATOR_PLAYER__["7c8cb2ed"] = n()));
    })(this, function () {
      "use strict";
      function t(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function n(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? t(Object(r), !0).forEach(function (t) {
                o(n, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
            : t(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  n,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return n;
      }
      function e(t) {
        return (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function u(t, n, e) {
        return n && i(t.prototype, n), e && i(t, e), t;
      }
      function o(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, n) {
        return (l =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function f() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function s(t, n, e) {
        return (s = f()
          ? Reflect.construct
          : function (t, n, e) {
              var r = [null];
              r.push.apply(r, n);
              var i = new (Function.bind.apply(t, r))();
              return e && l(i, e.prototype), i;
            }).apply(null, arguments);
      }
      function c(t, n) {
        if (n && ("object" == typeof n || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t);
      }
      function h(t, n, e) {
        return (h =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, n, e) {
                var r = (function (t, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, n) &&
                    null !== (t = a(t));

                  );
                  return t;
                })(t, n);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, n);
                  return i.get ? i.get.call(e) : i.value;
                }
              })(t, n, e || t);
      }
      function v(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return y(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, n) {
            if (!t) return;
            if ("string" == typeof t) return y(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return y(t, n);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }
      Number.isInteger ||
        (Number.isInteger = function (t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
        }),
        Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
      var g = d(Math.pow(10, -6));
      function d(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        if (Number.isInteger(t)) return t;
        var e = Math.pow(10, n);
        return Math.round((+t + Number.EPSILON) * e) / e;
      }
      function p(t, n) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
        return Math.abs(t - n) < e;
      }
      var m = Math.PI / 180;
      function b(t) {
        return t;
      }
      function A(t, n, e) {
        var r = 1 - e;
        return 3 * e * r * (t * r + n * e) + e * e * e;
      }
      function w() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return t < 0 || t > 1 || e < 0 || e > 1
          ? null
          : p(t, n) && p(e, r)
          ? b
          : function (i) {
              if (i <= 0)
                return t > 0 ? (i * n) / t : 0 === n && e > 0 ? (i * r) / e : 0;
              if (i >= 1)
                return e < 1
                  ? 1 + ((i - 1) * (r - 1)) / (e - 1)
                  : 1 === e && t < 1
                  ? 1 + ((i - 1) * (n - 1)) / (t - 1)
                  : 1;
              for (var u, o = 0, a = 1; o < a; ) {
                var l = A(t, e, (u = (o + a) / 2));
                if (p(i, l)) break;
                l < i ? (o = u) : (a = u);
              }
              return A(n, r, u);
            };
      }
      function x() {
        return 1;
      }
      function k(t) {
        return 1 === t ? 1 : 0;
      }
      function _() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (1 === t) {
          if (0 === n) return k;
          if (1 === n) return x;
        }
        var e = 1 / t;
        return function (t) {
          return t >= 1 ? 1 : (t += n * e) - (t % e);
        };
      }
      var S = Math.sin,
        O = Math.cos,
        j = Math.acos,
        E = Math.asin,
        M = Math.tan,
        P = Math.atan2,
        I = Math.PI / 180,
        R = 180 / Math.PI,
        B = Math.sqrt,
        F = (function () {
          function t() {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1,
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0,
              a =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0;
            r(this, t),
              (this.m = [n, e, i, u, o, a]),
              (this.i = null),
              (this.w = null),
              (this.s = null);
          }
          return (
            u(
              t,
              [
                {
                  key: "determinant",
                  get: function () {
                    var t = this.m;
                    return t[0] * t[3] - t[1] * t[2];
                  },
                },
                {
                  key: "isIdentity",
                  get: function () {
                    if (null === this.i) {
                      var t = this.m;
                      this.i =
                        1 === t[0] &&
                        0 === t[1] &&
                        0 === t[2] &&
                        1 === t[3] &&
                        0 === t[4] &&
                        0 === t[5];
                    }
                    return this.i;
                  },
                },
                {
                  key: "point",
                  value: function (t, n) {
                    var e = this.m;
                    return {
                      x: e[0] * t + e[2] * n + e[4],
                      y: e[1] * t + e[3] * n + e[5],
                    };
                  },
                },
                {
                  key: "translateSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                    if (!t && !n) return this;
                    var e = this.m;
                    return (
                      (e[4] += e[0] * t + e[2] * n),
                      (e[5] += e[1] * t + e[3] * n),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: "rotateSelf",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                    if ((t %= 360)) {
                      var n = S((t *= I)),
                        e = O(t),
                        r = this.m,
                        i = r[0],
                        u = r[1];
                      (r[0] = i * e + r[2] * n),
                        (r[1] = u * e + r[3] * n),
                        (r[2] = r[2] * e - i * n),
                        (r[3] = r[3] * e - u * n),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "scaleSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1;
                    if (1 !== t || 1 !== n) {
                      var e = this.m;
                      (e[0] *= t),
                        (e[1] *= t),
                        (e[2] *= n),
                        (e[3] *= n),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "skewSelf",
                  value: function (t, n) {
                    if (((n %= 360), (t %= 360) || n)) {
                      var e = this.m,
                        r = e[0],
                        i = e[1],
                        u = e[2],
                        o = e[3];
                      t && ((t = M(t * I)), (e[2] += r * t), (e[3] += i * t)),
                        n && ((n = M(n * I)), (e[0] += u * n), (e[1] += o * n)),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "resetSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      e =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 1,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0,
                      u =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : 0,
                      o = this.m;
                    return (
                      (o[0] = t),
                      (o[1] = n),
                      (o[2] = e),
                      (o[3] = r),
                      (o[4] = i),
                      (o[5] = u),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: "recomposeSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      e =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null;
                    return (
                      this.isIdentity || this.resetSelf(),
                      t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                      n && this.rotateSelf(n),
                      e &&
                        (e.x && this.skewSelf(e.x, 0),
                        e.y && this.skewSelf(0, e.y)),
                      !r ||
                        (1 === r.x && 1 === r.y) ||
                        this.scaleSelf(r.x, r.y),
                      i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                      this
                    );
                  },
                },
                {
                  key: "decompose",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      e = this.m,
                      r = e[0] * e[0] + e[1] * e[1],
                      i = [
                        [e[0], e[1]],
                        [e[2], e[3]],
                      ],
                      u = B(r);
                    if (0 === u)
                      return {
                        origin: { x: d(e[4]), y: d(e[5]) },
                        translate: { x: d(t), y: d(n) },
                        scale: { x: 0, y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0,
                      };
                    (i[0][0] /= u), (i[0][1] /= u);
                    var o = e[0] * e[3] - e[1] * e[2] < 0;
                    o && (u = -u);
                    var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                    (i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a);
                    var l = B(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                    if (0 === l)
                      return {
                        origin: { x: d(e[4]), y: d(e[5]) },
                        translate: { x: d(t), y: d(n) },
                        scale: { x: d(u), y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0,
                      };
                    (i[1][0] /= l), (i[1][1] /= l), (a /= l);
                    var f = 0;
                    return (
                      i[1][1] < 0
                        ? ((f = j(i[1][1]) * R), i[0][1] < 0 && (f = 360 - f))
                        : (f = E(i[0][1]) * R),
                      o && (f = -f),
                      (a = P(a, B(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * R),
                      o && (a = -a),
                      {
                        origin: { x: d(e[4]), y: d(e[5]) },
                        translate: { x: d(t), y: d(n) },
                        scale: { x: d(u), y: d(l) },
                        skew: { x: d(a), y: 0 },
                        rotate: d(f),
                      }
                    );
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    var t = this.m;
                    return new this.constructor(
                      t[0],
                      t[1],
                      t[2],
                      t[3],
                      t[4],
                      t[5]
                    );
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : " ";
                    if (null === this.s) {
                      var n = this.m.map(function (t) {
                        return d(t);
                      });
                      1 === n[0] && 0 === n[1] && 0 === n[2] && 1 === n[3]
                        ? (this.s = "translate(" + n[4] + t + n[5] + ")")
                        : (this.s = "matrix(" + n.join(t) + ")");
                    }
                    return this.s;
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t) {
                    return t
                      ? Array.isArray(t)
                        ? s(this, v(t))
                        : t instanceof this
                        ? t.clone()
                        : new this().recomposeSelf(
                            t.origin,
                            t.rotate,
                            t.skew,
                            t.scale,
                            t.translate
                          )
                      : new this();
                  },
                },
              ]
            ),
            t
          );
        })();
      function N(t, n, e) {
        return t >= 0.5 ? e : n;
      }
      function T(t, n, e) {
        return 0 === t || n === e ? n : t * (e - n) + n;
      }
      function q(t, n, e) {
        var r = T(t, n, e);
        return r <= 0 ? 0 : r;
      }
      function L(t, n, e) {
        var r = T(t, n, e);
        return r <= 0 ? 0 : r >= 1 ? 1 : r;
      }
      function C(t, n, e) {
        return 0 === t
          ? n
          : 1 === t
          ? e
          : { x: T(t, n.x, e.x), y: T(t, n.y, e.y) };
      }
      function D(t, n, e) {
        return 0 === t
          ? n
          : 1 === t
          ? e
          : { x: q(t, n.x, e.x), y: q(t, n.y, e.y) };
      }
      function V(t, n, e) {
        var r = (function (t, n, e) {
          return Math.round(T(t, n, e));
        })(t, n, e);
        return r <= 0 ? 0 : r >= 255 ? 255 : r;
      }
      function z(t, n, e) {
        return 0 === t
          ? n
          : 1 === t
          ? e
          : {
              r: V(t, n.r, e.r),
              g: V(t, n.g, e.g),
              b: V(t, n.b, e.b),
              a: T(t, null == n.a ? 1 : n.a, null == e.a ? 1 : e.a),
            };
      }
      function G(t, n, e) {
        var r = n.length;
        if (r !== e.length) return N(t, n, e);
        for (var i = new Array(r), u = 0; u < r; u++) i[u] = T(t, n[u], e[u]);
        return i;
      }
      function Y(t, n) {
        for (var e = [], r = 0; r < t; r++) e.push(n);
        return e;
      }
      function $(t, n) {
        if (--n <= 0) return t;
        var e = (t = Object.assign([], t)).length;
        do {
          for (var r = 0; r < e; r++) t.push(t[r]);
        } while (--n > 0);
        return t;
      }
      var U,
        Q = (function () {
          function t(n) {
            r(this, t), (this.list = n), (this.length = n.length);
          }
          return (
            u(t, [
              {
                key: "setAttribute",
                value: function (t, n) {
                  for (var e = this.list, r = 0; r < this.length; r++)
                    e[r].setAttribute(t, n);
                },
              },
              {
                key: "removeAttribute",
                value: function (t) {
                  for (var n = this.list, e = 0; e < this.length; e++)
                    n[e].removeAttribute(t);
                },
              },
              {
                key: "style",
                value: function (t, n) {
                  for (var e = this.list, r = 0; r < this.length; r++)
                    e[r].style[t] = n;
                },
              },
            ]),
            t
          );
        })(),
        H = /-./g,
        J = function (t, n) {
          return n.toUpperCase();
        };
      function Z(t) {
        return "function" == typeof t ? t : N;
      }
      function K(t) {
        return t
          ? "function" == typeof t
            ? t
            : Array.isArray(t)
            ? (function (t) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : b;
                if (!Array.isArray(t)) return n;
                switch (t.length) {
                  case 1:
                    return _(t[0]) || n;
                  case 2:
                    return _(t[0], t[1]) || n;
                  case 4:
                    return w(t[0], t[1], t[2], t[3]) || n;
                }
                return n;
              })(t, null)
            : (function (t, n) {
                var e =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : b;
                switch (t) {
                  case "linear":
                    return b;
                  case "steps":
                    return _(n.steps || 1, n.jump || 0) || e;
                  case "bezier":
                  case "cubic-bezier":
                    return w(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || e;
                }
                return e;
              })(t.type, t.value, null)
          : null;
      }
      function W(t, n, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = n.length - 1;
        if (t <= n[0].t) return r ? [0, 0, n[0].v] : n[0].v;
        if (t >= n[i].t) return r ? [i, 1, n[i].v] : n[i].v;
        var u,
          o = n[0],
          a = null;
        for (u = 1; u <= i; u++) {
          if (!(t > n[u].t)) {
            a = n[u];
            break;
          }
          o = n[u];
        }
        return null == a
          ? r
            ? [i, 1, n[i].v]
            : n[i].v
          : o.t === a.t
          ? r
            ? [u, 1, a.v]
            : a.v
          : ((t = (t - o.t) / (a.t - o.t)),
            o.e && (t = o.e(t)),
            r ? [u, t, e(t, o.v, a.v)] : e(t, o.v, a.v));
      }
      function X(t, n) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return t && t.length
          ? "function" != typeof n
            ? null
            : ("function" != typeof e && (e = null),
              function (r) {
                var i = W(r, t, n);
                return null != i && e && (i = e(i)), i;
              })
          : null;
      }
      function tt(t, n) {
        return t.t - n.t;
      }
      function nt(t, n, r, i, u) {
        var o,
          a = "@" === r[0],
          l = "#" === r[0],
          f = U[r],
          s = N;
        switch (
          (a
            ? ((o = r.substr(1)), (r = o.replace(H, J)))
            : l && (r = r.substr(1)),
          e(f))
        ) {
          case "function":
            if (((s = f(i, u, W, K, r, a, n, t)), l)) return s;
            break;
          case "string":
            s = X(i, Z(f));
            break;
          case "object":
            if ((s = X(i, Z(f.i), f.f)) && "function" == typeof f.u)
              return f.u(n, s, r, a, t);
        }
        return s
          ? (function (t, n, e) {
              if (
                arguments.length > 3 &&
                void 0 !== arguments[3] &&
                arguments[3]
              )
                return t instanceof Q
                  ? function (r) {
                      return t.style(n, e(r));
                    }
                  : function (r) {
                      return (t.style[n] = e(r));
                    };
              if (Array.isArray(n)) {
                var r = n.length;
                return function (i) {
                  var u = e(i);
                  if (null == u)
                    for (var o = 0; o < r; o++) t[o].removeAttribute(n);
                  else for (var a = 0; a < r; a++) t[a].setAttribute(n, u);
                };
              }
              return function (r) {
                var i = e(r);
                null == i ? t.removeAttribute(n) : t.setAttribute(n, i);
              };
            })(n, r, s, a)
          : null;
      }
      function et(t, n, r, i) {
        if (!i || "object" !== e(i)) return null;
        var u = null,
          o = null;
        return (
          Array.isArray(i)
            ? (o = (function (t) {
                if (!t || !t.length) return null;
                for (var n = 0; n < t.length; n++)
                  t[n].e && (t[n].e = K(t[n].e));
                return t.sort(tt);
              })(i))
            : ((o = i.keys), (u = i.data || null)),
          o ? nt(t, n, r, o, u) : null
        );
      }
      function rt(t, n, e) {
        if (!e) return null;
        var r = [];
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = et(t, n, i, e[i]);
            u && r.push(u);
          }
        return r.length ? r : null;
      }
      function it(t, n) {
        if (!n.settings.duration || n.settings.duration < 0) return null;
        var e,
          r,
          i,
          u,
          o,
          a = (function (t, n) {
            if (!n) return null;
            var e = [];
            if (Array.isArray(n))
              for (var r = n.length, i = 0; i < r; i++) {
                var u = n[i];
                if (2 === u.length) {
                  var o = null;
                  if ("string" == typeof u[0]) o = t.getElementById(u[0]);
                  else if (Array.isArray(u[0])) {
                    o = [];
                    for (var a = 0; a < u[0].length; a++)
                      if ("string" == typeof u[0][a]) {
                        var l = t.getElementById(u[0][a]);
                        l && o.push(l);
                      }
                    o = o.length ? (1 === o.length ? o[0] : new Q(o)) : null;
                  }
                  if (o) {
                    var f = rt(t, o, u[1]);
                    f && (e = e.concat(f));
                  }
                }
              }
            else
              for (var s in n)
                if (n.hasOwnProperty(s)) {
                  var c = t.getElementById(s);
                  if (c) {
                    var h = rt(t, c, n[s]);
                    h && (e = e.concat(h));
                  }
                }
            return e.length ? e : null;
          })(t, n.elements);
        return a
          ? ((e = a),
            (r = n.settings),
            (i = r.duration),
            (u = e.length),
            (o = null),
            function (t, n) {
              var a = r.iterations || 1 / 0,
                l = (r.alternate && a % 2 == 0) ^ (r.direction > 0) ? i : 0,
                f = t % i,
                s = 1 + (t - f) / i;
              (n *= r.direction), r.alternate && s % 2 == 0 && (n = -n);
              var c = !1;
              if (s > a)
                (f = l),
                  (c = !0),
                  -1 === r.fill && (f = r.direction > 0 ? 0 : i);
              else if ((n < 0 && (f = i - f), f === o)) return !1;
              o = f;
              for (var h = 0; h < u; h++) e[h](f);
              return c;
            })
          : null;
      }
      function ut(t, n) {
        if (((U = n), !t || !t.root || !Array.isArray(t.animations)))
          return null;
        var e = (function (t) {
          for (
            var n = document.getElementsByTagName("svg"), e = 0;
            e < n.length;
            e++
          )
            if (n[e].id === t.root && !n[e].svgatorAnimation)
              return (n[e].svgatorAnimation = !0), n[e];
          return null;
        })(t);
        if (!e) return null;
        var r = t.animations
          .map(function (t) {
            return it(e, t);
          })
          .filter(function (t) {
            return !!t;
          });
        return r.length
          ? {
              svg: e,
              animations: r,
              animationSettings: t.animationSettings,
              options: t.options || void 0,
            }
          : null;
      }
      function ot(t) {
        return +("0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27));
      }
      function at(t, n, e) {
        return !t || !e || n > t.length
          ? t
          : t.substring(0, n) + at(t.substring(n + 1), e, e);
      }
      function lt(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
        return !t || t % n ? t % n : lt(t / n, n);
      }
      function ft(t, n, e) {
        if (t && t.length) {
          var r = ot(e),
            i = ot(n),
            u = lt(r) + 5,
            o = at(t, lt(r, 5), u);
          return (
            (o = o.replace(/\x7c$/g, "==").replace(/\x2f$/g, "=")),
            (o = (function (t, n, e) {
              var r = +("0x" + t.substring(0, 4));
              t = t.substring(4);
              for (
                var i = (n % r) + (e % 27), u = [], o = 0;
                o < t.length;
                o += 2
              )
                if ("|" !== t[o]) {
                  var a = +("0x" + t[o] + t[o + 1]) - i;
                  u.push(a);
                } else {
                  var l = +("0x" + t.substring(o + 1, o + 1 + 4)) - i;
                  (o += 3), u.push(l);
                }
              return String.fromCharCode.apply(String, u);
            })((o = (o = atob(o)).replace(/[\x41-\x5A]/g, "")), i, r)),
            (o = JSON.parse(o))
          );
        }
      }
      var st = [
          { key: "alternate", def: !1 },
          { key: "fill", def: 1 },
          { key: "iterations", def: 0 },
          { key: "direction", def: 1 },
          { key: "speed", def: 1 },
          { key: "fps", def: 100 },
        ],
        ct = (function () {
          function t(n, e) {
            var i = this,
              u =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            r(this, t),
              (this._id = 0),
              (this._running = !1),
              (this._rollingBack = !1),
              (this._animations = n),
              (this._settings = e),
              (!u || u < "2022-05-02") && delete this._settings.speed,
              st.forEach(function (t) {
                i._settings[t.key] = i._settings[t.key] || t.def;
              }),
              (this.duration = e.duration),
              (this.offset = e.offset || 0),
              (this.rollbackStartOffset = 0);
          }
          return (
            u(
              t,
              [
                {
                  key: "alternate",
                  get: function () {
                    return this._settings.alternate;
                  },
                },
                {
                  key: "fill",
                  get: function () {
                    return this._settings.fill;
                  },
                },
                {
                  key: "iterations",
                  get: function () {
                    return this._settings.iterations;
                  },
                },
                {
                  key: "direction",
                  get: function () {
                    return this._settings.direction;
                  },
                },
                {
                  key: "speed",
                  get: function () {
                    return this._settings.speed;
                  },
                },
                {
                  key: "fps",
                  get: function () {
                    return this._settings.fps;
                  },
                },
                {
                  key: "maxFiniteDuration",
                  get: function () {
                    return this.iterations > 0
                      ? this.iterations * this.duration
                      : this.duration;
                  },
                },
                {
                  key: "_apply",
                  value: function (t) {
                    for (
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        e = this._animations,
                        r = e.length,
                        i = 0,
                        u = 0;
                      u < r;
                      u++
                    )
                      n[u] ? i++ : ((n[u] = e[u](t, 1)), n[u] && i++);
                    return i;
                  },
                },
                {
                  key: "_rollback",
                  value: function (t) {
                    var n = this,
                      e = 1 / 0,
                      r = null;
                    (this.rollbackStartOffset = t),
                      (this._rollingBack = !0),
                      (this._running = !0);
                    this._id = window.requestAnimationFrame(function i(u) {
                      if (n._rollingBack) {
                        null == r && (r = u);
                        var o = Math.round(t - (u - r) * n.speed);
                        if (o > n.duration && e !== 1 / 0) {
                          var a = !!n.alternate && (o / n.duration) % 2 > 1,
                            l = o % n.duration;
                          o = (l += a ? n.duration : 0) || n.duration;
                        }
                        var f = (n.fps ? 1e3 / n.fps : 0) * n.speed,
                          s = Math.max(0, o);
                        s < e - f && ((n.offset = s), (e = s), n._apply(s));
                        var c =
                          n.iterations > 0 &&
                          -1 === n.fill &&
                          o >= n.maxFiniteDuration;
                        (o <= 0 || n.offset < o || c) && n.stop(),
                          (n._id = window.requestAnimationFrame(i));
                      }
                    });
                  },
                },
                {
                  key: "_start",
                  value: function () {
                    var t = this,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e = -1 / 0,
                      r = null,
                      i = {};
                    this._running = !0;
                    var u = function u(o) {
                      null == r && (r = o);
                      var a = Math.round((o - r) * t.speed + n),
                        l = (t.fps ? 1e3 / t.fps : 0) * t.speed;
                      if (
                        a > e + l &&
                        !t._rollingBack &&
                        ((t.offset = a),
                        (e = a),
                        t._apply(a, i) === t._animations.length)
                      )
                        return void t.pause(!0);
                      t._id = window.requestAnimationFrame(u);
                    };
                    this._id = window.requestAnimationFrame(u);
                  },
                },
                {
                  key: "_pause",
                  value: function () {
                    this._id && window.cancelAnimationFrame(this._id),
                      (this._running = !1);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    if (!this._running)
                      return this._rollingBack
                        ? this._rollback(this.offset)
                        : this._start(this.offset);
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this._pause(),
                      (this.offset = 0),
                      (this.rollbackStartOffset = 0),
                      (this._rollingBack = !1),
                      this._apply(0);
                  },
                },
                {
                  key: "reachedToEnd",
                  value: function () {
                    return (
                      this.iterations > 0 &&
                      this.offset >= this.iterations * this.duration
                    );
                  },
                },
                {
                  key: "restart",
                  value: function () {
                    var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    this.stop(t), this.play(t);
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    this._pause();
                  },
                },
                {
                  key: "reverse",
                  value: function () {
                    this.direction = -this.direction;
                  },
                },
              ],
              [
                {
                  key: "build",
                  value: function (t, n) {
                    delete t.animationSettings,
                      (t.options = ft(t.options, t.root, "7c8cb2ed")),
                      t.animations.map(function (n) {
                        (n.settings = ft(n.s, t.root, "7c8cb2ed")),
                          delete n.s,
                          t.animationSettings ||
                            (t.animationSettings = n.settings);
                      });
                    var e = t.version;
                    if (!(t = ut(t, n))) return null;
                    var r = t.options || {},
                      i = new this(t.animations, t.animationSettings, e);
                    return { el: t.svg, options: r, player: i };
                  },
                },
                {
                  key: "push",
                  value: function (t) {
                    return this.build(t);
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var t = this,
                      n =
                        window.__SVGATOR_PLAYER__ &&
                        window.__SVGATOR_PLAYER__["7c8cb2ed"];
                    Array.isArray(n) &&
                      n.splice(0).forEach(function (n) {
                        return t.build(n);
                      });
                  },
                },
              ]
            ),
            t
          );
        })();
      function ht(t) {
        return d(t) + "";
      }
      function vt(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
        return t && t.length ? t.map(ht).join(n) : "";
      }
      function yt(t) {
        return ht(t.x) + "," + ht(t.y);
      }
      function gt(t) {
        if (!t) return "transparent";
        if (null == t.a || t.a >= 1) {
          var n = function (t) {
              return 1 === (t = parseInt(t).toString(16)).length ? "0" + t : t;
            },
            e = function (t) {
              return t.charAt(0) === t.charAt(1);
            },
            r = n(t.r),
            i = n(t.g),
            u = n(t.b);
          return (
            e(r) &&
              e(i) &&
              e(u) &&
              ((r = r.charAt(0)), (i = i.charAt(0)), (u = u.charAt(0))),
            "#" + r + i + u
          );
        }
        return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
      }
      function dt(t) {
        return t ? "url(#" + t + ")" : "none";
      }
      !(function () {
        for (
          var t = 0, n = ["ms", "moz", "webkit", "o"], e = 0;
          e < n.length && !window.requestAnimationFrame;
          ++e
        )
          (window.requestAnimationFrame =
            window[n[e] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[n[e] + "CancelAnimationFrame"] ||
              window[n[e] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          ((window.requestAnimationFrame = function (n) {
            var e = Date.now(),
              r = Math.max(0, 16 - (e - t)),
              i = window.setTimeout(function () {
                n(e + r);
              }, r);
            return (t = e + r), i;
          }),
          (window.cancelAnimationFrame = window.clearTimeout));
      })();
      var pt = {
          f: null,
          i: D,
          u: function (t, n) {
            return function (e) {
              var r = n(e);
              t.setAttribute("rx", ht(r.x)), t.setAttribute("ry", ht(r.y));
            };
          },
        },
        mt = {
          f: null,
          i: function (t, n, e) {
            return 0 === t
              ? n
              : 1 === t
              ? e
              : {
                  width: q(t, n.width, e.width),
                  height: q(t, n.height, e.height),
                };
          },
          u: function (t, n) {
            return function (e) {
              var r = n(e);
              t.setAttribute("width", ht(r.width)),
                t.setAttribute("height", ht(r.height));
            };
          },
        };
      Object.freeze({
        M: 2,
        L: 2,
        Z: 0,
        H: 1,
        V: 1,
        C: 6,
        Q: 4,
        T: 2,
        S: 4,
        A: 7,
      });
      var bt = {},
        At = null;
      function wt(t) {
        var n = (function () {
          if (At) return At;
          if (
            "object" !==
              ("undefined" == typeof document ? "undefined" : e(document)) ||
            !document.createElementNS
          )
            return {};
          var t = document.createElementNS(
            "https://www.w3.org/2000/svg",
            "svg"
          );
          return t && t.style
            ? ((t.style.position = "absolute"),
              (t.style.opacity = "0.01"),
              (t.style.zIndex = "-9999"),
              (t.style.left = "-9999px"),
              (t.style.width = "1px"),
              (t.style.height = "1px"),
              (At = { svg: t }))
            : {};
        })().svg;
        if (!n)
          return function (t) {
            return null;
          };
        var r = document.createElementNS(n.namespaceURI, "path");
        r.setAttributeNS(null, "d", t),
          r.setAttributeNS(null, "fill", "none"),
          r.setAttributeNS(null, "stroke", "none"),
          n.appendChild(r);
        var i = r.getTotalLength();
        return function (t) {
          var n = r.getPointAtLength(i * t);
          return { x: n.x, y: n.y };
        };
      }
      function xt(t) {
        return bt[t] ? bt[t] : (bt[t] = wt(t));
      }
      function kt(t, n, e, r) {
        if (!t || !r) return !1;
        var i = ["M", t.x, t.y];
        if (
          (n &&
            e &&
            (i.push("C"), i.push(n.x), i.push(n.y), i.push(e.x), i.push(e.y)),
          n ? !e : e)
        ) {
          var u = n || e;
          i.push("Q"), i.push(u.x), i.push(u.y);
        }
        return n || e || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ");
      }
      function _t(t, n, e, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          u = kt(t, n, e, r),
          o = xt(u);
        try {
          return o(i);
        } catch (t) {
          return null;
        }
      }
      function St(t, n, e) {
        return t + (n - t) * e;
      }
      function Ot(t, n, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = { x: St(t.x, n.x, e), y: St(t.y, n.y, e) };
        return r && (i.a = jt(t, n)), i;
      }
      function jt(t, n) {
        return Math.atan2(n.y - t.y, n.x - t.x);
      }
      function Et(t, n, e, r) {
        var i = 1 - r;
        return i * i * t + 2 * i * r * n + r * r * e;
      }
      function Mt(t, n, e, r) {
        return 2 * (1 - r) * (n - t) + 2 * r * (e - n);
      }
      function Pt(t, n, e, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          u = _t(t, n, null, e, r);
        return (
          u || (u = { x: Et(t.x, n.x, e.x, r), y: Et(t.y, n.y, e.y, r) }),
          i && (u.a = It(t, n, e, r)),
          u
        );
      }
      function It(t, n, e, r) {
        return Math.atan2(Mt(t.y, n.y, e.y, r), Mt(t.x, n.x, e.x, r));
      }
      function Rt(t, n, e, r, i) {
        var u = i * i;
        return (
          i * u * (r - t + 3 * (n - e)) +
          3 * u * (t + e - 2 * n) +
          3 * i * (n - t) +
          t
        );
      }
      function Bt(t, n, e, r, i) {
        var u = 1 - i;
        return 3 * (u * u * (n - t) + 2 * u * i * (e - n) + i * i * (r - e));
      }
      function Ft(t, n, e, r, i) {
        var u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          o = _t(t, n, e, r, i);
        return (
          o ||
            (o = {
              x: Rt(t.x, n.x, e.x, r.x, i),
              y: Rt(t.y, n.y, e.y, r.y, i),
            }),
          u && (o.a = Nt(t, n, e, r, i)),
          o
        );
      }
      function Nt(t, n, e, r, i) {
        return Math.atan2(Bt(t.y, n.y, e.y, r.y, i), Bt(t.x, n.x, e.x, r.x, i));
      }
      function Tt(t, n, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (Lt(n)) {
          if (Ct(e)) return Pt(n, e.start, e, t, r);
        } else if (Lt(e)) {
          if (Dt(n)) return Pt(n, n.end, e, t, r);
        } else {
          if (Dt(n))
            return Ct(e)
              ? Ft(n, n.end, e.start, e, t, r)
              : Pt(n, n.end, e, t, r);
          if (Ct(e)) return Pt(n, e.start, e, t, r);
        }
        return Ot(n, e, t, r);
      }
      function qt(t, n, e) {
        var r = Tt(t, n, e, !0);
        return (
          (r.a =
            (function (t) {
              return arguments.length > 1 &&
                void 0 !== arguments[1] &&
                arguments[1]
                ? t + Math.PI
                : t;
            })(r.a) / m),
          r
        );
      }
      function Lt(t) {
        return !t.type || "corner" === t.type;
      }
      function Ct(t) {
        return null != t.start && !Lt(t);
      }
      function Dt(t) {
        return null != t.end && !Lt(t);
      }
      var Vt = new F();
      var zt = {
          f: function (t) {
            return t ? t.join(" ") : "";
          },
          i: function (t, n, r) {
            if (0 === t) return n;
            if (1 === t) return r;
            var i = n.length;
            if (i !== r.length) return N(t, n, r);
            for (var u, o = new Array(i), a = 0; a < i; a++) {
              if ((u = e(n[a])) !== e(r[a])) return N(t, n, r);
              if ("number" === u) o[a] = T(t, n[a], r[a]);
              else {
                if (n[a] !== r[a]) return N(t, n, r);
                o[a] = n[a];
              }
            }
            return o;
          },
        },
        Gt = {
          f: null,
          i: G,
          u: function (t, n) {
            return function (e) {
              var r = n(e);
              t.setAttribute("x1", ht(r[0])),
                t.setAttribute("y1", ht(r[1])),
                t.setAttribute("x2", ht(r[2])),
                t.setAttribute("y2", ht(r[3]));
            };
          },
        },
        Yt = { f: ht, i: T },
        $t = { f: ht, i: L },
        Ut = {
          f: function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : " ";
            return (
              t &&
                t.length > 0 &&
                (t = t.map(function (t) {
                  return d(t, 4);
                })),
              vt(t, n)
            );
          },
          i: function (t, n, e) {
            var r,
              i,
              u,
              o = n.length,
              a = e.length;
            if (o !== a)
              if (0 === o) n = Y((o = a), 0);
              else if (0 === a) (a = o), (e = Y(o, 0));
              else {
                var l =
                  (u =
                    ((r = o) * (i = a)) /
                    (function (t, n) {
                      for (var e; n; ) (e = n), (n = t % n), (t = e);
                      return t || 1;
                    })(r, i)) < 0
                    ? -u
                    : u;
                (n = $(n, Math.floor(l / o))),
                  (e = $(e, Math.floor(l / a))),
                  (o = a = l);
              }
            for (var f = [], s = 0; s < o; s++) f.push(d(q(t, n[s], e[s])));
            return f;
          },
        };
      function Qt(t, n, e) {
        return t.map(function (t) {
          return (function (t, n, e) {
            var r = t.v;
            if (!r || "g" !== r.t || r.s || !r.v || !r.r) return t;
            var i = e.getElementById(r.r),
              u = (i && i.querySelectorAll("stop")) || [];
            return (
              (r.s = r.v.map(function (t, n) {
                var e = u[n] && u[n].getAttribute("offset");
                return { c: t, o: (e = d(parseInt(e) / 100)) };
              })),
              delete r.v,
              t
            );
          })(t, 0, e);
        });
      }
      var Ht = {
        gt: "gradientTransform",
        c: { x: "cx", y: "cy" },
        rd: "r",
        f: { x: "x1", y: "y1" },
        to: { x: "x2", y: "y2" },
      };
      function Jt(t, n, r, i, u, o, a, l) {
        return (
          Qt(t, 0, l),
          (n = (function (t, n, e) {
            for (var r, i, u, o = t.length - 1, a = {}, l = 0; l <= o; l++)
              (r = t[l]).e && (r.e = n(r.e)),
                r.v &&
                  "g" === (i = r.v).t &&
                  i.r &&
                  (u = e.getElementById(i.r)) &&
                  (a[i.r] = { e: u, s: u.querySelectorAll("stop") });
            return a;
          })(t, i, l)),
          function (i) {
            var u = r(i, t, Zt);
            if (!u) return "none";
            if ("c" === u.t) return gt(u.v);
            if ("g" === u.t) {
              if (!n[u.r]) return dt(u.r);
              var o = n[u.r];
              return (
                (function (t, n) {
                  for (var e = t.s, r = e.length; r < n.length; r++) {
                    var i = e[e.length - 1].cloneNode();
                    (i.id = Xt(i.id)),
                      t.e.appendChild(i),
                      (e = t.s = t.e.querySelectorAll("stop"));
                  }
                  for (var u = 0, o = e.length, a = n.length - 1; u < o; u++)
                    e[u].setAttribute("stop-color", gt(n[Math.min(u, a)].c)),
                      e[u].setAttribute("offset", n[Math.min(u, a)].o);
                })(o, u.s),
                Object.keys(Ht).forEach(function (t) {
                  if (void 0 !== u[t])
                    if ("object" !== e(Ht[t])) {
                      var n,
                        r =
                          "gt" === t
                            ? ((n = u[t]),
                              Array.isArray(n)
                                ? "matrix(" + n.join(" ") + ")"
                                : "")
                            : u[t],
                        i = Ht[t];
                      o.e.setAttribute(i, r);
                    } else
                      Object.keys(Ht[t]).forEach(function (n) {
                        if (void 0 !== u[t][n]) {
                          var e = u[t][n],
                            r = Ht[t][n];
                          o.e.setAttribute(r, e);
                        }
                      });
                }),
                dt(u.r)
              );
            }
            return "none";
          }
        );
      }
      function Zt(t, e, r) {
        if (0 === t) return e;
        if (1 === t) return r;
        if (e && r) {
          var i = e.t;
          if (i === r.t)
            switch (e.t) {
              case "c":
                return { t: i, v: z(t, e.v, r.v) };
              case "g":
                if (e.r === r.r) {
                  var u = { t: i, s: Kt(t, e.s, r.s), r: e.r };
                  return (
                    e.gt && r.gt && (u.gt = G(t, e.gt, r.gt)),
                    e.c
                      ? ((u.c = C(t, e.c, r.c)), (u.rd = q(t, e.rd, r.rd)))
                      : e.f &&
                        ((u.f = C(t, e.f, r.f)), (u.to = C(t, e.to, r.to))),
                    u
                  );
                }
            }
          if (("c" === e.t && "g" === r.t) || ("c" === r.t && "g" === e.t)) {
            var o = "c" === e.t ? e : r,
              a = "g" === e.t ? n({}, e) : n({}, r),
              l = a.s.map(function (t) {
                return { c: o.v, o: t.o };
              });
            return (a.s = "c" === e.t ? Kt(t, l, a.s) : Kt(t, a.s, l)), a;
          }
        }
        return N(t, e, r);
      }
      function Kt(t, n, e) {
        if (n.length === e.length)
          return n.map(function (n, r) {
            return Wt(t, n, e[r]);
          });
        for (var r = Math.max(n.length, e.length), i = [], u = 0; u < r; u++) {
          var o = Wt(
            t,
            n[Math.min(u, n.length - 1)],
            e[Math.min(u, e.length - 1)]
          );
          i.push(o);
        }
        return i;
      }
      function Wt(t, n, e) {
        return { o: L(t, n.o, e.o || 0), c: z(t, n.c, e.c || {}) };
      }
      function Xt(t) {
        return t.replace(/-fill-([0-9]+)$/, function (t, n) {
          return "-fill-" + (+n + 1);
        });
      }
      var tn = {
        blur: D,
        brightness: q,
        contrast: q,
        "drop-shadow": function (t, n, e) {
          return 0 === t
            ? n
            : 1 === t
            ? e
            : {
                blur: D(t, n.blur, e.blur),
                offset: C(t, n.offset, e.offset),
                color: z(t, n.color, e.color),
              };
        },
        grayscale: q,
        "hue-rotate": T,
        invert: q,
        opacity: q,
        saturate: q,
        sepia: q,
      };
      function nn(t, n, e) {
        if (0 === t) return n;
        if (1 === t) return e;
        var r = n.length;
        if (r !== e.length) return N(t, n, e);
        for (var i, u = [], o = 0; o < r; o++) {
          if (n[o].type !== e[o].type) return n;
          if (!(i = tn[n[o].type])) return N(t, n, e);
          u.push({ type: n.type, value: i(t, n[o].value, e[o].value) });
        }
        return u;
      }
      var en = {
        blur: function (t) {
          return t
            ? function (n) {
                t.setAttribute("stdDeviation", yt(n));
              }
            : null;
        },
        brightness: function (t, n, e) {
          return (t = un(e, n))
            ? function (n) {
                (n = ht(n)),
                  t.map(function (t) {
                    return t.setAttribute("slope", n);
                  });
              }
            : null;
        },
        contrast: function (t, n, e) {
          return (t = un(e, n))
            ? function (n) {
                var e = ht((1 - n) / 2);
                (n = ht(n)),
                  t.map(function (t) {
                    t.setAttribute("slope", n), t.setAttribute("intercept", e);
                  });
              }
            : null;
        },
        "drop-shadow": function (t, n, e) {
          var r = e.getElementById(n + "-blur");
          if (!r) return null;
          var i = e.getElementById(n + "-offset");
          if (!i) return null;
          var u = e.getElementById(n + "-flood");
          return u
            ? function (t) {
                r.setAttribute("stdDeviation", yt(t.blur)),
                  i.setAttribute("dx", ht(t.offset.x)),
                  i.setAttribute("dy", ht(t.offset.y)),
                  u.setAttribute("flood-color", gt(t.color));
              }
            : null;
        },
        grayscale: function (t) {
          return t
            ? function (n) {
                t.setAttribute(
                  "values",
                  vt(
                    (function (t) {
                      return [
                        0.2126 + 0.7874 * (t = 1 - t),
                        0.7152 - 0.7152 * t,
                        0.0722 - 0.0722 * t,
                        0,
                        0,
                        0.2126 - 0.2126 * t,
                        0.7152 + 0.2848 * t,
                        0.0722 - 0.0722 * t,
                        0,
                        0,
                        0.2126 - 0.2126 * t,
                        0.7152 - 0.7152 * t,
                        0.0722 + 0.9278 * t,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                      ];
                    })(n)
                  )
                );
              }
            : null;
        },
        "hue-rotate": function (t) {
          return t
            ? function (n) {
                return t.setAttribute("values", ht(n));
              }
            : null;
        },
        invert: function (t, n, e) {
          return (t = un(e, n))
            ? function (n) {
                (n = ht(n) + " " + ht(1 - n)),
                  t.map(function (t) {
                    return t.setAttribute("tableValues", n);
                  });
              }
            : null;
        },
        opacity: function (t, n, e) {
          return (t = e.getElementById(n + "-A"))
            ? function (n) {
                return t.setAttribute("tableValues", "0 " + ht(n));
              }
            : null;
        },
        saturate: function (t) {
          return t
            ? function (n) {
                return t.setAttribute("values", ht(n));
              }
            : null;
        },
        sepia: function (t) {
          return t
            ? function (n) {
                return t.setAttribute(
                  "values",
                  vt(
                    (function (t) {
                      return [
                        0.393 + 0.607 * (t = 1 - t),
                        0.769 - 0.769 * t,
                        0.189 - 0.189 * t,
                        0,
                        0,
                        0.349 - 0.349 * t,
                        0.686 + 0.314 * t,
                        0.168 - 0.168 * t,
                        0,
                        0,
                        0.272 - 0.272 * t,
                        0.534 - 0.534 * t,
                        0.131 + 0.869 * t,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                      ];
                    })(n)
                  )
                );
              }
            : null;
        },
      };
      var rn = ["R", "G", "B"];
      function un(t, n) {
        var e = rn.map(function (e) {
          return t.getElementById(n + "-" + e) || null;
        });
        return -1 !== e.indexOf(null) ? null : e;
      }
      var on = {
          fill: Jt,
          "fill-opacity": $t,
          stroke: Jt,
          "stroke-opacity": $t,
          "stroke-width": Yt,
          "stroke-dashoffset": { f: ht, i: T },
          "stroke-dasharray": Ut,
          opacity: $t,
          transform: function (t, n, r, i) {
            if (
              !(t = (function (t, n) {
                if (!t || "object" !== e(t)) return null;
                var r = !1;
                for (var i in t)
                  t.hasOwnProperty(i) &&
                    (t[i] && t[i].length
                      ? (t[i].forEach(function (t) {
                          t.e && (t.e = n(t.e));
                        }),
                        (r = !0))
                      : delete t[i]);
                return r ? t : null;
              })(t, i))
            )
              return null;
            var u = function (e, i, u) {
              var o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return t[e] ? r(i, t[e], u) : n && n[e] ? n[e] : o;
            };
            return n && n.a && t.o
              ? function (n) {
                  var e = r(n, t.o, qt);
                  return Vt.recomposeSelf(
                    e,
                    u("r", n, T, 0) + e.a,
                    u("k", n, C),
                    u("s", n, C),
                    u("t", n, C)
                  ).toString();
                }
              : function (t) {
                  return Vt.recomposeSelf(
                    u("o", t, Tt, null),
                    u("r", t, T, 0),
                    u("k", t, C),
                    u("s", t, C),
                    u("t", t, C)
                  ).toString();
                };
          },
          "#filter": function (t, n, e, r, i, u, o, a) {
            if (!n.items || !t || !t.length) return null;
            var l = (function (t, n) {
              var e = (t = t.map(function (t) {
                return t && en[t[0]]
                  ? (n.getElementById(t[1]),
                    en[t[0]](n.getElementById(t[1]), t[1], n))
                  : null;
              })).length;
              return function (n) {
                for (var r = 0; r < e; r++) t[r] && t[r](n[r].value);
              };
            })(n.items, a);
            return l
              ? ((t = (function (t, n) {
                  return t.map(function (t) {
                    return (t.e = n(t.e)), t;
                  });
                })(t, r)),
                function (n) {
                  l(e(n, t, nn));
                })
              : null;
          },
          "#line": Gt,
          points: { f: vt, i: G },
          d: zt,
          r: Yt,
          "#size": mt,
          "#radius": pt,
          _: function (t, n) {
            if (Array.isArray(t))
              for (var e = 0; e < t.length; e++) this[t[e]] = n;
            else this[t] = n;
          },
        },
        an = (function (t) {
          !(function (t, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && l(t, n);
          })(o, t);
          var n,
            e,
            i =
              ((n = o),
              (e = f()),
              function () {
                var t,
                  r = a(n);
                if (e) {
                  var i = a(this).constructor;
                  t = Reflect.construct(r, arguments, i);
                } else t = r.apply(this, arguments);
                return c(this, t);
              });
          function o() {
            return r(this, o), i.apply(this, arguments);
          }
          return (
            u(o, null, [
              {
                key: "build",
                value: function (t) {
                  var n = h(a(o), "build", this).call(this, t, on);
                  if (!n) return null;
                  n.el,
                    n.options,
                    (function (t, n, e) {
                      t.play();
                    })(n.player);
                },
              },
            ]),
            o
          );
        })(ct);
      return an.init(), an;
    });
    (function (s, i, o, w, a, b) {
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
    })(
      "7c8cb2ed",
      {
        root: "evkOETdtVso1",
        version: "2022-05-04",
        animations: [
          {
            elements: {
              evkOETdtVso2: {
                "#radius": [
                  {
                    t: 0,
                    v: { x: 74.285714, y: 74.512189 },
                    e: [0.6, -0.6, 0.735, 0.045],
                  },
                  { t: 750, v: { x: 4.285714, y: 4.29878 } },
                ],
                transform: {
                  data: { s: { x: 1.75, y: 1.744681 } },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: { x: 150, y: 150, type: "corner" },
                        e: [0.6, -0.28, 0.735, 0.045],
                      },
                      { t: 750, v: { x: 142.500005, y: 200, type: "corner" } },
                    ],
                    t: [
                      {
                        t: 0,
                        v: { x: 0, y: 0 },
                        e: [0.6, -0.28, 0.735, 0.045],
                      },
                      { t: 750, v: { x: 0, y: 0 } },
                    ],
                  },
                },
                "fill-opacity": [
                  { t: 0, v: 0.1, e: [0.6, -0.6, 0.735, 0.045] },
                  { t: 750, v: 1 },
                ],
                stroke: [
                  {
                    t: 0,
                    v: {
                      t: "g",
                      s: [
                        { c: { r: 111, g: 210, b: 255, a: 1 }, o: 0 },
                        { c: { r: 111, g: 210, b: 255, a: 0.1 }, o: 1 },
                      ],
                      r: "evkOETdtVso2-stroke",
                      gt: [1, 0, 0, 1, 0, 0],
                      f: { x: 0.066987, y: 0.25 },
                      to: { x: 0.933013, y: 0.75 },
                    },
                    e: [0.6, -0.28, 0.735, 0.045],
                  },
                  { t: 750, v: null },
                ],
              },
              evkOETdtVso3: {
                d: [
                  {
                    t: 0,
                    v: ["M", 200.082348, 30.094325, "L", 99.917652, 269.950591],
                    e: [0.6, -0.28, 0.735, 0.045],
                  },
                  {
                    t: 750,
                    v: [
                      "M",
                      259.121872,
                      142.594328,
                      "L",
                      182.763137,
                      142.594328,
                    ],
                    e: [0.175, 0.885, 0.32, 1.275],
                  },
                ],
                transform: {
                  data: {
                    s: { x: 0.8, y: 0.8 },
                    t: { x: -149.999979, y: -150.022458 },
                  },
                  keys: {
                    o: [
                      { t: 0, v: { x: 149.999984, y: 150, type: "corner" } },
                      { t: 750, v: { x: 157, y: 168.460099, type: "corner" } },
                    ],
                  },
                },
              },
              evkOETdtVso4: {
                d: [
                  {
                    t: 0,
                    v: [
                      "M",
                      100,
                      100.164695,
                      "L",
                      0,
                      150.164695,
                      "L",
                      100,
                      200.164695,
                    ],
                  },
                  {
                    t: 750,
                    v: [
                      "M",
                      0.051467,
                      87.494383,
                      "L",
                      0.051467,
                      212.494384,
                      "L",
                      100.051467,
                      212.494384,
                    ],
                  },
                ],
                transform: {
                  data: {
                    s: { x: 0.8, y: 0.8 },
                    t: { x: -50, y: -150.022458 },
                  },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: { x: 69.934122, y: 149.88621, type: "corner" },
                      },
                      { t: 750, v: { x: 80, y: 150.022459, type: "corner" } },
                    ],
                  },
                },
              },
              evkOETdtVso5: {
                d: [
                  {
                    t: 0,
                    v: [
                      "M",
                      200.183412,
                      88.135394,
                      "L",
                      300.183412,
                      137.810394,
                      "L",
                      200.183412,
                      188.135394,
                    ],
                  },
                  {
                    t: 750,
                    v: [
                      "M",
                      199.364606,
                      87.499999,
                      "L",
                      324.364606,
                      150.183412,
                      "L",
                      199.364606,
                      212.683412,
                    ],
                  },
                ],
                transform: {
                  data: {
                    s: { x: 0.8, y: 0.8 },
                    t: { x: -252.854957, y: -158.087398 },
                  },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: {
                          x: 232.203115,
                          y: 165.961603,
                          type: "cusp",
                          end: { x: 232.203115, y: 165.961603 },
                        },
                      },
                      {
                        t: 750,
                        v: {
                          x: 220.47,
                          y: 157.207719,
                          type: "cusp",
                          start: { x: 233.529024, y: 157.892909 },
                        },
                      },
                    ],
                    r: [
                      { t: 0, v: 0 },
                      { t: 750, v: -90 },
                    ],
                  },
                },
              },
            },
            s: "MDA1HMmJkNjRhNmI3S2I0YTNiNmFiPYjFiMDY0N2M3OTc3NzI2ZTY0BYTZhYlRiNGE3YTViNmFiYjFiGMDY0N2M3MzZlRTY0YWJiNmE3SYjRhM2I2YWJiMWIwYjVQNjRPAN2M3MzZlNjRhOGFiYWVhZTY0VN2M3MzZlNjRhM0NhZWI2YTdYTYjRiMGEzYjZhNzY0N2NhOGEzMVmFlS2I1YTc2ZUc2NGI1YjJhKN2E3YTY2NDdjNzNiZg|",
          },
        ],
        options: "MDAxKMDhmMzY4Nzg4NzU4Njg4MzY0IZTM2ODA4Mzc1NzhHMzY5MQ|",
      },
      "__SVGATOR_PLAYER__",
      window
    );

    !(function (t, n) {
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = n())
        : "function" == typeof define && define.amd
        ? define(n)
        : (((t =
            "undefined" != typeof globalThis
              ? globalThis
              : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
          (t.__SVGATOR_PLAYER__["7c8cb2ed"] = n()));
    })(this, function () {
      "use strict";
      function t(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function n(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? t(Object(r), !0).forEach(function (t) {
                o(n, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
            : t(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  n,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return n;
      }
      function e(t) {
        return (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function u(t, n, e) {
        return n && i(t.prototype, n), e && i(t, e), t;
      }
      function o(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, n) {
        return (l =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function f() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function s(t, n, e) {
        return (s = f()
          ? Reflect.construct
          : function (t, n, e) {
              var r = [null];
              r.push.apply(r, n);
              var i = new (Function.bind.apply(t, r))();
              return e && l(i, e.prototype), i;
            }).apply(null, arguments);
      }
      function c(t, n) {
        if (n && ("object" == typeof n || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t);
      }
      function h(t, n, e) {
        return (h =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, n, e) {
                var r = (function (t, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, n) &&
                    null !== (t = a(t));

                  );
                  return t;
                })(t, n);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, n);
                  return i.get ? i.get.call(e) : i.value;
                }
              })(t, n, e || t);
      }
      function v(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return y(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, n) {
            if (!t) return;
            if ("string" == typeof t) return y(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return y(t, n);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }
      Number.isInteger ||
        (Number.isInteger = function (t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
        }),
        Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
      var g = d(Math.pow(10, -6));
      function d(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        if (Number.isInteger(t)) return t;
        var e = Math.pow(10, n);
        return Math.round((+t + Number.EPSILON) * e) / e;
      }
      function p(t, n) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
        return Math.abs(t - n) < e;
      }
      var m = Math.PI / 180;
      function b(t) {
        return t;
      }
      function A(t, n, e) {
        var r = 1 - e;
        return 3 * e * r * (t * r + n * e) + e * e * e;
      }
      function w() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return t < 0 || t > 1 || e < 0 || e > 1
          ? null
          : p(t, n) && p(e, r)
          ? b
          : function (i) {
              if (i <= 0)
                return t > 0 ? (i * n) / t : 0 === n && e > 0 ? (i * r) / e : 0;
              if (i >= 1)
                return e < 1
                  ? 1 + ((i - 1) * (r - 1)) / (e - 1)
                  : 1 === e && t < 1
                  ? 1 + ((i - 1) * (n - 1)) / (t - 1)
                  : 1;
              for (var u, o = 0, a = 1; o < a; ) {
                var l = A(t, e, (u = (o + a) / 2));
                if (p(i, l)) break;
                l < i ? (o = u) : (a = u);
              }
              return A(n, r, u);
            };
      }
      function x() {
        return 1;
      }
      function k(t) {
        return 1 === t ? 1 : 0;
      }
      function _() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (1 === t) {
          if (0 === n) return k;
          if (1 === n) return x;
        }
        var e = 1 / t;
        return function (t) {
          return t >= 1 ? 1 : (t += n * e) - (t % e);
        };
      }
      var S = Math.sin,
        O = Math.cos,
        j = Math.acos,
        E = Math.asin,
        M = Math.tan,
        P = Math.atan2,
        I = Math.PI / 180,
        R = 180 / Math.PI,
        B = Math.sqrt,
        F = (function () {
          function t() {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1,
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0,
              a =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0;
            r(this, t),
              (this.m = [n, e, i, u, o, a]),
              (this.i = null),
              (this.w = null),
              (this.s = null);
          }
          return (
            u(
              t,
              [
                {
                  key: "determinant",
                  get: function () {
                    var t = this.m;
                    return t[0] * t[3] - t[1] * t[2];
                  },
                },
                {
                  key: "isIdentity",
                  get: function () {
                    if (null === this.i) {
                      var t = this.m;
                      this.i =
                        1 === t[0] &&
                        0 === t[1] &&
                        0 === t[2] &&
                        1 === t[3] &&
                        0 === t[4] &&
                        0 === t[5];
                    }
                    return this.i;
                  },
                },
                {
                  key: "point",
                  value: function (t, n) {
                    var e = this.m;
                    return {
                      x: e[0] * t + e[2] * n + e[4],
                      y: e[1] * t + e[3] * n + e[5],
                    };
                  },
                },
                {
                  key: "translateSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                    if (!t && !n) return this;
                    var e = this.m;
                    return (
                      (e[4] += e[0] * t + e[2] * n),
                      (e[5] += e[1] * t + e[3] * n),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: "rotateSelf",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                    if ((t %= 360)) {
                      var n = S((t *= I)),
                        e = O(t),
                        r = this.m,
                        i = r[0],
                        u = r[1];
                      (r[0] = i * e + r[2] * n),
                        (r[1] = u * e + r[3] * n),
                        (r[2] = r[2] * e - i * n),
                        (r[3] = r[3] * e - u * n),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "scaleSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1;
                    if (1 !== t || 1 !== n) {
                      var e = this.m;
                      (e[0] *= t),
                        (e[1] *= t),
                        (e[2] *= n),
                        (e[3] *= n),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "skewSelf",
                  value: function (t, n) {
                    if (((n %= 360), (t %= 360) || n)) {
                      var e = this.m,
                        r = e[0],
                        i = e[1],
                        u = e[2],
                        o = e[3];
                      t && ((t = M(t * I)), (e[2] += r * t), (e[3] += i * t)),
                        n && ((n = M(n * I)), (e[0] += u * n), (e[1] += o * n)),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "resetSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      e =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 1,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0,
                      u =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : 0,
                      o = this.m;
                    return (
                      (o[0] = t),
                      (o[1] = n),
                      (o[2] = e),
                      (o[3] = r),
                      (o[4] = i),
                      (o[5] = u),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: "recomposeSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      e =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null;
                    return (
                      this.isIdentity || this.resetSelf(),
                      t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                      n && this.rotateSelf(n),
                      e &&
                        (e.x && this.skewSelf(e.x, 0),
                        e.y && this.skewSelf(0, e.y)),
                      !r ||
                        (1 === r.x && 1 === r.y) ||
                        this.scaleSelf(r.x, r.y),
                      i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                      this
                    );
                  },
                },
                {
                  key: "decompose",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      e = this.m,
                      r = e[0] * e[0] + e[1] * e[1],
                      i = [
                        [e[0], e[1]],
                        [e[2], e[3]],
                      ],
                      u = B(r);
                    if (0 === u)
                      return {
                        origin: { x: d(e[4]), y: d(e[5]) },
                        translate: { x: d(t), y: d(n) },
                        scale: { x: 0, y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0,
                      };
                    (i[0][0] /= u), (i[0][1] /= u);
                    var o = e[0] * e[3] - e[1] * e[2] < 0;
                    o && (u = -u);
                    var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                    (i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a);
                    var l = B(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                    if (0 === l)
                      return {
                        origin: { x: d(e[4]), y: d(e[5]) },
                        translate: { x: d(t), y: d(n) },
                        scale: { x: d(u), y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0,
                      };
                    (i[1][0] /= l), (i[1][1] /= l), (a /= l);
                    var f = 0;
                    return (
                      i[1][1] < 0
                        ? ((f = j(i[1][1]) * R), i[0][1] < 0 && (f = 360 - f))
                        : (f = E(i[0][1]) * R),
                      o && (f = -f),
                      (a = P(a, B(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * R),
                      o && (a = -a),
                      {
                        origin: { x: d(e[4]), y: d(e[5]) },
                        translate: { x: d(t), y: d(n) },
                        scale: { x: d(u), y: d(l) },
                        skew: { x: d(a), y: 0 },
                        rotate: d(f),
                      }
                    );
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    var t = this.m;
                    return new this.constructor(
                      t[0],
                      t[1],
                      t[2],
                      t[3],
                      t[4],
                      t[5]
                    );
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : " ";
                    if (null === this.s) {
                      var n = this.m.map(function (t) {
                        return d(t);
                      });
                      1 === n[0] && 0 === n[1] && 0 === n[2] && 1 === n[3]
                        ? (this.s = "translate(" + n[4] + t + n[5] + ")")
                        : (this.s = "matrix(" + n.join(t) + ")");
                    }
                    return this.s;
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t) {
                    return t
                      ? Array.isArray(t)
                        ? s(this, v(t))
                        : t instanceof this
                        ? t.clone()
                        : new this().recomposeSelf(
                            t.origin,
                            t.rotate,
                            t.skew,
                            t.scale,
                            t.translate
                          )
                      : new this();
                  },
                },
              ]
            ),
            t
          );
        })();
      function N(t, n, e) {
        return t >= 0.5 ? e : n;
      }
      function T(t, n, e) {
        return 0 === t || n === e ? n : t * (e - n) + n;
      }
      function q(t, n, e) {
        var r = T(t, n, e);
        return r <= 0 ? 0 : r;
      }
      function L(t, n, e) {
        var r = T(t, n, e);
        return r <= 0 ? 0 : r >= 1 ? 1 : r;
      }
      function C(t, n, e) {
        return 0 === t
          ? n
          : 1 === t
          ? e
          : { x: T(t, n.x, e.x), y: T(t, n.y, e.y) };
      }
      function D(t, n, e) {
        return 0 === t
          ? n
          : 1 === t
          ? e
          : { x: q(t, n.x, e.x), y: q(t, n.y, e.y) };
      }
      function V(t, n, e) {
        var r = (function (t, n, e) {
          return Math.round(T(t, n, e));
        })(t, n, e);
        return r <= 0 ? 0 : r >= 255 ? 255 : r;
      }
      function z(t, n, e) {
        return 0 === t
          ? n
          : 1 === t
          ? e
          : {
              r: V(t, n.r, e.r),
              g: V(t, n.g, e.g),
              b: V(t, n.b, e.b),
              a: T(t, null == n.a ? 1 : n.a, null == e.a ? 1 : e.a),
            };
      }
      function G(t, n, e) {
        var r = n.length;
        if (r !== e.length) return N(t, n, e);
        for (var i = new Array(r), u = 0; u < r; u++) i[u] = T(t, n[u], e[u]);
        return i;
      }
      function Y(t, n) {
        for (var e = [], r = 0; r < t; r++) e.push(n);
        return e;
      }
      function $(t, n) {
        if (--n <= 0) return t;
        var e = (t = Object.assign([], t)).length;
        do {
          for (var r = 0; r < e; r++) t.push(t[r]);
        } while (--n > 0);
        return t;
      }
      var U,
        Q = (function () {
          function t(n) {
            r(this, t), (this.list = n), (this.length = n.length);
          }
          return (
            u(t, [
              {
                key: "setAttribute",
                value: function (t, n) {
                  for (var e = this.list, r = 0; r < this.length; r++)
                    e[r].setAttribute(t, n);
                },
              },
              {
                key: "removeAttribute",
                value: function (t) {
                  for (var n = this.list, e = 0; e < this.length; e++)
                    n[e].removeAttribute(t);
                },
              },
              {
                key: "style",
                value: function (t, n) {
                  for (var e = this.list, r = 0; r < this.length; r++)
                    e[r].style[t] = n;
                },
              },
            ]),
            t
          );
        })(),
        H = /-./g,
        J = function (t, n) {
          return n.toUpperCase();
        };
      function Z(t) {
        return "function" == typeof t ? t : N;
      }
      function K(t) {
        return t
          ? "function" == typeof t
            ? t
            : Array.isArray(t)
            ? (function (t) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : b;
                if (!Array.isArray(t)) return n;
                switch (t.length) {
                  case 1:
                    return _(t[0]) || n;
                  case 2:
                    return _(t[0], t[1]) || n;
                  case 4:
                    return w(t[0], t[1], t[2], t[3]) || n;
                }
                return n;
              })(t, null)
            : (function (t, n) {
                var e =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : b;
                switch (t) {
                  case "linear":
                    return b;
                  case "steps":
                    return _(n.steps || 1, n.jump || 0) || e;
                  case "bezier":
                  case "cubic-bezier":
                    return w(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || e;
                }
                return e;
              })(t.type, t.value, null)
          : null;
      }
      function W(t, n, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = n.length - 1;
        if (t <= n[0].t) return r ? [0, 0, n[0].v] : n[0].v;
        if (t >= n[i].t) return r ? [i, 1, n[i].v] : n[i].v;
        var u,
          o = n[0],
          a = null;
        for (u = 1; u <= i; u++) {
          if (!(t > n[u].t)) {
            a = n[u];
            break;
          }
          o = n[u];
        }
        return null == a
          ? r
            ? [i, 1, n[i].v]
            : n[i].v
          : o.t === a.t
          ? r
            ? [u, 1, a.v]
            : a.v
          : ((t = (t - o.t) / (a.t - o.t)),
            o.e && (t = o.e(t)),
            r ? [u, t, e(t, o.v, a.v)] : e(t, o.v, a.v));
      }
      function X(t, n) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return t && t.length
          ? "function" != typeof n
            ? null
            : ("function" != typeof e && (e = null),
              function (r) {
                var i = W(r, t, n);
                return null != i && e && (i = e(i)), i;
              })
          : null;
      }
      function tt(t, n) {
        return t.t - n.t;
      }
      function nt(t, n, r, i, u) {
        var o,
          a = "@" === r[0],
          l = "#" === r[0],
          f = U[r],
          s = N;
        switch (
          (a
            ? ((o = r.substr(1)), (r = o.replace(H, J)))
            : l && (r = r.substr(1)),
          e(f))
        ) {
          case "function":
            if (((s = f(i, u, W, K, r, a, n, t)), l)) return s;
            break;
          case "string":
            s = X(i, Z(f));
            break;
          case "object":
            if ((s = X(i, Z(f.i), f.f)) && "function" == typeof f.u)
              return f.u(n, s, r, a, t);
        }
        return s
          ? (function (t, n, e) {
              if (
                arguments.length > 3 &&
                void 0 !== arguments[3] &&
                arguments[3]
              )
                return t instanceof Q
                  ? function (r) {
                      return t.style(n, e(r));
                    }
                  : function (r) {
                      return (t.style[n] = e(r));
                    };
              if (Array.isArray(n)) {
                var r = n.length;
                return function (i) {
                  var u = e(i);
                  if (null == u)
                    for (var o = 0; o < r; o++) t[o].removeAttribute(n);
                  else for (var a = 0; a < r; a++) t[a].setAttribute(n, u);
                };
              }
              return function (r) {
                var i = e(r);
                null == i ? t.removeAttribute(n) : t.setAttribute(n, i);
              };
            })(n, r, s, a)
          : null;
      }
      function et(t, n, r, i) {
        if (!i || "object" !== e(i)) return null;
        var u = null,
          o = null;
        return (
          Array.isArray(i)
            ? (o = (function (t) {
                if (!t || !t.length) return null;
                for (var n = 0; n < t.length; n++)
                  t[n].e && (t[n].e = K(t[n].e));
                return t.sort(tt);
              })(i))
            : ((o = i.keys), (u = i.data || null)),
          o ? nt(t, n, r, o, u) : null
        );
      }
      function rt(t, n, e) {
        if (!e) return null;
        var r = [];
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = et(t, n, i, e[i]);
            u && r.push(u);
          }
        return r.length ? r : null;
      }
      function it(t, n) {
        if (!n.settings.duration || n.settings.duration < 0) return null;
        var e,
          r,
          i,
          u,
          o,
          a = (function (t, n) {
            if (!n) return null;
            var e = [];
            if (Array.isArray(n))
              for (var r = n.length, i = 0; i < r; i++) {
                var u = n[i];
                if (2 === u.length) {
                  var o = null;
                  if ("string" == typeof u[0]) o = t.getElementById(u[0]);
                  else if (Array.isArray(u[0])) {
                    o = [];
                    for (var a = 0; a < u[0].length; a++)
                      if ("string" == typeof u[0][a]) {
                        var l = t.getElementById(u[0][a]);
                        l && o.push(l);
                      }
                    o = o.length ? (1 === o.length ? o[0] : new Q(o)) : null;
                  }
                  if (o) {
                    var f = rt(t, o, u[1]);
                    f && (e = e.concat(f));
                  }
                }
              }
            else
              for (var s in n)
                if (n.hasOwnProperty(s)) {
                  var c = t.getElementById(s);
                  if (c) {
                    var h = rt(t, c, n[s]);
                    h && (e = e.concat(h));
                  }
                }
            return e.length ? e : null;
          })(t, n.elements);
        return a
          ? ((e = a),
            (r = n.settings),
            (i = r.duration),
            (u = e.length),
            (o = null),
            function (t, n) {
              var a = r.iterations || 1 / 0,
                l = (r.alternate && a % 2 == 0) ^ (r.direction > 0) ? i : 0,
                f = t % i,
                s = 1 + (t - f) / i;
              (n *= r.direction), r.alternate && s % 2 == 0 && (n = -n);
              var c = !1;
              if (s > a)
                (f = l),
                  (c = !0),
                  -1 === r.fill && (f = r.direction > 0 ? 0 : i);
              else if ((n < 0 && (f = i - f), f === o)) return !1;
              o = f;
              for (var h = 0; h < u; h++) e[h](f);
              return c;
            })
          : null;
      }
      function ut(t, n) {
        if (((U = n), !t || !t.root || !Array.isArray(t.animations)))
          return null;
        var e = (function (t) {
          for (
            var n = document.getElementsByTagName("svg"), e = 0;
            e < n.length;
            e++
          )
            if (n[e].id === t.root && !n[e].svgatorAnimation)
              return (n[e].svgatorAnimation = !0), n[e];
          return null;
        })(t);
        if (!e) return null;
        var r = t.animations
          .map(function (t) {
            return it(e, t);
          })
          .filter(function (t) {
            return !!t;
          });
        return r.length
          ? {
              svg: e,
              animations: r,
              animationSettings: t.animationSettings,
              options: t.options || void 0,
            }
          : null;
      }
      function ot(t) {
        return +("0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27));
      }
      function at(t, n, e) {
        return !t || !e || n > t.length
          ? t
          : t.substring(0, n) + at(t.substring(n + 1), e, e);
      }
      function lt(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
        return !t || t % n ? t % n : lt(t / n, n);
      }
      function ft(t, n, e) {
        if (t && t.length) {
          var r = ot(e),
            i = ot(n),
            u = lt(r) + 5,
            o = at(t, lt(r, 5), u);
          return (
            (o = o.replace(/\x7c$/g, "==").replace(/\x2f$/g, "=")),
            (o = (function (t, n, e) {
              var r = +("0x" + t.substring(0, 4));
              t = t.substring(4);
              for (
                var i = (n % r) + (e % 27), u = [], o = 0;
                o < t.length;
                o += 2
              )
                if ("|" !== t[o]) {
                  var a = +("0x" + t[o] + t[o + 1]) - i;
                  u.push(a);
                } else {
                  var l = +("0x" + t.substring(o + 1, o + 1 + 4)) - i;
                  (o += 3), u.push(l);
                }
              return String.fromCharCode.apply(String, u);
            })((o = (o = atob(o)).replace(/[\x41-\x5A]/g, "")), i, r)),
            (o = JSON.parse(o))
          );
        }
      }
      var st = [
          { key: "alternate", def: !1 },
          { key: "fill", def: 1 },
          { key: "iterations", def: 0 },
          { key: "direction", def: 1 },
          { key: "speed", def: 1 },
          { key: "fps", def: 100 },
        ],
        ct = (function () {
          function t(n, e) {
            var i = this,
              u =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            r(this, t),
              (this._id = 0),
              (this._running = !1),
              (this._rollingBack = !1),
              (this._animations = n),
              (this._settings = e),
              (!u || u < "2022-05-02") && delete this._settings.speed,
              st.forEach(function (t) {
                i._settings[t.key] = i._settings[t.key] || t.def;
              }),
              (this.duration = e.duration),
              (this.offset = e.offset || 0),
              (this.rollbackStartOffset = 0);
          }
          return (
            u(
              t,
              [
                {
                  key: "alternate",
                  get: function () {
                    return this._settings.alternate;
                  },
                },
                {
                  key: "fill",
                  get: function () {
                    return this._settings.fill;
                  },
                },
                {
                  key: "iterations",
                  get: function () {
                    return this._settings.iterations;
                  },
                },
                {
                  key: "direction",
                  get: function () {
                    return this._settings.direction;
                  },
                },
                {
                  key: "speed",
                  get: function () {
                    return this._settings.speed;
                  },
                },
                {
                  key: "fps",
                  get: function () {
                    return this._settings.fps;
                  },
                },
                {
                  key: "maxFiniteDuration",
                  get: function () {
                    return this.iterations > 0
                      ? this.iterations * this.duration
                      : this.duration;
                  },
                },
                {
                  key: "_apply",
                  value: function (t) {
                    for (
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        e = this._animations,
                        r = e.length,
                        i = 0,
                        u = 0;
                      u < r;
                      u++
                    )
                      n[u] ? i++ : ((n[u] = e[u](t, 1)), n[u] && i++);
                    return i;
                  },
                },
                {
                  key: "_rollback",
                  value: function (t) {
                    var n = this,
                      e = 1 / 0,
                      r = null;
                    (this.rollbackStartOffset = t),
                      (this._rollingBack = !0),
                      (this._running = !0);
                    this._id = window.requestAnimationFrame(function i(u) {
                      if (n._rollingBack) {
                        null == r && (r = u);
                        var o = Math.round(t - (u - r) * n.speed);
                        if (o > n.duration && e !== 1 / 0) {
                          var a = !!n.alternate && (o / n.duration) % 2 > 1,
                            l = o % n.duration;
                          o = (l += a ? n.duration : 0) || n.duration;
                        }
                        var f = (n.fps ? 1e3 / n.fps : 0) * n.speed,
                          s = Math.max(0, o);
                        s < e - f && ((n.offset = s), (e = s), n._apply(s));
                        var c =
                          n.iterations > 0 &&
                          -1 === n.fill &&
                          o >= n.maxFiniteDuration;
                        (o <= 0 || n.offset < o || c) && n.stop(),
                          (n._id = window.requestAnimationFrame(i));
                      }
                    });
                  },
                },
                {
                  key: "_start",
                  value: function () {
                    var t = this,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e = -1 / 0,
                      r = null,
                      i = {};
                    this._running = !0;
                    var u = function u(o) {
                      null == r && (r = o);
                      var a = Math.round((o - r) * t.speed + n),
                        l = (t.fps ? 1e3 / t.fps : 0) * t.speed;
                      if (
                        a > e + l &&
                        !t._rollingBack &&
                        ((t.offset = a),
                        (e = a),
                        t._apply(a, i) === t._animations.length)
                      )
                        return void t.pause(!0);
                      t._id = window.requestAnimationFrame(u);
                    };
                    this._id = window.requestAnimationFrame(u);
                  },
                },
                {
                  key: "_pause",
                  value: function () {
                    this._id && window.cancelAnimationFrame(this._id),
                      (this._running = !1);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    if (!this._running)
                      return this._rollingBack
                        ? this._rollback(this.offset)
                        : this._start(this.offset);
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this._pause(),
                      (this.offset = 0),
                      (this.rollbackStartOffset = 0),
                      (this._rollingBack = !1),
                      this._apply(0);
                  },
                },
                {
                  key: "reachedToEnd",
                  value: function () {
                    return (
                      this.iterations > 0 &&
                      this.offset >= this.iterations * this.duration
                    );
                  },
                },
                {
                  key: "restart",
                  value: function () {
                    var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    this.stop(t), this.play(t);
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    this._pause();
                  },
                },
                {
                  key: "reverse",
                  value: function () {
                    this.direction = -this.direction;
                  },
                },
              ],
              [
                {
                  key: "build",
                  value: function (t, n) {
                    delete t.animationSettings,
                      (t.options = ft(t.options, t.root, "7c8cb2ed")),
                      t.animations.map(function (n) {
                        (n.settings = ft(n.s, t.root, "7c8cb2ed")),
                          delete n.s,
                          t.animationSettings ||
                            (t.animationSettings = n.settings);
                      });
                    var e = t.version;
                    if (!(t = ut(t, n))) return null;
                    var r = t.options || {},
                      i = new this(t.animations, t.animationSettings, e);
                    return { el: t.svg, options: r, player: i };
                  },
                },
                {
                  key: "push",
                  value: function (t) {
                    return this.build(t);
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var t = this,
                      n =
                        window.__SVGATOR_PLAYER__ &&
                        window.__SVGATOR_PLAYER__["7c8cb2ed"];
                    Array.isArray(n) &&
                      n.splice(0).forEach(function (n) {
                        return t.build(n);
                      });
                  },
                },
              ]
            ),
            t
          );
        })();
      function ht(t) {
        return d(t) + "";
      }
      function vt(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
        return t && t.length ? t.map(ht).join(n) : "";
      }
      function yt(t) {
        return ht(t.x) + "," + ht(t.y);
      }
      function gt(t) {
        if (!t) return "transparent";
        if (null == t.a || t.a >= 1) {
          var n = function (t) {
              return 1 === (t = parseInt(t).toString(16)).length ? "0" + t : t;
            },
            e = function (t) {
              return t.charAt(0) === t.charAt(1);
            },
            r = n(t.r),
            i = n(t.g),
            u = n(t.b);
          return (
            e(r) &&
              e(i) &&
              e(u) &&
              ((r = r.charAt(0)), (i = i.charAt(0)), (u = u.charAt(0))),
            "#" + r + i + u
          );
        }
        return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
      }
      function dt(t) {
        return t ? "url(#" + t + ")" : "none";
      }
      !(function () {
        for (
          var t = 0, n = ["ms", "moz", "webkit", "o"], e = 0;
          e < n.length && !window.requestAnimationFrame;
          ++e
        )
          (window.requestAnimationFrame =
            window[n[e] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[n[e] + "CancelAnimationFrame"] ||
              window[n[e] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          ((window.requestAnimationFrame = function (n) {
            var e = Date.now(),
              r = Math.max(0, 16 - (e - t)),
              i = window.setTimeout(function () {
                n(e + r);
              }, r);
            return (t = e + r), i;
          }),
          (window.cancelAnimationFrame = window.clearTimeout));
      })();
      var pt = {
          f: null,
          i: D,
          u: function (t, n) {
            return function (e) {
              var r = n(e);
              t.setAttribute("rx", ht(r.x)), t.setAttribute("ry", ht(r.y));
            };
          },
        },
        mt = {
          f: null,
          i: function (t, n, e) {
            return 0 === t
              ? n
              : 1 === t
              ? e
              : {
                  width: q(t, n.width, e.width),
                  height: q(t, n.height, e.height),
                };
          },
          u: function (t, n) {
            return function (e) {
              var r = n(e);
              t.setAttribute("width", ht(r.width)),
                t.setAttribute("height", ht(r.height));
            };
          },
        };
      Object.freeze({
        M: 2,
        L: 2,
        Z: 0,
        H: 1,
        V: 1,
        C: 6,
        Q: 4,
        T: 2,
        S: 4,
        A: 7,
      });
      var bt = {},
        At = null;
      function wt(t) {
        var n = (function () {
          if (At) return At;
          if (
            "object" !==
              ("undefined" == typeof document ? "undefined" : e(document)) ||
            !document.createElementNS
          )
            return {};
          var t = document.createElementNS(
            "https://www.w3.org/2000/svg",
            "svg"
          );
          return t && t.style
            ? ((t.style.position = "absolute"),
              (t.style.opacity = "0.01"),
              (t.style.zIndex = "-9999"),
              (t.style.left = "-9999px"),
              (t.style.width = "1px"),
              (t.style.height = "1px"),
              (At = { svg: t }))
            : {};
        })().svg;
        if (!n)
          return function (t) {
            return null;
          };
        var r = document.createElementNS(n.namespaceURI, "path");
        r.setAttributeNS(null, "d", t),
          r.setAttributeNS(null, "fill", "none"),
          r.setAttributeNS(null, "stroke", "none"),
          n.appendChild(r);
        var i = r.getTotalLength();
        return function (t) {
          var n = r.getPointAtLength(i * t);
          return { x: n.x, y: n.y };
        };
      }
      function xt(t) {
        return bt[t] ? bt[t] : (bt[t] = wt(t));
      }
      function kt(t, n, e, r) {
        if (!t || !r) return !1;
        var i = ["M", t.x, t.y];
        if (
          (n &&
            e &&
            (i.push("C"), i.push(n.x), i.push(n.y), i.push(e.x), i.push(e.y)),
          n ? !e : e)
        ) {
          var u = n || e;
          i.push("Q"), i.push(u.x), i.push(u.y);
        }
        return n || e || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ");
      }
      function _t(t, n, e, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          u = kt(t, n, e, r),
          o = xt(u);
        try {
          return o(i);
        } catch (t) {
          return null;
        }
      }
      function St(t, n, e) {
        return t + (n - t) * e;
      }
      function Ot(t, n, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = { x: St(t.x, n.x, e), y: St(t.y, n.y, e) };
        return r && (i.a = jt(t, n)), i;
      }
      function jt(t, n) {
        return Math.atan2(n.y - t.y, n.x - t.x);
      }
      function Et(t, n, e, r) {
        var i = 1 - r;
        return i * i * t + 2 * i * r * n + r * r * e;
      }
      function Mt(t, n, e, r) {
        return 2 * (1 - r) * (n - t) + 2 * r * (e - n);
      }
      function Pt(t, n, e, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          u = _t(t, n, null, e, r);
        return (
          u || (u = { x: Et(t.x, n.x, e.x, r), y: Et(t.y, n.y, e.y, r) }),
          i && (u.a = It(t, n, e, r)),
          u
        );
      }
      function It(t, n, e, r) {
        return Math.atan2(Mt(t.y, n.y, e.y, r), Mt(t.x, n.x, e.x, r));
      }
      function Rt(t, n, e, r, i) {
        var u = i * i;
        return (
          i * u * (r - t + 3 * (n - e)) +
          3 * u * (t + e - 2 * n) +
          3 * i * (n - t) +
          t
        );
      }
      function Bt(t, n, e, r, i) {
        var u = 1 - i;
        return 3 * (u * u * (n - t) + 2 * u * i * (e - n) + i * i * (r - e));
      }
      function Ft(t, n, e, r, i) {
        var u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          o = _t(t, n, e, r, i);
        return (
          o ||
            (o = {
              x: Rt(t.x, n.x, e.x, r.x, i),
              y: Rt(t.y, n.y, e.y, r.y, i),
            }),
          u && (o.a = Nt(t, n, e, r, i)),
          o
        );
      }
      function Nt(t, n, e, r, i) {
        return Math.atan2(Bt(t.y, n.y, e.y, r.y, i), Bt(t.x, n.x, e.x, r.x, i));
      }
      function Tt(t, n, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (Lt(n)) {
          if (Ct(e)) return Pt(n, e.start, e, t, r);
        } else if (Lt(e)) {
          if (Dt(n)) return Pt(n, n.end, e, t, r);
        } else {
          if (Dt(n))
            return Ct(e)
              ? Ft(n, n.end, e.start, e, t, r)
              : Pt(n, n.end, e, t, r);
          if (Ct(e)) return Pt(n, e.start, e, t, r);
        }
        return Ot(n, e, t, r);
      }
      function qt(t, n, e) {
        var r = Tt(t, n, e, !0);
        return (
          (r.a =
            (function (t) {
              return arguments.length > 1 &&
                void 0 !== arguments[1] &&
                arguments[1]
                ? t + Math.PI
                : t;
            })(r.a) / m),
          r
        );
      }
      function Lt(t) {
        return !t.type || "corner" === t.type;
      }
      function Ct(t) {
        return null != t.start && !Lt(t);
      }
      function Dt(t) {
        return null != t.end && !Lt(t);
      }
      var Vt = new F();
      var zt = {
          f: function (t) {
            return t ? t.join(" ") : "";
          },
          i: function (t, n, r) {
            if (0 === t) return n;
            if (1 === t) return r;
            var i = n.length;
            if (i !== r.length) return N(t, n, r);
            for (var u, o = new Array(i), a = 0; a < i; a++) {
              if ((u = e(n[a])) !== e(r[a])) return N(t, n, r);
              if ("number" === u) o[a] = T(t, n[a], r[a]);
              else {
                if (n[a] !== r[a]) return N(t, n, r);
                o[a] = n[a];
              }
            }
            return o;
          },
        },
        Gt = {
          f: null,
          i: G,
          u: function (t, n) {
            return function (e) {
              var r = n(e);
              t.setAttribute("x1", ht(r[0])),
                t.setAttribute("y1", ht(r[1])),
                t.setAttribute("x2", ht(r[2])),
                t.setAttribute("y2", ht(r[3]));
            };
          },
        },
        Yt = { f: ht, i: T },
        $t = { f: ht, i: L },
        Ut = {
          f: function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : " ";
            return (
              t &&
                t.length > 0 &&
                (t = t.map(function (t) {
                  return d(t, 4);
                })),
              vt(t, n)
            );
          },
          i: function (t, n, e) {
            var r,
              i,
              u,
              o = n.length,
              a = e.length;
            if (o !== a)
              if (0 === o) n = Y((o = a), 0);
              else if (0 === a) (a = o), (e = Y(o, 0));
              else {
                var l =
                  (u =
                    ((r = o) * (i = a)) /
                    (function (t, n) {
                      for (var e; n; ) (e = n), (n = t % n), (t = e);
                      return t || 1;
                    })(r, i)) < 0
                    ? -u
                    : u;
                (n = $(n, Math.floor(l / o))),
                  (e = $(e, Math.floor(l / a))),
                  (o = a = l);
              }
            for (var f = [], s = 0; s < o; s++) f.push(d(q(t, n[s], e[s])));
            return f;
          },
        };
      function Qt(t, n, e) {
        return t.map(function (t) {
          return (function (t, n, e) {
            var r = t.v;
            if (!r || "g" !== r.t || r.s || !r.v || !r.r) return t;
            var i = e.getElementById(r.r),
              u = (i && i.querySelectorAll("stop")) || [];
            return (
              (r.s = r.v.map(function (t, n) {
                var e = u[n] && u[n].getAttribute("offset");
                return { c: t, o: (e = d(parseInt(e) / 100)) };
              })),
              delete r.v,
              t
            );
          })(t, 0, e);
        });
      }
      var Ht = {
        gt: "gradientTransform",
        c: { x: "cx", y: "cy" },
        rd: "r",
        f: { x: "x1", y: "y1" },
        to: { x: "x2", y: "y2" },
      };
      function Jt(t, n, r, i, u, o, a, l) {
        return (
          Qt(t, 0, l),
          (n = (function (t, n, e) {
            for (var r, i, u, o = t.length - 1, a = {}, l = 0; l <= o; l++)
              (r = t[l]).e && (r.e = n(r.e)),
                r.v &&
                  "g" === (i = r.v).t &&
                  i.r &&
                  (u = e.getElementById(i.r)) &&
                  (a[i.r] = { e: u, s: u.querySelectorAll("stop") });
            return a;
          })(t, i, l)),
          function (i) {
            var u = r(i, t, Zt);
            if (!u) return "none";
            if ("c" === u.t) return gt(u.v);
            if ("g" === u.t) {
              if (!n[u.r]) return dt(u.r);
              var o = n[u.r];
              return (
                (function (t, n) {
                  for (var e = t.s, r = e.length; r < n.length; r++) {
                    var i = e[e.length - 1].cloneNode();
                    (i.id = Xt(i.id)),
                      t.e.appendChild(i),
                      (e = t.s = t.e.querySelectorAll("stop"));
                  }
                  for (var u = 0, o = e.length, a = n.length - 1; u < o; u++)
                    e[u].setAttribute("stop-color", gt(n[Math.min(u, a)].c)),
                      e[u].setAttribute("offset", n[Math.min(u, a)].o);
                })(o, u.s),
                Object.keys(Ht).forEach(function (t) {
                  if (void 0 !== u[t])
                    if ("object" !== e(Ht[t])) {
                      var n,
                        r =
                          "gt" === t
                            ? ((n = u[t]),
                              Array.isArray(n)
                                ? "matrix(" + n.join(" ") + ")"
                                : "")
                            : u[t],
                        i = Ht[t];
                      o.e.setAttribute(i, r);
                    } else
                      Object.keys(Ht[t]).forEach(function (n) {
                        if (void 0 !== u[t][n]) {
                          var e = u[t][n],
                            r = Ht[t][n];
                          o.e.setAttribute(r, e);
                        }
                      });
                }),
                dt(u.r)
              );
            }
            return "none";
          }
        );
      }
      function Zt(t, e, r) {
        if (0 === t) return e;
        if (1 === t) return r;
        if (e && r) {
          var i = e.t;
          if (i === r.t)
            switch (e.t) {
              case "c":
                return { t: i, v: z(t, e.v, r.v) };
              case "g":
                if (e.r === r.r) {
                  var u = { t: i, s: Kt(t, e.s, r.s), r: e.r };
                  return (
                    e.gt && r.gt && (u.gt = G(t, e.gt, r.gt)),
                    e.c
                      ? ((u.c = C(t, e.c, r.c)), (u.rd = q(t, e.rd, r.rd)))
                      : e.f &&
                        ((u.f = C(t, e.f, r.f)), (u.to = C(t, e.to, r.to))),
                    u
                  );
                }
            }
          if (("c" === e.t && "g" === r.t) || ("c" === r.t && "g" === e.t)) {
            var o = "c" === e.t ? e : r,
              a = "g" === e.t ? n({}, e) : n({}, r),
              l = a.s.map(function (t) {
                return { c: o.v, o: t.o };
              });
            return (a.s = "c" === e.t ? Kt(t, l, a.s) : Kt(t, a.s, l)), a;
          }
        }
        return N(t, e, r);
      }
      function Kt(t, n, e) {
        if (n.length === e.length)
          return n.map(function (n, r) {
            return Wt(t, n, e[r]);
          });
        for (var r = Math.max(n.length, e.length), i = [], u = 0; u < r; u++) {
          var o = Wt(
            t,
            n[Math.min(u, n.length - 1)],
            e[Math.min(u, e.length - 1)]
          );
          i.push(o);
        }
        return i;
      }
      function Wt(t, n, e) {
        return { o: L(t, n.o, e.o || 0), c: z(t, n.c, e.c || {}) };
      }
      function Xt(t) {
        return t.replace(/-fill-([0-9]+)$/, function (t, n) {
          return "-fill-" + (+n + 1);
        });
      }
      var tn = {
        blur: D,
        brightness: q,
        contrast: q,
        "drop-shadow": function (t, n, e) {
          return 0 === t
            ? n
            : 1 === t
            ? e
            : {
                blur: D(t, n.blur, e.blur),
                offset: C(t, n.offset, e.offset),
                color: z(t, n.color, e.color),
              };
        },
        grayscale: q,
        "hue-rotate": T,
        invert: q,
        opacity: q,
        saturate: q,
        sepia: q,
      };
      function nn(t, n, e) {
        if (0 === t) return n;
        if (1 === t) return e;
        var r = n.length;
        if (r !== e.length) return N(t, n, e);
        for (var i, u = [], o = 0; o < r; o++) {
          if (n[o].type !== e[o].type) return n;
          if (!(i = tn[n[o].type])) return N(t, n, e);
          u.push({ type: n.type, value: i(t, n[o].value, e[o].value) });
        }
        return u;
      }
      var en = {
        blur: function (t) {
          return t
            ? function (n) {
                t.setAttribute("stdDeviation", yt(n));
              }
            : null;
        },
        brightness: function (t, n, e) {
          return (t = un(e, n))
            ? function (n) {
                (n = ht(n)),
                  t.map(function (t) {
                    return t.setAttribute("slope", n);
                  });
              }
            : null;
        },
        contrast: function (t, n, e) {
          return (t = un(e, n))
            ? function (n) {
                var e = ht((1 - n) / 2);
                (n = ht(n)),
                  t.map(function (t) {
                    t.setAttribute("slope", n), t.setAttribute("intercept", e);
                  });
              }
            : null;
        },
        "drop-shadow": function (t, n, e) {
          var r = e.getElementById(n + "-blur");
          if (!r) return null;
          var i = e.getElementById(n + "-offset");
          if (!i) return null;
          var u = e.getElementById(n + "-flood");
          return u
            ? function (t) {
                r.setAttribute("stdDeviation", yt(t.blur)),
                  i.setAttribute("dx", ht(t.offset.x)),
                  i.setAttribute("dy", ht(t.offset.y)),
                  u.setAttribute("flood-color", gt(t.color));
              }
            : null;
        },
        grayscale: function (t) {
          return t
            ? function (n) {
                t.setAttribute(
                  "values",
                  vt(
                    (function (t) {
                      return [
                        0.2126 + 0.7874 * (t = 1 - t),
                        0.7152 - 0.7152 * t,
                        0.0722 - 0.0722 * t,
                        0,
                        0,
                        0.2126 - 0.2126 * t,
                        0.7152 + 0.2848 * t,
                        0.0722 - 0.0722 * t,
                        0,
                        0,
                        0.2126 - 0.2126 * t,
                        0.7152 - 0.7152 * t,
                        0.0722 + 0.9278 * t,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                      ];
                    })(n)
                  )
                );
              }
            : null;
        },
        "hue-rotate": function (t) {
          return t
            ? function (n) {
                return t.setAttribute("values", ht(n));
              }
            : null;
        },
        invert: function (t, n, e) {
          return (t = un(e, n))
            ? function (n) {
                (n = ht(n) + " " + ht(1 - n)),
                  t.map(function (t) {
                    return t.setAttribute("tableValues", n);
                  });
              }
            : null;
        },
        opacity: function (t, n, e) {
          return (t = e.getElementById(n + "-A"))
            ? function (n) {
                return t.setAttribute("tableValues", "0 " + ht(n));
              }
            : null;
        },
        saturate: function (t) {
          return t
            ? function (n) {
                return t.setAttribute("values", ht(n));
              }
            : null;
        },
        sepia: function (t) {
          return t
            ? function (n) {
                return t.setAttribute(
                  "values",
                  vt(
                    (function (t) {
                      return [
                        0.393 + 0.607 * (t = 1 - t),
                        0.769 - 0.769 * t,
                        0.189 - 0.189 * t,
                        0,
                        0,
                        0.349 - 0.349 * t,
                        0.686 + 0.314 * t,
                        0.168 - 0.168 * t,
                        0,
                        0,
                        0.272 - 0.272 * t,
                        0.534 - 0.534 * t,
                        0.131 + 0.869 * t,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                      ];
                    })(n)
                  )
                );
              }
            : null;
        },
      };
      var rn = ["R", "G", "B"];
      function un(t, n) {
        var e = rn.map(function (e) {
          return t.getElementById(n + "-" + e) || null;
        });
        return -1 !== e.indexOf(null) ? null : e;
      }
      var on = {
          fill: Jt,
          "fill-opacity": $t,
          stroke: Jt,
          "stroke-opacity": $t,
          "stroke-width": Yt,
          "stroke-dashoffset": { f: ht, i: T },
          "stroke-dasharray": Ut,
          opacity: $t,
          transform: function (t, n, r, i) {
            if (
              !(t = (function (t, n) {
                if (!t || "object" !== e(t)) return null;
                var r = !1;
                for (var i in t)
                  t.hasOwnProperty(i) &&
                    (t[i] && t[i].length
                      ? (t[i].forEach(function (t) {
                          t.e && (t.e = n(t.e));
                        }),
                        (r = !0))
                      : delete t[i]);
                return r ? t : null;
              })(t, i))
            )
              return null;
            var u = function (e, i, u) {
              var o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return t[e] ? r(i, t[e], u) : n && n[e] ? n[e] : o;
            };
            return n && n.a && t.o
              ? function (n) {
                  var e = r(n, t.o, qt);
                  return Vt.recomposeSelf(
                    e,
                    u("r", n, T, 0) + e.a,
                    u("k", n, C),
                    u("s", n, C),
                    u("t", n, C)
                  ).toString();
                }
              : function (t) {
                  return Vt.recomposeSelf(
                    u("o", t, Tt, null),
                    u("r", t, T, 0),
                    u("k", t, C),
                    u("s", t, C),
                    u("t", t, C)
                  ).toString();
                };
          },
          "#filter": function (t, n, e, r, i, u, o, a) {
            if (!n.items || !t || !t.length) return null;
            var l = (function (t, n) {
              var e = (t = t.map(function (t) {
                return t && en[t[0]]
                  ? (n.getElementById(t[1]),
                    en[t[0]](n.getElementById(t[1]), t[1], n))
                  : null;
              })).length;
              return function (n) {
                for (var r = 0; r < e; r++) t[r] && t[r](n[r].value);
              };
            })(n.items, a);
            return l
              ? ((t = (function (t, n) {
                  return t.map(function (t) {
                    return (t.e = n(t.e)), t;
                  });
                })(t, r)),
                function (n) {
                  l(e(n, t, nn));
                })
              : null;
          },
          "#line": Gt,
          points: { f: vt, i: G },
          d: zt,
          r: Yt,
          "#size": mt,
          "#radius": pt,
          _: function (t, n) {
            if (Array.isArray(t))
              for (var e = 0; e < t.length; e++) this[t[e]] = n;
            else this[t] = n;
          },
        },
        an = (function (t) {
          !(function (t, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && l(t, n);
          })(o, t);
          var n,
            e,
            i =
              ((n = o),
              (e = f()),
              function () {
                var t,
                  r = a(n);
                if (e) {
                  var i = a(this).constructor;
                  t = Reflect.construct(r, arguments, i);
                } else t = r.apply(this, arguments);
                return c(this, t);
              });
          function o() {
            return r(this, o), i.apply(this, arguments);
          }
          return (
            u(o, null, [
              {
                key: "build",
                value: function (t) {
                  var n = h(a(o), "build", this).call(this, t, on);
                  if (!n) return null;
                  n.el,
                    n.options,
                    (function (t, n, e) {
                      t.play();
                    })(n.player);
                },
              },
            ]),
            o
          );
        })(ct);
      return an.init(), an;
    });
    (function (s, i, o, w, a, b) {
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
    })(
      "7c8cb2ed",
      {
        root: "eJHvujU5TtV1",
        version: "2022-05-04",
        animations: [
          {
            elements: {
              eJHvujU5TtV2: {
                "#radius": [
                  {
                    t: 0,
                    v: { x: 74.285714, y: 74.512189 },
                    e: [0.6, -0.6, 0.735, 0.045],
                  },
                  { t: 750, v: { x: 4.285714, y: 4.29878 } },
                ],
                transform: {
                  data: { s: { x: 1.75, y: 1.744681 } },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: { x: 150, y: 150, type: "corner" },
                        e: [0.6, -0.28, 0.735, 0.045],
                      },
                      { t: 750, v: { x: 142.500005, y: 200, type: "corner" } },
                    ],
                    t: [
                      {
                        t: 0,
                        v: { x: 0, y: 0 },
                        e: [0.6, -0.28, 0.735, 0.045],
                      },
                      { t: 750, v: { x: 0, y: 0 } },
                    ],
                  },
                },
                "fill-opacity": [
                  { t: 0, v: 0.1, e: [0.6, -0.6, 0.735, 0.045] },
                  { t: 750, v: 1 },
                ],
                "stroke-width": [
                  { t: 0, v: 5, e: [0.6, -0.28, 0.735, 0.045] },
                  { t: 750, v: 0 },
                ],
              },
              eJHvujU5TtV3: {
                d: [
                  {
                    t: 0,
                    v: ["M", 200.082348, 30.094325, "L", 99.917652, 269.950591],
                    e: [0.6, -0.28, 0.735, 0.045],
                  },
                  {
                    t: 750,
                    v: [
                      "M",
                      259.121872,
                      142.594328,
                      "L",
                      182.763137,
                      142.594328,
                    ],
                    e: [0.175, 0.885, 0.32, 1.275],
                  },
                ],
                transform: {
                  data: {
                    s: { x: 0.8, y: 0.8 },
                    t: { x: -149.999979, y: -150.022458 },
                  },
                  keys: {
                    o: [
                      { t: 0, v: { x: 149.999984, y: 150, type: "corner" } },
                      { t: 750, v: { x: 157, y: 168.460099, type: "corner" } },
                    ],
                  },
                },
              },
              eJHvujU5TtV4: {
                d: [
                  {
                    t: 0,
                    v: [
                      "M",
                      100,
                      100.164695,
                      "L",
                      0,
                      150.164695,
                      "L",
                      100,
                      200.164695,
                    ],
                  },
                  {
                    t: 750,
                    v: [
                      "M",
                      0.051467,
                      87.494383,
                      "L",
                      0.051467,
                      212.494384,
                      "L",
                      100.051467,
                      212.494384,
                    ],
                  },
                ],
                transform: {
                  data: {
                    s: { x: 0.8, y: 0.8 },
                    t: { x: -50, y: -150.022458 },
                  },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: { x: 69.934122, y: 149.88621, type: "corner" },
                      },
                      { t: 750, v: { x: 80, y: 150.022459, type: "corner" } },
                    ],
                  },
                },
              },
              eJHvujU5TtV5: {
                d: [
                  {
                    t: 0,
                    v: [
                      "M",
                      200.183412,
                      88.135394,
                      "L",
                      300.183412,
                      137.810394,
                      "L",
                      200.183412,
                      188.135394,
                    ],
                  },
                  {
                    t: 750,
                    v: [
                      "M",
                      199.364606,
                      87.499999,
                      "L",
                      324.364606,
                      150.183412,
                      "L",
                      199.364606,
                      212.683412,
                    ],
                  },
                ],
                transform: {
                  data: {
                    s: { x: 0.8, y: 0.8 },
                    t: { x: -252.854957, y: -158.087398 },
                  },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: {
                          x: 232.203115,
                          y: 165.961603,
                          type: "cusp",
                          end: { x: 232.203115, y: 165.961603 },
                        },
                      },
                      {
                        t: 750,
                        v: {
                          x: 220.47,
                          y: 157.207719,
                          type: "cusp",
                          start: { x: 233.529024, y: 157.892909 },
                        },
                      },
                    ],
                    r: [
                      { t: 0, v: 0 },
                      { t: 750, v: -90 },
                    ],
                  },
                },
              },
            },
            s: "MDA1HMzliNDJQODRSOTU5MjgxOTRHDODk4ZjhlNDI1YTU3NTU1MDRjLNDI4NFZNODk5Mjg1VDgzOTQ4KOThmOGU0MjVhQzRkNTE0YzQyTODlZOTQ4NTkyODE5NDg5OGZEDOGVTOTNHNDI1YTUxNGM0Mjg2EODk4YzhjNDI1YTUxNGM0MjgxSOGM5NFU4NTkyTDhlWDgxOTQ4ANTQyNWFDODY4MThjOTM4NTRjKNDJHOTM5MDg1ODU4NFE0MjVhRNTE5ZA|",
          },
        ],
        options: "MDAxOMDhmMzY4N0Y4ODc1UTg2ODgzONjRlMzY4MFI4Mzc1NzgzNkE5IMQ|",
      },
      "__SVGATOR_PLAYER__",
      window
    );
  }, [SVG]);

  useEffect(() => {
    setTimeout(() => {
      setthrottles(false);
    }, 750);
  }, []);

  const throttle = () => {
    if (throttles) return;
    setthrottles(true);
    setSVG(SVG === "logo" ? "reverse" : "logo");

    setTimeout(() => {
      setthrottles(false);
    }, 750);
  };

  return (
    <a href="#Hero" onClick={throttle} className={svgContainer}>
      {SVGs[SVG]}
    </a>
  );
}
