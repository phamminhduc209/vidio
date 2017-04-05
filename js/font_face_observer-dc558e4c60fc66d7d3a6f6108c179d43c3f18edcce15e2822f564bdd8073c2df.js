! function() {
    "use strict";

    function e(e) {
        d.push(e), 1 === d.length && p()
    }

    function t() {
        for (; d.length;) d[0](), d.shift()
    }

    function n(e) {
        this.a = m, this.b = void 0, this.f = [];
        var t = this;
        try {
            e(function(e) {
                o(t, e)
            }, function(e) {
                a(t, e)
            })
        } catch (e) {
            a(t, e)
        }
    }

    function i(e) {
        return new n(function(t, n) {
            n(e)
        })
    }

    function r(e) {
        return new n(function(t) {
            t(e)
        })
    }

    function o(e, t) {
        if (e.a === m) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try {
                var i = t && t.then;
                if (null !== t && "object" == typeof t && "function" == typeof i) return void i.call(t, function(t) {
                    n || o(e, t), n = !0
                }, function(t) {
                    n || a(e, t), n = !0
                })
            } catch (t) {
                return void(n || a(e, t))
            }
            e.a = 0, e.b = t, s(e)
        }
    }

    function a(e, t) {
        if (e.a === m) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            e.a = 1, e.b = t, s(e)
        }
    }

    function s(t) {
        e(function() {
            if (t.a !== m)
                for (; t.f.length;) {
                    var e = t.f.shift(),
                        n = e[0],
                        i = e[1],
                        r = e[2],
                        e = e[3];
                    try {
                        0 === t.a ? r("function" == typeof n ? n.call(void 0, t.b) : t.b) : 1 === t.a && ("function" == typeof i ? r(i.call(void 0, t.b)) : e(t.b))
                    } catch (t) {
                        e(t)
                    }
                }
        })
    }

    function l(e) {
        return new n(function(t, n) {
            function i(n) {
                return function(i) {
                    o[n] = i, r += 1, r === e.length && t(o)
                }
            }
            var r = 0,
                o = [];
            0 === e.length && t(o);
            for (var a = 0; a < e.length; a += 1) e[a].c(i(a), n)
        })
    }

    function c(e) {
        return new n(function(t, n) {
            for (var i = 0; i < e.length; i += 1) e[i].c(t, n)
        })
    }
    var d = [];
    if (window.MutationObserver) {
        var u = document.createElement("div");
        new MutationObserver(t).observe(u, {
            attributes: !0
        });
        var p = function() {
            u.setAttribute("x", 0)
        }
    } else p = function() {
        setTimeout(t)
    };
    var m = 2;
    n.prototype.g = function(e) {
        return this.c(void 0, e)
    }, n.prototype.c = function(e, t) {
        var i = this;
        return new n(function(n, r) {
            i.f.push([e, t, n, r]), s(i)
        })
    }, window.Promise || (window.Promise = n, window.Promise.resolve = r, window.Promise.reject = i, window.Promise.race = c, window.Promise.all = l, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g)
}(),
function() {
    "use strict";

    function e(e) {
        document.body ? e() : document.addEventListener("DOMContentLoaded", e)
    }

    function t(e) {
        this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(e)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.g = document.createElement("span"), this.f = -1, this.b.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.g.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;", this.b.appendChild(this.h), this.c.appendChild(this.g), this.a.appendChild(this.b), this.a.appendChild(this.c)
    }

    function n(e, t, n) {
        e.a.style.cssText = "min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:" + t + ";" + n
    }

    function i(e) {
        var t = e.a.offsetWidth,
            n = t + 100;
        return e.g.style.width = n + "px", e.c.scrollLeft = n, e.b.scrollLeft = e.b.scrollWidth + 100, e.f !== t && (e.f = t, !0)
    }

    function r(e, t) {
        e.b.addEventListener("scroll", function() {
            i(e) && null !== e.a.parentNode && t(e.f)
        }, !1), e.c.addEventListener("scroll", function() {
            i(e) && null !== e.a.parentNode && t(e.f)
        }, !1), i(e)
    }

    function o(e, t) {
        var n = t || {};
        this.family = e, this.style = n.style || "normal", this.variant = n.variant || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "stretch", this.featureSettings = n.featureSettings || "normal"
    }
    var a = null;
    o.prototype.a = function(i, o) {
        var s = i || "BESbswy",
            l = o || 3e3,
            c = "font-style:" + this.style + ";font-variant:" + this.variant + ";font-weight:" + this.weight + ";font-stretch:" + this.stretch + ";font-feature-settings:" + this.featureSettings + ";-moz-font-feature-settings:" + this.featureSettings + ";-webkit-font-feature-settings:" + this.featureSettings + ";",
            d = document.createElement("div"),
            u = new t(s),
            p = new t(s),
            m = new t(s),
            f = -1,
            h = -1,
            _ = -1,
            g = -1,
            v = -1,
            b = -1,
            y = this;
        return new Promise(function(t, i) {
            function o() {
                null !== d.parentNode && d.parentNode.removeChild(d)
            }

            function s() {
                if ((-1 !== f && -1 !== h || -1 !== f && -1 !== _ || -1 !== h && -1 !== _) && (f === h || f === _ || h === _)) {
                    if (null === a) {
                        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                        a = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
                    }
                    a ? f === g && h === g && _ === g || f === v && h === v && _ === v || f === b && h === b && _ === b || (o(), t(y)) : (o(), t(y))
                }
            }
            e(function() {
                function e() {
                    if (Date.now() - t >= l) o(), i(y);
                    else {
                        var n = document.hidden;
                        !0 !== n && void 0 !== n || (f = u.a.offsetWidth, h = p.a.offsetWidth, _ = m.a.offsetWidth, s()), setTimeout(e, 50)
                    }
                }
                var t = Date.now();
                n(u, "sans-serif", c), n(p, "serif", c), n(m, "monospace", c), d.appendChild(u.a), d.appendChild(p.a), d.appendChild(m.a), document.body.appendChild(d), g = u.a.offsetWidth, v = p.a.offsetWidth, b = m.a.offsetWidth, e(), r(u, function(e) {
                    f = e, s()
                }), n(u, y.family + ",sans-serif", c), r(p, function(e) {
                    h = e, s()
                }), n(p, y.family + ",serif", c), r(m, function(e) {
                    _ = e, s()
                }), n(m, y.family + ",monospace", c)
            })
        })
    }, window.FontFaceObserver = o, window.FontFaceObserver.prototype.check = o.prototype.a
}();
var observer = new FontFaceObserver("proxima_nova", {
    weight: 400
});
observer.check().then(function() {
    document.documentElement.className += " fonts-loaded"
});