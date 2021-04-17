/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function e(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };
    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            m(e)
        },
        each: function (e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                s = [];
            if (C(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function () {
                p()
            },
            ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }
        function se(e) {
            return e[b] = !0, e
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }
        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
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
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t),
                            a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function (e) {
                    return e = e.replace(Z, ee),
                        function (t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === h
                },
                focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !r.pseudos.empty(e)
                },
                header: function (e) {
                    return Y.test(e.nodeName)
                },
                input: function (e) {
                    return G.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function () {
                    return [0]
                }),
                last: he(function (e, t) {
                    return [t - 1]
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);
        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }
        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }
        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }
        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                    return e === t
                }, s, !0), f = me(function (e) {
                    return O(t, e) > -1
                }, s, !0), p = [function (e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                } return xe(p)
        }
        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f, h, y, v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break
                                } c && (T = E)
                        }
                        n && ((f = !y && f) && v--, o && x.push(f))
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return s = oe.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function (e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return k(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function (e) {
            return P(e, "nextSibling")
        },
        prev: function (e) {
            return P(e, "previousSibling")
        },
        nextAll: function (e) {
            return k(e, "nextSibling")
        },
        prevAll: function (e) {
            return k(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return S(e.firstChild)
        },
        contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function (n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return w.each(arguments, function (e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return l
    };
    function I(e) {
        return e
    }
    function W(e) {
        throw e
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function () {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q,
        K = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function (e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function (e, t) {
            K.remove(e, t)
        },
        _data: function (e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function () {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        se = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0)
        },
        hide: function () {
            return fe(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }! function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0
    }
    function ke() {
        return !1
    }
    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
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
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        },
        remove: function (e) {
            return Ie(this, e)
        },
        text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(oe.join("|"), "i");
    ! function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o
            },
            pixelBoxStyles: function () {
                return t(), s
            },
            pixelPosition: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), u
            },
            scrollboxSize: function () {
                return t(), a
            }
        }))
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye) return e
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }
    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
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
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }
    function st() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }
    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }
    function pt(e, t, n) {
        var r, i, o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(pt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [ct],
            prefilter: function (e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
            }, r
        }, w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = w.timers,
                        a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = w.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        }), w.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), w.timers = [], w.fx.tick = function () {
            var e, t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0
        }, w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function () {
            rt || (rt = !0, at())
        }, w.fx.stop = function () {
            rt = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function (t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });
    function vt(e) {
        return (e.match(M) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;
        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
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
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
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
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});
(function($){$.fn.iframeTracker=function(handler){var target=this.get();if(handler===null||handler===false){$.iframeTracker.untrack(target);}else if(typeof handler=="object"){$.iframeTracker.track(target,handler);}else{throw new Error("Wrong handler type (must be an object, or null|false to untrack)");}};$.iframeTracker={focusRetriever:null,focusRetrieved:false,handlersList:[],isIE8AndOlder:false,init:function(){try{if($.browser.msie==true&&$.browser.version<9){this.isIE8AndOlder=true;}}catch(ex){try{var matches=navigator.userAgent.match(/(msie) ([\w.]+)/i);if(matches[2]<9){this.isIE8AndOlder=true;}}catch(ex2){}}
$(window).focus();$(window).blur(function(e){$.iframeTracker.windowLoseFocus(e);});$('body').append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>');this.focusRetriever=$('#focus_retriever');this.focusRetrieved=false;$(document).mousemove(function(e){if(document.activeElement&&document.activeElement.tagName=='IFRAME'){$.iframeTracker.focusRetriever.focus();$.iframeTracker.focusRetrieved=true;}});if(this.isIE8AndOlder){this.focusRetriever.blur(function(e){e.stopPropagation();e.preventDefault();$.iframeTracker.windowLoseFocus(e);});$('body').click(function(e){$(window).focus();});$('form').click(function(e){e.stopPropagation();});try{$('body').on('click','form',function(e){e.stopPropagation();});}catch(ex){console.log("[iframeTracker] Please update jQuery to 1.7 or newer. (exception: "+ex.message+")");}}},track:function(target,handler){handler.target=target;$.iframeTracker.handlersList.push(handler);$(target).bind('mouseover',{handler:handler},$.iframeTracker.mouseoverListener).bind('mouseout',{handler:handler},$.iframeTracker.mouseoutListener);},untrack:function(target){if(typeof Array.prototype.filter!="function"){console.log("Your browser doesn't support Array filter, untrack disabled");return;}
$(target).each(function(index){$(this).unbind('mouseover',$.iframeTracker.mouseoverListener).unbind('mouseout',$.iframeTracker.mouseoutListener);});var nullFilter=function(value){return value===null?false:true;};for(var i in this.handlersList){for(var j in this.handlersList[i].target){if($.inArray(this.handlersList[i].target[j],target)!==-1){this.handlersList[i].target[j]=null;}}
this.handlersList[i].target=this.handlersList[i].target.filter(nullFilter);if(this.handlersList[i].target.length==0){this.handlersList[i]=null;}}
this.handlersList=this.handlersList.filter(nullFilter);},mouseoverListener:function(e){e.data.handler.over=true;try{e.data.handler.overCallback(this);}catch(ex){}},mouseoutListener:function(e){e.data.handler.over=false;$.iframeTracker.focusRetriever.focus();try{e.data.handler.outCallback(this);}catch(ex){}},windowLoseFocus:function(event){for(var i in this.handlersList){if(this.handlersList[i].over==true){try{this.handlersList[i].blurCallback();}catch(ex){}}}}};$(document).ready(function(){$.iframeTracker.init();});})(jQuery);
jQuery(document).ready(function(){var add_lightbox_string=ewd_ulb_php_add_data.add_lightbox.replace(/&quot;/g,'"');var add_lightbox_array=jQuery.parseJSON(add_lightbox_string);var lightbox_added=false;var title_src=ewd_ulb_php_add_data.overlay_text_source=='caption'?'title':'alt';var description_src=ewd_ulb_php_add_data.overlay_text_source=='caption'?'caption':'alt';if(jQuery.inArray("all_images",add_lightbox_array)!==-1){jQuery("img").each(function(){if(jQuery(this).height()>=ewd_ulb_php_add_data.min_height&&jQuery(this).width()>=ewd_ulb_php_add_data.min_width){if(description_src=='caption'){var description=jQuery(this).parent().parent().find('figcaption').html();}
else{var description=img.attr(description_src);}
jQuery(this).parent().addClass('ewd-ulb-lightbox');jQuery(this).parent().data('ulbsource',jQuery(this).attr('src').replace(/-150x150/g,''));jQuery(this).parent().data('ulbtitle',jQuery(this).attr(title_src));jQuery(this).parent().data('ulbdescription',description);}});}
if(jQuery.inArray("all_youtube",add_lightbox_array)!==-1){jQuery("iframe").each(function(){if(jQuery(this).height()>=ewd_ulb_php_add_data.min_height&&jQuery(this).width()>=ewd_ulb_php_add_data.min_width){var youtube=jQuery(this).attr('src').match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);if(youtube){jQuery(this).parent().addClass('ewd-ulb-lightbox');jQuery(this).parent().addClass('ewd-ulb-iframe-parent');jQuery(this).parent().append('<div class="ewd-ulb-overlay"></div>');jQuery(this).parent().data('ulbsource',jQuery(this).attr('src').split("?")[0]);jQuery(this).parent().data('ulbheight',jQuery(this).attr('height'));jQuery(this).parent().data('ulbwidth',jQuery(this).attr('width'));}}});}
if(jQuery.inArray("image_class",add_lightbox_array)!==-1){var class_array=ewd_ulb_php_add_data.image_class_list.split(',');console.log(class_array);jQuery(class_array).each(function(index,el){jQuery("."+el).each(function(){if(jQuery(this).height()>=ewd_ulb_php_add_data.min_height&&jQuery(this).width()>=ewd_ulb_php_add_data.min_width){console.log('applied');jQuery(this).parent().addClass('ewd-ulb-lightbox');jQuery(this).parent().data('ulbsource',jQuery(this).attr('src'));}});});}
if(jQuery.inArray("image_selector",add_lightbox_array)!==-1){var selector_array=ewd_ulb_php_add_data.image_selector_list.split(',');jQuery(selector_array).each(function(index,el){jQuery(el).each(function(){if(jQuery(this).height()>=ewd_ulb_php_add_data.min_height&&jQuery(this).width()>=ewd_ulb_php_add_data.min_width){jQuery(this).parent().addClass('ewd-ulb-lightbox');jQuery(this).parent().data('ulbsource',jQuery(this).attr('src'));}});});}
if(jQuery.inArray("woocommerce_product_page",add_lightbox_array)!==-1){jQuery('.product .images figure').find('img.wp-post-image').each(function(){if(jQuery(this).data('src')){var src=jQuery(this).data('src');}
else{var src=jQuery(this).attr('src');}
if(description_src=='caption'){var description=jQuery(this).parent().parent().find('figcaption').html();}
else{var description=img.attr(description_src);}
jQuery(this).parent().addClass('ewd-ulb-lightbox');jQuery(this).parent().data('ulbsource',src);jQuery(this).parent().data('ulbtitle',jQuery(this).attr(title_src));jQuery(this).parent().data('ulbdescription',description);jQuery(this).parent().parent().on('click',function(){lightbox.toggle();});});}
if(jQuery.inArray("galleries",add_lightbox_array)!==-1){jQuery(".gallery").each(function(){var gallery_id=jQuery(this).attr("id");jQuery(this).find('a').each(function(){if(jQuery(this).find("img").length){var img=jQuery(this).find('img').first();if(img.height()>=ewd_ulb_php_add_data.min_height&&img.width()>=ewd_ulb_php_add_data.min_width){if(description_src=='caption'){var description=jQuery(this).parent().parent().find('figcaption').html();}
else{var description=img.attr(description_src);}
jQuery(this).addClass('ewd-ulb-lightbox');jQuery(this).data('ulbsource',img.attr('src').replace(/-150x150/g,''));jQuery(this).data('ulbtitle',img.attr(title_src));jQuery(this).data('ulbdescription',description);jQuery(this).data('ulbGallery',gallery_id);}}})});jQuery('.wp-block-gallery').each(function(){var gallery_id=ulb_generate_random_string();jQuery(this).find('img').each(function(){if(jQuery(this).height()>=ewd_ulb_php_add_data.min_height&&jQuery(this).width()>=ewd_ulb_php_add_data.min_width){if(description_src=='caption'){var description=jQuery(this).parent().find('figcaption').html();}
else{var description=img.attr(description_src);}
jQuery(this).addClass('ewd-ulb-lightbox');jQuery(this).data('ulbsource',jQuery(this).attr('src').replace(/-150x150/g,''));jQuery(this).data('ulbtitle',jQuery(this).attr(title_src));jQuery(this).data('ulbdescription',description);jQuery(this).data('ulbGallery',gallery_id);}});});}});function ulb_generate_random_string(length){var result='';var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var charactersLength=characters.length;for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}
return result;};
(function(fn){if(typeof define==='function'&&define.amd){define([],fn);}else if((typeof module!=="undefined"&&module!==null)&&module.exports){module.exports=fn;}else{fn();}})(function(){var assign=Object.assign||window.jQuery&&jQuery.extend;var threshold=8;var requestFrame=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(fn,element){return window.setTimeout(function(){fn();},25);});})();(function(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;})();var ignoreTags={textarea:true,input:true,select:true,button:true};var mouseevents={move:'mousemove',cancel:'mouseup dragstart',end:'mouseup'};var touchevents={move:'touchmove',cancel:'touchend',end:'touchend'};var rspaces=/\s+/;var eventOptions={bubbles:true,cancelable:true};var eventsSymbol=typeof Symbol==="function"?Symbol('events'):{};function createEvent(type){return new CustomEvent(type,eventOptions);}
function getEvents(node){return node[eventsSymbol]||(node[eventsSymbol]={});}
function on(node,types,fn,data,selector){types=types.split(rspaces);var events=getEvents(node);var i=types.length;var handlers,type;function handler(e){fn(e,data);}
while(i--){type=types[i];handlers=events[type]||(events[type]=[]);handlers.push([fn,handler]);node.addEventListener(type,handler);}}
function off(node,types,fn,selector){types=types.split(rspaces);var events=getEvents(node);var i=types.length;var type,handlers,k;if(!events){return;}
while(i--){type=types[i];handlers=events[type];if(!handlers){continue;}
k=handlers.length;while(k--){if(handlers[k][0]===fn){node.removeEventListener(type,handlers[k][1]);handlers.splice(k,1);}}}}
function trigger(node,type,properties){var event=createEvent(type);if(properties){assign(event,properties);}
node.dispatchEvent(event);}
function Timer(fn){var callback=fn,active=false,running=false;function trigger(time){if(active){callback();requestFrame(trigger);running=true;active=false;}
else{running=false;}}
this.kick=function(fn){active=true;if(!running){trigger();}};this.end=function(fn){var cb=callback;if(!fn){return;}
if(!running){fn();}
else{callback=active?function(){cb();fn();}:fn;active=true;}};}
function noop(){}
function preventDefault(e){e.preventDefault();}
function isIgnoreTag(e){return!!ignoreTags[e.target.tagName.toLowerCase()];}
function isPrimaryButton(e){return(e.which===1&&!e.ctrlKey&&!e.altKey);}
function identifiedTouch(touchList,id){var i,l;if(touchList.identifiedTouch){return touchList.identifiedTouch(id);}
i=-1;l=touchList.length;while(++i<l){if(touchList[i].identifier===id){return touchList[i];}}}
function changedTouch(e,data){var touch=identifiedTouch(e.changedTouches,data.identifier);if(!touch){return;}
if(touch.pageX===data.pageX&&touch.pageY===data.pageY){return;}
return touch;}
function mousedown(e){if(!isPrimaryButton(e)){return;}
if(isIgnoreTag(e)){return;}
on(document,mouseevents.move,mousemove,e);on(document,mouseevents.cancel,mouseend,e);}
function mousemove(e,data){checkThreshold(e,data,e,removeMouse);}
function mouseend(e,data){removeMouse();}
function removeMouse(){off(document,mouseevents.move,mousemove);off(document,mouseevents.cancel,mouseend);}
function touchstart(e){if(ignoreTags[e.target.tagName.toLowerCase()]){return;}
var touch=e.changedTouches[0];var data={target:touch.target,pageX:touch.pageX,pageY:touch.pageY,identifier:touch.identifier,touchmove:function(e,data){touchmove(e,data);},touchend:function(e,data){touchend(e,data);}};on(document,touchevents.move,data.touchmove,data);on(document,touchevents.cancel,data.touchend,data);}
function touchmove(e,data){var touch=changedTouch(e,data);if(!touch){return;}
checkThreshold(e,data,touch,removeTouch);}
function touchend(e,data){var touch=identifiedTouch(e.changedTouches,data.identifier);if(!touch){return;}
removeTouch(data);}
function removeTouch(data){off(document,touchevents.move,data.touchmove);off(document,touchevents.cancel,data.touchend);}
function checkThreshold(e,data,touch,fn){var distX=touch.pageX-data.pageX;var distY=touch.pageY-data.pageY;if((distX*distX)+(distY*distY)<(threshold*threshold)){return;}
triggerStart(e,data,touch,distX,distY,fn);}
function triggerStart(e,data,touch,distX,distY,fn){var touches=e.targetTouches;var time=e.timeStamp-data.timeStamp;var template={altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,startX:data.pageX,startY:data.pageY,distX:distX,distY:distY,deltaX:distX,deltaY:distY,pageX:touch.pageX,pageY:touch.pageY,velocityX:distX/time,velocityY:distY/time,identifier:data.identifier,targetTouches:touches,finger:touches?touches.length:1,enableMove:function(){this.moveEnabled=true;this.enableMove=noop;e.preventDefault();}};trigger(data.target,'movestart',template);fn(data);}
function activeMousemove(e,data){var timer=data.timer;data.touch=e;data.timeStamp=e.timeStamp;timer.kick();}
function activeMouseend(e,data){var target=data.target;var event=data.event;var timer=data.timer;removeActiveMouse();endEvent(target,event,timer,function(){setTimeout(function(){off(target,'click',preventDefault);},0);});}
function removeActiveMouse(){off(document,mouseevents.move,activeMousemove);off(document,mouseevents.end,activeMouseend);}
function activeTouchmove(e,data){var event=data.event;var timer=data.timer;var touch=changedTouch(e,event);if(!touch){return;}
e.preventDefault();event.targetTouches=e.targetTouches;data.touch=touch;data.timeStamp=e.timeStamp;timer.kick();}
function activeTouchend(e,data){var target=data.target;var event=data.event;var timer=data.timer;var touch=identifiedTouch(e.changedTouches,event.identifier);if(!touch){return;}
removeActiveTouch(data);endEvent(target,event,timer);}
function removeActiveTouch(data){off(document,touchevents.move,data.activeTouchmove);off(document,touchevents.end,data.activeTouchend);}
function updateEvent(event,touch,timeStamp){var time=timeStamp-event.timeStamp;event.distX=touch.pageX-event.startX;event.distY=touch.pageY-event.startY;event.deltaX=touch.pageX-event.pageX;event.deltaY=touch.pageY-event.pageY;event.velocityX=0.3*event.velocityX+0.7*event.deltaX/time;event.velocityY=0.3*event.velocityY+0.7*event.deltaY/time;event.pageX=touch.pageX;event.pageY=touch.pageY;}
function endEvent(target,event,timer,fn){timer.end(function(){trigger(target,'moveend',event);return fn&&fn();});}
function movestart(e){if(e.defaultPrevented){return;}
if(!e.moveEnabled){return;}
var event={startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger};var data={target:e.target,event:event,timer:new Timer(update),touch:undefined,timeStamp:e.timeStamp};function update(time){updateEvent(event,data.touch,data.timeStamp);trigger(data.target,'move',event);}
if(e.identifier===undefined){on(e.target,'click',preventDefault);on(document,mouseevents.move,activeMousemove,data);on(document,mouseevents.end,activeMouseend,data);}
else{data.activeTouchmove=function(e,data){activeTouchmove(e,data);};data.activeTouchend=function(e,data){activeTouchend(e,data);};on(document,touchevents.move,data.activeTouchmove,data);on(document,touchevents.end,data.activeTouchend,data);}}
on(document,'mousedown',mousedown);on(document,'touchstart',touchstart);on(document,'movestart',movestart);if(!window.jQuery){return;}
var properties=("startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY").split(' ');function enableMove1(e){e.enableMove();}
function enableMove2(e){e.enableMove();}
function enableMove3(e){e.enableMove();}
function add(handleObj){var handler=handleObj.handler;handleObj.handler=function(e){var i=properties.length;var property;while(i--){property=properties[i];e[property]=e.originalEvent[property];}
handler.apply(this,arguments);};}
jQuery.event.special.movestart={setup:function(){on(this,'movestart',enableMove1);return false;},teardown:function(){off(this,'movestart',enableMove1);return false;},add:add};jQuery.event.special.move={setup:function(){on(this,'movestart',enableMove2);return false;},teardown:function(){off(this,'movestart',enableMove2);return false;},add:add};jQuery.event.special.moveend={setup:function(){on(this,'movestart',enableMove3);return false;},teardown:function(){off(this,'movestart',enableMove3);return false;},add:add};});
(function($){$.fn.twentytwenty=function(options){var options=$.extend({default_offset_pct:0.5,orientation:'horizontal',before_label:'Before',after_label:'After',no_overlay:false,move_slider_on_hover:false,move_with_handle_only:true,click_to_move:false},options);return this.each(function(){var sliderPct=options.default_offset_pct;var container=$(this);var sliderOrientation=options.orientation;var beforeDirection=(sliderOrientation==='vertical')?'down':'left';var afterDirection=(sliderOrientation==='vertical')?'up':'right';container.wrap("<div class='twentytwenty-wrapper twentytwenty-"+sliderOrientation+"'></div>");if(!options.no_overlay){container.append("<div class='twentytwenty-overlay'></div>");}
var beforeImg=container.find("img:first");var afterImg=container.find("img:last");container.append("<div class='twentytwenty-handle'></div>");var slider=container.find(".twentytwenty-handle");slider.append("<span class='twentytwenty-"+beforeDirection+"-arrow'></span>");slider.append("<span class='twentytwenty-"+afterDirection+"-arrow'></span>");container.addClass("twentytwenty-container");beforeImg.addClass("twentytwenty-before");afterImg.addClass("twentytwenty-after");var overlay=container.find(".twentytwenty-overlay");overlay.append("<div class='twentytwenty-before-label' data-content='"+options.before_label+"'></div>");overlay.append("<div class='twentytwenty-after-label' data-content='"+options.after_label+"'></div>");var calcOffset=function(dimensionPct){var w=beforeImg.width();var h=beforeImg.height();return{w:w+"px",h:h+"px",cw:(dimensionPct*w)+"px",ch:(dimensionPct*h)+"px"};};var adjustContainer=function(offset){if(sliderOrientation==='vertical'){beforeImg.css("clip","rect(0,"+offset.w+","+offset.ch+",0)");afterImg.css("clip","rect("+offset.ch+","+offset.w+","+offset.h+",0)");}
else{beforeImg.css("clip","rect(0,"+offset.cw+","+offset.h+",0)");afterImg.css("clip","rect(0,"+offset.w+","+offset.h+","+offset.cw+")");}
container.css("height",offset.h);};var adjustSlider=function(pct){var offset=calcOffset(pct);slider.css((sliderOrientation==="vertical")?"top":"left",(sliderOrientation==="vertical")?offset.ch:offset.cw);adjustContainer(offset);};var minMaxNumber=function(num,min,max){return Math.max(min,Math.min(max,num));};var getSliderPercentage=function(positionX,positionY){var sliderPercentage=(sliderOrientation==='vertical')?(positionY-offsetY)/imgHeight:(positionX-offsetX)/imgWidth;return minMaxNumber(sliderPercentage,0,1);};$(window).on("resize.twentytwenty",function(e){adjustSlider(sliderPct);});var offsetX=0;var offsetY=0;var imgWidth=0;var imgHeight=0;var onMoveStart=function(e){if(((e.distX>e.distY&&e.distX<-e.distY)||(e.distX<e.distY&&e.distX>-e.distY))&&sliderOrientation!=='vertical'){e.preventDefault();}
else if(((e.distX<e.distY&&e.distX<-e.distY)||(e.distX>e.distY&&e.distX>-e.distY))&&sliderOrientation==='vertical'){e.preventDefault();}
container.addClass("active");offsetX=container.offset().left;offsetY=container.offset().top;imgWidth=beforeImg.width();imgHeight=beforeImg.height();};var onMove=function(e){if(container.hasClass("active")){sliderPct=getSliderPercentage(e.pageX,e.pageY);adjustSlider(sliderPct);}};var onMoveEnd=function(){container.removeClass("active");};var moveTarget=options.move_with_handle_only?slider:container;moveTarget.on("movestart",onMoveStart);moveTarget.on("move",onMove);moveTarget.on("moveend",onMoveEnd);if(options.move_slider_on_hover){container.on("mouseenter",onMoveStart);container.on("mousemove",onMove);container.on("mouseleave",onMoveEnd);}
slider.on("touchmove",function(e){e.preventDefault();});container.find("img").on("mousedown",function(event){event.preventDefault();});if(options.click_to_move){container.on('click',function(e){offsetX=container.offset().left;offsetY=container.offset().top;imgWidth=beforeImg.width();imgHeight=beforeImg.height();sliderPct=getSliderPercentage(e.pageX,e.pageY);adjustSlider(sliderPct);});}
$(window).trigger("resize.twentytwenty");});};})(jQuery);
(function(){var initializing=false,fnTest=/xyz/.test(function(){xyz;})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(prop)
{var _super=this.prototype;initializing=true;var prototype=new this();initializing=false;for(var name in prop)
{prototype[name]=typeof prop[name]=="function"&&typeof _super[name]=="function"&&fnTest.test(prop[name])?(function(name,fn)
{return function()
{var tmp=this._super;this._super=_super[name];var ret=fn.apply(this,arguments);this._super=tmp;return ret;};})(name,prop[name]):prop[name];}
function Class()
{if(!initializing&&this.init)
this.init.apply(this,arguments);}
Class.prototype=prototype;Class.prototype.constructor=Class;Class.extend=arguments.callee;return Class;};})();var lightbox;var slider={slideWidth:jQuery(".ewd-ulb-slide-container").width(),touchstartx:undefined,touchmovex:undefined,movex:undefined,index:0,longTouch:undefined,};var defaults={custom_css:'',transition_class:'ewd-ulb-horizontal-slide',speed:600,height:'100%',width:'100%',closable:true,loop:true,keyboard_controls:true,show_thumbnails:'bottom',show_thumbnail_toggle:true,curtain_slide:false,hide_elements:['description','thumbnails'],autoplay:false,autoplay_interval:4000,show_progress_bar:false,mousewheel_navigation:true,zoomLevel:0,fullsize:false,ulb_arrow:'a',ulb_icon_set:'a',controls:{'top_right_controls':['exit'],'top_left_controls':['autoplay','zoom','zoom_out','download','fullscreen'],'bottom_right_controls':['slide_counter'],'bottom_left_controls':[]}};var EWD_ULB_LightboxSlide=Class.extend({init:function(element,length){this.element=element;this.source=jQuery(element).data("ulbsource");this.title=jQuery(element).data("ulbtitle");this.description=jQuery(element).data("ulbdescription");this.gallery=jQuery(element).data("ulbGallery");if(this.source){var youtube=this.source.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);if(youtube){this.video="youtube";this.source=this.source.replace("watch?v=","embed/");}
else{this.video=false;}}
else{this.video=false;}
if(jQuery(element).data("ulbheight")){this.height=jQuery(element).data("ulbheight");}
else{this.height=315;}
if(jQuery(element).data("ulbwidth")){this.width=jQuery(element).data("ulbwidth");}
else{this.width=560;}}});var UltimateLightbox=Class.extend({init:function(options)
{this.settings=jQuery.extend({},defaults,options);this.displaying=false;var elements=[];jQuery('.ewd-ulb-lightbox, .ewd-ulb-lightbox-noclick-image').each(function(index,value){var Slide=new EWD_ULB_LightboxSlide(this,elements.length);jQuery(this).data('slideIndex',elements.length);elements.push(Slide);});this.elements=elements;this.currentSlide=0;this.maxSlide=this.elements.length-1;this.setMobileClasses();if(this.settings.curtain_slide){this.getPairedImages();}},getPairedImages:function(){var sources=[];jQuery(this.elements).each(function(index,element){sources.push(element.source);});var data='image_sources='+JSON.stringify(sources)+'&action=ulb_get_paired_images';jQuery.post(ajaxurl,data,function(response)
{var paired_images=jQuery.parseJSON(response);jQuery.each(paired_images,function(index,element)
{if(element!="")
{img_height=paired_images.height;var bef_img=jQuery('.ewd-ulb-slide-img').children("img[src='"+index+"']");bef_img.wrap("<div class='twentytwenty-container' style='height:100%;width100%;vertical-align:middle;'></div>");bef_img.after("<img src= '"+element+"'/>");}});});},setMobileClasses:function(){if(jQuery.inArray('description',this.settings.hide_elements)!==-1){this.settings.descriptionClass='ewd-ulb-mobile-hide';}
else{this.settings.descriptionClass='';}
if(jQuery.inArray('title',this.settings.hide_elements)!==-1){this.settings.titleClass='ewd-ulb-mobile-hide';}
else{this.settings.titleClass='';}
if(jQuery.inArray('thumbnails',this.settings.hide_elements)!==-1){this.settings.thumbnailsClass='ewd-ulb-mobile-hide';}
else{this.settings.thumbnailsClass='';}
if(this.settings.descriptionClass=='ewd-ulb-mobile-hide'&&this.settings.titleClass=='ewd-ulb-mobile-hide'){this.settings.overlayClass='ewd-ulb-mobile-hide';}
else{this.settings.overlayClass='';}},setCurrentSlide:function(targetElement){jQuery(this.elements).each(function(index,element){if(element.source==jQuery(targetElement).data('ulbsource')){lightbox.currentSlide=index;}})},toggle:function(){if(this.displaying){this.closeLightbox();}
else{this.openLightbox();}},closeLightbox:function(){var checkForVid=jQuery(".ewd-ulb-active-slide.ewd-ulb-image-displaying")
if(checkForVid.find('iframe').length>0)
{if(checkForVid.find('iframe').attr('src').indexOf("autoplay")!=-1)
{checkForVid.find('iframe').attr('src',checkForVid.find('iframe').attr('src').replace('?autoplay=1',''));}
else
{checkForVid.find('iframe').attr('src',checkForVid.find('iframe').attr('src'));}}
this.displaying=false;jQuery('.ewd-ulb-background').css('display','none');jQuery('.ewd-ulb-lightbox-container').css('display','none');this.switchSlide();jQuery('.ewd-ulb-active-slide').removeClass('ewd-ulb-active-slide');jQuery('.ewd-ulb-active-thumbnail').removeClass('ewd-ulb-active-thumbnail');},openLightbox:function(){this.displaying=true;jQuery('.ewd-ulb-background').css('display','inline');jQuery('.ewd-ulb-lightbox-container').css('display','inline');if(this.settings.autoplay){this.startAutoplay();}
jQuery('.ewd-ulb-slide-img').each(function(){var thisSlideImg=jQuery(this);if(thisSlideImg.find('iframe').length>0)
{thisSlideImg.find('iframe').css('height','calc(100% - 40px)');thisSlideImg.find('iframe').css('max-width','calc(100% - 40px)');}});this.switchSlide();this.selectThumbnails();lightbox.noZoom();var checkForVid=jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying');if(checkForVid.find('iframe').length>0)
{if(checkForVid.find('iframe').attr('src').indexOf("autoplay")==-1)
{checkForVid.find('iframe').attr('src',checkForVid.find('iframe').attr('src')+'?autoplay=1');}}},enlargeImage:function(){this.displaying=true;jQuery('.ewd-ulb-background').css('display','inline');jQuery('.ewd-ulb-lightbox-container').css('display','inline');if(this.settings.autoplay){this.startAutoplay();}
this.switchSlide();this.selectThumbnails();lightbox.noZoom();},nextSlide:function(){var oldSlide=this.currentSlide;do{if(this.currentSlide!=this.maxSlide)
{this.currentSlide=this.currentSlide+1;}
else if(this.currentSlide==this.maxSlide&&ewd_ulb_php_data.gallery_loop)
{if(this.maxSlide==0){return;}
this.currentSlide=0;}
else if(this.currentSlide==this.maxSlide&&!ewd_ulb_php_data.gallery_loop)
{return;}}while(this.elements[oldSlide].gallery!=this.elements[this.currentSlide].gallery);jQuery('.ewd-ulb-slide').addClass('ewd-ulb-transition-next');this.switchSlide(oldSlide);var checkForVid=jQuery(".ewd-ulb-slide[data-slideindex='"+oldSlide+"']");if(checkForVid.find('iframe').length>0)
{if(checkForVid.find('iframe').attr('src').indexOf("autoplay")!=-1)
{checkForVid.find('iframe').attr('src',checkForVid.find('iframe').attr('src').replace('?autoplay=1',''));return false;}
else
{checkForVid.find('iframe').attr('src',checkForVid.find('iframe').attr('src'));return false;}}},previousSlide:function(){var oldSlide=this.currentSlide;do{if(this.currentSlide!=0)
{this.currentSlide=this.currentSlide-1;}
else if(this.currentSlide==0&&ewd_ulb_php_data.gallery_loop)
{if(this.maxSlide==0){return;}
this.currentSlide=this.maxSlide;}
else if(this.currentSlide==0&&!ewd_ulb_php_data.gallery_loop)
{return;}}while(this.elements[oldSlide].gallery!=this.elements[this.currentSlide].gallery);jQuery('.ewd-ulb-slide').addClass('ewd-ulb-transition-previous');this.switchSlide(oldSlide);var checkForVid=jQuery(".ewd-ulb-slide[data-slideindex='"+oldSlide+"']");if(checkForVid.find('iframe').length>0)
{if(checkForVid.find('iframe').attr('src').indexOf("autoplay")!=-1)
{checkForVid.find('iframe').attr('src',checkForVid.find('iframe').attr('src').replace('?autoplay=1',''));return false;}
else
{checkForVid.find('iframe').attr('src',checkForVid.find('iframe').attr('src'));return false;}}},goToSlide:function(slideIndex){var oldSlide=this.currentSlide;this.currentSlide=slideIndex;jQuery('.ewd-ulb-slide').addClass('ewd-ulb-transition-next');this.switchSlide(oldSlide);},switchSlide:function(oldSlide){if(typeof oldSlide!=="undefined"){jQuery(".ewd-ulb-slide-thumbnail[data-slideindex='"+oldSlide+"']").removeClass('ewd-ulb-active-thumbnail');jQuery(".ewd-ulb-slide[data-slideindex='"+oldSlide+"']").removeClass('ewd-ulb-image-displaying')
jQuery(".ewd-ulb-slide[data-slideindex='"+oldSlide+"']").addClass('ewd-ulb-old-active-slide');if(oldSlide!=this.currentSlide){setTimeout(function(){jQuery(".ewd-ulb-slide[data-slideindex='"+oldSlide+"']").removeClass('ewd-ulb-active-slide ewd-ulb-old-active-slide');},500);}}
jQuery(".ewd-ulb-slide-thumbnail[data-slideindex='"+this.currentSlide+"']").addClass('ewd-ulb-active-thumbnail');jQuery(".ewd-ulb-slide[data-slideindex='"+this.currentSlide+"']").addClass('ewd-ulb-active-slide ewd-ulb-image-displaying');var slideNumber=this.currentSlide+1;jQuery(".ewd-ulb-current-count-indicator").each(function(){jQuery(this).html(slideNumber);});setTimeout(function(){jQuery('.ewd-ulb-slide').removeClass('ewd-ulb-transition-next ewd-ulb-transition-previous');},500);lightbox.resizeOverlay();lightbox.setDownloadLinks();},selectThumbnails:function(){var gallery=this.getCurrentGallery();jQuery('.ewd-ulb-slide-thumbnail').addClass('ewd-ulb-thumbnail-hidden');jQuery('.ewd-ulb-slide-thumbnail[data-ulbGallery="'+gallery+'"]').removeClass('ewd-ulb-thumbnail-hidden');},getCurrentGallery:function(){var gallery="";var currentSlide=this.currentSlide;jQuery(this.elements).each(function(index,element){if(index==currentSlide){gallery=element.gallery;}});return gallery;},resizeOverlay:function(){var imgWidth=jQuery(".ewd-ulb-active-slide.ewd-ulb-image-displaying img").first().width();var imgHeight=jQuery(".ewd-ulb-active-slide.ewd-ulb-image-displaying img").first().height();var containerWidth=jQuery(".ewd-ulb-active-slide.ewd-ulb-image-displaying").first().width();var containerHeight=jQuery(".ewd-ulb-active-slide.ewd-ulb-image-displaying").first().height();var marginWidth=(containerWidth-imgWidth)/2;var TwentyConHeight=jQuery(".twentytwenty-container").height();var TwentyConWidth=jQuery(".twentytwenty-container").width();jQuery(".ewd-ulb-slide-overlay").css('width',imgWidth+'px');jQuery(".ewd-ulb-slide-overlay").css('margin','0px '+marginWidth+'px');if(jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying').find('.twentytwenty-container').length>0)
{if(imgWidth==0&&imgHeight==0)
{return;}
else if(imgWidth!=TwentyConWidth||imgHeight!=containerHeight)
{jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying').find('.twentytwenty-container').css('margin-left',marginWidth+'px');jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying').find('.twentytwenty-container').css('width',imgWidth+'px');jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying').find('.twentytwenty-container').css('height',containerHeight+'px');if(!jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying').find('.twentytwenty-wrapper').length>0)
{jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying').find('.ewd-ulb-slide-img').append('<style>.ewd-ulb-slide-img:before{height:0px;}</style>');jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying').find('.twentytwenty-container').twentytwenty();}}}},toggleThumbnailBar:function(){jQuery('.ewd-ulb-bottom-thumbnail-bar, .ewd-ulb-top-thumbnail-bar, .ewd-thumbnail-toggle-down, .ewd-thumbnail-toggle-up').toggleClass('ewd-ulb-thumbnail-bar-hidden');jQuery('.ewd-thumbnail-toggle-down, .ewd-thumbnail-toggle-up').toggleClass('ewd-ulb-hidden');},toggleAutoplay:function(){if(this.settings.autoplay){this.stopAutoplay();}
else{this.startAutoplay();}},startAutoplay:function(){if(this.interval){clearInterval(this.interval);}
this.settings.autoplay=true;this.interval=setInterval(function(){lightbox.nextSlide();},this.settings.autoplay_interval);},stopAutoplay:function(){this.settings.autoplay=false;clearInterval(this.interval);},ZoomOut:function(){if(this.settings.zoomLevel==2){this.zoomOne();}
else if(this.settings.zoomLevel==1){this.noZoom();}
this.removeFullSize();},toggleZoom:function(){if(this.settings.zoomLevel==0){this.zoomOne();}
else if(this.settings.zoomLevel==1){this.zoomTwo();}
else{this.noZoom();}
this.removeFullSize();},zoomOne:function(){this.settings.zoomLevel=1;jQuery('.ewd-ulb-slide').addClass('ewd-ulb-zoom-one');jQuery('.ewd-ulb-slide').removeClass('ewd-ulb-zoom-two');},zoomTwo:function(){this.settings.zoomLevel=2;jQuery('.ewd-ulb-slide').removeClass('ewd-ulb-zoom-one');jQuery('.ewd-ulb-slide').addClass('ewd-ulb-zoom-two');},noZoom:function(){this.settings.zoomLevel=0;jQuery('.ewd-ulb-slide').removeClass('ewd-ulb-zoom-one');jQuery('.ewd-ulb-slide').removeClass('ewd-ulb-zoom-two');},fullscreen:function(){if(!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement){jQuery('ewd-ulb-fullscreen').addClass('ewd-ulb-regular_screen');if(document.documentElement.requestFullscreen){document.documentElement.requestFullscreen();}else if(document.documentElement.msRequestFullscreen){document.documentElement.msRequestFullscreen();}else if(document.documentElement.mozRequestFullScreen){document.documentElement.mozRequestFullScreen();}else if(document.documentElement.webkitRequestFullscreen){document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);}}else{jQuery('ewd-ulb-fullscreen').removeClass('ewd-ulb-regular_screen');if(document.exitFullscreen){document.exitFullscreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}}},toggleFullSize:function(){this.noZoom();if(this.settings.fullsize)
{this.removeFullSize();}
else
{this.goFullSize();}},goFullSize:function(){var elem=jQuery('.ewd-ulb-active-slide .ewd-ulb-slide-img img')[0];if(jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying').find('.twentytwenty-container').length>0)
{return;}
if(!elem.fullscreenElement&&!elem.mozFullScreenElement&&!elem.webkitFullscreenElement&&!elem.msFullscreenElement)
{jQuery('ewd-ulb-fullscreen').addClass('ewd-ulb-regular_screen');if(elem.requestFullscreen){elem.requestFullscreen();}else if(elem.msRequestFullscreen){elem.msRequestFullscreen();}else if(elem.mozRequestFullScreen){elem.mozRequestFullScreen();}else if(elem.webkitRequestFullscreen){elem.webkitRequestFullscreen();}}},removeFullSize:function(){jQuery('.ewd-ulb-slide').removeClass('ewd-ulb-fullsize-image');this.settings.fullsize=false;},setDownloadLinks:function(){jQuery('.ewd-ulb-download-link').attr('href',jQuery('.ewd-ulb-active-slide div img').attr('src'));},});jQuery(document).ready(function($){if(typeof ewd_ulb_php_data=="undefined")
{ewd_ulb_php_data=[];}
lightbox=new UltimateLightbox(ewd_ulb_php_data);jQuery('.ewd-ulb-lightbox, .ewd-ulb-open-lightbox').on('click',function(event){if(jQuery(event.currentTarget).hasClass('ewd-ulb-lightbox'))
{lightbox.currentSlide=jQuery(event.currentTarget).data('slideIndex');}
else
{lightbox.setCurrentSlide(event.currentTarget);}
lightbox.toggle();event.preventDefault();});if(jQuery('.ewd-ulb-lightbox, .ewd-ulb-lightbox-noclick-image').length)
{EWD_ULB_Add_Lightbox_HTML(lightbox);jQuery('.ewd-ulb-slide-container').on('click.background',function(event)
{if(event.toElement!==undefined&&(event.toElement.nodeName=="IMG"||event.toElement.nodeName=="iframe"||!ewd_ulb_php_data.background_close||event.toElement.className!="ewd-ulb-slide-img"))
{return;}
lightbox.toggle();});jQuery('.ewd-ulb-slide-control-next').on('click.next',function(){lightbox.noZoom();lightbox.stopAutoplay();lightbox.nextSlide();});jQuery('.ewd-ulb-slide-control-previous').on('click.prev',function(){lightbox.noZoom();lightbox.stopAutoplay();lightbox.previousSlide();});jQuery('.ewd-thumbnail-scroll-button-left').on('click.prev',function(){lightbox.noZoom();lightbox.stopAutoplay();});jQuery('.ewd-thumbnail-scroll-button-right').on('click.next',function(){lightbox.noZoom();lightbox.stopAutoplay();});jQuery('.ewd-ulb-slide-thumbnail').on('click.thumbnail',function(){var slideIndex=jQuery(this).data("slideindex");lightbox.noZoom();lightbox.stopAutoplay();lightbox.goToSlide(slideIndex);});jQuery('.ewd-thumbnail-toggle').on('click.thumbnail_toggle',function(){lightbox.toggleThumbnailBar();});jQuery(window).on('resize',function(){lightbox.resizeOverlay()});jQuery('.ewd-ulb-exit').on('click.exit',function(){lightbox.toggle();});jQuery('.ewd-ulb-autoplay').on('click.autoplay',function(){lightbox.toggleAutoplay();});jQuery('.ewd-ulb-zoom').on('click.zoom',function(){lightbox.toggleZoom();});jQuery('.ewd-ulb-zoom_out').on('click.zoom_out',function(){lightbox.ZoomOut();});jQuery('.ewd-ulb-fullsize').on('click.fullsize',function(){lightbox.toggleFullSize();});jQuery('.ewd-ulb-fullscreen').on('click.zoom_out',function(){lightbox.fullscreen();});jQuery('.ewd-ulb-download').wrap('<a class="ewd-ulb-download-link" href="empty.png" download></a>');if(lightbox.settings.keyboard_controls){jQuery(document).on('keyup',function(e){if(e.which==27){lightbox.closeLightbox();}
if(e.which==37){lightbox.noZoom();lightbox.stopAutoplay();lightbox.previousSlide();}
if(e.which==39){lightbox.noZoom();lightbox.stopAutoplay();lightbox.nextSlide();}});}
jQuery(".ewd-ulb-slide-area").on("touchstart",function(event){slider.longTouch=false;setTimeout(function(){window.slider.longTouch=true;},250);slider.touchstartx=event.originalEvent.touches[0].pageX;});jQuery(".ewd-ulb-slide-area").on("touchmove",function(event){slider.touchmovex=event.originalEvent.touches[0].pageX;slider.slideWidth=jQuery(".ewd-ulb-slide-container").width();slider.movex=(slider.touchstartx-slider.touchmovex);var panx=100-slider.movex/6;if(jQuery('.ewd-ulb-active-slide.ewd-ulb-image-displaying').find('.twentytwenty-container').length>0)
{return;}
if(slider.movex>0)
{if(slider.movex<600){jQuery(".ewd-ulb-slide-container").css('transform','translate3d(-'+slider.movex+'px,0,0)');}
if(panx<100){jQuery(".ewd-ulb-image-displaying img").css('transform','translate3d(-'+panx+'px,0,0)');}}
else if(slider.movex<0)
{if(slider.movex<600){jQuery(".ewd-ulb-slide-container").css('transform','translate3d('+Math.abs(slider.movex)+'px,0,0)');}
if(panx<100){jQuery(".ewd-ulb-image-displaying img").css('transform','translate3d('+Math.abs(panx)+'px,0,0)');}}});jQuery(".ewd-ulb-slide-area").on("touchend",function(event){var absMove=Math.abs(slider.movex);if(absMove>slider.slideWidth/2||slider.longTouch===false)
{if(slider.movex<0)
{lightbox.previousSlide();}
else if(slider.movex>0)
{lightbox.nextSlide();}}
jQuery(".ewd-ulb-slide-container").css('transform','none');jQuery(".ewd-ulb-image-displaying img").css('transform','none');});}});function EWD_ULB_Add_Lightbox_HTML(lightbox){var Custom_CSS='<style>';Custom_CSS+=lightbox.settings.custom_css;Custom_CSS+='</style>';Custom_CSS+=lightbox.settings.styling_options;var Top_Toolbar_HTML='<div class="ewd-ulb-top-toolbar">';Top_Toolbar_HTML+='<div class="ewd-ulb-left-top-toolbar">'+EWD_ULB_Add_Controls(lightbox.settings.controls.top_left_controls,lightbox.maxSlide)+'</div>';Top_Toolbar_HTML+='<div class="ewd-ulb-right-top-toolbar">'+EWD_ULB_Add_Controls(lightbox.settings.controls.top_right_controls,lightbox.maxSlide)+'</div>';Top_Toolbar_HTML+='</div>';var Top_Thumbnail_Bar_HTML='<div class="ewd-ulb-top-thumbnail-bar '+lightbox.settings.thumbnailsClass+'">';Top_Thumbnail_Bar_HTML+='<div class="ewd-thumbnail-scroll-button ewd-thumbnail-scroll-button-left">a</div>';Top_Thumbnail_Bar_HTML+='<div class="ewd-thumbnail-scroll-button ewd-thumbnail-scroll-button-right">b</div>';Top_Thumbnail_Bar_HTML+='<div class="ewd-ulb-top-thumbnails"><div class="ewd-ulb-thumbnails-inside">';if(lightbox.settings.show_thumbnails=="top"){Top_Thumbnail_Bar_HTML+=EWD_ULB_Thumbnails_HTML(lightbox.elements);}
Top_Thumbnail_Bar_HTML+='</div></div>';Top_Thumbnail_Bar_HTML+='</div>';if(lightbox.settings.show_thumbnail_toggle&&lightbox.settings.show_thumbnails=="top"){Top_Thumbnail_Bar_HTML+='<div class="ewd-thumbnail-toggle ewd-thumbnail-toggle-top ewd-thumbnail-toggle-down ewd-ulb-hidden">&#9660;</div><div class="ewd-thumbnail-toggle ewd-thumbnail-toggle-top ewd-thumbnail-toggle-up">&#9650;</div>';}
var Slide_Area_HTML='<div class="ewd-ulb-slide-area">';Slide_Area_HTML+='<div class="ewd-ulb-slide-control ewd-ulb-slide-control-previous ewd-ulb-arrow">‹</div>';Slide_Area_HTML+='<div class="ewd-ulb-slide-container">';jQuery(lightbox.elements).each(function(index,value){Slide_Area_HTML+='<div class="ewd-ulb-slide '+lightbox.settings.transition_class+'" data-slideindex="'+index+'">';Slide_Area_HTML+='<div class="ewd-ulb-slide-img">';if(this.video=="youtube"){Slide_Area_HTML+='<iframe width="'+this.width+'" height="'+this.height+'" src="'+this.source+'" frameborder="0" allowfullscreen></iframe>'}
else{Slide_Area_HTML+='<img src="'+this.source+'" />';}
Slide_Area_HTML+='</div>';if((this.title!=undefined&&this.title!="")||(this.description!=undefined&&this.description!="")){Slide_Area_HTML+='<div class="ewd-ulb-slide-overlay '+lightbox.settings.overlayClass+'">';if(this.title!=undefined&&this.title!=""){Slide_Area_HTML+='<div class="ewd-ulb-slide-title '+lightbox.settings.titleClass+'">'+this.title+'</div>';}
if(this.description!=undefined&&this.description!=""){Slide_Area_HTML+='<div class="ewd-ulb-slide-description '+lightbox.settings.descriptionClass+'">'+this.description+'</div>';}
Slide_Area_HTML+='</div>';}
Slide_Area_HTML+='</div>';});Slide_Area_HTML+='</div>';Slide_Area_HTML+='<div class="ewd-ulb-slide-control ewd-ulb-slide-control-next ewd-ulb-arrow">›</div>';Slide_Area_HTML+='</div>';var Bottom_Thumbnail_Bar_HTML='';if(lightbox.settings.show_thumbnail_toggle&&lightbox.settings.show_thumbnails=="bottom"){Bottom_Thumbnail_Bar_HTML+='<div class="ewd-thumbnail-toggle ewd-thumbnail-toggle-bottom ewd-thumbnail-toggle-down">&#9660;</div><div class="ewd-thumbnail-toggle ewd-thumbnail-toggle-bottom ewd-thumbnail-toggle-up ewd-ulb-hidden">&#9650;</div>';}
Bottom_Thumbnail_Bar_HTML+='<div class="ewd-ulb-bottom-thumbnail-bar '+lightbox.settings.thumbnailsClass+'">';Bottom_Thumbnail_Bar_HTML+='<div class="ewd-thumbnail-scroll-button ewd-thumbnail-scroll-button-left">a</div>';Bottom_Thumbnail_Bar_HTML+='<div class="ewd-thumbnail-scroll-button ewd-thumbnail-scroll-button-right">b</div>';Bottom_Thumbnail_Bar_HTML+='<div class="ewd-ulb-bottom-thumbnails"><div class="ewd-ulb-thumbnails-inside">';if(lightbox.settings.show_thumbnails=="bottom"){Bottom_Thumbnail_Bar_HTML+=EWD_ULB_Thumbnails_HTML(lightbox.elements);}
Bottom_Thumbnail_Bar_HTML+='</div></div>';Bottom_Thumbnail_Bar_HTML+='</div>';var Bottom_Toolbar_HTML='<div class="ewd-ulb-bottom-toolbar">';Bottom_Toolbar_HTML+='<div class="ewd-ulb-left-bottom-toolbar">'+EWD_ULB_Add_Controls(lightbox.settings.controls.bottom_left_controls,lightbox.maxSlide)+'</div>';Bottom_Toolbar_HTML+='<div class="ewd-ulb-right-bottom-toolbar">'+EWD_ULB_Add_Controls(lightbox.settings.controls.bottom_right_controls,lightbox.maxSlide)+'</div>';Bottom_Toolbar_HTML+='</div>';var HTML='<div class="ewd-ulb-background" style="display:none;width:'+lightbox.settings.width+';height:'+lightbox.settings.height+'"></div>';HTML+='<div class="ewd-ulb-lightbox-container ewd-ulb-thumbnails-'+lightbox.settings.show_thumbnails+'" style="display:none;">';HTML+=Custom_CSS;HTML+=Top_Toolbar_HTML;HTML+=Top_Thumbnail_Bar_HTML;HTML+=Slide_Area_HTML;HTML+=Bottom_Thumbnail_Bar_HTML;HTML+=Bottom_Toolbar_HTML;HTML+="</div>";jQuery('body').append(HTML);}
function EWD_ULB_Thumbnails_HTML(slides){var Slide_HTML='';var prev_gallery;jQuery(slides).each(function(index,value){Slide_HTML+='<div class="ewd-ulb-slide-thumbnail" data-slideindex="'+index+'" data-ulbGallery="'+this.gallery+'">';if(this.video=="youtube")
{Slide_HTML+='<img src="http://img.youtube.com/vi/'+/[^/]*$/.exec(this.source)[0]+'/default.jpg" />';}
else
{Slide_HTML+='<img src="'+this.source+'" />';}
Slide_HTML+='</div>';prev_gallery=this.gallery;});return Slide_HTML;}
function EWD_ULB_Add_Controls(controls,maxSlide){var Controls_HTML='';jQuery(controls).each(function(){if(this=='slide_counter'){Controls_HTML+='<div class="ewd-ulb-control ewd-ulb-slide-counter"><span class="ewd-ulb-current-count-indicator">1</span>/<span class="ewd-ulb-max-count-indicator">'+(maxSlide+1)+'</span></div>';}
else{Controls_HTML+='<div class="ewd-ulb-control ewd-ulb-'+this+'">'+lightbox.settings.ulb_icon_set+'</div>';}});return Controls_HTML;}
jQuery(document).ready(function($){$('.ewd-ulb-bottom-thumbnail-bar').each(function(){var thisThumbBar=$(this);var numberOfThumbs=thisThumbBar.find('.ewd-ulb-slide-thumbnail').length;var widthOfThumbsInside=numberOfThumbs*144;thisThumbBar.find('.ewd-ulb-thumbnails-inside').css('width',widthOfThumbsInside+'px');thisThumbBar.find('.ewd-thumbnail-scroll-button-right').click(function(){var widthOfThumbs=thisThumbBar.find('.ewd-ulb-bottom-thumbnails').width();if(widthOfThumbs>=widthOfThumbsInside){var rightClickStop=0;}
else{var rightClickStop=(widthOfThumbsInside*-1)+widthOfThumbs;}
var thumbsInsideLeft=thisThumbBar.find('.ewd-ulb-thumbnails-inside').position().left;if(thumbsInsideLeft!=rightClickStop){thisThumbBar.find('.ewd-ulb-thumbnails-inside').css('left','-=144');}});thisThumbBar.find('.ewd-thumbnail-scroll-button-left').click(function(){var leftClickStop=0;var thumbsInsideLeft=thisThumbBar.find('.ewd-ulb-thumbnails-inside').position().left;if(thumbsInsideLeft!=leftClickStop){thisThumbBar.find('.ewd-ulb-thumbnails-inside').css('left','+=144');}});});$('.ewd-ulb-top-thumbnail-bar').each(function(){var thisTopThumbBar=$(this);var numberOfTopThumbs=thisTopThumbBar.find('.ewd-ulb-slide-thumbnail').length;var widthOfTopThumbsInside=numberOfTopThumbs*144;thisTopThumbBar.find('.ewd-ulb-thumbnails-inside').css('width',widthOfTopThumbsInside+'px');thisTopThumbBar.find('.ewd-thumbnail-scroll-button-right').click(function(){var widthOfTopThumbs=thisTopThumbBar.find('.ewd-ulb-top-thumbnails').width();if(widthOfTopThumbs>=widthOfTopThumbsInside){var rightClickStopTop=0;}
else{var rightClickStopTop=(widthOfTopThumbsInside*-1)+widthOfTopThumbs;}
var thumbsInsideLeftTop=thisTopThumbBar.find('.ewd-ulb-thumbnails-inside').position().left;if(thumbsInsideLeftTop!=rightClickStopTop){thisTopThumbBar.find('.ewd-ulb-thumbnails-inside').css('left','-=144');}});thisTopThumbBar.find('.ewd-thumbnail-scroll-button-left').click(function(){var leftClickStopTop=0;var thumbsInsideLeftTop=thisTopThumbBar.find('.ewd-ulb-thumbnails-inside').position().left;if(thumbsInsideLeftTop!=leftClickStopTop){thisTopThumbBar.find('.ewd-ulb-thumbnails-inside').css('left','+=144');}});});});jQuery(document).ready(function($)
{$('.ewd-ulb-slide-img').each(function()
{var thisSlideImg=$(this);if(thisSlideImg.find('iframe').length>0)
{thisSlideImg.find('iframe').css({"display":"inline-block"})}});});
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
(function($){'use strict';if(typeof wpcf7==='undefined'||wpcf7===null){return;}
wpcf7=$.extend({cached:0,inputs:[]},wpcf7);$(function(){wpcf7.supportHtml5=(function(){var features={};var input=document.createElement('input');features.placeholder='placeholder'in input;var inputTypes=['email','url','tel','number','range','date'];$.each(inputTypes,function(index,value){input.setAttribute('type',value);features[value]=input.type!=='text';});return features;})();$('div.wpcf7 > form').each(function(){var $form=$(this);wpcf7.initForm($form);if(wpcf7.cached){wpcf7.refill($form);}});});wpcf7.getId=function(form){return parseInt($('input[name="_wpcf7"]',form).val(),10);};wpcf7.initForm=function(form){var $form=$(form);$form.submit(function(event){if(!wpcf7.supportHtml5.placeholder){$('[placeholder].placeheld',$form).each(function(i,n){$(n).val('').removeClass('placeheld');});}
if(typeof window.FormData==='function'){wpcf7.submit($form);event.preventDefault();}});$('.wpcf7-submit',$form).after('<span class="ajax-loader"></span>');wpcf7.toggleSubmit($form);$form.on('click','.wpcf7-acceptance',function(){wpcf7.toggleSubmit($form);});$('.wpcf7-exclusive-checkbox',$form).on('click','input:checkbox',function(){var name=$(this).attr('name');$form.find('input:checkbox[name="'+name+'"]').not(this).prop('checked',false);});$('.wpcf7-list-item.has-free-text',$form).each(function(){var $freetext=$(':input.wpcf7-free-text',this);var $wrap=$(this).closest('.wpcf7-form-control');if($(':checkbox, :radio',this).is(':checked')){$freetext.prop('disabled',false);}else{$freetext.prop('disabled',true);}
$wrap.on('change',':checkbox, :radio',function(){var $cb=$('.has-free-text',$wrap).find(':checkbox, :radio');if($cb.is(':checked')){$freetext.prop('disabled',false).focus();}else{$freetext.prop('disabled',true);}});});if(!wpcf7.supportHtml5.placeholder){$('[placeholder]',$form).each(function(){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');$(this).focus(function(){if($(this).hasClass('placeheld')){$(this).val('').removeClass('placeheld');}});$(this).blur(function(){if(''===$(this).val()){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');}});});}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.date){$form.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:'yy-mm-dd',minDate:new Date($(this).attr('min')),maxDate:new Date($(this).attr('max'))});});}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.number){$form.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr('min'),max:$(this).attr('max'),step:$(this).attr('step')});});}
$('.wpcf7-character-count',$form).each(function(){var $count=$(this);var name=$count.attr('data-target-name');var down=$count.hasClass('down');var starting=parseInt($count.attr('data-starting-value'),10);var maximum=parseInt($count.attr('data-maximum-value'),10);var minimum=parseInt($count.attr('data-minimum-value'),10);var updateCount=function(target){var $target=$(target);var length=$target.val().length;var count=down?starting-length:length;$count.attr('data-current-value',count);$count.text(count);if(maximum&&maximum<length){$count.addClass('too-long');}else{$count.removeClass('too-long');}
if(minimum&&length<minimum){$count.addClass('too-short');}else{$count.removeClass('too-short');}};$(':input[name="'+name+'"]',$form).each(function(){updateCount(this);$(this).keyup(function(){updateCount(this);});});});$form.on('change','.wpcf7-validates-as-url',function(){var val=$.trim($(this).val());if(val&&!val.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==val.indexOf('.')){val=val.replace(/^\/+/,'');val='http://'+val;}
$(this).val(val);});};wpcf7.submit=function(form){if(typeof window.FormData!=='function'){return;}
var $form=$(form);$('.ajax-loader',$form).addClass('is-active');wpcf7.clearResponse($form);var formData=new FormData($form.get(0));var detail={id:$form.closest('div.wpcf7').attr('id'),status:'init',inputs:[],formData:formData};$.each($form.serializeArray(),function(i,field){if('_wpcf7'==field.name){detail.contactFormId=field.value;}else if('_wpcf7_version'==field.name){detail.pluginVersion=field.value;}else if('_wpcf7_locale'==field.name){detail.contactFormLocale=field.value;}else if('_wpcf7_unit_tag'==field.name){detail.unitTag=field.value;}else if('_wpcf7_container_post'==field.name){detail.containerPostId=field.value;}else if(field.name.match(/^_wpcf7_\w+_free_text_/)){var owner=field.name.replace(/^_wpcf7_\w+_free_text_/,'');detail.inputs.push({name:owner+'-free-text',value:field.value});}else if(field.name.match(/^_/)){}else{detail.inputs.push(field);}});wpcf7.triggerEvent($form.closest('div.wpcf7'),'beforesubmit',detail);var ajaxSuccess=function(data,status,xhr,$form){detail.id=$(data.into).attr('id');detail.status=data.status;detail.apiResponse=data;var $message=$('.wpcf7-response-output',$form);switch(data.status){case'validation_failed':$.each(data.invalidFields,function(i,n){$(n.into,$form).each(function(){wpcf7.notValidTip(this,n.message);$('.wpcf7-form-control',this).addClass('wpcf7-not-valid');$('[aria-invalid]',this).attr('aria-invalid','true');});});$message.addClass('wpcf7-validation-errors');$form.addClass('invalid');wpcf7.triggerEvent(data.into,'invalid',detail);break;case'acceptance_missing':$message.addClass('wpcf7-acceptance-missing');$form.addClass('unaccepted');wpcf7.triggerEvent(data.into,'unaccepted',detail);break;case'spam':$message.addClass('wpcf7-spam-blocked');$form.addClass('spam');wpcf7.triggerEvent(data.into,'spam',detail);break;case'aborted':$message.addClass('wpcf7-aborted');$form.addClass('aborted');wpcf7.triggerEvent(data.into,'aborted',detail);break;case'mail_sent':$message.addClass('wpcf7-mail-sent-ok');$form.addClass('sent');wpcf7.triggerEvent(data.into,'mailsent',detail);break;case'mail_failed':$message.addClass('wpcf7-mail-sent-ng');$form.addClass('failed');wpcf7.triggerEvent(data.into,'mailfailed',detail);break;default:var customStatusClass='custom-'
+data.status.replace(/[^0-9a-z]+/i,'-');$message.addClass('wpcf7-'+customStatusClass);$form.addClass(customStatusClass);}
wpcf7.refill($form,data);wpcf7.triggerEvent(data.into,'submit',detail);if('mail_sent'==data.status){$form.each(function(){this.reset();});wpcf7.toggleSubmit($form);}
if(!wpcf7.supportHtml5.placeholder){$form.find('[placeholder].placeheld').each(function(i,n){$(n).val($(n).attr('placeholder'));});}
$message.html('').append(data.message).slideDown('fast');$message.attr('role','alert');$('.screen-reader-response',$form.closest('.wpcf7')).each(function(){var $response=$(this);$response.html('').attr('role','').append(data.message);if(data.invalidFields){var $invalids=$('<ul></ul>');$.each(data.invalidFields,function(i,n){if(n.idref){var $li=$('<li></li>').append($('<a></a>').attr('href','#'+n.idref).append(n.message));}else{var $li=$('<li></li>').append(n.message);}
$invalids.append($li);});$response.append($invalids);}
$response.attr('role','alert').focus();});};$.ajax({type:'POST',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/feedback'),data:formData,dataType:'json',processData:false,contentType:false}).done(function(data,status,xhr){ajaxSuccess(data,status,xhr,$form);$('.ajax-loader',$form).removeClass('is-active');}).fail(function(xhr,status,error){var $e=$('<div class="ajax-error"></div>').text(error.message);$form.after($e);});};wpcf7.triggerEvent=function(target,name,detail){var $target=$(target);var event=new CustomEvent('wpcf7'+name,{bubbles:true,detail:detail});$target.get(0).dispatchEvent(event);$target.trigger('wpcf7:'+name,detail);$target.trigger(name+'.wpcf7',detail);};wpcf7.toggleSubmit=function(form,state){var $form=$(form);var $submit=$('input:submit',$form);if(typeof state!=='undefined'){$submit.prop('disabled',!state);return;}
if($form.hasClass('wpcf7-acceptance-as-validation')){return;}
$submit.prop('disabled',false);$('.wpcf7-acceptance',$form).each(function(){var $span=$(this);var $input=$('input:checkbox',$span);if(!$span.hasClass('optional')){if($span.hasClass('invert')&&$input.is(':checked')||!$span.hasClass('invert')&&!$input.is(':checked')){$submit.prop('disabled',true);return false;}}});};wpcf7.notValidTip=function(target,message){var $target=$(target);$('.wpcf7-not-valid-tip',$target).remove();$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);if($target.is('.use-floating-validation-tip *')){var fadeOut=function(target){$(target).not(':hidden').animate({opacity:0},'fast',function(){$(this).css({'z-index':-100});});};$target.on('mouseover','.wpcf7-not-valid-tip',function(){fadeOut(this);});$target.on('focus',':input',function(){fadeOut($('.wpcf7-not-valid-tip',$target));});}};wpcf7.refill=function(form,data){var $form=$(form);var refillCaptcha=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find('img.wpcf7-captcha-'+i).attr('src',n);var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);$form.find('input:hidden[name="_wpcf7_captcha_challenge_'+i+'"]').attr('value',match[1]);});};var refillQuiz=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find(':input[name="'+i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);$form.find('input:hidden[name="_wpcf7_quiz_answer_'+i+'"]').attr('value',n[1]);});};if(typeof data==='undefined'){$.ajax({type:'GET',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/refill'),beforeSend:function(xhr){var nonce=$form.find(':input[name="_wpnonce"]').val();if(nonce){xhr.setRequestHeader('X-WP-Nonce',nonce);}},dataType:'json'}).done(function(data,status,xhr){if(data.captcha){refillCaptcha($form,data.captcha);}
if(data.quiz){refillQuiz($form,data.quiz);}});}else{if(data.captcha){refillCaptcha($form,data.captcha);}
if(data.quiz){refillQuiz($form,data.quiz);}}};wpcf7.clearResponse=function(form){var $form=$(form);$form.removeClass('invalid spam sent failed');$form.siblings('.screen-reader-response').html('').attr('role','');$('.wpcf7-not-valid-tip',$form).remove();$('[aria-invalid]',$form).attr('aria-invalid','false');$('.wpcf7-form-control',$form).removeClass('wpcf7-not-valid');$('.wpcf7-response-output',$form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');};wpcf7.apiSettings.getRoute=function(path){var url=wpcf7.apiSettings.root;url=url.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+path);return url;};})(jQuery);(function(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;})();
jQuery.fn.prettyPhoto=function(){return this;};jQuery.fn.fancybox=function(){return this;};jQuery.fn.fancyZoom=function(){return this;};jQuery.fn.colorbox=function(){return this;};jQuery.fn.magnificPopup=function(){return this;};jQuery.fn.FooBox=function(){return this;};

!function(){"use strict";function e(e){e.fn.swiper=function(a){var s;return e(this).each(function(){var e=new t(this,a);s||(s=e)}),s}}var a,t=function(e,s){function r(e){return Math.floor(e)}function i(){y.autoplayTimeoutId=setTimeout(function(){y.params.loop?(y.fixLoop(),y._slideNext(),y.emit("onAutoplay",y)):y.isEnd?s.autoplayStopOnLast?y.stopAutoplay():(y._slideTo(0),y.emit("onAutoplay",y)):(y._slideNext(),y.emit("onAutoplay",y))},y.params.autoplay)}function n(e,t){var s=a(e.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){y.onResize(!0),y.emit("onObserverUpdate",y,e)})});s.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),y.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!y.params.allowSwipeToNext&&(y.isHorizontal()&&39===a||!y.isHorizontal()&&40===a))return!1;if(!y.params.allowSwipeToPrev&&(y.isHorizontal()&&37===a||!y.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(y.container.parents(".swiper-slide").length>0&&0===y.container.parents(".swiper-slide-active").length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=y.container.offset();y.rtl&&(n.left=n.left-y.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+y.width,n.top],[n.left,n.top+y.height],[n.left+y.width,n.top+y.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}y.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!y.rtl||37===a&&y.rtl)&&y.slideNext(),(37===a&&!y.rtl||39===a&&y.rtl)&&y.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&y.slideNext(),38===a&&y.slidePrev())}}function p(e){e.originalEvent&&(e=e.originalEvent);var a=y.mousewheel.event,t=0,s=y.rtl?-1:1;if("mousewheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*s}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*s:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*s}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*s:-e.deltaY;if(0!==t){if(y.params.mousewheelInvert&&(t=-t),y.params.freeMode){var r=y.getWrapperTranslate()+t*y.params.mousewheelSensitivity,i=y.isBeginning,n=y.isEnd;if(r>=y.minTranslate()&&(r=y.minTranslate()),r<=y.maxTranslate()&&(r=y.maxTranslate()),y.setWrapperTransition(0),y.setWrapperTranslate(r),y.updateProgress(),y.updateActiveIndex(),(!i&&y.isBeginning||!n&&y.isEnd)&&y.updateClasses(),y.params.freeModeSticky?(clearTimeout(y.mousewheel.timeout),y.mousewheel.timeout=setTimeout(function(){y.slideReset()},300)):y.params.lazyLoading&&y.lazy&&y.lazy.load(),0===r||r===y.maxTranslate())return}else{if((new window.Date).getTime()-y.mousewheel.lastScrollTime>60)if(0>t)if(y.isEnd&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slideNext();else if(y.isBeginning&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slidePrev();y.mousewheel.lastScrollTime=(new window.Date).getTime()}return y.params.autoplay&&y.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function d(e,t){e=a(e);var s,r,i,n=y.rtl?-1:1;s=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):y.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",e.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},m=s&&s.virtualTranslate;s=s||{};var f={};for(var g in s)if("object"!=typeof s[g]||null===s[g]||(s[g].nodeType||s[g]===window||s[g]===document||"undefined"!=typeof Dom7&&s[g]instanceof Dom7||"undefined"!=typeof jQuery&&s[g]instanceof jQuery))f[g]=s[g];else{f[g]={};for(var h in s[g])f[g][h]=s[g][h]}for(var v in c)if("undefined"==typeof s[v])s[v]=c[v];else if("object"==typeof s[v])for(var w in c[v])"undefined"==typeof s[v][w]&&(s[v][w]=c[v][w]);var y=this;if(y.params=s,y.originalParams=f,y.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof Dom7&&(a=Dom7),("undefined"!=typeof a||(a="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(y.$=a,y.currentBreakpoint=void 0,y.getActiveBreakpoint=function(){if(!y.params.breakpoints)return!1;var e,a=!1,t=[];for(e in y.params.breakpoints)y.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)e=t[s],e>=window.innerWidth&&!a&&(a=e);return a||"max"},y.setBreakpoint=function(){var e=y.getActiveBreakpoint();if(e&&y.currentBreakpoint!==e){var a=e in y.params.breakpoints?y.params.breakpoints[e]:y.originalParams,t=y.params.loop&&a.slidesPerView!==y.params.slidesPerView;for(var s in a)y.params[s]=a[s];y.currentBreakpoint=e,t&&y.destroyLoop&&y.reLoop(!0)}},y.params.breakpoints&&y.setBreakpoint(),y.container=a(e),0!==y.container.length)){if(y.container.length>1){var b=[];return y.container.each(function(){b.push(new t(this,s))}),b}y.container[0].swiper=y,y.container.data("swiper",y),y.classNames.push("swiper-container-"+y.params.direction),y.params.freeMode&&y.classNames.push("swiper-container-free-mode"),y.support.flexbox||(y.classNames.push("swiper-container-no-flexbox"),y.params.slidesPerColumn=1),y.params.autoHeight&&y.classNames.push("swiper-container-autoheight"),(y.params.parallax||y.params.watchSlidesVisibility)&&(y.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(y.params.effect)>=0&&(y.support.transforms3d?(y.params.watchSlidesProgress=!0,y.classNames.push("swiper-container-3d")):y.params.effect="slide"),"slide"!==y.params.effect&&y.classNames.push("swiper-container-"+y.params.effect),"cube"===y.params.effect&&(y.params.resistanceRatio=0,y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.centeredSlides=!1,y.params.spaceBetween=0,y.params.virtualTranslate=!0,y.params.setWrapperSize=!1),("fade"===y.params.effect||"flip"===y.params.effect)&&(y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.watchSlidesProgress=!0,y.params.spaceBetween=0,y.params.setWrapperSize=!1,"undefined"==typeof m&&(y.params.virtualTranslate=!0)),y.params.grabCursor&&y.support.touch&&(y.params.grabCursor=!1),y.wrapper=y.container.children("."+y.params.wrapperClass),y.params.pagination&&(y.paginationContainer=a(y.params.pagination),y.params.uniqueNavElements&&"string"==typeof y.params.pagination&&y.paginationContainer.length>1&&1===y.container.find(y.params.pagination).length&&(y.paginationContainer=y.container.find(y.params.pagination)),"bullets"===y.params.paginationType&&y.params.paginationClickable?y.paginationContainer.addClass("swiper-pagination-clickable"):y.params.paginationClickable=!1,y.paginationContainer.addClass("swiper-pagination-"+y.params.paginationType)),(y.params.nextButton||y.params.prevButton)&&(y.params.nextButton&&(y.nextButton=a(y.params.nextButton),y.params.uniqueNavElements&&"string"==typeof y.params.nextButton&&y.nextButton.length>1&&1===y.container.find(y.params.nextButton).length&&(y.nextButton=y.container.find(y.params.nextButton))),y.params.prevButton&&(y.prevButton=a(y.params.prevButton),y.params.uniqueNavElements&&"string"==typeof y.params.prevButton&&y.prevButton.length>1&&1===y.container.find(y.params.prevButton).length&&(y.prevButton=y.container.find(y.params.prevButton)))),y.isHorizontal=function(){return"horizontal"===y.params.direction},y.rtl=y.isHorizontal()&&("rtl"===y.container[0].dir.toLowerCase()||"rtl"===y.container.css("direction")),y.rtl&&y.classNames.push("swiper-container-rtl"),y.rtl&&(y.wrongRTL="-webkit-box"===y.wrapper.css("display")),y.params.slidesPerColumn>1&&y.classNames.push("swiper-container-multirow"),y.device.android&&y.classNames.push("swiper-container-android"),y.container.addClass(y.classNames.join(" ")),y.translate=0,y.progress=0,y.velocity=0,y.lockSwipeToNext=function(){y.params.allowSwipeToNext=!1},y.lockSwipeToPrev=function(){y.params.allowSwipeToPrev=!1},y.lockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!1},y.unlockSwipeToNext=function(){y.params.allowSwipeToNext=!0},y.unlockSwipeToPrev=function(){y.params.allowSwipeToPrev=!0},y.unlockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!0},y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab"),y.imagesToLoad=[],y.imagesLoaded=0,y.loadImage=function(e,a,t,s,r){function i(){r&&r()}var n;e.complete&&s?i():a?(n=new window.Image,n.onload=i,n.onerror=i,t&&(n.srcset=t),a&&(n.src=a)):i()},y.preloadImages=function(){function e(){"undefined"!=typeof y&&null!==y&&(void 0!==y.imagesLoaded&&y.imagesLoaded++,y.imagesLoaded===y.imagesToLoad.length&&(y.params.updateOnImagesReady&&y.update(),y.emit("onImagesReady",y)))}y.imagesToLoad=y.container.find("img");for(var a=0;a<y.imagesToLoad.length;a++)y.loadImage(y.imagesToLoad[a],y.imagesToLoad[a].currentSrc||y.imagesToLoad[a].getAttribute("src"),y.imagesToLoad[a].srcset||y.imagesToLoad[a].getAttribute("srcset"),!0,e)},y.autoplayTimeoutId=void 0,y.autoplaying=!1,y.autoplayPaused=!1,y.startAutoplay=function(){return"undefined"!=typeof y.autoplayTimeoutId?!1:y.params.autoplay?y.autoplaying?!1:(y.autoplaying=!0,y.emit("onAutoplayStart",y),void i()):!1},y.stopAutoplay=function(e){y.autoplayTimeoutId&&(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplaying=!1,y.autoplayTimeoutId=void 0,y.emit("onAutoplayStop",y))},y.pauseAutoplay=function(e){y.autoplayPaused||(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplayPaused=!0,0===e?(y.autoplayPaused=!1,i()):y.wrapper.transitionEnd(function(){y&&(y.autoplayPaused=!1,y.autoplaying?i():y.stopAutoplay())}))},y.minTranslate=function(){return-y.snapGrid[0]},y.maxTranslate=function(){return-y.snapGrid[y.snapGrid.length-1]},y.updateAutoHeight=function(){var e=y.slides.eq(y.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&y.wrapper.css("height",a+"px")}},y.updateContainerSize=function(){var e,a;e="undefined"!=typeof y.params.width?y.params.width:y.container[0].clientWidth,a="undefined"!=typeof y.params.height?y.params.height:y.container[0].clientHeight,0===e&&y.isHorizontal()||0===a&&!y.isHorizontal()||(e=e-parseInt(y.container.css("padding-left"),10)-parseInt(y.container.css("padding-right"),10),a=a-parseInt(y.container.css("padding-top"),10)-parseInt(y.container.css("padding-bottom"),10),y.width=e,y.height=a,y.size=y.isHorizontal()?y.width:y.height)},y.updateSlidesSize=function(){y.slides=y.wrapper.children("."+y.params.slideClass),y.snapGrid=[],y.slidesGrid=[],y.slidesSizesGrid=[];var e,a=y.params.spaceBetween,t=-y.params.slidesOffsetBefore,s=0,i=0;if("undefined"!=typeof y.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*y.size),y.virtualSize=-a,y.rtl?y.slides.css({marginLeft:"",marginTop:""}):y.slides.css({marginRight:"",marginBottom:""});var n;y.params.slidesPerColumn>1&&(n=Math.floor(y.slides.length/y.params.slidesPerColumn)===y.slides.length/y.params.slidesPerColumn?y.slides.length:Math.ceil(y.slides.length/y.params.slidesPerColumn)*y.params.slidesPerColumn,"auto"!==y.params.slidesPerView&&"row"===y.params.slidesPerColumnFill&&(n=Math.max(n,y.params.slidesPerView*y.params.slidesPerColumn)));var o,l=y.params.slidesPerColumn,p=n/l,d=p-(y.params.slidesPerColumn*p-y.slides.length);for(e=0;e<y.slides.length;e++){o=0;var u=y.slides.eq(e);if(y.params.slidesPerColumn>1){var c,m,f;"column"===y.params.slidesPerColumnFill?(m=Math.floor(e/l),f=e-m*l,(m>d||m===d&&f===l-1)&&++f>=l&&(f=0,m++),c=m+f*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(f=Math.floor(e/p),m=e-f*p),u.css({"margin-top":0!==f&&y.params.spaceBetween&&y.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",f)}"none"!==u.css("display")&&("auto"===y.params.slidesPerView?(o=y.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),y.params.roundLengths&&(o=r(o))):(o=(y.size-(y.params.slidesPerView-1)*a)/y.params.slidesPerView,y.params.roundLengths&&(o=r(o)),y.isHorizontal()?y.slides[e].style.width=o+"px":y.slides[e].style.height=o+"px"),y.slides[e].swiperSlideSize=o,y.slidesSizesGrid.push(o),y.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-y.size/2-a),Math.abs(t)<.001&&(t=0),i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t)):(i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t),t=t+o+a),y.virtualSize+=o+a,s=o,i++)}y.virtualSize=Math.max(y.virtualSize,y.size)+y.params.slidesOffsetAfter;var g;if(y.rtl&&y.wrongRTL&&("slide"===y.params.effect||"coverflow"===y.params.effect)&&y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),(!y.support.flexbox||y.params.setWrapperSize)&&(y.isHorizontal()?y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}):y.wrapper.css({height:y.virtualSize+y.params.spaceBetween+"px"})),y.params.slidesPerColumn>1&&(y.virtualSize=(o+y.params.spaceBetween)*n,y.virtualSize=Math.ceil(y.virtualSize/y.params.slidesPerColumn)-y.params.spaceBetween,y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),y.params.centeredSlides)){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<y.virtualSize+y.snapGrid[0]&&g.push(y.snapGrid[e]);y.snapGrid=g}if(!y.params.centeredSlides){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<=y.virtualSize-y.size&&g.push(y.snapGrid[e]);y.snapGrid=g,Math.floor(y.virtualSize-y.size)-Math.floor(y.snapGrid[y.snapGrid.length-1])>1&&y.snapGrid.push(y.virtualSize-y.size)}0===y.snapGrid.length&&(y.snapGrid=[0]),0!==y.params.spaceBetween&&(y.isHorizontal()?y.rtl?y.slides.css({marginLeft:a+"px"}):y.slides.css({marginRight:a+"px"}):y.slides.css({marginBottom:a+"px"})),y.params.watchSlidesProgress&&y.updateSlidesOffset()}},y.updateSlidesOffset=function(){for(var e=0;e<y.slides.length;e++)y.slides[e].swiperSlideOffset=y.isHorizontal()?y.slides[e].offsetLeft:y.slides[e].offsetTop},y.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=y.translate||0),0!==y.slides.length){"undefined"==typeof y.slides[0].swiperSlideOffset&&y.updateSlidesOffset();var a=-e;y.rtl&&(a=e),y.slides.removeClass(y.params.slideVisibleClass);for(var t=0;t<y.slides.length;t++){var s=y.slides[t],r=(a-s.swiperSlideOffset)/(s.swiperSlideSize+y.params.spaceBetween);if(y.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+y.slidesSizesGrid[t],o=i>=0&&i<y.size||n>0&&n<=y.size||0>=i&&n>=y.size;o&&y.slides.eq(t).addClass(y.params.slideVisibleClass)}s.progress=y.rtl?-r:r}}},y.updateProgress=function(e){"undefined"==typeof e&&(e=y.translate||0);var a=y.maxTranslate()-y.minTranslate(),t=y.isBeginning,s=y.isEnd;0===a?(y.progress=0,y.isBeginning=y.isEnd=!0):(y.progress=(e-y.minTranslate())/a,y.isBeginning=y.progress<=0,y.isEnd=y.progress>=1),y.isBeginning&&!t&&y.emit("onReachBeginning",y),y.isEnd&&!s&&y.emit("onReachEnd",y),y.params.watchSlidesProgress&&y.updateSlidesProgress(e),y.emit("onProgress",y,y.progress)},y.updateActiveIndex=function(){var e,a,t,s=y.rtl?y.translate:-y.translate;for(a=0;a<y.slidesGrid.length;a++)"undefined"!=typeof y.slidesGrid[a+1]?s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]-(y.slidesGrid[a+1]-y.slidesGrid[a])/2?e=a:s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]&&(e=a+1):s>=y.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/y.params.slidesPerGroup),t>=y.snapGrid.length&&(t=y.snapGrid.length-1),e!==y.activeIndex&&(y.snapIndex=t,y.previousIndex=y.activeIndex,y.activeIndex=e,y.updateClasses())},y.updateClasses=function(){y.slides.removeClass(y.params.slideActiveClass+" "+y.params.slideNextClass+" "+y.params.slidePrevClass);var e=y.slides.eq(y.activeIndex);e.addClass(y.params.slideActiveClass);var t=e.next("."+y.params.slideClass).addClass(y.params.slideNextClass);y.params.loop&&0===t.length&&y.slides.eq(0).addClass(y.params.slideNextClass);var s=e.prev("."+y.params.slideClass).addClass(y.params.slidePrevClass);if(y.params.loop&&0===s.length&&y.slides.eq(-1).addClass(y.params.slidePrevClass),y.paginationContainer&&y.paginationContainer.length>0){var r,i=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length;if(y.params.loop?(r=Math.ceil((y.activeIndex-y.loopedSlides)/y.params.slidesPerGroup),r>y.slides.length-1-2*y.loopedSlides&&(r-=y.slides.length-2*y.loopedSlides),r>i-1&&(r-=i),0>r&&"bullets"!==y.params.paginationType&&(r=i+r)):r="undefined"!=typeof y.snapIndex?y.snapIndex:y.activeIndex||0,"bullets"===y.params.paginationType&&y.bullets&&y.bullets.length>0&&(y.bullets.removeClass(y.params.bulletActiveClass),y.paginationContainer.length>1?y.bullets.each(function(){a(this).index()===r&&a(this).addClass(y.params.bulletActiveClass)}):y.bullets.eq(r).addClass(y.params.bulletActiveClass)),"fraction"===y.params.paginationType&&(y.paginationContainer.find("."+y.params.paginationCurrentClass).text(r+1),y.paginationContainer.find("."+y.params.paginationTotalClass).text(i)),"progress"===y.params.paginationType){var n=(r+1)/i,o=n,l=1;y.isHorizontal()||(l=n,o=1),y.paginationContainer.find("."+y.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+l+")").transition(y.params.speed)}"custom"===y.params.paginationType&&y.params.paginationCustomRender&&(y.paginationContainer.html(y.params.paginationCustomRender(y,r+1,i)),y.emit("onPaginationRendered",y,y.paginationContainer[0]))}y.params.loop||(y.params.prevButton&&y.prevButton&&y.prevButton.length>0&&(y.isBeginning?(y.prevButton.addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(y.prevButton)):(y.prevButton.removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(y.prevButton))),y.params.nextButton&&y.nextButton&&y.nextButton.length>0&&(y.isEnd?(y.nextButton.addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(y.nextButton)):(y.nextButton.removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(y.nextButton))))},y.updatePagination=function(){if(y.params.pagination&&y.paginationContainer&&y.paginationContainer.length>0){var e="";if("bullets"===y.params.paginationType){for(var a=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length,t=0;a>t;t++)e+=y.params.paginationBulletRender?y.params.paginationBulletRender(t,y.params.bulletClass):"<"+y.params.paginationElement+' class="'+y.params.bulletClass+'"></'+y.params.paginationElement+">";y.paginationContainer.html(e),y.bullets=y.paginationContainer.find("."+y.params.bulletClass),y.params.paginationClickable&&y.params.a11y&&y.a11y&&y.a11y.initPagination()}"fraction"===y.params.paginationType&&(e=y.params.paginationFractionRender?y.params.paginationFractionRender(y,y.params.paginationCurrentClass,y.params.paginationTotalClass):'<span class="'+y.params.paginationCurrentClass+'"></span> / <span class="'+y.params.paginationTotalClass+'"></span>',y.paginationContainer.html(e)),"progress"===y.params.paginationType&&(e=y.params.paginationProgressRender?y.params.paginationProgressRender(y,y.params.paginationProgressbarClass):'<span class="'+y.params.paginationProgressbarClass+'"></span>',y.paginationContainer.html(e)),"custom"!==y.params.paginationType&&y.emit("onPaginationRendered",y,y.paginationContainer[0])}},y.update=function(e){function a(){s=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate()),y.setWrapperTranslate(s),y.updateActiveIndex(),y.updateClasses()}if(y.updateContainerSize(),y.updateSlidesSize(),y.updateProgress(),y.updatePagination(),y.updateClasses(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),e){var t,s;y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode?(a(),y.params.autoHeight&&y.updateAutoHeight()):(t=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0),t||a())}else y.params.autoHeight&&y.updateAutoHeight()},y.onResize=function(e){y.params.breakpoints&&y.setBreakpoint();var a=y.params.allowSwipeToPrev,t=y.params.allowSwipeToNext;y.params.allowSwipeToPrev=y.params.allowSwipeToNext=!0,y.updateContainerSize(),y.updateSlidesSize(),("auto"===y.params.slidesPerView||y.params.freeMode||e)&&y.updatePagination(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),y.controller&&y.controller.spline&&(y.controller.spline=void 0);var s=!1;if(y.params.freeMode){var r=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate());y.setWrapperTranslate(r),y.updateActiveIndex(),y.updateClasses(),y.params.autoHeight&&y.updateAutoHeight()}else y.updateClasses(),s=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0);y.params.lazyLoading&&!s&&y.lazy&&y.lazy.load(),y.params.allowSwipeToPrev=a,y.params.allowSwipeToNext=t};var x=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?x=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(x=["MSPointerDown","MSPointerMove","MSPointerUp"]),y.touchEvents={start:y.support.touch||!y.params.simulateTouch?"touchstart":x[0],move:y.support.touch||!y.params.simulateTouch?"touchmove":x[1],end:y.support.touch||!y.params.simulateTouch?"touchend":x[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===y.params.touchEventsTarget?y.container:y.wrapper).addClass("swiper-wp8-"+y.params.direction),y.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===y.params.touchEventsTarget?y.container[0]:y.wrapper[0],i=y.support.touch?r:document,n=y.params.nested?!0:!1;y.browser.ie?(r[t](y.touchEvents.start,y.onTouchStart,!1),i[t](y.touchEvents.move,y.onTouchMove,n),i[t](y.touchEvents.end,y.onTouchEnd,!1)):(y.support.touch&&(r[t](y.touchEvents.start,y.onTouchStart,!1),r[t](y.touchEvents.move,y.onTouchMove,n),r[t](y.touchEvents.end,y.onTouchEnd,!1)),!s.simulateTouch||y.device.ios||y.device.android||(r[t]("mousedown",y.onTouchStart,!1),document[t]("mousemove",y.onTouchMove,n),document[t]("mouseup",y.onTouchEnd,!1))),window[t]("resize",y.onResize),y.params.nextButton&&y.nextButton&&y.nextButton.length>0&&(y.nextButton[a]("click",y.onClickNext),y.params.a11y&&y.a11y&&y.nextButton[a]("keydown",y.a11y.onEnterKey)),y.params.prevButton&&y.prevButton&&y.prevButton.length>0&&(y.prevButton[a]("click",y.onClickPrev),y.params.a11y&&y.a11y&&y.prevButton[a]("keydown",y.a11y.onEnterKey)),y.params.pagination&&y.params.paginationClickable&&(y.paginationContainer[a]("click","."+y.params.bulletClass,y.onClickIndex),y.params.a11y&&y.a11y&&y.paginationContainer[a]("keydown","."+y.params.bulletClass,y.a11y.onEnterKey)),(y.params.preventClicks||y.params.preventClicksPropagation)&&r[t]("click",y.preventClicks,!0)},y.attachEvents=function(){y.initEvents()},y.detachEvents=function(){y.initEvents(!0)},y.allowClick=!0,y.preventClicks=function(e){y.allowClick||(y.params.preventClicks&&e.preventDefault(),y.params.preventClicksPropagation&&y.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},y.onClickNext=function(e){e.preventDefault(),(!y.isEnd||y.params.loop)&&y.slideNext()},y.onClickPrev=function(e){e.preventDefault(),(!y.isBeginning||y.params.loop)&&y.slidePrev()},y.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*y.params.slidesPerGroup;y.params.loop&&(t+=y.loopedSlides),y.slideTo(t)},y.updateClickedSlide=function(e){var t=n(e,"."+y.params.slideClass),s=!1;if(t)for(var r=0;r<y.slides.length;r++)y.slides[r]===t&&(s=!0);if(!t||!s)return y.clickedSlide=void 0,void(y.clickedIndex=void 0);if(y.clickedSlide=t,y.clickedIndex=a(t).index(),y.params.slideToClickedSlide&&void 0!==y.clickedIndex&&y.clickedIndex!==y.activeIndex){var i,o=y.clickedIndex;if(y.params.loop){if(y.animating)return;i=a(y.clickedSlide).attr("data-swiper-slide-index"),y.params.centeredSlides?o<y.loopedSlides-y.params.slidesPerView/2||o>y.slides.length-y.loopedSlides+y.params.slidesPerView/2?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o):o>y.slides.length-y.params.slidesPerView?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o)}else y.slideTo(o)}};var T,S,C,z,M,P,I,k,E,B,D="input, select, textarea, button",L=Date.now(),H=[];y.animating=!1,y.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,A;if(y.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(y.params.noSwiping&&n(e,"."+y.params.noSwipingClass))return void(y.allowClick=!0);if(!y.params.swipeHandler||n(e,y.params.swipeHandler)){var t=y.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s=y.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(y.device.ios&&y.params.iOSEdgeSwipeDetection&&t<=y.params.iOSEdgeSwipeThreshold)){if(T=!0,S=!1,C=!0,M=void 0,A=void 0,y.touches.startX=t,y.touches.startY=s,z=Date.now(),y.allowClick=!0,y.updateContainerSize(),y.swipeDirection=void 0,y.params.threshold>0&&(k=!1),"touchstart"!==e.type){var r=!0;a(e.target).is(D)&&(r=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),r&&e.preventDefault()}y.emit("onTouchStart",y,e)}}}},y.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!G||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return y.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(y.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(y.params.onlyExternal)return y.allowClick=!1,void(T&&(y.touches.startX=y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.startY=y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,z=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return S=!0,void(y.allowClick=!1);if(C&&y.emit("onTouchMove",y,e),!(e.targetTouches&&e.targetTouches.length>1)){if(y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof M){var t=180*Math.atan2(Math.abs(y.touches.currentY-y.touches.startY),Math.abs(y.touches.currentX-y.touches.startX))/Math.PI;M=y.isHorizontal()?t>y.params.touchAngle:90-t>y.params.touchAngle}if(M&&y.emit("onTouchMoveOpposite",y,e),"undefined"==typeof A&&y.browser.ieTouch&&(y.touches.currentX!==y.touches.startX||y.touches.currentY!==y.touches.startY)&&(A=!0),T){if(M)return void(T=!1);if(A||!y.browser.ieTouch){y.allowClick=!1,y.emit("onSliderMove",y,e),e.preventDefault(),y.params.touchMoveStopPropagation&&!y.params.nested&&e.stopPropagation(),S||(s.loop&&y.fixLoop(),I=y.getWrapperTranslate(),y.setWrapperTransition(0),y.animating&&y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),y.params.autoplay&&y.autoplaying&&(y.params.autoplayDisableOnInteraction?y.stopAutoplay():y.pauseAutoplay()),B=!1,y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grabbing",y.container[0].style.cursor="-moz-grabbin",y.container[0].style.cursor="grabbing")),S=!0;var r=y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY;r*=y.params.touchRatio,y.rtl&&(r=-r),y.swipeDirection=r>0?"prev":"next",P=r+I;var i=!0;if(r>0&&P>y.minTranslate()?(i=!1,y.params.resistance&&(P=y.minTranslate()-1+Math.pow(-y.minTranslate()+I+r,y.params.resistanceRatio))):0>r&&P<y.maxTranslate()&&(i=!1,y.params.resistance&&(P=y.maxTranslate()+1-Math.pow(y.maxTranslate()-I-r,y.params.resistanceRatio))),
i&&(e.preventedByNestedSwiper=!0),!y.params.allowSwipeToNext&&"next"===y.swipeDirection&&I>P&&(P=I),!y.params.allowSwipeToPrev&&"prev"===y.swipeDirection&&P>I&&(P=I),y.params.followFinger){if(y.params.threshold>0){if(!(Math.abs(r)>y.params.threshold||k))return void(P=I);if(!k)return k=!0,y.touches.startX=y.touches.currentX,y.touches.startY=y.touches.currentY,P=I,void(y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY)}(y.params.freeMode||y.params.watchSlidesProgress)&&y.updateActiveIndex(),y.params.freeMode&&(0===H.length&&H.push({position:y.touches[y.isHorizontal()?"startX":"startY"],time:z}),H.push({position:y.touches[y.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),y.updateProgress(P),y.setWrapperTranslate(P)}}}}}},y.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),C&&y.emit("onTouchEnd",y,e),C=!1,T){y.params.grabCursor&&S&&T&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab");var t=Date.now(),s=t-z;if(y.allowClick&&(y.updateClickedSlide(e),y.emit("onTap",y,e),300>s&&t-L>300&&(E&&clearTimeout(E),E=setTimeout(function(){y&&(y.params.paginationHide&&y.paginationContainer.length>0&&!a(e.target).hasClass(y.params.bulletClass)&&y.paginationContainer.toggleClass(y.params.paginationHiddenClass),y.emit("onClick",y,e))},300)),300>s&&300>t-L&&(E&&clearTimeout(E),y.emit("onDoubleTap",y,e))),L=Date.now(),setTimeout(function(){y&&(y.allowClick=!0)},0),!T||!S||!y.swipeDirection||0===y.touches.diff||P===I)return void(T=S=!1);T=S=!1;var r;if(r=y.params.followFinger?y.rtl?y.translate:-y.translate:-P,y.params.freeMode){if(r<-y.minTranslate())return void y.slideTo(y.activeIndex);if(r>-y.maxTranslate())return void(y.slides.length<y.snapGrid.length?y.slideTo(y.snapGrid.length-1):y.slideTo(y.slides.length-1));if(y.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;y.velocity=o/l,y.velocity=y.velocity/2,Math.abs(y.velocity)<y.params.freeModeMinimumVelocity&&(y.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(y.velocity=0)}else y.velocity=0;H.length=0;var p=1e3*y.params.freeModeMomentumRatio,d=y.velocity*p,u=y.translate+d;y.rtl&&(u=-u);var c,m=!1,f=20*Math.abs(y.velocity)*y.params.freeModeMomentumBounceRatio;if(u<y.maxTranslate())y.params.freeModeMomentumBounce?(u+y.maxTranslate()<-f&&(u=y.maxTranslate()-f),c=y.maxTranslate(),m=!0,B=!0):u=y.maxTranslate();else if(u>y.minTranslate())y.params.freeModeMomentumBounce?(u-y.minTranslate()>f&&(u=y.minTranslate()+f),c=y.minTranslate(),m=!0,B=!0):u=y.minTranslate();else if(y.params.freeModeSticky){var g,h=0;for(h=0;h<y.snapGrid.length;h+=1)if(y.snapGrid[h]>-u){g=h;break}u=Math.abs(y.snapGrid[g]-u)<Math.abs(y.snapGrid[g-1]-u)||"next"===y.swipeDirection?y.snapGrid[g]:y.snapGrid[g-1],y.rtl||(u=-u)}if(0!==y.velocity)p=y.rtl?Math.abs((-u-y.translate)/y.velocity):Math.abs((u-y.translate)/y.velocity);else if(y.params.freeModeSticky)return void y.slideReset();y.params.freeModeMomentumBounce&&m?(y.updateProgress(c),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating=!0,y.wrapper.transitionEnd(function(){y&&B&&(y.emit("onMomentumBounce",y),y.setWrapperTransition(y.params.speed),y.setWrapperTranslate(c),y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))})):y.velocity?(y.updateProgress(u),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))):y.updateProgress(u),y.updateActiveIndex()}return void((!y.params.freeModeMomentum||s>=y.params.longSwipesMs)&&(y.updateProgress(),y.updateActiveIndex()))}var v,w=0,b=y.slidesSizesGrid[0];for(v=0;v<y.slidesGrid.length;v+=y.params.slidesPerGroup)"undefined"!=typeof y.slidesGrid[v+y.params.slidesPerGroup]?r>=y.slidesGrid[v]&&r<y.slidesGrid[v+y.params.slidesPerGroup]&&(w=v,b=y.slidesGrid[v+y.params.slidesPerGroup]-y.slidesGrid[v]):r>=y.slidesGrid[v]&&(w=v,b=y.slidesGrid[y.slidesGrid.length-1]-y.slidesGrid[y.slidesGrid.length-2]);var x=(r-y.slidesGrid[w])/b;if(s>y.params.longSwipesMs){if(!y.params.longSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&(x>=y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w)),"prev"===y.swipeDirection&&(x>1-y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w))}else{if(!y.params.shortSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&y.slideTo(w+y.params.slidesPerGroup),"prev"===y.swipeDirection&&y.slideTo(w)}}},y._slideTo=function(e,a){return y.slideTo(e,a,!0,!0)},y.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),y.snapIndex=Math.floor(e/y.params.slidesPerGroup),y.snapIndex>=y.snapGrid.length&&(y.snapIndex=y.snapGrid.length-1);var r=-y.snapGrid[y.snapIndex];y.params.autoplay&&y.autoplaying&&(s||!y.params.autoplayDisableOnInteraction?y.pauseAutoplay(a):y.stopAutoplay()),y.updateProgress(r);for(var i=0;i<y.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*y.slidesGrid[i])&&(e=i);return!y.params.allowSwipeToNext&&r<y.translate&&r<y.minTranslate()?!1:!y.params.allowSwipeToPrev&&r>y.translate&&r>y.maxTranslate()&&(y.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=y.params.speed),y.previousIndex=y.activeIndex||0,y.activeIndex=e,y.rtl&&-r===y.translate||!y.rtl&&r===y.translate?(y.params.autoHeight&&y.updateAutoHeight(),y.updateClasses(),"slide"!==y.params.effect&&y.setWrapperTranslate(r),!1):(y.updateClasses(),y.onTransitionStart(t),0===a?(y.setWrapperTranslate(r),y.setWrapperTransition(0),y.onTransitionEnd(t)):(y.setWrapperTranslate(r),y.setWrapperTransition(a),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd(t)}))),!0))},y.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),y.params.autoHeight&&y.updateAutoHeight(),y.lazy&&y.lazy.onTransitionStart(),e&&(y.emit("onTransitionStart",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeStart",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextStart",y):y.emit("onSlidePrevStart",y)))},y.onTransitionEnd=function(e){y.animating=!1,y.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),y.lazy&&y.lazy.onTransitionEnd(),e&&(y.emit("onTransitionEnd",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeEnd",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextEnd",y):y.emit("onSlidePrevEnd",y))),y.params.hashnav&&y.hashnav&&y.hashnav.setHash()},y.slideNext=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)}return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)},y._slideNext=function(e){return y.slideNext(!0,e,!0)},y.slidePrev=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex-1,a,e,t)}return y.slideTo(y.activeIndex-1,a,e,t)},y._slidePrev=function(e){return y.slidePrev(!0,e,!0)},y.slideReset=function(e,a,t){return y.slideTo(y.activeIndex,a,e)},y.setWrapperTransition=function(e,a){y.wrapper.transition(e),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTransition(e),y.params.parallax&&y.parallax&&y.parallax.setTransition(e),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTransition(e),y.params.control&&y.controller&&y.controller.setTransition(e,a),y.emit("onSetTransition",y,e)},y.setWrapperTranslate=function(e,a,t){var s=0,i=0,n=0;y.isHorizontal()?s=y.rtl?-e:e:i=e,y.params.roundLengths&&(s=r(s),i=r(i)),y.params.virtualTranslate||(y.support.transforms3d?y.wrapper.transform("translate3d("+s+"px, "+i+"px, "+n+"px)"):y.wrapper.transform("translate("+s+"px, "+i+"px)")),y.translate=y.isHorizontal()?s:i;var o,l=y.maxTranslate()-y.minTranslate();o=0===l?0:(e-y.minTranslate())/l,o!==y.progress&&y.updateProgress(e),a&&y.updateActiveIndex(),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTranslate(y.translate),y.params.parallax&&y.parallax&&y.parallax.setTranslate(y.translate),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTranslate(y.translate),y.params.control&&y.controller&&y.controller.setTranslate(y.translate,t),y.emit("onSetTranslate",y,y.translate)},y.getTranslate=function(e,a){var t,s,r,i;return"undefined"==typeof a&&(a="x"),y.params.virtualTranslate?y.rtl?-y.translate:y.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),y.rtl&&s&&(s=-s),s||0)},y.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=y.isHorizontal()?"x":"y"),y.getTranslate(y.wrapper[0],e)},y.observers=[],y.initObservers=function(){if(y.params.observeParents)for(var e=y.container.parents(),a=0;a<e.length;a++)o(e[a]);o(y.container[0],{childList:!1}),o(y.wrapper[0],{attributes:!1})},y.disconnectObservers=function(){for(var e=0;e<y.observers.length;e++)y.observers[e].disconnect();y.observers=[]},y.createLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove();var e=y.wrapper.children("."+y.params.slideClass);"auto"!==y.params.slidesPerView||y.params.loopedSlides||(y.params.loopedSlides=e.length),y.loopedSlides=parseInt(y.params.loopedSlides||y.params.slidesPerView,10),y.loopedSlides=y.loopedSlides+y.params.loopAdditionalSlides,y.loopedSlides>e.length&&(y.loopedSlides=e.length);var t,s=[],r=[];for(e.each(function(t,i){var n=a(this);t<y.loopedSlides&&r.push(i),t<e.length&&t>=e.length-y.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)y.wrapper.append(a(r[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)y.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass))},y.destroyLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove(),y.slides.removeAttr("data-swiper-slide-index")},y.reLoop=function(e){var a=y.activeIndex-y.loopedSlides;y.destroyLoop(),y.createLoop(),y.updateSlidesSize(),e&&y.slideTo(a+y.loopedSlides,0,!1)},y.fixLoop=function(){var e;y.activeIndex<y.loopedSlides?(e=y.slides.length-3*y.loopedSlides+y.activeIndex,e+=y.loopedSlides,y.slideTo(e,0,!1,!0)):("auto"===y.params.slidesPerView&&y.activeIndex>=2*y.loopedSlides||y.activeIndex>y.slides.length-2*y.params.slidesPerView)&&(e=-y.slides.length+y.activeIndex+y.loopedSlides,e+=y.loopedSlides,y.slideTo(e,0,!1,!0))},y.appendSlide=function(e){if(y.params.loop&&y.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&y.wrapper.append(e[a]);else y.wrapper.append(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0)},y.prependSlide=function(e){y.params.loop&&y.destroyLoop();var a=y.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&y.wrapper.prepend(e[t]);a=y.activeIndex+e.length}else y.wrapper.prepend(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.slideTo(a,0,!1)},y.removeSlide=function(e){y.params.loop&&(y.destroyLoop(),y.slides=y.wrapper.children("."+y.params.slideClass));var a,t=y.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.params.loop?y.slideTo(t+y.loopedSlides,0,!1):y.slideTo(t,0,!1)},y.removeAllSlides=function(){for(var e=[],a=0;a<y.slides.length;a++)e.push(a);y.removeSlide(e)},y.effects={fade:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var a=y.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;y.params.virtualTranslate||(s-=y.translate);var r=0;y.isHorizontal()||(r=s,s=0);var i=y.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(y.slides.transition(e),y.params.virtualTranslate&&0!==e){var a=!1;y.slides.transitionEnd(function(){if(!a&&y){a=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)y.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var t=y.slides.eq(e),s=t[0].progress;y.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(y.isHorizontal()?y.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+y.slides.length,y.params.flip.slideShadows){var d=y.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=y.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.virtualTranslate&&0!==e){var t=!1;y.slides.eq(y.activeIndex).transitionEnd(function(){if(!t&&y&&a(this).hasClass(y.params.slideActiveClass)){t=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<e.length;s++)y.wrapper.trigger(e[s])}})}}},cube:{setTranslate:function(){var e,t=0;y.params.cube.shadow&&(y.isHorizontal()?(e=y.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.wrapper.append(e)),e.css({height:y.width+"px"})):(e=y.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.container.append(e))));for(var s=0;s<y.slides.length;s++){var r=y.slides.eq(s),i=90*s,n=Math.floor(i/360);y.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4===0?(l=4*-n*y.size,d=0):(s-1)%4===0?(l=0,d=4*-n*y.size):(s-2)%4===0?(l=y.size+4*n*y.size,d=y.size):(s-3)%4===0&&(l=-y.size,d=3*y.size+4*y.size*n),y.rtl&&(l=-l),y.isHorizontal()||(p=l,l=0);var u="rotateX("+(y.isHorizontal()?0:-i)+"deg) rotateY("+(y.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*s+90*o,y.rtl&&(t=90*-s-90*o)),r.transform(u),y.params.cube.slideShadows){var c=y.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),m=y.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),r.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),r.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(y.wrapper.css({"-webkit-transform-origin":"50% 50% -"+y.size/2+"px","-moz-transform-origin":"50% 50% -"+y.size/2+"px","-ms-transform-origin":"50% 50% -"+y.size/2+"px","transform-origin":"50% 50% -"+y.size/2+"px"}),y.params.cube.shadow)if(y.isHorizontal())e.transform("translate3d(0px, "+(y.width/2+y.params.cube.shadowOffset)+"px, "+-y.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+y.params.cube.shadowScale+")");else{var f=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),h=y.params.cube.shadowScale,v=y.params.cube.shadowScale/g,w=y.params.cube.shadowOffset;e.transform("scale3d("+h+", 1, "+v+") translate3d(0px, "+(y.height/2+w)+"px, "+-y.height/2/v+"px) rotateX(-90deg)")}var b=y.isSafari||y.isUiWebView?-y.size/2:0;y.wrapper.transform("translate3d(0px,0,"+b+"px) rotateX("+(y.isHorizontal()?0:t)+"deg) rotateY("+(y.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.cube.shadow&&!y.isHorizontal()&&y.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=y.translate,t=y.isHorizontal()?-e+y.width/2:-e+y.height/2,s=y.isHorizontal()?y.params.coverflow.rotate:-y.params.coverflow.rotate,r=y.params.coverflow.depth,i=0,n=y.slides.length;n>i;i++){var o=y.slides.eq(i),l=y.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*y.params.coverflow.modifier,u=y.isHorizontal()?s*d:0,c=y.isHorizontal()?0:s*d,m=-r*Math.abs(d),f=y.isHorizontal()?0:y.params.coverflow.stretch*d,g=y.isHorizontal()?y.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var h="translate3d("+g+"px,"+f+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(h),o[0].style.zIndex=-Math.abs(Math.round(d))+1,y.params.coverflow.slideShadows){var v=y.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=y.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(y.browser.ie){var b=y.wrapper[0].style;b.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},y.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==y.slides.length)){var s=y.slides.eq(e),r=s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!s.hasClass("swiper-lazy")||s.hasClass("swiper-lazy-loaded")||s.hasClass("swiper-lazy-loading")||(r=r.add(s[0])),0!==r.length&&r.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),i=e.attr("data-src"),n=e.attr("data-srcset");y.loadImage(e[0],i||r,n,!1,function(){if(r?(e.css("background-image",'url("'+r+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),i&&(e.attr("src",i),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),s.find(".swiper-lazy-preloader, .preloader").remove(),y.params.loop&&t){var a=s.attr("data-swiper-slide-index");if(s.hasClass(y.params.slideDuplicateClass)){var o=y.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+y.params.slideDuplicateClass+")");y.lazy.loadImageInSlide(o.index(),!1)}else{var l=y.wrapper.children("."+y.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');y.lazy.loadImageInSlide(l.index(),!1)}}y.emit("onLazyImageReady",y,s[0],e[0])}),y.emit("onLazyImageLoad",y,s[0],e[0])})}},load:function(){var e;if(y.params.watchSlidesVisibility)y.wrapper.children("."+y.params.slideVisibleClass).each(function(){y.lazy.loadImageInSlide(a(this).index())});else if(y.params.slidesPerView>1)for(e=y.activeIndex;e<y.activeIndex+y.params.slidesPerView;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);else y.lazy.loadImageInSlide(y.activeIndex);if(y.params.lazyLoadingInPrevNext)if(y.params.slidesPerView>1||y.params.lazyLoadingInPrevNextAmount&&y.params.lazyLoadingInPrevNextAmount>1){var t=y.params.lazyLoadingInPrevNextAmount,s=y.params.slidesPerView,r=Math.min(y.activeIndex+s+Math.max(t,s),y.slides.length),i=Math.max(y.activeIndex-Math.max(s,t),0);for(e=y.activeIndex+y.params.slidesPerView;r>e;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);for(e=i;e<y.activeIndex;e++)y.slides[e]&&y.lazy.loadImageInSlide(e)}else{var n=y.wrapper.children("."+y.params.slideNextClass);n.length>0&&y.lazy.loadImageInSlide(n.index());var o=y.wrapper.children("."+y.params.slidePrevClass);o.length>0&&y.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){y.params.lazyLoading&&(y.params.lazyLoadingOnTransitionStart||!y.params.lazyLoadingOnTransitionStart&&!y.lazy.initialImageLoaded)&&y.lazy.load()},onTransitionEnd:function(){y.params.lazyLoading&&!y.params.lazyLoadingOnTransitionStart&&y.lazy.load()}},y.scrollbar={isTouched:!1,setDragPosition:function(e){var a=y.scrollbar,t=y.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[y.isHorizontal()?"left":"top"]-a.dragSize/2,r=-y.minTranslate()*a.moveDivider,i=-y.maxTranslate()*a.moveDivider;r>s?s=r:s>i&&(s=i),s=-s/a.moveDivider,y.updateProgress(s),y.setWrapperTranslate(s,!0)},dragStart:function(e){var a=y.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),y.params.scrollbarHide&&a.track.css("opacity",1),y.wrapper.transition(100),a.drag.transition(100),y.emit("onScrollbarDragStart",y)},dragMove:function(e){var a=y.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),y.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),y.emit("onScrollbarDragMove",y))},dragEnd:function(e){var a=y.scrollbar;a.isTouched&&(a.isTouched=!1,y.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),y.emit("onScrollbarDragEnd",y),y.params.scrollbarSnapOnRelease&&y.slideReset())},enableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).on(y.touchEvents.start,e.dragStart),a(t).on(y.touchEvents.move,e.dragMove),a(t).on(y.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).off(y.touchEvents.start,e.dragStart),a(t).off(y.touchEvents.move,e.dragMove),a(t).off(y.touchEvents.end,e.dragEnd)},set:function(){if(y.params.scrollbar){var e=y.scrollbar;e.track=a(y.params.scrollbar),y.params.uniqueNavElements&&"string"==typeof y.params.scrollbar&&e.track.length>1&&1===y.container.find(y.params.scrollbar).length&&(e.track=y.container.find(y.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=y.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=y.size/y.virtualSize,e.moveDivider=e.divider*(e.trackSize/y.size),e.dragSize=e.trackSize*e.divider,y.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",y.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(y.params.scrollbar){var e,a=y.scrollbar,t=(y.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*y.progress,y.rtl&&y.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),y.isHorizontal()?(y.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(y.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),y.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){y.params.scrollbar&&y.scrollbar.drag.transition(e)}},y.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,s;this.x.length;this.interpolate=function(e){return e?(s=r(this.x,e),t=s-1,(e-this.x[t])*(this.y[s]-this.y[t])/(this.x[s]-this.x[t])+this.y[t]):0};var r=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}()},getInterpolateFunction:function(e){y.controller.spline||(y.controller.spline=y.params.loop?new y.controller.LinearSpline(y.slidesGrid,e.slidesGrid):new y.controller.LinearSpline(y.snapGrid,e.snapGrid))},setTranslate:function(e,a){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-y.translate:y.translate,"slide"===y.params.controlBy&&(y.controller.getInterpolateFunction(a),i=-y.controller.spline.interpolate(-e)),i&&"container"!==y.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(y.maxTranslate()-y.minTranslate()),i=(e-y.minTranslate())*r+a.minTranslate()),y.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,y),a.updateActiveIndex()}var r,i,n=y.params.control;if(y.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&s(n[o]);else n instanceof t&&a!==n&&s(n)},setTransition:function(e,a){function s(a){a.setWrapperTransition(e,y),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===y.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=y.params.control;if(y.isArray(i))for(r=0;r<i.length;r++)i[r]!==a&&i[r]instanceof t&&s(i[r]);else i instanceof t&&a!==i&&s(i)}},y.hashnav={init:function(){if(y.params.hashnav){y.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,s=y.slides.length;s>t;t++){var r=y.slides.eq(t),i=r.attr("data-hash");if(i===e&&!r.hasClass(y.params.slideDuplicateClass)){var n=r.index();y.slideTo(n,a,y.params.runCallbacksOnInit,!0)}}}},setHash:function(){y.hashnav.initialized&&y.params.hashnav&&(document.location.hash=y.slides.eq(y.activeIndex).attr("data-hash")||"")}},y.disableKeyboardControl=function(){y.params.keyboardControl=!1,a(document).off("keydown",l)},y.enableKeyboardControl=function(){y.params.keyboardControl=!0,a(document).on("keydown",l)},y.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},y.params.mousewheelControl){try{new window.WheelEvent("wheel"),y.mousewheel.event="wheel"}catch(O){(window.WheelEvent||y.container[0]&&"wheel"in y.container[0])&&(y.mousewheel.event="wheel")}!y.mousewheel.event&&window.WheelEvent,y.mousewheel.event||void 0===document.onmousewheel||(y.mousewheel.event="mousewheel"),y.mousewheel.event||(y.mousewheel.event="DOMMouseScroll")}y.disableMousewheelControl=function(){return y.mousewheel.event?(y.container.off(y.mousewheel.event,p),!0):!1},y.enableMousewheelControl=function(){return y.mousewheel.event?(y.container.on(y.mousewheel.event,p),!0):!1},y.parallax={setTranslate:function(){y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){d(this,y.progress)}),y.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);d(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=y.params.speed),y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.transition(s)})}},y._plugins=[];for(var N in y.plugins){var R=y.plugins[N](y,y.params[N]);R&&y._plugins.push(R)}return y.callPlugins=function(e){for(var a=0;a<y._plugins.length;a++)e in y._plugins[a]&&y._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.emitterEventListeners={},y.emit=function(e){y.params[e]&&y.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(y.emitterEventListeners[e])for(a=0;a<y.emitterEventListeners[e].length;a++)y.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);y.callPlugins&&y.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.on=function(e,a){return e=u(e),y.emitterEventListeners[e]||(y.emitterEventListeners[e]=[]),y.emitterEventListeners[e].push(a),y},y.off=function(e,a){var t;if(e=u(e),"undefined"==typeof a)return y.emitterEventListeners[e]=[],y;if(y.emitterEventListeners[e]&&0!==y.emitterEventListeners[e].length){for(t=0;t<y.emitterEventListeners[e].length;t++)y.emitterEventListeners[e][t]===a&&y.emitterEventListeners[e].splice(t,1);return y}},y.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),y.off(e,t)};return y.on(e,t),y},y.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(y.params.nextButton)?(y.onClickNext(e),y.isEnd?y.a11y.notify(y.params.lastSlideMessage):y.a11y.notify(y.params.nextSlideMessage)):a(e.target).is(y.params.prevButton)&&(y.onClickPrev(e),y.isBeginning?y.a11y.notify(y.params.firstSlideMessage):y.a11y.notify(y.params.prevSlideMessage)),a(e.target).is("."+y.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=y.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){y.params.nextButton&&y.nextButton&&y.nextButton.length>0&&(y.a11y.makeFocusable(y.nextButton),y.a11y.addRole(y.nextButton,"button"),y.a11y.addLabel(y.nextButton,y.params.nextSlideMessage)),y.params.prevButton&&y.prevButton&&y.prevButton.length>0&&(y.a11y.makeFocusable(y.prevButton),y.a11y.addRole(y.prevButton,"button"),y.a11y.addLabel(y.prevButton,y.params.prevSlideMessage)),a(y.container).append(y.a11y.liveRegion)},initPagination:function(){y.params.pagination&&y.params.paginationClickable&&y.bullets&&y.bullets.length&&y.bullets.each(function(){var e=a(this);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){y.a11y.liveRegion&&y.a11y.liveRegion.length>0&&y.a11y.liveRegion.remove()}},y.init=function(){y.params.loop&&y.createLoop(),y.updateContainerSize(),y.updateSlidesSize(),y.updatePagination(),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.set(),y.params.scrollbarDraggable&&y.scrollbar.enableDraggable()),"slide"!==y.params.effect&&y.effects[y.params.effect]&&(y.params.loop||y.updateProgress(),y.effects[y.params.effect].setTranslate()),y.params.loop?y.slideTo(y.params.initialSlide+y.loopedSlides,0,y.params.runCallbacksOnInit):(y.slideTo(y.params.initialSlide,0,y.params.runCallbacksOnInit),0===y.params.initialSlide&&(y.parallax&&y.params.parallax&&y.parallax.setTranslate(),y.lazy&&y.params.lazyLoading&&(y.lazy.load(),y.lazy.initialImageLoaded=!0))),y.attachEvents(),y.params.observer&&y.support.observer&&y.initObservers(),y.params.preloadImages&&!y.params.lazyLoading&&y.preloadImages(),y.params.autoplay&&y.startAutoplay(),y.params.keyboardControl&&y.enableKeyboardControl&&y.enableKeyboardControl(),y.params.mousewheelControl&&y.enableMousewheelControl&&y.enableMousewheelControl(),
y.params.hashnav&&y.hashnav&&y.hashnav.init(),y.params.a11y&&y.a11y&&y.a11y.init(),y.emit("onInit",y)},y.cleanupStyles=function(){y.container.removeClass(y.classNames.join(" ")).removeAttr("style"),y.wrapper.removeAttr("style"),y.slides&&y.slides.length&&y.slides.removeClass([y.params.slideVisibleClass,y.params.slideActiveClass,y.params.slideNextClass,y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),y.paginationContainer&&y.paginationContainer.length&&y.paginationContainer.removeClass(y.params.paginationHiddenClass),y.bullets&&y.bullets.length&&y.bullets.removeClass(y.params.bulletActiveClass),y.params.prevButton&&a(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.nextButton&&a(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.track&&y.scrollbar.track.length&&y.scrollbar.track.removeAttr("style"),y.scrollbar.drag&&y.scrollbar.drag.length&&y.scrollbar.drag.removeAttr("style"))},y.destroy=function(e,a){y.detachEvents(),y.stopAutoplay(),y.params.scrollbar&&y.scrollbar&&y.params.scrollbarDraggable&&y.scrollbar.disableDraggable(),y.params.loop&&y.destroyLoop(),a&&y.cleanupStyles(),y.disconnectObservers(),y.params.keyboardControl&&y.disableKeyboardControl&&y.disableKeyboardControl(),y.params.mousewheelControl&&y.disableMousewheelControl&&y.disableMousewheelControl(),y.params.a11y&&y.a11y&&y.a11y.destroy(),y.emit("onDestroy"),e!==!1&&(y=null)},y.init(),y}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var s=["jQuery","Zepto","Dom7"],r=0;r<s.length;r++)window[s[r]]&&e(window[s[r]]);var i;i="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,i&&("transitionEnd"in i.fn||(i.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in i.fn||(i.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in i.fn||(i.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
;

!function(t,e,n,o){"use strict";function s(t){var e=t.currentTarget,o=t.data?t.data.options:{},s=t.data?t.data.items:[],i="",a=0;t.preventDefault(),t.stopPropagation(),n(e).attr("data-fancybox")&&(i=n(e).data("fancybox")),i?(s=s.length?s.filter('[data-fancybox="'+i+'"]'):n("[data-fancybox="+i+"]"),a=s.index(e)):s=[e],n.fancybox.open(s,o,a)}if(!n)return o;var i={speed:330,loop:!0,opacity:"auto",margin:[44,0],gutter:30,infobar:!0,buttons:!0,slideShow:!0,fullScreen:!0,thumbs:!0,closeBtn:!0,smallBtn:"auto",image:{preload:"auto",protect:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,scrolling:"no",css:{}},baseClass:"",slideClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',closeTpl:'<button data-fancybox-close class="fancybox-close-small">×</button>',parentEl:"body",touch:!0,keyboard:!0,focus:!0,closeClickOutside:!0,beforeLoad:n.noop,afterLoad:n.noop,beforeMove:n.noop,afterMove:n.noop,onComplete:n.noop,onInit:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop},a=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),d=function(o){var s;return"function"==typeof n&&o instanceof n&&(o=o[0]),s=o.getBoundingClientRect(),s.bottom>0&&s.right>0&&s.left<(t.innerWidth||e.documentElement.clientWidth)&&s.top<(t.innerHeight||e.documentElement.clientHeight)},p=function(t,o,s){var a=this;a.opts=n.extend(!0,{index:s},i,o||{}),a.id=a.opts.id||++c,a.group=[],a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=null,a.createGroup(t),a.group.length&&(a.$lastFocus=n(e.activeElement),a.elems={},a.slides={},a.init(t))};n.extend(p.prototype,{init:function(){var t,e,o=this;o.scrollTop=a.scrollTop(),o.scrollLeft=a.scrollLeft(),n.fancybox.isTouch||n("html").hasClass("fancybox-enabled")||(t=n("body").width(),n("html").addClass("fancybox-enabled"),t=n("body").width()-t,t>1&&n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: "+t+"px; }").appendTo("head")),e=n(o.opts.baseTpl).attr("id","fancybox-container-"+o.id).data("FancyBox",o).addClass(o.opts.baseClass).hide().prependTo(o.opts.parentEl),o.$refs={container:e,bg:e.find(".fancybox-bg"),controls:e.find(".fancybox-controls"),buttons:e.find(".fancybox-buttons"),slider_wrap:e.find(".fancybox-slider-wrap"),slider:e.find(".fancybox-slider"),caption:e.find(".fancybox-caption")},o.trigger("onInit"),o.activate(),o.current||o.jumpTo(o.currIndex)},createGroup:function(t){var e=this,s=n.makeArray(t);n.each(s,function(t,s){var i,a,r,c,l={},u={},d=[];n.isPlainObject(s)?(l=s,u=s.opts||{}):"object"===n.type(s)&&n(s).length?(i=n(s),d=i.data(),u="options"in d?d.options:{},u="object"===n.type(u)?u:{},l.type="type"in d?d.type:u.type,l.src="src"in d?d.src:u.src||i.attr("href"),u.width="width"in d?d.width:u.width,u.height="height"in d?d.height:u.height,u.thumb="thumb"in d?d.thumb:u.thumb,u.selector="selector"in d?d.selector:u.selector,"srcset"in d&&(u.image={srcset:d.srcset}),u.$orig=i):l={type:"html",content:s+""},l.opts=n.extend(!0,{},e.opts,u),a=l.type,r=l.src||"",a||(l.content?a="html":r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?a="pdf":"#"===r.charAt(0)&&(a="inline"),l.type=a),l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(s,[e,l]):"caption"in d?l.opts.caption=d.caption:u.$orig&&(l.opts.caption=i.attr("title")),l.opts.caption=l.opts.caption===o?"":l.opts.caption+"","ajax"===a&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.selector=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(a,["html","inline","ajax"])>-1?(l.opts.buttons=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===a&&(l.type="iframe",l.opts.closeBtn=!0,l.opts.smallBtn=!1,l.opts.iframe.preload=!1),l.opts.modal&&n.extend(!0,l.opts,{infobar:0,buttons:0,keyboard:0,slideShow:0,fullScreen:0,closeClickOutside:0}),e.group.push(l)})},addEvents:function(){var o=this,s=function(){a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),o.$refs.slider_wrap.show(),o.update()};o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("click.fb-previous","[data-fancybox-previous]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}),n(t).on("orientationchange.fb resize.fb",function(t){u(function(){"orientationchange"==t.type?(o.$refs.slider_wrap.hide(),u(s)):s()})}),r.on("focusin.fb",function(t){var e;n.fancybox&&(e=n.fancybox.getInstance(),!e||n(t.target).hasClass("fancybox-container")||n.contains(e.$refs.container[0],t.target)||(t.stopPropagation(),e.focus()))}),n(e).on("keydown.fb",function(t){var e=o.current,s=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea")){if(8===s||27===s)return t.preventDefault(),void o.close();switch(s){case 37:case 38:t.preventDefault(),o.previous();break;case 39:case 40:t.preventDefault(),o.next();break;case 80:case 32:t.preventDefault(),o.SlideShow&&(t.preventDefault(),o.SlideShow.toggle());break;case 70:o.FullScreen&&(t.preventDefault(),o.FullScreen.toggle());break;case 71:o.Thumbs&&(t.preventDefault(),o.Thumbs.toggle())}}})},removeEvents:function(){a.off("scroll.fb resize.fb orientationchange.fb"),r.off("keydown.fb focusin.fb click.fb-close"),this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")},previous:function(t){this.jumpTo(this.currIndex-1,t)},next:function(t){this.jumpTo(this.currIndex+1,t)},jumpTo:function(t,e){var n,s,i,a,r=this;if(n=r.firstRun=null===r.firstRun,s=i=t=parseInt(t,10),a=!!r.current&&r.current.opts.loop,!r.isAnimating&&(s!=r.currIndex||n)){if(r.group.length>1&&a)s%=r.group.length,s=s<0?r.group.length+s:s,2==r.group.length?i=t-r.currIndex+r.currPos:(i=s-r.currIndex+r.currPos,Math.abs(r.currPos-(i+r.group.length))<Math.abs(r.currPos-i)?i+=r.group.length:Math.abs(r.currPos-(i-r.group.length))<Math.abs(r.currPos-i)&&(i-=r.group.length));else if(!r.group[s])return void r.update(!1,!1,e);r.current&&(r.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"),r.updateSlide(r.current,!0)),r.prevIndex=r.currIndex,r.prevPos=r.currPos,r.currIndex=s,r.currPos=i,r.createSlide(i),r.group.length>1&&((r.opts.loop||i-1>=0)&&r.createSlide(i-1),(r.opts.loop||i+1<r.group.length)&&r.createSlide(i+1)),r.current=r.slides[i],r.current.isMoved=!1,r.current.isComplete=!1,e=parseInt(e===o?1.5*r.current.opts.speed:e,10),r.trigger("beforeMove"),r.updateControls(),n&&(r.current.$slide.addClass("fancybox-slide--current"),r.$refs.container.show(),u(function(){r.$refs.bg.css("transition-duration",r.current.opts.speed+"ms"),r.$refs.container.addClass("fancybox-container--ready")})),r.update(!0,!1,n?0:e,function(){r.afterMove()}),r.loadSlide(r.current),n&&r.current.$ghost||r.preload()}},createSlide:function(t){var e,o,s=this;o=t%s.group.length,o=o<0?s.group.length+o:o,!s.slides[t]&&s.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(s.$refs.slider),s.slides[t]=n.extend(!0,{},s.group[o],{pos:t,$slide:e,isMoved:!1,isLoaded:!1}))},zoomInOut:function(t,e,o){var s,i,a,r=this,c=r.current,l=c.$placeholder,p=c.opts.opacity,h=c.opts.$thumb,f=h?h.offset():0,g=c.$slide.offset();return!!(l&&c.isMoved&&f&&d(h))&&(!("In"===t&&!r.firstRun)&&(n.fancybox.stop(l),r.isAnimating=!0,s={top:f.top-g.top+parseFloat(h.css("border-top-width")||0),left:f.left-g.left+parseFloat(h.css("border-left-width")||0),width:h.width(),height:h.height(),scaleX:1,scaleY:1},"auto"==p&&(p=Math.abs(c.width/c.height-s.width/s.height)>.1),"In"===t?(i=s,a=r.getFitPos(c),a.scaleX=a.width/i.width,a.scaleY=a.height/i.height,p&&(i.opacity=.1,a.opacity=1)):(i=n.fancybox.getTranslate(l),a=s,c.$ghost&&(c.$ghost.show(),c.$image&&c.$image.remove()),i.scaleX=i.width/a.width,i.scaleY=i.height/a.height,i.width=a.width,i.height=a.height,p&&(a.opacity=0)),r.updateCursor(a.width,a.height),delete a.width,delete a.height,n.fancybox.setTranslate(l,i),l.show(),r.trigger("beforeZoom"+t),u(function(){l.css("transition","all "+e+"ms"),n.fancybox.setTranslate(l,a),setTimeout(function(){var e;l.css("transition","none"),e=n.fancybox.getTranslate(l),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(l,e),r.trigger("afterZoom"+t),o.apply(r),r.isAnimating=!1},e)}),!0))},canPan:function(){var t=this,e=t.current,n=e.$placeholder,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},isScaledDown:function(){var t=this,e=t.current,o=e.$placeholder,s=!1;return o&&(s=n.fancybox.getTranslate(o),s=s.width<e.width||s.height<e.height),s},scaleToActual:function(t,e,s){var i,a,r,c,l,u=this,d=u.current,p=d.$placeholder,h=parseInt(d.$slide.width(),10),f=parseInt(d.$slide.height(),10),g=d.width,b=d.height;p&&(u.isAnimating=!0,t=t===o?.5*h:t,e=e===o?.5*f:e,i=n.fancybox.getTranslate(p),c=g/i.width,l=b/i.height,a=.5*h-.5*g,r=.5*f-.5*b,g>h&&(a=i.left*c-(t*c-t),a>0&&(a=0),a<h-g&&(a=h-g)),b>f&&(r=i.top*l-(e*l-e),r>0&&(r=0),r<f-b&&(r=f-b)),u.updateCursor(g,b),n.fancybox.animate(p,null,{top:r,left:a,scaleX:c,scaleY:l},s||d.opts.speed,function(){u.isAnimating=!1}))},scaleToFit:function(t){var e,o=this,s=o.current,i=s.$placeholder;i&&(o.isAnimating=!0,e=o.getFitPos(s),o.updateCursor(e.width,e.height),n.fancybox.animate(i,null,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||s.opts.speed,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,s,i,r,c,l,u=t.$placeholder||t.$content,d=t.width,p=t.height,h=t.opts.margin;return!(!u||!u.length||!d&&!p)&&("number"===n.type(h)&&(h=[h,h]),2==h.length&&(h=[h[0],h[1],h[0],h[1]]),a.width()<800&&(h=[0,0,0,0]),e=parseInt(t.$slide.width(),10)-(h[1]+h[3]),o=parseInt(t.$slide.height(),10)-(h[0]+h[2]),s=Math.min(1,e/d,o/p),c=Math.floor(s*d),l=Math.floor(s*p),i=Math.floor(.5*(o-l))+h[0],r=Math.floor(.5*(e-c))+h[3],{top:i,left:r,width:c,height:l})},update:function(t,e,o,s){var i=this,a=i.current.pos*Math.floor(i.current.$slide.width())*-1-i.current.pos*i.current.opts.gutter;i.isAnimating!==!0&&(o=parseInt(o,10)||0,n.fancybox.stop(i.$refs.slider),t===!1?i.updateSlide(i.current,e):n.each(i.slides,function(t,n){i.updateSlide(n,e)}),o?n.fancybox.animate(i.$refs.slider,null,{top:0,left:a},o,function(){i.current.isMoved=!0,"function"===n.type(s)&&s.apply(i)}):(n.fancybox.setTranslate(i.$refs.slider,{top:0,left:a}),i.current.isMoved=!0,"function"===n.type(s)&&s.apply(i)))},updateSlide:function(t,e){var o=this,s=t.$placeholder;t=t||o.current,t&&!o.isClosing&&(n.fancybox.setTranslate(t.$slide,{top:0,left:t.pos*Math.floor(t.$slide.width())+t.pos*t.opts.gutter}),e!==!1&&s&&(n.fancybox.setTranslate(s,o.getFitPos(t)),t.pos===o.currPos&&o.updateCursor()),t.$slide.trigger("refresh"),o.trigger("onUpdate",t))},updateCursor:function(t,e){var n,s=this,i=s.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");!s.isClosing&&s.opts.touch&&(n=t!==o&&e!==o?t<s.current.width&&e<s.current.height:s.isScaledDown(),n?i.addClass("fancybox-controls--canzoomIn"):s.group.length<2?i.addClass("fancybox-controls--canzoomOut"):i.addClass("fancybox-controls--canGrab"))},loadSlide:function(t){var e,o,s,i=this;if(t&&!t.isLoaded&&!t.isLoading){switch(t.isLoading=!0,i.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":i.setImage(t);break;case"iframe":i.setIframe(t);break;case"html":i.setContent(t,t.content);break;case"inline":n(t.src).length?i.setContent(t,n(t.src)):i.setError(t);break;case"ajax":i.showLoading(t),s=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&i.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&i.setError(t)}})),o.one("onReset",function(){s.abort()});break;default:i.setError(t)}return!0}},setImage:function(e){var o,s,i,a,r=this,c=e.opts.image.srcset;if(e.isLoaded&&!e.hasError)return void r.afterLoad(e);if(c){i=t.devicePixelRatio||1,a=t.innerWidth*i,s=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),s.sort(function(t,e){return t.value-e.value});for(var l=0;l<s.length;l++){var u=s[l];if("w"===u.postfix&&u.value>=a||"x"===u.postfix&&u.value>=i){o=u;break}}!o&&s.length&&(o=s[s.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$placeholder=n('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("load error",function(){r.isClosing||(n("<img/>")[0].src=e.src,r.revealImage(e,function(){r.setBigImage(e),r.firstRun&&e.index===r.currIndex&&r.preload()}))}).addClass("fancybox-image").appendTo(e.$placeholder).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.afterLoad(t),t.$ghost&&(t.timouts=setTimeout(function(){t.$ghost.hide()},350)))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$placeholder),o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},150),t.opts.image.protect&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder)},revealImage:function(t,e){var o=this;return e=e||n.noop,"image"!==t.type||t.hasError||t.isRevealed===!0?void e.apply(o):(t.isRevealed=!0,void(t.pos===o.currPos&&o.zoomInOut("In",t.opts.speed,e)||(t.$ghost&&!t.isLoaded&&o.updateSlide(t,!0),t.pos===o.currPos?n.fancybox.animate(t.$placeholder,{opacity:0},{opacity:1},300,e):t.$placeholder.show(),e.apply(o))))},setIframe:function(t){var e,s=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content"></div>').css(i.css).appendTo(a),e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",n.fancybox.isTouch?"auto":i.scrolling).appendTo(t.$content),i.preload?(t.$content.addClass("fancybox-tmp"),s.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),s.afterLoad(t)}),a.on("refresh.fb",function(){var n,s,a,r,c,l=t.$content;if(1===e[0].isReady){try{n=e.contents(),s=n.find("body")}catch(t){}s&&s.length&&(i.css.width===o||i.css.height===o)&&(a=e[0].contentWindow.document.documentElement.scrollWidth,r=Math.ceil(s.outerWidth(!0)+(l.width()-a)),c=Math.ceil(s.outerHeight(!0)),l.css({width:i.css.width===o?r+(l.outerWidth()-l.innerWidth()):i.css.width,height:i.css.height===o?c+(l.outerHeight()-l.innerHeight()):i.css.height})),l.removeClass("fancybox-tmp")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn&&t.$content.prepend(t.opts.closeTpl),a.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.data("placeholder")&&e.parents(".fancybox-slide").trigger("onReset"),e.data({placeholder:n("<div></div>").hide().insertAfter(e)}).css("display","inline-block")):("string"===n.type(e)&&(e=n("<div>").append(e).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.selector&&(e=n("<div>").html(e).find(t.opts.selector))),t.$slide.one("onReset",function(){var o=l(e)?e.data("placeholder"):0;o&&(e.hide().replaceAll(o),e.data("placeholder",null)),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn===!0&&t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl),this.afterLoad(t))},setError:function(t){t.hasError=!0,this.setContent(t,t.opts.errorTpl)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterMove:function(){var t=this,e=t.current,o={};e&&(e.$slide.siblings().trigger("onReset"),n.each(t.slides,function(e,n){n.pos>=t.currPos-1&&n.pos<=t.currPos+1?o[n.pos]=n:n&&n.$slide.remove()}),t.slides=o,t.trigger("afterMove"),e.isLoaded&&t.complete())},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.$ghost||e.updateSlide(t,!0),t.index===e.currIndex&&t.isMoved?e.complete():t.$ghost||e.revealImage(t))},complete:function(){var t=this,e=t.current;t.revealImage(e,function(){e.isComplete=!0,e.$slide.addClass("fancybox-slide--complete"),t.updateCursor(),t.trigger("onComplete"),e.opts.focus&&t.focus()})},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t=this.current&&this.current.isComplete?this.current.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first"):null;t&&t.length||(t=this.$refs.container),t.focus(),this.$refs.slider_wrap.scrollLeft(0),this.current&&this.current.$slide.scrollTop(0)},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t){var e=this,o=e.current,s=o.opts.speed,i=n.proxy(function(){e.cleanUp(t)},this);return!e.isAnimating&&!e.isClosing&&(e.isClosing=!0,o.timouts&&clearTimeout(o.timouts),t!==!0&&n.fancybox.stop(e.$refs.slider),e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"),o.$slide.removeClass("fancybox-slide--complete").siblings().remove(),o.isMoved||o.$slide.css("overflow","visible"),e.removeEvents(),e.hideLoading(o),e.hideControls(),e.updateCursor(),e.trigger("beforeClose",o,t),e.$refs.bg.css("transition-duration",s+"ms"),this.$refs.container.removeClass("fancybox-container--ready"),void(t===!0?setTimeout(i,s):e.zoomInOut("Out",s,i)||n.fancybox.animate(e.$refs.container,null,{opacity:0},s,"easeInSine",i)))},cleanUp:function(t){var e,o=this;o.$refs.slider.children().trigger("onReset"),o.$refs.container.empty().remove(),o.current=null,o.trigger("afterClose",t),e=n.fancybox.getInstance(),e?e.activate():(n("html").removeClass("fancybox-enabled"),n("#fancybox-noscroll").remove()),o.$lastFocus&&o.$lastFocus.focus(),a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft)},trigger:function(t,e){var o=Array.prototype.slice.call(arguments,1),s=this,i=e&&e.opts?e:s.current;i?o.unshift(i):i=s,o.unshift(s),n.isFunction(i.opts[t])&&i.opts[t].apply(i,o),s.$refs.container.trigger(t+".fb",o)},toggleControls:function(t){this.isHiddenControls?this.updateControls(t):this.hideControls()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-controls"),this.$refs.container.removeClass("fancybox-show-caption")},updateControls:function(t){var e=this,o=e.$refs.container,s=e.$refs.caption,i=e.current,a=i.index,r=i.opts,c=r.caption;this.isHiddenControls&&t!==!0||(this.isHiddenControls=!1,e.$refs.container.addClass("fancybox-show-controls"),o.toggleClass("fancybox-show-infobar",!!r.infobar&&e.group.length>1).toggleClass("fancybox-show-buttons",!!r.buttons).toggleClass("fancybox-is-modal",!!r.modal),n(".fancybox-button--left",o).toggleClass("fancybox-button--disabled",!r.loop&&a<=0),n(".fancybox-button--right",o).toggleClass("fancybox-button--disabled",!r.loop&&a>=e.group.length-1),n(".fancybox-button--play",o).toggle(!!(r.slideShow&&e.group.length>1)),n(".fancybox-button--close",o).toggle(!!r.closeBtn),n(".js-fancybox-count",o).html(e.group.length),n(".js-fancybox-index",o).html(a+1),i.$slide.trigger("refresh"),s&&s.empty(),c&&c.length?(s.html(c),this.$refs.container.addClass("fancybox-show-caption "),e.$caption=s):this.$refs.container.removeClass("fancybox-show-caption"))}}),n.fancybox={version:"3.0.29",defaults:i,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new p(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},isTouch:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<=11)}(),getTranslate:function(t){var e,n;return!(!t||!t.length)&&(e=t.get(0).getBoundingClientRect(),n=t.eq(0).css("transform"),n&&n.indexOf("matrix")!==-1?(n=n.split("(")[1],n=n.split(")")[0],n=n.split(",")):n=[],n.length?(n=n.length>10?[n[13],n[12],n[0],n[5]]:[n[5],n[4],n[0],n[3]],n=n.map(parseFloat)):n=[0,0,1,1],{top:n[0],left:n[1],scaleX:n[2],scaleY:n[3],opacity:parseFloat(t.css("opacity")),width:e.width,height:e.height})},setTranslate:function(t,e){var n="",s={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().top:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(s.transform=n),e.opacity!==o&&(s.opacity=e.opacity),e.width!==o&&(s.width=e.width),e.height!==o&&(s.height=e.height),t.css(s)},easing:{easeOutCubic:function(t,e,n,o){return n*((t=t/o-1)*t*t+1)+e},easeInCubic:function(t,e,n,o){return n*(t/=o)*t*t+e},easeOutSine:function(t,e,n,o){return n*Math.sin(t/o*(Math.PI/2))+e},easeInSine:function(t,e,n,o){return-n*Math.cos(t/o*(Math.PI/2))+n+e}},stop:function(t){t.removeData("animateID")},animate:function(t,e,s,i,a,r){var c,l,d,p=this,h=null,f=0,g=function(n){if(c=[],l=0,t.length&&t.data("animateID")===d){if(n=n||Date.now(),h&&(l=n-h),h=n,f+=l,f>=i)return s.scaleX!==o&&s.scaleY!==o&&e.width!==o&&e.height!==o&&(s.width=e.width*s.scaleX,s.height=e.height*s.scaleY,s.scaleX=1,s.scaleY=1),p.setTranslate(t,s),void r();for(var b in s)s.hasOwnProperty(b)&&e[b]!==o&&(e[b]==s[b]?c[b]=s[b]:c[b]=p.easing[a](f,e[b],s[b]-e[b],i));p.setTranslate(t,c),u(g)}};return p.animateID=d=p.animateID===o?1:p.animateID+1,t.data("animateID",d),r===o&&"function"==n.type(a)&&(r=a,a=o),a||(a="easeOutCubic"),r=r||n.noop,i?(e?this.setTranslate(t,e):e=this.getTranslate(t),t.show(),void u(g)):(this.setTranslate(t,s),void r())}},n.fn.fancybox=function(t){return this.off("click.fb-start").on("click.fb-start",{items:this,options:t||{}},s),this},n(e).on("click.fb-start","[data-fancybox]",s)}(window,document,window.jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/((player\.)?vimeo(pro)?\.com)\/(video\/)?([\d]+)?(\?(.*))?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:7,type:"iframe",url:"//player.vimeo.com/video/$5"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}}};t(document).on("onInit.fb",function(o,s){t.each(s.group,function(o,s){var i,a,r,c,l,u,d,p=s.src||"",h=!1;s.type||(t.each(n,function(n,o){if(a=p.match(o.matcher),l={},d=n,a){if(h=o.type,o.paramPlace&&a[o.paramPlace]){c=a[o.paramPlace],"?"==c[0]&&(c=c.substring(1)),c=c.split("&");for(var f=0;f<c.length;++f){var g=c[f].split("=",2);2==g.length&&(l[g[0]]=decodeURIComponent(g[1].replace(/\+/g," ")))}}return o.idPlace&&(u=a[o.idPlace]),r=t.extend(!0,{},o.params,s.opts[n],l),p="function"===t.type(o.url)?o.url.call(this,a,r,s):e(o.url,a,r),i="function"===t.type(o.thumb)?o.thumb.call(this,a,r,s):e(o.thumb,a),!1}}),h?(s.src=p,s.type=h,s.opts.thumb||s.opts.$thumb&&s.opts.$thumb.length||(s.opts.thumb=i),u&&(s.opts.id=d+"-"+u),"iframe"===h&&(t.extend(!0,s.opts,{iframe:{preload:!1,scrolling:"no"},smallBtn:!1,closeBtn:!0,fullScreen:!1,slideShow:!1}),s.opts.slideClass+=" fancybox-slide--video")):s.type="iframe")})})}(window.jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),s=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},i=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},a=function(t){return t.is("a")||t.is("button")||t.is("input")||t.is("select")||t.is("textarea")||n.isFunction(t.get(0).onclick)},r=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],s=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return s||i},c=function(t){for(var e=!1;;){if(e=r(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-slider")||t.is("body"))break}return e},l=function(t){var e=this;e.instance=t,e.$wrap=t.$refs.slider_wrap,e.$slider=t.$refs.slider,e.$container=t.$refs.container,e.destroy(),e.$wrap.on("touchstart.fb mousedown.fb",n.proxy(e,"ontouchstart"))};l.prototype.destroy=function(){this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")},l.prototype.ontouchstart=function(e){var o=this,r=n(e.target),l=o.instance,u=l.current,d=u.$content||u.$placeholder;return o.startPoints=s(e),o.$target=r,o.$content=d,u.opts.touch?void(a(r)||a(r.parent())||c(r)&&!r.hasClass("fancybox-slide")||(e.stopPropagation(),e.preventDefault(),!u||o.instance.isAnimating||o.instance.isClosing||!o.startPoints||o.startPoints.length>1&&!u.isMoved||(o.$wrap.off("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove")),o.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend")),o.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend")),o.$wrap.on("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove")),o.startTime=(new Date).getTime(),o.distanceX=o.distanceY=o.distance=0,o.canvasWidth=Math.round(u.$slide.width()),o.canvasHeight=Math.round(u.$slide.height()),o.canTap=!1,o.isPanning=!1,o.isSwiping=!1,o.isZooming=!1,o.sliderStartPos=n.fancybox.getTranslate(o.$slider),o.contentStartPos=n.fancybox.getTranslate(o.$content),o.contentLastPos=null,1!==o.startPoints.length||o.isZooming||(o.canTap=u.isMoved,"image"===u.type&&(o.contentStartPos.width>o.canvasWidth+1||o.contentStartPos.height>o.canvasHeight+1)?(n.fancybox.stop(o.$content),o.isPanning=!0):(n.fancybox.stop(o.$slider),o.isSwiping=!0),o.$container.addClass("fancybox-controls--isGrabbing")),2===o.startPoints.length&&u.isMoved&&!u.hasError&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(o.isZooming=!0,o.isSwiping=!1,o.isPanning=!1,n.fancybox.stop(o.$content),o.centerPointStartX=.5*(o.startPoints[0].x+o.startPoints[1].x)-n(t).scrollLeft(),o.centerPointStartY=.5*(o.startPoints[0].y+o.startPoints[1].y)-n(t).scrollTop(),o.percentageOfImageAtPinchPointX=(o.centerPointStartX-o.contentStartPos.left)/o.contentStartPos.width,o.percentageOfImageAtPinchPointY=(o.centerPointStartY-o.contentStartPos.top)/o.contentStartPos.height,o.startDistanceBetweenFingers=i(o.startPoints[0],o.startPoints[1]))))):(o.endPoints=o.startPoints,o.ontap())},l.prototype.ontouchmove=function(t){var e=this;t.preventDefault(),e.newPoints=s(t),e.newPoints&&e.newPoints.length&&(e.distanceX=i(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=i(e.newPoints[0],e.startPoints[0],"y"),e.distance=i(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()))},l.prototype.onSwipe=function(){var e,s=this,i=s.isSwiping,a=s.sliderStartPos.left;i===!0?Math.abs(s.distance)>10&&(s.instance.group.length<2?s.isSwiping="y":!s.instance.current.isMoved||s.instance.opts.touch.vertical===!1||"auto"===s.instance.opts.touch.vertical&&n(t).width()>800?s.isSwiping="x":(e=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=e>45&&e<135?"y":"x"),s.canTap=!1,s.instance.current.isMoved=!1,s.startPoints=s.newPoints):("x"==i&&(!s.instance.current.opts.loop&&0===s.instance.current.index&&s.distanceX>0?a+=Math.pow(s.distanceX,.8):!s.instance.current.opts.loop&&s.instance.current.index===s.instance.group.length-1&&s.distanceX<0?a-=Math.pow(-s.distanceX,.8):a+=s.distanceX),s.sliderLastPos={top:"x"==i?0:s.sliderStartPos.top+s.distanceY,left:a},o(function(){n.fancybox.setTranslate(s.$slider,s.sliderLastPos)}))},l.prototype.onPan=function(){var t,e,s,i=this;i.canTap=!1,t=i.contentStartPos.width>i.canvasWidth?i.contentStartPos.left+i.distanceX:i.contentStartPos.left,
e=i.contentStartPos.top+i.distanceY,s=i.limitMovement(t,e,i.contentStartPos.width,i.contentStartPos.height),s.scaleX=i.contentStartPos.scaleX,s.scaleY=i.contentStartPos.scaleY,i.contentLastPos=s,o(function(){n.fancybox.setTranslate(i.$content,i.contentLastPos)})},l.prototype.limitMovement=function(t,e,n,o){var s,i,a,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,p=c.contentStartPos.top,h=c.distanceX,f=c.distanceY;return s=Math.max(0,.5*l-.5*n),i=Math.max(0,.5*u-.5*o),a=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(h>0&&t>s&&(t=s-1+Math.pow(-s+d+h,.8)||0),h<0&&t<a&&(t=a+1-Math.pow(a-d-h,.8)||0)),o>u&&(f>0&&e>i&&(e=i-1+Math.pow(-i+p+f,.8)||0),f<0&&e<r&&(e=r+1-Math.pow(r-p-f,.8)||0)),{top:e,left:t}},l.prototype.limitPosition=function(t,e,n,o){var s=this,i=s.canvasWidth,a=s.canvasHeight;return n>i?(t=t>0?0:t,t=t<i-n?i-n:t):t=Math.max(0,i/2-n/2),o>a?(e=e>0?0:e,e=e<a-o?a-o:e):e=Math.max(0,a/2-o/2),{top:e,left:t}},l.prototype.onZoom=function(){var e=this,s=e.contentStartPos.width,a=e.contentStartPos.height,r=e.contentStartPos.left,c=e.contentStartPos.top,l=i(e.newPoints[0],e.newPoints[1]),u=l/e.startDistanceBetweenFingers,d=Math.floor(s*u),p=Math.floor(a*u),h=(s-d)*e.percentageOfImageAtPinchPointX,f=(a-p)*e.percentageOfImageAtPinchPointY,g=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),b=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),m=g-e.centerPointStartX,y=b-e.centerPointStartY,v=r+(h+m),x=c+(f+y),w={top:x,left:v,scaleX:e.contentStartPos.scaleX*u,scaleY:e.contentStartPos.scaleY*u};e.canTap=!1,e.newWidth=d,e.newHeight=p,e.contentLastPos=w,o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},l.prototype.ontouchend=function(t){var e=this,o=e.instance.current,i=Math.max((new Date).getTime()-e.startTime,1),a=e.isSwiping,r=e.isPanning,c=e.isZooming;return e.endPoints=s(t),e.$container.removeClass("fancybox-controls--isGrabbing"),e.$wrap.off("touchmove.fb mousemove.fb",n.proxy(this,"ontouchmove")),e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(this,"ontouchend")),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.canTap?e.ontap():(e.velocityX=e.distanceX/i*.5,e.velocityY=e.distanceY/i*.5,e.speed=o.opts.speed,e.speedX=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityX)*e.speed)),e.speedY=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityY)*e.speed)),void(r?e.endPanning():c?e.endZooming():e.endSwiping(a)))},l.prototype.endSwiping=function(t){var e=this;"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.$slider,null,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,left:e.sliderStartPos.left,opacity:0},e.speedY),e.instance.close(!0)):"x"==t&&e.distanceX>50?e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50?e.instance.next(e.speedX):e.instance.update(!1,!0,Math.abs(e.distance)*e.speed/50)},l.prototype.endPanning=function(){var t,e,o,s=this;s.contentLastPos&&(t=s.contentLastPos.left+s.velocityX*s.speed*2,e=s.contentLastPos.top+s.velocityY*s.speed*2,o=s.limitPosition(t,e,s.contentStartPos.width,s.contentStartPos.height),o.width=s.contentStartPos.width,o.height=s.contentStartPos.height,n.fancybox.animate(s.$content,null,o,s.speed,"easeOutSine"))},l.prototype.endZooming=function(){var t,e,o,s,i=this,a=i.instance.current,r=i.newWidth,c=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,e=i.contentLastPos.top,s={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(i.$content,s),r<i.canvasWidth&&c<i.canvasHeight?i.instance.scaleToFit(150):r>a.width||c>a.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(o=i.limitPosition(t,e,r,c),n.fancybox.animate(i.$content,null,o,i.speed,"easeOutSine")))},l.prototype.ontap=function(){var t=this,e=t.instance,o=e.current,s=t.endPoints[0].x,i=t.endPoints[0].y;if(s-=t.$wrap.offset().left,i-=t.$wrap.offset().top,!n.fancybox.isTouch)return o.opts.closeClickOutside&&t.$target.is(".fancybox-slide")?void e.close():void("image"==o.type&&o.isMoved&&(e.canPan()?e.scaleToFit():e.isScaledDown()?e.scaleToActual(s,i):e.group.length<2&&e.close()));if(t.tapped){if(clearTimeout(t.tapped),t.tapped=null,Math.abs(s-t.x)>50||Math.abs(i-t.y)>50||!o.isMoved)return this;"image"==o.type&&(o.isLoaded||o.$ghost)&&(e.canPan()?e.scaleToFit():e.isScaledDown()&&e.scaleToActual(s,i))}else t.x=s,t.y=i,t.tapped=setTimeout(function(){t.tapped=null,e.toggleControls(!0)},300);return this},n(e).on("onActivate.fb",function(t,e){e.Guestures||(e.Guestures=new l(e))}),n(e).on("beforeClose.fb",function(t,e){e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons),t.instance.$refs.container.on("click","[data-fancybox-play]",function(){t.toggle()})},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):t.stop()},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this;t.stop(),t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)&&(t.instance.$refs.container.on({"beforeLoad.fb.player":e.proxy(t,"clear"),"onComplete.fb.player":e.proxy(t,"set")}),t.isActive=!0,t.instance.current.isComplete&&t.set(),t.instance.$refs.container.trigger("onPlayStart"),t.$button.addClass("fancybox-button--pause"))},stop:function(){var t=this;t.clear(),t.instance.$refs.container.trigger("onPlayEnd").off(".player"),t.$button.removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on("onInit.fb",function(t,e){e.opts.slideShow&&!e.SlideShow&&e.group.length>1&&(e.SlideShow=new n(e))}),e(t).on("beforeClose.fb onDeactivate.fb",function(t,e){e.SlideShow&&e.SlideShow.stop()})}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,init:function(){var n=this;n.isAvailable()&&(n.$button=e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.instance.$refs.buttons),n.instance.$refs.container.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),n.toggle()}),e(t).on("onUpdate.fb",function(t,e){n.$button.toggle(!!e.current.opts.fullScreen),n.$button.toggleClass("fancybox-button-shrink",n.isActivated())}),e(t).on("afterClose.fb",function(){n.exit()}))},isAvailable:function(){var t=this.instance.$refs.container.get(0);return!!(t.requestFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullscreen)},isActivated:function(){return!!(t.fullscreenElement||t.mozFullScreenElement||t.webkitFullscreenElement||t.msFullscreenElement)},launch:function(){var t=this.instance.$refs.container.get(0);t&&!this.instance.isClosing&&(t.requestFullscreen?t.requestFullscreen():t.msRequestFullscreen?t.msRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen(t.ALLOW_KEYBOARD_INPUT))},exit:function(){t.exitFullscreen?t.exitFullscreen():t.msExitFullscreen?t.msExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()},toggle:function(){this.isActivated()?this.exit():this.isAvailable()&&this.launch()}}),e(t).on("onInit.fb",function(t,e){e.opts.fullScreen&&!e.FullScreen&&(e.FullScreen=new n(e))})}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this;t.$button=e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click",function(e){e.stopPropagation(),e.preventDefault(),t.toggle()})},create:function(){var t,n,o=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),t="<ul>",e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click touchstart","li",function(){o.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,o,s,i=e(this).parent().removeClass("fancybox-thumbs-loading"),a=i.outerWidth(),r=i.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/a,s=n/r,o>=1&&s>=1&&(o>s?(t/=s,n=r):(t=a,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*a-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-container--thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.$grid.show(),this.focus()):this.$grid&&this.$grid.hide(),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible?this.hide():this.show()}}),e(t).on("onInit.fb",function(t,e){var o=e.group[0],s=e.group[1];e.opts.thumbs&&!e.Thumbs&&e.group.length>1&&("image"==o.type||o.opts.thumb||o.opts.$thumb)&&("image"==s.type||s.opts.thumb||s.opts.$thumb)&&(e.Thumbs=new n(e))}),e(t).on("beforeMove.fb",function(t,e,n){var o=e.Thumbs;o&&(n.modal?(o.$button.hide(),o.hide()):(e.opts.thumbs.showOnStart===!0&&e.firstRun&&o.show(),o.$button.show(),o.isVisible&&o.focus()))}),e(t).on("beforeClose.fb",function(t,e){e.Thumbs&&e.Thumbs.isVisible&&e.opts.thumbs.hideOnClosing!==!1&&e.Thumbs.close(),e.Thumbs=null})}(document,window.jQuery);
;(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.moment=factory()}(this,(function(){'use strict';var hookCallback;function hooks(){return hookCallback.apply(null,arguments);}
function setHookCallback(callback){hookCallback=callback;}
function isArray(input){return input instanceof Array||Object.prototype.toString.call(input)==='[object Array]';}
function isObject(input){return input!=null&&Object.prototype.toString.call(input)==='[object Object]';}
function isObjectEmpty(obj){var k;for(k in obj){return false;}
return true;}
function isNumber(input){return typeof input==='number'||Object.prototype.toString.call(input)==='[object Number]';}
function isDate(input){return input instanceof Date||Object.prototype.toString.call(input)==='[object Date]';}
function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i));}
return res;}
function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b);}
function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i];}}
if(hasOwnProp(b,'toString')){a.toString=b.toString;}
if(hasOwnProp(b,'valueOf')){a.valueOf=b.valueOf;}
return a;}
function createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();}
function defaultParsingFlags(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null};}
function getParsingFlags(m){if(m._pf==null){m._pf=defaultParsingFlags();}
return m._pf;}
var some;if(Array.prototype.some){some=Array.prototype.some;}else{some=function(fun){var t=Object(this);var len=t.length>>>0;for(var i=0;i<len;i++){if(i in t&&fun.call(this,t[i],i,t)){return true;}}
return false;};}
var some$1=some;function isValid(m){if(m._isValid==null){var flags=getParsingFlags(m);var parsedParts=some$1.call(flags.parsedDateParts,function(i){return i!=null;});var isNowValid=!isNaN(m._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated&&(!flags.meridiem||(flags.meridiem&&parsedParts));if(m._strict){isNowValid=isNowValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined;}
if(Object.isFrozen==null||!Object.isFrozen(m)){m._isValid=isNowValid;}
else{return isNowValid;}}
return m._isValid;}
function createInvalid(flags){var m=createUTC(NaN);if(flags!=null){extend(getParsingFlags(m),flags);}
else{getParsingFlags(m).userInvalidated=true;}
return m;}
function isUndefined(input){return input===void 0;}
var momentProperties=hooks.momentProperties=[];function copyConfig(to,from){var i,prop,val;if(!isUndefined(from._isAMomentObject)){to._isAMomentObject=from._isAMomentObject;}
if(!isUndefined(from._i)){to._i=from._i;}
if(!isUndefined(from._f)){to._f=from._f;}
if(!isUndefined(from._l)){to._l=from._l;}
if(!isUndefined(from._strict)){to._strict=from._strict;}
if(!isUndefined(from._tzm)){to._tzm=from._tzm;}
if(!isUndefined(from._isUTC)){to._isUTC=from._isUTC;}
if(!isUndefined(from._offset)){to._offset=from._offset;}
if(!isUndefined(from._pf)){to._pf=getParsingFlags(from);}
if(!isUndefined(from._locale)){to._locale=from._locale;}
if(momentProperties.length>0){for(i in momentProperties){prop=momentProperties[i];val=from[prop];if(!isUndefined(val)){to[prop]=val;}}}
return to;}
var updateInProgress=false;function Moment(config){copyConfig(this,config);this._d=new Date(config._d!=null?config._d.getTime():NaN);if(!this.isValid()){this._d=new Date(NaN);}
if(updateInProgress===false){updateInProgress=true;hooks.updateOffset(this);updateInProgress=false;}}
function isMoment(obj){return obj instanceof Moment||(obj!=null&&obj._isAMomentObject!=null);}
function absFloor(number){if(number<0){return Math.ceil(number)||0;}else{return Math.floor(number);}}
function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber);}
return value;}
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if((dontConvert&&array1[i]!==array2[i])||(!dontConvert&&toInt(array1[i])!==toInt(array2[i]))){diffs++;}}
return diffs+lengthDiff;}
function warn(msg){if(hooks.suppressDeprecationWarnings===false&&(typeof console!=='undefined')&&console.warn){console.warn('Deprecation warning: '+msg);}}
function deprecate(msg,fn){var firstTime=true;return extend(function(){if(hooks.deprecationHandler!=null){hooks.deprecationHandler(null,msg);}
if(firstTime){var args=[];var arg;for(var i=0;i<arguments.length;i++){arg='';if(typeof arguments[i]==='object'){arg+='\n['+i+'] ';for(var key in arguments[0]){arg+=key+': '+arguments[0][key]+', ';}
arg=arg.slice(0,-2);}else{arg=arguments[i];}
args.push(arg);}
warn(msg+'\nArguments: '+Array.prototype.slice.call(args).join('')+'\n'+(new Error()).stack);firstTime=false;}
return fn.apply(this,arguments);},fn);}
var deprecations={};function deprecateSimple(name,msg){if(hooks.deprecationHandler!=null){hooks.deprecationHandler(name,msg);}
if(!deprecations[name]){warn(msg);deprecations[name]=true;}}
hooks.suppressDeprecationWarnings=false;hooks.deprecationHandler=null;function isFunction(input){return input instanceof Function||Object.prototype.toString.call(input)==='[object Function]';}
function set(config){var prop,i;for(i in config){prop=config[i];if(isFunction(prop)){this[i]=prop;}else{this['_'+i]=prop;}}
this._config=config;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+'|'+(/\d{1,2}/).source);}
function mergeConfigs(parentConfig,childConfig){var res=extend({},parentConfig),prop;for(prop in childConfig){if(hasOwnProp(childConfig,prop)){if(isObject(parentConfig[prop])&&isObject(childConfig[prop])){res[prop]={};extend(res[prop],parentConfig[prop]);extend(res[prop],childConfig[prop]);}else if(childConfig[prop]!=null){res[prop]=childConfig[prop];}else{delete res[prop];}}}
for(prop in parentConfig){if(hasOwnProp(parentConfig,prop)&&!hasOwnProp(childConfig,prop)&&isObject(parentConfig[prop])){res[prop]=extend({},res[prop]);}}
return res;}
function Locale(config){if(config!=null){this.set(config);}}
var keys;if(Object.keys){keys=Object.keys;}else{keys=function(obj){var i,res=[];for(i in obj){if(hasOwnProp(obj,i)){res.push(i);}}
return res;};}
var keys$1=keys;var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'};function calendar(key,mom,now){var output=this._calendar[key]||this._calendar['sameElse'];return isFunction(output)?output.call(mom,now):output;}
var defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format;}
this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});return this._longDateFormat[key];}
var defaultInvalidDate='Invalid date';function invalidDate(){return this._invalidDate;}
var defaultOrdinal='%d';var defaultOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace('%d',number);}
var defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'};function relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return(isFunction(output))?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);}
function pastFuture(diff,output){var format=this._relativeTime[diff>0?'future':'past'];return isFunction(format)?format(output):format.replace(/%s/i,output);}
var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase]=aliases[lowerCase+'s']=aliases[shorthand]=unit;}
function normalizeUnits(units){return typeof units==='string'?aliases[units]||aliases[units.toLowerCase()]:undefined;}
function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop];}}}
return normalizedInput;}
var priorities={};function addUnitPriority(unit,priority){priorities[unit]=priority;}
function getPrioritizedUnits(unitsObj){var units=[];for(var u in unitsObj){units.push({unit:u,priority:priorities[u]});}
units.sort(function(a,b){return a.priority-b.priority;});return units;}
function makeGetSet(unit,keepTime){return function(value){if(value!=null){set$1(this,unit,value);hooks.updateOffset(this,keepTime);return this;}else{return get(this,unit);}};}
function get(mom,unit){return mom.isValid()?mom._d['get'+(mom._isUTC?'UTC':'')+unit]():NaN;}
function set$1(mom,unit,value){if(mom.isValid()){mom._d['set'+(mom._isUTC?'UTC':'')+unit](value);}}
function stringGet(units){units=normalizeUnits(units);if(isFunction(this[units])){return this[units]();}
return this;}
function stringSet(units,value){if(typeof units==='object'){units=normalizeObjectUnits(units);var prioritized=getPrioritizedUnits(units);for(var i=0;i<prioritized.length;i++){this[prioritized[i].unit](units[prioritized[i].unit]);}}else{units=normalizeUnits(units);if(isFunction(this[units])){return this[units](value);}}
return this;}
function zeroFill(number,targetLength,forceSign){var absNumber=''+Math.abs(number),zerosToFill=targetLength-absNumber.length,sign=number>=0;return(sign?(forceSign?'+':''):'-')+
Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber;}
var formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={};function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback==='string'){func=function(){return this[callback]();};}
if(token){formatTokenFunctions[token]=func;}
if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2]);};}
if(ordinal){formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token);};}}
function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}
return input.replace(/\\/g,'');}
function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];}else{array[i]=removeFormattingTokens(array[i]);}}
return function(mom){var output='',i;for(i=0;i<length;i++){output+=array[i]instanceof Function?array[i].call(mom,format):array[i];}
return output;};}
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}
format=expandFormat(format,m.localeData());formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m);}
function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input;}
localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1;}
return format;}
var match1=/\d/;var match2=/\d\d/;var match3=/\d{3}/;var match4=/\d{4}/;var match6=/[+-]?\d{6}/;var match1to2=/\d\d?/;var match3to4=/\d\d\d\d?/;var match5to6=/\d\d\d\d\d\d?/;var match1to3=/\d{1,3}/;var match1to4=/\d{1,4}/;var match1to6=/[+-]?\d{1,6}/;var matchUnsigned=/\d+/;var matchSigned=/[+-]?\d+/;var matchOffset=/Z|[+-]\d\d:?\d\d/gi;var matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi;var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;var matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes={};function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict,localeData){return(isStrict&&strictRegex)?strictRegex:regex;};}
function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token));}
return regexes[token](config._strict,config._locale);}
function unescapeFormat(s){return regexEscape(s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4;}));}
function regexEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}
var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token==='string'){token=[token];}
if(isNumber(callback)){func=function(input,array){array[callback]=toInt(input);};}
for(i=0;i<token.length;i++){tokens[token[i]]=func;}}
function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token);});}
function addTimeToArrayFromToken(token,input,config){if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token);}}
var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;var MINUTE=4;var SECOND=5;var MILLISECOND=6;var WEEK=7;var WEEKDAY=8;var indexOf;if(Array.prototype.indexOf){indexOf=Array.prototype.indexOf;}else{indexOf=function(o){var i;for(i=0;i<this.length;++i){if(this[i]===o){return i;}}
return-1;};}
var indexOf$1=indexOf;function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate();}
addFormatToken('M',['MM',2],'Mo',function(){return this.month()+1;});addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format);});addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format);});addUnitAlias('month','M');addUnitPriority('month',8);addRegexToken('M',match1to2);addRegexToken('MM',match1to2,match2);addRegexToken('MMM',function(isStrict,locale){return locale.monthsShortRegex(isStrict);});addRegexToken('MMMM',function(isStrict,locale){return locale.monthsRegex(isStrict);});addParseToken(['M','MM'],function(input,array){array[MONTH]=toInt(input)-1;});addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);if(month!=null){array[MONTH]=month;}else{getParsingFlags(config).invalidMonth=input;}});var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths(m,format){if(!m){return this._months;}
return isArray(this._months)?this._months[m.month()]:this._months[(this._months.isFormat||MONTHS_IN_FORMAT).test(format)?'format':'standalone'][m.month()];}
var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort(m,format){if(!m){return this._monthsShort;}
return isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()];}
function handleStrictParse(monthName,format,strict){var i,ii,mom,llc=monthName.toLocaleLowerCase();if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];for(i=0;i<12;++i){mom=createUTC([2000,i]);this._shortMonthsParse[i]=this.monthsShort(mom,'').toLocaleLowerCase();this._longMonthsParse[i]=this.months(mom,'').toLocaleLowerCase();}}
if(strict){if(format==='MMM'){ii=indexOf$1.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf$1.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}}else{if(format==='MMM'){ii=indexOf$1.call(this._shortMonthsParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf$1.call(this._longMonthsParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}}}
function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(this._monthsParseExact){return handleStrictParse.call(this,monthName,format,strict);}
if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];}
for(i=0;i<12;i++){mom=createUTC([2000,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i');this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i');}
if(!strict&&!this._monthsParse[i]){regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,'');this._monthsParse[i]=new RegExp(regex.replace('.',''),'i');}
if(strict&&format==='MMMM'&&this._longMonthsParse[i].test(monthName)){return i;}else if(strict&&format==='MMM'&&this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict&&this._monthsParse[i].test(monthName)){return i;}}}
function setMonth(mom,value){var dayOfMonth;if(!mom.isValid()){return mom;}
if(typeof value==='string'){if(/^\d+$/.test(value)){value=toInt(value);}else{value=mom.localeData().monthsParse(value);if(!isNumber(value)){return mom;}}}
dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth);return mom;}
function getSetMonth(value){if(value!=null){setMonth(this,value);hooks.updateOffset(this,true);return this;}else{return get(this,'Month');}}
function getDaysInMonth(){return daysInMonth(this.year(),this.month());}
var defaultMonthsShortRegex=matchWord;function monthsShortRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}
if(isStrict){return this._monthsShortStrictRegex;}else{return this._monthsShortRegex;}}else{if(!hasOwnProp(this,'_monthsShortRegex')){this._monthsShortRegex=defaultMonthsShortRegex;}
return this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex;}}
var defaultMonthsRegex=matchWord;function monthsRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}
if(isStrict){return this._monthsStrictRegex;}else{return this._monthsRegex;}}else{if(!hasOwnProp(this,'_monthsRegex')){this._monthsRegex=defaultMonthsRegex;}
return this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex;}}
function computeMonthsParse(){function cmpLenRev(a,b){return b.length-a.length;}
var shortPieces=[],longPieces=[],mixedPieces=[],i,mom;for(i=0;i<12;i++){mom=createUTC([2000,i]);shortPieces.push(this.monthsShort(mom,''));longPieces.push(this.months(mom,''));mixedPieces.push(this.months(mom,''));mixedPieces.push(this.monthsShort(mom,''));}
shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<12;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);}
for(i=0;i<24;i++){mixedPieces[i]=regexEscape(mixedPieces[i]);}
this._monthsRegex=new RegExp('^('+mixedPieces.join('|')+')','i');this._monthsShortRegex=this._monthsRegex;this._monthsStrictRegex=new RegExp('^('+longPieces.join('|')+')','i');this._monthsShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i');}
addFormatToken('Y',0,0,function(){var y=this.year();return y<=9999?''+y:'+'+y;});addFormatToken(0,['YY',2],0,function(){return this.year()%100;});addFormatToken(0,['YYYY',4],0,'year');addFormatToken(0,['YYYYY',5],0,'year');addFormatToken(0,['YYYYYY',6,true],0,'year');addUnitAlias('year','y');addUnitPriority('year',1);addRegexToken('Y',matchSigned);addRegexToken('YY',match1to2,match2);addRegexToken('YYYY',match1to4,match4);addRegexToken('YYYYY',match1to6,match6);addRegexToken('YYYYYY',match1to6,match6);addParseToken(['YYYYY','YYYYYY'],YEAR);addParseToken('YYYY',function(input,array){array[YEAR]=input.length===2?hooks.parseTwoDigitYear(input):toInt(input);});addParseToken('YY',function(input,array){array[YEAR]=hooks.parseTwoDigitYear(input);});addParseToken('Y',function(input,array){array[YEAR]=parseInt(input,10);});function daysInYear(year){return isLeapYear(year)?366:365;}
function isLeapYear(year){return(year%4===0&&year%100!==0)||year%400===0;}
hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2000);};var getSetYear=makeGetSet('FullYear',true);function getIsLeapYear(){return isLeapYear(this.year());}
function createDate(y,m,d,h,M,s,ms){var date=new Date(y,m,d,h,M,s,ms);if(y<100&&y>=0&&isFinite(date.getFullYear())){date.setFullYear(y);}
return date;}
function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y<100&&y>=0&&isFinite(date.getUTCFullYear())){date.setUTCFullYear(y);}
return date;}
function firstWeekOffset(year,dow,doy){var
fwd=7+dow-doy,fwdlw=(7+createUTCDate(year,0,fwd).getUTCDay()-dow)%7;return-fwdlw+fwd-1;}
function dayOfYearFromWeeks(year,week,weekday,dow,doy){var localWeekday=(7+weekday-dow)%7,weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1+7*(week-1)+localWeekday+weekOffset,resYear,resDayOfYear;if(dayOfYear<=0){resYear=year-1;resDayOfYear=daysInYear(resYear)+dayOfYear;}else if(dayOfYear>daysInYear(year)){resYear=year+1;resDayOfYear=dayOfYear-daysInYear(year);}else{resYear=year;resDayOfYear=dayOfYear;}
return{year:resYear,dayOfYear:resDayOfYear};}
function weekOfYear(mom,dow,doy){var weekOffset=firstWeekOffset(mom.year(),dow,doy),week=Math.floor((mom.dayOfYear()-weekOffset-1)/7)+1,resWeek,resYear;if(week<1){resYear=mom.year()-1;resWeek=week+weeksInYear(resYear,dow,doy);}else if(week>weeksInYear(mom.year(),dow,doy)){resWeek=week-weeksInYear(mom.year(),dow,doy);resYear=mom.year()+1;}else{resYear=mom.year();resWeek=week;}
return{week:resWeek,year:resYear};}
function weeksInYear(year,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),weekOffsetNext=firstWeekOffset(year+1,dow,doy);return(daysInYear(year)-weekOffset+weekOffsetNext)/7;}
addFormatToken('w',['ww',2],'wo','week');addFormatToken('W',['WW',2],'Wo','isoWeek');addUnitAlias('week','w');addUnitAlias('isoWeek','W');addUnitPriority('week',5);addUnitPriority('isoWeek',5);addRegexToken('w',match1to2);addRegexToken('ww',match1to2,match2);addRegexToken('W',match1to2);addRegexToken('WW',match1to2,match2);addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)]=toInt(input);});function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;}
var defaultLocaleWeek={dow:0,doy:6};function localeFirstDayOfWeek(){return this._week.dow;}
function localeFirstDayOfYear(){return this._week.doy;}
function getSetWeek(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,'d');}
function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,'d');}
addFormatToken('d',0,'do','day');addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format);});addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format);});addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format);});addFormatToken('e',0,0,'weekday');addFormatToken('E',0,0,'isoWeekday');addUnitAlias('day','d');addUnitAlias('weekday','e');addUnitAlias('isoWeekday','E');addUnitPriority('day',11);addUnitPriority('weekday',11);addUnitPriority('isoWeekday',11);addRegexToken('d',match1to2);addRegexToken('e',match1to2);addRegexToken('E',match1to2);addRegexToken('dd',function(isStrict,locale){return locale.weekdaysMinRegex(isStrict);});addRegexToken('ddd',function(isStrict,locale){return locale.weekdaysShortRegex(isStrict);});addRegexToken('dddd',function(isStrict,locale){return locale.weekdaysRegex(isStrict);});addWeekParseToken(['dd','ddd','dddd'],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict);if(weekday!=null){week.d=weekday;}else{getParsingFlags(config).invalidWeekday=input;}});addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token]=toInt(input);});function parseWeekday(input,locale){if(typeof input!=='string'){return input;}
if(!isNaN(input)){return parseInt(input,10);}
input=locale.weekdaysParse(input);if(typeof input==='number'){return input;}
return null;}
function parseIsoWeekday(input,locale){if(typeof input==='string'){return locale.weekdaysParse(input)%7||7;}
return isNaN(input)?null:input;}
var defaultLocaleWeekdays='Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');function localeWeekdays(m,format){if(!m){return this._weekdays;}
return isArray(this._weekdays)?this._weekdays[m.day()]:this._weekdays[this._weekdays.isFormat.test(format)?'format':'standalone'][m.day()];}
var defaultLocaleWeekdaysShort='Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');function localeWeekdaysShort(m){return(m)?this._weekdaysShort[m.day()]:this._weekdaysShort;}
var defaultLocaleWeekdaysMin='Su_Mo_Tu_We_Th_Fr_Sa'.split('_');function localeWeekdaysMin(m){return(m)?this._weekdaysMin[m.day()]:this._weekdaysMin;}
function handleStrictParse$1(weekdayName,format,strict){var i,ii,mom,llc=weekdayName.toLocaleLowerCase();if(!this._weekdaysParse){this._weekdaysParse=[];this._shortWeekdaysParse=[];this._minWeekdaysParse=[];for(i=0;i<7;++i){mom=createUTC([2000,1]).day(i);this._minWeekdaysParse[i]=this.weekdaysMin(mom,'').toLocaleLowerCase();this._shortWeekdaysParse[i]=this.weekdaysShort(mom,'').toLocaleLowerCase();this._weekdaysParse[i]=this.weekdays(mom,'').toLocaleLowerCase();}}
if(strict){if(format==='dddd'){ii=indexOf$1.call(this._weekdaysParse,llc);return ii!==-1?ii:null;}else if(format==='ddd'){ii=indexOf$1.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf$1.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}}else{if(format==='dddd'){ii=indexOf$1.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else if(format==='ddd'){ii=indexOf$1.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf$1.call(this._minWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf$1.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}}}
function localeWeekdaysParse(weekdayName,format,strict){var i,mom,regex;if(this._weekdaysParseExact){return handleStrictParse$1.call(this,weekdayName,format,strict);}
if(!this._weekdaysParse){this._weekdaysParse=[];this._minWeekdaysParse=[];this._shortWeekdaysParse=[];this._fullWeekdaysParse=[];}
for(i=0;i<7;i++){mom=createUTC([2000,1]).day(i);if(strict&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp('^'+this.weekdays(mom,'').replace('.','\.?')+'$','i');this._shortWeekdaysParse[i]=new RegExp('^'+this.weekdaysShort(mom,'').replace('.','\.?')+'$','i');this._minWeekdaysParse[i]=new RegExp('^'+this.weekdaysMin(mom,'').replace('.','\.?')+'$','i');}
if(!this._weekdaysParse[i]){regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i');}
if(strict&&format==='dddd'&&this._fullWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==='ddd'&&this._shortWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==='dd'&&this._minWeekdaysParse[i].test(weekdayName)){return i;}else if(!strict&&this._weekdaysParse[i].test(weekdayName)){return i;}}}
function getSetDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,'d');}else{return day;}}
function getSetLocaleDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,'d');}
function getSetISODayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
if(input!=null){var weekday=parseIsoWeekday(input,this.localeData());return this.day(this.day()%7?weekday:weekday-7);}else{return this.day()||7;}}
var defaultWeekdaysRegex=matchWord;function weekdaysRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysStrictRegex;}else{return this._weekdaysRegex;}}else{if(!hasOwnProp(this,'_weekdaysRegex')){this._weekdaysRegex=defaultWeekdaysRegex;}
return this._weekdaysStrictRegex&&isStrict?this._weekdaysStrictRegex:this._weekdaysRegex;}}
var defaultWeekdaysShortRegex=matchWord;function weekdaysShortRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysShortStrictRegex;}else{return this._weekdaysShortRegex;}}else{if(!hasOwnProp(this,'_weekdaysShortRegex')){this._weekdaysShortRegex=defaultWeekdaysShortRegex;}
return this._weekdaysShortStrictRegex&&isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex;}}
var defaultWeekdaysMinRegex=matchWord;function weekdaysMinRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysMinStrictRegex;}else{return this._weekdaysMinRegex;}}else{if(!hasOwnProp(this,'_weekdaysMinRegex')){this._weekdaysMinRegex=defaultWeekdaysMinRegex;}
return this._weekdaysMinStrictRegex&&isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex;}}
function computeWeekdaysParse(){function cmpLenRev(a,b){return b.length-a.length;}
var minPieces=[],shortPieces=[],longPieces=[],mixedPieces=[],i,mom,minp,shortp,longp;for(i=0;i<7;i++){mom=createUTC([2000,1]).day(i);minp=this.weekdaysMin(mom,'');shortp=this.weekdaysShort(mom,'');longp=this.weekdays(mom,'');minPieces.push(minp);shortPieces.push(shortp);longPieces.push(longp);mixedPieces.push(minp);mixedPieces.push(shortp);mixedPieces.push(longp);}
minPieces.sort(cmpLenRev);shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<7;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);mixedPieces[i]=regexEscape(mixedPieces[i]);}
this._weekdaysRegex=new RegExp('^('+mixedPieces.join('|')+')','i');this._weekdaysShortRegex=this._weekdaysRegex;this._weekdaysMinRegex=this._weekdaysRegex;this._weekdaysStrictRegex=new RegExp('^('+longPieces.join('|')+')','i');this._weekdaysShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i');this._weekdaysMinStrictRegex=new RegExp('^('+minPieces.join('|')+')','i');}
function hFormat(){return this.hours()%12||12;}
function kFormat(){return this.hours()||24;}
addFormatToken('H',['HH',2],0,'hour');addFormatToken('h',['hh',2],0,hFormat);addFormatToken('k',['kk',2],0,kFormat);addFormatToken('hmm',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2);});addFormatToken('hmmss',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2)+
zeroFill(this.seconds(),2);});addFormatToken('Hmm',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2);});addFormatToken('Hmmss',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2)+
zeroFill(this.seconds(),2);});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);});}
meridiem('a',true);meridiem('A',false);addUnitAlias('hour','h');addUnitPriority('hour',13);function matchMeridiem(isStrict,locale){return locale._meridiemParse;}
addRegexToken('a',matchMeridiem);addRegexToken('A',matchMeridiem);addRegexToken('H',match1to2);addRegexToken('h',match1to2);addRegexToken('HH',match1to2,match2);addRegexToken('hh',match1to2,match2);addRegexToken('hmm',match3to4);addRegexToken('hmmss',match5to6);addRegexToken('Hmm',match3to4);addRegexToken('Hmmss',match5to6);addParseToken(['H','HH'],HOUR);addParseToken(['a','A'],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input;});addParseToken(['h','hh'],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=true;});addParseToken('hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));getParsingFlags(config).bigHour=true;});addParseToken('hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));getParsingFlags(config).bigHour=true;});addParseToken('Hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));});addParseToken('Hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));});function localeIsPM(input){return((input+'').toLowerCase().charAt(0)==='p');}
var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){if(hours>11){return isLower?'pm':'PM';}else{return isLower?'am':'AM';}}
var getSetHour=makeGetSet('Hours',true);var baseConfig={calendar:defaultCalendar,longDateFormat:defaultLongDateFormat,invalidDate:defaultInvalidDate,ordinal:defaultOrdinal,ordinalParse:defaultOrdinalParse,relativeTime:defaultRelativeTime,months:defaultLocaleMonths,monthsShort:defaultLocaleMonthsShort,week:defaultLocaleWeek,weekdays:defaultLocaleWeekdays,weekdaysMin:defaultLocaleWeekdaysMin,weekdaysShort:defaultLocaleWeekdaysShort,meridiemParse:defaultLocaleMeridiemParse};var locales={};var localeFamilies={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;}
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split('-');j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split('-'):null;while(j>0){locale=loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}
if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){break;}
j--;}
i++;}
return null;}
function loadLocale(name){var oldLocale=null;if(!locales[name]&&(typeof module!=='undefined')&&module&&module.exports){try{oldLocale=globalLocale._abbr;require('./locale/'+name);getSetGlobalLocale(oldLocale);}catch(e){}}
return locales[name];}
function getSetGlobalLocale(key,values){var data;if(key){if(isUndefined(values)){data=getLocale(key);}
else{data=defineLocale(key,values);}
if(data){globalLocale=data;}}
return globalLocale._abbr;}
function defineLocale(name,config){if(config!==null){var parentConfig=baseConfig;config.abbr=name;if(locales[name]!=null){deprecateSimple('defineLocaleOverride','use moment.updateLocale(localeName, config) to change '+'an existing locale. moment.defineLocale(localeName, '+'config) should only be used for creating a new locale '+'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');parentConfig=locales[name]._config;}else if(config.parentLocale!=null){if(locales[config.parentLocale]!=null){parentConfig=locales[config.parentLocale]._config;}else{if(!localeFamilies[config.parentLocale]){localeFamilies[config.parentLocale]=[];}
localeFamilies[config.parentLocale].push({name:name,config:config});return null;}}
locales[name]=new Locale(mergeConfigs(parentConfig,config));if(localeFamilies[name]){localeFamilies[name].forEach(function(x){defineLocale(x.name,x.config);});}
getSetGlobalLocale(name);return locales[name];}else{delete locales[name];return null;}}
function updateLocale(name,config){if(config!=null){var locale,parentConfig=baseConfig;if(locales[name]!=null){parentConfig=locales[name]._config;}
config=mergeConfigs(parentConfig,config);locale=new Locale(config);locale.parentLocale=locales[name];locales[name]=locale;getSetGlobalLocale(name);}else{if(locales[name]!=null){if(locales[name].parentLocale!=null){locales[name]=locales[name].parentLocale;}else if(locales[name]!=null){delete locales[name];}}}
return locales[name];}
function getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr;}
if(!key){return globalLocale;}
if(!isArray(key)){locale=loadLocale(key);if(locale){return locale;}
key=[key];}
return chooseLocale(key);}
function listLocales(){return keys$1(locales);}
function checkOverflow(m){var overflow;var a=m._a;if(a&&getParsingFlags(m).overflow===-2){overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||(a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0))?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE;}
if(getParsingFlags(m)._overflowWeeks&&overflow===-1){overflow=WEEK;}
if(getParsingFlags(m)._overflowWeekday&&overflow===-1){overflow=WEEKDAY;}
getParsingFlags(m).overflow=overflow;}
return m;}
var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;var basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;var tzRegex=/Z|[+-]\d\d(?::?\d\d)?/;var isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d\d-\d\d/],['YYYY-MM-DD',/\d{4}-\d\d-\d\d/],['GGGG-[W]WW-E',/\d{4}-W\d\d-\d/],['GGGG-[W]WW',/\d{4}-W\d\d/,false],['YYYY-DDD',/\d{4}-\d{3}/],['YYYY-MM',/\d{4}-\d\d/,false],['YYYYYYMMDD',/[+-]\d{10}/],['YYYYMMDD',/\d{8}/],['GGGG[W]WWE',/\d{4}W\d{3}/],['GGGG[W]WW',/\d{4}W\d{2}/,false],['YYYYDDD',/\d{7}/]];var isoTimes=[['HH:mm:ss.SSSS',/\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss,SSSS',/\d\d:\d\d:\d\d,\d+/],['HH:mm:ss',/\d\d:\d\d:\d\d/],['HH:mm',/\d\d:\d\d/],['HHmmss.SSSS',/\d\d\d\d\d\d\.\d+/],['HHmmss,SSSS',/\d\d\d\d\d\d,\d+/],['HHmmss',/\d\d\d\d\d\d/],['HHmm',/\d\d\d\d/],['HH',/\d\d/]];var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;function configFromISO(config){var i,l,string=config._i,match=extendedIsoRegex.exec(string)||basicIsoRegex.exec(string),allowTime,dateFormat,timeFormat,tzFormat;if(match){getParsingFlags(config).iso=true;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(match[1])){dateFormat=isoDates[i][0];allowTime=isoDates[i][2]!==false;break;}}
if(dateFormat==null){config._isValid=false;return;}
if(match[3]){for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(match[3])){timeFormat=(match[2]||' ')+isoTimes[i][0];break;}}
if(timeFormat==null){config._isValid=false;return;}}
if(!allowTime&&timeFormat!=null){config._isValid=false;return;}
if(match[4]){if(tzRegex.exec(match[4])){tzFormat='Z';}else{config._isValid=false;return;}}
config._f=dateFormat+(timeFormat||'')+(tzFormat||'');configFromStringAndFormat(config);}else{config._isValid=false;}}
function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched!==null){config._d=new Date(+matched[1]);return;}
configFromISO(config);if(config._isValid===false){delete config._isValid;hooks.createFromInputFallback(config);}}
hooks.createFromInputFallback=deprecate('value provided is not in a recognized ISO format. moment construction falls back to js Date(), '+'which is not reliable across all browsers and versions. Non ISO date formats are '+'discouraged and will be removed in an upcoming major release. Please refer to '+'http://momentjs.com/guides/#/warnings/js-date/ for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''));});function defaults(a,b,c){if(a!=null){return a;}
if(b!=null){return b;}
return c;}
function currentDateArray(config){var nowValue=new Date(hooks.now());if(config._useUTC){return[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()];}
return[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()];}
function configFromArray(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return;}
currentDate=currentDateArray(config);if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);}
if(config._dayOfYear){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)){getParsingFlags(config)._overflowDayOfYear=true;}
date=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate();}
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i];}
for(;i<7;i++){config._a[i]=input[i]=(config._a[i]==null)?(i===2?1:0):config._a[i];}
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0;}
config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);}
if(config._nextDay){config._a[HOUR]=24;}}
function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(createLocal(),1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);if(weekday<1||weekday>7){weekdayOverflow=true;}}else{dow=config._locale._week.dow;doy=config._locale._week.doy;var curWeek=weekOfYear(createLocal(),dow,doy);weekYear=defaults(w.gg,config._a[YEAR],curWeek.year);week=defaults(w.w,curWeek.week);if(w.d!=null){weekday=w.d;if(weekday<0||weekday>6){weekdayOverflow=true;}}else if(w.e!=null){weekday=w.e+dow;if(w.e<0||w.e>6){weekdayOverflow=true;}}else{weekday=dow;}}
if(week<1||week>weeksInYear(weekYear,dow,doy)){getParsingFlags(config)._overflowWeeks=true;}else if(weekdayOverflow!=null){getParsingFlags(config)._overflowWeekday=true;}else{temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear;}}
hooks.ISO_8601=function(){};function configFromStringAndFormat(config){if(config._f===hooks.ISO_8601){configFromISO(config);return;}
config._a=[];getParsingFlags(config).empty=true;var string=''+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped);}
string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length;}
if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=false;}
else{getParsingFlags(config).unusedTokens.push(token);}
addTimeToArrayFromToken(token,parsedInput,config);}
else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token);}}
getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){getParsingFlags(config).unusedInput.push(string);}
if(config._a[HOUR]<=12&&getParsingFlags(config).bigHour===true&&config._a[HOUR]>0){getParsingFlags(config).bigHour=undefined;}
getParsingFlags(config).parsedDateParts=config._a.slice(0);getParsingFlags(config).meridiem=config._meridiem;config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config);}
function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){return hour;}
if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM!=null){isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12;}
if(!isPm&&hour===12){hour=0;}
return hour;}else{return hour;}}
function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length===0){getParsingFlags(config).invalidFormat=true;config._d=new Date(NaN);return;}
for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC;}
tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(!isValid(tempConfig)){continue;}
currentScore+=getParsingFlags(tempConfig).charsLeftOver;currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig;}}
extend(config,bestMoment||tempConfig);}
function configFromObject(config){if(config._d){return;}
var i=normalizeObjectUnits(config._i);config._a=map([i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond],function(obj){return obj&&parseInt(obj,10);});configFromArray(config);}
function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){res.add(1,'d');res._nextDay=undefined;}
return res;}
function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||getLocale(config._l);if(input===null||(format===undefined&&input==='')){return createInvalid({nullInput:true});}
if(typeof input==='string'){config._i=input=config._locale.preparse(input);}
if(isMoment(input)){return new Moment(checkOverflow(input));}else if(isDate(input)){config._d=input;}else if(isArray(format)){configFromStringAndArray(config);}else if(format){configFromStringAndFormat(config);}else{configFromInput(config);}
if(!isValid(config)){config._d=null;}
return config;}
function configFromInput(config){var input=config._i;if(input===undefined){config._d=new Date(hooks.now());}else if(isDate(input)){config._d=new Date(input.valueOf());}else if(typeof input==='string'){configFromString(config);}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10);});configFromArray(config);}else if(typeof(input)==='object'){configFromObject(config);}else if(isNumber(input)){config._d=new Date(input);}else{hooks.createFromInputFallback(config);}}
function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(locale===true||locale===false){strict=locale;locale=undefined;}
if((isObject(input)&&isObjectEmpty(input))||(isArray(input)&&input.length===0)){input=undefined;}
c._isAMomentObject=true;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c);}
function createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false);}
var prototypeMin=deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other<this?this:other;}else{return createInvalid();}});var prototypeMax=deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',function(){var other=createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other>this?this:other;}else{return createInvalid();}});function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0];}
if(!moments.length){return createLocal();}
res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){res=moments[i];}}
return res;}
function min(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);}
function max(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);}
var now=function(){return Date.now?Date.now():+(new Date());};function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._milliseconds=+milliseconds+
seconds*1e3+
minutes*6e4+
hours*1000*60*60;this._days=+days+
weeks*7;this._months=+months+
quarters*3+
years*12;this._data={};this._locale=getLocale();this._bubble();}
function isDuration(obj){return obj instanceof Duration;}
function absRound(number){if(number<0){return Math.round(-1*number)*-1;}else{return Math.round(number);}}
function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign='+';if(offset<0){offset=-offset;sign='-';}
return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~(offset)%60,2);});}
offset('Z',':');offset('ZZ','');addRegexToken('Z',matchShortOffset);addRegexToken('ZZ',matchShortOffset);addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC=true;config._tzm=offsetFromString(matchShortOffset,input);});var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(matcher,string){var matches=(string||'').match(matcher);if(matches===null){return null;}
var chunk=matches[matches.length-1]||[];var parts=(chunk+'').match(chunkOffset)||['-',0,0];var minutes=+(parts[1]*60)+toInt(parts[2]);return minutes===0?0:parts[0]==='+'?minutes:-minutes;}
function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?input.valueOf():createLocal(input).valueOf())-res.valueOf();res._d.setTime(res._d.valueOf()+diff);hooks.updateOffset(res,false);return res;}else{return createLocal(input).local();}}
function getDateOffset(m){return-Math.round(m._d.getTimezoneOffset()/15)*15;}
hooks.updateOffset=function(){};function getSetOffset(input,keepLocalTime){var offset=this._offset||0,localAdjust;if(!this.isValid()){return input!=null?this:NaN;}
if(input!=null){if(typeof input==='string'){input=offsetFromString(matchShortOffset,input);if(input===null){return this;}}else if(Math.abs(input)<16){input=input*60;}
if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this);}
this._offset=input;this._isUTC=true;if(localAdjust!=null){this.add(localAdjust,'m');}
if(offset!==input){if(!keepLocalTime||this._changeInProgress){addSubtract(this,createDuration(input-offset,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress=true;hooks.updateOffset(this,true);this._changeInProgress=null;}}
return this;}else{return this._isUTC?offset:getDateOffset(this);}}
function getSetZone(input,keepLocalTime){if(input!=null){if(typeof input!=='string'){input=-input;}
this.utcOffset(input,keepLocalTime);return this;}else{return-this.utcOffset();}}
function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime);}
function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=false;if(keepLocalTime){this.subtract(getDateOffset(this),'m');}}
return this;}
function setOffsetToParsedOffset(){if(this._tzm!=null){this.utcOffset(this._tzm);}else if(typeof this._i==='string'){var tZone=offsetFromString(matchOffset,this._i);if(tZone!=null){this.utcOffset(tZone);}
else{this.utcOffset(0,true);}}
return this;}
function hasAlignedHourOffset(input){if(!this.isValid()){return false;}
input=input?createLocal(input).utcOffset():0;return(this.utcOffset()-input)%60===0;}
function isDaylightSavingTime(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset());}
function isDaylightSavingTimeShifted(){if(!isUndefined(this._isDSTShifted)){return this._isDSTShifted;}
var c={};copyConfig(c,this);c=prepareConfig(c);if(c._a){var other=c._isUTC?createUTC(c._a):createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0;}else{this._isDSTShifted=false;}
return this._isDSTShifted;}
function isLocal(){return this.isValid()?!this._isUTC:false;}
function isUtcOffset(){return this.isValid()?this._isUTC:false;}
function isUtc(){return this.isValid()?this._isUTC&&this._offset===0:false;}
var aspNetRegex=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;var isoRegex=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;function createDuration(input,key){var duration=input,match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months};}else if(isNumber(input)){duration={};if(key){duration[key]=input;}else{duration.milliseconds=input;}}else if(!!(match=aspNetRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(absRound(match[MILLISECOND]*1000))*sign};}else if(!!(match=isoRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),w:parseIso(match[4],sign),d:parseIso(match[5],sign),h:parseIso(match[6],sign),m:parseIso(match[7],sign),s:parseIso(match[8],sign)};}else if(duration==null){duration={};}else if(typeof duration==='object'&&('from'in duration||'to'in duration)){diffRes=momentsDifference(createLocal(duration.from),createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months;}
ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,'_locale')){ret._locale=input._locale;}
return ret;}
createDuration.fn=Duration.prototype;function parseIso(inp,sign){var res=inp&&parseFloat(inp.replace(',','.'));return(isNaN(res)?0:res)*sign;}
function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months=other.month()-base.month()+
(other.year()-base.year())*12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}
res.milliseconds=+other-+(base.clone().add(res.months,'M'));return res;}
function momentsDifference(base,other){var res;if(!(base.isValid()&&other.isValid())){return{milliseconds:0,months:0};}
other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months;}
return res;}
function createAdder(direction,name){return function(val,period){var dur,tmp;if(period!==null&&!isNaN(+period)){deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period). '+'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');tmp=val;val=period;period=tmp;}
val=typeof val==='string'?+val:val;dur=createDuration(val,period);addSubtract(this,dur,direction);return this;};}
function addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=absRound(duration._days),months=absRound(duration._months);if(!mom.isValid()){return;}
updateOffset=updateOffset==null?true:updateOffset;if(milliseconds){mom._d.setTime(mom._d.valueOf()+milliseconds*isAdding);}
if(days){set$1(mom,'Date',get(mom,'Date')+days*isAdding);}
if(months){setMonth(mom,get(mom,'Month')+months*isAdding);}
if(updateOffset){hooks.updateOffset(mom,days||months);}}
var add=createAdder(1,'add');var subtract=createAdder(-1,'subtract');function getCalendarFormat(myMoment,now){var diff=myMoment.diff(now,'days',true);return diff<-6?'sameElse':diff<-1?'lastWeek':diff<0?'lastDay':diff<1?'sameDay':diff<2?'nextDay':diff<7?'nextWeek':'sameElse';}
function calendar$1(time,formats){var now=time||createLocal(),sod=cloneWithOffset(now,this).startOf('day'),format=hooks.calendarFormat(this,sod)||'sameElse';var output=formats&&(isFunction(formats[format])?formats[format].call(this,now):formats[format]);return this.format(output||this.localeData().calendar(format,this,createLocal(now)));}
function clone(){return new Moment(this);}
function isAfter(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(!isUndefined(units)?units:'millisecond');if(units==='millisecond'){return this.valueOf()>localInput.valueOf();}else{return localInput.valueOf()<this.clone().startOf(units).valueOf();}}
function isBefore(input,units){var localInput=isMoment(input)?input:createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(!isUndefined(units)?units:'millisecond');if(units==='millisecond'){return this.valueOf()<localInput.valueOf();}else{return this.clone().endOf(units).valueOf()<localInput.valueOf();}}
function isBetween(from,to,units,inclusivity){inclusivity=inclusivity||'()';return(inclusivity[0]==='('?this.isAfter(from,units):!this.isBefore(from,units))&&(inclusivity[1]===')'?this.isBefore(to,units):!this.isAfter(to,units));}
function isSame(input,units){var localInput=isMoment(input)?input:createLocal(input),inputMs;if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(units||'millisecond');if(units==='millisecond'){return this.valueOf()===localInput.valueOf();}else{inputMs=localInput.valueOf();return this.clone().startOf(units).valueOf()<=inputMs&&inputMs<=this.clone().endOf(units).valueOf();}}
function isSameOrAfter(input,units){return this.isSame(input,units)||this.isAfter(input,units);}
function isSameOrBefore(input,units){return this.isSame(input,units)||this.isBefore(input,units);}
function diff(input,units,asFloat){var that,zoneDelta,delta,output;if(!this.isValid()){return NaN;}
that=cloneWithOffset(input,this);if(!that.isValid()){return NaN;}
zoneDelta=(that.utcOffset()-this.utcOffset())*6e4;units=normalizeUnits(units);if(units==='year'||units==='month'||units==='quarter'){output=monthDiff(this,that);if(units==='quarter'){output=output/3;}else if(units==='year'){output=output/12;}}else{delta=this-that;output=units==='second'?delta/1e3:units==='minute'?delta/6e4:units==='hour'?delta/36e5:units==='day'?(delta-zoneDelta)/864e5:units==='week'?(delta-zoneDelta)/6048e5:delta;}
return asFloat?output:absFloor(output);}
function monthDiff(a,b){var wholeMonthDiff=((b.year()-a.year())*12)+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,'months');adjust=(b-anchor)/(anchor-anchor2);}else{anchor2=a.clone().add(wholeMonthDiff+1,'months');adjust=(b-anchor)/(anchor2-anchor);}
return-(wholeMonthDiff+adjust)||0;}
hooks.defaultFormat='YYYY-MM-DDTHH:mm:ssZ';hooks.defaultFormatUtc='YYYY-MM-DDTHH:mm:ss[Z]';function toString(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');}
function toISOString(){var m=this.clone().utc();if(0<m.year()&&m.year()<=9999){if(isFunction(Date.prototype.toISOString)){return this.toDate().toISOString();}else{return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}else{return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}
function inspect(){if(!this.isValid()){return'moment.invalid(/* '+this._i+' */)';}
var func='moment';var zone='';if(!this.isLocal()){func=this.utcOffset()===0?'moment.utc':'moment.parseZone';zone='Z';}
var prefix='['+func+'("]';var year=(0<this.year()&&this.year()<=9999)?'YYYY':'YYYYYY';var datetime='-MM-DD[T]HH:mm:ss.SSS';var suffix=zone+'[")]';return this.format(prefix+year+datetime+suffix);}
function format(inputString){if(!inputString){inputString=this.isUtc()?hooks.defaultFormatUtc:hooks.defaultFormat;}
var output=formatMoment(this,inputString);return this.localeData().postformat(output);}
function from(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||createLocal(time).isValid())){return createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}
function fromNow(withoutSuffix){return this.from(createLocal(),withoutSuffix);}
function to(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||createLocal(time).isValid())){return createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}
function toNow(withoutSuffix){return this.to(createLocal(),withoutSuffix);}
function locale(key){var newLocaleData;if(key===undefined){return this._locale._abbr;}else{newLocaleData=getLocale(key);if(newLocaleData!=null){this._locale=newLocaleData;}
return this;}}
var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key===undefined){return this.localeData();}else{return this.locale(key);}});function localeData(){return this._locale;}
function startOf(units){units=normalizeUnits(units);switch(units){case'year':this.month(0);case'quarter':case'month':this.date(1);case'week':case'isoWeek':case'day':case'date':this.hours(0);case'hour':this.minutes(0);case'minute':this.seconds(0);case'second':this.milliseconds(0);}
if(units==='week'){this.weekday(0);}
if(units==='isoWeek'){this.isoWeekday(1);}
if(units==='quarter'){this.month(Math.floor(this.month()/3)*3);}
return this;}
function endOf(units){units=normalizeUnits(units);if(units===undefined||units==='millisecond'){return this;}
if(units==='date'){units='day';}
return this.startOf(units).add(1,(units==='isoWeek'?'week':units)).subtract(1,'ms');}
function valueOf(){return this._d.valueOf()-((this._offset||0)*60000);}
function unix(){return Math.floor(this.valueOf()/1000);}
function toDate(){return new Date(this.valueOf());}
function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];}
function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()};}
function toJSON(){return this.isValid()?this.toISOString():null;}
function isValid$1(){return isValid(this);}
function parsingFlags(){return extend({},getParsingFlags(this));}
function invalidAt(){return getParsingFlags(this).overflow;}
function creationData(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict};}
addFormatToken(0,['gg',2],0,function(){return this.weekYear()%100;});addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear()%100;});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter);}
addWeekYearFormatToken('gggg','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','isoWeekYear');addWeekYearFormatToken('GGGGG','isoWeekYear');addUnitAlias('weekYear','gg');addUnitAlias('isoWeekYear','GG');addUnitPriority('weekYear',1);addUnitPriority('isoWeekYear',1);addRegexToken('G',matchSigned);addRegexToken('g',matchSigned);addRegexToken('GG',match1to2,match2);addRegexToken('gg',match1to2,match2);addRegexToken('GGGG',match1to4,match4);addRegexToken('gggg',match1to4,match4);addRegexToken('GGGGG',match1to6,match6);addRegexToken('ggggg',match1to6,match6);addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)]=toInt(input);});addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token]=hooks.parseTwoDigitYear(input);});function getSetWeekYear(input){return getSetWeekYearHelper.call(this,input,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);}
function getSetISOWeekYear(input){return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4);}
function getISOWeeksInYear(){return weeksInYear(this.year(),1,4);}
function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);}
function getSetWeekYearHelper(input,week,weekday,dow,doy){var weeksTarget;if(input==null){return weekOfYear(this,dow,doy).year;}else{weeksTarget=weeksInYear(input,dow,doy);if(week>weeksTarget){week=weeksTarget;}
return setWeekAll.call(this,input,week,weekday,dow,doy);}}
function setWeekAll(weekYear,week,weekday,dow,doy){var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),date=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear);this.year(date.getUTCFullYear());this.month(date.getUTCMonth());this.date(date.getUTCDate());return this;}
addFormatToken('Q',0,'Qo','quarter');addUnitAlias('quarter','Q');addUnitPriority('quarter',7);addRegexToken('Q',match1);addParseToken('Q',function(input,array){array[MONTH]=(toInt(input)-1)*3;});function getSetQuarter(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);}
addFormatToken('D',['DD',2],'Do','date');addUnitAlias('date','D');addUnitPriority('date',9);addRegexToken('D',match1to2);addRegexToken('DD',match1to2,match2);addRegexToken('Do',function(isStrict,locale){return isStrict?locale._ordinalParse:locale._ordinalParseLenient;});addParseToken(['D','DD'],DATE);addParseToken('Do',function(input,array){array[DATE]=toInt(input.match(match1to2)[0],10);});var getSetDayOfMonth=makeGetSet('Date',true);addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear');addUnitAlias('dayOfYear','DDD');addUnitPriority('dayOfYear',4);addRegexToken('DDD',match1to3);addRegexToken('DDDD',match3);addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear=toInt(input);});function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf('day')-this.clone().startOf('year'))/864e5)+1;return input==null?dayOfYear:this.add((input-dayOfYear),'d');}
addFormatToken('m',['mm',2],0,'minute');addUnitAlias('minute','m');addUnitPriority('minute',14);addRegexToken('m',match1to2);addRegexToken('mm',match1to2,match2);addParseToken(['m','mm'],MINUTE);var getSetMinute=makeGetSet('Minutes',false);addFormatToken('s',['ss',2],0,'second');addUnitAlias('second','s');addUnitPriority('second',15);addRegexToken('s',match1to2);addRegexToken('ss',match1to2,match2);addParseToken(['s','ss'],SECOND);var getSetSecond=makeGetSet('Seconds',false);addFormatToken('S',0,0,function(){return~~(this.millisecond()/100);});addFormatToken(0,['SS',2],0,function(){return~~(this.millisecond()/10);});addFormatToken(0,['SSS',3],0,'millisecond');addFormatToken(0,['SSSS',4],0,function(){return this.millisecond()*10;});addFormatToken(0,['SSSSS',5],0,function(){return this.millisecond()*100;});addFormatToken(0,['SSSSSS',6],0,function(){return this.millisecond()*1000;});addFormatToken(0,['SSSSSSS',7],0,function(){return this.millisecond()*10000;});addFormatToken(0,['SSSSSSSS',8],0,function(){return this.millisecond()*100000;});addFormatToken(0,['SSSSSSSSS',9],0,function(){return this.millisecond()*1000000;});addUnitAlias('millisecond','ms');addUnitPriority('millisecond',16);addRegexToken('S',match1to3,match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match1to3,match3);var token;for(token='SSSS';token.length<=9;token+='S'){addRegexToken(token,matchUnsigned);}
function parseMs(input,array){array[MILLISECOND]=toInt(('0.'+input)*1000);}
for(token='S';token.length<=9;token+='S'){addParseToken(token,parseMs);}
var getSetMillisecond=makeGetSet('Milliseconds',false);addFormatToken('z',0,0,'zoneAbbr');addFormatToken('zz',0,0,'zoneName');function getZoneAbbr(){return this._isUTC?'UTC':'';}
function getZoneName(){return this._isUTC?'Coordinated Universal Time':'';}
var proto=Moment.prototype;proto.add=add;proto.calendar=calendar$1;proto.clone=clone;proto.diff=diff;proto.endOf=endOf;proto.format=format;proto.from=from;proto.fromNow=fromNow;proto.to=to;proto.toNow=toNow;proto.get=stringGet;proto.invalidAt=invalidAt;proto.isAfter=isAfter;proto.isBefore=isBefore;proto.isBetween=isBetween;proto.isSame=isSame;proto.isSameOrAfter=isSameOrAfter;proto.isSameOrBefore=isSameOrBefore;proto.isValid=isValid$1;proto.lang=lang;proto.locale=locale;proto.localeData=localeData;proto.max=prototypeMax;proto.min=prototypeMin;proto.parsingFlags=parsingFlags;proto.set=stringSet;proto.startOf=startOf;proto.subtract=subtract;proto.toArray=toArray;proto.toObject=toObject;proto.toDate=toDate;proto.toISOString=toISOString;proto.inspect=inspect;proto.toJSON=toJSON;proto.toString=toString;proto.unix=unix;proto.valueOf=valueOf;proto.creationData=creationData;proto.year=getSetYear;proto.isLeapYear=getIsLeapYear;proto.weekYear=getSetWeekYear;proto.isoWeekYear=getSetISOWeekYear;proto.quarter=proto.quarters=getSetQuarter;proto.month=getSetMonth;proto.daysInMonth=getDaysInMonth;proto.week=proto.weeks=getSetWeek;proto.isoWeek=proto.isoWeeks=getSetISOWeek;proto.weeksInYear=getWeeksInYear;proto.isoWeeksInYear=getISOWeeksInYear;proto.date=getSetDayOfMonth;proto.day=proto.days=getSetDayOfWeek;proto.weekday=getSetLocaleDayOfWeek;proto.isoWeekday=getSetISODayOfWeek;proto.dayOfYear=getSetDayOfYear;proto.hour=proto.hours=getSetHour;proto.minute=proto.minutes=getSetMinute;proto.second=proto.seconds=getSetSecond;proto.millisecond=proto.milliseconds=getSetMillisecond;proto.utcOffset=getSetOffset;proto.utc=setOffsetToUTC;proto.local=setOffsetToLocal;proto.parseZone=setOffsetToParsedOffset;proto.hasAlignedHourOffset=hasAlignedHourOffset;proto.isDST=isDaylightSavingTime;proto.isLocal=isLocal;proto.isUtcOffset=isUtcOffset;proto.isUtc=isUtc;proto.isUTC=isUtc;proto.zoneAbbr=getZoneAbbr;proto.zoneName=getZoneName;proto.dates=deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth);proto.months=deprecate('months accessor is deprecated. Use month instead',getSetMonth);proto.years=deprecate('years accessor is deprecated. Use year instead',getSetYear);proto.zone=deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',getSetZone);proto.isDSTShifted=deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',isDaylightSavingTimeShifted);function createUnix(input){return createLocal(input*1000);}
function createInZone(){return createLocal.apply(null,arguments).parseZone();}
function preParsePostFormat(string){return string;}
var proto$1=Locale.prototype;proto$1.calendar=calendar;proto$1.longDateFormat=longDateFormat;proto$1.invalidDate=invalidDate;proto$1.ordinal=ordinal;proto$1.preparse=preParsePostFormat;proto$1.postformat=preParsePostFormat;proto$1.relativeTime=relativeTime;proto$1.pastFuture=pastFuture;proto$1.set=set;proto$1.months=localeMonths;proto$1.monthsShort=localeMonthsShort;proto$1.monthsParse=localeMonthsParse;proto$1.monthsRegex=monthsRegex;proto$1.monthsShortRegex=monthsShortRegex;proto$1.week=localeWeek;proto$1.firstDayOfYear=localeFirstDayOfYear;proto$1.firstDayOfWeek=localeFirstDayOfWeek;proto$1.weekdays=localeWeekdays;proto$1.weekdaysMin=localeWeekdaysMin;proto$1.weekdaysShort=localeWeekdaysShort;proto$1.weekdaysParse=localeWeekdaysParse;proto$1.weekdaysRegex=weekdaysRegex;proto$1.weekdaysShortRegex=weekdaysShortRegex;proto$1.weekdaysMinRegex=weekdaysMinRegex;proto$1.isPM=localeIsPM;proto$1.meridiem=localeMeridiem;function get$1(format,index,field,setter){var locale=getLocale();var utc=createUTC().set(setter,index);return locale[field](utc,format);}
function listMonthsImpl(format,index,field){if(isNumber(format)){index=format;format=undefined;}
format=format||'';if(index!=null){return get$1(format,index,field,'month');}
var i;var out=[];for(i=0;i<12;i++){out[i]=get$1(format,i,field,'month');}
return out;}
function listWeekdaysImpl(localeSorted,format,index,field){if(typeof localeSorted==='boolean'){if(isNumber(format)){index=format;format=undefined;}
format=format||'';}else{format=localeSorted;index=format;localeSorted=false;if(isNumber(format)){index=format;format=undefined;}
format=format||'';}
var locale=getLocale(),shift=localeSorted?locale._week.dow:0;if(index!=null){return get$1(format,(index+shift)%7,field,'day');}
var i;var out=[];for(i=0;i<7;i++){out[i]=get$1(format,(i+shift)%7,field,'day');}
return out;}
function listMonths(format,index){return listMonthsImpl(format,index,'months');}
function listMonthsShort(format,index){return listMonthsImpl(format,index,'monthsShort');}
function listWeekdays(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdays');}
function listWeekdaysShort(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdaysShort');}
function listWeekdaysMin(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdaysMin');}
getSetGlobalLocale('en',{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=(toInt(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';return number+output;}});hooks.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',getSetGlobalLocale);hooks.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',getLocale);var mathAbs=Math.abs;function abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this;}
function addSubtract$1(duration,input,value,direction){var other=createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;duration._months+=direction*other._months;return duration._bubble();}
function add$1(input,value){return addSubtract$1(this,input,value,1);}
function subtract$1(input,value){return addSubtract$1(this,input,value,-1);}
function absCeil(number){if(number<0){return Math.floor(number);}else{return Math.ceil(number);}}
function bubble(){var milliseconds=this._milliseconds;var days=this._days;var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays;if(!((milliseconds>=0&&days>=0&&months>=0)||(milliseconds<=0&&days<=0&&months<=0))){milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0;}
data.milliseconds=milliseconds%1000;seconds=absFloor(milliseconds/1000);data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));years=absFloor(months/12);months%=12;data.days=days;data.months=months;data.years=years;return this;}
function daysToMonths(days){return days*4800/146097;}
function monthsToDays(months){return months*146097/4800;}
function as(units){var days;var months;var milliseconds=this._milliseconds;units=normalizeUnits(units);if(units==='month'||units==='year'){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);return units==='month'?months:months/12;}else{days=this._days+Math.round(monthsToDays(this._months));switch(units){case'week':return days/7+milliseconds/6048e5;case'day':return days+milliseconds/864e5;case'hour':return days*24+milliseconds/36e5;case'minute':return days*1440+milliseconds/6e4;case'second':return days*86400+milliseconds/1000;case'millisecond':return Math.floor(days*864e5)+milliseconds;default:throw new Error('Unknown unit '+units);}}}
function valueOf$1(){return(this._milliseconds+
this._days*864e5+
(this._months%12)*2592e6+
toInt(this._months/12)*31536e6);}
function makeAs(alias){return function(){return this.as(alias);};}
var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asYears=makeAs('y');function get$2(units){units=normalizeUnits(units);return this[units+'s']();}
function makeGetter(name){return function(){return this._data[name];};}
var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks(){return absFloor(this.days()/7);}
var round=Math.round;var thresholds={s:45,m:45,h:22,d:26,M:11};function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);}
function relativeTime$1(posNegDuration,withoutSuffix,locale){var duration=createDuration(posNegDuration).abs();var seconds=round(duration.as('s'));var minutes=round(duration.as('m'));var hours=round(duration.as('h'));var days=round(duration.as('d'));var months=round(duration.as('M'));var years=round(duration.as('y'));var a=seconds<thresholds.s&&['s',seconds]||minutes<=1&&['m']||minutes<thresholds.m&&['mm',minutes]||hours<=1&&['h']||hours<thresholds.h&&['hh',hours]||days<=1&&['d']||days<thresholds.d&&['dd',days]||months<=1&&['M']||months<thresholds.M&&['MM',months]||years<=1&&['y']||['yy',years];a[2]=withoutSuffix;a[3]=+posNegDuration>0;a[4]=locale;return substituteTimeAgo.apply(null,a);}
function getSetRelativeTimeRounding(roundingFunction){if(roundingFunction===undefined){return round;}
if(typeof(roundingFunction)==='function'){round=roundingFunction;return true;}
return false;}
function getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold]===undefined){return false;}
if(limit===undefined){return thresholds[threshold];}
thresholds[threshold]=limit;return true;}
function humanize(withSuffix){var locale=this.localeData();var output=relativeTime$1(this,!withSuffix,locale);if(withSuffix){output=locale.pastFuture(+this,output);}
return locale.postformat(output);}
var abs$1=Math.abs;function toISOString$1(){var seconds=abs$1(this._milliseconds)/1000;var days=abs$1(this._days);var months=abs$1(this._months);var minutes,hours,years;minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60;years=absFloor(months/12);months%=12;var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds;var total=this.asSeconds();if(!total){return'P0D';}
return(total<0?'-':'')+'P'+
(Y?Y+'Y':'')+
(M?M+'M':'')+
(D?D+'D':'')+
((h||m||s)?'T':'')+
(h?h+'H':'')+
(m?m+'M':'')+
(s?s+'S':'');}
var proto$2=Duration.prototype;proto$2.abs=abs;proto$2.add=add$1;proto$2.subtract=subtract$1;proto$2.as=as;proto$2.asMilliseconds=asMilliseconds;proto$2.asSeconds=asSeconds;proto$2.asMinutes=asMinutes;proto$2.asHours=asHours;proto$2.asDays=asDays;proto$2.asWeeks=asWeeks;proto$2.asMonths=asMonths;proto$2.asYears=asYears;proto$2.valueOf=valueOf$1;proto$2._bubble=bubble;proto$2.get=get$2;proto$2.milliseconds=milliseconds;proto$2.seconds=seconds;proto$2.minutes=minutes;proto$2.hours=hours;proto$2.days=days;proto$2.weeks=weeks;proto$2.months=months;proto$2.years=years;proto$2.humanize=humanize;proto$2.toISOString=toISOString$1;proto$2.toString=toISOString$1;proto$2.toJSON=toISOString$1;proto$2.locale=locale;proto$2.localeData=localeData;proto$2.toIsoString=deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',toISOString$1);proto$2.lang=lang;addFormatToken('X',0,0,'unix');addFormatToken('x',0,0,'valueOf');addRegexToken('x',matchSigned);addRegexToken('X',matchTimestamp);addParseToken('X',function(input,array,config){config._d=new Date(parseFloat(input,10)*1000);});addParseToken('x',function(input,array,config){config._d=new Date(toInt(input));});hooks.version='2.17.1';setHookCallback(createLocal);hooks.fn=proto;hooks.min=min;hooks.max=max;hooks.now=now;hooks.utc=createUTC;hooks.unix=createUnix;hooks.months=listMonths;hooks.isDate=isDate;hooks.locale=getSetGlobalLocale;hooks.invalid=createInvalid;hooks.duration=createDuration;hooks.isMoment=isMoment;hooks.weekdays=listWeekdays;hooks.parseZone=createInZone;hooks.localeData=getLocale;hooks.isDuration=isDuration;hooks.monthsShort=listMonthsShort;hooks.weekdaysMin=listWeekdaysMin;hooks.defineLocale=defineLocale;hooks.updateLocale=updateLocale;hooks.locales=listLocales;hooks.weekdaysShort=listWeekdaysShort;hooks.normalizeUnits=normalizeUnits;hooks.relativeTimeRounding=getSetRelativeTimeRounding;hooks.relativeTimeThreshold=getSetRelativeTimeThreshold;hooks.calendarFormat=getCalendarFormat;hooks.prototype=proto;return hooks;})));

! function (ot, st, lt) {
    "use strict";
    ot.fn.simpleLightbox = function (N) {
        N = ot.extend({
            sourceAttr: "href",
            overlay: !0,
            spinner: !0,
            nav: !0,
            navText: ["&lsaquo;", "&rsaquo;"],
            captions: !0,
            captionDelay: 0,
            captionSelector: "img",
            captionType: "attr",
            captionsData: "title",
            captionPosition: "bottom",
            captionClass: "",
            close: !0,
            closeText: "&times;",
            swipeClose: !0,
            showCounter: !0,
            fileExt: "png|jpg|jpeg|gif|webp",
            animationSlide: !0,
            animationSpeed: 250,
            preloading: !0,
            enableKeyboard: !0,
            loop: !0,
            rel: !1,
            docClose: !0,
            swipeTolerance: 50,
            className: "simple-lightbox",
            widthRatio: .8,
            heightRatio: .9,
            scaleImageToRatio: !1,
            disableRightClick: !1,
            disableScroll: !0,
            alertError: !0,
            alertErrorMessage: "Image not found, next image will be loaded",
            additionalHtml: !1,
            history: !0,
            throttleInterval: 0,
            doubleTapZoom: 2,
            maxZoom: 10,
            htmlClass: "has-lightbox"
        }, N);
        function P() {
            return s.hash.substring(1)
        }
        function h() {
            P();
            var t = "pid=" + (V + 1),
                e = s.href.split("#")[0] + "#" + t;
            o ? history[f ? "replaceState" : "pushState"]("", lt.title, e) : f ? s.replace(e) : s.hash = t, f = !0
        }
        function t(e, a) {
            var n;
            return function () {
                var t = arguments;
                n || (e.apply(this, t), n = !0, setTimeout(function () {
                    return n = !1
                }, a))
            }
        }
        function a(t) {
            t.trigger(ot.Event("show.simplelightbox")), N.disableScroll && (u = T("hide")), N.htmlClass && "" != N.htmlClass && ot("html").addClass(N.htmlClass), b.appendTo("body"), _.appendTo(b), N.overlay && l.appendTo(ot("body")), m = !0, V = $.index(t), K = ot("<img/>").hide().attr("src", t.attr(N.sourceAttr)).attr("data-scale", 1).attr("data-translate-x", 0).attr("data-translate-y", 0), -1 == d.indexOf(t.attr(N.sourceAttr)) && d.push(t.attr(N.sourceAttr)), _.html("").attr("style", ""), K.appendTo(_), C(), l.fadeIn("fast"), ot(".sl-close").fadeIn("fast"), g.show(), J.fadeIn("fast"), ot(".sl-wrapper .sl-counter .sl-current").text(V + 1), c.fadeIn("fast"), tt(), N.preloading && w(), setTimeout(function () {
                t.trigger(ot.Event("shown.simplelightbox"))
            }, N.animationSpeed)
        }
        function Z(t, e, a) {
            return t < e ? e : a < t ? a : t
        }
        function z(t, e, a) {
            K.data("scale", t), K.data("translate-x", e), K.data("translate-y", a)
        }
        var p, e, H = "ontouchstart" in st,
            L = (st.navigator.pointerEnabled || st.navigator.msPointerEnabled, 0),
            j = 0,
            K = ot(),
            i = function () {
                var t = lt.body || lt.documentElement;
                return "" === (t = t.style).WebkitTransition ? "-webkit-" : "" === t.MozTransition ? "-moz-" : "" === t.OTransition ? "-o-" : "" === t.transition && ""
            },
            U = !1,
            d = [],
            $ = N.rel && !1 !== N.rel ? (e = N.rel, ot(this).filter(function () {
                return ot(this).attr("rel") === e
            })) : this,
            n = $.get()[0].tagName,
            u = (i = i(), 0),
            B = !1 !== i,
            o = "pushState" in history,
            f = !1,
            s = st.location,
            Q = P(),
            G = "simplelb",
            l = ot("<div>").addClass("sl-overlay"),
            r = ot("<button>").addClass("sl-close").html(N.closeText),
            g = ot("<div>").addClass("sl-spinner").html("<div></div>"),
            J = ot("<div>").addClass("sl-navigation").html('<button class="sl-prev">' + N.navText[0] + '</button><button class="sl-next">' + N.navText[1] + "</button>"),
            c = ot("<div>").addClass("sl-counter").html('<span class="sl-current"></span>/<span class="sl-total"></span>'),
            m = !1,
            V = 0,
            v = 0,
            x = ot("<div>").addClass("sl-caption " + N.captionClass + " pos-" + N.captionPosition),
            _ = ot("<div>").addClass("sl-image"),
            b = ot("<div>").addClass("sl-wrapper").addClass(N.className),
            tt = function (s) {
                if (K.length) {
                    var l = new Image,
                        r = st.innerWidth * N.widthRatio,
                        c = st.innerHeight * N.heightRatio;
                    l.src = K.attr("src"), K.data("scale", 1), K.data("translate-x", 0), K.data("translate-y", 0), at(0, 0, 1), ot(l).on("error", function (t) {
                        $.eq(V).trigger(ot.Event("error.simplelightbox")), U = !(m = !1), g.hide();
                        var e = 1 == s || -1 == s;
                        v === V && e ? it() : (N.alertError && alert(N.alertErrorMessage), nt(e ? s : 1))
                    }), l.onload = function () {
                        void 0 !== s && $.eq(V).trigger(ot.Event("changed.simplelightbox")).trigger(ot.Event((1 === s ? "nextDone" : "prevDone") + ".simplelightbox")), N.history && (f ? p = setTimeout(h, 800) : h()), -1 == d.indexOf(K.attr("src")) && d.push(K.attr("src"));
                        var t = l.width,
                            e = l.height;
                        if (N.scaleImageToRatio || r < t || c < e) {
                            var a = r / c < t / e ? t / r : e / c;
                            t /= a, e /= a
                        }
                        ot(".sl-image").css({
                            top: (st.innerHeight - e) / 2 + "px",
                            left: (st.innerWidth - t - u) / 2 + "px",
                            width: t + "px",
                            height: e + "px"
                        }), g.hide(), K.fadeIn("fast"), U = !0;
                        var n, i = "self" == N.captionSelector ? $.eq(V) : $.eq(V).find(N.captionSelector);
                        if (n = "data" == N.captionType ? i.data(N.captionsData) : "text" == N.captionType ? i.html() : i.prop(N.captionsData), N.loop || (0 === V && ot(".sl-prev").hide(), V >= $.length - 1 && ot(".sl-next").hide(), 0 < V && ot(".sl-prev").show(), V < $.length - 1 && ot(".sl-next").show()), 1 == $.length && ot(".sl-prev, .sl-next").hide(), 1 == s || -1 == s) {
                            var o = {
                                opacity: 1
                            };
                            N.animationSlide && (B ? (et(0, 100 * s + "px"), setTimeout(function () {
                                et(N.animationSpeed / 1e3, "0px")
                            }, 50)) : o.left = parseInt(ot(".sl-image").css("left")) + 100 * s + "px"), ot(".sl-image").animate(o, N.animationSpeed, function () {
                                m = !1, y(n, t)
                            })
                        } else m = !1, y(n, t);
                        N.additionalHtml && 0 === ot(".sl-additional-html").length && ot("<div>").html(N.additionalHtml).addClass("sl-additional-html").appendTo(ot(".sl-image"))
                    }
                }
            },
            y = function (t, e) {
                "" !== t && void 0 !== t && N.captions && x.html(t).css({
                    width: e + "px"
                }).hide().appendTo(ot(".sl-image")).delay(N.captionDelay).fadeIn("fast")
            },
            et = function (t, e) {
                var a = {};
                a[i + "transform"] = "translateX(" + e + ")", a[i + "transition"] = i + "transform " + t + "s linear", ot(".sl-image").css(a)
            },
            at = function (t, e, a) {
                var n = {};
                n[i + "transform"] = "translate(" + t + "," + e + ") scale(" + a + ")", K.css(n)
            },
            C = function () {
                ot(st).on("resize." + G, tt), ot(lt).on("click." + G + " touchstart." + G, ".sl-close", function (t) {
                    t.preventDefault(), U && it()
                }), N.history && setTimeout(function () {
                    ot(st).on("hashchange." + G, function () {
                        U && P() === Q && it()
                    })
                }, 40), J.on("click." + G, "button", t(function (t) {
                    t.preventDefault(), L = 0, nt(ot(this).hasClass("sl-next") ? 1 : -1)
                }, N.throttleInterval));
                var e, a, n, i, o, s, l, r, c, h, p, d, u, f, g, m, v, x, b, y, C, w, T, E, S, M, I, k = 0,
                    q = 0,
                    X = 0,
                    D = 0,
                    Y = !1,
                    A = !1,
                    O = 0,
                    R = !1,
                    W = Z(1, 1, N.maxZoom),
                    F = !1;
                _.on("touchstart." + G + " mousedown." + G, function (t) {
                    if ("A" === t.target.tagName && "touchstart" == t.type) return !0;
                    if ("mousedown" == (t = t.originalEvent).type) c = t.clientX, h = t.clientY, e = _.height(), a = _.width(), o = K.height(), s = K.width(), n = _.position().left, i = _.position().top, l = parseFloat(K.data("translate-x")), r = parseFloat(K.data("translate-y")), R = !0;
                    else {
                        if (I = t.touches.length, c = t.touches[0].clientX, h = t.touches[0].clientY, e = _.height(), a = _.width(), o = K.height(), s = K.width(), n = _.position().left, i = _.position().top, 1 === I) {
                            if (F) return K.addClass("sl-transition"), Y = Y ? (z(0, 0, W = 1), at("0px", "0px", W), !1) : (W = N.doubleTapZoom, z(0, 0, W), at("0px", "0px", W), ot(".sl-caption").fadeOut(200), !0), setTimeout(function () {
                                K.removeClass("sl-transition")
                            }, 200), !1;
                            F = !0, setTimeout(function () {
                                F = !1
                            }, 300), l = parseFloat(K.data("translate-x")), r = parseFloat(K.data("translate-y"))
                        } else 2 === I && (p = t.touches[1].clientX, d = t.touches[1].clientY, l = parseFloat(K.data("translate-x")), r = parseFloat(K.data("translate-y")), C = (c + p) / 2, w = (h + d) / 2, u = Math.sqrt((c - p) * (c - p) + (h - d) * (h - d)));
                        R = !0
                    }
                    return !!A || (B && (O = parseInt(_.css("left"))), A = !0, j = L = 0, k = t.pageX || t.touches[0].pageX, X = t.pageY || t.touches[0].pageY, !1)
                }).on("touchmove." + G + " mousemove." + G + " MSPointerMove", function (t) {
                    if (!A) return !0;
                    if (t.preventDefault(), "touchmove" == (t = t.originalEvent).type) {
                        if (!1 === R) return !1;
                        f = t.touches[0].clientX, g = t.touches[0].clientY, I = t.touches.length, 0, 1 < I ? (m = t.touches[1].clientX, v = t.touches[1].clientY, M = Math.sqrt((f - m) * (f - m) + (g - v) * (g - v)), null === u && (u = M), 1 <= Math.abs(u - M) && (y = Z(M / u * W, 1, N.maxZoom), T = (s * y - a) / 2, E = (o * y - e) / 2, S = y - W, x = s * y <= a ? 0 : Z(l - (C - n - a / 2 - l) / (y - S) * S, -1 * T, T), b = o * y <= e ? 0 : Z(r - (w - i - e / 2 - r) / (y - S) * S, -1 * E, E), at(x + "px", b + "px", y), 1 < y && (Y = !0, ot(".sl-caption").fadeOut(200)), u = M, W = y, l = x, r = b)) : (T = (s * (y = W) - a) / 2, E = (o * y - e) / 2, x = s * y <= a ? 0 : Z(f - (c - l), -1 * T, T), b = o * y <= e ? 0 : Z(g - (h - r), -1 * E, E), Math.abs(x) === Math.abs(T) && (l = x, c = f), Math.abs(b) === Math.abs(E) && (r = b, h = g), z(W, x, b), at(x + "px", b + "px", y))
                    }
                    if ("mousemove" == t.type && A) {
                        if ("touchmove" == t.type) return !0;
                        if (!1 === R) return !1;
                        f = t.clientX, g = t.clientY, T = (s * (y = W) - a) / 2, E = (o * y - e) / 2, x = s * y <= a ? 0 : Z(f - (c - l), -1 * T, T), b = o * y <= e ? 0 : Z(g - (h - r), -1 * E, E), Math.abs(x) === Math.abs(T) && (l = x, c = f), Math.abs(b) === Math.abs(E) && (r = b, h = g), z(W, x, b), at(x + "px", b + "px", y)
                    }
                    Y || (q = t.pageX || t.touches[0].pageX, D = t.pageY || t.touches[0].pageY, L = k - q, j = X - D, N.animationSlide && (B ? et(0, -L + "px") : _.css("left", O - L + "px")))
                }).on("touchend." + G + " mouseup." + G + " touchcancel." + G + " mouseleave." + G + " pointerup pointercancel MSPointerUp MSPointerCancel", function (t) {
                    if (t = t.originalEvent, H && "touchend" == t.type && (0 === (I = t.touches.length) ? (z(W, x, b), 1 == W && (Y = !1, ot(".sl-caption").fadeIn(200)), u = null, R = !1) : 1 === I ? (c = t.touches[0].clientX, h = t.touches[0].clientY) : 1 < I && (u = null)), A) {
                        var e = !(A = !1);
                        N.loop || (0 === V && L < 0 && (e = !1), V >= $.length - 1 && 0 < L && (e = !1)), Math.abs(L) > N.swipeTolerance && e ? nt(0 < L ? 1 : -1) : N.animationSlide && (B ? et(N.animationSpeed / 1e3, "0px") : _.animate({
                            left: O + "px"
                        }, N.animationSpeed / 2)), N.swipeClose && 50 < Math.abs(j) && Math.abs(L) < N.swipeTolerance && it()
                    }
                }).on("dblclick", function (t) {
                    return c = t.clientX, h = t.clientY, e = _.height(), a = _.width(), o = K.height(), s = K.width(), n = _.position().left, i = _.position().top, K.addClass("sl-transition"), Y ? (z(0, 0, W = 1), at("0px", "0px", W), Y = !1, ot(".sl-caption").fadeIn(200)) : (W = N.doubleTapZoom, z(0, 0, W), at("0px", "0px", W), ot(".sl-caption").fadeOut(200), Y = !0), setTimeout(function () {
                        K.removeClass("sl-transition")
                    }, 200), !(R = !0)
                })
            },
            w = function () {
                var t = V + 1 < 0 ? $.length - 1 : V + 1 >= $.length - 1 ? 0 : V + 1,
                    e = V - 1 < 0 ? $.length - 1 : V - 1 >= $.length - 1 ? 0 : V - 1;
                ot("<img />").attr("src", $.eq(t).attr(N.sourceAttr)).on("load", function () {
                    -1 == d.indexOf(ot(this).attr("src")) && d.push(ot(this).attr("src")), $.eq(V).trigger(ot.Event("nextImageLoaded.simplelightbox"))
                }), ot("<img />").attr("src", $.eq(e).attr(N.sourceAttr)).on("load", function () {
                    -1 == d.indexOf(ot(this).attr("src")) && d.push(ot(this).attr("src")), $.eq(V).trigger(ot.Event("prevImageLoaded.simplelightbox"))
                })
            },
            nt = function (e) {
                $.eq(V).trigger(ot.Event("change.simplelightbox")).trigger(ot.Event((1 === e ? "next" : "prev") + ".simplelightbox"));
                var t = V + e;
                if (!(m || (t < 0 || t >= $.length) && !1 === N.loop)) {
                    V = t < 0 ? $.length - 1 : t > $.length - 1 ? 0 : t, ot(".sl-wrapper .sl-counter .sl-current").text(V + 1);
                    var a = {
                        opacity: 0
                    };
                    N.animationSlide && (B ? et(N.animationSpeed / 1e3, -100 * e - L + "px") : a.left = parseInt(ot(".sl-image").css("left")) + -100 * e + "px"), ot(".sl-image").animate(a, N.animationSpeed, function () {
                        setTimeout(function () {
                            var t = $.eq(V);
                            K.attr("src", t.attr(N.sourceAttr)), -1 == d.indexOf(t.attr(N.sourceAttr)) && g.show(), ot(".sl-caption").remove(), tt(e), N.preloading && w()
                        }, 100)
                    })
                }
            },
            it = function () {
                if (!m) {
                    var t = $.eq(V),
                        e = !1;
                    t.trigger(ot.Event("close.simplelightbox")), N.history && (o ? history.pushState("", lt.title, s.pathname + s.search) : s.hash = "", clearTimeout(p)), ot(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast", function () {
                        N.disableScroll && T("show"), N.htmlClass && "" != N.htmlClass && ot("html").removeClass(N.htmlClass), ot(".sl-wrapper, .sl-overlay").remove(), J.off("click", "button"), ot(lt).off("click." + G, ".sl-close"), ot(st).off("resize." + G), ot(st).off("hashchange." + G), e || t.trigger(ot.Event("closed.simplelightbox")), e = !0
                    }), K = ot(), m = U = !1
                }
            },
            T = function (t) {
                var e = 0;
                if ("hide" == t) {
                    var a = st.innerWidth;
                    if (!a) {
                        var n = lt.documentElement.getBoundingClientRect();
                        a = n.right - Math.abs(n.left)
                    }
                    if (lt.body.clientWidth < a) {
                        var i = lt.createElement("div"),
                            o = parseInt(ot("body").css("padding-right"), 10);
                        i.className = "sl-scrollbar-measure", ot("body").append(i), e = i.offsetWidth - i.clientWidth, ot(lt.body)[0].removeChild(i), ot("body").data("padding", o), 0 < e && ot("body").addClass("hidden-scroll").css({
                            "padding-right": o + e
                        })
                    }
                } else ot("body").removeClass("hidden-scroll").css({
                    "padding-right": ot("body").data("padding")
                });
                return e
            };
        return N.close && r.appendTo(b), N.showCounter && 1 < $.length && (c.appendTo(b), c.find(".sl-total").text($.length)), N.nav && J.appendTo(b), N.spinner && g.appendTo(b), $.on("click." + G, function (t) {
            if (function (t) {
                    if (!N.fileExt) return !0;
                    var e = ot(t).attr(N.sourceAttr).match(/\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gim);
                    return e && ot(t).prop("tagName").toUpperCase() == n && new RegExp(".(" + N.fileExt + ")$", "i").test(e)
                }(this)) {
                if (t.preventDefault(), m) return !1;
                var e = ot(this);
                v = $.index(e), a(e)
            }
        }), ot(lt).on("click." + G + " touchstart." + G, function (t) {
            U && N.docClose && 0 === ot(t.target).closest(".sl-image").length && 0 === ot(t.target).closest(".sl-navigation").length && it()
        }), N.disableRightClick && ot(lt).on("contextmenu", ".sl-image img", function (t) {
            return !1
        }), N.enableKeyboard && ot(lt).on("keyup." + G, t(function (t) {
            L = 0;
            var e = t.keyCode;
            m && 27 == e && (K.attr("src", ""), m = !1, it()), U && (t.preventDefault(), 27 == e && it(), 37 != e && 39 != t.keyCode || nt(39 == t.keyCode ? 1 : -1))
        }, N.throttleInterval)), this.open = function (t) {
            t = t || ot(this[0]), v = $.index(t), a(t)
        }, this.next = function () {
            nt(1)
        }, this.prev = function () {
            nt(-1)
        }, this.close = function () {
            it()
        }, this.destroy = function () {
            ot(lt).off("click." + G).off("keyup." + G), it(), ot(".sl-overlay, .sl-wrapper").remove(), this.off("click")
        }, this.refresh = function () {
            this.destroy(), ot(this).simpleLightbox(N)
        }, this
    }
}(jQuery, window, document);
/*!
 * jquery.sumoselect - v3.0.2
 * http://hemantnegi.github.io/jquery.sumoselect
 */
!function(e){"namespace sumo";e.fn.SumoSelect=function(t){var l=e.extend({placeholder:"Select Here",csvDispCount:3,captionFormat:"{0} Selected",captionFormatAllSelected:"{0} all selected!",floatWidth:400,forceCustomRendering:!1,nativeOnDevice:["Android","BlackBerry","iPhone","iPad","iPod","Opera Mini","IEMobile","Silk"],outputAsCSV:!1,csvSepChar:",",okCancelInMulti:!1,triggerChangeCombined:!0,selectAll:!1,search:!1,searchText:"Search...",noMatch:'No matches for "{0}"',prefix:"",locale:["OK","Cancel","Select All"],up:!1},t),s=this.each(function(){var t=this;!this.sumo&&e(this).is("select")&&(this.sumo={E:e(t),is_multi:e(t).attr("multiple"),select:"",caption:"",placeholder:"",optDiv:"",CaptionCont:"",ul:"",is_floating:!1,is_opened:!1,mob:!1,Pstate:[],createElems:function(){var t=this;return t.E.wrap('<div class="SumoSelect" tabindex="0">'),t.select=t.E.parent(),t.caption=e("<span>"),t.CaptionCont=e('<p class="CaptionCont"><label><i></i></label></p>').addClass("SelectBox").attr("style",t.E.attr("style")).prepend(t.caption),t.select.append(t.CaptionCont),t.is_multi||(l.okCancelInMulti=!1),t.E.attr("disabled")&&t.select.addClass("disabled").removeAttr("tabindex"),l.outputAsCSV&&t.is_multi&&t.E.attr("name")&&(t.select.append(e('<input class="HEMANT123" type="hidden" />').attr("name",t.E.attr("name")).val(t.getSelStr())),t.E.removeAttr("name")),t.isMobile()&&!l.forceCustomRendering?void t.setNativeMobile():(t.E.attr("name")&&t.select.addClass("sumo_"+t.E.attr("name")),t.E.addClass("SumoUnder").attr("tabindex","-1"),t.optDiv=e('<div class="optWrapper '+(l.up?"up":"")+'">'),t.floatingList(),t.ul=e('<ul class="options">'),t.optDiv.append(t.ul),l.selectAll&&t.SelAll(),l.search&&t.Search(),t.ul.append(t.prepItems(t.E.children())),t.is_multi&&t.multiSelelect(),t.select.append(t.optDiv),t.basicEvents(),void t.selAllState())},prepItems:function(t,l){var i=[],s=this;return e(t).each(function(t,n){n=e(n),i.push(n.is("optgroup")?e('<li class="group '+(n[0].disabled?"disabled":"")+'"><label>'+n.attr("label")+"</label><ul></ul><li>").find("ul").append(s.prepItems(n.children(),n[0].disabled)).end():s.createLi(n,l))}),i},createLi:function(t,l){var i=this;return t.attr("value")||t.attr("value",t.val()),li=e('<li class="opt"><label>'+t.text()+"</label></li>"),li.data("opt",t),t.data("li",li),i.is_multi&&li.prepend("<span><i></i></span>"),(t[0].disabled||l)&&(li=li.addClass("disabled")),i.onOptClick(li),t[0].selected&&li.addClass("selected"),t.attr("class")&&li.addClass(t.attr("class")),li},getSelStr:function(){return sopt=[],this.E.find("option:selected").each(function(){sopt.push(e(this).val())}),sopt.join(l.csvSepChar)},multiSelelect:function(){var t=this;t.optDiv.addClass("multiple"),t.okbtn=e('<p class="btnOk">'+l.locale[0]+"</p>").click(function(){l.triggerChangeCombined&&(changed=!1,t.E.find("option:selected").length!=t.Pstate.length?changed=!0:t.E.find("option").each(function(e,l){l.selected&&t.Pstate.indexOf(e)<0&&(changed=!0)}),changed&&(t.callChange(),t.setText())),t.hideOpts()}),t.cancelBtn=e('<p class="btnCancel">'+l.locale[1]+"</p>").click(function(){t._cnbtn(),t.hideOpts()}),t.optDiv.append(e('<div class="MultiControls">').append(t.okbtn).append(t.cancelBtn))},_cnbtn:function(){var e=this;e.E.find("option:selected").each(function(){this.selected=!1}),e.optDiv.find("li.selected").removeClass("selected");for(var t=0;t<e.Pstate.length;t++)e.E.find("option")[e.Pstate[t]].selected=!0,e.ul.find("li.opt").eq(e.Pstate[t]).addClass("selected");e.selAllState()},SelAll:function(){var t=this;t.is_multi&&(t.selAll=e('<p class="select-all"><span><i></i></span><label>'+l.locale[2]+"</label></p>"),t.selAll.on("click",function(){t.selAll.toggleClass("selected"),t.optDiv.find("li.opt").not(".hidden").each(function(l,i){i=e(i),t.selAll.hasClass("selected")?i.hasClass("selected")||i.trigger("click"):i.hasClass("selected")&&i.trigger("click")})}),t.optDiv.prepend(t.selAll))},Search:function(){var t=this,i=t.CaptionCont.addClass("search"),s=e('<p class="no-match">');t.ftxt=e('<input type="text" class="search-txt" value="" placeholder="'+l.searchText+'">').on("click",function(e){e.stopPropagation()}),i.append(t.ftxt),t.optDiv.children("ul").after(s),t.ftxt.on("keyup.sumo",function(){var i=t.optDiv.find("ul.options li.opt").each(function(l,i){i=e(i),i.text().toLowerCase().indexOf(t.ftxt.val().toLowerCase())>-1?i.removeClass("hidden"):i.addClass("hidden")}).not(".hidden");s.html(l.noMatch.replace(/\{0\}/g,t.ftxt.val())).toggle(!i.length),t.selAllState()})},selAllState:function(){var t=this;if(l.selectAll){var i=0,s=0;t.optDiv.find("li.opt").not(".hidden").each(function(t,l){e(l).hasClass("selected")&&i++,e(l).hasClass("disabled")||s++}),i==s?t.selAll.removeClass("partial").addClass("selected"):0==i?t.selAll.removeClass("selected partial"):t.selAll.addClass("partial")}},showOpts:function(){var t=this;t.E.attr("disabled")||(t.is_opened=!0,t.select.addClass("open"),t.ftxt?t.ftxt.focus():t.select.focus(),e(document).on("click.sumo",function(e){if(!t.select.is(e.target)&&0===t.select.has(e.target).length){if(!t.is_opened)return;t.hideOpts(),l.okCancelInMulti&&t._cnbtn()}}),t.is_floating&&(H=t.optDiv.children("ul").outerHeight()+2,t.is_multi&&(H+=parseInt(t.optDiv.css("padding-bottom"))),t.optDiv.css("height",H),e("body").addClass("sumoStopScroll")),t.setPstate())},setPstate:function(){var e=this;e.is_multi&&(e.is_floating||l.okCancelInMulti)&&(e.Pstate=[],e.E.find("option").each(function(t,l){l.selected&&e.Pstate.push(t)}))},callChange:function(){this.E.trigger("change").trigger("click")},hideOpts:function(){var t=this;t.is_opened&&(t.is_opened=!1,t.select.removeClass("open").find("ul li.sel").removeClass("sel"),e(document).off("click.sumo"),t.select.focus(),e("body").removeClass("sumoStopScroll"),l.search&&(t.ftxt.val(""),t.optDiv.find("ul.options li").removeClass("hidden"),t.optDiv.find(".no-match").toggle(!1)))},setOnOpen:function(){var e=this,t=e.optDiv.find("li.opt:not(.hidden)").eq(l.search?0:e.E[0].selectedIndex);e.optDiv.find("li.sel").removeClass("sel"),t.addClass("sel"),e.showOpts()},nav:function(e){var t,l=this,i=l.ul.find("li.opt:not(.disabled, .hidden)"),s=l.ul.find("li.opt.sel:not(.hidden)"),n=i.index(s);if(l.is_opened&&s.length){if(e&&n>0)t=i.eq(n-1);else{if(!(!e&&n<i.length-1&&n>-1))return;t=i.eq(n+1)}s.removeClass("sel"),s=t.addClass("sel");var o=l.ul,a=o.scrollTop(),c=s.position().top+a;c>=a+o.height()-s.outerHeight()&&o.scrollTop(c-o.height()+s.outerHeight()),a>c&&o.scrollTop(c)}else l.setOnOpen()},basicEvents:function(){var t=this;t.CaptionCont.click(function(e){t.E.trigger("click"),t.is_opened?t.hideOpts():t.showOpts(),e.stopPropagation()}),t.select.on("keydown.sumo",function(e){switch(e.which){case 38:t.nav(!0);break;case 40:t.nav(!1);break;case 32:if(l.search&&t.ftxt.is(e.target))return;case 13:t.is_opened?t.optDiv.find("ul li.sel").trigger("click"):t.setOnOpen();break;case 9:case 27:return l.okCancelInMulti&&t._cnbtn(),void t.hideOpts();default:return}e.preventDefault()}),e(window).on("resize.sumo",function(){t.floatingList()})},onOptClick:function(t){var i=this;t.click(function(){var t=e(this);t.hasClass("disabled")||(txt="",i.is_multi?(t.toggleClass("selected"),t.data("opt")[0].selected=t.hasClass("selected"),i.selAllState()):(t.parent().find("li.selected").removeClass("selected"),t.toggleClass("selected"),t.data("opt")[0].selected=!0),i.is_multi&&l.triggerChangeCombined&&(i.is_floating||l.okCancelInMulti)||(i.setText(),i.callChange()),i.is_multi||i.hideOpts())})},setText:function(){var t=this;if(t.placeholder="",t.is_multi){for(sels=t.E.find(":selected").not(":disabled"),i=0;i<sels.length;i++){if(i+1>=l.csvDispCount&&l.csvDispCount){sels.length==t.E.find("option").length&&l.captionFormatAllSelected?t.placeholder=l.captionFormatAllSelected.replace(/\{0\}/g,sels.length)+",":t.placeholder=l.captionFormat.replace(/\{0\}/g,sels.length)+",";break}t.placeholder+=e(sels[i]).text()+", "}t.placeholder=t.placeholder.replace(/,([^,]*)$/,"$1")}else t.placeholder=t.E.find(":selected").not(":disabled").text();return is_placeholder=!1,t.placeholder||(is_placeholder=!0,t.placeholder=t.E.attr("placeholder"),t.placeholder||(t.placeholder=t.E.find("option:disabled:selected").text())),t.placeholder=t.placeholder?l.prefix+" "+t.placeholder:l.placeholder,t.caption.html(t.placeholder),t.CaptionCont.attr("title",t.placeholder),csvField=t.select.find("input.HEMANT123"),csvField.length&&csvField.val(t.getSelStr()),is_placeholder?t.caption.addClass("placeholder"):t.caption.removeClass("placeholder"),t.placeholder},isMobile:function(){for(var e=navigator.userAgent||navigator.vendor||window.opera,t=0;t<l.nativeOnDevice.length;t++)if(e.toString().toLowerCase().indexOf(l.nativeOnDevice[t].toLowerCase())>0)return l.nativeOnDevice[t];return!1},setNativeMobile:function(){var e=this;e.E.addClass("SelectClass"),e.mob=!0,e.E.change(function(){e.setText()})},floatingList:function(){var t=this;t.is_floating=e(window).width()<=l.floatWidth,t.optDiv.toggleClass("isFloating",t.is_floating),t.is_floating||t.optDiv.css("height",""),t.optDiv.toggleClass("okCancelInMulti",l.okCancelInMulti&&!t.is_floating)},vRange:function(e){var t=this;if(opts=t.E.find("option"),opts.length<=e||0>e)throw"index out of bounds";return t},toggSel:function(t,l){var i=this;"number"==typeof l?(i.vRange(l),opt=i.E.find("option")[l]):opt=i.E.find('option[value="'+l+'"]')[0]||0,opt&&!opt.disabled&&opt.selected!=t&&(opt.selected=t,i.mob||e(opt).data("li").toggleClass("selected",t),i.callChange(),i.setPstate(),i.setText(),i.selAllState())},toggDis:function(e,t){var l=this.vRange(t);l.E.find("option")[t].disabled=e,e&&(l.E.find("option")[t].selected=!1),l.mob||l.optDiv.find("ul.options li").eq(t).toggleClass("disabled",e).removeClass("selected"),l.setText()},toggSumo:function(e){var t=this;return t.enabled=e,t.select.toggleClass("disabled",e),e?(t.E.attr("disabled","disabled"),t.select.removeAttr("tabindex")):(t.E.removeAttr("disabled"),t.select.attr("tabindex","0")),t},toggSelAll:function(t){var l=this;l.E.find("option").each(function(){l.E.find("option")[e(this).index()].disabled||(l.E.find("option")[e(this).index()].selected=t,l.mob||l.optDiv.find("ul.options li").eq(e(this).index()).toggleClass("selected",t),l.setText())}),!l.mob&&l.selAll&&l.selAll.removeClass("partial").toggleClass("selected",t),l.callChange(),l.setPstate()},reload:function(){var t=this.unload();return e(t).SumoSelect(l)},unload:function(){var e=this;return e.select.before(e.E),e.E.show(),l.outputAsCSV&&e.is_multi&&e.select.find("input.HEMANT123").length&&e.E.attr("name",e.select.find("input.HEMANT123").attr("name")),e.select.remove(),delete t.sumo,t},add:function(l,i,s){if("undefined"==typeof l)throw"No value to add";var n=this;if(opts=n.E.find("option"),"number"==typeof i&&(s=i,i=l),"undefined"==typeof i&&(i=l),opt=e("<option></option>").val(l).html(i),opts.length<s)throw"index out of bounds";return"undefined"==typeof s||opts.length==s?(n.E.append(opt),n.mob||n.ul.append(n.createLi(opt))):(opts.eq(s).before(opt),n.mob||n.ul.find("li.opt").eq(s).before(n.createLi(opt))),t},remove:function(e){var t=this.vRange(e);t.E.find("option").eq(e).remove(),t.mob||t.optDiv.find("ul.options li").eq(e).remove(),t.setText()},selectItem:function(e){this.toggSel(!0,e)},unSelectItem:function(e){this.toggSel(!1,e)},selectAll:function(){this.toggSelAll(!0)},unSelectAll:function(){this.toggSelAll(!1)},disableItem:function(e){this.toggDis(!0,e)},enableItem:function(e){this.toggDis(!1,e)},enabled:!0,enable:function(){return this.toggSumo(!1)},disable:function(){return this.toggSumo(!0)},init:function(){var e=this;return e.createElems(),e.setText(),e}},t.sumo.init())});return 1==s.length?s[0]:s}}(jQuery);

!function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("moment")):e(jQuery,moment)}(function(e,t){"use strict";e.dateRangePickerLanguages={"default":{selected:"Selected:",day:"Day",days:"Days",apply:"Close","week-1":"mo","week-2":"tu","week-3":"we","week-4":"th","week-5":"fr","week-6":"sa","week-7":"su","week-number":"W","month-name":["january","february","march","april","may","june","july","august","september","october","november","december"],shortcuts:"Shortcuts","custom-values":"Custom Values",past:"Past",following:"Following",previous:"Previous","prev-week":"Week","prev-month":"Month","prev-year":"Year",next:"Next","next-week":"Week","next-month":"Month","next-year":"Year","less-than":"Date range should not be more than %d days","more-than":"Date range should not be less than %d days","default-more":"Please select a date range longer than %d days","default-single":"Please select a date","default-less":"Please select a date range less than %d days","default-range":"Please select a date range between %d and %d days","default-default":"Please select a date range",time:"Time",hour:"Hour",minute:"Minute"},id:{selected:"Terpilih:",day:"Hari",days:"Hari",apply:"Tutup","week-1":"sen","week-2":"sel","week-3":"rab","week-4":"kam","week-5":"jum","week-6":"sab","week-7":"min","week-number":"W","month-name":["januari","februari","maret","april","mei","juni","juli","agustus","september","oktober","november","desember"],shortcuts:"Pintas","custom-values":"Nilai yang ditentukan",past:"Yang Lalu",following:"Mengikuti",previous:"Sebelumnya","prev-week":"Minggu","prev-month":"Bulan","prev-year":"Tahun",next:"Selanjutnya","next-week":"Minggu","next-month":"Bulan","next-year":"Tahun","less-than":"Tanggal harus lebih dari %d hari","more-than":"Tanggal harus kurang dari %d hari","default-more":"Jarak tanggal harus lebih lama dari %d hari","default-single":"Silakan pilih tanggal","default-less":"Jarak rentang tanggal tidak boleh lebih lama dari %d hari","default-range":"Rentang tanggal harus antara %d dan %d hari","default-default":"Silakan pilih rentang tanggal",time:"Waktu",hour:"Jam",minute:"Menit"},az:{selected:"Seçildi:",day:" gün",days:" gün",apply:"tətbiq","week-1":"1","week-2":"2","week-3":"3","week-4":"4","week-5":"5","week-6":"6","week-7":"7","month-name":["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"],shortcuts:"Qısayollar",past:"Keçmiş",following:"Növbəti",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Öncəki həftə","prev-month":"Öncəki ay","prev-year":"Öncəki il",next:"&nbsp;&nbsp;&nbsp;","next-week":"Növbəti həftə","next-month":"Növbəti ay","next-year":"Növbəti il","less-than":"Tarix aralığı %d gündən çox olmamalıdır","more-than":"Tarix aralığı %d gündən az olmamalıdır","default-more":"%d gündən çox bir tarix seçin","default-single":"Tarix seçin","default-less":"%d gündən az bir tarix seçin","default-range":"%d və %d gün aralığında tarixlər seçin","default-default":"Tarix aralığı seçin"},cn:{selected:"已选择:",day:"天",days:"天",apply:"确定","week-1":"一","week-2":"二","week-3":"三","week-4":"四","week-5":"五","week-6":"六","week-7":"日","week-number":"周","month-name":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortcuts:"快捷选择",past:"过去",following:"将来",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"上周","prev-month":"上个月","prev-year":"去年",next:"&nbsp;&nbsp;&nbsp;","next-week":"下周","next-month":"下个月","next-year":"明年","less-than":"所选日期范围不能大于%d天","more-than":"所选日期范围不能小于%d天","default-more":"请选择大于%d天的日期范围","default-less":"请选择小于%d天的日期范围","default-range":"请选择%d天到%d天的日期范围","default-single":"请选择一个日期","default-default":"请选择一个日期范围",time:"时间",hour:"小时",minute:"分钟"},cz:{selected:"Vybráno:",day:"Den",days:"Dny",apply:"Zavřít","week-1":"po","week-2":"út","week-3":"st","week-4":"čt","week-5":"pá","week-6":"so","week-7":"ne","month-name":["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],shortcuts:"Zkratky",past:"po",following:"následující",previous:"předchozí","prev-week":"týden","prev-month":"měsíc","prev-year":"rok",next:"další","next-week":"týden","next-month":"měsíc","next-year":"rok","less-than":"Rozsah data by neměl být větší než %d dnů","more-than":"Rozsah data by neměl být menší než %d dnů","default-more":"Prosím zvolte rozsah data větší než %d dnů","default-single":"Prosím zvolte datum","default-less":"Prosím zvolte rozsah data menší než %d dnů","default-range":"Prosím zvolte rozsah data mezi %d a %d dny","default-default":"Prosím zvolte rozsah data"},de:{selected:"Auswahl:",day:"Tag",days:"Tage",apply:"Schließen","week-1":"mo","week-2":"di","week-3":"mi","week-4":"do","week-5":"fr","week-6":"sa","week-7":"so","month-name":["januar","februar","märz","april","mai","juni","juli","august","september","oktober","november","dezember"],shortcuts:"Schnellwahl",past:"Vorherige",following:"Folgende",previous:"Vorherige","prev-week":"Woche","prev-month":"Monat","prev-year":"Jahr",next:"Nächste","next-week":"Woche","next-month":"Monat","next-year":"Jahr","less-than":"Datumsbereich darf nicht größer sein als %d Tage","more-than":"Datumsbereich darf nicht kleiner sein als %d Tage","default-more":"Bitte mindestens %d Tage auswählen","default-single":"Bitte ein Datum auswählen","default-less":"Bitte weniger als %d Tage auswählen","default-range":"Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen","default-default":"Bitte ein Start- und Enddatum auswählen",Time:"Zeit",hour:"Stunde",minute:"Minute"},es:{selected:"Seleccionado:",day:"Día",days:"Días",apply:"Cerrar","week-1":"lu","week-2":"ma","week-3":"mi","week-4":"ju","week-5":"vi","week-6":"sa","week-7":"do","month-name":["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],shortcuts:"Accesos directos",past:"Pasado",following:"Siguiente",previous:"Anterior","prev-week":"Semana","prev-month":"Mes","prev-year":"Año",next:"Siguiente","next-week":"Semana","next-month":"Mes","next-year":"Año","less-than":"El rango no debería ser mayor de %d días","more-than":"El rango no debería ser menor de %d días","default-more":"Por favor selecciona un rango mayor a %d días","default-single":"Por favor selecciona un día","default-less":"Por favor selecciona un rango menor a %d días","default-range":"Por favor selecciona un rango entre %d y %d días","default-default":"Por favor selecciona un rango de fechas."},fr:{selected:"Sélection:",day:"Jour",days:"Jours",apply:"Fermer","week-1":"lu","week-2":"ma","week-3":"me","week-4":"je","week-5":"ve","week-6":"sa","week-7":"di","month-name":["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortcuts:"Raccourcis",past:"Passé",following:"Suivant",previous:"Précédent","prev-week":"Semaine","prev-month":"Mois","prev-year":"Année",next:"Suivant","next-week":"Semaine","next-month":"Mois","next-year":"Année","less-than":"L'intervalle ne doit pas être supérieure à %d jours","more-than":"L'intervalle ne doit pas être inférieure à %d jours","default-more":"Merci de choisir une intervalle supérieure à %d jours","default-single":"Merci de choisir une date","default-less":"Merci de choisir une intervalle inférieure %d jours","default-range":"Merci de choisir une intervalle comprise entre %d et %d jours","default-default":"Merci de choisir une date"},hu:{selected:"Kiválasztva:",day:"Nap",days:"Nap",apply:"Ok","week-1":"h","week-2":"k","week-3":"sz","week-4":"cs","week-5":"p","week-6":"sz","week-7":"v","month-name":["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],shortcuts:"Gyorsválasztó",past:"Múlt",following:"Következő",previous:"Előző","prev-week":"Hét","prev-month":"Hónap","prev-year":"Év",next:"Következő","next-week":"Hét","next-month":"Hónap","next-year":"Év","less-than":"A kiválasztás nem lehet több %d napnál","more-than":"A kiválasztás nem lehet több %d napnál","default-more":"Válassz ki egy időszakot ami hosszabb mint %d nap","default-single":"Válassz egy napot","default-less":"Válassz ki egy időszakot ami rövidebb mint %d nap","default-range":"Válassz ki egy %d - %d nap hosszú időszakot","default-default":"Válassz ki egy időszakot"},it:{selected:"Selezionati:",day:"Giorno",days:"Giorni",apply:"Chiudi","week-1":"lu","week-2":"ma","week-3":"me","week-4":"gi","week-5":"ve","week-6":"sa","week-7":"do","month-name":["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],shortcuts:"Scorciatoie",past:"Scorso",following:"Successivo",previous:"Precedente","prev-week":"Settimana","prev-month":"Mese","prev-year":"Anno",next:"Prossimo","next-week":"Settimana","next-month":"Mese","next-year":"Anno","less-than":"L'intervallo non dev'essere maggiore di %d giorni","more-than":"L'intervallo non dev'essere minore di %d giorni","default-more":"Seleziona un intervallo maggiore di %d giorni","default-single":"Seleziona una data","default-less":"Seleziona un intervallo minore di %d giorni","default-range":"Seleziona un intervallo compreso tra i %d e i %d giorni","default-default":"Seleziona un intervallo di date"},ko:{selected:"기간:",day:"일",days:"일간",apply:"닫기","week-1":"월","week-2":"화","week-3":"수","week-4":"목","week-5":"금","week-6":"토","week-7":"일","week-number":"주","month-name":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],shortcuts:"단축키들",past:"지난(오늘기준)",following:"이후(오늘기준)",previous:"이전","prev-week":"1주","prev-month":"1달","prev-year":"1년",next:"다음","next-week":"1주","next-month":"1달","next-year":"1년","less-than":"날짜 범위는 %d 일보다 많을 수 없습니다","more-than":"날짜 범위는 %d 일보다 작을 수 없습니다","default-more":"날짜 범위를 %d 일보다 길게 선택해 주세요","default-single":"날짜를 선택해 주세요","default-less":"%d 일보다 작은 날짜를 선택해 주세요","default-range":"%d와 %d 일 사이의 날짜 범위를 선택해 주세요","default-default":"날짜 범위를 선택해 주세요",time:"시각",hour:"시",minute:"분"},no:{selected:"Valgt:",day:"Dag",days:"Dager",apply:"Lukk","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lø","week-7":"sø","month-name":["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],shortcuts:"Snarveier","custom-values":"Egendefinerte Verdier",past:"Over",following:"Følger",previous:"Forrige","prev-week":"Uke","prev-month":"Måned","prev-year":"År",next:"Neste","next-week":"Uke","next-month":"Måned","next-year":"År","less-than":"Datoperioden skal ikkje være lengre enn %d dager","more-than":"Datoperioden skal ikkje være kortere enn %d dager","default-more":"Vennligst velg ein datoperiode lengre enn %d dager","default-single":"Vennligst velg ein dato","default-less":"Vennligst velg ein datoperiode mindre enn %d dager","default-range":"Vennligst velg ein datoperiode mellom %d og %d dager","default-default":"Vennligst velg ein datoperiode",time:"Tid",hour:"Time",minute:"Minutter"},nl:{selected:"Geselecteerd:",day:"Dag",days:"Dagen",apply:"Ok","week-1":"ma","week-2":"di","week-3":"wo","week-4":"do","week-5":"vr","week-6":"za","week-7":"zo","month-name":["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortcuts:"Snelkoppelingen","custom-values":"Aangepaste waarden",past:"Verleden",following:"Komend",previous:"Vorige","prev-week":"Week","prev-month":"Maand","prev-year":"Jaar",next:"Volgende","next-week":"Week","next-month":"Maand","next-year":"Jaar","less-than":"Interval moet langer dan %d dagen zijn","more-than":"Interval mag niet minder dan %d dagen zijn","default-more":"Selecteer een interval langer dan %dagen","default-single":"Selecteer een datum","default-less":"Selecteer een interval minder dan %d dagen","default-range":"Selecteer een interval tussen %d en %d dagen","default-default":"Selecteer een interval",time:"Tijd",hour:"Uur",minute:"Minuut"},ru:{selected:"Выбрано:",day:"День",days:"Дней",apply:"Применить","week-1":"пн","week-2":"вт","week-3":"ср","week-4":"чт","week-5":"пт","week-6":"сб","week-7":"вс","month-name":["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],shortcuts:"Быстрый выбор","custom-values":"Пользовательские значения",past:"Прошедшие",following:"Следующие",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Неделя","prev-month":"Месяц","prev-year":"Год",next:"&nbsp;&nbsp;&nbsp;","next-week":"Неделя","next-month":"Месяц","next-year":"Год","less-than":"Диапазон не может быть больше %d дней","more-than":"Диапазон не может быть меньше %d дней","default-more":"Пожалуйста выберите диапазон больше %d дней","default-single":"Пожалуйста выберите дату","default-less":"Пожалуйста выберите диапазон меньше %d дней","default-range":"Пожалуйста выберите диапазон между %d и %d днями","default-default":"Пожалуйста выберите диапазон",time:"Время",hour:"Часы",minute:"Минуты"},pl:{selected:"Wybrany:",day:"Dzień",days:"Dni",apply:"Zamknij","week-1":"pon","week-2":"wt","week-3":"śr","week-4":"czw","week-5":"pt","week-6":"so","week-7":"nd","month-name":["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],shortcuts:"Skróty","custom-values":"Niestandardowe wartości",past:"Przeszłe",following:"Następne",previous:"Poprzednie","prev-week":"tydzień","prev-month":"miesiąc","prev-year":"rok",next:"Następny","next-week":"tydzień","next-month":"miesiąc","next-year":"rok","less-than":"Okres nie powinien być dłuższy niż %d dni","more-than":"Okres nie powinien być krótszy niż  %d ni","default-more":"Wybierz okres dłuższy niż %d dni","default-single":"Wybierz datę","default-less":"Wybierz okres krótszy niż %d dni","default-range":"Wybierz okres trwający od %d do %d dni","default-default":"Wybierz okres",time:"Czas",hour:"Godzina",minute:"Minuta"},se:{selected:"Vald:",day:"dag",days:"dagar",apply:"godkänn","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lö","week-7":"sö","month-name":["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],shortcuts:"genvägar","custom-values":"Anpassade värden",past:"över",following:"följande",previous:"förra","prev-week":"vecka","prev-month":"månad","prev-year":"år",next:"nästa","next-week":"vecka","next-month":"måned","next-year":"år","less-than":"Datumintervall bör inte vara mindre än %d dagar","more-than":"Datumintervall bör inte vara mer än %d dagar","default-more":"Välj ett datumintervall längre än %d dagar","default-single":"Välj ett datum","default-less":"Välj ett datumintervall mindre än %d dagar","default-range":"Välj ett datumintervall mellan %d och %d dagar","default-default":"Välj ett datumintervall",time:"tid",hour:"timme",minute:"minut"},pt:{selected:"Selecionado:",day:"Dia",days:"Dias",apply:"Fechar","week-1":"seg","week-2":"ter","week-3":"qua","week-4":"qui","week-5":"sex","week-6":"sab","week-7":"dom","week-number":"N","month-name":["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],shortcuts:"Atalhos","custom-values":"Valores Personalizados",past:"Passado",following:"Seguinte",previous:"Anterior","prev-week":"Semana","prev-month":"Mês","prev-year":"Ano",next:"Próximo","next-week":"Próxima Semana","next-month":"Próximo Mês","next-year":"Próximo Ano","less-than":"O período selecionado não deve ser maior que %d dias","more-than":"O período selecionado não deve ser menor que %d dias","default-more":"Selecione um período superior a %d dias","default-single":"Selecione uma data","default-less":"Selecione um período inferior a %d dias","default-range":"Selecione um período de %d a %d dias","default-default":"Selecione um período",time:"Tempo",hour:"Hora",minute:"Minuto"},tc:{selected:"已選擇:",day:"天",days:"天",apply:"確定","week-1":"一","week-2":"二","week-3":"三","week-4":"四","week-5":"五","week-6":"六","week-7":"日","week-number":"周","month-name":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortcuts:"快速選擇",past:"過去",following:"將來",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"上週","prev-month":"上個月","prev-year":"去年",next:"&nbsp;&nbsp;&nbsp;","next-week":"下周","next-month":"下個月","next-year":"明年","less-than":"所選日期範圍不能大於%d天","more-than":"所選日期範圍不能小於%d天","default-more":"請選擇大於%d天的日期範圍","default-less":"請選擇小於%d天的日期範圍","default-range":"請選擇%d天到%d天的日期範圍","default-single":"請選擇一個日期","default-default":"請選擇一個日期範圍",time:"日期",hour:"小時",minute:"分鐘"},ja:{selected:"選択しました:",day:"日",days:"日々",apply:"閉じる","week-1":"日","week-2":"月","week-3":"火","week-4":"水","week-5":"木","week-6":"金","week-7":"土","month-name":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],shortcuts:"クイック選択",past:"過去",following:"将来",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"先週、","prev-month":"先月","prev-year":"昨年",next:"&nbsp;&nbsp;&nbsp;","next-week":"来週","next-month":"来月","next-year":"来年","less-than":"日付の範囲は ％d 日以上にすべきではありません","more-than":"日付の範囲は ％d 日を下回ってはいけません","default-more":"％d 日よりも長い期間を選択してください","default-less":"％d 日未満の期間を選択してください","default-range":"％d と％ d日の間の日付範囲を選択してください","default-single":"日付を選択してください","default-default":"日付範囲を選択してください",time:"時間",hour:"時間",minute:"分"},da:{selected:"Valgt:",day:"Dag",days:"Dage",apply:"Luk","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lö","week-7":"sö","month-name":["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],shortcuts:"genveje","custom-values":"Brugerdefinerede værdier",past:"Forbi",following:"Følgende",previous:"Forrige","prev-week":"uge","prev-month":"månad","prev-year":"år",next:"Næste","next-week":"Næste uge","next-month":"Næste måned","next-year":"Næste år","less-than":"Dato interval bør ikke være med end %d dage","more-than":"Dato interval bør ikke være mindre end %d dage","default-more":"Vælg datointerval længere end %d dage","default-single":"Vælg dato","default-less":"Vælg datointerval mindre end %d dage","default-range":"Vælg datointerval mellem %d og %d dage","default-default":"Vælg datointerval",time:"tid",hour:"time",minute:"minut"},fi:{selected:"Valittu:",day:"Päivä",days:"Päivää",apply:"Sulje","week-1":"ma","week-2":"ti","week-3":"ke","week-4":"to","week-5":"pe","week-6":"la","week-7":"su","week-number":"V","month-name":["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],shortcuts:"Pikavalinnat","custom-values":"Mukautetut Arvot",past:"Menneet",following:"Tulevat",previous:"Edellinen","prev-week":"Viikko","prev-month":"Kuukausi","prev-year":"Vuosi",next:"Seuraava","next-week":"Viikko","next-month":"Kuukausi","next-year":"Vuosi","less-than":"Aikajakson tulisi olla vähemmän kuin %d päivää","more-than":"Aikajakson ei tulisi olla vähempää kuin %d päivää","default-more":"Valitse pidempi aikajakso kuin %d päivää","default-single":"Valitse päivä","default-less":"Valitse lyhyempi aikajakso kuin %d päivää","default-range":"Valitse aikajakso %d ja %d päivän väliltä","default-default":"Valitse aikajakso",time:"Aika",hour:"Tunti",minute:"Minuutti"}},e.fn.dateRangePicker=function(a){function n(t,a){return a.contains(t.target)||t.target==a||void 0!=a.childNodes&&e.inArray(t.target,a.childNodes)>=0}function r(){function r(t){var n=e(t).parents("table").hasClass("month2"),r=n?a.month2:a.month1;r=H(r),!a.singleMonth&&!a.singleDate&&!n&&L(r,a.month2)>=0||K(r)||(Y(r,n?"month2":"month1"),A())}function i(e){var t=H(a.month1),n=H(a.month2);K(n)||!a.singleDate&&L(t,n)>=0||(Y(t,"month1"),Y(n,"month2"),S())}function o(t){var n=e(t).parents("table").hasClass("month2"),r=n?a.month2:a.month1;r=R(r),n&&L(r,a.month1)<=0||K(r)||(Y(r,n?"month2":"month1"),A())}function d(e){var t=R(a.month1),n=R(a.month2);K(t)||!a.singleDate&&L(n,t)<=0||(Y(n,"month2"),Y(t,"month1"),S())}var l=this;if(e(this).data("date-picker-opened"))return void N();e(this).data("date-picker-opened",!0),se=$().hide(),se.append('<div class="date-range-length-tip"></div>'),e(a.container).append(se),a.inline?se.addClass("inline-wrapper"):s(),a.alwaysOpen&&se.find(".apply-btn").hide();var m=ne();if(re(m),a.time.enabled)if(a.startDate&&a.endDate||a.start&&a.end)P(t(a.start||a.startDate).toDate(),"time1"),P(t(a.end||a.endDate).toDate(),"time2");else{var h=a.defaultEndTime?a.defaultEndTime:m;P(m,"time1"),P(h,"time2")}var p="";p=ae(a.singleDate?"default-single":a.minDays&&a.maxDays?"default-range":a.minDays?"default-more":a.maxDays?"default-less":"default-default"),se.find(".default-top").html(p.replace(/\%d/,a.minDays).replace(/\%d/,a.maxDays)),a.singleMonth?se.addClass("single-month"):se.addClass("two-months"),setTimeout(function(){u(),de=!0},0),se.click(function(e){e.stopPropagation()}),e(document).bind("click.datepicker",function(e){n(e,l[0])||se.is(":visible")&&N()}),se.find(".next").click(function(){a.stickyMonths?i(this):r(this)}),se.find(".prev").click(function(){a.stickyMonths?d(this):o(this)}),se.attr("unselectable","on").css("user-select","none").bind("selectstart",function(e){return e.preventDefault(),!1}),se.find(".apply-btn").click(function(){N();var t=I(new Date(a.start))+a.separator+I(new Date(a.end));e(l).trigger("datepicker-apply",{value:t,date1:new Date(a.start),date2:new Date(a.end)})}),se.find("[custom]").click(function(){var t=e(this).attr("custom");a.start=!1,a.end=!1,se.find(".day.checked").removeClass("checked"),a.setValue.call(ue,t),T(),z(!0),S(),a.autoClose&&N()}),se.find("[shortcut]").click(function(){var t,n=e(this).attr("shortcut"),r=new Date,s=!1;if(n.indexOf("day")!=-1){var i=parseInt(n.split(",",2)[1],10);s=new Date((new Date).getTime()+864e5*i),r=new Date(r.getTime()+864e5*(i>0?1:-1))}else if(n.indexOf("week")!=-1){t=n.indexOf("prev,")!=-1?-1:1;var o;for(o=1==t?"monday"==a.startOfWeek?1:0:"monday"==a.startOfWeek?0:6,r=new Date(r.getTime()-864e5);r.getDay()!=o;)r=new Date(r.getTime()+864e5*t);s=new Date(r.getTime()+864e5*t*6)}else if(n.indexOf("month")!=-1)t=n.indexOf("prev,")!=-1?-1:1,s=1==t?H(r):R(r),s.setDate(1),r=H(s),r.setDate(1),r=new Date(r.getTime()-864e5);else if(n.indexOf("year")!=-1)t=n.indexOf("prev,")!=-1?-1:1,s=new Date,s.setFullYear(r.getFullYear()+t),s.setMonth(0),s.setDate(1),r.setFullYear(r.getFullYear()+t),r.setMonth(11),r.setDate(31);else if("custom"==n){var d=e(this).html();if(a.customShortcuts&&a.customShortcuts.length>0)for(var l=0;l<a.customShortcuts.length;l++){var u=a.customShortcuts[l];if(u.name==d){var m=[];if(m=u.dates.call(),m&&2==m.length&&(s=m[0],r=m[1]),m&&1==m.length){var h=m[0];Y(h,"month1"),Y(H(h),"month2"),A()}break}}}s&&r&&(O(s,r),T())}),se.find(".time1 input[type=range]").bind("change touchmove",function(t){var a=t.target,n="hour"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0,r="minute"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0;c("time1",n,r)}),se.find(".time2 input[type=range]").bind("change touchmove",function(t){var a=t.target,n="hour"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0,r="minute"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0;c("time2",n,r)})}function s(){if(!a.inline){var t=e(le).offset();if("relative"==e(a.container).css("position")){var n=e(a.container).offset();se.css({top:t.top-n.top+e(le).outerHeight()+4,left:t.left-n.left})}else t.left<460?se.css({top:t.top+e(le).outerHeight()+parseInt(e("body").css("border-top")||0,10),left:t.left}):se.css({top:t.top+e(le).outerHeight()+parseInt(e("body").css("border-top")||0,10),left:t.left+e(le).width()-se.width()-16})}}function i(){return se}function o(t){s(),B(),d(),a.customOpenAnimation?a.customOpenAnimation.call(se.get(0),function(){e(le).trigger("datepicker-opened",{relatedTarget:se})}):se.slideDown(t,function(){e(le).trigger("datepicker-opened",{relatedTarget:se})}),e(le).trigger("datepicker-open",{relatedTarget:se}),A(),u()}function d(){var e=a.getValue.call(ue),n=e?e.split(a.separator):"";if(n&&(1==n.length&&a.singleDate||n.length>=2)){var r=a.format;r.match(/Do/)&&(r=r.replace(/Do/,"D"),n[0]=n[0].replace(/(\d+)(th|nd|st)/,"$1"),n.length>=2&&(n[1]=n[1].replace(/(\d+)(th|nd|st)/,"$1"))),de=!1,n.length>=2?O(l(n[0],r,t.locale(a.language)),l(n[1],r,t.locale(a.language))):1==n.length&&a.singleDate&&j(l(n[0],r,t.locale(a.language))),de=!0}}function l(e,a,n){return t(e,a,n).isValid()?t(e,a,n).toDate():t().toDate()}function u(){var e=se.find(".gap").css("margin-left");e&&(e=parseInt(e));var t=se.find(".month1").width(),a=se.find(".gap").width()+(e?2*e:0),n=se.find(".month2").width();se.find(".month-wrapper").width(t+a+n)}function m(e,a){se.find("."+e+" input[type=range].hour-range").val(t(a).hours()),se.find("."+e+" input[type=range].minute-range").val(t(a).minutes()),c(e,t(a).format("HH"),t(a).format("mm"))}function h(e,n){a[e]=parseInt(t(parseInt(n)).startOf("day").add(t(a[e+"Time"]).format("HH"),"h").add(t(a[e+"Time"]).format("mm"),"m").valueOf())}function p(){m("time1",a.start),m("time2",a.end)}function c(e,n,r){function s(e,t){var s=t.format("HH"),i=t.format("mm");a[e]=t.startOf("day").add(n||s,"h").add(r||i,"m").valueOf()}switch(n&&se.find("."+e+" .hour-val").text(n),r&&se.find("."+e+" .minute-val").text(r),e){case"time1":a.start&&s("start",t(a.start)),s("startTime",t(a.startTime||t().valueOf()));break;case"time2":a.end&&s("end",t(a.end)),s("endTime",t(a.endTime||t().valueOf()))}T(),z(),S()}function f(){a.start=!1,a.end=!1,se.find(".day.checked").removeClass("checked"),se.find(".day.last-date-selected").removeClass("last-date-selected"),se.find(".day.first-date-selected").removeClass("first-date-selected"),a.setValue.call(ue,""),T(),z(),S()}function v(e){var n=e;return"week-range"===a.batchMode?n="monday"===a.startOfWeek?t(parseInt(e)).startOf("isoweek").valueOf():t(parseInt(e)).startOf("week").valueOf():"month-range"===a.batchMode&&(n=t(parseInt(e)).startOf("month").valueOf()),n}function g(e){var n=e;return"week-range"===a.batchMode?n="monday"===a.startOfWeek?t(parseInt(e)).endOf("isoweek").valueOf():t(parseInt(e)).endOf("week").valueOf():"month-range"===a.batchMode&&(n=t(parseInt(e)).endOf("month").valueOf()),n}function k(n){if(!n.hasClass("invalid")){var r=n.attr("time");if(n.addClass("checked"),a.singleDate?(a.start=r,a.end=!1):"week"===a.batchMode?"monday"===a.startOfWeek?(a.start=t(parseInt(r)).startOf("isoweek").valueOf(),a.end=t(parseInt(r)).endOf("isoweek").valueOf()):(a.end=t(parseInt(r)).endOf("week").valueOf(),a.start=t(parseInt(r)).startOf("week").valueOf()):"workweek"===a.batchMode?(a.start=t(parseInt(r)).day(1).valueOf(),a.end=t(parseInt(r)).day(5).valueOf()):"weekend"===a.batchMode?(a.start=t(parseInt(r)).day(6).valueOf(),a.end=t(parseInt(r)).day(7).valueOf()):"month"===a.batchMode?(a.start=t(parseInt(r)).startOf("month").valueOf(),a.end=t(parseInt(r)).endOf("month").valueOf()):a.start&&a.end||!a.start&&!a.end?(a.start=v(r),a.end=!1):a.start&&(a.end=g(r),a.time.enabled&&h("end",a.end)),a.time.enabled&&(a.start&&h("start",a.start),a.end&&h("end",a.end)),!a.singleDate&&a.start&&a.end&&a.start>a.end){var s=a.end;a.end=g(a.start),a.start=v(s),a.time.enabled&&a.swapTime&&p()}a.start=parseInt(a.start),a.end=parseInt(a.end),x(),a.start&&!a.end&&(e(le).trigger("datepicker-first-date-selected",{date1:new Date(a.start)}),D(n)),b(r),T(),z(),S(),M()}}function w(e){var n,r,s=parseInt(e.attr("data-start-time"),10);a.startWeek?(se.find(".week-number-selected").removeClass("week-number-selected"),n=new Date(s<a.startWeek?s:a.startWeek),r=new Date(s<a.startWeek?a.startWeek:s),a.startWeek=!1,a.start=t(n).day("monday"==a.startOfWeek?1:0).valueOf(),a.end=t(r).day("monday"==a.startOfWeek?7:6).valueOf()):(a.startWeek=s,e.addClass("week-number-selected"),n=new Date(s),a.start=t(n).day("monday"==a.startOfWeek?1:0).valueOf(),a.end=t(n).day("monday"==a.startOfWeek?7:6).valueOf()),b(),T(),z(),S(),M()}function y(e){if(e=parseInt(e,10),a.startDate&&F(e,a.startDate)<0)return!1;if(a.endDate&&F(e,a.endDate)>0)return!1;if(a.start&&!a.end&&!a.singleDate){if(a.maxDays>0&&C(e,a.start)>a.maxDays)return!1;if(a.minDays>0&&C(e,a.start)<a.minDays)return!1;if(a.selectForward&&e<a.start)return!1;if(a.selectBackward&&e>a.start)return!1;if(a.beforeShowDay&&"function"==typeof a.beforeShowDay){for(var t=!0,n=e;C(n,a.start)>1;){var r=a.beforeShowDay(new Date(n));if(!r[0]){t=!1;break}if(Math.abs(n-a.start)<864e5)break;n>a.start&&(n-=864e5),n<a.start&&(n+=864e5)}if(!t)return!1}}return!0}function b(){return se.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"),a.start&&!a.end&&se.find(".day.toMonth.valid").each(function(){var t=parseInt(e(this).attr("time"),10);y(t)?e(this).addClass("valid tmp").removeClass("invalid"):e(this).addClass("invalid tmp").removeClass("valid")}),!0}function D(t){var n=parseInt(t.attr("time")),r="";if(t.hasClass("has-tooltip")&&t.attr("data-tooltip"))r='<span style="white-space:nowrap">'+t.attr("data-tooltip")+"</span>";else if(!t.hasClass("invalid"))if(a.singleDate)se.find(".day.hovering").removeClass("hovering"),t.addClass("hovering");else if(se.find(".day").each(function(){var t=parseInt(e(this).attr("time"));a.start,a.end;t==n?e(this).addClass("hovering"):e(this).removeClass("hovering"),a.start&&!a.end&&(a.start<t&&n>=t||a.start>t&&n<=t)?e(this).addClass("hovering"):e(this).removeClass("hovering")}),a.start&&!a.end){var s=C(n,a.start);a.hoveringTooltip&&("function"==typeof a.hoveringTooltip?r=a.hoveringTooltip(s,a.start,n):a.hoveringTooltip===!0&&s>1&&(r=s+" "+ae("days")))}if(r){var i=t.offset(),o=se.offset(),d=i.left-o.left,l=i.top-o.top;d+=t.width()/2;var u=se.find(".date-range-length-tip"),m=u.css({visibility:"hidden",display:"none"}).html(r).width(),h=u.height();d-=m/2,l-=h,setTimeout(function(){u.css({left:d,top:l,display:"block",visibility:"visible"})},10)}else se.find(".date-range-length-tip").hide()}function x(){se.find(".day.hovering").removeClass("hovering"),se.find(".date-range-length-tip").hide()}function M(){a.singleDate===!0?de&&a.start&&a.autoClose&&N():de&&a.start&&a.end&&a.autoClose&&N()}function T(){var e=Math.ceil((a.end-a.start)/864e5)+1;a.singleDate?a.start&&!a.end?se.find(".drp_top-bar").removeClass("error").addClass("normal"):se.find(".drp_top-bar").removeClass("error").removeClass("normal"):a.maxDays&&e>a.maxDays?(a.start=!1,a.end=!1,se.find(".day").removeClass("checked"),se.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ae("less-than").replace("%d",a.maxDays))):a.minDays&&e<a.minDays?(a.start=!1,a.end=!1,se.find(".day").removeClass("checked"),se.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ae("more-than").replace("%d",a.minDays))):a.start||a.end?se.find(".drp_top-bar").removeClass("error").addClass("normal"):se.find(".drp_top-bar").removeClass("error").removeClass("normal"),a.singleDate&&a.start&&!a.end||!a.singleDate&&a.start&&a.end?se.find(".apply-btn").removeClass("disabled"):se.find(".apply-btn").addClass("disabled"),a.batchMode&&(a.start&&a.startDate&&F(a.start,a.startDate)<0||a.end&&a.endDate&&F(a.end,a.endDate)>0)&&(a.start=!1,a.end=!1,se.find(".day").removeClass("checked"))}function z(t,n){se.find(".start-day").html("..."),se.find(".end-day").html("..."),se.find(".selected-days").hide(),a.start&&se.find(".start-day").html(I(new Date(parseInt(a.start)))),a.end&&se.find(".end-day").html(I(new Date(parseInt(a.end))));var r;a.start&&a.singleDate?(se.find(".apply-btn").removeClass("disabled"),r=I(new Date(a.start)),a.setValue.call(ue,r,I(new Date(a.start)),I(new Date(a.end))),de&&!n&&e(le).trigger("datepicker-change",{value:r,date1:new Date(a.start)})):a.start&&a.end?(se.find(".selected-days").show().find(".selected-days-num").html(C(a.end,a.start)),se.find(".apply-btn").removeClass("disabled"),r=I(new Date(a.start))+a.separator+I(new Date(a.end)),a.setValue.call(ue,r,I(new Date(a.start)),I(new Date(a.end))),de&&!n&&e(le).trigger("datepicker-change",{value:r,date1:new Date(a.start),date2:new Date(a.end)})):t?se.find(".apply-btn").removeClass("disabled"):se.find(".apply-btn").addClass("disabled")}function C(e,t){return Math.abs(Z(e)-Z(t))+1}function O(e,t,n){if(e.getTime()>t.getTime()){var r=t;t=e,e=r,r=null}var s=!0;return a.startDate&&F(e,a.startDate)<0&&(s=!1),a.endDate&&F(t,a.endDate)>0&&(s=!1),s?(a.start=e.getTime(),a.end=t.getTime(),a.time.enabled&&(m("time1",e),m("time2",t)),(a.stickyMonths||F(e,t)>0&&0===L(e,t))&&(a.lookBehind?e=R(t):t=H(e)),a.stickyMonths&&a.endDate!==!1&&L(t,a.endDate)>0&&(e=R(e),t=R(t)),a.stickyMonths||0===L(e,t)&&(a.lookBehind?e=R(t):t=H(e)),Y(e,"month1"),Y(t,"month2"),A(),T(),z(!1,n),void M()):(Y(a.startDate,"month1"),Y(H(a.startDate),"month2"),void A())}function j(e){var t=!0;if(a.startDate&&F(e,a.startDate)<0&&(t=!1),a.endDate&&F(e,a.endDate)>0&&(t=!1),!t)return void Y(a.startDate,"month1");if(a.start=e.getTime(),a.time.enabled&&m("time1",e),Y(e,"month1"),a.singleMonth!==!0){var n=H(e);Y(n,"month2")}A(),z(),M()}function S(){(a.start||a.end)&&(se.find(".day").each(function(){var n=parseInt(e(this).attr("time")),r=a.start,s=a.end;a.time.enabled&&(n=t(n).startOf("day").valueOf(),r=t(r||t().valueOf()).startOf("day").valueOf(),s=t(s||t().valueOf()).startOf("day").valueOf()),a.start&&a.end&&s>=n&&r<=n||a.start&&!a.end&&t(r).format("YYYY-MM-DD")==t(n).format("YYYY-MM-DD")?e(this).addClass("checked"):e(this).removeClass("checked"),a.start&&t(r).format("YYYY-MM-DD")==t(n).format("YYYY-MM-DD")?e(this).addClass("first-date-selected"):e(this).removeClass("first-date-selected"),a.end&&t(s).format("YYYY-MM-DD")==t(n).format("YYYY-MM-DD")?e(this).addClass("last-date-selected"):e(this).removeClass("last-date-selected")}),se.find(".week-number").each(function(){e(this).attr("data-start-time")==a.startWeek&&e(this).addClass("week-number-selected")}))}function Y(e,n){e=t(e).toDate();var r=W(e.getMonth());se.find("."+n+" .month-name").html(r+" "+e.getFullYear()),se.find("."+n+" tbody").html(X(e)),a[n]=e,b(),V()}function V(){se.find(".day").unbind("click").click(function(t){k(e(this))}),se.find(".day").unbind("mouseenter").mouseenter(function(t){D(e(this))}),se.find(".day").unbind("mouseleave").mouseleave(function(e){se.find(".date-range-length-tip").hide(),a.singleDate&&x()}),se.find(".week-number").unbind("click").click(function(t){w(e(this))})}function P(e,t){se.find("."+t).append(q()),m(t,e)}function W(e){return ae("month-name")[e]}function I(e){return t(e).format(a.format)}function A(){S();var e=parseInt(t(a.month1).format("YYYYMM")),n=parseInt(t(a.month2).format("YYYYMM")),r=Math.abs(e-n),s=r>1&&89!=r;s?se.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility","visible"):se.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility","hidden");var i=se.find("table.month1").height(),o=se.find("table.month2").height();se.find(".gap").height(Math.max(i,o)+10)}function N(){if(!a.alwaysOpen){var t=function(){e(le).data("date-picker-opened",!1),e(le).trigger("datepicker-closed",{relatedTarget:se})};a.customCloseAnimation?a.customCloseAnimation.call(se.get(0),t):e(se).slideUp(a.duration,t),e(le).trigger("datepicker-close",{relatedTarget:se})}}function B(){Y(a.month1,"month1"),Y(a.month2,"month2")}function L(e,a){var n=parseInt(t(e).format("YYYYMM"))-parseInt(t(a).format("YYYYMM"));return n>0?1:0===n?0:-1}function F(e,a){var n=parseInt(t(e).format("YYYYMMDD"))-parseInt(t(a).format("YYYYMMDD"));return n>0?1:0===n?0:-1}function H(e){return t(e).add(1,"months").toDate()}function R(e){return t(e).add(-1,"months").toDate()}function q(){return"<div><span>"+ae("Time")+': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>'+ae("Hour")+': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>'+ae("Minute")+': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'}function $(){var t='<div class="date-picker-wrapper';a.extraClass&&(t+=" "+a.extraClass+" "),a.singleDate&&(t+=" single-date "),a.showShortcuts||(t+=" no-shortcuts "),a.showTopbar||(t+=" no-topbar "),a.customTopBar&&(t+=" custom-topbar "),t+='">',a.showTopbar&&(t+='<div class="drp_top-bar">',a.customTopBar?("function"==typeof a.customTopBar&&(a.customTopBar=a.customTopBar()),t+='<div class="custom-top">'+a.customTopBar+"</div>"):(t+='<div class="normal-top"><span style="color:#333">'+ae("selected")+' </span> <b class="start-day">...</b>',a.singleDate||(t+=' <span class="separator-day">'+a.separator+'</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> '+ae("days")+")</i>"),t+="</div>",t+='<div class="error-top">error</div><div class="default-top">default</div>'),t+='<input type="button" class="apply-btn disabled'+E()+'" value="'+ae("apply")+'" />',t+="</div>");var n=a.showWeekNumbers?6:5,r="&lt;";a.customArrowPrevSymbol&&(r=a.customArrowPrevSymbol);var s="&gt;";if(a.customArrowNextSymbol&&(s=a.customArrowNextSymbol),t+='<div class="month-wrapper">   <table class="month1" cellspacing="0" border="0" cellpadding="0">       <thead>           <tr class="caption">               <th style="width:27px;">                   <span class="prev">'+r+'                   </span>               </th>               <th colspan="'+n+'" class="month-name">               </th>               <th style="width:27px;">'+(a.singleDate||!a.stickyMonths?'<span class="next">'+s+"</span>":"")+'               </th>           </tr>           <tr class="week-name">'+J()+"       </thead>       <tbody></tbody>   </table>",G()&&(t+='<div class="gap">'+_()+'</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th style="width:27px;">'+(a.stickyMonths?"":'<span class="prev">'+r+"</span>")+'       </th>       <th colspan="'+n+'" class="month-name">       </th>       <th style="width:27px;">           <span class="next">'+s+'</span>       </th>   </tr>   <tr class="week-name">'+J()+"   </thead>   <tbody></tbody></table>"),t+='<div style="clear:both;height:0;font-size:0;"></div><div class="time"><div class="time1"></div>',a.singleDate||(t+='<div class="time2"></div>'),t+='</div><div style="clear:both;height:0;font-size:0;"></div></div>',t+='<div class="footer">',a.showShortcuts){t+='<div class="shortcuts"><b>'+ae("shortcuts")+"</b>";var i=a.shortcuts;if(i){var o;if(i["prev-days"]&&i["prev-days"].length>0){t+='&nbsp;<span class="prev-days">'+ae("past");for(var d=0;d<i["prev-days"].length;d++)o=i["prev-days"][d],o+=ae(i["prev-days"][d]>1?"days":"day"),t+=' <a href="javascript:;" shortcut="day,-'+i["prev-days"][d]+'">'+o+"</a>";t+="</span>"}if(i["next-days"]&&i["next-days"].length>0){t+='&nbsp;<span class="next-days">'+ae("following");for(var d=0;d<i["next-days"].length;d++)o=i["next-days"][d],o+=ae(i["next-days"][d]>1?"days":"day"),t+=' <a href="javascript:;" shortcut="day,'+i["next-days"][d]+'">'+o+"</a>";t+="</span>"}if(i.prev&&i.prev.length>0){t+='&nbsp;<span class="prev-buttons">'+ae("previous");for(var d=0;d<i.prev.length;d++)o=ae("prev-"+i.prev[d]),t+=' <a href="javascript:;" shortcut="prev,'+i.prev[d]+'">'+o+"</a>";t+="</span>"}if(i.next&&i.next.length>0){t+='&nbsp;<span class="next-buttons">'+ae("next");for(var d=0;d<i.next.length;d++)o=ae("next-"+i.next[d]),t+=' <a href="javascript:;" shortcut="next,'+i.next[d]+'">'+o+"</a>";t+="</span>"}}if(a.customShortcuts)for(var d=0;d<a.customShortcuts.length;d++){var l=a.customShortcuts[d];t+='&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">'+l.name+"</a></span>"}t+="</div>"}if(a.showCustomValues&&(t+='<div class="customValues"><b>'+(a.customValueLabel||ae("custom-values"))+"</b>",a.customValues))for(var d=0;d<a.customValues.length;d++){var u=a.customValues[d];t+='&nbsp;<span class="custom-value"><a href="javascript:;" custom="'+u.value+'">'+u.name+"</a></span>"}return t+="</div></div>",e(t)}function E(){var e="";return a.autoClose===!0&&(e+=" hide"),""!==a.applyBtnClass&&(e+=" "+a.applyBtnClass),e}function J(){var e=a.showWeekNumbers?"<th>"+ae("week-number")+"</th>":"";return"monday"==a.startOfWeek?e+"<th>"+ae("week-1")+"</th><th>"+ae("week-2")+"</th><th>"+ae("week-3")+"</th><th>"+ae("week-4")+"</th><th>"+ae("week-5")+"</th><th>"+ae("week-6")+"</th><th>"+ae("week-7")+"</th>":e+"<th>"+ae("week-7")+"</th><th>"+ae("week-1")+"</th><th>"+ae("week-2")+"</th><th>"+ae("week-3")+"</th><th>"+ae("week-4")+"</th><th>"+ae("week-5")+"</th><th>"+ae("week-6")+"</th>"}function K(e){return e=t(e),!(!a.startDate||!e.endOf("month").isBefore(a.startDate))||!(!a.endDate||!e.startOf("month").isAfter(a.endDate))}function _(){for(var e=['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'],t=0;t<20;t++)e.push('<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>');return e.push("</div>"),e.join("")}function G(){return!a.singleMonth}function U(t,a,n){var r=e.extend(!0,{},t);e.each(a,function(e,t){var a=t(n);for(var s in a)r.hasOwnProperty(s)?r[s]+=a[s]:r[s]=a[s]});var s="";for(var i in r)r.hasOwnProperty(i)&&(s+=i+'="'+r[i]+'" ');return s}function Z(e){return Math.floor(Q(e)/864e5)}function Q(e){return t.isMoment(e)&&(e=e.toDate().getTime()),"object"==typeof e&&e.getTime&&(e=e.getTime()),"string"!=typeof e||e.match(/\d{13}/)||(e=t(e,a.format).toDate().getTime()),e=parseInt(e,10)-60*(new Date).getTimezoneOffset()*1e3}function X(e){var n=[];e.setDate(1);var r=(new Date(e.getTime()-864e5),new Date),s=e.getDay();0===s&&"monday"===a.startOfWeek&&(s=7);var i,o;if(s>0)for(var d=s;d>0;d--){var l=new Date(e.getTime()-864e5*d);o=y(l.getTime()),a.startDate&&F(l,a.startDate)<0&&(o=!1),a.endDate&&F(l,a.endDate)>0&&(o=!1),n.push({date:l,type:"lastMonth",day:l.getDate(),time:l.getTime(),valid:o})}for(var u=e.getMonth(),d=0;d<40;d++)i=t(e).add(d,"days").toDate(),o=y(i.getTime()),a.startDate&&F(i,a.startDate)<0&&(o=!1),a.endDate&&F(i,a.endDate)>0&&(o=!1),n.push({date:i,type:i.getMonth()==u?"toMonth":"nextMonth",day:i.getDate(),time:i.getTime(),valid:o});for(var m=[],h=0;h<6&&"nextMonth"!=n[7*h].type;h++){m.push("<tr>");for(var l=0;l<7;l++){var p="monday"==a.startOfWeek?l+1:l;i=n[7*h+p];var c=t(i.time).format("L")==t(r).format("L");if(i.extraClass="",i.tooltip="",i.valid&&a.beforeShowDay&&"function"==typeof a.beforeShowDay){var f=a.beforeShowDay(t(i.time).toDate());i.valid=f[0],i.extraClass=f[1]||"",i.tooltip=f[2]||"",""!==i.tooltip&&(i.extraClass+=" has-tooltip ")}var v={time:i.time,"data-tooltip":i.tooltip,"class":"day "+i.type+" "+i.extraClass+" "+(i.valid?"valid":"invalid")+" "+(c?"real-today":"")};0===l&&a.showWeekNumbers&&m.push('<td><div class="week-number" data-start-time="'+i.time+'">'+a.getWeekNumber(i.date)+"</div></td>"),m.push("<td "+U({},a.dayTdAttrs,i)+"><div "+U(v,a.dayDivAttrs,i)+">"+ee(i.time,i.day)+"</div></td>")}m.push("</tr>")}return m.join("")}function ee(e,t){return a.showDateFilter&&"function"==typeof a.showDateFilter?a.showDateFilter(e,t):t}function te(){if("auto"==a.language){var t=navigator.language?navigator.language:navigator.browserLanguage;if(!t)return e.dateRangePickerLanguages["default"];t=t.toLowerCase();for(var n in e.dateRangePickerLanguages)if(t.indexOf(n)!==-1)return e.dateRangePickerLanguages[n];return e.dateRangePickerLanguages["default"]}return a.language&&a.language in e.dateRangePickerLanguages?e.dateRangePickerLanguages[a.language]:e.dateRangePickerLanguages["default"]}function ae(t){var a=t.toLowerCase(),n=t in oe?oe[t]:a in oe?oe[a]:null,r=e.dateRangePickerLanguages["default"];return null==n&&(n=t in r?r[t]:a in r?r[a]:""),n}function ne(){var e=a.defaultTime?a.defaultTime:new Date;return a.lookBehind?(a.startDate&&L(e,a.startDate)<0&&(e=H(t(a.startDate).toDate())),a.endDate&&L(e,a.endDate)>0&&(e=t(a.endDate).toDate())):(a.startDate&&L(e,a.startDate)<0&&(e=t(a.startDate).toDate()),a.endDate&&L(H(e),a.endDate)>0&&(e=R(t(a.endDate).toDate()))),a.singleDate&&(a.startDate&&L(e,a.startDate)<0&&(e=t(a.startDate).toDate()),a.endDate&&L(e,a.endDate)>0&&(e=t(a.endDate).toDate())),e}function re(e){e||(e=ne()),a.lookBehind?(Y(R(e),"month1"),Y(e,"month2")):(Y(e,"month1"),Y(H(e),"month2")),a.singleDate&&Y(e,"month1"),S(),A()}a||(a={}),a=e.extend(!0,{autoClose:!1,format:"YYYY-MM-DD",separator:" to ",language:"auto",startOfWeek:"sunday",getValue:function(){return e(this).val()},setValue:function(t){e(this).attr("readonly")||e(this).is(":disabled")||t==e(this).val()||e(this).val(t)},startDate:!1,endDate:!1,time:{enabled:!1},minDays:0,maxDays:0,showShortcuts:!1,shortcuts:{},customShortcuts:[],inline:!1,container:"body",alwaysOpen:!1,singleDate:!1,lookBehind:!1,batchMode:!1,duration:200,stickyMonths:!1,dayDivAttrs:[],dayTdAttrs:[],selectForward:!1,selectBackward:!1,applyBtnClass:"",singleMonth:"auto",hoveringTooltip:function(e,t,a){return e>1?e+" "+ae("days"):""},showTopbar:!0,swapTime:!1,showWeekNumbers:!1,getWeekNumber:function(e){return t(e).format("w")},customOpenAnimation:null,customCloseAnimation:null,customArrowPrevSymbol:null,customArrowNextSymbol:null},a),a.start=!1,a.end=!1,a.startWeek=!1,a.isTouchDevice="ontouchstart"in window||navigator.msMaxTouchPoints,a.isTouchDevice&&(a.hoveringTooltip=!1),"auto"==a.singleMonth&&(a.singleMonth=e(window).width()<480),a.singleMonth&&(a.stickyMonths=!1),a.showTopbar||(a.autoClose=!0),a.startDate&&"string"==typeof a.startDate&&(a.startDate=t(a.startDate,a.format).toDate()),a.endDate&&"string"==typeof a.endDate&&(a.endDate=t(a.endDate,a.format).toDate());var se,ie,oe=te(),de=!1,le=this,ue=e(le).get(0);return e(this).unbind(".datepicker").bind("click.datepicker",function(e){var t=se.is(":visible");t||o(a.duration)}).bind("change.datepicker",function(e){d()}).bind("keyup.datepicker",function(){try{clearTimeout(ie)}catch(e){}ie=setTimeout(function(){d()},2e3)}),r.call(this),a.alwaysOpen&&o(0),e(this).data("dateRangePicker",{setStart:function(e){return"string"==typeof e&&(e=t(e,a.format).toDate()),a.end=!1,j(e),this},setEnd:function(e,n){var r=new Date;return r.setTime(a.start),"string"==typeof e&&(e=t(e,a.format).toDate()),O(r,e,n),this},setDateRange:function(e,n,r){"string"==typeof e&&"string"==typeof n&&(e=t(e,a.format).toDate(),n=t(n,a.format).toDate()),O(e,n,r)},clear:f,close:N,open:o,redraw:B,getDatePicker:i,resetMonthsView:re,destroy:function(){e(le).unbind(".datepicker"),e(le).data("dateRangePicker",""),e(le).data("date-picker-opened",null),se.remove(),e(window).unbind("resize.datepicker",s),e(document).unbind("click.datepicker",N)}}),e(window).bind("resize.datepicker",s),this}});
var _functions={};jQuery(function($){"use strict";var isTouchScreen=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i);if(isTouchScreen)$('html').addClass('touch-screen');if(navigator.userAgent.indexOf("Firefox")>=0){$('body').addClass('firefox');}
if(navigator.userAgent.indexOf('Edge')>=0){$('body').addClass('edge');}
if(navigator.userAgent.indexOf("Trident")>=0){$('body').addClass('ie');}
if(navigator.userAgent.indexOf('Safari')>=0&&navigator.userAgent.indexOf('Chrome')<0){$('body').addClass('safari');}
if(navigator.userAgent.indexOf('Chrome')>=0&&navigator.userAgent.indexOf('Edge')<0){$('body').addClass('chrome');}
var swipers=[],winW,winH,headerH=$('header').outerHeight(),winScr,$container,footerTop,_isresponsive,_ismobile=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i);_functions.pageCalculations=function(){winW=$(window).width();winH=$(window).height();};if(_ismobile){$('body').addClass('mobile');_functions.pageCalculations();}
pageScrolled();ratingStars();setTimeout(function(){$('#loader-wrapper').fadeOut(0);$('.SelectBox').SumoSelect();_functions.initSwiper();},100);_functions.resizeCall=function(){_functions.pageCalculations();};if(!_ismobile){$(window).resize(function(){_functions.resizeCall();});}else{window.addEventListener("orientationchange",function(){_functions.resizeCall();},false);}
$(window).scroll(function(){_functions.scrollCall();});_functions.scrollCall=function(){winScr=$(window).scrollTop();pageScrolled();};function pageScrolled(){if($(window).scrollTop()>headerH){$("header").addClass('scrolled');}else{$("header").removeClass('scrolled');}};var initIterator=0;_functions.initSwiper=function(){$('.swiper-container').not('.initialized').each(function(){var $t=$(this);var index='swiper-unique-id-'+initIterator;$t.addClass('swiper-'+index+' initialized').attr('id',index);$t.find('.swiper-pagination').addClass('swiper-pagination-'+index);$t.find('.swiper-button-prev').addClass('swiper-button-prev-'+index);$t.find('.swiper-button-next').addClass('swiper-button-next-'+index);var slidesPerViewVar=($t.data('slides-per-view'))?$t.data('slides-per-view'):1;if(slidesPerViewVar!='auto')slidesPerViewVar=parseInt(slidesPerViewVar,10);swipers['swiper-'+index]=new Swiper('.swiper-'+index,{pagination:'.swiper-pagination-'+index,paginationType:($t.is('[data-pagination-type]'))?($t.data('pagination-type'),10):'bullets',paginationClickable:true,nextButton:'.swiper-button-next-'+index,prevButton:'.swiper-button-prev-'+index,slidesPerView:slidesPerViewVar,autoHeight:($t.is('[data-auto-height]'))?parseInt($t.data('auto-height'),10):0,loop:($t.is('[data-loop]'))?parseInt($t.data('loop'),10):0,autoplay:($t.is('[data-autoplay]'))?parseInt($t.data('autoplay'),10):0,breakpoints:($t.is('[data-breakpoints]'))?{767:{slidesPerView:parseInt($t.attr('data-xs-slides'),10),direction:($t.is('[data-xs-direction]'))?$t.data('xs-direction'):'horizontal'},991:{slidesPerView:parseInt($t.attr('data-sm-slides'),10),direction:($t.is('[data-sm-direction]'))?$t.data('sm-direction'):'horizontal'},1199:{slidesPerView:parseInt($t.attr('data-md-slides'),10),direction:($t.is('[data-md-direction]'))?$t.data('md-direction'):'horizontal'}}:{},initialSlide:($t.is('[data-ini]'))?parseInt($t.data('ini'),10):0,speed:($t.is('[data-speed]'))?parseInt($t.data('speed'),10):500,keyboardControl:false,preloadImages:false,lazyLoading:true,parallax:($t.is('[data-parallax]'))?parseInt($t.data('parallax'),10):0,mousewheelControl:($t.is('[data-mousewheel]'))?parseInt($t.data('mousewheel'),10):0,mousewheelReleaseOnEdges:true,noSwipingClass:'no-swipe',direction:($t.is('[data-direction]'))?$t.data('direction'):'horizontal',spaceBetween:($t.is('[data-space-between]'))?parseInt($t.data('space-between'),10):0,centeredSlides:($t.is('[data-centered]'))?parseInt($t.data('centered'),10):0,effect:($t.is('[data-effect]'))?($t.data('effect'),'fade'):0,fade:{crossFade:true},onTransitionEnd:function(swiper){$t.find('.swiper-slide-current').text(swiper.activeIndex+1);},paginationFractionRender:function(swiper,currentClassName,totalClassName){if($t.parent().hasClass('swipers-wrapper')){return'<span class="'+currentClassName+'"></span><span class="'+totalClassName+'"></span>';}},onSlideChangeStart:function(swiper){if($t.hasClass('swiper-control-top')){var activeIndex=swiper.activeIndex,slidersWrapper=$t.closest('.swipers-wrapper');swipers['swiper-'+slidersWrapper.find('.swiper-control-bottom').attr('id')].slideTo(activeIndex);slidersWrapper.find('.swiper-control-bottom').find('.active').removeClass('active');slidersWrapper.find('.swiper-control-bottom').find('.swiper-slide').eq(activeIndex).addClass('active');}}});swipers['swiper-'+index].update();initIterator++;if($($t).find('.swiper-slide:not(.swiper-slide-duplicate)').length==1){$t.addClass('no-swipe');}
if($($t).hasClass('items-slider')&&$($t).find('.swiper-slide:not(.swiper-slide-duplicate)').length<4){$t.addClass('no-swipe');}});};$('.swiper-control-bottom .swiper-slide').on('click',function(){var index=$(this).index();swipers['swiper-'+$(this).closest('.swipers-wrapper').find('.swiper-control-top').attr('id')].slideTo(index);});var top_banner_slides=$('.swiper-control-top').find('.swiper-wrapper .swiper-slide').length;$('.swiper-slide-total').html(top_banner_slides);$('.lang').hover(function(){$(this).find('div').slideToggle();$(this).toggleClass('active');});$('.tel').hover(function(){$(this).find('div').slideToggle();$(this).toggleClass('active');});var video_wrapper=$('.youtube-video-place');if(video_wrapper.length){$('.play-youtube-video').on('click',function(){video_wrapper.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="'+video_wrapper.data('yt-url')+'"></iframe>');});}
$('#burger').on('click',function(){$('nav').addClass('active');$('html').addClass('overflow-menu');});$('#close-menu').on('click',function(){$('nav').removeClass('active');$('html').removeClass('overflow-menu');});$('#tel-button').on('click',function(){$('.tel-dropdown').addClass('active');$('html').addClass('overflow-menu');});$('#close-tel').on('click',function(){$('.tel-dropdown').removeClass('active');$('html').removeClass('overflow-menu');});$('.sidebar-wrap > span').on('click',function(){$(this).toggleClass('active').next().slideToggle(350);});$('.custom-menu-title > span, .custom-menu-title > a').on('click',function(e){if($(this).hasClass('h4')){if(winW<768)e.preventDefault();else return;}
$(this).parent().toggleClass('active').next().slideToggle(350);});$('.accordeon-title').click(function(){$(this).toggleClass('active');if($(this).hasClass('active')==true){$(this).next().slideDown(350);$('html, body').animate({scrollTop:$(this).offset().top-$('header').outerHeight()*1.35},600);return false;}else{$(this).next().slideUp(350);}});$('.price-tab').on('click',function(){var $tabMenuWrap=$('.price-nav'),$tabsWrapper=$('.price-tabs-wrapper'),$tabsMenu=$tabMenuWrap.find('.price-tab'),$tabsItem=$tabsWrapper.find('.price-tab-info'),$index=$tabsMenu.index(this);$($tabsItem).eq($index).addClass('active').siblings().removeClass('active');$(this).addClass('active').siblings().removeClass('active');});$(document).on('focus','.form input:not([type="file"]), .form textarea',function(){$(this).parent().parent().addClass('active');});$(document).on('blur','.form input:not([type="file"]), .form textarea',function(){$(this).parent().parent().removeClass('active');});$(document).on('change','.form input:not([type="file"]), .form textarea',function(){if($(this).val()){$(this).closest('label').addClass('hide-pl');}else{$(this).closest('label').removeClass('hide-pl');}});$(document).on('click','.open-popup',function(){$('.popup-content').removeClass('active');$('.popup-wrapper, .popup-content[data-rel="'+$(this).data('rel')+'"]').addClass('active');$('html').addClass('overflow-hidden');return false;});$(document).on('click','.popup-wrapper .button-close, .popup-wrapper .layer-close',function(){$('.popup-wrapper, .popup-content').removeClass('active');$('html').removeClass('overflow-hidden');$('input[name="daterange"]').data('dateRangePicker').close();setTimeout(function(){$('.ajax-popup').remove();},300);return false;});var tabFinish=0;$('.nav-tab-item:not(.not-a-tab)').on('click',function(){var $t=$(this);if(tabFinish)return false;if(!$t.hasClass('active')){tabFinish=1;$t.closest('.nav-tab').find('.nav-tab-item').removeClass('active');$t.addClass('active');var index=$t.parent().parent().find('.nav-tab-item').index(this);$t.parents('.tab-nav-wrapper').find('.tab-select select option:eq('+index+')').prop('selected',true);$t.closest('.tab-wrapper').find('.tabs-content').first().children('.tab-info:visible').fadeOut(300,function(){var $tabActive=$t.closest('.tab-wrapper').find('.tabs-content').first().children('.tab-info').eq(index);$tabActive.css('display','block').css('opacity','0');tabReinit($tabActive.parents('.tab-wrapper'));$tabActive.animate({opacity:1});tabFinish=0;});}else{tabFinish=0;}
if(winW<768){$('html, body').animate({scrollTop:$('.nav-tab.item-tabs').offset().top-10},300);}});$('.tab-select').on('click',function(e){$(this).parent('.tab-nav-wrapper').find('.select-arrow').toggleClass('icon-change');e.preventDefault();});function tabReinit($tab){$tab.find('.swiper-container').each(function(){var thisSwiper=swipers['swiper-'+$(this).attr('id')];thisSwiper.update();});}
$('.nav-tab-item.not-a-tab').on('click',function(){$('.tab-info, .nav-tab-item').first().addClass('active');$('.tab-info, .nav-tab-item').first().siblings().removeClass('active');$('.tab-info').first().fadeIn(300);$('.tab-info').first().siblings().fadeOut(300);});$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top-$('header').outerHeight()},1000);return false;}}});});function ratingStars(){if($('.stars').length){$('.stars').each(function(i){let c_stars=$(this);let index=$(this).find('a.active').index();$(c_stars).find('a').each(function(i){if($(this).index()<index){$(this).addClass('orange');}else if($(this).index()==index){$(this).addClass('orange');}else{$(this).removeClass('orange');}});});}}
$('.stars a').hover(function(){$(this).addClass('hover');let c_stars=$(this).closest('.stars');$(c_stars).find('a').each(function(){if($(this).index()<$(c_stars).find('a.hover').index()){$(this).addClass('orange');}else{$(this).removeClass('orange');}});});$('.stars a').mouseleave(function(){$(this).removeClass('hover');ratingStars();});$(document).ready(function(){$(".fancy").each(function(){$(this).replaceWith('<a class="fancybox" href="'+$(this).attr('src')+'">'+$(this)[0].outerHTML+'</a>');}).promise().done(function(){$('.fancybox').fancybox();});});function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
jQuery('.lang>div>a').click(function(event){event.preventDefault();setCookie("qtrans_front_language",jQuery(this).data('lang'));document.location.href=$(this).attr('href');});});
(function($){$(document).on('click','.vote-block a',function(){var $el=$(this);var id=$el.parent().parent().data('id');var total=$el.parent().parent().data('total');var rating=$el.parent().parent().data('rating');var num=parseInt($el.text(),10);if($el.parent().parent().hasClass('disabled')){return false;}
$.post(ajaxurl,{action:'vote_rating',id:id,num:num}).done(function(data){let pr=data.pr;let total=data.total;let abs=data.abs;let npr=data.npr;let text=data.text;if(pr==='limit'){return false;}else{$el.parent().parent().addClass('disabled');$.cookie('vote-post-'+id,true,{expires:7,path:'/'});let star_count=Math.round(pr/20);let j=1;$el.parent().find('a').each(function(i){if(j<=star_count)$(this).addClass('orange rated');if(j==star_count)$(this).addClass('active');j++;});$($el).closest('.ratings').find('.legend').text(abs+' '+'('+npr+'%) '+text);}}).fail(function(response){});return false;});})(jQuery);function decOfNum(number,titles){cases=[2,0,1,1,1,2];return titles[(number%100>4&&number%100<20)?2:cases[(number%10<5)?number%10:5]];}
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}
function o(e){return u.raw?e:decodeURIComponent(e)}
function i(e){return n(u.json?JSON.stringify(e):e+"")}
function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"))
try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}
function t(n,o){var i=u.raw?n:r(n)
return e.isFunction(o)?o(i):i}
var c=/\+/g,u=e.cookie=function(r,c,a){if(arguments.length>1&&!e.isFunction(c)){if(a=e.extend({},u.defaults,a),"number"==typeof a.expires){var f=a.expires,s=a.expires=new Date
s.setTime(+s+864e5*f)}
return document.cookie=n(r)+"="+i(c)+(a.expires?"; expires="+a.expires.toUTCString():"")+(a.path?"; path="+a.path:"")+(a.domain?"; domain="+a.domain:"")+(a.secure?"; secure":"")}
for(var d=r?void 0:{},p=document.cookie?document.cookie.split("; "):[],m=0,x=p.length;x>m;m++){var l=p[m].split("="),k=o(l.shift()),v=l.join("=")
if(r&&r===k){d=t(v,c)
break}
r||void 0===(v=t(v))||(d[k]=v)}
return d}
u.defaults={},e.removeCookie=function(n,o){return void 0===e.cookie(n)?!1:(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});
jQuery(function($){"use strict";$(document).on('focus','.wpcf7-not-valid',function(){$(this).removeClass('wpcf7-not-valid');});$(document).on('change','select.wpcf7-not-valid',function(){$(this).removeClass('wpcf7-not-valid');});if('.gallery'){function changeAltLightBox(_this){const _simpleLB=$('.simple-lightbox').find('img');if(_simpleLB){return _simpleLB.attr('alt',_this.attr('title'));}}
$('.single-page-image-link').on('changed.simplelightbox',function(e){changeAltLightBox($(this));})
$('.single-page-image-link').on('click',function(e){changeAltLightBox($(this));})}
$('#comm-submit').click(function(e){$(this).closest('form').find('input[name="post_id"]').val($('#POST_ID').val());$(this).closest('form').find('input[type="submit"]').click();});document.addEventListener('wpcf7mailsent',function(event){let form=$(event.srcElement).find('form');if(form.hasClass('comment-form')){$(form).find('label').removeClass('hide-pl');$('.popup-wrapper, .popup-content[data-rel="33"]').addClass('active');$('html').addClass('overflow-hidden');return false;}
if(form.hasClass('get_call')){$('.popup-content.active').removeClass('active');$(form).find('label').removeClass('hide-pl');$('.popup-wrapper, .popup-content[data-rel="3"]').addClass('active');$('html').addClass('overflow-hidden');return false;}
if(form.hasClass('booking')){$('.popup-content.active').removeClass('active');$('.layer-close').click();$(form).find('label').removeClass('hide-pl');$('.popup-wrapper, .popup-content[data-rel="6"]').addClass('active');$('html').addClass('overflow-hidden');$('select[name="adults"]')[0].sumo.selectItem(1);$('select[name="children"]')[0].sumo.selectItem(1);$('input[name="daterange"]').data('dateRangePicker').clear();return false;}},false);$('#load_more').click(function(e){let j=0;$('.row.dinamyc').find('div.c_item:hidden').each(function(i){if(j<=8){$(this).fadeIn();}
j++;});if($('.row.dinamyc').find('div.c_item:hidden').length==0){$('#load_more').hide();}});$('div[data-scroll*="#"]').click(function(){var target=$($(this).data('scroll'));target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top},1000);}
return false;});$(window).on('load',function(){if($('.reservation').length){$('select[name="children"] option:first-child').text(travel.children).prop('disabled',true);$('select[name="adults"] option:first-child').text(travel.adults).prop('disabled',true);$('select[name="adults"]')[0].sumo.reload();$('select[name="children"]')[0].sumo.reload();}});if($('#searchCalendar').length){$.dateRangePickerLanguages['ua']={selected:"Обрано:",day:"День",days:"Днів",apply:"Застосувати","week-1":"пн","week-2":"вт","week-3":"ср","week-4":"чт","week-5":"пт","week-6":"сб","week-7":"нд","month-name":["січень","лютий","Березень","квітень","травень","червень","липня","Серпень","вересень","жовтень","листопад","грудень"],shortcuts:"Швидкий вибір","custom-values":"Призначені для користувача значення",past:"Минулі",following:"Наступні",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Тиждень","prev-month":"Місяць","prev-year":"Рік",next:"&nbsp;&nbsp;&nbsp;","next-week":"Тиждень","next-month":"Місяць","next-year":"Рік","less-than":"Діапазон не може бути більше %d днів","more-than":"Діапазон не може бути менше %d днів","default-more":"Будь ласка виберіть діапазон більше %d днів","default-single":"Будь ласка виберіть дату","default-less":"Будь ласка виберіть діапазон менше %d днів","default-range":"Будь ласка виберіть діапазон між %d і %d днями","default-default":"Будь ласка виберіть діапазон",time:"Час",hour:"Годинники",minute:"Хвилини"};$('input[name="daterange"]').prop('readonly',true).dateRangePicker({format:'DD-MM-YYYY',separator:' - ',language:travel.lang,startDate:travel.minDate,startOfWeek:'monday',singleDate:false,singleMonth:false,setValue:function(s){if(!$(this).is(':disabled')&&s!=$(this).val()){$(this).val(s);}}}).bind('datepicker-change',function(e,obj){$(e.target).change();});}
const buttonClick=(event,buttonName)=>{const maxCount=9;let counter=0;let _buttonLoading=false;$(buttonName).click(function(){const _thisButton=$(this);_thisButton.addClass('sanatorium_loading');let data={'action':event,'count':counter,'page_id':ajaxGet.page_id,};if(!_buttonLoading){_buttonLoading=true;$.ajax({url:ajaxurl,data:data,type:'POST',success:function(data){const result=JSON.parse(data);_thisButton.removeClass('sanatorium_loading');if(result.contents){counter+=maxCount;if(!result.more){_thisButton.remove();}
_buttonLoading=false;return $('#true_loadmore_content').append(result.contents);}
return false;}});}});}
if($("#true_loadmore")){buttonClick('loadmore_catalog','#true_loadmore');}
if($("#true_loadmore_sanatorium")){buttonClick('loadmore_catalog_sanatorium','#true_loadmore_sanatorium');}});
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);