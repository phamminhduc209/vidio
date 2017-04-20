! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || Q;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return pe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (xe.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return re.call(t, e) > -1 !== n && 1 === e.nodeType
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return pe.each(e.match(je) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function c(e, t, n) {
        var i;
        try {
            e && pe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && pe.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function d() {
        Q.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), pe.ready()
    }

    function u() {
        this.expando = pe.expando + u.uid++
    }

    function p(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Be, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : De.test(n) ? JSON.parse(n) : n)
                } catch (e) {}
                Ie.set(e, t, n)
            } else n = void 0;
        return n
    }

    function m(e, t, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            d = (pe.cssNumber[t] || "px" !== c && +l) && Ne.exec(pe.css(e, t));
        if (d && d[3] !== c) {
            c = c || d[3], n = n || [], d = +l || 1;
            do o = o || ".5", d /= o, pe.style(e, t, d + c); while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (d = +d || +l || 0, r = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = r)), r
    }

    function f(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ve[i];
        return r ? r : (t = n.body.appendChild(n.createElement(i)), r = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ve[i] = r, r)
    }

    function h(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = Ee.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Re(i) && (r[o] = f(i))) : "none" !== n && (r[o] = "none", Ee.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function _(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], n) : n
    }

    function g(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
    }

    function v(e, t, n, i, r) {
        for (var o, a, s, l, c, d, u = t.createDocumentFragment(), p = [], m = 0, f = e.length; m < f; m++)
            if (o = e[m], o || 0 === o)
                if ("object" === pe.type(o)) pe.merge(p, o.nodeType ? [o] : o);
                else if (qe.test(o)) {
            for (a = a || u.appendChild(t.createElement("div")), s = (Ue.exec(o) || ["", ""])[1].toLowerCase(), l = Ge[s] || Ge._default, a.innerHTML = l[1] + pe.htmlPrefilter(o) + l[2], d = l[0]; d--;) a = a.lastChild;
            pe.merge(p, a.childNodes), a = u.firstChild, a.textContent = ""
        } else p.push(t.createTextNode(o));
        for (u.textContent = "", m = 0; o = p[m++];)
            if (i && pe.inArray(o, i) > -1) r && r.push(o);
            else if (c = pe.contains(o.ownerDocument, o), a = _(u.appendChild(o), "script"), c && g(a), n)
            for (d = 0; o = a[d++];) We.test(o.type || "") && n.push(o);
        return u
    }

    function b() {
        return !0
    }

    function y() {
        return !1
    }

    function w() {
        try {
            return Q.activeElement
        } catch (e) {}
    }

    function x(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) x(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = y;
        else if (!r) return e;
        return 1 === o && (a = r, r = function(e) {
            return pe().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, r, i, n)
        })
    }

    function k(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function $(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function S(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function C(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (Ee.hasData(e) && (o = Ee.access(e), a = Ee.set(t, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; n < i; n++) pe.event.add(t, r, c[r][n])
            }
            Ie.hasData(e) && (s = Ie.access(e), l = pe.extend({}, s), Ie.set(t, l))
        }
    }

    function T(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function j(e, t, i, r) {
        t = ne.apply([], t);
        var o, a, s, l, c, d, u = 0,
            p = e.length,
            m = p - 1,
            f = t[0],
            h = pe.isFunction(f);
        if (h || p > 1 && "string" == typeof f && !de.checkClone && et.test(f)) return e.each(function(n) {
            var o = e.eq(n);
            h && (t[0] = f.call(this, n, o.html())), j(o, t, i, r)
        });
        if (p && (o = v(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
            for (s = pe.map(_(o, "script"), $), l = s.length; u < p; u++) c = o, u !== m && (c = pe.clone(c, !0, !0), l && pe.merge(s, _(c, "script"))), i.call(e[u], c, u);
            if (l)
                for (d = s[s.length - 1].ownerDocument, pe.map(s, S), u = 0; u < l; u++) c = s[u], We.test(c.type || "") && !Ee.access(c, "globalEval") && pe.contains(d, c) && (c.src ? pe._evalUrl && pe._evalUrl(c.src) : n(c.textContent.replace(nt, ""), d))
        }
        return e
    }

    function M(e, t, n) {
        for (var i, r = t ? pe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || pe.cleanData(_(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && g(_(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function O(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ot(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), !de.pixelMarginRight() && rt.test(a) && it.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function P(e) {
        if (e in dt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--;)
            if (e = ct[n] + t, e in dt) return e
    }

    function E(e, t, n) {
        var i = Ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function I(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + Le[o], !0, r)), i ? ("content" === n && (a -= pe.css(e, "padding" + Le[o], !0, r)), "margin" !== n && (a -= pe.css(e, "border" + Le[o] + "Width", !0, r))) : (a += pe.css(e, "padding" + Le[o], !0, r), "padding" !== n && (a += pe.css(e, "border" + Le[o] + "Width", !0, r)));
        return a
    }

    function D(e, t, n) {
        var i, r = !0,
            o = ot(e),
            a = "border-box" === pe.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (i = O(e, t, o), (i < 0 || null == i) && (i = e.style[t]), rt.test(i)) return i;
            r = a && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + I(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function B(e, t, n, i, r) {
        return new B.prototype.init(e, t, n, i, r)
    }

    function F() {
        pt && (e.requestAnimationFrame(F), pe.fx.tick())
    }

    function N() {
        return e.setTimeout(function() {
            ut = void 0
        }), ut = pe.now()
    }

    function L(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Le[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function R(e, t, n) {
        for (var i, r = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function H(e, t, n) {
        var i, r, o, a, s, l, c, d, u = "width" in t || "height" in t,
            p = this,
            m = {},
            f = e.style,
            _ = e.nodeType && Re(e),
            g = Ee.get(e, "fxshow");
        n.queue || (a = pe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, pe.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (i in t)
            if (r = t[i], mt.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (_ ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    _ = !0
                }
                m[i] = g && g[i] || pe.style(e, i)
            }
        if (l = !pe.isEmptyObject(t), l || !pe.isEmptyObject(m)) {
            u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = g && g.display, null == c && (c = Ee.get(e, "display")), d = pe.css(e, "display"), "none" === d && (c ? d = c : (h([e], !0), c = e.style.display || c, d = pe.css(e, "display"), h([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === pe.css(e, "float") && (l || (p.done(function() {
                f.display = c
            }), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), l = !1;
            for (i in m) l || (g ? "hidden" in g && (_ = g.hidden) : g = Ee.access(e, "fxshow", {
                display: c
            }), o && (g.hidden = !_), _ && h([e], !0), p.done(function() {
                _ || h([e]), Ee.remove(e, "fxshow");
                for (i in m) pe.style(e, i, m[i])
            })), l = R(_ ? g[i] : 0, i, p), i in g || (g[i] = l.start, _ && (l.end = l.start, l.start = 0))
        }
    }

    function V(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = pe.camelCase(n), r = t[i], o = e[n], pe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = pe.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function z(e, t, n) {
        var i, r, o = 0,
            a = z.prefilters.length,
            s = pe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = ut || N(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, n]), o < 1 && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ut || N(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (V(d, c.opts.specialEasing); o < a; o++)
            if (i = z.prefilters[o].call(c, e, d, c.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(i.stop, i)), i;
        return pe.map(d, R, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function W(e, t, n, i) {
        var r;
        if (pe.isArray(t)) pe.each(t, function(t, r) {
            n || Ct.test(e) ? i(e, r) : W(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== pe.type(t)) i(e, t);
        else
            for (r in t) W(e + "[" + r + "]", t[r], n, i)
    }

    function G(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(je) || [];
            if (pe.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function q(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, pe.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            a = e === Nt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function K(e, t) {
        var n, i, r = pe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && pe.extend(!0, e, i), e
    }

    function X(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function Z(e, t, n, i) {
        var r, o, a, s, l, c = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = d.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)
                for (r in c)
                    if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], d.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Y(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var J = [],
        Q = e.document,
        ee = Object.getPrototypeOf,
        te = J.slice,
        ne = J.concat,
        ie = J.push,
        re = J.indexOf,
        oe = {},
        ae = oe.toString,
        se = oe.hasOwnProperty,
        le = se.toString,
        ce = le.call(Object),
        de = {},
        ue = "3.1.0",
        pe = function(e, t) {
            return new pe.fn.init(e, t)
        },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        fe = /^-ms-/,
        he = /-([a-z])/g,
        _e = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: ue,
        constructor: pe,
        length: 0,
        toArray: function() {
            return te.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : te.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(te.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ie,
        sort: J.sort,
        splice: J.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], i = e[t], a !== i && (c && i && (pe.isPlainObject(i) || (r = pe.isArray(i))) ? (r ? (r = !1, o = n && pe.isArray(n) ? n : []) : o = n && pe.isPlainObject(n) ? n : {}, a[t] = pe.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, pe.extend({
        expando: "jQuery" + (ue + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = pe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ae.call(e)) && (!(t = ee(e)) || (n = se.call(t, "constructor") && t.constructor, "function" == typeof n && le.call(n) === ce))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? oe[ae.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(fe, "ms-").replace(he, _e)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : ie.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : re.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, a = 0,
                s = [];
            if (i(e))
                for (r = e.length; a < r; a++) o = t(e[a], a, n), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, n), null != o && s.push(o);
            return ne.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e)) return i = te.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(te.call(arguments)))
            }, r.guid = e.guid = e.guid || pe.guid++, r
        },
        now: Date.now,
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = J[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        oe["[object " + t + "]"] = t.toLowerCase()
    });
    var ge = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, c, d, p = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((t ? t.ownerDocument || t : H) !== E && P(t), t = t || E, D)) {
                if (11 !== f && (l = ge.exec(e)))
                    if (r = l[1]) {
                        if (9 === f) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (p && (a = p.getElementById(r)) && L(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
                    }
                if (x.qsa && !G[e + " "] && (!B || !B.test(e))) {
                    if (1 !== f) p = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, xe) : t.setAttribute("id", s = R), c = C(e), o = c.length; o--;) c[o] = "#" + s + " " + m(c[o]);
                        d = c.join(","), p = ve.test(e) && u(t.parentNode) || t
                    }
                    if (d) try {
                        return J.apply(n, p.querySelectorAll(d)), n
                    } catch (e) {} finally {
                        s === R && t.removeAttribute("id")
                    }
                }
            }
            return j(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[R] = !0, e
        }

        function r(e) {
            var t = E.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return function(t) {
                return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && t.disabled === !1 && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !$e(t)) !== e)
            }
        }

        function d(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {}

        function m(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = z++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || a) return e(t, n, r)
            } : function(t, n, l) {
                var c, d, u, p = [V, s];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || a)
                            if (u = t[R] || (t[R] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = d[o]) && c[0] === V && c[1] === s) return p[2] = c[2];
                                if (d[o] = p, p[2] = e(t, n, l)) return !0
                            }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function _(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[R] && (r = v(r)), o && !o[R] && (o = v(o, a)), i(function(i, a, s, l) {
                var c, d, u, p = [],
                    m = [],
                    f = a.length,
                    h = i || _(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !i && t ? h : g(h, p, e, s, l),
                    b = n ? o || (i ? e : f || r) ? [] : a : v;
                if (n && n(v, b, s, l), r)
                    for (c = g(b, m), r(c, [], s, l), d = c.length; d--;)(u = c[d]) && (b[m[d]] = !(v[m[d]] = u));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], d = b.length; d--;)(u = b[d]) && c.push(v[d] = u);
                            o(null, b = [], c, l)
                        }
                        for (d = b.length; d--;)(u = b[d]) && (c = o ? ee(i, u) : p[d]) > -1 && (i[c] = !(a[c] = u))
                    }
                } else b = g(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : J.apply(a, b)
            })
        }

        function b(e) {
            for (var t, n, i, r = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                    return e === t
                }, a, !0), c = f(function(e) {
                    return ee(t, e) > -1
                }, a, !0), d = [function(e, n, i) {
                    var r = !o && (i || n !== M) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, r
                }]; s < r; s++)
                if (n = k.relative[e[s].type]) d = [f(h(d), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (i = ++s; i < r && !k.relative[e[i].type]; i++);
                        return v(s > 1 && h(d), s > 1 && m(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < i && b(e.slice(s, i)), i < r && b(e = e.slice(i)), i < r && m(e))
                    }
                    d.push(n)
                }
            return h(d)
        }

        function y(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, c) {
                    var d, u, p, m = 0,
                        f = "0",
                        h = i && [],
                        _ = [],
                        v = M,
                        b = i || o && k.find.TAG("*", c),
                        y = V += null == v ? 1 : Math.random() || .1,
                        w = b.length;
                    for (c && (M = a === E || a || c); f !== w && null != (d = b[f]); f++) {
                        if (o && d) {
                            for (u = 0, a || d.ownerDocument === E || (P(d), s = !D); p = e[u++];)
                                if (p(d, a || E, s)) {
                                    l.push(d);
                                    break
                                }
                            c && (V = y)
                        }
                        r && ((d = !p && d) && m--, i && h.push(d))
                    }
                    if (m += f, r && f !== m) {
                        for (u = 0; p = n[u++];) p(h, _, a, s);
                        if (i) {
                            if (m > 0)
                                for (; f--;) h[f] || _[f] || (_[f] = Z.call(l));
                            _ = g(_)
                        }
                        J.apply(l, _), c && !i && _.length > 0 && m + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (V = y, M = v), h
                };
            return r ? i(a) : a
        }
        var w, x, k, $, S, C, T, j, M, O, A, P, E, I, D, B, F, N, L, R = "sizzle" + 1 * new Date,
            H = e.document,
            V = 0,
            z = 0,
            U = n(),
            W = n(),
            G = n(),
            q = function(e, t) {
                return e === t && (A = !0), 0
            },
            K = {}.hasOwnProperty,
            X = [],
            Z = X.pop,
            Y = X.push,
            J = X.push,
            Q = X.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            ue = new RegExp(oe),
            pe = new RegExp("^" + ie + "$"),
            me = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            he = /^h\d$/i,
            _e = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            ye = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            xe = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ke = function() {
                P()
            },
            $e = f(function(e) {
                return e.disabled === !0
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(X = Q.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: X.length ? function(e, t) {
                    Y.apply(e, Q.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, P = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : H;
            return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, I = E.documentElement, D = !S(E), H !== E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), x.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = r(function(e) {
                return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = _e.test(E.getElementsByClassName), x.getById = r(function(e) {
                return I.appendChild(e).id = R, !E.getElementsByName || !E.getElementsByName(R).length
            }), x.getById ? (k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && D) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, k.filter.ID = function(e) {
                var t = e.replace(be, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(be, ye);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, k.find.CLASS = x.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && D) return t.getElementsByClassName(e)
            }, F = [], B = [], (x.qsa = _e.test(E.querySelectorAll)) && (r(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || B.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || B.push("~="), e.querySelectorAll(":checked").length || B.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || B.push(".#.+[+~]")
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = E.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && B.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && B.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && B.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), B.push(",.*:")
            })), (x.matchesSelector = _e.test(N = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                x.disconnectedMatch = N.call(e, "*"), N.call(e, "[s!='']:x"), F.push("!=", oe)
            }), B = B.length && new RegExp(B.join("|")), F = F.length && new RegExp(F.join("|")), t = _e.test(I.compareDocumentPosition), L = t || _e.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, q = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === H && L(H, e) ? -1 : t === E || t.ownerDocument === H && L(H, t) ? 1 : O ? ee(O, e) - ee(O, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !o) return e === E ? -1 : t === E ? 1 : r ? -1 : o ? 1 : O ? ee(O, e) - ee(O, t) : 0;
                if (r === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === H ? -1 : l[i] === H ? 1 : 0
            }, E) : E
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== E && P(e), n = n.replace(de, "='$1']"), x.matchesSelector && D && !G[n + " "] && (!F || !F.test(n)) && (!B || !B.test(n))) try {
                var i = N.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, E, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== E && P(e), L(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== E && P(e);
            var n = k.attrHandle[t.toLowerCase()],
                i = n && K.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
            return void 0 !== i ? i : x.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) {
            return (e + "").replace(we, xe)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (A = !x.detectDuplicates, O = !x.sortStable && e.slice(0), e.sort(q), A) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return O = null, e
        }, $ = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += $(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += $(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: me,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(be, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return me.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = U[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, d, u, p, m, f, h = o !== a ? "nextSibling" : "previousSibling",
                            _ = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            v = !l && !s,
                            b = !1;
                        if (_) {
                            if (o) {
                                for (; h;) {
                                    for (p = t; p = p[h];)
                                        if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    f = h = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? _.firstChild : _.lastChild], a && v) {
                                for (p = _, u = p[R] || (p[R] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], m = c[0] === V && c[1], b = m && c[2], p = m && _.childNodes[m]; p = ++m && p && p[h] || (b = m = 0) || f.pop();)
                                    if (1 === p.nodeType && ++b && p === t) {
                                        d[e] = [V, m, b];
                                        break
                                    }
                            } else if (v && (p = t, u = p[R] || (p[R] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], m = c[0] === V && c[1], b = m), b === !1)
                                for (;
                                    (p = ++m && p && p[h] || (b = m = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (v && (u = p[R] || (p[R] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [V, b]), p !== t)););
                            return b -= r, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = T(e.replace(se, "$1"));
                    return r[R] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, ye),
                        function(t) {
                            return (t.textContent || t.innerText || $(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, ye).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: c(!1),
                disabled: c(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return he.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(e, t) {
                    return [t - 1]
                }),
                eq: d(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: d(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: d(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: d(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: d(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) k.pseudos[w] = l(w);
        return p.prototype = k.filters = k.pseudos, k.setFilters = new p, C = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, c, d = W[e + " "];
            if (d) return n ? 0 : d.slice(0);
            for (s = e, l = [], c = k.preFilter; s;) {
                i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(se, " ")
                }), s = s.slice(i.length));
                for (a in k.filter) !(r = me[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, T = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = G[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--;) o = b(t[n]), o[R] ? i.push(o) : r.push(o);
                o = G(e, y(r, i)), o.selector = e
            }
            return o
        }, j = t.select = function(e, t, n, i) {
            var r, o, a, s, l, c = "function" == typeof e && e,
                d = !i && C(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && D && k.relative[o[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(be, ye), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = me.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !k.relative[s = a.type]);)
                    if ((l = k.find[s]) && (i = l(a.matches[0].replace(be, ye), ve.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && m(o), !e) return J.apply(n, i), n;
                        break
                    }
            }
            return (c || T(e, d))(i, t, !D, n, !t || ve.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = R.split("").sort(q).join("") === R, x.detectDuplicates = !!A, P(), x.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    pe.find = ge, pe.expr = ge.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ge.uniqueSort, pe.text = ge.getText, pe.isXMLDoc = ge.isXML, pe.contains = ge.contains, pe.escapeSelector = ge.escape;
    var ve = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && pe(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        be = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        ye = pe.expr.match.needsContext,
        we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        xe = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (pe.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) pe.find(e, r[t], n);
            return i > 1 ? pe.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ye.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var ke, $e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Se = pe.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || ke, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $e.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), we.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = Q.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this)
        };
    Se.prototype = pe.fn, ke = pe(Q);
    var Ce = /^(?:parents|prev(?:Until|All))/,
        Te = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t = pe(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (pe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && pe(e);
            if (!ye.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? re.call(pe(e), this[0]) : re.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ve(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ve(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ve(e, "nextSibling")
        },
        prevAll: function(e) {
            return ve(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ve(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ve(e, "previousSibling", n)
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return be(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, i) {
            var r = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Te[e] || pe.uniqueSort(r), Ce.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var je = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : pe.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            l = -1,
            c = function() {
                for (r = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            d = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, s.push(n)), function t(n) {
                        pe.each(n, function(n, i) {
                            pe.isFunction(i) ? e.unique && d.has(i) || o.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var n;
                            (n = pe.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? pe.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, pe.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2],
                    ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return pe.Deferred(function(t) {
                            pe.each(n, function(n, i) {
                                var r = pe.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function o(t, n, i, r) {
                            return function() {
                                var c = this,
                                    d = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < a)) {
                                            if (e = i.apply(c, d), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, pe.isFunction(u) ? r ? u.call(e, o(a, n, s, r), o(a, n, l, r)) : (a++, u.call(e, o(a, n, s, r), o(a, n, l, r), o(a, n, s, n.notifyWith))) : (i !== s && (c = void 0, d = [e]), (r || n.resolveWith)(c, d))
                                        }
                                    },
                                    p = r ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (i !== l && (c = void 0, d = [e]), n.rejectWith(c, d))
                                        }
                                    };
                                t ? p() : (pe.Deferred.getStackHook && (p.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var a = 0;
                        return pe.Deferred(function(e) {
                            n[0][3].add(o(0, e, pe.isFunction(r) ? r : s, e.notifyWith)), n[1][3].add(o(0, e, pe.isFunction(t) ? t : s)), n[2][3].add(o(0, e, pe.isFunction(i) ? i : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, r) : r
                    }
                },
                o = {};
            return pe.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                r[t[1]] = a.add, s && a.add(function() {
                    i = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = te.call(arguments),
                o = pe.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? te.call(arguments) : n, --t || o.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject), "pending" === o.state() || pe.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) c(r[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Me.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, pe.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Oe = pe.Deferred();
    pe.fn.ready = function(e) {
        return Oe.then(e)["catch"](function(e) {
            pe.readyException(e)
        }), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || Oe.resolveWith(Q, [pe]))
        }
    }), pe.ready.then = Oe.then, "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? e.setTimeout(pe.ready) : (Q.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var Ae = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === pe.type(n)) {
                r = !0;
                for (s in n) Ae(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(pe(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        Pe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    u.uid = 1, u.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Pe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[pe.camelCase(t)] = n;
            else
                for (i in t) r[pe.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    pe.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in i ? [t] : t.match(je) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !pe.isEmptyObject(t)
        }
    };
    var Ee = new u,
        Ie = new u,
        De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Be = /[A-Z]/g;
    pe.extend({
        hasData: function(e) {
            return Ie.hasData(e) || Ee.hasData(e)
        },
        data: function(e, t, n) {
            return Ie.access(e, t, n)
        },
        removeData: function(e, t) {
            Ie.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ee.remove(e, t)
        }
    }), pe.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Ie.get(o), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)), p(o, i, r[i])));
                    Ee.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Ie.set(this, e)
            }) : Ae(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (n = Ie.get(o, e), void 0 !== n) return n;
                    if (n = p(o, e), void 0 !== n) return n
                } else this.each(function() {
                    Ie.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ie.remove(this, e)
            })
        }
    }), pe.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Ee.get(e, t), n && (!i || pe.isArray(n) ? i = Ee.access(e, t, pe.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = pe._queueHooks(e, t),
                a = function() {
                    pe.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ee.get(e, n) || Ee.access(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    Ee.remove(e, [t + "queue", n])
                })
            })
        }
    }), pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = pe.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Ee.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ne = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        Le = ["Top", "Right", "Bottom", "Left"],
        Re = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display")
        },
        He = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        },
        Ve = {};
    pe.fn.extend({
        show: function() {
            return h(this, !0)
        },
        hide: function() {
            return h(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? pe(this).show() : pe(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i,
        Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        We = /^$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var qe = /<|&#?\w+;/;
    ! function() {
        var e = Q.createDocumentFragment(),
            t = e.appendChild(Q.createElement("div")),
            n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ke = Q.documentElement,
        Xe = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ye = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, c, d, u, p, m, f, h, _ = Ee.get(e);
            if (_)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && pe.find.matchesSelector(Ke, r), n.guid || (n.guid = pe.guid++), (l = _.events) || (l = _.events = {}), (a = _.handle) || (a = _.handle = function(t) {
                        return "undefined" != typeof pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(je) || [""], c = t.length; c--;) s = Ye.exec(t[c]) || [], m = h = s[1], f = (s[2] || "").split(".").sort(), m && (u = pe.event.special[m] || {}, m = (r ? u.delegateType : u.bindType) || m, u = pe.event.special[m] || {}, d = pe.extend({
                    type: m,
                    origType: h,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && pe.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (p = l[m]) || (p = l[m] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, f, a) !== !1 || e.addEventListener && e.addEventListener(m, a)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), pe.event.global[m] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, c, d, u, p, m, f, h, _ = Ee.hasData(e) && Ee.get(e);
            if (_ && (l = _.events)) {
                for (t = (t || "").match(je) || [""], c = t.length; c--;)
                    if (s = Ye.exec(t[c]) || [], m = h = s[1], f = (s[2] || "").split(".").sort(), m) {
                        for (u = pe.event.special[m] || {}, m = (i ? u.delegateType : u.bindType) || m, p = l[m] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) d = p[o], !r && h !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(o, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        a && !p.length && (u.teardown && u.teardown.call(e, f, _.handle) !== !1 || pe.removeEvent(e, m, _.handle), delete l[m])
                    } else
                        for (m in l) pe.event.remove(e, m + t[c], n, i, !0);
                pe.isEmptyObject(l) && Ee.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a, s = pe.event.fix(e),
                l = new Array(arguments.length),
                c = (Ee.get(this, "events") || {})[s.type] || [],
                d = pe.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, s) !== !1) {
                for (a = pe.event.handlers.call(this, s, c), t = 0;
                    (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), void 0 !== i && (s.result = i) === !1 && (s.preventDefault(), s.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; n < s; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(pe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: pe.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[pe.expando] ? e : new pe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && pe.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, pe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : y, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: y,
        isPropagationStopped: y,
        isImmediatePropagationStopped: y,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, pe.event.addProp), pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || pe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), pe.fn.extend({
        on: function(e, t, n, i) {
            return x(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return x(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = y), this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Qe = /<script|<style|<link/i,
        et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tt = /^true\/(.*)/,
        nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0),
                l = pe.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (a = _(s), o = _(e), i = 0, r = o.length; i < r; i++) T(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || _(e), a = a || _(s), i = 0, r = o.length; i < r; i++) C(o[i], a[i]);
                else C(e, s);
            return a = _(s, "script"), a.length > 0 && g(a, !l && _(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, i, r = pe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Pe(n)) {
                    if (t = n[Ee.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
                        n[Ee.expando] = void 0
                    }
                    n[Ie.expando] && (n[Ie.expando] = void 0)
                }
        }
    }), pe.fn.extend({
        detach: function(e) {
            return M(this, e, !0)
        },
        remove: function(e) {
            return M(this, e)
        },
        text: function(e) {
            return Ae(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (pe.cleanData(_(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ae(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Qe.test(e) && !Ge[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(_(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return j(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(_(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = [], r = pe(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), pe(r[a])[t](n), ie.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var it = /^margin/,
        rt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        ot = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ke.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ke.removeChild(a), s = null
            }
        }
        var n, i, r, o, a = Q.createElement("div"),
            s = Q.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), pe.extend(de, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), i
            },
            pixelMarginRight: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/,
        st = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ct = ["Webkit", "Moz", "ms"],
        dt = Q.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = O(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = pe.camelCase(t),
                    l = e.style;
                return t = pe.cssProps[s] || (pe.cssProps[s] = P(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Ne.exec(n)) && r[1] && (n = m(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = P(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = O(e, t, i)), "normal" === r && t in lt && (r = lt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !at.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? D(e, t, i) : He(e, st, function() {
                    return D(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = i && ot(e),
                    a = i && I(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, o), o);
                return a && (r = Ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), E(e, n, a)
            }
        }
    }), pe.cssHooks.marginLeft = A(de.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Le[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, it.test(e) || (pe.cssHooks[e + t].set = E)
    }), pe.fn.extend({
        css: function(e, t) {
            return Ae(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (pe.isArray(t)) {
                    for (i = ot(e), r = t.length; a < r; a++) o[t[a]] = pe.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), pe.Tween = B, B.prototype = {
        constructor: B,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = B.prototype.init, pe.fx.step = {};
    var ut, pt, mt = /^(?:toggle|show|hide)$/,
        ft = /queueHooks$/;
    pe.Animation = pe.extend(z, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return m(n.elem, e, Ne.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
            },
            prefilters: [H],
            prefilter: function(e, t) {
                t ? z.prefilters.unshift(e) : z.prefilters.push(e)
            }
        }), pe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return pe.fx.off || Q.hidden ? i.duration = 0 : i.duration = "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
            }, i
        }, pe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = pe.isEmptyObject(e),
                    o = pe.speed(t, n, i),
                    a = function() {
                        var t = z(this, pe.extend({}, e), o);
                        (r || Ee.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = pe.timers,
                        a = Ee.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && ft.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || pe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Ee.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = pe.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function(e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, i, r)
            }
        }), pe.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), pe.timers = [], pe.fx.tick = function() {
            var e, t = 0,
                n = pe.timers;
            for (ut = pe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || pe.fx.stop(), ut = void 0
        }, pe.fx.timer = function(e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function() {
            pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt), pt = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function(t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = Q.createElement("input"),
                t = Q.createElement("select"),
                n = t.appendChild(Q.createElement("option"));
            e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = n.selected, e = Q.createElement("input"), e.value = "t", e.type = "radio", de.radioValue = "t" === e.value
        }();
    var ht, _t = pe.expr.attrHandle;
    pe.fn.extend({
        attr: function(e, t) {
            return Ae(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (r = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(je);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ht = {
        set: function(e, t, n) {
            return t === !1 ? pe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = _t[t] || pe.find.attr;
        _t[t] = function(e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = _t[a], _t[a] = r, r = null != n(e, t, i) ? a : null, _t[a] = o), r
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Ae(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[pe.propFix[e] || e]
            })
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    });
    var bt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, U(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[l++];)
                    if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(bt, " ")) {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = pe.trim(i), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, U(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[l++];)
                    if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(bt, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        s = pe.trim(i), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, U(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = pe(this), o = e.match(je) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = U(this), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + U(n) + " ").replace(bt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var yt = /\r/g,
        wt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = pe.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, pe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(yt, "") : null == n ? "" : n)
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(wt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                        if (n = i[l], (n.selected || l === r) && !n.disabled && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = pe.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = pe.inArray(pe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        }, de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt = /^(?:focusinfocus|focusoutblur)$/;
    pe.extend(pe.event, {
        trigger: function(t, n, i, r) {
            var o, a, s, l, c, d, u, p = [i || Q],
                m = se.call(t, "type") ? t.type : t,
                f = se.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(m + pe.event.triggered) && (m.indexOf(".") > -1 && (f = m.split("."), m = f.shift(), f.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[pe.expando] ? t : new pe.Event(m, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), u = pe.event.special[m] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !pe.isWindow(i)) {
                    for (l = u.delegateType || m, xt.test(l + m) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (i.ownerDocument || Q) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : u.bindType || m, d = (Ee.get(a, "events") || {})[t.type] && Ee.get(a, "handle"), d && d.apply(a, n), d = c && a[c], d && d.apply && Pe(a) && (t.result = d.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = m, r || t.isDefaultPrevented() || u._default && u._default.apply(p.pop(), n) !== !1 || !Pe(i) || c && pe.isFunction(i[m]) && !pe.isWindow(i) && (s = i[c], s && (i[c] = null), pe.event.triggered = m, i[m](), pe.event.triggered = void 0, s && (i[c] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t)
        }
    }), pe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return pe.event.trigger(e, t, n, !0)
        }
    }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), de.focusin = "onfocusin" in e, de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Ee.access(i, t);
                r || i.addEventListener(e, n, !0), Ee.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Ee.access(i, t) - 1;
                r ? Ee.access(i, t, r) : (i.removeEventListener(e, n, !0), Ee.remove(i, t))
            }
        }
    });
    var kt = e.location,
        $t = pe.now(),
        St = /\?/;
    pe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var Ct = /\[\]$/,
        Tt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Mt = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = pe.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) W(n, e[n], t, r);
        return i.join("&")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && Mt.test(this.nodeName) && !jt.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            }).get()
        }
    });
    var Ot = /%20/g,
        At = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Dt = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        Ft = {},
        Nt = {},
        Lt = "*/".concat("*"),
        Rt = Q.createElement("a");
    Rt.href = kt.href, pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: It.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, pe.ajaxSettings), t) : K(pe.ajaxSettings, e)
        },
        ajaxPrefilter: G(Ft),
        ajaxTransport: G(Nt),
        ajax: function(t, n) {
            function i(t, n, i, s) {
                var c, p, m, y, w, x = n;
                d || (d = !0, l && e.clearTimeout(l), r = void 0, a = s || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (y = X(f, k, i)), y = Z(f, y, k, c), c ? (f.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (pe.lastModified[o] = w), w = k.getResponseHeader("etag"), w && (pe.etag[o] = w)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, p = y.data, m = y.error, c = !m)) : (m = x, !t && x || (x = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || x) + "", c ? g.resolveWith(h, [p, x, k]) : g.rejectWith(h, [k, x, m]), k.statusCode(b), b = void 0, u && _.trigger(c ? "ajaxSuccess" : "ajaxError", [k, f, c ? p : m]), v.fireWith(h, [k, x]), u && (_.trigger("ajaxComplete", [k, f]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, c, d, u, p, m, f = pe.ajaxSetup({}, n),
                h = f.context || f,
                _ = f.context && (h.nodeType || h.jquery) ? pe(h) : pe.event,
                g = pe.Deferred(),
                v = pe.Callbacks("once memory"),
                b = f.statusCode || {},
                y = {},
                w = {},
                x = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (d) {
                            if (!s)
                                for (s = {}; t = Et.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return d ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == d && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == d && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (d) k.always(e[k.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (g.promise(k), f.url = ((t || f.url || kt.href) + "").replace(Bt, kt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(je) || [""], null == f.crossDomain) {
                c = Q.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Rt.protocol + "//" + Rt.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), q(Ft, f, n, k), d) return k;
            u = pe.event && f.global, u && 0 === pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Dt.test(f.type), o = f.url.replace(At, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ot, "+")) : (m = f.url.slice(o.length), f.data && (o += (St.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(Pt, ""), m = (St.test(o) ? "&" : "?") + "_=" + $t++ + m), f.url = o + m), f.ifModified && (pe.lastModified[o] && k.setRequestHeader("If-Modified-Since", pe.lastModified[o]), pe.etag[o] && k.setRequestHeader("If-None-Match", pe.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : f.accepts["*"]);
            for (p in f.headers) k.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (f.beforeSend.call(h, k, f) === !1 || d)) return k.abort();
            if (x = "abort", v.add(f.complete), k.done(f.success), k.fail(f.error), r = q(Nt, f, n, k)) {
                if (k.readyState = 1, u && _.trigger("ajaxSend", [k, f]), d) return k;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    d = !1, r.send(y, i)
                } catch (e) {
                    if (d) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return k
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, i, r) {
            return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, pe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                pe(this).replaceWith(this.childNodes)
            }), this
        }
    }), pe.expr.pseudos.hidden = function(e) {
        return !pe.expr.pseudos.visible(e)
    }, pe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, pe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ht = {
            0: 200,
            1223: 204
        },
        Vt = pe.ajaxSettings.xhr();
    de.cors = !!Vt && "withCredentials" in Vt, de.ajax = Vt = !!Vt, pe.ajaxTransport(function(t) {
        var n, i;
        if (de.cors || Vt && !t.crossDomain) return {
            send: function(r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (a in r) s.setRequestHeader(a, r[a]);
                n = function(e) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), pe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = pe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || pe.expando + "_" + $t++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + r) : t.jsonp !== !1 && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || pe.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === o ? pe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, zt.push(r)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), de.createHTMLDocument = function() {
        var e = Q.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), pe.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (de.createHTMLDocument ? (t = Q.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = Q.location.href, t.head.appendChild(i)) : t = Q), r = we.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = v([e], t, o), o && o.length && pe(o).remove(), pe.merge([], r.childNodes))
    }, pe.fn.load = function(e, t, n) {
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = pe.trim(e.slice(s)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.pseudos.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, c, d = pe.css(e, "position"),
                u = pe(e),
                p = {};
            "static" === d && (e.style.position = "relative"), s = u.offset(), o = pe.css(e, "top"), l = pe.css(e, "left"), c = ("absolute" === d || "fixed" === d) && (o + l).indexOf("auto") > -1, c ? (i = u.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, i, r, o = this[0];
            if (o) return o.getClientRects().length ? (i = o.getBoundingClientRect(), i.width || i.height ? (r = o.ownerDocument, n = Y(r), t = r.documentElement, {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + pe.css(e[0], "borderTopWidth", !0),
                    left: i.left + pe.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - pe.css(n, "marginTop", !0),
                    left: t.left - i.left - pe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || Ke
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        pe.fn[e] = function(i) {
            return Ae(this, function(e, i, r) {
                var o = Y(e);
                return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = A(de.pixelPosition, function(e, n) {
            if (n) return n = O(e, t), rt.test(n) ? pe(e).position()[t] + "px" : n
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            pe.fn[i] = function(r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || o === !0 ? "margin" : "border");
                return Ae(this, function(t, n, r) {
                    var o;
                    return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? pe.css(t, n, s) : pe.style(t, n, r, s)
                }, t, a ? r : void 0, a)
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var Wt = e.jQuery,
        Gt = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = Gt), t && e.jQuery === pe && (e.jQuery = Wt), pe
    }, t || (e.jQuery = e.$ = pe), pe
});