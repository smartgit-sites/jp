function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function _iterableToArrayLimit(e, t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [], r = !0, i = !1, o = undefined;
        try {
            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
        } catch (e) {
            i = !0, o = e
        } finally {
            try {
                r || null == s["return"] || s["return"]()
            } finally {
                if (i) throw o
            }
        }
        return n
    }
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function (e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var t = Object(this), n = t.length >>> 0;
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (var r = arguments[1], i = 0; i < n;) {
            var o = t[i];
            if (e.call(r, o, i, t)) return o;
            i++
        }
        return undefined
    }
}), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function (e, t) {
        function n(e, t) {
            return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
        }

        if (null == this) throw new TypeError('"this" is null or not defined');
        var r = Object(this), i = r.length >>> 0;
        if (0 === i) return !1;
        for (var o = 0 | t, a = Math.max(o >= 0 ? o : i - Math.abs(o), 0); a < i;) {
            if (n(r[a], e)) return !0;
            a++
        }
        return !1
    }
}), Object.keys || (Object.keys = function () {
    "use strict";
    var e = Object.prototype.hasOwnProperty, t = !{toString: null}.propertyIsEnumerable("toString"), n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], r = n.length;
    return function (i) {
        if ("function" != typeof i && ("object" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
        var o, a, s = [];
        for (o in i) e.call(i, o) && s.push(o);
        if (t) for (a = 0; a < r; a++) e.call(i, n[a]) && s.push(n[a]);
        return s
    }
}()), function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length, n = ge.type(e);
        return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return ge.isFunction(t) ? ge.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? ge.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? ge.grep(e, function (e) {
            return se.call(t, e) > -1 !== n
        }) : ke.test(t) ? ge.filter(t, e, n) : (t = ge.filter(t, e), ge.grep(e, function (e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function s(e) {
        var t = {};
        return ge.each(e.match(Be) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function u(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function l(e, t, n, r) {
        var i;
        try {
            e && ge.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && ge.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function d() {
        ne.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), ge.ready()
    }

    function f() {
        this.expando = ge.expando + f.uid++
    }

    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Me.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Re, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = p(n)
            } catch (e) {
            }
            je.set(e, t, n)
        } else n = void 0;
        return n
    }

    function g(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function () {
            return r.cur()
        } : function () {
            return ge.css(e, t, "")
        }, u = s(), c = n && n[3] || (ge.cssNumber[t] ? "" : "px"), l = (ge.cssNumber[t] || "px" !== c && +u) && Oe.exec(ge.css(e, t));
        if (l && l[3] !== c) {
            c = c || l[3], n = n || [], l = +u || 1;
            do {
                o = o || ".5", l /= o, ge.style(e, t, l + c)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
    }

    function A(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = He[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = ge.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), He[r] = i, i)
    }

    function m(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Fe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && $e(r) && (i[o] = A(r))) : "none" !== n && (i[o] = "none", Fe.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? ge.merge([e], n) : n
    }

    function v(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
    }

    function b(e, t, n, r, i) {
        for (var o, a, s, u, c, l, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === ge.type(o)) ge.merge(f, o.nodeType ? [o] : o); else if (Ke.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (Ge.exec(o) || ["", ""])[1].toLowerCase(), u = Ve[s] || Ve._default, a.innerHTML = u[1] + ge.htmlPrefilter(o) + u[2], l = u[0]; l--;) a = a.lastChild;
            ge.merge(f, a.childNodes), a = d.firstChild, a.textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; o = f[p++];) if (r && ge.inArray(o, r) > -1) i && i.push(o); else if (c = ge.contains(o.ownerDocument, o), a = y(d.appendChild(o), "script"), c && v(a), n) for (l = 0; o = a[l++];) We.test(o.type || "") && n.push(o);
        return d
    }

    function w() {
        return !0
    }

    function C() {
        return !1
    }

    function x() {
        try {
            return ne.activeElement
        } catch (e) {
        }
    }

    function I(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) I(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = C; else if (!i) return e;
        return 1 === o && (a = i, i = function (e) {
            return ge().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = ge.guid++)), e.each(function () {
            ge.event.add(this, t, i, r, n)
        })
    }

    function k(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? ge(">tbody", e)[0] || e : e
    }

    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function _(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function T(e, t) {
        var n, r, i, o, a, s, u, c;
        if (1 === t.nodeType) {
            if (Fe.hasData(e) && (o = Fe.access(e), a = Fe.set(t, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (i in c) for (n = 0, r = c[i].length; n < r; n++) ge.event.add(t, i, c[i][n])
            }
            je.hasData(e) && (s = je.access(e), u = ge.extend({}, s), je.set(t, u))
        }
    }

    function S(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function B(e, t, r, i) {
        t = oe.apply([], t);
        var o, a, s, u, c, l, d = 0, f = e.length, p = f - 1, h = t[0], g = ge.isFunction(h);
        if (g || f > 1 && "string" == typeof h && !pe.checkClone && nt.test(h)) return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), B(o, t, r, i)
        });
        if (f && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (s = ge.map(y(o, "script"), E), u = s.length; d < f; d++) c = o, d !== p && (c = ge.clone(c, !0, !0), u && ge.merge(s, y(c, "script"))), r.call(e[d], c, d);
            if (u) for (l = s[s.length - 1].ownerDocument, ge.map(s, _), d = 0; d < u; d++) c = s[d], We.test(c.type || "") && !Fe.access(c, "globalEval") && ge.contains(l, c) && (c.src ? ge._evalUrl && ge._evalUrl(c.src) : n(c.textContent.replace(it, ""), l))
        }
        return e
    }

    function Q(e, t, n) {
        for (var r, i = t ? ge.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ge.cleanData(y(r)), r.parentNode && (n && ge.contains(r.ownerDocument, r) && v(y(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function D(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || st(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || ge.contains(e.ownerDocument, e) || (a = ge.style(e, t)), !pe.pixelMarginRight() && at.test(a) && ot.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function N(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function P(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;) if ((e = ft[n] + t) in pt) return e
    }

    function F(e) {
        var t = ge.cssProps[e];
        return t || (t = ge.cssProps[e] = P(e) || e), t
    }

    function j(e, t, n) {
        var r = Oe.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function M(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += ge.css(e, n + ze[o], !0, i)), r ? ("content" === n && (a -= ge.css(e, "padding" + ze[o], !0, i)), "margin" !== n && (a -= ge.css(e, "border" + ze[o] + "Width", !0, i))) : (a += ge.css(e, "padding" + ze[o], !0, i), "padding" !== n && (a += ge.css(e, "border" + ze[o] + "Width", !0, i)));
        return a
    }

    function R(e, t, n) {
        var r, i = st(e), o = D(e, t, i), a = "border-box" === ge.css(e, "boxSizing", !1, i);
        return at.test(o) ? o : (r = a && (pe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + M(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function L(e, t, n, r, i) {
        return new L.prototype.init(e, t, n, r, i)
    }

    function O() {
        gt && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(O) : e.setTimeout(O, ge.fx.interval), ge.fx.tick())
    }

    function z() {
        return e.setTimeout(function () {
            ht = void 0
        }), ht = ge.now()
    }

    function $(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = ze[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function U(e, t, n) {
        for (var r, i = (G.tweeners[t] || []).concat(G.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function H(e, t, n) {
        var r, i, o, a, s, u, c, l, d = "width" in t || "height" in t, f = this, p = {}, h = e.style, g = e.nodeType && $e(e), A = Fe.get(e, "fxshow");
        n.queue || (a = ge._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, ge.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t) if (i = t[r], At.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !A || void 0 === A[r]) continue;
                g = !0
            }
            p[r] = A && A[r] || ge.style(e, r)
        }
        if ((u = !ge.isEmptyObject(t)) || !ge.isEmptyObject(p)) {
            d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = A && A.display, null == c && (c = Fe.get(e, "display")), l = ge.css(e, "display"), "none" === l && (c ? l = c : (m([e], !0), c = e.style.display || c, l = ge.css(e, "display"), m([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === ge.css(e, "float") && (u || (f.done(function () {
                h.display = c
            }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in p) u || (A ? "hidden" in A && (g = A.hidden) : A = Fe.access(e, "fxshow", {display: c}), o && (A.hidden = !g), g && m([e], !0), f.done(function () {
                g || m([e]), Fe.remove(e, "fxshow");
                for (r in p) ge.style(e, r, p[r])
            })), u = U(g ? A[r] : 0, r, f), r in A || (A[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function q(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = ge.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ge.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function G(e, t, n) {
        var r, i, o = 0, a = G.prefilters.length, s = ge.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = ht || z(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; a < u; a++) c.tweens[a].run(o);
            return s.notifyWith(e, [c, o, n]), o < 1 && u ? n : (u || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        }, c = s.promise({
            elem: e, props: ge.extend({}, t), opts: ge.extend(!0, {specialEasing: {}, easing: ge.easing._default}, n), originalProperties: t, originalOptions: n, startTime: ht || z(), duration: n.duration, tweens: [], createTween: function (t, n) {
                var r = ge.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r
            }, stop: function (t) {
                var n = 0, r = t ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) c.tweens[n].run(1);
                return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
            }
        }), l = c.props;
        for (q(l, c.opts.specialEasing); o < a; o++) if (r = G.prefilters[o].call(c, e, l, c.opts)) return ge.isFunction(r.stop) && (ge._queueHooks(c.elem, c.opts.queue).stop = ge.proxy(r.stop, r)), r;
        return ge.map(l, U, c), ge.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), ge.fx.timer(ge.extend(u, {elem: e, anim: c, queue: c.opts.queue})), c
    }

    function W(e) {
        return (e.match(Be) || []).join(" ")
    }

    function V(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function K(e, t, n, r) {
        var i;
        if (Array.isArray(t)) ge.each(t, function (t, i) {
            n || _t.test(e) ? r(e, i) : K(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== ge.type(t)) r(e, t); else for (i in t) K(e + "[" + i + "]", t[i], n, r)
    }

    function Y(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(Be) || [];
            if (ge.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function J(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ge.each(e[s] || [], function (e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), u
        }

        var o = {}, a = e === Lt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function X(e, t) {
        var n, r, i = ge.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ge.extend(!0, e, r), e
    }

    function Z(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function ee(e, t, n, r) {
        var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
        if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = c[u + " " + o] || c["* " + o])) for (i in c) if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], l.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    var te = [], ne = e.document, re = Object.getPrototypeOf, ie = te.slice, oe = te.concat, ae = te.push, se = te.indexOf, ue = {}, ce = ue.toString, le = ue.hasOwnProperty, de = le.toString, fe = de.call(Object), pe = {}, he = "3.2.1", ge = function (e, t) {
        return new ge.fn.init(e, t)
    }, Ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, me = /^-ms-/, ye = /-([a-z])/g, ve = function (e, t) {
        return t.toUpperCase()
    };
    ge.fn = ge.prototype = {
        jquery: he, constructor: ge, length: 0, toArray: function () {
            return ie.call(this)
        }, get: function (e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = ge.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return ge.each(this, e)
        }, map: function (e) {
            return this.pushStack(ge.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: ae, sort: te.sort, splice: te.splice
    }, ge.extend = ge.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ge.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], r = e[t], a !== r && (c && r && (ge.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && ge.isPlainObject(n) ? n : {}, a[t] = ge.extend(c, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, ge.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === ge.type(e)
        }, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = ge.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== ce.call(e) || (t = re(e)) && ("function" != typeof (n = le.call(t, "constructor") && t.constructor) || de.call(n) !== fe))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[ce.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            n(e)
        }, camelCase: function (e) {
            return e.replace(me, "ms-").replace(ye, ve)
        }, each: function (e, t) {
            var n, i = 0;
            if (r(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(Ae, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var i, o, a = 0, s = [];
            if (r(e)) for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o); else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return oe.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ge.isFunction(e)) return r = ie.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(ie.call(arguments)))
            }, i.guid = e.guid = e.guid || ge.guid++, i
        }, now: Date.now, support: pe
    }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, l, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : z) !== N && D(t), t = t || N, F)) {
                if (11 !== h && (u = me.exec(e))) if (i = u[1]) {
                    if (9 === h) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (f && (a = f.getElementById(i)) && L(t, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return X.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && C.getElementsByClassName && t.getElementsByClassName) return X.apply(n, t.getElementsByClassName(i)), n
                }
                if (C.qsa && !G[e + " "] && (!j || !j.test(e))) {
                    if (1 !== h) f = t, l = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, Ce) : t.setAttribute("id", s = O), c = E(e), o = c.length; o--;) c[o] = "#" + s + " " + p(c[o]);
                        l = c.join(","), f = ye.test(e) && d(t.parentNode) || t
                    }
                    if (l) try {
                        return X.apply(n, f.querySelectorAll(l)), n
                    } catch (e) {
                    } finally {
                        s === O && t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[O] = !0, e
        }

        function i(e) {
            var t = N.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = U++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var c, l, d, f = [$, s];
                if (u) {
                    for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || a) if (d = t[O] || (t[O] = {}), l = d[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((c = l[o]) && c[0] === $ && c[1] === s) return f[2] = c[2];
                    if (l[o] = f, f[2] = e(t, n, u)) return !0
                }
                return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function A(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
            return a
        }

        function y(e, t, n, i, o, a) {
            return i && !i[O] && (i = y(i)), o && !o[O] && (o = y(o, a)), r(function (r, a, s, u) {
                var c, l, d, f = [], p = [], h = a.length, g = r || A(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? g : m(g, f, e, s, u), v = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, v, s, u), i) for (c = m(v, p), i(c, [], s, u), l = c.length; l--;) (d = c[l]) && (v[p[l]] = !(y[p[l]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], l = v.length; l--;) (d = v[l]) && c.push(y[l] = d);
                            o(null, v = [], c, u)
                        }
                        for (l = v.length; l--;) (d = v[l]) && (c = o ? ee(r, d) : f[l]) > -1 && (r[c] = !(a[c] = d))
                    }
                } else v = m(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : X.apply(a, v)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = h(function (e) {
                return e === t
            }, a, !0), c = h(function (e) {
                return ee(t, e) > -1
            }, a, !0), l = [function (e, n, r) {
                var i = !o && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                return t = null, i
            }]; s < i; s++) if (n = x.relative[e[s].type]) l = [h(g(l), n)]; else {
                if (n = x.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                    for (r = ++s; r < i && !x.relative[e[r].type]; r++) ;
                    return y(s > 1 && g(l), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && p(e))
                }
                l.push(n)
            }
            return g(l)
        }

        function b(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, c) {
                var l, d, f, p = 0, h = "0", g = r && [], A = [], y = S, v = r || o && x.find.TAG("*", c), b = $ += null == y ? 1 : Math.random() || .1, w = v.length;
                for (c && (S = a === N || a || c); h !== w && null != (l = v[h]); h++) {
                    if (o && l) {
                        for (d = 0, a || l.ownerDocument === N || (D(l), s = !F); f = e[d++];) if (f(l, a || N, s)) {
                            u.push(l);
                            break
                        }
                        c && ($ = b)
                    }
                    i && ((l = !f && l) && p--, r && g.push(l))
                }
                if (p += h, i && h !== p) {
                    for (d = 0; f = n[d++];) f(g, A, a, s);
                    if (r) {
                        if (p > 0) for (; h--;) g[h] || A[h] || (A[h] = Y.call(u));
                        A = m(A)
                    }
                    X.apply(u, A), c && !r && A.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                }
                return c && ($ = b, S = y), g
            };
            return i ? r(a) : a
        }

        var w, C, x, I, k, E, _, T, S, B, Q, D, N, P, F, j, M, R, L, O = "sizzle" + 1 * new Date, z = e.document, $ = 0, U = 0, H = n(), q = n(), G = n(), W = function (e, t) {
                return e === t && (Q = !0), 0
            }, V = {}.hasOwnProperty, K = [], Y = K.pop, J = K.push, X = K.push, Z = K.slice, ee = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(oe), fe = new RegExp("^" + re + "$"),
            pe = {ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re + "|[*])"), ATTR: new RegExp("^" + ie), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")}, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, Ae = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), be = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Ce = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, xe = function () {
                D()
            }, Ie = h(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            X.apply(K = Z.call(z.childNodes), z.childNodes), K[z.childNodes.length].nodeType
        } catch (e) {
            X = {
                apply: K.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }
        C = t.support = {}, k = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : z;
            return r !== N && 9 === r.nodeType && r.documentElement ? (N = r, P = N.documentElement, F = !k(N), z !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), C.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = i(function (e) {
                return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = Ae.test(N.getElementsByClassName), C.getById = i(function (e) {
                return P.appendChild(e).id = O, !N.getElementsByName || !N.getElementsByName(O).length
            }), C.getById ? (x.filter.ID = function (e) {
                var t = e.replace(ve, be);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, x.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (x.filter.ID = function (e) {
                var t = e.replace(ve, be);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, x.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), x.find.TAG = C.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, x.find.CLASS = C.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && F) return t.getElementsByClassName(e)
            }, M = [], j = [], (C.qsa = Ae.test(N.querySelectorAll)) && (i(function (e) {
                P.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + O + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || j.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = N.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (C.matchesSelector = Ae.test(R = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function (e) {
                C.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), M.push("!=", oe)
            }), j = j.length && new RegExp(j.join("|")), M = M.length && new RegExp(M.join("|")), t = Ae.test(P.compareDocumentPosition), L = t || Ae.test(P.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, W = t ? function (e, t) {
                if (e === t) return Q = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === z && L(z, e) ? -1 : t === N || t.ownerDocument === z && L(z, t) ? 1 : B ? ee(B, e) - ee(B, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return Q = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                if (!i || !o) return e === N ? -1 : t === N ? 1 : i ? -1 : o ? 1 : B ? ee(B, e) - ee(B, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === z ? -1 : u[r] === z ? 1 : 0
            }, N) : N
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== N && D(e), n = n.replace(le, "='$1']"), C.matchesSelector && F && !G[n + " "] && (!M || !M.test(n)) && (!j || !j.test(n))) try {
                var r = R.call(e, n);
                if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return t(n, N, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== N && D(e), L(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== N && D(e);
            var n = x.attrHandle[t.toLowerCase()], r = n && V.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
            return void 0 !== r ? r : C.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function (e) {
            return (e + "").replace(we, Ce)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (Q = !C.detectDuplicates, B = !C.sortStable && e.slice(0), e.sort(W), Q) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return B = null, e
        }, I = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += I(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += I(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50, createPseudo: r, match: pe, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ve, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            }, filter: {
                TAG: function (e) {
                    var t = e.replace(ve, be).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = H[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && H(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "",
                            "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var c, l, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling", A = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !u && !s, v = !1;
                        if (A) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? A.firstChild : A.lastChild], a && y) {
                                for (f = A, d = f[O] || (f[O] = {}), l = d[f.uniqueID] || (d[f.uniqueID] = {}), c = l[e] || [], p = c[0] === $ && c[1], v = p && c[2], f = p && A.childNodes[p]; f = ++p && f && f[g] || (v = p = 0) || h.pop();) if (1 === f.nodeType && ++v && f === t) {
                                    l[e] = [$, p, v];
                                    break
                                }
                            } else if (y && (f = t, d = f[O] || (f[O] = {}), l = d[f.uniqueID] || (d[f.uniqueID] = {}), c = l[e] || [], p = c[0] === $ && c[1], v = p), !1 === v) for (; (f = ++p && f && f[g] || (v = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++v || (y && (d = f[O] || (f[O] = {}), l = d[f.uniqueID] || (d[f.uniqueID] = {}), l[e] = [$, v]), f !== t));) ;
                            return (v -= i) === r || v % r == 0 && v / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[O] ? o(n) : o.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            }, pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = _(e.replace(se, "$1"));
                    return i[O] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(ve, be), function (t) {
                        return (t.textContent || t.innerText || I(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, be).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === P
                }, focus: function (e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: c(!1), disabled: c(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !x.pseudos.empty(e)
                }, header: function (e) {
                    return ge.test(e.nodeName)
                }, input: function (e) {
                    return he.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (w in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[w] = s(w);
        for (w in {submit: !0, reset: !0}) x.pseudos[w] = u(w);
        return f.prototype = x.filters = x.pseudos, x.setFilters = new f, E = t.tokenize = function (e, n) {
            var r, i, o, a, s, u, c, l = q[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (s = e, u = [], c = x.preFilter; s;) {
                r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({value: r, type: i[0].replace(se, " ")}), s = s.slice(r.length));
                for (a in x.filter) !(i = pe[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({value: r, type: a, matches: i}), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : q(e, u).slice(0)
        }, _ = t.compile = function (e, t) {
            var n, r = [], i = [], o = G[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = v(t[n]), o[O] ? r.push(o) : i.push(o);
                o = G(e, b(i, r)), o.selector = e
            }
            return o
        }, T = t.select = function (e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e, l = !r && E(e = c.selector || e);
            if (n = n || [], 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && F && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(ve, be), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);) if ((u = x.find[s]) && (r = u(a.matches[0].replace(ve, be), ye.test(o[0].type) && d(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && p(o))) return X.apply(n, r), n;
                    break
                }
            }
            return (c || _(e, l))(r, t, !F, n, !t || ye.test(e) && d(t.parentNode) || t), n
        }, C.sortStable = O.split("").sort(W).join("") === O, C.detectDuplicates = !!Q, D(), C.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), C.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ge.find = be, ge.expr = be.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = be.uniqueSort, ge.text = be.getText, ge.isXMLDoc = be.isXML, ge.contains = be.contains, ge.escapeSelector = be.escape;
    var we = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && ge(e).is(n)) break;
            r.push(e)
        }
        return r
    }, Ce = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, xe = ge.expr.match.needsContext, Ie = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, ke = /^.[^:#\[\.,]*$/;
    ge.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ge.find.matchesSelector(r, e) ? [r] : [] : ge.find.matches(e, ge.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, ge.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(ge(e).filter(function () {
                for (t = 0; t < r; t++) if (ge.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) ge.find(e, i[t], n);
            return r > 1 ? ge.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        }, is: function (e) {
            return !!o(this, "string" == typeof e && xe.test(e) ? ge(e) : e || [], !1).length
        }
    });
    var Ee, _e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ge.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Ee, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : _e.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Ie.test(r[1]) && ge.isPlainObject(t)) for (r in t) ge.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = ne.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : ge.makeArray(e, this)
    }).prototype = ge.fn, Ee = ge(ne);
    var Te = /^(?:parents|prev(?:Until|All))/, Se = {children: !0, contents: !0, next: !0, prev: !0};
    ge.fn.extend({
        has: function (e) {
            var t = ge(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (ge.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && ge(e);
            if (!xe.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? se.call(ge(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ge.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return we(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return we(e, "parentNode", n)
        }, next: function (e) {
            return a(e, "nextSibling")
        }, prev: function (e) {
            return a(e, "previousSibling")
        }, nextAll: function (e) {
            return we(e, "nextSibling")
        }, prevAll: function (e) {
            return we(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return we(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return we(e, "previousSibling", n)
        }, siblings: function (e) {
            return Ce((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Ce(e.firstChild)
        }, contents: function (e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), ge.merge([], e.childNodes))
        }
    }, function (e, t) {
        ge.fn[e] = function (n, r) {
            var i = ge.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ge.filter(r, i)), this.length > 1 && (Se[e] || ge.uniqueSort(i), Te.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var Be = /[^\x20\t\r\n\f]+/g;
    ge.Callbacks = function (e) {
        e = "string" == typeof e ? s(e) : ge.extend({}, e);
        var t, n, r, i, o = [], a = [], u = -1, c = function () {
            for (i = i || e.once, r = t = !0; a.length; u = -1) for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, l = {
            add: function () {
                return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
                    ge.each(n, function (n, r) {
                        ge.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== ge.type(r) && t(r)
                    })
                }(arguments), n && !t && c()), this
            }, remove: function () {
                return ge.each(arguments, function (e, t) {
                    for (var n; (n = ge.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                }), this
            }, has: function (e) {
                return e ? ge.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return l
    }, ge.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2], ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]], r = "pending", i = {
                state: function () {
                    return r
                }, always: function () {
                    return o.done(arguments).fail(arguments), this
                }, "catch": function (e) {
                    return i.then(null, e)
                }, pipe: function () {
                    var e = arguments;
                    return ge.Deferred(function (t) {
                        ge.each(n, function (n, r) {
                            var i = ge.isFunction(e[r[4]]) && e[r[4]];
                            o[r[1]](function () {
                                var e = i && i.apply(this, arguments);
                                e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, then: function (t, r, i) {
                    function o(t, n, r, i) {
                        return function () {
                            var s = this, l = arguments, d = function () {
                                var e, d;
                                if (!(t < a)) {
                                    if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    d = e && ("object" == typeof e || "function" == typeof e) && e.then, ge.isFunction(d) ? i ? d.call(e, o(a, n, u, i), o(a, n, c, i)) : (a++, d.call(e, o(a, n, u, i), o(a, n, c, i), o(a, n, u, n.notifyWith))) : (r !== u && (s = void 0, l = [e]), (i || n.resolveWith)(s, l))
                                }
                            }, f = i ? d : function () {
                                try {
                                    d()
                                } catch (e) {
                                    ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= a && (r !== c && (s = void 0, l = [e]), n.rejectWith(s, l))
                                }
                            };
                            t ? f() : (ge.Deferred.getStackHook && (f.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(f))
                        }
                    }

                    var a = 0;
                    return ge.Deferred(function (e) {
                        n[0][3].add(o(0, e, ge.isFunction(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, ge.isFunction(t) ? t : u)), n[2][3].add(o(0, e, ge.isFunction(r) ? r : c))
                    }).promise()
                }, promise: function (e) {
                    return null != e ? ge.extend(e, i) : i
                }
            }, o = {};
            return ge.each(n, function (e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = ie.call(arguments), o = ge.Deferred(), a = function (e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(r, i)
                }
            };
            if (t <= 1 && (l(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || ge.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) l(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ge.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Qe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, ge.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var De = ge.Deferred();
    ge.fn.ready = function (e) {
        return De.then(e)["catch"](function (e) {
            ge.readyException(e)
        }), this
    }, ge.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, !0 !== e && --ge.readyWait > 0 || De.resolveWith(ne, [ge]))
        }
    }), ge.ready.then = De.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ge.ready) : (ne.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var Ne = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, c = null == n;
        if ("object" === ge.type(n)) {
            i = !0;
            for (s in n) Ne(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, ge.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
            return c.call(ge(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
    }, Pe = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    f.uid = 1, f.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Pe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {value: t, configurable: !0}))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[ge.camelCase(t)] = n; else for (r in t) i[ge.camelCase(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in r ? [t] : t.match(Be) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }
                (void 0 === t || ge.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !ge.isEmptyObject(t)
        }
    };
    var Fe = new f, je = new f, Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Re = /[A-Z]/g;
    ge.extend({
        hasData: function (e) {
            return je.hasData(e) || Fe.hasData(e)
        }, data: function (e, t, n) {
            return je.access(e, t, n)
        }, removeData: function (e, t) {
            je.remove(e, t)
        }, _data: function (e, t, n) {
            return Fe.access(e, t, n)
        }, _removeData: function (e, t) {
            Fe.remove(e, t)
        }
    }), ge.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = je.get(o), 1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ge.camelCase(r.slice(5)), h(o, r, i[r])));
                    Fe.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                je.set(this, e)
            }) : Ne(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = je.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n
                } else this.each(function () {
                    je.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                je.remove(this, e)
            })
        }
    }), ge.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Fe.get(e, t), n && (!r || Array.isArray(n) ? r = Fe.access(e, t, ge.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = ge.queue(e, t), r = n.length, i = n.shift(), o = ge._queueHooks(e, t), a = function () {
                ge.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Fe.get(e, n) || Fe.access(e, n, {
                empty: ge.Callbacks("once memory").add(function () {
                    Fe.remove(e, [t + "queue", n])
                })
            })
        }
    }), ge.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = ge.queue(this, e, t);
                ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                ge.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = ge.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Fe.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Oe = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"), ze = ["Top", "Right", "Bottom", "Left"], $e = function (e, t) {
        return e = t || e, "none" === e.style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
    }, Ue = function (e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    }, He = {};
    ge.fn.extend({
        show: function () {
            return m(this, !0)
        }, hide: function () {
            return m(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                $e(this) ? ge(this).show() : ge(this).hide()
            })
        }
    });
    var qe = /^(?:checkbox|radio)$/i, Ge = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, We = /^$|\/(?:java|ecma)script/i, Ve = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Ke = /<|&#?\w+;/;
    !function () {
        var e = ne.createDocumentFragment(), t = e.appendChild(ne.createElement("div")), n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = ne.documentElement, Je = /^key/, Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ze = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
        global: {}, add: function (e, t, n, r, i) {
            var o, a, s, u, c, l, d, f, p, h, g, A = Fe.get(e);
            if (A) for (n.handler && (o = n, n = o.handler, i = o.selector), i && ge.find.matchesSelector(Ye, i), n.guid || (n.guid = ge.guid++), (u = A.events) || (u = A.events = {}), (a = A.handle) || (a = A.handle = function (t) {
                return void 0 !== ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(Be) || [""], c = t.length; c--;) s = Ze.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (d = ge.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = ge.event.special[p] || {}, l = ge.extend({type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ge.expr.match.needsContext.test(i), namespace: h.join(".")}, o), (f = u[p]) || (f = u[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, l) : f.push(l), ge.event.global[p] = !0)
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, c, l, d, f, p, h, g, A = Fe.hasData(e) && Fe.get(e);
            if (A && (u = A.events)) {
                for (t = (t || "").match(Be) || [""], c = t.length; c--;) if (s = Ze.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (d = ge.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) l = f[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(o, 1), l.selector && f.delegateCount--, d.remove && d.remove.call(e, l));
                    a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, A.handle) || ge.removeEvent(e, p, A.handle), delete u[p])
                } else for (p in u) ge.event.remove(e, p + t[c], n, r, !0);
                ge.isEmptyObject(u) && Fe.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = ge.event.fix(e), u = new Array(arguments.length), c = (Fe.get(this, "events") || {})[s.type] || [], l = ge.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                for (a = ge.event.handlers.call(this, s, c), t = 0; (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, c = e.target;
            if (u && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? ge(i, this).index(c) > -1 : ge.find(i, this, null, [c]).length), a[i] && o.push(r);
                o.length && s.push({elem: c, handlers: o})
            }
            return c = this, u < t.length && s.push({elem: c, handlers: t.slice(u)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(ge.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: ge.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[ge.expando] ? e : new ge.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== x() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === x() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return i(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ge.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ge.Event = function (e, t) {
        return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void (this[ge.expando] = !0)) : new ge.Event(e, t)
    }, ge.Event.prototype = {
        constructor: ge.Event, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C, isSimulated: !1, preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        }, stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        }, stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ge.each({
        altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) {
            var t = e.button;
            return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ge.event.addProp), ge.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (e, t) {
        ge.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || ge.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ge.fn.extend({
        on: function (e, t, n, r) {
            return I(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return I(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ge(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), this.each(function () {
                ge.event.remove(this, e, n, t)
            })
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, tt = /<script|<style|<link/i, nt = /checked\s*(?:[^=]|=\s*.checked.)/i, rt = /^true\/(.*)/, it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
        htmlPrefilter: function (e) {
            return e.replace(et, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = ge.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e))) for (a = y(s), o = y(e), r = 0, i = o.length; r < i; r++) S(o[r], a[r]);
            if (t) if (n) for (o = o || y(e), a = a || y(s), r = 0, i = o.length; r < i; r++) T(o[r], a[r]); else T(e, s);
            return a = y(s, "script"), a.length > 0 && v(a, !u && y(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, r, i = ge.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Pe(n)) {
                if (t = n[Fe.expando]) {
                    if (t.events) for (r in t.events) i[r] ? ge.event.remove(n, r) : ge.removeEvent(n, r, t.handle);
                    n[Fe.expando] = void 0
                }
                n[je.expando] && (n[je.expando] = void 0)
            }
        }
    }), ge.fn.extend({
        detach: function (e) {
            return Q(this, e, !0)
        }, remove: function (e) {
            return Q(this, e)
        }, text: function (e) {
            return Ne(this, function (e) {
                return void 0 === e ? ge.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return B(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    k(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return B(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return B(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return B(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ge.cleanData(y(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ge.clone(this, e, t)
            })
        }, html: function (e) {
            return Ne(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !tt.test(e) && !Ve[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ge.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return B(this, arguments, function (t) {
                var n = this.parentNode;
                ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ge.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        ge.fn[e] = function (e) {
            for (var n, r = [], i = ge(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), ge(i[a])[t](n), ae.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ot = /^margin/, at = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"), st = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    };
    !function () {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Ye.removeChild(a), s = null
            }
        }

        var n, r, i, o, a = ne.createElement("div"), s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ge.extend(pe, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return t(), r
            }, pixelMarginRight: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var ut = /^(none|table(?!-c[ea]).+)/, ct = /^--/, lt = {position: "absolute", visibility: "hidden", display: "block"}, dt = {letterSpacing: "0", fontWeight: "400"}, ft = ["Webkit", "Moz", "ms"], pt = ne.createElement("div").style;
    ge.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = D(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        }, cssNumber: {animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ge.camelCase(t), u = ct.test(t), c = e.style;
                return u || (t = F(s)), a = ge.cssHooks[t] || ge.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t] : (o = typeof n, "string" === o && (i = Oe.exec(n)) && i[1] && (n = g(e, t, i), o = "number"), void (null != n && n === n && ("number" === o && (n += i && i[3] || (ge.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))))
            }
        }, css: function (e, t, n, r) {
            var i, o, a, s = ge.camelCase(t);
            return ct.test(t) || (t = F(s)), a = ge.cssHooks[t] || ge.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = D(e, t, r)), "normal" === i && t in dt && (i = dt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), ge.each(["height", "width"], function (e, t) {
        ge.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ut.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, r) : Ue(e, lt, function () {
                    return R(e, t, r)
                })
            }, set: function (e, n, r) {
                var i, o = r && st(e), a = r && M(e, t, r, "border-box" === ge.css(e, "boxSizing", !1, o), o);
                return a && (i = Oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ge.css(e, t)), j(e, n, a)
            }
        }
    }), ge.cssHooks.marginLeft = N(pe.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ge.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ge.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ze[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, ot.test(e) || (ge.cssHooks[e + t].set = j)
    }), ge.fn.extend({
        css: function (e, t) {
            return Ne(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = st(e), i = t.length; a < i; a++) o[t[a]] = ge.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), ge.Tween = L, L.prototype = {
        constructor: L, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ge.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = L.propHooks[this.prop];
            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = L.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ge.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, ge.fx = L.prototype.init, ge.fx.step = {}
    ;var ht, gt, At = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;
    ge.Animation = ge.extend(G, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return g(n.elem, e, Oe.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Be);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(t)
        }, prefilters: [H], prefilter: function (e, t) {
            t ? G.prefilters.unshift(e) : G.prefilters.push(e)
        }
    }), ge.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ge.extend({}, e) : {complete: n || !n && t || ge.isFunction(e) && e, duration: e, easing: n && t || t && !ge.isFunction(t) && t};
        return ge.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ge.fx.speeds ? r.duration = ge.fx.speeds[r.duration] : r.duration = ge.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ge.isFunction(r.old) && r.old.call(this), r.queue && ge.dequeue(this, r.queue)
        }, r
    }, ge.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter($e).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = ge.isEmptyObject(e), o = ge.speed(t, n, r), a = function () {
                var t = G(this, ge.extend({}, e), o);
                (i || Fe.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = ge.timers, a = Fe.get(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && mt.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || ge.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Fe.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ge.timers, a = r ? r.length : 0;
                for (n.finish = !0, ge.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ge.each(["toggle", "show", "hide"], function (e, t) {
        var n = ge.fn[t];
        ge.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
        }
    }), ge.each({slideDown: $("show"), slideUp: $("hide"), slideToggle: $("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        ge.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ge.timers = [], ge.fx.tick = function () {
        var e, t = 0, n = ge.timers;
        for (ht = ge.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ge.fx.stop(), ht = void 0
    }, ge.fx.timer = function (e) {
        ge.timers.push(e), ge.fx.start()
    }, ge.fx.interval = 13, ge.fx.start = function () {
        gt || (gt = !0, O())
    }, ge.fx.stop = function () {
        gt = null
    }, ge.fx.speeds = {slow: 600, fast: 200, _default: 400}, ge.fn.delay = function (t, n) {
        return t = ge.fx ? ge.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = ne.createElement("input"), t = ne.createElement("select"), n = t.appendChild(ne.createElement("option"));
        e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
    }();
    var yt, vt = ge.expr.attrHandle;
    ge.fn.extend({
        attr: function (e, t) {
            return Ne(this, ge.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                ge.removeAttr(this, e)
            })
        }
    }), ge.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (i = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ge.find.attr(e, t), null == r ? void 0 : r))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!pe.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(Be);
            if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
        }
    }), yt = {
        set: function (e, t, n) {
            return !1 === t ? ge.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = vt[t] || ge.find.attr;
        vt[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = vt[a], vt[a] = i, i = null != n(e, t, r) ? a : null, vt[a] = o), i
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
    ge.fn.extend({
        prop: function (e, t) {
            return Ne(this, ge.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[ge.propFix[e] || e]
            })
        }
    }), ge.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, i = ge.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ge.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), pe.optSelected || (ge.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ge.propFix[this.toLowerCase()] = this
    }), ge.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (ge.isFunction(e)) return this.each(function (t) {
                ge(this).addClass(e.call(this, t, V(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(Be) || []; n = this[u++];) if (i = V(n), r = 1 === n.nodeType && " " + W(i) + " ") {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                s = W(r), i !== s && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (ge.isFunction(e)) return this.each(function (t) {
                ge(this).removeClass(e.call(this, t, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Be) || []; n = this[u++];) if (i = V(n), r = 1 === n.nodeType && " " + W(i) + " ") {
                for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                s = W(r), i !== s && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function (n) {
                ge(this).toggleClass(e.call(this, n, V(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n) for (r = 0, i = ge(this), o = e.match(Be) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || (t = V(this), t && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + W(V(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    ge.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ge.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, ge(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = ge.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ge.valHooks[i.type] || ge.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)) : void 0
        }
    }), ge.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ge.find.attr(e, "value");
                    return null != t ? t : W(ge.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, o = e.options, a = e.selectedIndex, s = "select-one" === e.type, u = s ? null : [], c = s ? a + 1 : o.length;
                    for (r = a < 0 ? c : s ? a : 0; r < c; r++) if (n = o[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                        if (t = ge(n).val(), s) return t;
                        u.push(t)
                    }
                    return u
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = ge.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ge.inArray(ge.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ge.each(["radio", "checkbox"], function () {
        ge.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
            }
        }, pe.checkOn || (ge.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
        trigger: function (t, n, r, i) {
            var o, a, s, u, c, l, d, f = [r || ne], p = le.call(t, "type") ? t.type : t, h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(p + ge.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[ge.expando] ? t : new ge.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ge.makeArray(n, [t]), d = ge.event.special[p] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !ge.isWindow(r)) {
                    for (u = d.delegateType || p, xt.test(u + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (r.ownerDocument || ne) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : d.bindType || p, l = (Fe.get(a, "events") || {})[t.type] && Fe.get(a, "handle"), l && l.apply(a, n), (l = c && a[c]) && l.apply && Pe(a) && (t.result = l.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Pe(r) || c && ge.isFunction(r[p]) && !ge.isWindow(r) && (s = r[c], s && (r[c] = null), ge.event.triggered = p, r[p](), ge.event.triggered = void 0, s && (r[c] = s)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = ge.extend(new ge.Event, n, {type: e, isSimulated: !0});
            ge.event.trigger(r, null, t)
        }
    }), ge.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                ge.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return ge.event.trigger(e, t, n, !0)
        }
    }), ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        ge.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ge.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || ge.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            ge.event.simulate(t, e.target, ge.event.fix(e))
        };
        ge.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = Fe.access(r, t);
                i || r.addEventListener(e, n, !0), Fe.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = Fe.access(r, t) - 1;
                i ? Fe.access(r, t, i) : (r.removeEventListener(e, n, !0), Fe.remove(r, t))
            }
        }
    });
    var It = e.location, kt = ge.now(), Et = /\?/;
    ge.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + t), n
    };
    var _t = /\[\]$/, Tt = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, Bt = /^(?:input|select|textarea|keygen)/i;
    ge.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = ge.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) K(n, e[n], t, i);
        return r.join("&")
    }, ge.fn.extend({
        serialize: function () {
            return ge.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ge.prop(this, "elements");
                return e ? ge.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ge(this).is(":disabled") && Bt.test(this.nodeName) && !St.test(e) && (this.checked || !qe.test(e))
            }).map(function (e, t) {
                var n = ge(this).val();
                return null == n ? null : Array.isArray(n) ? ge.map(n, function (e) {
                    return {name: t.name, value: e.replace(Tt, "\r\n")}
                }) : {name: t.name, value: n.replace(Tt, "\r\n")}
            }).get()
        }
    });
    var Qt = /%20/g, Dt = /#.*$/, Nt = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, jt = /^(?:GET|HEAD)$/, Mt = /^\/\//, Rt = {}, Lt = {}, Ot = "*/".concat("*"), zt = ne.createElement("a");
    zt.href = It.href, ge.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: It.href, type: "GET", isLocal: Ft.test(It.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Ot, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": ge.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (e, t) {
            return t ? X(X(e, ge.ajaxSettings), t) : X(ge.ajaxSettings, e)
        }, ajaxPrefilter: Y(Rt), ajaxTransport: Y(Lt), ajax: function (t, n) {
            function r(t, n, r, s) {
                var c, f, p, b, w, C = n;
                l || (l = !0, u && e.clearTimeout(u), i = void 0, a = s || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (b = Z(h, x, r)), b = ee(h, b, x, c), c ? (h.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ge.lastModified[o] = w), (w = x.getResponseHeader("etag")) && (ge.etag[o] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, f = b.data, p = b.error, c = !p)) : (p = C, !t && C || (C = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || C) + "", c ? m.resolveWith(g, [f, C, x]) : m.rejectWith(g, [x, C, p]), x.statusCode(v), v = void 0, d && A.trigger(c ? "ajaxSuccess" : "ajaxError", [x, h, c ? f : p]), y.fireWith(g, [x, C]), d && (A.trigger("ajaxComplete", [x, h]), --ge.active || ge.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, c, l, d, f, p, h = ge.ajaxSetup({}, n), g = h.context || h, A = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event, m = ge.Deferred(), y = ge.Callbacks("once memory"), v = h.statusCode || {}, b = {}, w = {}, C = "canceled", x = {
                readyState: 0, getResponseHeader: function (e) {
                    var t;
                    if (l) {
                        if (!s) for (s = {}; t = Pt.exec(a);) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                }, getAllResponseHeaders: function () {
                    return l ? a : null
                }, setRequestHeader: function (e, t) {
                    return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                }, overrideMimeType: function (e) {
                    return null == l && (h.mimeType = e), this
                }, statusCode: function (e) {
                    var t;
                    if (e) if (l) x.always(e[x.status]); else for (t in e) v[t] = [v[t], e[t]];
                    return this
                }, abort: function (e) {
                    var t = e || C;
                    return i && i.abort(t), r(0, t), this
                }
            };
            if (m.promise(x), h.url = ((t || h.url || It.href) + "").replace(Mt, It.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Be) || [""], null == h.crossDomain) {
                c = ne.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = zt.protocol + "//" + zt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = ge.param(h.data, h.traditional)), J(Rt, h, n, x), l) return x;
            d = ge.event && h.global, d && 0 == ge.active++ && ge.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !jt.test(h.type), o = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Qt, "+")) : (p = h.url.slice(o.length), h.data && (o += (Et.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Nt, "$1"), p = (Et.test(o) ? "&" : "?") + "_=" + kt++ + p), h.url = o + p), h.ifModified && (ge.lastModified[o] && x.setRequestHeader("If-Modified-Since", ge.lastModified[o]), ge.etag[o] && x.setRequestHeader("If-None-Match", ge.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : h.accepts["*"]);
            for (f in h.headers) x.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, x, h) || l)) return x.abort();
            if (C = "abort", y.add(h.complete), x.done(h.success), x.fail(h.error), i = J(Lt, h, n, x)) {
                if (x.readyState = 1, d && A.trigger("ajaxSend", [x, h]), l) return x;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    l = !1, i.send(b, r)
                } catch (e) {
                    if (l) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return x
        }, getJSON: function (e, t, n) {
            return ge.get(e, t, n, "json")
        }, getScript: function (e, t) {
            return ge.get(e, void 0, t, "script")
        }
    }), ge.each(["get", "post"], function (e, t) {
        ge[t] = function (e, n, r, i) {
            return ge.isFunction(n) && (i = i || r, r = n, n = void 0), ge.ajax(ge.extend({url: e, type: t, dataType: i, data: n, success: r}, ge.isPlainObject(e) && e))
        }
    }), ge._evalUrl = function (e) {
        return ge.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, ge.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return ge.isFunction(e) ? this.each(function (t) {
                ge(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ge(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ge.isFunction(e);
            return this.each(function (n) {
                ge(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                ge(this).replaceWith(this.childNodes)
            }), this
        }
    }), ge.expr.pseudos.hidden = function (e) {
        return !ge.expr.pseudos.visible(e)
    }, ge.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ge.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var $t = {0: 200, 1223: 204}, Ut = ge.ajaxSettings.xhr();
    pe.cors = !!Ut && "withCredentials" in Ut, pe.ajax = Ut = !!Ut, ge.ajaxTransport(function (t) {
        var n, r;
        if (pe.cors || Ut && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), ge.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), ge.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {
            "text script": function (e) {
                return ge.globalEval(e), e
            }
        }
    }), ge.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ge.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = ge("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Ht = [], qt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Ht.pop() || ge.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), ge.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qt, "$1" + i) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || ge.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? ge(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), a && ge.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), pe.createHTMLDocument = function () {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ge.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ne.location.href, t.head.appendChild(r)) : t = ne), i = Ie.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && ge(o).remove(), ge.merge([], i.childNodes))
    }, ge.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = W(e.slice(s)), e = e.slice(0, s)), ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && ge.ajax({url: e, type: i || "GET", dataType: "html", data: t}).done(function (e) {
            o = arguments, a.html(r ? ge("<div>").append(ge.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ge.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ge.expr.pseudos.animated = function (e) {
        return ge.grep(ge.timers, function (t) {
            return e === t.elem
        }).length
    }, ge.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, c, l = ge.css(e, "position"), d = ge(e), f = {};
            "static" === l && (e.style.position = "relative"), s = d.offset(), o = ge.css(e, "top"), u = ge.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, ge.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ge.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {top: r.top + i.pageYOffset - n.clientTop, left: r.left + i.pageXOffset - n.clientLeft}) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {top: r.top + ge.css(e[0], "borderTopWidth", !0), left: r.left + ge.css(e[0], "borderLeftWidth", !0)}), {top: t.top - r.top - ge.css(n, "marginTop", !0), left: t.left - r.left - ge.css(n, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === ge.css(e, "position");) e = e.offsetParent;
                return e || Ye
            })
        }
    }), ge.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        ge.fn[e] = function (r) {
            return Ne(this, function (e, r, i) {
                var o;
                return ge.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), ge.each(["top", "left"], function (e, t) {
        ge.cssHooks[t] = N(pe.pixelPosition, function (e, n) {
            if (n) return n = D(e, t), at.test(n) ? ge(e).position()[t] + "px" : n
        })
    }), ge.each({Height: "height", Width: "width"}, function (e, t) {
        ge.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            ge.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Ne(this, function (t, n, i) {
                    var o;
                    return ge.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ge.css(t, n, s) : ge.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), ge.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), ge.holdReady = function (e) {
        e ? ge.readyWait++ : ge.ready(!0)
    }, ge.isArray = Array.isArray, ge.parseJSON = JSON.parse, ge.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ge
    });
    var Gt = e.jQuery, Wt = e.$;
    return ge.noConflict = function (t) {
        return e.$ === ge && (e.$ = Wt), t && e.jQuery === ge && (e.jQuery = Gt), ge
    }, t || (e.jQuery = e.$ = ge), ge
}), function (e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
        var n = window.Cookies, r = window.Cookies = e();
        r.noConflict = function () {
            return window.Cookies = n, r
        }
    }
}(function () {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) t[r] = n[r]
        }
        return t
    }

    function t(n) {
        function r(t, i, o) {
            var a;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (o = e({path: "/"}, r.defaults, o), "number" == typeof o.expires) {
                        var s = new Date;
                        s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s
                    }
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        a = JSON.stringify(i), /^[\{\[]/.test(a) && (i = a)
                    } catch (e) {
                    }
                    i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
                    var u = "";
                    for (var c in o) o[c] && (u += "; " + c, !0 !== o[c] && (u += "=" + o[c]));
                    return document.cookie = t + "=" + i + u
                }
                t || (a = {});
                for (var l = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, f = 0; f < l.length; f++) {
                    var p = l[f].split("="), h = p.slice(1).join("=");
                    this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                    try {
                        var g = p[0].replace(d, decodeURIComponent);
                        if (h = n.read ? n.read(h, g) : n(h, g) || h.replace(d, decodeURIComponent), this.json) try {
                            h = JSON.parse(h)
                        } catch (e) {
                        }
                        if (t === g) {
                            a = h;
                            break
                        }
                        t || (a[g] = h)
                    } catch (e) {
                    }
                }
                return a
            }
        }

        return r.set = r, r.get = function (e) {
            return r.call(r, e)
        }, r.getJSON = function () {
            return r.apply({json: !0}, [].slice.call(arguments))
        }, r.defaults = {}, r.remove = function (t, n) {
            r(t, "", e(n, {expires: -1}))
        }, r.withConverter = t, r
    }

    return t(function () {
    })
}), function () {
    "use strict";

    function e(e, t, n, r, i) {
        var o = arguments.length > 5 && arguments[5] !== undefined && arguments[5], a = arguments.length > 6 ? arguments[6] : undefined, s = arguments.length > 7 ? arguments[7] : undefined;
        return '<div class="frc-container'.concat(s ? " " + s : "", '">\n<svg class="frc-icon" role="img" xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24">').concat(t, '</svg>\n<div class="frc-content">\n    <span class="frc-text" ').concat(a ? 'title="'.concat(a, '"') : "", ">").concat(n, "</span>\n    ").concat(i ? '<button type="button" class="frc-button">'.concat(i, "</button>") : "", "\n    ").concat(o ? '<progress class="frc-progress" value="0">0%</progress>' : "", '\n</div>\n</div><span class="frc-banner"><a lang="en" href="https://friendlycaptcha.com/" rel="noopener" target="_blank"><b>Friendly</b>Captcha \u21d7</a></span>\n<input name="').concat(e, '" class="frc-captcha-solution" type="hidden" value="').concat(r, '">')
    }

    function t(t, n) {
        return e(t, '<path d="M17,11c0.34,0,0.67,0.04,1,0.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55 C11.41,19.47,11,18.28,11,17C11,13.69,13.69,11,17,11z"/><path d="M17,13c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C21,14.79,19.21,13,17,13z M17,14.38"/>', n.text_ready, ".UNSTARTED", n.button_start, !1)
    }

    function n(t, n) {
        return e(t, k, n.text_fetching, ".FETCHING", undefined, !0)
    }

    function r(t, n) {
        return e(t, k, n.text_solving, ".UNFINISHED", undefined, !0)
    }

    function i(t, n, r, i) {
        var o = "".concat(i.t.toFixed(0), "s (").concat((i.h / i.t * .001).toFixed(0), "K/s)").concat(i.solver === x ? " JS Fallback" : "");
        return e(t, "<title>".concat(n.text_completed_sr, '</title><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>'), n.text_completed, r, undefined, !1, o, "frc-success")
    }

    function o(t, n) {
        return e(t, E, n.text_expired, ".EXPIRED", n.button_restart)
    }

    function a(t, n, r) {
        var i = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3], o = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
        return e(t, E, "<b>".concat(n.text_error, "</b><br>").concat(r), o ? ".HEADLESS_ERROR" : ".ERROR", i ? n.button_retry : undefined)
    }

    function s() {
        var e = document.querySelectorAll(".frc-captcha");
        return 0 === e.length && console.warn("FriendlyCaptcha: No div was found with .frc-captcha class"), e
    }

    function u() {
        if (!document.querySelector("#frc-style")) {
            var e = document.createElement("style");
            e.id = "frc-style", e.innerHTML = C, document.head.appendChild(e)
        }
    }

    function c(e, t) {
        var n = e.querySelector(".frc-progress"), r = (t.i + 1) / t.n;
        n && (n.value = r, n.innerText = r.toFixed(2) + "%", n.title = t.i + 1 + "/" + t.n + " (" + (t.h / t.t * .001).toFixed(0) + "K/s)")
    }

    function l(e) {
        for (; "FORM" !== e.tagName;) if (!(e = e.parentElement)) return null;
        return e
    }

    function d(e, t) {
        e.addEventListener("focusin", t, {once: !0, passive: !0})
    }

    function f(e) {
        for (var t = e.length, n = "", r = 0; r < t; r += 3) {
            var i = e[r + 0], o = e[r + 1], a = e[r + 2];
            n += _.charAt(i >>> 2), n += _.charAt((3 & i) << 4 | o >>> 4), n += _.charAt((15 & o) << 2 | a >>> 6), n += _.charAt(63 & a)
        }
        return t % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : t % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n
    }

    function p(e) {
        var t = e.length, n = 3 * t >>> 2;
        e.charCodeAt(t - 1) === T && n--, e.charCodeAt(t - 2) === T && n--;
        for (var r = new Uint8Array(n), i = 0, o = 0; i < t; i += 4) {
            var a = S[e.charCodeAt(i + 0)], s = S[e.charCodeAt(i + 1)], u = S[e.charCodeAt(i + 2)], c = S[e.charCodeAt(i + 3)];
            r[o++] = a << 2 | s >> 4, r[o++] = (15 & s) << 4 | u >> 2, r[o++] = (3 & u) << 6 | 63 & c
        }
        return r
    }

    function h() {
        var e = !0;
        try {
            e = PluginArray.prototype === Q.plugins.__proto__, Q.plugins.length > 0 && (e = e && Plugin.prototype === Q.plugins[0].__proto__)
        } catch (e) {
        }
        return -1 !== D.indexOf("headless") || -1 !== Q.appVersion.indexOf("Headless") || -1 !== D.indexOf("bot") || -1 !== D.indexOf("crawl") || !0 === Q.webdriver || !Q.language || Q.languages !== undefined && !Q.languages.length || !e
    }

    function g(e) {
        return e > 255 ? e = 255 : e < 0 && (e = 0), Math.pow(2, (255.999 - e) / 8) >>> 0
    }

    function A(e, t) {
        for (var n = [], r = 0; r < t; r++) {
            var i = new Uint8Array(I);
            i.set(e), i[120] = r, n.push(i)
        }
        return n
    }

    function m(e) {
        var t = e.split("."), n = t[1], r = p(n);
        return {signature: t[0], base64: n, buffer: r, n: r[F], threshold: g(r[j]), expiry: 3e5 * r[P]}
    }

    function y(e, t, n) {
        return new Promise(function (r, i) {
            function o() {
                var e = l(), t = _slicedToArray(e, 1), n = t[0];
                return n++, a.bind(this, n)
            }

            function a(e) {
                if (l = function () {
                    return [e]
                }, !(e < u.length)) return [1];
                var a = function () {
                    try {
                        return o
                    } catch (e) {
                        return i(e)
                    }
                }, s = function (t) {
                    try {
                        throw console.error("[FriendlyCaptcha]:", t), Error("".concat(n.text_fetch_error, ' <a class="frc-err-url" href="').concat(u[e], '">').concat(u[e], "</a>"))
                    } catch (e) {
                        return i(e)
                    }
                };
                try {
                    var c;
                    return Promise.resolve(v(u[e] + "?sitekey=" + t, {headers: [["x-frc-client", "js-0.9.2"]], mode: "cors"}, 2)).then(function (t) {
                        try {
                            var n = function () {
                                return a()
                            };
                            if (c = t, c.ok) {
                                var i;
                                return Promise.resolve(c.json()).then(function (e) {
                                    try {
                                        return i = e, r(i.data.puzzle)
                                    } catch (e) {
                                        return s(e)
                                    }
                                }, s)
                            }
                            var o, l = function () {
                                try {
                                    if (o && o.errors && "endpoint_not_enabled" === o.errors[0]) throw Error("Endpoint not allowed (".concat(c.status, ")"));
                                    if (e === u.length - 1) throw Error("Response status ".concat(c.status, " ").concat(c.statusText, " ").concat(o ? o.errors : ""));
                                    return n.call(this)
                                } catch (e) {
                                    return s(e)
                                }
                            }.bind(this), d = function () {
                                try {
                                    return l()
                                } catch (e) {
                                    return s(e)
                                }
                            };
                            try {
                                return Promise.resolve(c.json()).then(function (e) {
                                    try {
                                        return o = e, l()
                                    } catch (e) {
                                        return d(e)
                                    }
                                }, d)
                            } catch (e) {
                                d(e)
                            }
                            return n.call(this)
                        } catch (e) {
                            return s(e)
                        }
                    }.bind(this), s)
                } catch (e) {
                    s(e)
                }
            }

            function s() {
                return i(Error("Internal error"))
            }

            var u;
            u = e.split(",");
            var c, l;
            return (c = function (e) {
                for (; e;) {
                    if (e.then) return void e.then(c, i);
                    try {
                        if (e.pop) {
                            if (e.length) return e.pop() ? s.call(this) : e;
                            e = o
                        } else e = e.call(this)
                    } catch (e) {
                        return i(e)
                    }
                }
            }.bind(this))(a.bind(this, 0))
        })
    }

    function v(e, t, n) {
        return new Promise(function (r) {
            var i = 1e3;
            return r(fetch(e, t)["catch"](function (r) {
                return new Promise(function (o, a) {
                    return 0 === n ? a(r) : Promise.resolve(new Promise(function (e) {
                        return setTimeout(e, i)
                    })).then(function () {
                        try {
                            return i *= 4, o(v(e, t, n - 1))
                        } catch (e) {
                            return a(e)
                        }
                    }, a)
                })
            }))
        })
    }

    function b(e, t) {
        var n = new Uint8Array(3), r = new DataView(n.buffer);
        return r.setUint8(0, e), r.setUint16(1, t), n
    }

    function w() {
        for (var e = window.friendlyChallenge.autoWidget, t = s(), n = 0; n < t.length; n++) {
            var r = t[n];
            r && !r.dataset.attached && (e = new Z(r), r.dataset.attached = "1")
        }
        window.friendlyChallenge.autoWidget = e
    }

    for (var C = ".frc-captcha *{margin:0;padding:0;border:0;text-align:initial;border-radius:px;filter:none!important;transition:none!important;font-weight:400;font-size:14px;line-height:1.2;text-decoration:none;background-color:initial;color:#222}.frc-captcha{position:relative;min-width:250px;max-width:312px;border:1px solid #f4f4f4;padding-bottom:12px;background-color:#fff}.frc-captcha b{font-weight:700}.frc-container{display:flex;align-items:center;min-height:52px}.frc-icon{fill:#222;stroke:#222;flex-shrink:0;margin:8px 8px 0}.frc-icon.frc-warning{fill:#c00}.frc-success .frc-icon{animation:1s ease-in both frc-fade-in}.frc-content{white-space:nowrap;display:flex;flex-direction:column;margin:4px 6px 0 0;overflow-x:auto;flex-grow:1}.frc-banner{position:absolute;bottom:0;right:6px;line-height:1}.frc-banner *{font-size:10px;opacity:.8;text-decoration:none}.frc-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:3px 0;height:4px;border:none;background-color:#eee;color:#222;width:100%;transition:.5s linear}.frc-progress::-webkit-progress-bar{background:#eee}.frc-progress::-webkit-progress-value{background:#222}.frc-progress::-moz-progress-bar{background:#222}.frc-button{cursor:pointer;padding:2px 6px;background-color:#f1f1f1;border:1px solid transparent;text-align:center;font-weight:600;text-transform:none}.frc-button:focus{border:1px solid #333}.frc-button:hover{background-color:#ddd}.frc-captcha-solution{display:none}.frc-err-url{text-decoration:underline;font-size:.9em}.dark.frc-captcha{color:#fff;background-color:#222;border-color:#333}.dark.frc-captcha *{color:#fff}.dark.frc-captcha button{background-color:#444}.dark .frc-icon{fill:#fff;stroke:#fff}.dark .frc-progress{background-color:#444}.dark .frc-progress::-webkit-progress-bar{background:#444}.dark .frc-progress::-webkit-progress-value{background:#ddd}.dark .frc-progress::-moz-progress-bar{background:#ddd}@keyframes frc-fade-in{from{opacity:0}to{opacity:1}}", x = 1, I = 128, k = '<circle cx="12" cy="12" r="8" stroke-width="3" stroke-dasharray="15 10" fill="none" stroke-linecap="round" transform="rotate(0 12 12)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9s" values="0 12 12;360 12 12"/></circle>', E = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>', _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", T = "=".charCodeAt(0), S = new Uint8Array(256), B = 0; B < _.length; B++) S[_.charCodeAt(B)] = B;
    var Q, D;
    "undefined" != typeof navigator && (Q = navigator, D = Q.userAgent.toLowerCase());
    var N, P = 13, F = 14, j = 15, M = {text_init: "Initializing..", text_ready: "Anti-Robot Verification", button_start: "Click to start verification", text_fetching: "Fetching Challenge", text_solving: "Verifying you are human..", text_completed: "I am human", text_completed_sr: "Automatic spam check completed", text_expired: "Anti-Robot verification expired", button_restart: "Restart", text_error: "Verification failed", button_retry: "Retry", text_fetch_error: "Failed to connect to"},
        R = {text_init: "Chargement..", text_ready: "Verification Anti-Robot", button_start: "Cliquez ici pour v\xe9rifier", text_fetching: "Chargement du challenge", text_solving: "V\xe9rification que vous \xeates humain..", text_completed: "Je suis humain", text_completed_sr: "V\xe9rification automatique des spams termin\xe9e", text_expired: "Verification \xe9chue", button_restart: "Recommencer", text_error: "Echec de verification", button_retry: "Recommencer", text_fetch_error: "Probl\xe8me de connexion avec"},
        L = {text_init: "Initialisierung..", text_ready: "Anti-Roboter-Verifizierung", button_start: "Hier klicken", text_fetching: "Herausforderung laden..", text_solving: "Verifizierung, dass Sie ein Mensch sind..", text_completed: "Ich bin ein Mensch", text_completed_sr: "Automatische Spampr\xfcfung abgeschlossen", text_expired: "Verifizierung abgelaufen", button_restart: "Erneut starten", text_error: "Verifizierung fehlgeschlagen", button_retry: "Erneut versuchen", text_fetch_error: "Verbindungsproblem mit"}, O = {text_init: "Initializeren..", text_ready: "Anti-robotverificatie", button_start: "Klik om te starten", text_fetching: "Aan het laden..", text_solving: "Anti-robotverificatie bezig..", text_completed: "Ik ben een mens", text_completed_sr: "Automatische anti-spamcheck voltooid", text_expired: "Verificatie verlopen", button_restart: "Opnieuw starten", text_error: "Verificatie mislukt", button_retry: "Opnieuw proberen", text_fetch_error: "Verbinding mislukt met"},
        z = {text_init: "Inizializzazione...", text_ready: "Verifica Anti-Robot", button_start: "Clicca per iniziare", text_fetching: "Caricamento...", text_solving: "Verificando che sei umano...", text_completed: "Non sono un robot", text_completed_sr: "Controllo automatico dello spam completato", text_expired: "Verifica Anti-Robot scaduta", button_restart: "Ricomincia", text_error: "Verifica fallita", button_retry: "Riprova", text_fetch_error: "Problema di connessione con"},
        $ = {text_init: "Inicializando..", text_ready: "Verifica\xe7\xe3o Anti-Rob\xf4", button_start: "Clique para iniciar verifica\xe7\xe3o", text_fetching: "Carregando..", text_solving: "Verificando se voc\xea \xe9 humano..", text_completed: "Eu sou humano", text_completed_sr: "Verifica\xe7\xe3o autom\xe1tica de spam conclu\xedda", text_expired: "Verifica\xe7\xe3o Anti-Rob\xf4 expirada", button_restart: "Reiniciar", text_error: "Verifica\xe7\xe3o falhou", button_retry: "Tentar novamente", text_fetch_error: "Falha de conex\xe3o com"},
        U = {text_init: "Inicializando..", text_ready: "Verificaci\xf3n Anti-Robot", button_start: "Haga clic para iniciar la verificaci\xf3n", text_fetching: "Cargando desaf\xedo", text_solving: "Verificando que eres humano..", text_completed: "Soy humano", text_completed_sr: "Verificaci\xf3n autom\xe1tica de spam completada", text_expired: "Verificaci\xf3n Anti-Robot expirada", button_restart: "Reiniciar", text_error: "Ha fallado la verificaci\xf3n", button_retry: "Intentar de nuevo", text_fetch_error: "Error al conectarse a"},
        H = {text_init: "Inicialitzant...", text_ready: "Verificaci\xf3 Anti-Robot", button_start: "Fes clic per comen\xe7ar la verificaci\xf3", text_fetching: "Carregant repte", text_solving: "Verificant que ets hum\xe0..", text_completed: "Soc hum\xe0", text_completed_sr: "Verificaci\xf3 autom\xe0tica de correu brossa completada", text_expired: "La verificaci\xf3 Anti-Robot ha expirat", button_restart: "Reiniciar", text_error: "Ha fallat la verificaci\xf3", button_retry: "Tornar a provar", text_fetch_error: "Error connectant a"},
        q = {text_init: "\u958b\u59cb\u3057\u3066\u3044\u307e\u3059...", text_ready: "\u30a2\u30f3\u30c1\u30ed\u30dc\u30c3\u30c8\u8a8d\u8a3c", button_start: "\u30af\u30ea\u30c3\u30af\u3057\u3066\u8a8d\u8a3c\u3092\u958b\u59cb", text_fetching: "\u30ed\u30fc\u30c9\u3057\u3066\u3044\u307e\u3059", text_solving: "\u8a8d\u8a3c\u4e2d...", text_completed: "\u79c1\u306f\u30ed\u30dc\u30c3\u30c8\u3067\u306f\u3042\u308a\u307e\u305b\u3093", text_completed_sr: "\u81ea\u52d5\u30b9\u30d1\u30e0\u30c1\u30a7\u30c3\u30af\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f", text_expired: "\u8a8d\u8a3c\u306e\u671f\u9650\u304c\u5207\u308c\u3066\u3044\u307e\u3059", button_restart: "\u518d\u5ea6\u8a8d\u8a3c\u3092\u884c\u3046", text_error: "\u8a8d\u8a3c\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f", button_retry: "\u518d\u5ea6\u8a8d\u8a3c\u3092\u884c\u3046", text_fetch_error: "\u63a5\u7d9a\u304c\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f"},
        G = {text_init: "Initialiserer..", text_ready: "Anti-robot verifikation", button_start: "Klik for at starte verifikationen", text_fetching: "Henter udfordring", text_solving: "Bekr\xe6fter, at du er et menneske..", text_completed: "Jeg er et menneske", text_completed_sr: "Automatisk spamkontrol gennemf\xf8rt", text_expired: "Anti-Robot-verifikation er udl\xf8bet", button_restart: "Genstart", text_error: "Bekr\xe6ftelse mislykkedes", button_retry: "Pr\xf8v igen", text_fetch_error: "Det lykkedes ikke at oprette forbindelse til"}, W = {
            text_init: "\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f..",
            text_ready: "\u0410\u043d\u0442\u0438\u0420\u043e\u0431\u043e\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
            button_start: "\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443",
            text_fetching: "\u041f\u043e\u043b\u0443\u0447\u0430\u044e \u0437\u0430\u0434\u0430\u0447\u0443",
            text_solving: "\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u044e, \u0447\u0442\u043e \u0432\u044b \u0447\u0435\u043b\u043e\u0432\u0435\u043a..",
            text_completed: "\u042f \u0447\u0435\u043b\u043e\u0432\u0435\u043a",
            text_completed_sr: "A\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u0441\u043f\u0430\u043c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430",
            text_expired: "\u0421\u0440\u043e\u043a \u0410\u043d\u0442\u0438\u0420\u043e\u0431\u043e\u0442\u043d\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u0441\u0442\u0451\u043a",
            button_restart: "\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e",
            text_error: "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",
            button_retry: "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437",
            text_fetch_error: "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"
        }, V = {text_init: "Laddar...", text_ready: "Anti-robot-verifiering", button_start: "Klicka f\xf6r att starta verifieringen", text_fetching: "H\xe4mtar utmaning", text_solving: "Verifierar att du \xe4r en m\xe4nniska..", text_completed: "Jag \xe4r en m\xe4nniska", text_completed_sr: "Automatisk spamkontroll slutf\xf6rd", text_expired: "Anti-robot-verifieringen har l\xf6pt ut", button_restart: "B\xf6rja om", text_error: "Verifieringen misslyckades", button_retry: "F\xf6rs\xf6k igen", text_fetch_error: "Lyckades inte ansluta till"}, K = {en: M, de: L, nl: O, fr: R, it: z, pt: $, es: U, ca: H, ja: q, da: G, ru: W, sv: V},
        Y = '!function(){function A(A,r){return function(A){if(Array.isArray(A))return A}(A)||function(A,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(A)){var r=[],n=!0,e=!1,o=void 0;try{for(var i,g=A[Symbol.iterator]();!(n=(i=g.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(I){e=!0,o=I}finally{try{n||null==g.return||g.return()}finally{if(e)throw o}}return r}}(A,r)||function(A,r){if(A){if("string"==typeof A)return t(A,r);var n=Object.prototype.toString.call(A).slice(8,-1);return"Object"===n&&A.constructor&&(n=A.constructor.name),"Map"===n||"Set"===n?Array.from(A):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(A,r):void 0}}(A,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(A,t){(null==t||t>A.length)&&(t=A.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=A[r];return n}!function(){"use strict";var A,t=[];function r(){for(;t.length;)t[0](),t.shift()}function n(A){this.a=e,this.b=void 0,this.f=[];var t=this;try{A((function(A){i(t,A)}),(function(A){g(t,A)}))}catch(r){g(t,r)}}A=function(){setTimeout(r)};var e=2;function o(A){return new n((function(t){t(A)}))}function i(A,t){if(A.a==e){if(t==A)throw new TypeError;var r=!1;try{var n=t&&t.then;if(null!=t&&"object"==typeof t&&"function"==typeof n)return void n.call(t,(function(t){r||i(A,t),r=!0}),(function(t){r||g(A,t),r=!0}))}catch(o){return void(r||g(A,o))}A.a=0,A.b=t,I(A)}}function g(A,t){if(A.a==e){if(t==A)throw new TypeError;A.a=1,A.b=t,I(A)}}function I(r){!function(r){t.push(r),1==t.length&&A()}((function(){if(r.a!=e)for(;r.f.length;){var A=(o=r.f.shift())[0],t=o[1],n=o[2],o=o[3];try{0==r.a?n("function"==typeof A?A.call(void 0,r.b):r.b):1==r.a&&("function"==typeof t?n(t.call(void 0,r.b)):o(r.b))}catch(i){o(i)}}}))}n.prototype.g=function(A){return this.c(void 0,A)},n.prototype.c=function(A,t){var r=this;return new n((function(n,e){r.f.push([A,t,n,e]),I(r)}))},self.Promise||(self.Promise=n,self.Promise.resolve=o,self.Promise.reject=function(A){return new n((function(t,r){r(A)}))},self.Promise.race=function(A){return new n((function(t,r){for(var n=0;n<A.length;n+=1)o(A[n]).c(t,r)}))},self.Promise.all=function(A){return new n((function(t,r){function n(r){return function(n){i[r]=n,(e+=1)==A.length&&t(i)}}var e=0,i=[];0==A.length&&t(i);for(var g=0;g<A.length;g+=1)o(A[g]).c(n(g),r)}))},self.Promise.prototype.then=n.prototype.c,self.Promise.prototype.catch=n.prototype.g)}(),function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="=".charCodeAt(0),n=new Uint8Array(256),e=0;e<t.length;e++)n[t.charCodeAt(e)]=e;var o=function A(t){!function(A,t){if(!(A instanceof t))throw new TypeError("Cannot call a class as a function")}(this,A),this.b=new Uint8Array(128),this.h=new Uint32Array(16),this.t=0,this.c=0,this.v=new Uint32Array(32),this.m=new Uint32Array(32),this.outlen=t};function i(A,t){return A[t]^A[t+1]<<8^A[t+2]<<16^A[t+3]<<24}function g(A,t,r,n,e,o,i,g){var I,C,Q,c=t[i],a=t[i+1],B=t[g],f=t[g+1],u=A[r],s=A[r+1],E=A[n],h=A[n+1],w=A[e],l=A[e+1],y=A[o],D=A[o+1];Q=D^(s=(s=s+h+((u&E|(u|E)&~(I=u+E))>>>31))+a+(((u=I)&c|(u|c)&~(I=u+c))>>>31)),E=(Q=(h=(Q=h^(l=l+(D=C=y^(u=I))+((w&(y=Q)|(w|y)&~(I=w+y))>>>31)))>>>24^(C=E^(w=I))<<8)^(l=l+(D=(Q=D^(s=(s=s+h+((u&(E=C>>>24^Q<<8)|(u|E)&~(I=u+E))>>>31))+f+(((u=I)&B|(u|B)&~(I=u+B))>>>31)))>>>16^(C=y^(u=I))<<16)+((w&(y=C>>>16^Q<<16)|(w|y)&~(I=w+y))>>>31)))>>>31^(C=E^(w=I))<<1,h=C>>>31^Q<<1,A[r]=u,A[r+1]=s,A[n]=E,A[n+1]=h,A[e]=w,A[e+1]=l,A[o]=y,A[o+1]=D}var I,C,Q=[4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],c=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6,22,16,24,0,10,4,30,26,20,28,6,12,14,2,18,8,14,18,6,2,26,24,22,28,4,12,10,20,8,0,30,16,18,0,10,14,4,8,20,30,28,2,22,24,12,16,6,26,4,24,12,20,0,22,16,6,8,26,14,10,30,28,2,18,24,10,2,30,28,26,8,20,0,14,12,6,18,4,16,22,26,22,14,28,24,2,6,18,10,0,30,8,16,12,4,20,12,30,28,18,22,6,0,16,24,4,26,14,2,8,20,10,20,4,16,8,14,12,2,10,30,22,18,28,6,24,26,0,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6];function a(A,t){for(var r=A.v,n=A.m,e=0;e<16;e++)r[e]=A.h[e],r[e+16]=Q[e];r[24]=r[24]^A.t,r[25]=r[25]^A.t/4294967296,t&&(r[28]=~r[28],r[29]=~r[29]);for(var o=0;o<32;o++)n[o]=i(A.b,4*o);for(var I=0;I<12;I++)g(r,n,0,8,16,24,c[16*I+0],c[16*I+1]),g(r,n,2,10,18,26,c[16*I+2],c[16*I+3]),g(r,n,4,12,20,28,c[16*I+4],c[16*I+5]),g(r,n,6,14,22,30,c[16*I+6],c[16*I+7]),g(r,n,0,10,20,30,c[16*I+8],c[16*I+9]),g(r,n,2,12,22,24,c[16*I+10],c[16*I+11]),g(r,n,4,14,16,26,c[16*I+12],c[16*I+13]),g(r,n,6,8,18,28,c[16*I+14],c[16*I+15]);for(var C=0;C<16;C++)A.h[C]=A.h[C]^r[C]^r[C+16]}function B(A,t){for(var r=0;r<16;r++)A.h[r]=Q[r];A.b.set(t),A.h[0]^=16842752^A.outlen}function f(A,t,r){if(128!=A.length)throw Error("Invalid input");var n=A.buffer,e=new DataView(n),i=new o(32);i.t=128;for(var g=e.getUint32(124,!0),I=g+r,C=g;C<I;C++)if(e.setUint32(124,C,!0),B(i,A),a(i,!0),i.h[0]<t)return 0==ASC_TARGET?new Uint8Array(i.h.buffer):Uint8Array.wrap(i.h.buffer);return new Uint8Array(0)}function u(){return new Promise((function(A){return A((function(A,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4294967295,n=f(A,t,r);return[A,n]}))}))}Uint8Array.prototype.slice||Object.defineProperty(Uint8Array.prototype,"slice",{value:function(A,t){return new Uint8Array(Array.prototype.slice.call(this,A,t))}}),self.ASC_TARGET=0;var s=new Promise((function(A){return C=A}));self.onerror=function(A){self.postMessage({type:"error",message:JSON.stringify(A)})},self.onmessage=function(t){return new Promise((function(e,o){var i;i=t.data;var g=function(){try{return e()}catch(A){return o(A)}},Q=function(A){try{return setTimeout((function(){throw A})),g()}catch(t){return o(t)}};try{var c=function(){return g()};if("solver"!==i.type){var a,B,f,E,h=function(){return c.call(this)};return"start"===i.type?Promise.resolve(s).then(function(t){try{a=t,self.postMessage({type:"started"}),B=0;for(var r=0;r<256;r++){i.puzzleSolverInput[123]=r;var n=A(a(i.puzzleSolverInput,i.threshold),2),e=n[0];if(0!==n[1].length){f=e;break}console.warn("FC: Internal error or no solution found"),B+=Math.pow(2,32)-1}return E=new DataView(f.slice(-4).buffer),B+=E.getUint32(0,!0),self.postMessage({type:"done",solution:f.slice(-8),h:B,puzzleIndex:i.puzzleIndex,puzzleNumber:i.puzzleNumber}),h.call(this)}catch(o){return Q(o)}}.bind(this),Q):h.call(this)}var w=function(){return self.postMessage({type:"ready",solver:I}),c.call(this)};if(i.forceJS)return I=1,Promise.resolve(u()).then(function(A){try{return C(A),w.call(this)}catch(t){return Q(t)}}.bind(this),Q);var l=function(){try{return w.call(this)}catch(A){return Q(A)}}.bind(this),y=function(A){try{return console.log("FriendlyCaptcha failed to initialize WebAssembly, falling back to Javascript solver: "+A.toString()),I=1,Promise.resolve(u()).then((function(A){try{return C(A),l()}catch(t){return Q(t)}}),Q)}catch(t){return Q(t)}};try{var D;return I=2,D=WebAssembly.compile(function(A){var t=A.length,e=3*t>>>2;A.charCodeAt(t-1)===r&&e--,A.charCodeAt(t-2)===r&&e--;for(var o=new Uint8Array(e),i=0,g=0;i<t;i+=4){var I=n[A.charCodeAt(i+0)],C=n[A.charCodeAt(i+1)],Q=n[A.charCodeAt(i+2)],c=n[A.charCodeAt(i+3)];o[g++]=I<<2|C>>4,o[g++]=(15&C)<<4|Q>>2,o[g++]=(3&Q)<<6|63&c}return o}("AGFzbQEAAAABKghgAABgAn9/AGADf39/AX9gAX8AYAR/f39/AGAAAX9gAX8Bf2ACf38BfwINAQNlbnYFYWJvcnQABAMMCwcGAwAAAQIFAQIABQMBAAEGFgR/AUEAC38BQQALfwBBAwt/AEHgDAsHbgkGbWVtb3J5AgAHX19hbGxvYwABCF9fcmV0YWluAAIJX19yZWxlYXNlAAMJX19jb2xsZWN0AAQHX19yZXNldAAFC19fcnR0aV9iYXNlAwMNVWludDhBcnJheV9JRAMCDHNvbHZlQmxha2UyYgAKCAELCvQSC5IBAQV/IABB8P///wNLBEAACyMBQRBqIgQgAEEPakFwcSICQRAgAkEQSxsiBmoiAj8AIgVBEHQiA0sEQCAFIAIgA2tB//8DakGAgHxxQRB2IgMgBSADShtAAEEASARAIANAAEEASARAAAsLCyACJAEgBEEQayICIAY2AgAgAkEBNgIEIAIgATYCCCACIAA2AgwgBAsEACAACwMAAQsDAAELBgAjACQBC7sCAQF/AkAgAUUNACAAQQA6AAAgACABakEEayICQQA6AAMgAUECTQ0AIABBADoAASAAQQA6AAIgAkEAOgACIAJBADoAASABQQZNDQAgAEEAOgADIAJBADoAACABQQhNDQAgAEEAIABrQQNxIgJqIgBBADYCACAAIAEgAmtBfHEiAmpBHGsiAUEANgIYIAJBCE0NACAAQQA2AgQgAEEANgIIIAFBADYCECABQQA2AhQgAkEYTQ0AIABBADYCDCAAQQA2AhAgAEEANgIUIABBADYCGCABQQA2AgAgAUEANgIEIAFBADYCCCABQQA2AgwgACAAQQRxQRhqIgFqIQAgAiABayEBA0AgAUEgTwRAIABCADcDACAAQgA3AwggAEIANwMQIABCADcDGCABQSBrIQEgAEEgaiEADAELCwsLcgACfyAARQRAQQxBAhABIQALIAALQQA2AgAgAEEANgIEIABBADYCCCABQfD///8DIAJ2SwRAQcAKQfAKQRJBORAAAAsgASACdCIBQQAQASICIAEQBiAAKAIAGiAAIAI2AgAgACACNgIEIAAgATYCCCAAC88BAQJ/QaABQQAQASIAQQxBAxABQYABQQAQBzYCACAAQQxBBBABQQhBAxAHNgIEIABCADcDCCAAQQA2AhAgAEIANwMYIABCADcDICAAQgA3AyggAEIANwMwIABCADcDOCAAQgA3A0AgAEIANwNIIABCADcDUCAAQgA3A1ggAEIANwNgIABCADcDaCAAQgA3A3AgAEIANwN4IABCADcDgAEgAEIANwOIASAAQgA3A5ABQYABQQUQASIBQYABEAYgACABNgKYASAAQSA2ApwBIAAL2AkCA38SfiAAKAIEIQIgACgCmAEhAwNAIARBgAFIBEAgAyAEaiABIARqKQMANwMAIARBCGohBAwBCwsgAigCBCkDACEMIAIoAgQpAwghDSACKAIEKQMQIQ4gAigCBCkDGCEPIAIoAgQpAyAhBSACKAIEKQMoIQsgAigCBCkDMCEGIAIoAgQpAzghB0KIkvOd/8z5hOoAIQhCu86qptjQ67O7fyEJQqvw0/Sv7ry3PCEQQvHt9Pilp/2npX8hCiAAKQMIQtGFmu/6z5SH0QCFIRFCn9j52cKR2oKbfyESQpSF+aXAyom+YCETQvnC+JuRo7Pw2wAhFEEAIQQDQCAEQcABSARAIAUgCCARIAwgBSADIARBgAhqIgEtAABBA3RqKQMAfHwiBYVCIIoiDHwiCIVCGIoiESAIIAwgBSARIAMgAS0AAUEDdGopAwB8fCIMhUIQiiIIfCIVhUI/iiEFIAsgCSASIA0gCyADIAEtAAJBA3RqKQMAfHwiDYVCIIoiCXwiEYVCGIohCyAGIBAgEyAOIAYgAyABLQAEQQN0aikDAHx8IgaFQiCKIg58IhCFQhiKIhIgECAOIAYgEiADIAEtAAVBA3RqKQMAfHwiDoVCEIoiE3wiEIVCP4ohBiAHIAogFCAPIAcgAyABLQAGQQN0aikDAHx8IgeFQiCKIg98IgqFQhiKIhIgCiAPIAcgEiADIAEtAAdBA3RqKQMAfHwiD4VCEIoiCnwiEoVCP4ohByAQIAogDCARIAkgDSALIAMgAS0AA0EDdGopAwB8fCINhUIQiiIJfCIWIAuFQj+KIgwgAyABLQAIQQN0aikDAHx8IhCFQiCKIgp8IgsgECALIAyFQhiKIhEgAyABLQAJQQN0aikDAHx8IgwgCoVCEIoiFHwiECARhUI/iiELIAYgEiAIIA0gBiADIAEtAApBA3RqKQMAfHwiDYVCIIoiCHwiCoVCGIoiBiANIAYgAyABLQALQQN0aikDAHx8Ig0gCIVCEIoiESAKfCIKhUI/iiEGIAcgFSAJIA4gByADIAEtAAxBA3RqKQMAfHwiDoVCIIoiCHwiCYVCGIoiByAOIAcgAyABLQANQQN0aikDAHx8Ig4gCIVCEIoiEiAJfCIIhUI/iiEHIAUgFiATIA8gBSADIAEtAA5BA3RqKQMAfHwiD4VCIIoiCXwiFYVCGIoiBSAPIAUgAyABLQAPQQN0aikDAHx8Ig8gCYVCEIoiEyAVfCIJhUI/iiEFIARBEGohBAwBCwsgAigCBCACKAIEKQMAIAggDIWFNwMAIAIoAgQgAigCBCkDCCAJIA2FhTcDCCACKAIEIAIoAgQpAxAgDiAQhYU3AxAgAigCBCACKAIEKQMYIAogD4WFNwMYIAIoAgQgAigCBCkDICAFIBGFhTcDICACKAIEIAIoAgQpAyggCyAShYU3AyggAigCBCACKAIEKQMwIAYgE4WFNwMwIAIoAgQgAigCBCkDOCAHIBSFhTcDOCAAIAw3AxggACANNwMgIAAgDjcDKCAAIA83AzAgACAFNwM4IAAgCzcDQCAAIAY3A0ggACAHNwNQIAAgCDcDWCAAIAk3A2AgACAQNwNoIAAgCjcDcCAAIBE3A3ggACASNwOAASAAIBM3A4gBIAAgFDcDkAEL4QIBBH8gACgCCEGAAUcEQEHQCUGACkEeQQUQAAALIAAoAgAhBBAIIgMoAgQhBSADQoABNwMIIAQoAnwiACACaiEGA0AgACAGSQRAIAQgADYCfCADKAIEIgIoAgQgAygCnAGtQoiS95X/zPmE6gCFNwMAIAIoAgRCu86qptjQ67O7fzcDCCACKAIEQqvw0/Sv7ry3PDcDECACKAIEQvHt9Pilp/2npX83AxggAigCBELRhZrv+s+Uh9EANwMgIAIoAgRCn9j52cKR2oKbfzcDKCACKAIEQuv6htq/tfbBHzcDMCACKAIEQvnC+JuRo7Pw2wA3AzggAyAEEAkgBSgCBCkDAKcgAUkEQEEAIAUoAgAiAUEQaygCDCICSwRAQfALQbAMQc0NQQUQAAALQQxBAxABIgAgATYCACAAIAI2AgggACABNgIEIAAPCyAAQQFqIQAMAQsLQQxBAxABQQBBABAHCwwAQaANJABBoA0kAQsL+gQJAEGBCAu/AQECAwQFBgcICQoLDA0ODw4KBAgJDw0GAQwAAgsHBQMLCAwABQIPDQoOAwYHAQkEBwkDAQ0MCw4CBgUKBAAPCAkABQcCBAoPDgELDAYIAw0CDAYKAAsIAwQNBwUPDgEJDAUBDw4NBAoABwYDCQIICw0LBw4MAQMJBQAPBAgGAgoGDw4JCwMACAwCDQcBBAoFCgIIBAcGAQUPCwkOAwwNAAABAgMEBQYHCAkKCwwNDg8OCgQICQ8NBgEMAAILBwUDAEHACQspGgAAAAEAAAABAAAAGgAAAEkAbgB2AGEAbABpAGQAIABpAG4AcAB1AHQAQfAJCzEiAAAAAQAAAAEAAAAiAAAAcwByAGMALwBzAG8AbAB2AGUAcgBXAGEAcwBtAC4AdABzAEGwCgsrHAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaABB4AoLNSYAAAABAAAAAQAAACYAAAB+AGwAaQBiAC8AYQByAHIAYQB5AGIAdQBmAGYAZQByAC4AdABzAEGgCws1JgAAAAEAAAABAAAAJgAAAH4AbABpAGIALwBzAHQAYQB0AGkAYwBhAHIAcgBhAHkALgB0AHMAQeALCzMkAAAAAQAAAAEAAAAkAAAASQBuAGQAZQB4ACAAbwB1AHQAIABvAGYAIAByAGEAbgBnAGUAQaAMCzMkAAAAAQAAAAEAAAAkAAAAfgBsAGkAYgAvAHQAeQBwAGUAZABhAHIAcgBhAHkALgB0AHMAQeAMCy4GAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAYQAAAAIAAAAhAgAAAgAAACQC")),Promise.resolve(D).then((function(A){try{return Promise.resolve(function(A){return new Promise((function(t,r){var n,e,o;return Promise.resolve(function(A){return new Promise((function(t,r){var n,e;return n={env:{abort:function(){throw Error("Wasm aborted")}}},Promise.resolve(WebAssembly.instantiate(A,n)).then((function(A){try{return e=function(A){var t={},r=A.exports,n=r.memory,e=r.__alloc,o=r.__retain,i=r.__rtti_base||-1;return t.__allocArray=function(A,t){var r=function(A){return new Uint32Array(n.buffer)[(i+4>>>2)+2*A]}(A),g=31-Math.clz32(r>>>6&31),I=t.length,C=e(I<<g,0),Q=e(12,A),c=new Uint32Array(n.buffer);c[Q+0>>>2]=o(C),c[Q+4>>>2]=C,c[Q+8>>>2]=I<<g;var a=n.buffer,B=new Uint8Array(a);if(16384&r)for(var f=0;f<I;++f)B[(C>>>g)+f]=o(t[f]);else B.set(t,C>>>g);return Q},t.__getUint8Array=function(A){var t=new Uint32Array(n.buffer),r=t[A+4>>>2];return new Uint8Array(n.buffer,r,t[r-4>>>2]>>>0)},function(A){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=A.__argumentsLength?function(t){A.__argumentsLength.value=t}:A.__setArgumentsLength||A.__setargc||function(){return{}},n=function(n){if(!Object.prototype.hasOwnProperty.call(A,n))return"continue";var e=A[n],o=n.split(".")[0];"function"==typeof e&&e!==r?(t[o]=function(){return r(arguments.length),e.apply(void 0,arguments)}).original=e:t[o]=e};for(var e in A)n(e);return t}(r,t)}(A),t({exports:e})}catch(n){return r(n)}}),r)}))}(A)).then((function(A){try{return e=(n=A).exports.__retain(n.exports.__allocArray(n.exports.Uint8Array_ID,new Uint8Array(128))),o=n.exports.__getUint8Array(e),t((function(A,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4294967295;o.set(A);var i=n.exports.solveBlake2b(e,t,r);o=n.exports.__getUint8Array(e);var g=n.exports.__getUint8Array(i);return n.exports.__release(i),[o,g]}))}catch(i){return r(i)}}),r)}))}(A)).then((function(A){try{return C(A),l()}catch(t){return y(t)}}),y)}catch(t){return y(t)}}),y)}catch(v){y(v)}}catch(v){Q(v)}}))}}()}("undefined"==typeof frcWorker?frcWorker={}:frcWorker);';
    "undefined" != typeof window && (N = window.URL || window.webkitURL);
    var J = function () {
        function e() {
            _classCallCheck(this, e), this.workers = [], this.puzzleNumber = 0, this.numPuzzles = 0, this.threshold = 0, this.startTime = 0, this.progress = 0, this.totalHashes = 0, this.puzzleSolverInputs = [], this.puzzleIndex = 0, this.solutionBuffer = new Uint8Array(0), this.solverType = 1, this.readyCount = 0, this.startCount = 0, this.progressCallback = function () {
                return 0
            }, this.readyCallback = function () {
                return 0
            }, this.startedCallback = function () {
                return 0
            }, this.doneCallback = function () {
                return 0
            }, this.errorCallback = function () {
                return 0
            }
        }

        return _createClass(e, [{
            key: "init", value: function () {
                var e = this;
                this.terminateWorkers(), this.progress = 0, this.totalHashes = 0, this.readyCount = 0, this.startCount = 0, this.workers = new Array(4);
                for (var t = new Blob([Y], {type: "text/javascript"}), n = function (n) {
                    e.workers[n] = new Worker(N.createObjectURL(t)), e.workers[n].onerror = function (t) {
                        return e.errorCallback(t)
                    }, e.workers[n].onmessage = function (t) {
                        var r = t.data;
                        if (r) if ("ready" === r.type) e.readyCount++, e.solverType = r.solver, e.readyCount == e.workers.length && e.readyCallback(); else if ("started" === r.type) 1 == ++e.startCount && (e.startTime = Date.now(), e.startedCallback()); else if ("done" === r.type) {
                            if (r.puzzleNumber !== e.puzzleNumber) return;
                            if (e.puzzleIndex < e.puzzleSolverInputs.length && (e.workers[n].postMessage({type: "start", puzzleSolverInput: e.puzzleSolverInputs[e.puzzleIndex], threshold: e.threshold, puzzleIndex: e.puzzleIndex, puzzleNumber: e.puzzleNumber}), e.puzzleIndex++), e.progress++, e.totalHashes += r.h, e.progressCallback({n: e.numPuzzles, h: e.totalHashes, t: (Date.now() - e.startTime) / 1e3, i: e.progress}), e.solutionBuffer.set(r.solution, 8 * r.puzzleIndex), e.progress == e.numPuzzles) {
                                var i = (Date.now() - e.startTime) / 1e3;
                                e.doneCallback({solution: e.solutionBuffer, h: e.totalHashes, t: i, diagnostics: b(e.solverType, i), solver: e.solverType})
                            }
                        } else "error" === r.type && e.errorCallback(r)
                    }
                }, r = 0; r < this.workers.length; r++) n(r)
            }
        }, {
            key: "setupSolver", value: function () {
                for (var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0], t = {type: "solver", forceJS: e}, n = 0; n < this.workers.length; n++) this.workers[n].postMessage(t)
            }
        }, {
            key: "start", value: function (e) {
                this.puzzleSolverInputs = A(e.buffer, e.n), this.solutionBuffer = new Uint8Array(8 * e.n), this.numPuzzles = e.n, this.threshold = e.threshold, this.puzzleIndex = 0, this.puzzleNumber++;
                for (var t = 0; t < this.workers.length && this.puzzleIndex !== this.puzzleSolverInputs.length; t++) this.workers[t].postMessage({type: "start", puzzleSolverInput: this.puzzleSolverInputs[t], threshold: this.threshold, puzzleIndex: this.puzzleIndex, puzzleNumber: this.puzzleNumber}), this.puzzleIndex++
            }
        }, {
            key: "terminateWorkers", value: function () {
                if (0 != this.workers.length) {
                    for (var e = 0; e < this.workers.length; e++) this.workers[e].terminate();
                    this.workers = []
                }
            }
        }]), e
    }(), X = "https://api.friendlycaptcha.com/api/v1/puzzle", Z = function () {
        function e(t) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (_classCallCheck(this, e), this.workerGroup = new J, this.valid = !1, this.needsReInit = !1, this.hasBeenStarted = !1, this.hasBeenDestroyed = !1, this.opts = Object.assign({
                forceJSFallback: !1, startMode: "focus", puzzleEndpoint: t.dataset.puzzleEndpoint || X, startedCallback: function () {
                    return 0
                }, readyCallback: function () {
                    return 0
                }, doneCallback: function () {
                    return 0
                }, errorCallback: function () {
                    return 0
                }, sitekey: t.dataset.sitekey || "", language: t.dataset.lang || "en", solutionFieldName: t.dataset.solutionFieldName || "frc-captcha-solution"
            }, n), this.e = t, this.e.friendlyChallengeWidget = this, "string" == typeof this.opts.language) {
                var r = K[this.opts.language.toLowerCase()];
                r === undefined && (console.error('FriendlyCaptcha: language "' + this.opts.language + '" not found.'), r = K.en), this.lang = r
            } else this.lang = Object.assign(Object.assign({}, K.en), this.opts.language);
            t.innerText = this.lang.text_init, u(), this.init("auto" === this.opts.startMode || "auto" === this.e.dataset.start)
        }

        return _createClass(e, [{
            key: "init", value: function (e) {
                var t = this;
                if (this.hasBeenDestroyed) return void console.error("FriendlyCaptcha widget has been destroyed using destroy(), it can not be used anymore.");
                if (this.initWorkerGroup(), e) this.start(); else if ("none" !== this.e.dataset.start && ("focus" === this.opts.startMode || "focus" === this.e.dataset.start)) {
                    var n = l(this.e);
                    n ? d(n, function () {
                        return t.start()
                    }) : console.log("FriendlyCaptcha div seems not to be contained in a form, autostart will not work")
                }
            }
        }, {
            key: "makeButtonStart", value: function () {
                var e = this, t = this.e.querySelector("button");
                t && (t.addEventListener("click", function () {
                    return e.start()
                }, {once: !0, passive: !0}), t.addEventListener("touchstart", function () {
                    return e.start()
                }, {once: !0, passive: !0}))
            }
        }, {
            key: "onWorkerError", value: function (e) {
                this.needsReInit = !0, this.e.innerHTML = a(this.opts.solutionFieldName, this.lang, "Background worker error " + e.message), this.makeButtonStart(), this.opts.forceJSFallback = !0
            }
        }, {
            key: "initWorkerGroup", value: function () {
                var e = this;
                this.workerGroup.progressCallback = function (t) {
                    c(e.e, t)
                }, this.workerGroup.readyCallback = function () {
                    e.e.innerHTML = t(e.opts.solutionFieldName, e.lang), e.makeButtonStart(), e.opts.readyCallback()
                }, this.workerGroup.startedCallback = function () {
                    e.e.innerHTML = r(e.opts.solutionFieldName, e.lang), e.opts.startedCallback()
                }, this.workerGroup.doneCallback = function (t) {
                    var n = e.handleDone(t);
                    e.opts.doneCallback(n);
                    var r = e.e.dataset.callback;
                    r && window[r](n)
                }, this.workerGroup.errorCallback = function (t) {
                    e.onWorkerError(t)
                }, this.workerGroup.init(), this.workerGroup.setupSolver(this.opts.forceJSFallback)
            }
        }, {
            key: "expire", value: function () {
                this.e.innerHTML = o(this.opts.solutionFieldName, this.lang), this.makeButtonStart()
            }
        }, {
            key: "start", value: function () {
                return new Promise(function (e, t) {
                    var r;
                    if (this.hasBeenDestroyed) return console.error("Can not start FriendlyCaptcha widget which has been destroyed"), e();
                    if (this.hasBeenStarted) return console.warn("Can not start FriendlyCaptcha widget which has already been started"), e();
                    if (this.hasBeenStarted = !0, !(r = this.opts.sitekey || this.e.dataset.sitekey)) return console.error("FriendlyCaptcha: sitekey not set on frc-captcha element"), this.e.innerHTML = a(this.opts.solutionFieldName, this.lang, "Website problem: sitekey not set", !1), e();
                    if (h()) return this.e.innerHTML = a(this.opts.solutionFieldName, this.lang, "Browser check failed, try a different browser", !1, !0), e();
                    if (this.needsReInit) return this.needsReInit = !1, this.init(!0), e();
                    var i = function () {
                        try {
                            return this.workerGroup.start(this.puzzle), e()
                        } catch (e) {
                            return t(e)
                        }
                    }.bind(this), o = function (n) {
                        try {
                            this.e.innerHTML = a(this.opts.solutionFieldName, this.lang, n.message), this.makeButtonStart();
                            var r;
                            r = "error_getting_puzzle", this.opts.errorCallback({code: r, description: n.toString(), error: n});
                            var i;
                            return i = this.e.dataset["callback-error"], i && window[i](this), e()
                        } catch (e) {
                            return t(e)
                        }
                    }.bind(this);
                    try {
                        return this.e.innerHTML = n(this.opts.solutionFieldName, this.lang), Promise.resolve(y(this.opts.puzzleEndpoint, r, this.lang)).then(function (e) {
                            var t = this;
                            try {
                                return this.puzzle = m(e), setTimeout(function () {
                                    return t.expire()
                                }, this.puzzle.expiry - 3e4), i()
                            } catch (e) {
                                return o(e)
                            }
                        }.bind(this), o)
                    } catch (e) {
                        o(e)
                    }
                }.bind(this))
            }
        }, {
            key: "handleDone", value: function (e) {
                this.valid = !0;
                var t = "".concat(this.puzzle.signature, ".").concat(this.puzzle.base64, ".").concat(f(e.solution), ".").concat(f(e.diagnostics));
                return this.e.innerHTML = i(this.opts.solutionFieldName, this.lang, t, e), this.needsReInit = !0, t
            }
        }, {
            key: "destroy", value: function () {
                this.workerGroup.terminateWorkers(), this.needsReInit = !1, this.hasBeenStarted = !1, this.e && (this.e.remove(), delete this.e), this.hasBeenDestroyed = !0
            }
        }, {
            key: "reset", value: function () {
                if (this.hasBeenDestroyed) return void console.error("FriendlyCaptcha widget has been destroyed, it can not be used anymore");
                this.workerGroup.terminateWorkers(), this.needsReInit = !1, this.hasBeenStarted = !1, this.init("auto" === this.opts.startMode || "auto" === this.e.dataset.start)
            }
        }]), e
    }();
    window.friendlyChallenge = {WidgetInstance: Z}, "loading" !== document.readyState ? w() : document.addEventListener("DOMContentLoaded", w)
}(), jQuery(function () {
    function e(e) {
        this.log = window.console.log, this.warn = window.console.warn, this.info = window.console.info, this.debug = e ? window.console.debug : function () {
        }
    }

    var t = function (e) {
        return e.replace(/\.?([A-Z])/g, function (e) {
            return "-" + e[0].toLowerCase()
        }).replace(/_/g, "-")
    }, n = function (e) {
        return e.replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase()
        }).replace(/_([a-z])/g, function (e) {
            return e[1].toUpperCase()
        })
    }, r = function (e, t, n) {
        var r = {};
        for (var i in e) if (e.hasOwnProperty(i)) {
            var o = e[i];
            o && "object" == typeof o && !Array.isArray(o) ? r[t(i)] = n(o) : r[t(i)] = o
        }
        return r
    }, i = function (e) {
        return r(e, t, i)
    }, o = function (e) {
        return r(e, n, o)
    }, a = function (e, t, n) {
        switch (e) {
            case"alert":
                var r = ["alert"].concat(t.modifiers.map(function (e) {
                    return "alert--" + e
                }));
                return jQuery('<div class="' + r.join(" ") + '"></div>').html(n)[0].outerHTML;
            default:
                throw new Error("There\xb4s no template named `" + e + "`")
        }
    }, s = function (e) {
        return ("?" === e[0] ? e.substr(1) : e).split("&").reduce(function (e, t) {
            if (0 === t.length) return e;
            var n = t.split("=");
            return e[decodeURIComponent(n[0])] = decodeURIComponent((n[1] || "").replace(/\+/g, "%20")), e
        }, {})
    }, u = function (e) {
        return Object.keys(e).map(function (t) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
        }).join("&")
    }, c = function (e, t, n, r) {
        if (isNaN(e)) throw new TypeError("Argument `number` has to be a Number but is not.");
        for (var t = isNaN(t) ? 2 : Math.abs(t), n = n == undefined ? "." : n, r = r == undefined ? "," : r, i = e < 0 ? "-" : "", o = Math.abs(e), a = String(parseInt(o.toFixed(t))), s = Math.abs(o - parseInt(o)).toFixed(t).slice(2), u = [], c = 3, l = a.length, d = Math.ceil(l / c), f = function (e) {
            return -1 * Math.min(l, e * c)
        }, p = 1; p <= d; p++) {
            var h = f(p), g = f(p - 1), A = Math.abs(h - g);
            u.unshift(a.substr(h, A))
        }
        return i + u.join(r) + n + s
    }, l = function (e) {
        var t = $.Deferred(), n = new FileReader;
        return n.readAsDataURL(e), n.onload = function () {
            t.resolve({name: e.name, type: e.type, size: e.size, uri: n.result})
        }, t.promise()
    }, d = function (e) {
        return e.serializeArray().reduce(function (n, r) {
            if (n.find(function (e) {
                return e.fieldName === r.name
            }) === undefined) {
                var i, o = e.find('[name="' + r.name + '"]:last'), a = r.name, s = o.attr("type") || o[0].tagName.toLowerCase(), u = t(/\[.*?\]/.test(r.name) ? r.name.match(/\[(.*)\]/)[1] : r.name);
                i = "number" === s || "quantity" === u ? "integer" : "checkbox" === s ? "boolean" : "string", n.push({name: u, type: i, fieldName: a, fieldType: s})
            }
            return n
        }, [])
    }, f = function (e, t) {
        t = t || d(e);
        var n = e.serializeArray(), r = {};
        return t.forEach(function (e) {
            var t = n.filter(function (t) {
                return t.name === e.fieldName
            }).pop(), i = t ? t.value : null;
            switch (e.type) {
                case"integer":
                    i = i ? parseInt(i, 10) : i;
                    break;
                case"boolean":
                    i = "1" === i
            }
            r[e.name] = i
        }), r
    };
    window.App = window.App || {}, window.App.Utils = {Logger: e, dasherize: t, camelcase: n, dasherizeKeys: i, camelcaseKeys: o, template: a, parseQueryString: s, stringifyQueryParameters: u, formatCurrency: c, getFileData: l, extractFormFields: d, extractFormFieldData: f}
}), jQuery(function () {
    function e(e) {
        this.id = e.id || null
    }

    function t(e) {
        this.status = parseInt(e.status, 10) || null, this.title = e.title || null, this.detail = e.detail || null, this.source = e.source || null
    }

    function n(e) {
        this.host = e.host || window.location.host, this.namespace = e.namespace, this.typeModelMap = {}, this.typePathMap = {}, 0 === this.host.indexOf("http") ? this.origin = this.host : this.origin = window.location.protocol + "//" + this.host, this.instantiateModelByType = function (e, t) {
            if (e in this.typeModelMap) return new this.typeModelMap[e](t);
            throw new Error("Unknown type `" + e + "`. Cannot instantiate model.")
        }, this.pluralizeType = function (e) {
            return e in this.typePathMap ? this.typePathMap[e] : e + "s"
        }
    }

    function r(e, t, n, r) {
        delete r.id, this.type = t || null, this.id = n || null, this.attributes = r || {}, this.url = e.buildUrlFor(t, n), this.method = "GET"
    }

    t.prototype.getDetailFor = function (e) {
        return this.source && "pointer" in this.source ? this.source.pointer.match(/^\/data\/attributes\/(.*)$/)[1] === e && this.detail : null
    }, n.prototype.registerType = function (e, t, n) {
        this.typeModelMap[e] = t, "path" in (n || {}) && (this.typePathMap[e] = n.path)
    }, n.prototype.buildUrlFor = function (e, t) {
        return this.origin + this.namespace + [this.pluralizeType(e), t].filter(function (e) {
            return !!e
        }).join("/")
    }, n.prototype.processResponse = function (e, n) {
        var r = $.Deferred();
        try {
            var i = JSON.parse(e);
            if (n >= 200 && n < 300) {
                var o = jQuery.extend({id: i.data.id}, i.data.attributes);
                r.resolve(this.instantiateModelByType(i.data.type, App.Utils.camelcaseKeys(o)))
            } else r.resolve(new t(App.Utils.camelcaseKeys(i.errors[0])))
        } catch (e) {
            if (!(e instanceof SyntaxError)) throw e;
            r.resolve(new t({status: 500, title: "JSON Syntax Error"}))
        }
        return r.promise()
    }, r.prototype.send = function (e) {
        var t = JSON.stringify(App.Utils.dasherizeKeys({data: {type: this.type, id: this.id, attributes: this.attributes}}));
        return $.ajax({url: this.url, type: e, data: t, dataType: "json", cache: !1, contentType: !1, processData: !1})
    }, window.App = window.App || {}, window.App.Api = {Adapter: n, Error: t, Request: r, Model: e}
}), jQuery(function () {
    function e(e, t) {
        var n = this;
        if (this.$element = e, this._isLocked = !1, this._fields = App.Utils.extractFormFields(this.$element), this._nativeSubmitFunction = this.$element[0].submit, this.config = {mappedFieldsFromQueryParameters: (t || {}).mappedFieldsFromQueryParameters || [], autoSubmit: (t || {}).autoSubmit || !1}, e.data("object", this), this.config.mappedFieldsFromQueryParameters.length > 0) {
            var r = App.Utils.parseQueryString(window.location.search);
            this.config.mappedFieldsFromQueryParameters.forEach(function (t) {
                var i = n._fields.find(function (e) {
                    return App.Utils.dasherize(t.field) === e.name
                });
                i && r.hasOwnProperty(t.parameter) && e.find('[name="' + $.escapeSelector(i.fieldName) + '"]').val(r[t.parameter])
            })
        }
        if (this._isAutoSubmittable = function () {
            return "function" == typeof this.config.autoSubmit ? this.config.autoSubmit.call(this) : this.config.autoSubmit
        }, this._submitAsSoonAsPossible = function () {
            if (e.find('button[type="submit"]').prop("disabled")) {
                var t = new MutationObserver(function (r) {
                    r.forEach(function (r) {
                        "attributes" !== r.type || "disabled" !== r.attributeName || r.target.disabled || (t.disconnect(), n._isAutoSubmittable() && e.submit())
                    })
                });
                t.observe(e.find('button[type="submit"]')[0], {attributes: !0})
            } else e.submit()
        }, this._isAutoSubmittable()) {
            var i = e.find('[data-module="captcha"]').data("object");
            i && i.start(), setTimeout(function () {
                n._submitAsSoonAsPossible()
            }, 1)
        }
        this._renderError = function (t) {
            var n = !1, r = this;
            e.find("[data-form-error]").each(function () {
                var e = $(this).attr("data-form-error"), i = t.getDetailFor(e);
                i && (n = !0, r._renderErrorMessage(e, i))
            }), n || this._renderErrorMessage("global", t.detail)
        }, this._renderErrorMessage = function (e, t) {
            0 === this.$element.find('[data-form-error="global"]').length && this.$element.prepend('<div data-form-error="global"></div>');
            var n, r = this.$element.find('[data-form-error="' + e + '"]');
            r && "global" !== e ? (n = App.Utils.template("alert", {modifiers: ["error"]}, t), r.addClass("padded-top-s1-1x").html(n)) : r && "global" === e && t ? (n = App.Utils.template("alert", {modifiers: ["error"]}, t), r.addClass("spaced-bottom-s1-1x").html(n)) : (n = App.Utils.template("alert", {modifiers: ["warning"]}, "Stay tuned! We are working on JPY support currently."), this.$element.html(n))
        }, this._clearErrors = function () {
            e.find('[data-form-error="global"]').removeClass().empty().remove(), e.find("[data-form-error]").removeClass().empty()
        }, this._buildSuccessMessage = function (e) {
            return this.$element.find('[data-message="success"]').html().replace(/\[[^\]]*\]/gi, function (t) {
                var n = t.match(/\[(.*)\]/)[1].toLowerCase();
                return e[n] || ""
            })
        }, this._renderSuccess = function (e, t) {
            if (t = t || this._buildSuccessMessage(e), t.trim().length > 0) {
                var n = App.Utils.template("alert", {modifiers: ["success"]}, t);
                this.$element.html(n)
            }
        }
    }

    e.prototype.submit = function () {
        throw new Error("NotImplementedError")
    }, e.prototype.lock = function () {
        this._isLocked = !0, this.$element.find("input, textarea, select, button").each(function () {
            $(this).prop("disabled", !0)
        })
    }, e.prototype.unlock = function () {
        this._isLocked = !1, this.$element.find("input, textarea, select, button").each(function () {
            $(this).prop("disabled", !1)
        })
    }, e.prototype.preventSubmission = function () {
        this.$element[0].submit = function () {
        }, this.$element.find('button[type="submit"]').prop("disabled", !0)
    }, e.prototype.allowSubmission = function () {
        this.$element[0].submit = this._nativeSubmitFunction, this.$element.find('button[type="submit"]').prop("disabled", !1)
    }, e.prototype.updateFields = function () {
        this._fields = App.Utils.extractFormFields(this.$element)
    }, window.App = window.App || {}, window.App.Form = e
}), jQuery(function () {
    function e(e) {
        this.$element = e, this.widget = null, this.solution = null, this._currentStatus = null, e.data("object", this), e.addClass("frc-captcha");
        var t = e.closest("form"), n = t.length > 0 ? t.data("object") : null, r = t[0].submit;
        this._preventFormSubmission = function () {
            0 !== t.length && (n ? n.preventSubmission() : (t[0].submit = function () {
            }, t.find('button[type="submit"]').prop("disabled", !0)))
        }, this._allowFormSubmission = function () {
            0 !== t.length && (n ? n.allowSubmission() : (t[0].submit = r, t.find('button[type="submit"]').prop("disabled", !1)))
        }, this._updateFormFields = function () {
            0 !== t.length && t.data("object") && t.data("object").updateFields()
        }
    }

    var t = window.CAPTCHA_FORM_ENV;
    e.prototype.build = function () {
        var e = this, n = this.$element;
        this._preventFormSubmission(), this.widget = new friendlyChallenge.WidgetInstance(n[0], {
            puzzleEndpoint: t.API_HOST + t.API_NAMESPACE + "captcha-puzzle", sitekey: "0", startMode: n.attr("data-autostart") !== undefined ? "auto" : "focus", solutionFieldName: n.attr("data-fieldname") || "frc-captcha-solution", readyCallback: function () {
                e._currentStatus = "ready", e._updateFormFields()
            }, startedCallback: function () {
                e._currentStatus = "started"
            }, doneCallback: function (t) {
                e._currentStatus = "done", e.solution = t, e._allowFormSubmission()
            }, errorCallback: function () {
                e._currentStatus = "failed"
            }
        })
    }, e.prototype.start = function () {
        var e = this;
        this.widget && "ready" !== this._currentStatus ? this.widget.start() : setTimeout(function () {
            e.start()
        }, 10)
    }, e.prototype.destroy = function () {
        this.widget.destroy(), this.solution = null, this.$element.removeClass("frc-captcha"), this._preventFormSubmission(), $element.data("object", undefined)
    }, $('[data-module="captcha"]').each(function () {
        var t = $(this);
        if (t.data("object") === undefined) {
            new e(t).build()
        }
    })
}), jQuery(function () {
    var e = function (e, t) {
        var n = e.toArray().map(function (e) {
            return e.hash
        }), r = n.indexOf(t);
        e.removeClass("is-active").filter(":eq(" + Math.max(0, r) + ")").addClass("is-active"), n.forEach(function (e, t) {
            Math.max(0, r) === t ? $('[data-role="tab-content"]' + e).addClass("is-active") : $('[data-role="tab-content"]' + e).removeClass("is-active")
        })
    }, t = function () {
        $('[data-module="tabs"]').each(function () {
            var t = $(this).find('[data-role="tab"]'), n = window.location.hash;
            e(t, n), $(this).trigger("tabs.change", {active: n})
        })
    };
    $('[data-module="tabs"]').on("click", '[data-role="tab"]:not(.is-active)', function (t) {
        t.preventDefault();
        var n = $(this).closest('[data-module="tabs"]').find('[data-role="tab"]'), r = this.hash;
        window.history.pushState ? window.history.pushState(null, null, r) : window.location.hash = r, e(n, r), $(this).closest('[data-module="tabs"]').trigger("tabs.change", {active: r})
    }), $(window).on("hashchange popstate", function () {
        t()
    }), t()
}), jQuery(function () {
    var e = function () {
        var e = window.navigator.userAgent, t = window.navigator.platform, n = {macos: ["Macintosh", "MacIntel", "MacPPC", "Mac68K"], windows: ["Win32", "Win64", "Windows", "WinCE"], ios: ["iPhone", "iPad", "iPod"]};
        return -1 !== n.macos.indexOf(t) ? "macOS" : -1 !== n.ios.indexOf(t) ? null : -1 !== n.windows.indexOf(t) ? "Windows" : /Android/.test(e) ? null : /Linux/.test(t) ? "Linux" : null
    };
    $('[data-module="platform-highlighting"]').each(function () {
        var t = e();
        $(this).find('[data-platform="' + t + '"]').length > 0 && $(this).find("[data-platform]").each(function () {
            var e = $(this);
            e.attr("data-platform") === t ? e.hasClass("button") && e.removeClass("button--outlined").addClass("button--filled") : e.hasClass("button") && e.removeClass("button--filled").addClass("button--outlined")
        })
    })
}), jQuery(function () {
    function e(e) {
        e = e || {}, s.Api.Model.call(this, e), this.productId = e.productId || null, this.parameters = e.parameters || {}, this.priceTags = e.priceTags || [], this.notifications = e.notifications || []
    }

    function t(e) {
        e = e || {}, s.Api.Model.call(this, e), this.productId = e.productId || null, this.parameters = e.parameters || {}, this.uriType = e.uriType || null, this.uri = e.uri || null
    }

    function n(e) {
        this.$element = e, this.productId = e.attr("data-product-id"), this.checkoutType = e.attr("data-checkout-type"), this.primaryCheckoutType = this.checkoutType.split(".")[0], this.configurationId = null, this.latestParameters = null, this.defaultParameters = null, this.configurableParameters = s.Utils.extractFormFields(this.$element), this.persistableQueryParameters = ["cc"], this._eventCallbacks = {}, this._isLocked = !1, e.data("object", this), e.find('a[data-callback="reflect-query-parameters"]').toArray().forEach(function (t) {
            var n = e.data("object");
            n.bindEvent("did-update", function () {
                var e = n._asQueryParameters(n.latestParameters);
                t.search = s.Utils.stringifyQueryParameters(e)
            })
        }), this._invokeEventCallbacks = function (e) {
            e in this._eventCallbacks && this._eventCallbacks[e].forEach(function (e) {
                e()
            })
        }, this._initializeFromQueryParameters = function (e) {
            var t = $.Deferred();
            if ("license" in e && !decodeURIComponent(e.license).match(/^data:[^;]*(;base64)?,.+/)) {
                var n = this, r = decodeURIComponent(e.license), i = new Blob([r], {type: "text/plain"});
                s.Utils.getFileData(i).then(function (r) {
                    e.license = r.uri, n._updateParameters(e), t.resolve()
                })
            } else this._updateParameters(e), t.resolve();
            return t.promise()
        }, this._updateParameters = function (e) {
            var t = this.$element;
            e = s.Utils.dasherizeKeys(e), this.configurableParameters.forEach(function (n) {
                if (e.hasOwnProperty(n.name)) {
                    var r = t.find('[name="' + n.fieldName + '"]'), i = r.filter(":last"), o = e[n.name];
                    switch (n.fieldType) {
                        case"checkbox":
                            var a = "boolean" == typeof o ? o : parseInt(o, 0);
                            i[0].checked = a;
                            break;
                        case"radio":
                            r.filter('[value="' + o + '"]')[0].checked = !0;
                            break;
                        default:
                            i.val(o)
                    }
                    -1 !== n.name.indexOf("license") && o ? r.closest('[data-module="license-dropzone"]').addClass("is-success") : -1 !== n.name.indexOf("coupon") && o && r.closest('[data-module="coupon-code"]').find("input").trigger("blur")
                }
            })
        }, this._updateNotifications = function (e) {
            this.$element.find("[data-notification]").toArray().map(function (t) {
                var n = $(t), r = s.Utils.dasherize(n.attr("data-notification")), i = e.find(function (e) {
                    return r === e.id
                }) || {};
                return {$element: n, id: r, type: i.type, message: i.message}
            }).forEach(function (e) {
                if (e.message) {
                    var t = s.Utils.template("alert", {modifiers: ["text-only", e.type]}, e.message);
                    e.$element.html(t)
                } else e.$element.empty()
            })
        }, this._updatePriceTags = function (e, t, n) {
            var r = this.configurableParameters.find(function (e) {
                return "currency" === e.name
            }), i = this.$element.find('input[name="' + r.fieldName + '"][value="' + t + '"]'), a = i.attr("data-label") || t, u = o[n];
            this.$element.find("[data-price-tag]").toArray().map(function (t) {
                var n = $(t), r = s.Utils.dasherize(n.attr("data-price-tag")), i = e.find(function (e) {
                    return r === e.id
                }) || {};
                return {$element: n, id: r, price: i.price, regularPrice: i["price-regular"], currency: a}
            }).forEach(function (e) {
                var t = e.$element, n = t.parent().find(".is-striked"), r = function (e, t, n) {
                    var r = [t, n].filter(function (e) {
                        return !!e
                    }).join(" / ");
                    return ["<span>" + s.Utils.formatCurrency(e, 0, "") + "</span>", "<span>" + r + "</span>"].join("")
                };
                e.price ? t.html(r(e.price, e.currency, u)) : t.empty(), e.regularPrice && e.regularPrice !== e.price ? (0 === n.length && (n = t.clone().empty().removeAttr("data-price-tag").addClass("is-striked").insertAfter(t)), n.html(r(e.regularPrice, e.currency, u))) : 0 !== n.length && n.remove()
            })
        }, this._stringifyParameterValue = function (e, t) {
            switch (e) {
                case"integer":
                    t = "" + t;
                    break;
                case"boolean":
                    t = !0 === t ? "1" : "0"
            }
            return t
        }, this._asQueryParameters = function (e) {
            e = s.Utils.dasherizeKeys(e);
            var t = {}, n = this;
            return this.configurableParameters.forEach(function (r) {
                var i = r.name;
                t[i] = n._stringifyParameterValue(r.type, e[i])
            }), t
        }, this._updateQueryString = function (e) {
            this.latestParameters = s.Utils.dasherizeKeys(e);
            var t = this._asQueryParameters(e), n = this.defaultParameters, r = this;
            this.configurableParameters.forEach(function (e) {
                var i = e.name, o = t[i], a = r._stringifyParameterValue(e.type, n[i]), s = o === a, u = [undefined, null, NaN].includes(o) || "string" == typeof o && 0 === o.trim().length;
                (s || u) && delete t[i]
            });
            var i = s.Utils.parseQueryString(window.location.search);
            if (this.persistableQueryParameters.forEach(function (e) {
                i[e] && (t[e] = i[e])
            }), window.history.replaceState) {
                var o = s.Utils.stringifyQueryParameters(t);
                o = o.length > 0 ? "?" + o : o;
                var a = window.location.pathname + o + window.location.hash;
                window.history.replaceState(null, null, a)
            } else window.location.search = s.Utils.stringifyQueryParameters(t)
        }, this._checkout = function (e) {
            var t = this, n = u.instantiateModelByType("checkout-request", {productId: this.productId, parameters: jQuery.extend({checkoutType: this.primaryCheckoutType}, s.Utils.extractFormFieldData(this.$element, this.configurableParameters)), uriType: e}), r = new s.Api.Request(u, "checkout-request", null, n);
            this.lock(), r.send("post").always(function () {
                t.unlock()
            }).done(function (e, n, r) {
                u.processResponse(r.responseText, r.status).then(function (e) {
                    a.debug("PROCESS_RESPONSE", {product: t.productId, checkoutType: t.checkoutType, status: r.status, raw: r.responseText, processed: e}), window.location.href = e.uri
                })
            }).fail(function (e) {
                u.processResponse(e.responseText, e.status).then(function (n) {
                    switch (a.debug("PROCESS_RESPONSE", {product: t.productId, checkoutType: t.checkoutType, status: e.status, raw: e.responseText, processed: n}), n.status) {
                        case 400:
                        case 404:
                        case 500:
                        default:
                            var r = s.Utils.template("alert", {modifiers: ["warning"]}, "Stay tuned! We are working on JPY support currently.");
                            t.$element.html(r)
                    }
                })
            })
        }
    }

    var r = jQuery.extend({}, {CONFIGURATION_EXPIRES_AFTER: 86400, LICENSE_SIZE_LIMIT: 5e4, ENABLE_DEBUGGING: !1}, window.PURCHASE_FORM_ENV), i = [{updates: "1y", support: "90d"}, {updates: "1y", support: "1y"}, {updates: "2y", support: "2y"}, {updates: "3y", support: "3y"}, {updates: "lifetime", support: "90d"}, {updates: "lifetime", support: "1y"}, {updates: "lifetime", support: "2y"}, {updates: "lifetime", support: "3y"}], o = {daily: "day", weekly: "week", monthly: "month", quarterly: "quarter", yearly: "year"}, a = {
        log: window.console.log, warn: window.console.warn, info: window.console.info, debug: r.ENABLE_DEBUGGING ? window.console.debug : function () {
        }
    }, s = window.App, u = new s.Api.Adapter({host: r.API_HOST, namespace: r.API_NAMESPACE});
    e.prototype = Object.create(s.Api.Model.prototype), u.registerType("product-configuration", e), t.prototype = Object.create(s.Api.Model.prototype), u.registerType("checkout-request", t), n.prototype.initialize = function () {
        a.debug("INITIALIZE", {product: this.productId, checkoutType: this.checkoutType});
        var e = this;
        this.defaultParameters = s.Utils.extractFormFieldData(this.$element, this.configurableParameters), this.latestParameters = this.defaultParameters, this.configurationId = c.find(this.productId, this.checkoutType), this._initializeFromQueryParameters(s.Utils.parseQueryString(window.location.search)).then(function () {
            e.update()
        })
    }, n.prototype.update = function (e) {
        if (!this._isLocked) {
            a.debug("UPDATE", {product: this.productId, checkoutType: this.checkoutType}), this._invokeEventCallbacks("will-update"), e = e || {};
            var t = this, n = u.instantiateModelByType("product-configuration", s.Utils.camelcaseKeys({id: this.configurationId, productId: this.productId, parameters: jQuery.extend({checkoutType: this.primaryCheckoutType}, s.Utils.extractFormFieldData(this.$element, this.configurableParameters))})), r = new s.Api.Request(u, "product-configuration", n.id, n), i = this.configurationId ? "PUT" : "POST";
            this.lock(), r.send(i).always(function () {
                t.unlock(), "function" == typeof e.always && e.always.apply(this, arguments)
            }).done(function (n, r, i) {
                u.processResponse(i.responseText, i.status).then(function (e) {
                    a.debug("PROCESS_RESPONSE", {product: t.productId, checkoutType: t.checkoutType, status: i.status, raw: i.responseText, processed: e}), c.persist(t.productId, t.checkoutType, e.id), t.configurationId = e.id, t._updateParameters(e.parameters), t._updatePriceTags(e.priceTags, e.parameters.currency, e.parameters.billingInterval), t._updateNotifications(e.notifications), t._updateQueryString(e.parameters), t._invokeEventCallbacks("did-update")
                }), "function" == typeof e.done && e.done.apply(this, arguments)
            }).fail(function (n) {
                u.processResponse(n.responseText, n.status).then(function (r) {
                    switch (a.debug("PROCESS_RESPONSE", {product: t.productId, checkoutType: t.checkoutType, status: n.status, raw: n.responseText, processed: r}), r.status) {
                        case 404:
                            "PUT" === i && (c.persist(t.productId, t.checkoutType, null), t.configurationId = null, t.update(e));
                            break;
                        case 400:
                            if (r.detail) {
                                var o = s.Utils.template("alert", {modifiers: ["error"]}, r.detail);
                                t.$element.html(o);
                                break
                            }
                        case 500:
                        default:
                            var o = s.Utils.template("alert", {modifiers: ["warning"]}, "Stay tuned! We are working on JPY support currently.");
                            t.$element.html(o)
                    }
                    t._invokeEventCallbacks("did-update")
                }), "function" == typeof e.fail && e.fail.apply(this, arguments)
            })
        }
    }, n.prototype.lock = function () {
        a.debug("LOCK", {product: this.productId, checkoutType: this.checkoutType}), this._isLocked = !0, this.$element.find('input[data-update-on="change"], .button[data-action], [data-module="license-dropzone"], [data-module="coupon-code"]').each(function () {
            $(this).is(".is-disabled") && $(this).data("unlockCallback", function (e) {
                e.addClass("is-disabled")
            }), $(this).is("[disabled]") && $(this).data("unlockCallback", function (e) {
                e.prop("disabled", !0)
            }), $(this).addClass("is-disabled").prop("disabled", !0)
        })
    }, n.prototype.unlock = function () {
        a.debug("UNLOCK", {product: this.productId, checkoutType: this.checkoutType}), this._isLocked = !1, this.$element.find('input[data-update-on="change"], .button[data-action], [data-module="license-dropzone"], [data-module="coupon-code"]').each(function () {
            $(this).removeClass("is-disabled").prop("disabled", !1), "function" == typeof $(this).data("unlockCallback") && ($(this).data("unlockCallback")($(this)), $(this).removeData("unlockCallback"))
        })
    }, n.prototype.requestQuote = function () {
        a.debug("REQUEST_QUOTE", {product: this.productId, checkoutType: this.checkoutType}), this._checkout("quote")
    }, n.prototype.purchase = function () {
        a.debug("PURCHASE", {product: this.productId, checkoutType: this.checkoutType}), this._checkout("purchase")
    }, n.prototype.reset = function () {
        this._updateQueryString(this.defaultParameters), c.clear(this.productId, this.checkoutType), window.location.reload()
    }, n.prototype.bindEvent = function (e, t) {
        return a.debug("BIND_EVENT", {product: this.productId, checkoutType: this.checkoutType}), e in this._eventCallbacks ? this._eventCallbacks[e].push(t) : this._eventCallbacks[e] = [t], this
    }, n.prototype.unbindEvent = function (e, t) {
        if (a.debug("UNBIND_EVENT", {product: this.productId, checkoutType: this.checkoutType}), !(e in this._eventCallbacks)) return this;
        if (t) {
            var n = this._eventCallbacks[e].indexOf(t);
            this._eventCallbacks[e].splice(n, 1)
        } else delete this._eventCallbacks[e];
        return this
    };
    var c = {};
    c.find = function (e, t) {
        if (!("localStorage" in window)) return null;
        var n = JSON.parse(window.localStorage.getItem(e + ":" + t));
        if (!n) return null;
        if (n.hasOwnProperty("updatedAt")) {
            if (Math.round(((new Date).getTime() - Date.parse(n.updatedAt)) / 1e3) > r.CONFIGURATION_EXPIRES_AFTER) return c.clear(e, t), null
        }
        return n.data
    }, c.persist = function (e, t, n) {
        if ("localStorage" in window) {
            var r = JSON.stringify({data: n, updatedAt: new Date});
            window.localStorage.setItem(e + ":" + t, r)
        }
    }, c.clear = function (e, t) {
        "localStorage" in window && window.localStorage.removeItem(e + ":" + t)
    };
    var l = function (e) {
        var t = e.find('[data-module="coupon-code"]');
        e.data("object").bindEvent("did-update", function () {
            var e = t.find("input").val();
            0 === $.trim(e).length ? t.removeClass("is-accepted") : t.addClass("is-accepted")
        }), t.on("input focus blur", "input", function (e) {
            var n = t.find("button"), r = $(this).val();
            "input" === e.type && t.removeClass("is-accepted"), n.prop("disabled", 0 === $.trim(r).length)
        }), t.on("click", "button[data-action]", function (e) {
            switch (e.preventDefault(), $(this).attr("data-action")) {
                case"check-coupon-code":
                    break;
                case"reset-coupon-code":
                    t.find("input").val("")
            }
            t.find("button").prop("disabled", !0), t.closest('[data-module="purchase-form"]').data("object").update({
                always: function () {
                    t.removeClass("is-processing")
                }, fail: function () {
                    t.addClass("is-error")
                }, done: function () {
                    t.addClass("is-success")
                }
            })
        })
    }, d = function (e) {
        var t = e.find('[data-module="license-dropzone"]'), n = t.find('[data-role="fullscreen-ghost"]'), i = function (e, t) {
            s.Utils.getFileData(e).then(function (e) {
                t.hasClass("is-processing") || e.size > r.LICENSE_SIZE_LIMIT || (t.removeClass("is-error is-success").addClass("is-processing"), t.find('input[type="hidden"]:first').val(e.uri), t.trigger("dropzone.fileChange"))
            })
        }, o = function (e, t) {
            e.on("drag dragstart dragend dragover dragenter dragleave drop", function (e) {
                e.preventDefault(), e.stopPropagation()
            }).on("dragover dragenter", function () {
                $(this).addClass("is-dragover")
            }).on("dragleave dragend drop", function () {
                $(this).removeClass("is-dragover")
            }).on("drop", t || function () {
            })
        };
        o(t, function (e) {
            var t = e.originalEvent.dataTransfer.files, n = $(this);
            i(t[0], n)
        }), n.length > 0 && ($("body").append(n), $("body").on("dragenter", function () {
            n.addClass("is-dragover")
        }), o(n, function (e) {
            var n = e.originalEvent.dataTransfer.files;
            t.closest(".collapsible.collapsible--collapsed").find('[data-action="toggle-collapsible"]').trigger("click"), i(n[0], t)
        })), t.on("change", 'input[type="file"]', function () {
            var e = this.files, t = $(this).closest('[data-module="license-dropzone"]');
            if (t.is(".is-success") || t.is(".is-error")) return !1;
            i(e[0], t)
        }), t.on("dropzone.fileChange", function () {
            var e = $(this);
            e.closest('[data-module="purchase-form"]').data("object").update({
                always: function () {
                    e.removeClass("is-processing")
                }, fail: function () {
                    e.addClass("is-error")
                }, done: function () {
                    e.addClass("is-success")
                }
            })
        }), t.on("click", '[data-action="reset-dropzone"]', function () {
            var e = $(this).closest('[data-module="license-dropzone"]');
            e.find('input[type="hidden"]:first').val(""), e.closest('[data-module="purchase-form"]').data("object").update({
                always: function () {
                    e.removeClass("is-success is-error is-processing")
                }
            })
        })
    }, f = function (e) {
        var t = e.find('[data-role~="form-section"].collapsible'), n = t.has('[data-module="license-dropzone"]');
        0 !== n.length && 0 !== t.length && e.data("object").bindEvent("did-update", function () {
            e.data("object").latestParameters.license ? (t.removeClass("collapsible--collapsed"), n.addClass("collapsible--collapsed")) : (t.addClass("collapsible--collapsed"), n.removeClass("collapsible--collapsed"))
        })
    }, p = function (e) {
        var t = e.find('[data-role~="form-section"]'), n = t.has('[data-module="coupon-code"]');
        0 !== n.length && e.data("object").bindEvent("did-update", function () {
            var t = e.data("object").latestParameters;
            if ("1" == s.Utils.parseQueryString(window.location.search).cc || 0 !== (t["coupon-code"] || "").length ? n.removeClass("hidden") : n.addClass("hidden"), t["coupon-type"]) {
                var r = n.find('[data-dynamic-label="coupon-type"]');
                switch (t["coupon-type"]) {
                    case"reseller":
                        r.text(r.attr("data-label-reseller"));
                        break;
                    case"code":
                        r.text(r.attr("data-label-code"))
                }
            }
        })
    };
    window.setupPurchaseForm = function (e) {
        if (e.data("object") === undefined) {
            var t = function (e, t, n, r) {
                var i = e.find('[name$="[' + n + ']"]'), o = e.find('[name$="[' + t + ']"]:checked').val(), a = r.filter(function (e) {
                    return e[t] === o
                }).map(function (e) {
                    return e[n]
                });
                i.each(function () {
                    var e = $(this).val(), t = -1 !== a.indexOf(e);
                    $(this).prop("disabled", !t)
                }), i.filter("[disabled]:checked").length > 0 && i.filter(":not([disabled]):last").prop("checked", !0)
            }, r = function () {
                var n = $(this);
                n.is("[data-min]") && n.val(Math.max(n.val(), parseInt(n.attr("data-min"), 10))), n.is("[data-max]") && n.val(Math.min(n.val(), parseInt(n.attr("data-max"), 10))), -1 !== n.attr("name").indexOf("[updates]") && n.is(":checked") && t(e, "updates", "support", i), $(this).closest('[data-module="purchase-form"]').data("object").update()
            }, o = function (e) {
                switch (e.preventDefault(), $(this).attr("data-action")) {
                    case"request-purchase":
                        $(this).closest('[data-module="purchase-form"]').data("object").purchase();
                        break;
                    case"request-quote":
                        $(this).closest('[data-module="purchase-form"]').data("object").requestQuote()
                }
            };
            e.on("change", 'input[data-update-on="change"]', r), e.on("click", "[data-action]", o);
            var a = new n(e);
            l(e), d(e), f(e), p(e), a.bindEvent("did-update", function () {
                t(e, "updates", "support", i)
            }), a.initialize()
        }
    }, function (e) {
        var t = null !== e.pathname.match(/\/(cn|\/)?smartgit\/purchase\/?/), n = null !== e.search.match(/license=[^&]+/), r = e.hash.length > 0;
        t && !r && n && (e.hash = "#upgrade")
    }(window.location), $('[data-module="purchase-form"]').each(function () {
        var e = $(this), t = e.closest('[data-module="tabs"]').length > 0;
        e.is(":visible") && setupPurchaseForm(e), t && e.closest('[data-module="tabs"]').on("tabs.change", function (t, n) {
            e.closest('[data-role="tab-content"]').is(n.active) && setupPurchaseForm(e)
        })
    })
}), jQuery(function () {
    function e(e) {
        e = e || {}, r.Api.Model.call(this, e), this.name = e.name || null, this.email = e.email || null, this.captchaSolution = e.captchaSolution || null, this.type = e.type || null, this.locale = e.locale || null, this.openSourceVerificationType = e.openSourceVerificationType || null, this.openSourceGithubCode = e.openSourceGithubCode || null, this.openSourceProfileUrl = e.openSourceProfileUrl || null, this.openSourceRepositoryUrl = e.openSourceRepositoryUrl || null, this.academicUserType = e.academicUserType || null, this.charityOrganizationUrl = e.charityOrganizationUrl || null, this.charityType = e.charityType || null, this.customType = e.customType || null, this.customData = e.customData || null, this.notes = e.notes || null, this.successMessage = e.successMessage || null
    }

    function t(e) {
        r.Form.call(this, e, {mappedFieldsFromQueryParameters: [{field: "name", parameter: "name"}, {field: "email", parameter: "email"}, {field: "openSourceGithubCode", parameter: "code"}, {field: "captchaSolution", parameter: "state"}, {field: "customType", parameter: "custom-type"}, {field: "customData", parameter: "custom-data"}]});
        var t = r.Utils.camelcaseKeys(r.Utils.extractFormFieldData(this.$element, this._fields));
        t.openSourceGithubCode && t.captchaSolution && (e.find('[data-module="captcha"]').remove(), this.submit()), this.locale = window.navigator.language
    }

    var n = jQuery.extend({}, {ENABLE_DEBUGGING: !1}, window.REGISTRATION_FORM_ENV), r = window.App, i = new r.Utils.Logger(n.ENABLE_DEBUGGING), o = new r.Api.Adapter({host: n.API_HOST, namespace: n.API_NAMESPACE});
    e.prototype = Object.create(r.Api.Model.prototype), o.registerType("registration", e), t.prototype = Object.create(r.Form.prototype), t.prototype.submit = function () {
        if (!this._isLocked) {
            var e = this, t = o.instantiateModelByType("registration", jQuery.extend({locale: this.locale}, r.Utils.camelcaseKeys(r.Utils.extractFormFieldData(this.$element, this._fields)))), n = new r.Api.Request(o, "registration", null, t);
            if (this._clearErrors(), this.lock(), "non-commercial:open-source" === t.type && "github" === t.openSourceVerificationType && !t.openSourceGithubCode) return i.debug("START_GITHUB_VERIFICATION", {type: t.type, model: t}), void (window.location.href = "https://github.com/login/oauth/authorize?" + r.Utils.stringifyQueryParameters({client_id: "e20a434c25aa4b349da2", scope: "user:email", redirect_uri: "https://www.syntevo.com/register-non-commercial/#open-source", state: t.captchaSolution}));
            "non-commercial:open-source" === t.type && "github" === t.openSourceVerificationType && t.openSourceGithubCode && i.debug("FINISH_GITHUB_VERIFICATION", {type: t.type, model: t}), n.send("post").always(function () {
                e.unlock()
            }).done(function (n, r, a) {
                o.processResponse(a.responseText, a.status).then(function (n) {
                    i.debug("PROCESS_RESPONSE", {type: t.type, status: a.status, raw: a.responseText, processed: n}), e._renderSuccess(t, n.successMessage)
                })
            }).fail(function (n) {
                o.processResponse(n.responseText, n.status).then(function (r) {
                    i.debug("PROCESS_RESPONSE", {type: t.type, status: n.status, raw: n.responseText, processed: r}), e._renderError(r)
                })
            })
        }
    }, $('[data-module="registration-form"]').each(function () {
        var e = $(this);
        if (e.data("object") === undefined) {
            var n = new t(e);
            e.on("submit", function (e) {
                e.preventDefault(), n.submit()
            })
        }
    })
}), jQuery(function () {
    function e(e) {
        e = e || {}, r.Api.Model.call(this, e), this.email = e.email || null, this.captchaSolution = e.captchaSolution || null
    }

    function t(e) {
        r.Form.call(this, e, {mappedFieldsFromQueryParameters: [{field: "email", parameter: "email"}]});
        var t = (r.Utils.extractFormFieldData(this.$element, this._fields).email || "").trim().length > 0, n = e.find('[data-module="captcha"]').data("object");
        t && n && n.start()
    }

    var n = jQuery.extend({}, {ENABLE_DEBUGGING: !1}, window.UNSUBSCRIBE_FORM_ENV), r = window.App, i = new r.Utils.Logger(n.ENABLE_DEBUGGING), o = new r.Api.Adapter({host: n.API_HOST, namespace: n.API_NAMESPACE});
    e.prototype = Object.create(r.Api.Model.prototype), o.registerType("subscription", e, {path: "unsubscribe"}), t.prototype = Object.create(r.Form.prototype), t.prototype.submit = function () {
        if (!this._isLocked) {
            var e = this, t = o.instantiateModelByType("subscription", r.Utils.camelcaseKeys(r.Utils.extractFormFieldData(this.$element, this._fields))), n = new r.Api.Request(o, "subscription", null, t);
            this._clearErrors(), this.lock(), n.send("post").always(function () {
                e.unlock()
            }).done(function (n, r, a) {
                o.processResponse(a.responseText, a.status).then(function (n) {
                    i.debug("PROCESS_RESPONSE", {status: a.status, raw: a.responseText, processed: n}), e._renderSuccess(t)
                })
            }).fail(function (t) {
                o.processResponse(t.responseText, t.status).then(function (n) {
                    i.debug("PROCESS_RESPONSE", {status: t.status, raw: t.responseText, processed: n}), e._renderError(n)
                })
            })
        }
    }, $('[data-module="unsubscribe-form"]').each(function () {
        var e = $(this);
        if (e.data("object") === undefined) {
            var n = new t(e);
            e.on("submit", function (e) {
                e.preventDefault(), n.submit()
            })
        }
    })
}), jQuery(function () {
    function e(e) {
        e = e || {}, r.Api.Model.call(this, e);
        var t = this;
        a.forEach(function (n) {
            t[n.field] = e[n.field] || null
        }), this.captchaSolution = e.captchaSolution || null, this.successMessage = e.successMessage || null, this.activationCertificate = e.activationCertificate || null
    }

    function t(e) {
        this.successMarkup = e.find('[data-role="success-content"]').html(), r.Form.call(this, e, {mappedFieldsFromQueryParameters: a, autoSubmit: !0})
    }

    var n = jQuery.extend({}, {
        ENABLE_DEBUGGING: !1
    }, window.EVALUATION_FORM_ENV), r = window.App, i = new r.Utils.Logger(n.ENABLE_DEBUGGING), o = new r.Api.Adapter({host: n.API_HOST, namespace: n.API_NAMESPACE}), a = [{field: "input", parameter: "input"}, {field: "product", parameter: "product"}];
    e.prototype = Object.create(r.Api.Model.prototype), o.registerType("evaluation", e, {path: "evaluations"}), t.prototype = Object.create(r.Form.prototype), t.prototype.submit = function () {
        if (!this._isLocked) {
            var e = this, t = o.instantiateModelByType("evaluation", r.Utils.camelcaseKeys(r.Utils.extractFormFieldData(this.$element, this._fields))), n = new r.Api.Request(o, "evaluation", null, t);
            this._clearErrors(), this.lock(), n.send("post").always(function () {
                e.unlock()
            }).done(function (n, r, a) {
                o.processResponse(a.responseText, a.status).then(function (n) {
                    i.debug("PROCESS_RESPONSE", {status: a.status, raw: a.responseText, processed: n}), e._renderSuccess(t, n.successMessage), e.$element.append(e.successMarkup).find('[data-role="activation-certificate"]').text(n.activationCertificate)
                })
            }).fail(function (t) {
                o.processResponse(t.responseText, t.status).then(function (n) {
                    i.debug("PROCESS_RESPONSE", {status: t.status, raw: t.responseText, processed: n}), e._renderError(n)
                })
            })
        }
    }, $('[data-module="evaluation-form"]').each(function () {
        var e = $(this);
        if (e.data("object") === undefined) {
            var n = new t(e);
            e.on("submit", function (e) {
                e.preventDefault(), n.submit()
            })
        }
    })
}), jQuery(function () {
    function e(e) {
        r.Form.call(this, e, {}), this.productId = e.attr("data-product-id"), this._validate = function (t) {
            var n = !1, r = e.find('[data-message="error-usage"]').html().trim();
            return !t["usage-work"] && !t["usage-home"] && r.length > 0 ? this._renderErrorMessage("global", r) : n = !0, n
        }, this._process = function (e) {
            !e["usage-home"] || e["usage-work"] || e["upgrading-manually"] || e["releases-stable"] ? this._proceedWithPurchase(e) : this._proceedWithRegistration(e)
        }, this._proceedWithRegistration = function (e) {
            $('[data-role="wizard-section"]').remove();
            var t = $('[data-role="registration-section"]');
            t.removeClass("hidden"), this._showConditionalMessages(t, e)
        }, this._proceedWithPurchase = function (e) {
            $('[data-role="wizard-section"]').remove();
            var t = $('[data-role="purchase-section"]');
            t.removeClass("hidden"), this._showConditionalMessages(t, e), $('[data-module="purchase-form"]').each(function () {
                var e = $(this);
                e.is(":visible") && setupPurchaseForm(e)
            })
        }, this._showConditionalMessages = function (e, t) {
            var n = this.$element.find('[data-role="conditional-message"]'), i = n.map(function () {
                var e = $(this).attr("data-conditions");
                return {
                    markup: $(this).html(), conditions: e.split(" ").map(function (e) {
                        var t = e.split(":");
                        return {key: r.Utils.dasherize(t[0]), value: "checked" === t[1]}
                    })
                }
            }).toArray(), o = i.sort(function (e, t) {
                return Math.max(Math.min(t.conditions.length - e.conditions.length, 1), -1)
            }).find(function (e) {
                return e.conditions.every(function (e) {
                    return t[e.key] === e.value
                })
            });
            if (o) {
                var a = r.Utils.template("alert", {modifiers: ["notice"]}, o.markup);
                e.find('[data-role="conditional-message-placeholder"]').removeClass("hidden").html(a)
            }
        }
    }

    var t = jQuery.extend({}, {ENABLE_DEBUGGING: !1}, window.REGISTRATION_WIZARD_ENV), n = {
        log: window.console.log, warn: window.console.warn, info: window.console.info, debug: t.ENABLE_DEBUGGING ? window.console.debug : function () {
        }
    }, r = window.App;
    e.prototype = Object.create(r.Form.prototype), e.prototype.submit = function () {
        if (!this._isLocked) {
            n.debug("SUBMIT");
            var e = r.Utils.extractFormFieldData(this.$element, this._fields);
            this._clearErrors(), this.lock(), this._validate(e) && this._process(e), this.unlock()
        }
    }, $('[data-module="registration-wizard"]').each(function () {
        var t = $(this);
        if (t.data("object") === undefined) {
            var n = new e(t);
            t.on("submit", function (e) {
                e.preventDefault(), n.submit()
            })
        }
    })
}), jQuery(function () {
    $('[data-module="youtube-video"]').each(function () {
        if (!($(this).find("iframe").length > 0)) {
            var e = $(this).attr("data-video-id"), t = function (e, t, n) {
                var r = ["autoplay=" + (n ? 1 : 0), "autohide=1", "modestbranding=1", "rel=0", "showinfo=0"], i = "//www.youtube.com/embed/" + t + "?" + r.join("&");
                e.addClass("is-embedded"), e.append('<iframe src="' + i + '" width="640" height="360" frameborder="0" allowfullscreen></iframe>')
            };
            0 !== $(this).find('[data-role="video-poster"]').length ? ($(this).on("click", "a", function (e) {
                e.preventDefault()
            }), $(this).on("click", function () {
                t($(this), e, !0), $(this).off("click")
            })) : t($(this), e, !1)
        }
    })
}), jQuery(function () {
    $('[data-module="authorization-code"]').each(function () {
        var e, t, n, r = $(this).attr("data-authorization-base") || "query", i = $(this).attr("data-authorization-key");
        switch (r) {
            case"query":
                e = window.location.search.substr(1);
                break;
            case"hash":
                e = window.location.hash.substr(1);
                break;
            default:
                e = ""
        }
        t = e.split("&").reduce(function (e, t) {
            var n = t.split("=");
            return e[n[0]] = n[1], e
        }, {}), n = (t[i] || "").trim(), 0 !== n.length ? ($(this).find('[data-role="success-message"]').removeClass("hidden"), $(this).find('[data-role="code"]').text(n)) : $(this).find('[data-role="error-message"]').removeClass("hidden")
    })
}), jQuery(function () {
    if (!("clipboard" in window.navigator)) return void $('[data-action="copy-to-clipboard"]').remove();
    $("body").on("click", '[data-action="copy-to-clipboard"]', function (e) {
        e.preventDefault();
        var t = $(this), n = t.text(), r = t.attr("data-target"), i = $(r).text();
        window.navigator.clipboard.writeText(i).then(function () {
            t.text("Copied!"), setTimeout(function () {
                t.text(n)
            }, 3e3)
        }, function () {
            t.text("Failed!"), setTimeout(function () {
                t.text(n)
            }, 3e3)
        })
    })
}), jQuery(function () {
    function e(e) {
        for (var t, n = "0123456789ABCDEF", r = "", i = 0; i < e.length; i++) t = e.charCodeAt(i), r += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
        return r
    }

    function t(e) {
        for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
        for (n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
        return t
    }

    function n(e) {
        for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
        return t
    }

    function r(e, t) {
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var n = 1732584193, r = -271733879, i = -1732584194, l = 271733878, d = 0; d < e.length; d += 16) {
            var f = n, p = r, h = i, g = l;
            r = u(r = u(r = u(r = u(r = s(r = s(r = s(r = s(r = a(r = a(r = a(r = a(r = o(r = o(r = o(r = o(r, i = o(i, l = o(l, n = o(n, r, i, l, e[d + 0], 7, -680876936), r, i, e[d + 1], 12, -389564586), n, r, e[d + 2], 17, 606105819), l, n, e[d + 3], 22, -1044525330), i = o(i, l = o(l, n = o(n, r, i, l, e[d + 4], 7, -176418897), r, i, e[d + 5], 12, 1200080426), n, r, e[d + 6], 17, -1473231341), l, n, e[d + 7], 22, -45705983), i = o(i, l = o(l, n = o(n, r, i, l, e[d + 8], 7, 1770035416), r, i, e[d + 9], 12, -1958414417), n, r, e[d + 10], 17, -42063), l, n, e[d + 11], 22, -1990404162), i = o(i, l = o(l, n = o(n, r, i, l, e[d + 12], 7, 1804603682), r, i, e[d + 13], 12, -40341101), n, r, e[d + 14], 17, -1502002290), l, n, e[d + 15], 22, 1236535329), i = a(i, l = a(l, n = a(n, r, i, l, e[d + 1], 5, -165796510), r, i, e[d + 6], 9, -1069501632), n, r, e[d + 11], 14, 643717713), l, n, e[d + 0], 20, -373897302), i = a(i, l = a(l, n = a(n, r, i, l, e[d + 5], 5, -701558691), r, i, e[d + 10], 9, 38016083), n, r, e[d + 15], 14, -660478335), l, n, e[d + 4], 20, -405537848), i = a(i, l = a(l, n = a(n, r, i, l, e[d + 9], 5, 568446438), r, i, e[d + 14], 9, -1019803690), n, r, e[d + 3], 14, -187363961), l, n, e[d + 8], 20, 1163531501), i = a(i, l = a(l, n = a(n, r, i, l, e[d + 13], 5, -1444681467), r, i, e[d + 2], 9, -51403784), n, r, e[d + 7], 14, 1735328473), l, n, e[d + 12], 20, -1926607734), i = s(i, l = s(l, n = s(n, r, i, l, e[d + 5], 4, -378558), r, i, e[d + 8], 11, -2022574463), n, r, e[d + 11], 16, 1839030562), l, n, e[d + 14], 23, -35309556), i = s(i, l = s(l, n = s(n, r, i, l, e[d + 1], 4, -1530992060), r, i, e[d + 4], 11, 1272893353), n, r, e[d + 7], 16, -155497632), l, n, e[d + 10], 23, -1094730640), i = s(i, l = s(l, n = s(n, r, i, l, e[d + 13], 4, 681279174), r, i, e[d + 0], 11, -358537222), n, r, e[d + 3], 16, -722521979), l, n, e[d + 6], 23, 76029189), i = s(i, l = s(l, n = s(n, r, i, l, e[d + 9], 4, -640364487), r, i, e[d + 12], 11, -421815835), n, r, e[d + 15], 16, 530742520), l, n, e[d + 2], 23, -995338651), i = u(i, l = u(l, n = u(n, r, i, l, e[d + 0], 6, -198630844), r, i, e[d + 7], 10, 1126891415), n, r, e[d + 14], 15, -1416354905), l, n, e[d + 5], 21, -57434055), i = u(i, l = u(l, n = u(n, r, i, l, e[d + 12], 6, 1700485571), r, i, e[d + 3], 10, -1894986606), n, r, e[d + 10], 15, -1051523), l, n, e[d + 1], 21, -2054922799), i = u(i, l = u(l, n = u(n, r, i, l, e[d + 8], 6, 1873313359), r, i, e[d + 15], 10, -30611744), n, r, e[d + 6], 15, -1560198380), l, n, e[d + 13], 21, 1309151649), i = u(i, l = u(l, n = u(n, r, i, l, e[d + 4], 6, -145523070), r, i, e[d + 11], 10, -1120210379), n, r, e[d + 2], 15, 718787259), l, n, e[d + 9], 21, -343485551), n = c(n, f), r = c(r, p), i = c(i, h), l = c(l, g)
        }
        return Array(n, r, i, l)
    }

    function i(e, t, n, r, i, o) {
        return c(l(c(c(t, e), c(r, o)), i), n)
    }

    function o(e, t, n, r, o, a, s) {
        return i(t & n | ~t & r, e, t, o, a, s)
    }

    function a(e, t, n, r, o, a, s) {
        return i(t & r | n & ~r, e, t, o, a, s)
    }

    function s(e, t, n, r, o, a, s) {
        return i(t ^ n ^ r, e, t, o, a, s)
    }

    function u(e, t, n, r, o, a, s) {
        return i(n ^ (t | ~r), e, t, o, a, s)
    }

    function c(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }

    function l(e, t) {
        return e << t | e >>> 32 - t
    }

    var d = function (i) {
        return e(n(r(t(i), 8 * i.length))).toLowerCase()
    }, f = function (e, t) {
        e.each(function () {
            var e = $(this);
            e.is("input") ? e.val(t) : e.text(t)
        })
    }, p = function (e, t, n) {
        t = t.replace(/\/+$/, "");
        var r = d(n), i = r.substr(0, 8), o = (e.attr("data-name-prefix") || "") + i;
        f(e.find('[data-role="repository-name"]'), o), f(e.find('[data-role="repository-url"]'), t + "/" + o), f(e.find('[data-role="profile-url"]'), t)
    };
    $('[data-module="repository-name-generator"]').each(function () {
        var e = $(this), t = $(e.attr("data-hash-source-selector")), n = $(e.attr("data-url-source-selector")), r = function () {
            var r = t.val().trim(), i = n.val().trim();
            p(e, i, r), i.length > 0 && r.length > 0 ? e.removeClass("hidden") : e.addClass("hidden")
        };
        n.on("blur", r), t.on("blur", r)
    })
}), jQuery(function () {
    $('[data-module="conditional-content"]').each(function () {
        function e(e) {
            var i = s[0], u = o;
            u ? -1 !== u.split("|").indexOf(i.value) ? n() : t() : "input" == i.tagName.toLowerCase() && (i.checked ? n() : t(), "radio" !== i.type || e || $('input[type="radio"][name="' + i.name + '"]:not(' + a + "):not(:checked)").trigger("change", {once: !0}));
            var c = r.closest("form[data-module]");
            c.length > 0 && c.data("object").updateFields()
        }

        function t() {
            r.hide(), r.find("input, select, textarea, button").prop("disabled", !0)
        }

        function n() {
            r.show(), r.find("input, select, textarea, button").prop("disabled", !1)
        }

        var r = $(this), i = r.attr("data-dependent-field-id"), o = r.attr("data-dependent-value"), a = "#" + i, s = $(a);
        if (0 === s.length) throw Error("There is no field that matches the passed ID '" + i + "'");
        $(document).on("change", a, function (t, n) {
            e(n && !0 === n.once)
        }), e()
    })
}), jQuery(function () {
    $('a[href="#!"]').on("click", function (e) {
        e.preventDefault()
    }), $('[data-action="toggle-main-navigation"]').on("click", function () {
        var e = $(this);
        e.closest(".page-header").find(".main-navigation").toggleClass("is-active"), e.toggleClass("is-active")
    }), $('[data-action="toggle-collapsible"]').on("click", function () {
        $(this).closest(".collapsible").toggleClass("collapsible--collapsed")
    }), function (e) {
        if (0 != e.substring(1).length) {
            var t = $("#" + $.escapeSelector(e.substring(1)));
            t.length > 0 && t.is(".collapsible") && t.find('[data-action="toggle-collapsible"]').trigger("click")
        }
    }(window.location.hash), $('[data-action="scroll-to"]').on("click", function (e) {
        e.preventDefault();
        var t = this.hash, n = $(t);
        n.length > 0 && $("html, body").animate({scrollTop: n.offset().top}, 500, function () {
            window.history.pushState ? window.history.pushState(null, null, t) : window.location.hash = t
        })
    })
});