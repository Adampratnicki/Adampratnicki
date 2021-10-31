(function(e) {
    function t(t) {
        for (var c, o, s = t[0], i = t[1], l = t[2], u = 0, h = []; u < s.length; u++) o = s[u], Object.prototype.hasOwnProperty.call(n, o) && n[o] && h.push(n[o][0]), n[o] = 0;
        for (c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
        d && d(t);
        while (h.length) h.shift()();
        return a.push.apply(a, l || []), r()
    }

    function r() {
        for (var e, t = 0; t < a.length; t++) {
            for (var r = a[t], c = !0, s = 1; s < r.length; s++) {
                var i = r[s];
                0 !== n[i] && (c = !1)
            }
            c && (a.splice(t--, 1), e = o(o.s = r[0]))
        }
        return e
    }
    var c = {},
        n = {
            app: 0
        },
        a = [];

    function o(t) {
        if (c[t]) return c[t].exports;
        var r = c[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.m = e, o.c = c, o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var c in e) o.d(r, c, function(t) {
                return e[t]
            }.bind(null, c));
        return r
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        i = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var l = 0; l < s.length; l++) t(s[l]);
    var d = i;
    a.push([0, "chunk-vendors"]), r()
})({
    0: function(e, t, r) {
        e.exports = r("56d7")
    },
    "0019": function(e, t, r) {
        e.exports = "img/typehere.c12dfff2.svg"
    },
    "02fd": function(e, t, r) {
        var c = {
            "./arrow-down.svg": "b264",
            "./arrow-left-carousel--black.svg": "5a2e",
            "./arrow-left-carousel.svg": "a9d5",
            "./arrow-right-carousel--black.svg": "0aee",
            "./arrow-right-carousel.svg": "0ad1",
            "./arrow-right.svg": "fed4",
            "./block-star.svg": "9c78",
            "./boldare-white.svg": "9064",
            "./givemetime.svg": "e92b",
            "./hand1.svg": "b5f5",
            "./hand2.svg": "5eb5",
            "./hand3.svg": "a454",
            "./handshake.svg": "b725",
            "./hero-bg.svg": "c475",
            "./hipnoza.svg": "e30b",
            "./icon-like.svg": "2b11",
            "./icon-settings.svg": "4529",
            "./icon-timer.svg": "fabe",
            "./letsvote.svg": "261b",
            "./like.svg": "b523",
            "./logo.svg": "68cb",
            "./merge.svg": "41c8",
            "./minus.svg": "bdc3",
            "./move.svg": "9526",
            "./pause.svg": "4414",
            "./plus.svg": "9285",
            "./rotate-cursor-black.svg": "44b2",
            "./rotate-cursor-white.svg": "45f4",
            "./scroll-background.svg": "9b0c",
            "./scroll-icon.svg": "5aa6",
            "./scroll-inner.svg": "fa54",
            "./stop.svg": "78e3",
            "./trash.svg": "b8e3",
            "./tryme.svg": "71c7",
            "./typehere.svg": "5dec",
            "./user.svg": "44a5"
        };

        function n(e) {
            var t = a(e);
            return r(t)
        }

        function a(e) {
            if (!r.o(c, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return c[e]
        }
        n.keys = function() {
            return Object.keys(c)
        }, n.resolve = a, e.exports = n, n.id = "02fd"
    },
    "0551": function(e, t, r) {
        e.exports = r.p + "img/cursor-pencil.de8bbe09.png"
    },
    "069c": function(e, t, r) {
        e.exports = "img/hero-modern-computer.07f88430.png"
    },
    "08c9": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "0ad1": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=117 height=95 viewBox="0 0 117 95"> <defs> <filter id=8fwqe7adjb width=106.8% height=109.3% x=-3.1% y=-4.6% filterUnits=objectBoundingBox> <feGaussianBlur in=SourceAlpha result=shadowBlurInner1 stdDeviation=1.5 /> <feOffset dy=1 in=shadowBlurInner1 result=shadowOffsetInner1 /> <feComposite in=shadowOffsetInner1 in2=SourceAlpha k2=-1 k3=1 operator=arithmetic result=shadowInnerInner1 /> <feColorMatrix in=shadowInnerInner1 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/> </filter> <path id=but8fx2rea d="M1700.672 728L1684.756 743.859 1702.204 761.258 1633 761.258 1633 783.745 1702.204 783.745 1684.756 801.141 1700.672 817 1745 772.5z"/> </defs> <g fill=none fill-rule=evenodd transform="translate(-1631 -725)"> <use fill=#FFF xlink:href=#but8fx2rea /> <use fill=#000 filter=url(#8fwqe7adjb) xlink:href=#but8fx2rea /> <use stroke=#000 stroke-width=3 xlink:href=#but8fx2rea /> </g> </svg> ';
        e.exports = r
    },
    "0aee": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=117 height=95 viewBox="0 0 117 95"> <path fill-rule=evenodd stroke=#000 stroke-width=3 d="M1697.672 736L1681.756 751.859 1699.204 769.258 1630 769.258 1630 791.745 1699.204 791.745 1681.756 809.141 1697.672 825 1742 780.5z" transform="translate(-1628 -733)"/> </svg> ';
        e.exports = r
    },
    "0d16": function(e, t, r) {
        "use strict";
        r("ad1a")
    },
    1182: function(e, t, r) {
        "use strict";
        r("96f2")
    },
    1499: function(e, t, r) {
        "use strict";
        r("2220")
    },
    "14e1": function(e, t, r) {
        "use strict";
        r("320f")
    },
    1545: function(e, t, r) {
        "use strict";
        r("d027")
    },
    "17e4": function(e, t, r) {
        e.exports = "img/garage.6d1438e6.png"
    },
    "186b": function(e, t, r) {
        e.exports = "img/icon-timer.4f5a266a.svg"
    },
    "1a53": function(e, t, r) {
        e.exports = "img/icon-like.7a1973f1.svg"
    },
    "1b3d": function(e, t, r) {},
    "1c7a": function(e, t, r) {},
    "21fa": function(e, t, r) {
        "use strict";
        r("de64")
    },
    2220: function(e, t, r) {},
    "261b": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=184 height=184 viewBox="0 0 184 184"> <defs> <path id=tzhmzr3jla d="M0.095 0L183.945 0 183.945 184 0.095 184z"/> <path id=xqib1n4c4c d="M1.57.058L.936.975H.119v1.906h2.47l.348-.61.005-.008V.975h-.688V.058h-.685zm-.462 1.065l.58-.84h.341v.916h.688v1.005l-.258.452H1.108V1.123zM.343 2.656h.54V1.2h-.54v1.457z"/> </defs> <g fill=none fill-rule=evenodd> <path fill=#E0DCFA d="M182.069 92c0 49.773-40.317 90.123-90.05 90.123-49.732 0-90.048-40.35-90.048-90.123S42.287 1.878 92.02 1.878c49.732 0 90.049 40.349 90.049 90.122"/> <mask id=x2mwxfr5gb fill=#fff> <use xlink:href=#tzhmzr3jla /> </mask> <path fill=#000 d="M92.02 3.755c-11.904 0-23.451 2.333-34.32 6.934-10.5 4.445-19.93 10.808-28.028 18.913-8.098 8.104-14.456 17.542-18.897 28.05C6.178 68.53 3.847 80.086 3.847 92c0 11.914 2.33 23.47 6.928 34.348 4.441 10.508 10.799 19.946 18.897 28.05 8.098 8.106 17.528 14.469 28.027 18.913 10.87 4.601 22.417 6.934 34.32 6.934 11.905 0 23.452-2.333 34.321-6.934 10.5-4.444 19.93-10.807 28.027-18.912 8.099-8.105 14.457-17.543 18.897-28.05 4.598-10.879 6.929-22.435 6.929-34.349 0-11.914-2.331-23.47-6.929-34.348-4.44-10.508-10.798-19.946-18.897-28.05-8.098-8.105-17.527-14.468-28.027-18.913-10.87-4.601-22.416-6.934-34.32-6.934m0 180.245c-12.41 0-24.448-2.433-35.782-7.23-10.947-4.634-20.777-11.268-29.219-19.716-8.442-8.449-15.07-18.287-19.7-29.243C2.527 116.468.096 104.42.096 92.001c0-12.42 2.43-24.469 7.225-35.812 4.63-10.955 11.257-20.794 19.7-29.243 8.44-8.448 18.271-15.082 29.218-19.715C67.572 2.433 79.61 0 92.02 0c12.409 0 24.447 2.432 35.782 7.23 10.946 4.633 20.777 11.267 29.219 19.715 8.441 8.449 15.07 18.288 19.699 29.243 4.794 11.343 7.225 23.392 7.225 35.811 0 12.42-2.431 24.468-7.225 35.811-4.63 10.956-11.258 20.794-19.7 29.243-8.441 8.448-18.272 15.082-29.218 19.715C116.467 181.567 104.429 184 92.02 184" mask=url(#x2mwxfr5gb) /> <path fill=#F1D624 d="M85.847 65.857L93.07 52.539 100.294 65.857 113.203 57.938 112.805 73.086 127.94 72.688 120.028 85.608 133.335 92.837 120.028 100.066 127.94 112.985 112.805 112.587 113.203 127.735 100.294 119.817 93.07 133.134 85.847 119.817 72.938 127.735 73.336 112.587 58.2 112.985 66.113 100.066 52.806 92.837 66.113 85.607 58.2 72.688 73.336 73.086 72.938 57.938z"/> <path fill=#000 d="M86.27 118.236l6.8 12.537 6.8-12.537 12.153 7.454-.374-14.26 14.248.375-7.449-12.163 12.527-6.805-12.527-6.806 7.45-12.162-14.25.375.375-14.26-12.153 7.454-6.8-12.537-6.8 12.537-12.152-7.455.374 14.26-14.248-.374 7.448 12.162-12.527 6.806 12.527 6.805-7.448 12.163 14.248-.375-.374 14.26 12.152-7.454zm6.8 17.26l-7.646-14.098-13.665 8.382.42-16.035-16.022.421 8.376-13.676-14.086-7.653 14.086-7.653-8.376-13.677 16.022.422-.42-16.036 13.665 8.383 7.646-14.098 7.647 14.098 13.665-8.383-.42 16.036 16.022-.422-8.376 13.677 14.086 7.653-14.086 7.653 8.376 13.676-16.023-.421.421 16.035-13.665-8.382-7.647 14.097zM110.717 18.826L114.149 19.824 109.341 36.391 113.941 37.728 113.256 40.088 105.224 37.753zM122.909 22.86L130.342 26.481 129.235 28.756 125.016 26.701 122.537 31.798 125.859 33.417 124.763 35.671 121.44 34.052 118.578 39.937 122.841 42.014 121.766 44.224 114.289 40.581zM134.438 32.278L131.891 30.447 133.436 28.292 141.395 34.012 139.849 36.166 137.361 34.378 127.419 48.233 124.497 46.132zM140.436 40.741c.4.354.806.456 1.214.305.408-.151.894-.528 1.46-1.132l-1.083-1.015 2.144-2.29 2.307 2.162-1.729 1.847c-.988 1.007-1.857 1.621-2.606 1.84-.75.22-1.485.003-2.206-.65l.499-1.067zM135.743 54.12c.234-1.318 1.104-2.632 2.611-3.94l2.403 2.034c-.945.818-1.565 1.567-1.86 2.25-.296.683-.21 1.316.255 1.899.344.43.73.646 1.156.648.427.002.861-.175 1.305-.53.607-.486 1.014-1.034 1.221-1.646.207-.612.33-1.412.372-2.4l.142-3.29c.03-1.001.218-1.884.563-2.647.344-.764.922-1.47 1.732-2.118 1.203-.962 2.418-1.357 3.644-1.186 1.227.172 2.336.878 3.327 2.12 1.063 1.331 1.447 2.586 1.155 3.765-.293 1.18-1.044 2.325-2.252 3.436l-2.345-2.08c.805-.706 1.341-1.327 1.609-1.863.267-.536.173-1.088-.282-1.659-.324-.406-.713-.613-1.168-.624-.454-.01-.89.152-1.308.486-.494.395-.83.825-1.009 1.29-.179.465-.28 1.07-.306 1.818l-.157 3.272c-.044 1.219-.259 2.314-.644 3.287-.385.973-1.046 1.834-1.983 2.583-.735.588-1.516.947-2.343 1.08-.828.133-1.636.037-2.425-.288-.788-.325-1.486-.867-2.093-1.628-1.113-1.394-1.553-2.75-1.32-4.068M161.644 59.71L162.799 62.655 150.782 70.174 164.648 67.366 165.83 70.378 146.05 73.89 144.761 70.605zM151.924 84.847c.54.19 1.283.208 2.226.053l8.95-1.47c.943-.154 1.633-.403 2.07-.746.436-.343.59-.915.458-1.715-.131-.8-.463-1.297-.996-1.489-.532-.192-1.262-.212-2.19-.06l-8.95 1.47c-.943.155-1.64.41-2.091.763-.452.354-.612.93-.48 1.731.128.784.462 1.272 1.003 1.463m-2.708-5.622c.938-1.041 2.447-1.733 4.526-2.074l7.294-1.198c2.063-.339 3.694-.163 4.89.528 1.198.691 1.962 2.045 2.293 4.062.328 2.001.035 3.52-.879 4.558-.914 1.038-2.402 1.727-4.466 2.065l-7.293 1.198c-2.064.339-3.711.161-4.942-.532-1.23-.694-2.008-2.034-2.334-4.019-.33-2.017-.027-3.546.911-4.588M166.372 93.642L166.48 90.505 169.129 90.596 168.792 100.397 166.144 100.306 166.249 97.241 149.215 96.655 149.339 93.056zM168.155 104.81L166.456 112.907 163.981 112.386 164.946 107.79 159.402 106.624 158.642 110.244 156.191 109.729 156.951 106.109 150.551 104.763 149.576 109.407 147.173 108.901 148.883 100.757zM150.286 142.937L147.808 145.515 135.386 133.554 132.065 137.008 130.295 135.304 136.094 129.272zM141.039 151.875L134.376 156.772 132.88 154.732 136.662 151.952 133.309 147.382 130.33 149.571 128.848 147.551 131.827 145.362 127.956 140.086 124.134 142.895 122.681 140.913 129.383 135.988zM127.312 157.704L130.121 156.307 131.3 158.682 122.526 163.047 121.346 160.672 124.09 159.307 116.504 144.032 119.726 142.429zM117.039 159.05c-.5.189-.78.5-.836.931-.058.432.049 1.039.318 1.821l1.402-.484 1.023 2.968-2.988 1.03-.825-2.392c-.429-1.344-.565-2.4-.409-3.166.156-.766.691-1.315 1.605-1.648l.71.94zM107.405 148.65c1.058.82 1.815 2.203 2.271 4.147l-2.917 1.182c-.284-1.218-.658-2.116-1.125-2.695-.466-.58-1.065-.798-1.798-.658-.54.105-.911.345-1.111.723-.2.377-.246.844-.14 1.402.148.764.444 1.38.889 1.848.445.468 1.095.95 1.95 1.446l2.843 1.657c.871.493 1.564 1.07 2.079 1.731.515.66.87 1.5 1.066 2.52.292 1.514.076 2.774-.647 3.78-.722 1.007-1.863 1.66-3.424 1.96-1.67.323-2.96.079-3.866-.73-.907-.807-1.57-2.005-1.991-3.593l2.93-1.11c.25 1.043.55 1.807.9 2.293.35.486.882.66 1.598.522.51-.098.875-.346 1.095-.744.22-.397.28-.859.18-1.384-.12-.622-.343-1.12-.672-1.494-.327-.375-.816-.747-1.465-1.118l-2.82-1.662c-1.058-.606-1.927-1.306-2.608-2.1-.68-.794-1.134-1.78-1.361-2.959-.178-.924-.132-1.783.136-2.578.267-.795.729-1.466 1.383-2.014.654-.547 1.458-.913 2.413-1.096 1.751-.338 3.155-.096 4.212.724M90.408 169.004L87.266 168.658 86.206 154.514 82.24 168.104 79.026 167.749 85.121 148.592 88.625 148.979zM72.706 148.682c-.421.388-.784 1.037-1.088 1.944l-2.884 8.605c-.305.907-.408 1.634-.308 2.18.098.548.532.95 1.3 1.208.769.258 1.362.196 1.78-.185.42-.382.778-1.019 1.077-1.91l2.885-8.605c.304-.908.405-1.644.304-2.208-.101-.565-.536-.976-1.305-1.234-.752-.253-1.34-.185-1.761.205m6.231.231c.482 1.317.388 2.975-.283 4.974l-2.35 7.013c-.666 1.984-1.583 3.344-2.753 4.08-1.17.737-2.724.78-4.66.13-1.92-.645-3.126-1.614-3.616-2.908-.489-1.294-.401-2.933.264-4.916l2.35-7.013c.666-1.984 1.593-3.359 2.781-4.123 1.188-.765 2.735-.827 4.64-.187 1.936.65 3.145 1.633 3.627 2.95M58.511 157.501L61.258 159.014 59.981 161.338 51.397 156.61 52.674 154.286 55.358 155.764 63.575 140.82 66.728 142.557zM47.512 153.745L41.14 148.475 42.751 146.524 46.368 149.516 49.977 145.146 47.128 142.79 48.723 140.858 51.572 143.214 55.739 138.168 52.084 135.146 53.648 133.251 60.058 138.553zM22.118 120.133L20.998 116.736 37.367 111.327 35.865 106.775 38.197 106.005 40.819 113.953zM18.54 107.811L17.308 99.63 19.808 99.252 20.508 103.896 26.11 103.051 25.559 99.394 28.035 99.02 28.586 102.677 35.053 101.701 34.346 97.009 36.774 96.643 38.014 104.872zM19.765 92.947L19.696 96.085 17.047 96.027 17.261 86.223 19.91 86.281 19.843 89.347 36.883 89.72 36.804 93.32zM23.35 83.208c.066-.532-.08-.923-.434-1.175-.356-.251-.942-.44-1.759-.565l-.225 1.467-3.1-.476.48-3.127 2.499.384c1.389.246 2.386.617 2.99 1.111.605.496.842 1.225.71 2.19l-1.16.19zM37.032 79.516c-1.219.553-2.794.577-4.724.072l.319-3.133c1.208.317 2.177.406 2.906.263.73-.141 1.203-.57 1.42-1.283.161-.528.122-.968-.118-1.321s-.63-.612-1.174-.778c-.744-.227-1.426-.253-2.047-.078-.621.175-1.35.525-2.188 1.05l-2.794 1.742c-.842.54-1.675.884-2.5 1.03-.823.148-1.732.07-2.724-.233-1.473-.45-2.485-1.23-3.037-2.339-.552-1.11-.596-2.424-.133-3.945.497-1.63 1.314-2.656 2.452-3.08 1.137-.425 2.506-.453 4.104-.084l-.388 3.113c-1.038-.266-1.853-.358-2.446-.276-.592.082-.995.472-1.208 1.17-.151.497-.102.936.146 1.317.248.38.628.65 1.14.806.604.184 1.149.219 1.633.103.484-.115 1.041-.372 1.672-.774l2.786-1.72c1.029-.652 2.053-1.094 3.073-1.325 1.02-.232 2.103-.173 3.25.177.9.275 1.637.716 2.215 1.325.576.608.954 1.33 1.132 2.164.178.835.125 1.718-.159 2.648-.52 1.708-1.389 2.837-2.608 3.39M26.983 54.998L28.752 52.377 41.753 58.022 31.582 48.182 33.392 45.501 47.495 59.818 45.521 62.742zM53.19 48.772c-.148-.554-.553-1.177-1.214-1.868l-6.272-6.557c-.661-.69-1.256-1.12-1.786-1.286-.53-.167-1.087.03-1.672.591-.586.562-.807 1.116-.664 1.664.143.549.54 1.162 1.19 1.842l6.27 6.556c.662.691 1.266 1.123 1.813 1.296.546.172 1.112-.022 1.697-.583.574-.55.787-1.101.638-1.655m-3.101 5.413c-1.389-.185-2.812-1.039-4.27-2.562l-5.11-5.344c-1.446-1.511-2.223-2.957-2.33-4.336-.108-1.38.576-2.775 2.051-4.189 1.463-1.402 2.881-2.02 4.253-1.852 1.372.168 2.781 1.007 4.227 2.519l5.112 5.343c1.446 1.512 2.23 2.972 2.355 4.38.124 1.409-.54 2.808-1.992 4.199-1.475 1.413-2.907 2.028-4.296 1.842M52.288 31.869L49.64 33.55 48.221 31.311 56.495 26.058 57.914 28.298 55.327 29.94 64.456 44.345 61.417 46.273zM60.481 24.1L68.116 20.927 69.085 23.264 64.752 25.065 66.924 30.301 70.337 28.883 71.297 31.197 67.884 32.616 70.392 38.661 74.771 36.841 75.713 39.111 68.033 42.303z"/> <g transform="translate(158 83)"> <mask id=s15gnpix8d fill=#fff> <use xlink:href=#xqib1n4c4c /> </mask> <path fill=#000 d="M-0.562 3.562L3.623 3.562 3.623 -0.623 -0.562 -0.623z" mask=url(#s15gnpix8d) /> </g> <path fill=#FFF d="M86 85.69L94.141 74 100.146 74.495 100.757 85.69 109 85.69 108.288 99.461 104.42 106 86 105.604z"/> <path fill=#000 d="M86.907 104.297V85.819l6.984-10.118h4.123v11.047h8.283v12.098l-3.115 5.45H86.907zm-9.204 0h6.504V86.748h-6.504v17.549zm23.014-20.252V73h-8.245l-7.625 11.045H75V107h29.752l4.191-7.336.057-.099v-15.52h-8.283z"/> <path fill=#FFF d="M78 104L84 104 84 87 78 87z"/> </g> </svg> ';
        e.exports = r
    },
    "26bd": function(e, t, r) {},
    "276f": function(e, t, r) {
        "use strict";
        r("e972")
    },
    2917: function(e, t, r) {
        e.exports = "img/meeting.b7b7e8a9.png"
    },
    "29d6": function(e, t, r) {
        "use strict";
        r("ca7e")
    },
    "2b11": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=44 height=44 viewBox="0 0 44 44"> <g fill=none fill-rule=evenodd> <path fill=#FFF stroke=#000 stroke-width=3 d="M0 0H40V40H0z" transform="translate(2 2) rotate(90 20 20)"/> <path fill=#000 d="M20.818 7l-5.157 7.473H9V30h20.124l2.838-4.961.038-.068V14.473h-5.605V7h-5.577zM17 15.723L21.683 9h2.762v7.339H30v8.04L27.912 28H17V15.723zM11 28h4V16h-4v12z" transform="translate(2 2)"/> <path stroke=#000 stroke-width=.5 d="M17 28V15.723L21.683 9h2.764v7.34H30v8.038L27.912 28H17zm-6 0h4V16h-4v12zm15.397-13.528V7H20.82l-5.158 7.472H9V30h20.126l2.836-4.963.038-.066v-10.5h-5.603z" transform="translate(2 2)"/> </g> </svg> ';
        e.exports = r
    },
    "2bf4": function(e, t, r) {
        "use strict";
        r("83dd")
    },
    "320f": function(e, t, r) {},
    3234: function(e, t, r) {
        e.exports = "img/dog.852159d2.png"
    },
    3326: function(e, t, r) {
        e.exports = r.p + "img/givemetime.982e32cd.svg"
    },
    3555: function(e, t, r) {},
    "36ce": function(e, t, r) {
        "use strict";
        r("950f")
    },
    3756: function(e, t, r) {
        "use strict";
        r("b8c4")
    },
    "3a51": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAABSCAYAAAAxZQYDAAAAAXNSR0IArs4c6QAABI5JREFUaAXtWktLXUkQLjXGx/ggDigDYrh3oWAUiRp8javoVjeGIbqTyKzm9yhGVAIukoXZ6MpxUHBcKbgadDBXkSxGBM34CBeN9tR3xu57unJzHnpXoQs+uqqrqrtOVZ8rp608InrAqGXEoWs2PmRcCqcfWP6RkS/mw8SPMEgwVEyk2X6S0ckoZNQxfmG8ZyC4uOshhjsFojf6l/1/Z/zF0HN3GRMoi6GCggKqqakx8reY8/NzOj09hbqC8VzbFRUVUVVVFeXl5empb46Hh4d0fY0KZ8iUJpFIqCi0urqqBgYGVGVlpff0hYWFqqenR83Ozqp0Oh1lCYW9OAQNuzRRA8FONzc3amlpSQ0NDamZmRl1cXERKQBtJAOxSoNUHR0dZXLFXH5+PiHlAD+50SH9fX191NHRQeXl5WaeN/LKdnkpXyhj4jGyLCgm0pLSZjgnfiorK6OmpiZqbGyk+vp6SiaT1N7eTnV1eFFs2tvbo+npaZqfn6ednR1bKSQRSBJqc0aY1zULHBsaGtTCwoLOsjfyAVaDg4OBfgHre2fkMRscB+AT6z4zvjDMRt3d3erk5MQEs7+/r3Bo/TbMoz54vYLWhw4xEMrzMACPWPcz4zfGGwaC8jZMpVImEPB6/tbmNY8vGahh0PrQIYbY9IE9wgKBTSyK+zcBi0eJPoqNFehdArEWyJXgApGZdBlxGZEZkLI7Iy4jMgNSdmfEZURmQMrujLiMyAxI2Z2R7yojN/JpsshRbCw36zbA0vwvtPPwq5ivFnI2ETb40tO0ycyEFrKNYYHUs9OrbI4hc7in8Pv9xHJgIGFvzVXQhnxZY9R+3kxmGHwvB1JYRoxza2srjY2NGRlMdXWmSuDHx8eNfnNzk6ampox8X+YFL+B9cA8PD5sv/ygM7k+0L4/vwgIJK02Yf870kUuzvb1NExP2eRsZGTH3Z2dnZzQ3N2cCQ2lySaY0vKg/1R6/u7trqgQ+m83t3L1Lk7lGzPJ4uHHU5Of1nG8s9fFZ2bDS/M1e8ujjzh2/E0F0xsq3PoPc1ul24V0evTIE3KHBJhZlchvdLYpPFBtrx9gOlncOBReITKbLiMuIzICU3RlxGZEZkLI7Iy4jMgNSdmfEZURmQMrujHxXGcE3TRhFsbHWwJce/n0e9GmJlq4njKeMZwzc/oQRbHB19QfjT8Y/jCDyLoQes0VQW0XWto2uri6rbQMtHJjjtfyI1baREM7+hb7iucNG9fb2qsXFRXMToBnMQQebOGuybQJlQSAphkeytYc7q6itrY1aWlqoubnZa/HhjhpzL6L99Ih7ErT1bG1t0fr6Oq2srNDBwYFWm1G29liBoG9oY2PDGIPBdUNJSQkVFxd7vKVk4fj4mEpLSz291F1dXRF3YxFGSehT8gWYhN6UJhGxDw2lQPvX8vKy6u/vV6Ojo2ptbc2b02UKG7EX762BGOIHIhvisCCa49AkB10UkoFYpblDiyAexKKKigpCy1gYiRZBuzTsrFMVdcxZ0yQCN2ckRiBptp1kdDLwY1jHuFcbKUqDX9daRhzKeWPtf1708pgYjOAVAAAAAElFTkSuQmCC"
    },
    "3af8": function(e, t, r) {
        "use strict";
        r("b54f")
    },
    "3b7c": function(e, t, r) {
        "use strict";
        r("d9cc")
    },
    "3fc0": function(e, t, r) {
        e.exports = "img/arrow-left-carousel.e1b1e320.svg"
    },
    "41c8": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=14 height=16 viewBox="0 0 14 16"> <g fill=none fill-rule=evenodd> <g stroke=#000 stroke-width=1.2> <path d="M3.641 9.634L13.202 9.634 13.202.072 3.641.072zM10.161 10.9L10.161 13.4 7.661 13.4M3.1 13.4L.6 13.4.6 10.9M.6 6.339L.6 3.839 3.1 3.839" transform="translate(0 1) translate(0 .527)"/> </g> <path stroke=#000 stroke-width=1.2 d="M7.661 4.366L10.161 4.366 10.161 6.866" transform="translate(0 1)"/> <path fill=#000 d="M3.641 10.161L10.782 10.161 10.782 3.707 3.641 3.707z" transform="translate(0 1)"/> </g> </svg> ';
        e.exports = r
    },
    4414: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 13 12"> <g fill=#242424 fill-rule=evenodd> <path d="M0 0H4V12H0zM9 0H13V12H9z"/> </g> </svg> ';
        e.exports = r
    },
    "447c": function(e, t, r) {
        e.exports = + "img/hand2.0bcdeb92.svg"
    },
    "44a5": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 15 15"> <g fill=none fill-rule=evenodd> <path fill=#000 d="M13.185 7.262c0 3.267-2.649 5.924-5.906 5.924-3.256 0-5.907-2.65-5.907-5.906 0-3.267 2.65-5.925 5.907-5.925 3.258 0 5.906 2.65 5.906 5.907M7.28.25C3.404.25.25 3.404.25 7.28c0 3.876 3.155 7.028 7.03 7.028 3.877 0 7.028-3.152 7.028-7.028 0-3.876-3.152-7.03-7.028-7.03"/> <path stroke=#000 stroke-width=.5 d="M13.185 7.262c0 3.267-2.649 5.924-5.906 5.924-3.256 0-5.907-2.65-5.907-5.906 0-3.267 2.65-5.925 5.907-5.925 3.258 0 5.906 2.65 5.906 5.907zM7.28.25C3.404.25.25 3.404.25 7.28c0 3.876 3.155 7.028 7.03 7.028 3.877 0 7.028-3.152 7.028-7.028 0-3.876-3.152-7.03-7.028-7.03z"/> <path fill=#000 d="M5.358 5.361c0-.902.881-1.63 1.974-1.63 1.092 0 1.973.728 1.973 1.63v1.514c0 .902-.88 1.63-1.973 1.63s-1.974-.728-1.974-1.63V5.361zM7.314 9.35c1.656 0 2.996-1.106 2.996-2.474V5.361c0-1.367-1.34-2.474-2.996-2.474-1.657 0-2.996 1.107-2.996 2.474v1.514C4.336 8.243 5.674 9.35 7.314 9.35z"/> <path stroke=#000 stroke-width=.5 d="M5.358 5.361c0-.902.881-1.63 1.974-1.63 1.092 0 1.973.728 1.973 1.63v1.514c0 .902-.88 1.63-1.973 1.63s-1.974-.728-1.974-1.63V5.361zM7.314 9.35c1.656 0 2.996-1.106 2.996-2.474V5.361c0-1.367-1.34-2.474-2.996-2.474-1.657 0-2.996 1.107-2.996 2.474v1.514C4.336 8.243 5.674 9.35 7.314 9.35z"/> <path fill=#000 d="M9.025 10.326c-.457.406-1.08.64-1.71.64-.65 0-1.249-.228-1.732-.66-.202-.163-.475-.184-.658-.056l-1.48.916-.056.035.048.044c.284.266.571.492.854.676l.026.017.862-.529c.623.438 1.38.678 2.135.678.771 0 1.501-.228 2.116-.66l.801.495.027.016.027-.017c.302-.198.59-.43.853-.695l.045-.045-1.498-.913c-.204-.129-.474-.108-.66.058"/> <path stroke=#000 stroke-width=.5 d="M9.025 10.326c-.457.406-1.08.64-1.71.64-.65 0-1.249-.228-1.732-.66-.202-.163-.475-.184-.658-.056l-1.48.916-.056.035.048.044c.284.266.571.492.854.676l.026.017.862-.529c.623.438 1.38.678 2.135.678.771 0 1.501-.228 2.116-.66l.801.495.027.016.027-.017c.302-.198.59-.43.853-.695l.045-.045-1.498-.913c-.204-.129-.474-.108-.66.058z"/> </g> </svg> ';
        e.exports = r
    },
    "44b2": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=116 height=116 viewBox="0 0 116 116"> <defs> <path id=rztdqjlnca d="M0.422 0.12L11.814 0.12 11.814 5.863 0.422 5.863z"/> </defs> <g fill=none fill-rule=evenodd> <path d="M104.65 63.577c0 28.898-23.427 52.325-52.325 52.325C23.427 115.902 0 92.475 0 63.577 0 34.68 23.427 11.253 52.325 11.253S104.65 34.68 104.65 63.577z"/> <path fill=#000 d="M50.17 10.356c-.439-.664-.65-1.576-.63-2.732l.063-3.94c.02-1.22.255-2.144.706-2.77C50.76.285 51.546-.02 52.666 0c1.001.015 1.715.298 2.143.847.426.55.632 1.352.615 2.406l-.014.883-1.474-.025.012-.785c.01-.514-.007-.908-.049-1.186-.04-.275-.155-.498-.34-.666-.186-.168-.486-.256-.899-.264-.423-.005-.738.08-.948.254-.209.176-.349.422-.418.74-.069.313-.108.737-.117 1.27l-.072 4.422c-.009.57.03 1.016.116 1.338.087.324.232.555.436.697.205.141.491.215.858.221.395.006.69-.076.886-.248.196-.172.321-.408.376-.71.056-.304.088-.716.096-1.239l.014-.827 1.473.024-.012.826c-.019 1.111-.24 1.961-.669 2.545-.427.586-1.159.871-2.197.853-1.102-.017-1.874-.359-2.312-1.02M57.773.296L59.319.474 58.174 10.452 61.007 10.776 60.88 11.886 56.501 11.382zM63.975 1.157L65.475 1.454 63.307 12.401 61.807 12.104zM65.553 12c-.241-.757-.195-1.69.138-2.798l1.135-3.773c.352-1.17.83-1.994 1.435-2.475.605-.48 1.443-.558 2.517-.236.959.289 1.568.756 1.83 1.4.26.645.24 1.473-.064 2.485l-.254.843-1.412-.424.227-.751c.148-.495.24-.88.275-1.157.035-.275-.014-.521-.145-.734-.133-.211-.398-.377-.793-.496-.405-.123-.732-.127-.982-.016-.25.113-.45.31-.603.596-.153.285-.306.683-.46 1.193l-1.274 4.235c-.164.545-.248.984-.253 1.318-.005.336.073.598.23.789.159.19.414.34.766.445.377.116.684.116.919.004.235-.111.42-.304.556-.58.136-.275.279-.664.43-1.166l.238-.791 1.412.424-.238.793c-.32 1.062-.766 1.818-1.337 2.266-.57.447-1.354.52-2.347.222-1.055-.318-1.704-.855-1.946-1.615M75.87 4.552L77.292 5.187 75.145 9.991 79.632 6.232 80.952 6.822 76.933 10.413 76.728 17.157 75.345 16.538 75.53 10.888 74.348 11.779 72.741 15.376 71.32 14.741zM86.258 9.831L87.533 10.724 84.767 14.673 87.113 16.317 89.88 12.368 91.155 13.261 84.753 22.401 83.478 21.509 86.473 17.231 84.126 15.587 81.131 19.864 79.856 18.972zM93.325 15.069L96.542 17.962 95.767 18.823 93.709 16.969 91.24 19.715 92.91 21.217 92.173 22.036 90.503 20.536 87.766 23.577 89.846 25.448 89.099 26.278 85.863 23.366zM95.974 24.358c.443.504.86.775 1.252.816.39.041.849-.17 1.372-.632.344-.303.58-.58.71-.829.13-.25.156-.51.079-.785s-.27-.588-.58-.939l-.456-.518-2.77 2.444.393.443zm2.185-4.79l1.485 1.683c.747.847 1.12 1.621 1.123 2.324 0 .703-.391 1.4-1.176 2.094-1.074.947-2.03 1.177-2.864.69l-3.147 4.888-.993-1.127 2.96-4.559-.802-.908-3.926 3.463-1.03-1.168 8.37-7.38zM103.427 25.852L105.891 29.407 104.94 30.067 103.363 27.791 100.328 29.895 101.608 31.739 100.701 32.368 99.422 30.522 96.06 32.854 97.653 35.151 96.736 35.788 94.255 32.209zM96.075 37.046c.197.172.421.268.671.285.251.018.5-.045.744-.19l-.398-.675 1.366-.805.767 1.307-1.34.789c-.42.248-.809.353-1.165.318-.357-.037-.714-.205-1.072-.506l.427-.523zM106.527 41.175c.174.426.355.734.545.93.189.195.42.297.69.304.272.008.624-.076 1.058-.254.526-.216.897-.414 1.112-.591.215-.176.328-.4.337-.666.01-.268-.085-.643-.283-1.127l-.277-.676-3.454 1.418.272.662zm3.623-3.943l1.05 2.56c.367.893.39 1.64.072 2.242-.318.604-.945 1.096-1.88 1.479-.841.346-1.584.398-2.23.156-.645-.242-1.136-.775-1.474-1.6l-.466-1.132-4.804 1.97-.592-1.44 10.324-4.235zM112.86 44.315L113.287 45.811 103.631 48.571 104.414 51.311 103.34 51.618 102.13 47.379zM114.476 50.446L115.237 54.704 114.098 54.909 113.611 52.182 109.976 52.831 110.371 55.042 109.286 55.235 108.891 53.024 104.864 53.745 105.355 56.497 104.256 56.694 103.491 52.409zM108.519 60.882l4.959-1.256-5.077-.601.118 1.857zm7.11-2.152l.096 1.498-10.984 3.09-.094-1.471 2.772-.688-.145-2.27-2.84-.357-.092-1.457 11.287 1.655z"/> <g transform="translate(104 63.902)"> <mask id=bb2jxycw8b fill=#fff> <use xlink:href=#rztdqjlnca /> </mask> <path fill=#000 d="M1.415.804C2.02.347 2.828.118 3.84.12l.295 1.397c-.719.006-1.304.113-1.757.322-.454.209-.695.584-.726 1.125-.023.403.073.715.285.934.213.219.531.34.953.363.46.025.844-.05 1.158-.225.313-.175.665-.462 1.055-.865L6.86 1.394c.352-.358.722-.611 1.113-.758.39-.148.86-.207 1.41-.178.816.047 1.435.317 1.858.809.424.494.613 1.142.568 1.95-.05.88-.322 1.532-.815 1.956-.492.422-1.232.652-2.219.69L8.491 4.52c.653-.01 1.163-.108 1.528-.293.364-.188.562-.547.591-1.078.023-.395-.063-.703-.258-.926-.195-.223-.494-.344-.897-.367-.33-.018-.61.02-.842.119-.23.098-.468.27-.712.525L6.144 4.29c-.458.464-.948.824-1.468 1.085-.52.26-1.102.373-1.743.336-.817-.045-1.45-.33-1.898-.851-.449-.522-.65-1.178-.607-1.967.052-.934.382-1.631.987-2.09" mask=url(#bb2jxycw8b) /> </g> <path fill=#000 d="M115.248 72.257L114.53 76.523 113.39 76.331 113.849 73.601 110.207 72.989 109.835 75.202 108.748 75.021 109.12 72.806 105.085 72.128 104.622 74.886 103.521 74.7 104.243 70.407z"/> </g> </svg> ';
        e.exports = r
    },
    4529: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=44 height=44 viewBox="0 0 44 44"> <g fill=none fill-rule=evenodd> <path fill=#FFF stroke=#000 stroke-width=3 d="M0 0H40V40H0z" transform="rotate(90 20 22)"/> <path fill=#000 d="M20 16.89c-1.715-.003-3.108 1.385-3.11 3.101-.002 1.716 1.386 3.11 3.1 3.112 1.718.002 3.11-1.387 3.11-3.103.002-1.715-1.386-3.106-3.1-3.11zm0 7.433c-2.389.002-4.325-1.935-4.327-4.323-.001-2.388 1.934-4.326 4.322-4.328 2.39-.001 4.326 1.936 4.327 4.324V20c-.005 2.387-1.938 4.316-4.321 4.323zm-1.509 5.453h3.005l.172-2.665.408-.121c.484-.146.953-.338 1.397-.577l.375-.202 2.003 1.76 2.125-2.123-1.759-2.002.202-.375c.24-.443.434-.911.577-1.396l.12-.408 2.664-.173v-3l-2.663-.17-.121-.406c-.143-.486-.336-.954-.577-1.4l-.202-.373 1.76-2.001-2.126-2.127-2.003 1.76-.375-.203c-.444-.24-.913-.432-1.397-.577l-.408-.12-.172-2.66h-3.005l-.172 2.665-.41.12c-.482.142-.95.337-1.396.577l-.374.203-2.001-1.76-2.127 2.126 1.759 2.002-.202.375c-.242.445-.437.915-.581 1.401l-.121.404-2.66.172V21.5l2.663.171.12.411c.145.485.341.952.58 1.396l.204.374-1.76 2.003 2.128 2.127 2-1.76.375.202c.444.241.912.434 1.397.577l.41.121.168 2.654zM22.64 31h-5.28l-.196-2.97c-.287-.099-.568-.214-.842-.348l-2.232 1.965-3.737-3.739 1.96-2.234c-.13-.275-.245-.555-.347-.837L9 22.64v-5.28l2.966-.194c.102-.285.218-.563.348-.837l-1.96-2.237 3.739-3.74 2.23 1.963c.276-.13.556-.243.843-.347L17.36 9h5.28l.196 2.97c.287.1.568.217.843.348l2.23-1.964 3.74 3.74-1.963 2.232c.13.277.246.555.348.837L31 17.36v5.28l-2.966.19c-.098.286-.215.569-.348.841l1.96 2.237-3.739 3.74-2.228-1.962c-.277.131-.555.245-.843.35L22.64 31z" transform="rotate(90 20 22)"/> <path stroke=#000 stroke-width=.25 d="M20 16.89c-1.715-.003-3.108 1.385-3.11 3.101-.002 1.716 1.386 3.11 3.1 3.112 1.718.002 3.11-1.387 3.11-3.103.002-1.715-1.386-3.106-3.1-3.11zm0 7.433c-2.389.002-4.325-1.935-4.327-4.323-.001-2.388 1.934-4.326 4.322-4.328 2.39-.001 4.326 1.936 4.327 4.324V20c-.005 2.387-1.938 4.316-4.321 4.323zm-1.509 5.453h3.005l.172-2.665.408-.121c.484-.146.953-.338 1.397-.577l.375-.202 2.003 1.76 2.125-2.123-1.759-2.002.202-.375c.24-.443.434-.911.577-1.396l.12-.408 2.664-.173v-3l-2.663-.17-.121-.406c-.143-.486-.336-.954-.577-1.4l-.202-.373 1.76-2.001-2.126-2.127-2.003 1.76-.375-.203c-.444-.24-.913-.432-1.397-.577l-.408-.12-.172-2.66h-3.005l-.172 2.665-.41.12c-.482.142-.95.337-1.396.577l-.374.203-2.001-1.76-2.127 2.126 1.759 2.002-.202.375c-.242.445-.437.915-.581 1.401l-.121.404-2.66.172V21.5l2.663.171.12.411c.145.485.341.952.58 1.396l.204.374-1.76 2.003 2.128 2.127 2-1.76.375.202c.444.241.912.434 1.397.577l.41.121.168 2.654zM22.64 31h-5.28l-.196-2.97c-.287-.099-.568-.214-.842-.348l-2.232 1.965-3.737-3.739 1.96-2.234c-.13-.275-.245-.555-.347-.837L9 22.64v-5.28l2.966-.194c.102-.285.218-.563.348-.837l-1.96-2.237 3.739-3.74 2.23 1.963c.276-.13.556-.243.843-.347L17.36 9h5.28l.196 2.97c.287.1.568.217.843.348l2.23-1.964 3.74 3.74-1.963 2.232c.13.277.246.555.348.837L31 17.36v5.28l-2.966.19c-.098.286-.215.569-.348.841l1.96 2.237-3.739 3.74-2.228-1.962c-.277.131-.555.245-.843.35L22.64 31z" transform="rotate(90 20 22)"/> <path fill=#000 d="M19.995 17.162c-.755 0-1.465.292-2.001.826-.536.534-.832 1.247-.832 2.004 0 .756.292 1.469.826 2.005.535.536 1.246.833 2.003.833h.003c1.562 0 2.834-1.27 2.835-2.83.001-1.563-1.268-2.836-2.828-2.838h-.006zm-.001 6.094h-.003c-.87-.002-1.687-.344-2.302-.96-.614-.616-.954-1.435-.952-2.304.001-.872.34-1.69.957-2.304.617-.614 1.433-.952 2.301-.952h.006c1.794.006 3.255 1.47 3.254 3.264-.002 1.795-1.464 3.256-3.261 3.256zm.004-7.288h-.003c-1.076 0-2.089.42-2.848 1.18-.76.763-1.18 1.776-1.178 2.852.001 2.22 1.809 4.026 4.029 4.026H20c2.214-.004 4.022-1.813 4.026-4.026-.002-2.225-1.809-4.032-4.03-4.032zm0 8.484c-2.454 0-4.452-1.997-4.453-4.452 0-1.19.462-2.308 1.3-3.15.842-.841 1.96-1.306 3.15-1.308h.003c2.453 0 4.452 1.999 4.453 4.454-.007 2.45-2.002 4.448-4.45 4.456h-.003zm-1.279 4.922h2.549l.167-2.563.54-.16c.46-.138.908-.322 1.332-.549l.495-.268 1.926 1.693 1.803-1.802L25.84 23.8l.268-.496c.228-.42.412-.869.55-1.33l.159-.541 2.562-.167v-2.543l-2.562-.166-.16-.54c-.136-.46-.32-.906-.549-1.33l-.268-.497 1.692-1.925-1.804-1.804-1.926 1.691-.496-.267c-.422-.228-.869-.412-1.331-.55l-.54-.16-.167-2.557h-2.549l-.166 2.563-.543.158c-.457.137-.904.32-1.33.55l-.495.269-1.926-1.693-1.804 1.804 1.691 1.925-.267.498c-.228.42-.415.868-.555 1.334l-.16.537-2.556.166v2.542l2.56.166.16.543c.136.454.322.902.552 1.33l.269.496-1.693 1.926 1.806 1.806 1.925-1.693.496.269c.42.227.867.411 1.33.549l.542.16.164 2.55zm2.948.425H18.32l-.169-2.653-.26-.078c-.49-.144-.964-.339-1.41-.58l-.237-.13-2.001 1.76-2.368-2.368 1.76-2.002-.13-.236c-.244-.454-.44-.93-.585-1.41l-.077-.26-2.66-.172v-3.339l2.658-.17.077-.257c.148-.492.345-.969.586-1.414l.128-.238-1.758-2.002 2.366-2.365 2.002 1.76.236-.13c.452-.243.925-.44 1.41-.582l.26-.076.172-2.665h3.346l.17 2.659.26.078c.489.145.963.342 1.41.582l.237.128 2.002-1.758 2.366 2.364-1.759 2.003.129.236c.243.45.438.927.581 1.414l.078.256 2.664.17v3.34l-2.664.172-.078.258c-.144.49-.34.965-.581 1.41l-.129.238 1.76 2.001-2.367 2.363-2.002-1.759-.238.129c-.448.24-.923.437-1.41.581l-.258.078-.171 2.664zm-4.058.775h4.78l.188-2.848.132-.047c.285-.101.55-.21.807-.333l.128-.06 2.14 1.884 3.386-3.386-1.885-2.15.062-.127c.128-.263.24-.533.333-.802l.045-.134 2.85-.18v-4.782l-2.847-.187-.047-.132c-.1-.273-.212-.543-.335-.804l-.06-.125 1.887-2.145-3.387-3.386-2.144 1.887-.126-.06c-.266-.127-.538-.239-.804-.332l-.135-.045-.188-2.856h-4.78l-.185 2.85-.131.047c-.293.106-.558.215-.806.333l-.128.06-2.142-1.887-3.387 3.387 1.884 2.151-.06.125c-.123.259-.235.527-.334.803l-.048.132-2.848.184v4.781l2.848.188.047.132c.1.271.212.543.335.803l.06.126-1.885 2.145 3.385 3.385 2.145-1.888.129.062c.252.124.522.236.8.332l.135.045.186 2.854zm5.179.426h-5.576l-.195-2.971c-.202-.074-.399-.156-.588-.244l-2.235 1.966-3.947-3.948 1.965-2.236c-.087-.191-.167-.386-.242-.583L9 22.79V17.21l2.968-.194c.075-.196.157-.393.244-.582l-1.963-2.24 3.948-3.95 2.233 1.968c.187-.085.38-.164.588-.243L17.212 9h5.576l.195 2.971c.197.074.393.154.588.244l2.233-1.968 3.949 3.949-1.965 2.236c.087.192.167.387.242.583l2.97.196v5.578l-2.967.188c-.072.198-.154.395-.243.588l1.96 2.238-.139.141-3.81 3.806-2.23-1.96c-.189.085-.384.165-.588.241L22.788 31z" transform="rotate(90 20 22)"/> <path stroke=#000 stroke-width=.4 d="M19.995 17.162c-.755 0-1.465.292-2.001.826-.536.534-.832 1.247-.832 2.004 0 .756.292 1.469.826 2.005.535.536 1.246.833 2.003.833h.003c1.562 0 2.834-1.27 2.835-2.83.001-1.563-1.268-2.836-2.828-2.838h-.006zm-.001 6.094h-.003c-.87-.002-1.687-.344-2.302-.96-.614-.616-.954-1.435-.952-2.304.001-.872.34-1.69.957-2.304.617-.614 1.433-.952 2.301-.952h.006c1.794.006 3.255 1.47 3.254 3.264-.002 1.795-1.464 3.256-3.261 3.256zm.004-7.288h-.003c-1.076 0-2.089.42-2.848 1.18-.76.763-1.18 1.776-1.178 2.852.001 2.22 1.809 4.026 4.029 4.026H20c2.214-.004 4.022-1.813 4.026-4.026-.002-2.225-1.809-4.032-4.03-4.032zm0 8.484c-2.454 0-4.452-1.997-4.453-4.452 0-1.19.462-2.308 1.3-3.15.842-.841 1.96-1.306 3.15-1.308h.003c2.453 0 4.452 1.999 4.453 4.454-.007 2.45-2.002 4.448-4.45 4.456h-.003zm-1.279 4.922h2.549l.167-2.563.54-.16c.46-.138.908-.322 1.332-.549l.495-.268 1.926 1.693 1.803-1.802L25.84 23.8l.268-.496c.228-.42.412-.869.55-1.33l.159-.541 2.562-.167v-2.543l-2.562-.166-.16-.54c-.136-.46-.32-.906-.549-1.33l-.268-.497 1.692-1.925-1.804-1.804-1.926 1.691-.496-.267c-.422-.228-.869-.412-1.331-.55l-.54-.16-.167-2.557h-2.549l-.166 2.563-.543.158c-.457.137-.904.32-1.33.55l-.495.269-1.926-1.693-1.804 1.804 1.691 1.925-.267.498c-.228.42-.415.868-.555 1.334l-.16.537-2.556.166v2.542l2.56.166.16.543c.136.454.322.902.552 1.33l.269.496-1.693 1.926 1.806 1.806 1.925-1.693.496.269c.42.227.867.411 1.33.549l.542.16.164 2.55zm2.948.425H18.32l-.169-2.653-.26-.078c-.49-.144-.964-.339-1.41-.58l-.237-.13-2.001 1.76-2.368-2.368 1.76-2.002-.13-.236c-.244-.454-.44-.93-.585-1.41l-.077-.26-2.66-.172v-3.339l2.658-.17.077-.257c.148-.492.345-.969.586-1.414l.128-.238-1.758-2.002 2.366-2.365 2.002 1.76.236-.13c.452-.243.925-.44 1.41-.582l.26-.076.172-2.665h3.346l.17 2.659.26.078c.489.145.963.342 1.41.582l.237.128 2.002-1.758 2.366 2.364-1.759 2.003.129.236c.243.45.438.927.581 1.414l.078.256 2.664.17v3.34l-2.664.172-.078.258c-.144.49-.34.965-.581 1.41l-.129.238 1.76 2.001-2.367 2.363-2.002-1.759-.238.129c-.448.24-.923.437-1.41.581l-.258.078-.171 2.664zm-4.058.775h4.78l.188-2.848.132-.047c.285-.101.55-.21.807-.333l.128-.06 2.14 1.884 3.386-3.386-1.885-2.15.062-.127c.128-.263.24-.533.333-.802l.045-.134 2.85-.18v-4.782l-2.847-.187-.047-.132c-.1-.273-.212-.543-.335-.804l-.06-.125 1.887-2.145-3.387-3.386-2.144 1.887-.126-.06c-.266-.127-.538-.239-.804-.332l-.135-.045-.188-2.856h-4.78l-.185 2.85-.131.047c-.293.106-.558.215-.806.333l-.128.06-2.142-1.887-3.387 3.387 1.884 2.151-.06.125c-.123.259-.235.527-.334.803l-.048.132-2.848.184v4.781l2.848.188.047.132c.1.271.212.543.335.803l.06.126-1.885 2.145 3.385 3.385 2.145-1.888.129.062c.252.124.522.236.8.332l.135.045.186 2.854zm5.179.426h-5.576l-.195-2.971c-.202-.074-.399-.156-.588-.244l-2.235 1.966-3.947-3.948 1.965-2.236c-.087-.191-.167-.386-.242-.583L9 22.79V17.21l2.968-.194c.075-.196.157-.393.244-.582l-1.963-2.24 3.948-3.95 2.233 1.968c.187-.085.38-.164.588-.243L17.212 9h5.576l.195 2.971c.197.074.393.154.588.244l2.233-1.968 3.949 3.949-1.965 2.236c.087.192.167.387.242.583l2.97.196v5.578l-2.967.188c-.072.198-.154.395-.243.588l1.96 2.238-.139.141-3.81 3.806-2.23-1.96c-.189.085-.384.165-.588.241L22.788 31z" transform="rotate(90 20 22)"/> </g> </svg> ';
        e.exports = r
    },
    "45df": function(e, t, r) {},
    "45f4": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=116 height=117 viewBox="0 0 116 117"> <defs> <path id=96wedmhjba d="M0.683 0.148L6.387 0.148 6.387 11.394 0.683 11.394z"/> </defs> <g fill=none fill-rule=evenodd> <path d="M104.65 64.527c0 28.898-23.428 52.325-52.326 52.325-28.897 0-52.323-23.427-52.323-52.325C0 35.63 23.426 12.203 52.325 12.203c28.897 0 52.325 23.427 52.325 52.324z"/> <g transform="translate(49 .852)"> <mask id=fglyx8x8fb fill=#fff> <use xlink:href=#96wedmhjba /> </mask> <path fill=#FFF d="M0.864 0.148L1.925 0.166 4.972 7.627 5.093 0.216 6.387 0.238 6.207 11.394 5.215 11.378 2.129 3.709 2.006 11.326 0.683 11.304z" mask=url(#fglyx8x8fb) /> </g> <path fill=#FFF d="M57.725 12.1c-.391-.368-.63-.84-.717-1.419-.088-.578-.075-1.285.04-2.123l1.002-7.33 1.474.203-1.011 7.398c-.115.836-.104 1.487.03 1.95.138.465.5.736 1.093.818.59.08 1.015-.084 1.27-.494.256-.41.44-1.033.555-1.87l1.012-7.4 1.46.2-1.002 7.33c-.115.838-.292 1.523-.531 2.054-.24.534-.595.926-1.065 1.176-.47.252-1.091.324-1.865.22-.774-.109-1.355-.345-1.745-.714M66.365 12.949c.522.146.93.15 1.22.012.291-.14.513-.375.67-.71.153-.331.33-.853.526-1.56l.971-3.492c.17-.61.261-1.088.277-1.432.014-.343-.076-.625-.272-.847-.196-.221-.546-.403-1.05-.541l-.81-.227-2.382 8.56.85.237zm.342-10.328l2.336.648c1.16.325 1.906.817 2.241 1.483.334.664.346 1.558.033 2.683l-1.1 3.955c-.33 1.186-.813 2.002-1.447 2.45-.634.449-1.5.519-2.597.214l-2.456-.683 2.99-10.75zM71.133 14.752c-.162-.764.006-1.725.503-2.881l1.474-3.43c.34-.793.703-1.41 1.087-1.85.384-.44.835-.71 1.354-.812.519-.101 1.128-.002 1.829.299.944.406 1.523.94 1.733 1.6.21.66.096 1.506-.346 2.535l-.163.379-1.342-.576.136-.317c.21-.49.342-.88.398-1.172.055-.291.017-.545-.115-.761-.132-.215-.384-.405-.755-.563-.397-.172-.731-.207-1.003-.11-.271.098-.501.288-.686.567-.185.28-.387.674-.604 1.18L73 12.639c-.338.783-.484 1.388-.441 1.81.043.424.334.752.874.985.53.228.976.199 1.334-.086.358-.287.713-.84 1.064-1.658l.305-.71-1.304-.56.436-1.012 2.594 1.115-2.181 5.077-.9-.387.368-1.236c-.695.73-1.49.904-2.383.519-.928-.398-1.473-.98-1.634-1.744M82.423 8.588L86.167 10.754 85.587 11.756 83.191 10.369 81.34 13.565 83.283 14.69 82.732 15.643 80.788 14.518 78.737 18.059 81.158 19.459 80.599 20.426 76.831 18.244zM91.342 14.324L92.495 15.328 88.04 23.449 95.479 17.924 96.621 18.918 89.452 27.472 88.506 26.65 93.731 20.457 86.988 25.328 86.323 24.75 90.228 17.41 84.817 23.439 83.861 22.607zM98.749 21.183L101.603 24.433 100.734 25.197 98.907 23.117 96.134 25.554 97.615 27.242 96.788 27.968 95.306 26.281 92.231 28.982 94.078 31.083 93.239 31.82 90.366 28.55zM100.786 35.937l3.795-3.43-4.768 1.844.973 1.586zm5.277-5.229l.786 1.28-8.263 7.87-.772-1.257 2.13-1.904-1.19-1.938-2.677 1.012-.764-1.244 10.75-3.819zM107.21 43.32c.23.6.52.967.87 1.098.35.132.842.076 1.477-.166.464-.176.777-.377.942-.602.165-.226.224-.49.176-.797-.049-.306-.179-.738-.392-1.297l-.133-.347-3.269 1.248.33.863zm-4.988 2.035c.163.43.356.736.58.922.222.184.49.272.8.262.31-.01.702-.106 1.173-.285.67-.256 1.118-.584 1.343-.985.226-.4.221-.91-.014-1.527l-.33-.863-3.925 1.498.373.978zm8.455-6.014l.913 2.395c.36.945.415 1.725.164 2.342-.252.617-.823 1.096-1.716 1.435-1.33.508-2.254.289-2.77-.652.09.672-.029 1.234-.354 1.682-.325.449-.86.816-1.607 1.099-.936.358-1.75.416-2.442.172-.692-.242-1.21-.812-1.553-1.715l-1.06-2.779 10.425-3.979zM113.37 47.037L113.772 48.514 103.008 51.453 102.604 49.978zM113.471 52.384L113.127 50.529 114.266 50.318 115.226 55.507 114.088 55.716 113.754 53.915 103.919 55.736 103.636 54.204z"/> </g> </svg> ';
        e.exports = r
    },
    "4fc5": function(e, t, r) {
        "use strict";
        r("7784")
    },
    "52a0": function(e, t, r) {},
    "540b": function(e, t, r) {
        e.exports = "img/scroll-background.55cc24bb.svg"
    },
    "55cc": function(e, t, r) {
        e.exports = "img/block-star.e58421ae.svg"
    },
    "56a0": function(e, t, r) {
        e.exports = "img/arrow-right-carousel.99944c72.svg"
    },
    "56d7": function(e, t, r) {
        "use strict";
        r.r(t);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var c = r("830f"),
            n = r("5c40"),
            a = Object(n["F"])("data-v-82d89832");
        Object(n["s"])("data-v-82d89832");
        var o = {
            class: "container"
        };
        Object(n["r"])();
        var s = a((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("div", o, [Object(n["u"])(e.$slots, "default")])
            })),
            i = {};
        r("8a23");
        i.render = s, i.__scopeId = "data-v-82d89832";
        var l = i,
            d = Object(n["F"])("data-v-07cc84f1"),
            u = d((function(e, t) {
                return Object(n["q"])(), Object(n["e"])(Object(n["w"])(e.is || "h" + e.level), {
                    class: "base-heading text--".concat(e.color),
                    style: {
                        "--mouse-shadow": e.mouseShadowSize
                    }
                }, {
                    default: d((function() {
                        return [Object(n["u"])(e.$slots, "default")]
                    })),
                    _: 3
                }, 8, ["class", "style"])
            })),
            h = {
                data: function() {
                    return {
                        mouseShadowSize: "5px"
                    }
                },
                props: {
                    level: {
                        type: String
                    },
                    color: {
                        type: String,
                        default: "white"
                    },
                    is: {
                        type: String
                    },
                    mouseShadow: {
                        type: Boolean,
                        default: !0
                    }
                },
                mounted: function() {
                    this.mouseShadow && window.addEventListener("mousemove", this.onMouseMove)
                },
                beforeUnmount: function() {
                    window.removeEventListener("mousemove", this.onMouseMove)
                },
                methods: {
                    onMouseMove: function(e) {
                        var t = this.$el.getBoundingClientRect().left + this.$el.offsetWidth / 2,
                            r = Math.abs(t - e.clientX);
                        this.mouseShadowSize = "".concat(5 + r / 300, "px")
                    }
                }
            };
        r("276f");
        h.render = u, h.__scopeId = "data-v-07cc84f1";
        var f = h,
            v = Object(n["F"])("data-v-314c577a"),
            b = v((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("p", {
                    class: "paragraph text--".concat(e.color)
                }, [Object(n["u"])(e.$slots, "default")], 2)
            })),
            j = {
                props: {
                    color: {
                        type: String,
                        default: "white"
                    }
                }
            };
        r("f594");
        j.render = b, j.__scopeId = "data-v-314c577a";
        var g = j,
            p = Object(n["F"])("data-v-b022a108"),
            m = p((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("div", {
                    class: ["custom-cursor-container", {
                        "custom-cursor-container--hide": e.cursorHidden
                    }]
                }, [Object(n["j"])("div", {
                    class: ["custom-cursor", "custom-cursor--".concat(e.cursor)],
                    ref: "point",
                    style: e.cursorPoint
                }, null, 6)], 2)
            })),
            w = (r("99af"), r("4160"), r("159b"), r("5530")),
            O = r("5502"),
            M = {
                data: function() {
                    return {
                        xChild: 0,
                        yChild: 0,
                        pointer: !1,
                        cursorHidden: !0,
                        removeListeners: null
                    }
                },
                computed: Object(w["a"])(Object(w["a"])({}, Object(O["c"])(["cursor"])), {}, {
                    cursorPoint: function() {
                        return "transform: translateX(".concat(this.xChild, "px) translateY(").concat(this.yChild, "px) translateZ(0) translate3d(0, 0, 0);")
                    }
                }),
                methods: Object(w["a"])(Object(w["a"])({}, Object(O["b"])(["setCursor"])), {}, {
                    moveCursor: function(e) {
                        this.xChild = e.clientX, this.yChild = e.clientY, this.cursorHidden && (this.cursorHidden = !1)
                    },
                    enablePointer: function() {
                        this.setCursor("pointer")
                    },
                    disablePointer: function() {
                        this.setCursor("point")
                    },
                    hideCursor: function() {
                        this.cursorHidden = !0
                    },
                    showCursor: function() {
                        this.cursorHidden = !1
                    }
                }),
                mounted: function() {
                    var e = this;
                    document.addEventListener("mousemove", this.moveCursor);
                    var t = document.querySelectorAll("a, b, .pointer");
                    t.forEach((function(t) {
                        t.addEventListener("mouseenter", e.enablePointer), t.addEventListener("mouseleave", e.disablePointer)
                    })), document.addEventListener("mouseleave", this.hideCursor), document.addEventListener("mouseenter", this.showCursor), this.removeListeners = function() {
                        document.removeEventListener("mousemove", e.moveCursor), document.removeEventListener("mouseleave", e.hideCursor), document.removeEventListener("mouseenter", e.showCursor), t.forEach((function(t) {
                            t.removeEventListener("mouseenter", e.enablePointer), t.removeEventListener("mouseleave", e.disablePointer)
                        }))
                    }
                },
                beforeUnmount: function() {
                    this.removeListeners()
                }
            };
        r("dc03");
        M.render = m, M.__scopeId = "data-v-b022a108";
        var x = M,
            k = r("cffa"),
            z = r("1dac"),
            y = r("9420"),
            L = {
                id: "app"
            };

        function B(e, t) {
            var r = Object(n["v"])("page-loader"),
                a = Object(n["v"])("the-header"),
                o = Object(n["v"])("the-hero"),
                s = Object(n["v"])("the-create-board"),
                i = Object(n["v"])("draw-container"),
                l = Object(n["v"])("the-features"),
                d = Object(n["v"])("the-use"),
                u = Object(n["v"])("the-testimonials"),
                h = Object(n["v"])("the-blocks"),
                f = Object(n["v"])("the-footer"),
                v = Object(n["v"])("base-cursor");
            return Object(n["q"])(), Object(n["e"])("div", L, [Object(n["j"])(c["a"], {
                name: "fade-out"
            }, {
                default: Object(n["D"])((function() {
                    return [e.loading ? Object(n["j"])(r, {
                        key: 0
                    }) : Object(n["f"])("", !0)]
                })),
                _: 1
            }), Object(n["j"])(a), Object(n["j"])(o), Object(n["j"])(i, {
                id: "create-board"
            }, {
                default: Object(n["D"])((function() {
                    return [Object(n["j"])(s)]
                })),
                _: 1
            }), Object(n["j"])(l, {
                id: "features"
            }), Object(n["j"])(d, {
                id: "how-to-use"
            }), Object(n["j"])(u, {
                id: "testimonials"
            }), Object(n["j"])(h), Object(n["j"])(f), e.isTouchScreen ? Object(n["f"])("", !0) : Object(n["j"])(v, {
                key: 0
            })])
        }
        var C = Object(n["F"])("data-v-3a087c0a");
        Object(n["s"])("data-v-3a087c0a");
        var F = {
                class: "heading-container"
            },
            V = Object(n["i"])(" Ready to "),
            A = Object(n["j"])("br", null, null, -1),
            q = Object(n["j"])("span", {
                class: "text--white"
            }, "rock your meeting?", -1),
            I = {
                class: ""
            },
            H = Object(n["i"])(" "),
            S = Object(n["j"])("br", null, null, -1),
            E = Object(n["i"])("  ");
        Object(n["r"])();
        var T = C((function(e, t) {
                var r = Object(n["v"])("base-heading"),
                    c = Object(n["v"])("star-icon"),
                    a = Object(n["v"])("create-board-form"),
                    o = Object(n["v"])("base-container");
                return Object(n["q"])(), Object(n["e"])(o, {
                    class: "container"
                }, {
                    default: C((function() {
                        return [Object(n["j"])("div", F, [Object(n["j"])(r, {
                            class: "heading",
                            level: "2",
                            color: "yellow",
                            "mouse-shadow": !1
                        }, {
                            default: C((function() {
                                return [V, A, q]
                            })),
                            _: 1
                        }), Object(n["j"])("div", I, [Object(n["j"])(c, null, {
                            default: C((function() {
                                return [H, S, E]
                            })),
                            _: 1
                        })])]), Object(n["j"])(a, {
                            onMouseenter: t[1] || (t[1] = function(t) {
                                return e.setCursor("input")
                            }),
                            onMouseLeave: t[2] || (t[2] = function(t) {
                                return e.setCursor("pencil")
                            })
                        })]
                    })),
                    _: 1
                })
            })),
            D = Object(n["F"])("data-v-da006c4a");
        Object(n["s"])("data-v-da006c4a");
        var R = {
                class: "input-container"
            },
            W = Object(n["j"])("span", {
                class: "input-label"
            }, "Name your board", -1),
            Y = {
                class: "input-icon-wrapper pointer"
            },
            P = Object(n["j"])("input", {
                type: "submit"
            }, null, -1);
        Object(n["r"])();
        var G = D((function(e, t) {
                var r = Object(n["v"])("svg-icon");
                return Object(n["q"])(), Object(n["e"])("form", {
                    class: "form",
                    onSubmit: t[2] || (t[2] = Object(c["e"])((function() {}), ["prevent"]))
                }, [Object(n["j"])("div", R, [W, Object(n["E"])(Object(n["j"])("input", {
                    type: "text",
                    "onUpdate:modelValue": t[1] || (t[1] = function(t) {
                        return e.boardName = t
                    }),
                    placeholder: e.placeholder,
                    class: ["input", {
                        "input--shadow": e.shadow
                    }],
                    required: ""
                }, null, 10, ["placeholder"]), [
                    [c["d"], e.boardName]
                ]), Object(n["j"])("div", Y, [Object(n["j"])("a", {
                    href: e.boardUrl,
                    target: "_blank"
                }, [Object(n["j"])(r, {
                    class: "input-icon",
                    icon: "arrow-right"
                })], 8, ["href"])])]), P], 32)
            })),
            J = Object(n["F"])("data-v-9351b252"),
            X = J((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("div", {
                    innerHTML: r("02fd")("./".concat(e.icon, ".svg")),
                    class: "svg-container"
                }, null, 8, ["innerHTML"])
            })),
            U = (r("d81d"), r("a9e3"), r("b680"), r("ac1f"), r("1276"), {
                props: {
                    icon: {
                        type: String,
                        default: null
                    },
                    growByHeight: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    if ("svg" === this.$el.firstElementChild.nodeName) {
                        var e = this.$el.firstElementChild,
                            t = e.getAttribute("viewBox").split(" ").map((function(e) {
                                return Number(e)
                            })),
                            r = (t[2] / t[3]).toFixed(2);
                        this.growByHeight ? (e.setAttribute("height", "1em"), e.setAttribute("width", "".concat(r, "em"))) : (e.setAttribute("width", "1em"), e.setAttribute("height", "".concat(1 / r, "em"))), e.classList.add("svg-class")
                    }
                }
            });
        r("9a13");
        U.render = X, U.__scopeId = "data-v-9351b252";
        var Q = U,
            K = {
                props: {
                    shadow: {
                        type: Boolean,
                        default: !0
                    }
                },
                components: {
                    SvgIcon: Q
                },
                methods: {
                    createBoard: function() {
                        window.location.href = this.boardUrl
                    }
                },
                computed: {
                    boardUrl: function() {
                        return "/create?boardName=".concat(this.boardName)
                    },
                    placeholder: function() {
                        if (window.innerWidth < 768) return "Name your board";
                        var e = Math.floor(Math.random() * this.placeholders.length);
                        return this.placeholders[e]
                    }
                }
            };
        r("1182");
        K.render = G, K.__scopeId = "data-v-da006c4a";
        var N = K,
            Z = Object(n["F"])("data-v-eb6a1540");
        Object(n["s"])("data-v-eb6a1540");
        var _ = {
                class: "star-container"
            },
            $ = Object(n["j"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 296 296"
            }, [Object(n["j"])("path", {
                fill: "#",
                "fill-rule": "",
                stroke: "",
                "stroke-width": "2",
                d: "",
                transform: "rotate(6 258.446 48.554)"
            })], -1),
            ee = {
                class: ""
            };
        Object(n["r"])();
        var te = Z((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("div", _, [$, Object(n["j"])("div", ee, [Object(n["u"])(e.$slots, "default")])])
            })),
            re = {};
        r("0d16");
        re.render = te, re.__scopeId = "data-v-eb6a1540";
        var ce = re,
            ne = {
                data: function() {
                    return {
                        boardName: ""
                    }
                },
                components: {
                    StarIcon: ce,
                    CreateBoardForm: N
                },
                methods: Object(w["a"])({}, Object(O["b"])(["setCursor"]))
            };
        r("3af8");
        ne.render = T, ne.__scopeId = "data-v-3a087c0a";
        var ae = ne,
            oe = Object(n["F"])("data-v-ed5c8a2c");
        Object(n["s"])("data-v-ed5c8a2c");
        var se = {
                class: "draw-inner",
                ref: "drawInner"
            },
            ie = {
                class: "draw-canvas",
                ref: "canvas"
            },
            le = {
                class: "bg-stroke",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1246",
                height: "862",
                viewBox: "0 0 1246 862",
                ref: "bgStroke"
            },
            de = Object(n["j"])("path", {
                fill: "none",
                stroke: "#000",
                "stroke-width": "1.5",
                "vector-effect": "non-scaling-stroke",
                d: "M34.33 182.582c0 74.973-74.293 234.994 0 224.919 96.835-13.132 105.394-164.593 158.77-246.45 30.801-47.236 62.1-94.149 93.755-140.817 4.316-6.363 9.057-12.455 14.128-18.234.557-.634 2.366-1.49 2.445-.65 3.222 34.22-7.67 69.805-14.155 102.089-36.99 184.124-10.34 45.122-57.815 253.764-2.868 12.608-4.815 25.416-6.629 38.218-.4 2.832-2.349 6.95 0 8.58 2.11 1.466.535-5.168 1.469-7.56 1.433-3.671 3.297-7.206 5.556-10.436 10.767-15.394 21.408-30.94 33.461-45.348 8.313-9.936 17.876-18.79 27.475-27.491 11.376-10.314 22.992-20.431 35.386-29.497 15.09-11.036 31.057-20.833 46.93-30.71 11.427-7.109 23.03-13.96 34.939-20.229 11.404-6.003 23.04-11.606 34.938-16.555 20.696-8.608 41.75-16.338 62.782-24.089 5.498-2.026 11.033-4.104 16.783-5.231 3.241-.635 7.93-2.645 9.909 0 2.645 3.537.89 8.923 0 13.25-13.433 65.23-25.575 111.445-48.566 173.68-18.226 49.338-32.843 92.708-63.37 134.17-46.701 63.427-148.57 96.794-223.442 106.23-1.351.171 1.102-2.712 2.285-3.384 8.992-5.11 18.85-8.587 27.826-13.724 54.986-31.471 108.508-65.498 164.001-96.067 36.825-20.286 75.058-37.907 112.807-56.417 42.12-20.653 84.175-41.464 126.794-61.067 79.5-36.566 159.845-71.268 239.53-107.426 15.833-7.184 31.094-15.598 47.01-22.595 18.925-8.32 38.513-15.071 57.463-23.333 6.435-2.806 12.715-6.043 18.62-9.838 4.117-2.645 7.564-12.553 11.29-9.381 19.014 16.19 31.445 38.814 46.596 58.667 11.717 15.355 22.264 31.58 33.988 46.93 13.105 17.157 27.28 33.476 40.478 50.562 7.407 9.59 14.571 19.379 21.32 29.443 13.414 20.008 27.772 39.51 39.149 60.742 14.753 27.532 26.379 56.632 39.044 85.183 2.921 6.586 5.923 13.214 7.702 20.195 3.824 15.012 7.106 30.216 9.055 45.585 1.083 8.533 1.32 17.304 0 25.804-2.597 16.728-45.92 43.442-60.364 52.926-55.998 36.77-114.548 67.002-177.883 88.972-34.187 11.86-67.963 25.23-102.986 34.323-87.437 22.703-217.839 35.321-300.255 45.585-11.935 1.487-23.859 3.13-35.844 4.124-4.603.382-9.59 1.768-13.856 0-21.982-9.112-42.24-21.946-63.731-32.16-22.3-10.599-45.226-19.84-67.609-30.262-32.253-15.017-64.007-31.092-96.287-46.05-23.984-11.115-106.833-52.106-137.01-52.725-5.487-.112-20.486 4.85-16.423 1.16 12.587-11.427 79.456-50.107 97.58-59.844"
            }, null, -1);
        Object(n["r"])();
        var ue = oe((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("section", {
                    class: "draw-container",
                    onMousemove: t[1] || (t[1] = function() {
                        return e.drawLine.apply(e, arguments)
                    }),
                    onMouseup: t[2] || (t[2] = function(t) {
                        return e.setMouseDown(!1)
                    }),
                    onMousedown: t[3] || (t[3] = function(t) {
                        return e.setMouseDown(!0)
                    }),
                    onMouseleave: t[4] || (t[4] = function() {
                        return e.onMouseLeave.apply(e, arguments)
                    })
                }, [Object(n["j"])("div", se, [Object(n["j"])("canvas", ie, null, 512), Object(n["u"])(e.$slots, "default"), (Object(n["q"])(), Object(n["e"])("svg", le, [de], 512))], 512)], 32)
            })),
            he = {
                data: function() {
                    return {
                        prevX: 0,
                        prevY: 0,
                        currX: 0,
                        currY: 0,
                        canvas: null,
                        isMouseDown: !1
                    }
                },
                methods: Object(w["a"])(Object(w["a"])({}, Object(O["b"])(["setCursor"])), {}, {
                    drawLine: function(e) {
                        var t = this.$refs.canvas,
                            r = e.clientX,
                            c = e.clientY - t.getBoundingClientRect().top;
                        "point" === this.cursor && this.setCursor("pencil"), this.isMouseDown && (this.prevX = this.currX, this.prevY = this.currY, this.currX = r, this.currY = c, this.ctx.beginPath(), this.ctx.moveTo(this.prevX || this.currX, this.prevY || this.currY), this.ctx.lineTo(this.currX, this.currY), this.ctx.lineWidth = 2, this.ctx.stroke(), this.ctx.closePath())
                    },
                    setMouseDown: function(e) {
                        this.isMouseDown = e, this.currX = 0, this.currY = 0
                    },
                    onMouseLeave: function() {
                        this.setMouseDown(!1), this.setCursor("point")
                    }
                }),
                computed: Object(w["a"])({}, Object(O["c"])(["cursor"])),
                mounted: function() {
                    var e = this.$refs,
                        t = e.canvas,
                        r = e.bgStroke,
                        c = e.drawInner;
                    this.ctx = t.getContext("2d"), t.width = c.offsetWidth, t.height = c.offsetHeight, k["a"].to(r, {
                        strokeDashoffset: 0,
                        duration: 1.5,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: r,
                            start: "top 0%+=500",
                            end: "+=1",
                            toggleActions: "play none reverse none"
                        }
                    })
                }
            };
        r("5989");
        he.render = ue, he.__scopeId = "data-v-ed5c8a2c";
        var fe = he,
            ve = Object(n["F"])("data-v-7edfc935");
        Object(n["s"])("data-v-7edfc935");
        var be = {
                class: "section",
                ref: "section"
            },
            je = {
                class: "bg-transition",
                ref: "bgTransition"
            },
            ge = {
                class: "heading-container"
            },
            pe = Object(n["j"])("span", {
                class: "text--yellow"
            }, "Create a board", -1),
            me = Object(n["j"])("br", null, null, -1),
            we = Object(n["i"])(" and rock the meeting "),
            Oe = {
                ref: "input"
            },
            Me = Object(n["j"])("div", {
                class: "square-stroke"
            }, null, -1),
            xe = {
                ref: "squareStrokeMoved",
                class: "square-stroke"
            },
            ke = {
                ref: "hLine",
                class: "v-line"
            },
            ze = {
                xmlns: "http://www.w3.org/2000/svg",
                ref: "bgStroke",
                class: "bg-stroke",
                viewBox: "0 0 119 512"
            },
            ye = Object(n["j"])("path", {
                fill: "transparent",
                "stroke-width": "6",
                d: "M119 431.067c0-1.53-.398-2.819-.925-2.99L10.15 392.124l107.925-35.918c.573-.187.984-1.681.918-3.335-.056-1.391-.436-2.488-.918-2.647L10.15 314.285l107.925-35.93c.573-.19.984-1.684.918-3.337-.056-1.392-.436-2.488-.918-2.648L10.152 236.446l107.923-35.93c.527-.175.925-1.461.925-2.991s-.398-2.82-.925-2.991L10.157 158.622l107.918-35.895c.573-.19.984-1.683.918-3.337-.056-1.388-.436-2.488-.918-2.644L10.152 80.818l107.923-35.924c.573-.187.984-1.684.918-3.334-.056-1.392-.436-2.491-.918-2.648L1.163 0 .925 5.982l107.921 35.921L.925 77.827c-.573.187-.985 1.681-.918 3.335.055 1.391.435 2.488.918 2.647l107.92 35.928L.924 155.63c-.573.19-.985 1.68-.918 3.334.055 1.392.435 2.488.918 2.648l107.921 35.912L.925 233.455c-.573.187-.985 1.68-.918 3.334.055 1.392.435 2.488.918 2.648l107.922 35.927L.925 311.292c-.573.19-.985 1.683-.918 3.337.055 1.391.435 2.488.918 2.647l107.923 35.94L.925 389.134c-.573.193-.985 1.684-.918 3.337.055 1.389.435 2.488.918 2.645l107.932 35.951L.924 467.046c-.573.192-.984 1.686-.917 3.34.055 1.389.435 2.482.917 2.645L117.836 512l.24-5.982L10.14 470.037l107.936-35.979c.526-.175.924-1.46.924-2.99"
            }, null, -1);
        Object(n["r"])();
        var Le = ve((function(e, t) {
                var r = Object(n["v"])("base-heading"),
                    c = Object(n["v"])("create-board-form"),
                    a = Object(n["v"])("rectangles-shape"),
                    o = Object(n["v"])("base-container");
                return Object(n["q"])(), Object(n["e"])("section", be, [Object(n["j"])("div", je, null, 512), Object(n["j"])(o, {
                    class: "section-container"
                }, {
                    default: ve((function() {
                        return [Object(n["j"])("div", ge, [Object(n["j"])(r, {
                            class: "heading",
                            level: "2",
                            color: "white"
                        }, {
                            default: ve((function() {
                                return [pe, me, we]
                            })),
                            _: 1
                        })]), Object(n["j"])("div", Oe, [Object(n["j"])(c, {
                            onMouseenter: t[1] || (t[1] = function(t) {
                                return e.setCursor("input")
                            }),
                            onMouseLeave: t[2] || (t[2] = function(t) {
                                return e.setCursor("pointer")
                            })
                        })], 512), Object(n["j"])(a, {
                            class: "blocks-small-rectangles",
                            animate: !0
                        }), Me, Object(n["j"])("div", xe, null, 512), Object(n["j"])("div", ke, null, 512), (Object(n["q"])(), Object(n["e"])("svg", ze, [ye], 512))]
                    })),
                    _: 1
                }), Object(n["j"])("canvas", {
                    class: "blocks-canvas",
                    ref: "canvas",
                    onMouseenter: t[3] || (t[3] = function(t) {
                        return e.setCursor("pointer-bottom")
                    }),
                    onMouseleave: t[4] || (t[4] = function(t) {
                        return e.setCursor("point")
                    })
                }, null, 544)], 512)
            })),
            Be = Object(n["F"])("data-v-8da6f9ae");
        Object(n["s"])("data-v-8da6f9ae");
        var Ce = {
            class: "rectangles"
        };
        Object(n["r"])();
        var Fe = Be((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("div", Ce, [(Object(n["q"])(), Object(n["e"])(n["b"], null, Object(n["t"])(12, (function(e) {
                    return Object(n["j"])("div", {
                        class: "rectangle",
                        key: e
                    })
                })), 64))])
            })),
            Ve = {
                props: {
                    animate: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.animate && k["a"].fromTo(this.$el.querySelectorAll(".rectangle"), {
                        y: 50,
                        autoAlpha: 0
                    }, {
                        duration: .1,
                        autoAlpha: 1,
                        y: 0,
                        stagger: {
                            each: .05,
                            from: "random"
                        },
                        scrollTrigger: {
                            trigger: this.$el,
                            start: "top 100%-=200",
                            end: "+=200",
                            scrub: !0
                        }
                    })
                }
            };
        r("3756");
        Ve.render = Fe, Ve.__scopeId = "data-v-8da6f9ae";
        var Ae = Ve,
            qe = r("b8bf"),
            Ie = r("55cc"),
            He = r.n(Ie),
            Se = function(e, t, r) {
                var c = window.innerWidth + 50,
                    n = Math.max(.5, Math.min(c / 1920, 1)),
                    a = r.getBoundingClientRect(),
                    o = qe["Engine"].create(),
                    s = qe["Render"].create({
                        canvas: e,
                        engine: o,
                        options: {
                            wireframes: !1,
                            width: c,
                            height: t,
                            background: "transparent"
                        }
                    }),
                    i = qe["Bodies"].circle(c / 2 + 100, t - 400, 62, {
                        render: {
                            sprite: {
                                texture: He.a
                            }
                        },
                        restitution: .5
                    }),
                    l = function(e) {
                        return {
                            render: {
                                fillStyle: e,
                                strokeStyle: "black",
                                lineWidth: 7
                            },
                            friction: 0,
                            restitution: .8
                        }
                    },
                    d = {
                        isStatic: !0,
                        restitution: 0,
                        render: {
                            fillStyle: "transparent"
                        }
                    },
                    u = qe["Bodies"].rectangle(400 * n, t - 300, 80 * n, 80 * n, l("#aac5da")),
                    h = qe["Bodies"].rectangle(c / 2, t - 300, 250 * n, 30 * n, l("#f1d624")),
                    f = qe["Bodies"].rectangle(c / 2 - 100, t - 300, 200 * n, 300 * n, l("#fff")),
                    v = qe["Bodies"].polygon(c / 2, 150, 3, 60 * n, l("#e0dcfa")),
                    b = qe["Bodies"].circle(c / 2, t - 100, 60 * n, l("#f99c9d")),
                    j = qe["Bodies"].circle(c / 2, t - 300, 120 * n, l("#f1d624")),
                    g = qe["Bodies"].rectangle(0, t / 2, 50, t, d),
                    p = qe["Bodies"].rectangle(c, t / 2, 50, t, d),
                    m = qe["Bodies"].rectangle(c / 2, 0, c, 50, d),
                    w = qe["Bodies"].rectangle(c / 2, t, c, 50, d);
                if (window.innerWidth > 768) {
                    var O = qe["Bodies"].rectangle(a.x + a.width / 2 + 25, r.offsetTop + a.height / 2 - 30, a.width, a.height, d);
                    qe["World"].add(o.world, O)
                }
                var M = qe["Mouse"].create(s.canvas);
                M.element.removeEventListener("mousewheel", M.mousewheel), M.element.removeEventListener("DOMMouseScroll", M.mousewheel), M.element.removeEventListener("touchmove", M.mousemove), M.element.removeEventListener("touchstart", M.mousedown), M.element.removeEventListener("touchend", M.mouseup);
                var x = qe["MouseConstraint"].create(o, {
                    mouse: M,
                    constraint: {
                        stiffness: .5,
                        render: {
                            visible: !1
                        }
                    }
                });
                return o.world.gravity.y = .6, qe["World"].add(o.world, i), qe["World"].add(o.world, [u, h, f, b, j, v]), qe["World"].add(o.world, [g, p, m, w]), qe["World"].add(o.world, x),
                    function() {
                        qe["Engine"].run(o), qe["Render"].run(s)
                    }
            },
            Ee = Se,
            Te = {
                components: {
                    CreateBoardForm: N,
                    RectanglesShape: Ae
                },
                mounted: function() {
                    var e = this.$refs,
                        t = e.bgStroke,
                        r = e.bgTransition,
                        c = e.squareStrokeMoved,
                        n = e.section,
                        a = e.canvas,
                        o = e.input,
                        s = e.hLine,
                        i = Ee(a, n.offsetHeight, o);
                    z["b"].create({
                        trigger: this.$el,
                        start: "top 80%",
                        once: !0,
                        onEnter: i
                    }), k["a"].to(t, {
                        strokeDashoffset: 0,
                        y: -50,
                        scrollTrigger: {
                            trigger: n,
                            start: "top 100%",
                            end: "top 50%",
                            scrub: .5,
                            ease: "elastic.out(1, 0.3)"
                        }
                    }), k["a"].to(c, {
                        x: "-30%",
                        y: "30%",
                        duration: 1,
                        scrollTrigger: {
                            trigger: n,
                            start: "top 90%",
                            end: "top 60%",
                            scrub: 1
                        }
                    }), k["a"].from(s, {
                        duration: 1,
                        autoAlpha: 0,
                        scaleY: 0,
                        y: "30%",
                        scrollTrigger: {
                            trigger: n,
                            start: "top 70%",
                            end: "top 40%",
                            scrub: !0
                        }
                    }), z["b"].matchMedia({
                        "(min-width: 768px)": function() {
                            k["a"].from(r, {
                                xPercent: 200,
                                skewX: "-60deg",
                                duration: .5,
                                ease: "power4.out",
                                scrollTrigger: {
                                    trigger: n,
                                    start: "top 100%-=300",
                                    end: "+=1",
                                    toggleActions: "play none reverse none"
                                }
                            })
                        }
                    })
                },
                methods: Object(w["a"])({}, Object(O["b"])(["setCursor"]))
            };
        r("36ce");
        Te.render = Le, Te.__scopeId = "data-v-7edfc935";
        var De = Te,
            Re = r("069c"),
            We = r.n(Re),
            Ye = r("540b"),
            Pe = r.n(Ye),
            Ge = r("c77d"),
            Je = r.n(Ge),
            Xe = r("d78c"),
            Ue = r.n(Xe),
            Qe = Object(n["F"])("data-v-3b36bfdc");
        Object(n["s"])("data-v-3b36bfdc");
        var Ke = {
                class: "section-hero",
                ref: "section",
                id: "hero"
            },
            Ne = Object(n["j"])("div", {
                class: "hero-background"
            }, null, -1),
            Ze = {
                ref: "online",
                class: "span"
            },
            _e = {
                ref: "collab",
                class: "span"
            },
            $e = Object(n["j"])("span", {
                class: "span"
            }, [Object(n["i"])(" for "), Object(n["j"])("span", {
                class: "text--red"
            }, "remote"), Object(n["i"])(" teams ")], -1),
            et = Object(n["j"])("img", {
                class: "hero-img",
                src: We.a
            }, null, -1),
            tt = Object(n["j"])("img", {
                class: "scroll-background scroll-element",
                src: Pe.a
            }, null, -1),
            rt = Object(n["j"])("img", {
                class: "scroll-inner scroll-element",
                src: Je.a
            }, null, -1),
            ct = Object(n["j"])("img", {
                class: "scroll-icon scroll-element",
                src: Ue.a
            }, null, -1),
            nt = Object(n["j"])("div", {
                class: "space"
            }, null, -1),
            at = {
                class: "hero-marquee-bar"
            };
        Object(n["r"])();
        var ot = Qe((function(e, t) {
                var r = Object(n["v"])("base-heading"),
                    c = Object(n["v"])("base-container"),
                    a = Object(n["v"])("marquee-bar");
                return Object(n["q"])(), Object(n["e"])(n["b"], null, [Object(n["j"])("section", Ke, [Ne, Object(n["j"])(c, {
                    class: "hero-container"
                }, {
                    default: Qe((function() {
                        return [Object(n["j"])(r, {
                            level: "1",
                            color: "white",
                            class: "hero",
                            mouseShadow: !1
                        }, {
                            default: Qe((function() {
                                return [Object(n["j"])("span", Ze, "Moim", 512), Object(n["j"])("span", _e, "collaboration app", 512), $e]
                            })),
                            _: 1
                        }), et, Object(n["j"])("div", {
                            class: "hero-scroll pointer",
                            onClick: t[1] || (t[1] = function() {
                                return e.scrollToBoard.apply(e, arguments)
                            })
                        }, [tt, rt, ct])]
                    })),
                    _: 1
                }), nt, Object(n["j"])("canvas", {
                    class: "like-canvas",
                    ref: "canvas",
                    onClick: t[2] || (t[2] = function() {
                        return e.addLike.apply(e, arguments)
                    }),
                    onMouseenter: t[3] || (t[3] = function(t) {
                        return e.setCursor("pointer-hero")
                    }),
                    onMouseleave: t[4] || (t[4] = function(t) {
                        return e.setCursor("point")
                    })
                }, null, 544)], 512), Object(n["j"])("section", at, [Object(n["j"])(a, {
                })])], 64)
            })),
            st = r("9ff4"),
            it = r("87d2"),
            lt = r.n(it),
            dt = r("447c"),
            ut = r.n(dt),
            ht = r("c2f7"),
            ft = r.n(ht),
            vt = Object(n["F"])("data-v-51400ad4");
        Object(n["s"])("data-v-51400ad4");
        var bt = {
                class: "marquee-text-wrapper"
            },
            jt = {
                class: "marquee-text"
            },
            gt = {
                key: 0,
                src: lt.a
            },
            pt = {
                class: "marquee-text"
            },
            mt = {
                key: 1,
                src: ut.a
            },
            wt = {
                class: "marquee-text"
            },
            Ot = {
                key: 2,
                src: ft.a
            },
            Mt = {
                class: "marquee-text"
            },
            xt = {
                key: 3,
                src: lt.a
            },
            kt = {
                class: "marquee-text"
            },
            zt = {
                key: 4,
                src: ut.a
            },
            yt = {
                class: "marquee-text"
            },
            Lt = {
                key: 5,
                src: ft.a
            },
            Bt = {
                class: "marquee-text"
            },
            Ct = {
                key: 6,
                src: lt.a
            },
            Ft = {
                class: "marquee-text-wrapper"
            },
            Vt = {
                class: "marquee-text"
            },
            At = {
                key: 0,
                src: ut.a
            },
            qt = {
                class: "marquee-text"
            },
            It = {
                key: 1,
                src: ft.a
            },
            Ht = {
                class: "marquee-text"
            },
            St = {
                key: 2,
                src: lt.a
            },
            Et = {
                class: "marquee-text"
            },
            Tt = {
                key: 3,
                src: ut.a
            },
            Dt = {
                class: "marquee-text"
            },
            Rt = {
                key: 4,
                src: ft.a
            },
            Wt = {
                class: "marquee-text"
            },
            Yt = {
                key: 5,
                src: lt.a
            },
            Pt = {
                class: "marquee-text"
            },
            Gt = {
                key: 6,
                src: ut.a
            };
        Object(n["r"])();
        var Jt = vt((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("div", {
                    class: "marquee-bar marquee-bar--".concat(e.color)
                }, [Object(n["j"])("div", bt, [Object(n["j"])("span", jt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", gt)) : Object(n["f"])("", !0), Object(n["j"])("span", pt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", mt)) : Object(n["f"])("", !0), Object(n["j"])("span", wt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", Ot)) : Object(n["f"])("", !0), Object(n["j"])("span", Mt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", xt)) : Object(n["f"])("", !0), Object(n["j"])("span", kt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", zt)) : Object(n["f"])("", !0), Object(n["j"])("span", yt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", Lt)) : Object(n["f"])("", !0), Object(n["j"])("span", Bt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", Ct)) : Object(n["f"])("", !0)]), Object(n["j"])("div", Ft, [Object(n["j"])("span", Vt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", At)) : Object(n["f"])("", !0), Object(n["j"])("span", qt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", It)) : Object(n["f"])("", !0), Object(n["j"])("span", Ht, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", St)) : Object(n["f"])("", !0), Object(n["j"])("span", Et, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", Tt)) : Object(n["f"])("", !0), Object(n["j"])("span", Dt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", Rt)) : Object(n["f"])("", !0), Object(n["j"])("span", Wt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", Yt)) : Object(n["f"])("", !0), Object(n["j"])("span", Pt, Object(st["F"])(e.text), 1), e.images ? (Object(n["q"])(), Object(n["e"])("img", Gt)) : Object(n["f"])("", !0)])], 2)
            })),
            Xt = (r("caad"), {
                props: {
                    text: {
                        type: String,
                        required: !0
                    },
                    images: {
                        type: String,
                        required: !1
                    },
                    color: {
                        type: String,
                        required: !0,
                        validator: function(e) {
                            return ["yellow", "violet", "red", "blue"].includes(e)
                        }
                    },
                    rotate: {
                        type: Number,
                        default: 0
                    }
                }
            });
        r("c33e");
        Xt.render = Jt, Xt.__scopeId = "data-v-51400ad4";
        var Ut = Xt,
            Qt = r("1a53"),
            Kt = r.n(Qt),
            Nt = r("d86c"),
            Zt = r.n(Nt),
            _t = r("186b"),
            $t = r.n(_t),
            er = function(e, t, r, c) {
                var n = window.innerWidth,
                    a = r.getBoundingClientRect(),
                    o = c.getBoundingClientRect(),
                    s = qe["Engine"].create(),
                    i = qe["Render"].create({
                        canvas: e,
                        engine: s,
                        options: {
                            width: n,
                            height: t,
                            wireframes: !1,
                            background: "transparent"
                        }
                    }),
                    l = {
                        isStatic: !0,
                        restitution: 0,
                        render: {
                            fillStyle: "transparent"
                        }
                    },
                    d = qe["Bodies"].rectangle(0, t / 2, 1, t, l),
                    u = qe["Bodies"].rectangle(n, t / 2, 1, t, l),
                    h = qe["Bodies"].rectangle(n / 2, 0, n, 1, l),
                    f = qe["Bodies"].rectangle(n / 2, t - 250, n, 1, {
                        isStatic: !0,
                        restitution: 0,
                        render: {
                            fillStyle: "transparent"
                        },
                        angle: .06
                    }),
                    v = qe["Bodies"].rectangle(a.x + a.width / 2 - 40, a.y + a.height / 2 + 10, a.width - 70, a.height, {
                        isStatic: !0,
                        restitution: 0,
                        render: {
                            fillStyle: "transparent"
                        },
                        angle: -.02
                    }),
                    b = qe["Bodies"].rectangle(o.x + o.width / 2 - 130, o.y + o.height / 2 + 15, o.width - 230, o.height - 10, {
                        isStatic: !0,
                        restitution: 0,
                        render: {
                            fillStyle: "transparent"
                        },
                        angle: .015
                    }),
                    j = qe["Mouse"].create(i.canvas),
                    g = qe["MouseConstraint"].create(s, {
                        mouse: j,
                        constraint: {
                            stiffness: .5,
                            render: {
                                visible: !1
                            }
                        }
                    });
                j.element.removeEventListener("mousewheel", j.mousewheel), j.element.removeEventListener("DOMMouseScroll", j.mousewheel);
                var p = qe["Bodies"].circle(100, 30, 30, {
                        render: {
                            sprite: {
                                texture: Zt.a
                            }
                        }
                    }),
                    m = qe["Bodies"].circle(500, 20, 30, {
                        render: {
                            sprite: {
                                texture: Kt.a
                            }
                        }
                    }),
                    w = qe["Bodies"].circle(600, 10, 30, {
                        render: {
                            sprite: {
                                texture: $t.a
                            }
                        }
                    }),
                    O = qe["Bodies"].circle(1100, 30, 30, {
                        render: {
                            sprite: {
                                texture: Kt.a
                            }
                        }
                    });
                return qe["World"].add(s.world, [d, u, h, f, v, b]), qe["World"].add(s.world, [p, m, w, O]), qe["World"].add(s.world, g), qe["Engine"].run(s), qe["Render"].run(i), s
            },
            tr = er,
            rr = {
                components: {
                    MarqueeBar: Ut
                },
                methods: Object(w["a"])({
                    addLike: function(e) {
                        var t = qe["Bodies"].circle(e.clientX, window.scrollY + e.clientY, 30, {
                            render: {
                                sprite: {
                                    texture: [Kt.a, Zt.a, $t.a][Math.floor(3 * Math.random())]
                                }
                            }
                        });
                        qe["World"].add(this.engine.world, [t])
                    },
                    scrollToBoard: function() {
                        k["a"].to(window, {
                            duration: 1.4,
                            scrollTo: "#create-board"
                        })
                    }
                }, Object(O["b"])(["setCursor"])),
                mounted: function() {
                    var e = this.$refs,
                        t = e.canvas,
                        r = e.section,
                        c = e.online,
                        n = e.collab;
                    this.engine = tr(t, r.offsetHeight, c, n)
                }
            };
        r("7be0");
        rr.render = ot, rr.__scopeId = "data-v-3b36bfdc";
        var cr = rr,
            nr = Object(n["F"])("data-v-2aeca896");
        Object(n["s"])("data-v-2aeca896");
        var ar = Object(n["j"])("span", {
                class: "text--yellow"
            }, "Don't limit", -1),
            or = Object(n["i"])(" yourself! "),
            sr = Object(n["j"])("br", null, null, -1),
            ir = Object(n["i"])(" Use board for: "),
            lr = {
                class: "img-window",
                ref: "imgWindow"
            };
        Object(n["r"])();
        var dr = nr((function(e, t) {
                var c = Object(n["v"])("base-heading"),
                    a = Object(n["v"])("base-container"),
                    o = Object(n["v"])("marquee-bar"),
                    s = Object(n["v"])("browser-window");
                return Object(n["q"])(), Object(n["e"])("section", {
                    class: "tool-use",
                    id: "the-use",
                    onMouseenter: t[5] || (t[5] = function(t) {
                        return e.setCursor("eye")
                    }),
                    onMouseleave: t[6] || (t[6] = function(t) {
                        return e.setCursor("point")
                    })
                }, [Object(n["j"])(a, {
                    class: "heading-container"
                }, {
                    default: nr((function() {
                        return [Object(n["j"])(c, {
                            class: "section-heading",
                            level: "2",
                            color: "white"
                        }, {
                            default: nr((function() {
                                return [ar, or, sr, ir]
                            })),
                            _: 1
                        })]
                    })),
                    _: 1
                }), Object(n["j"])(o, {
                    class: "marquee--1",
                    text: "Remote brainstorms",
                    color: "yellow",
                    onMouseenter: t[1] || (t[1] = function(t) {
                        return e.showImage("remote-brainstorm")
                    }),
                    onMousemove: e.moveImage,
                    onMouseleave: e.hideImage
                }, null, 8, ["onMousemove", "onMouseleave"]), Object(n["j"])(o, {
                    class: "marquee--2",
                    text: "Kanban-style plannings",
                    color: "violet",
                    onMouseenter: t[2] || (t[2] = function(t) {
                        return e.showImage("kanban-style")
                    }),
                    onMousemove: e.moveImage,
                    onMouseleave: e.hideImage
                }, null, 8, ["onMousemove", "onMouseleave"]), Object(n["j"])(o, {
                    class: "marquee--3",
                    text: "System story creation",
                    color: "blue",
                    onMouseenter: t[3] || (t[3] = function(t) {
                        return e.showImage("system-story")
                    }),
                    onMousemove: e.moveImage,
                    onMouseleave: e.hideImage
                }, null, 8, ["onMousemove", "onMouseleave"]), Object(n["j"])(o, {
                    class: "marquee--4",
                    text: "How to rule world meetings",
                    color: "red",
                    onMouseenter: t[4] || (t[4] = function(t) {
                        return e.showImage("team-feedback")
                    }),
                    onMousemove: e.moveImage,
                    onMouseleave: e.hideImage
                }, null, 8, ["onMousemove", "onMouseleave"]), Object(n["j"])("div", lr, [Object(n["j"])(s, null, {
                    default: nr((function() {
                        return [Object(n["j"])("img", {
                            src: r("e078")("./".concat(e.currentImage, ".png"))
                        }, null, 8, ["src"])]
                    })),
                    _: 1
                })], 512)], 32)
            })),
            ur = Object(n["F"])("data-v-b8ac04ae");
        Object(n["s"])("data-v-b8ac04ae");
        var hr = {
                class: "browser-window"
            },
            fr = Object(n["j"])("div", {
                class: "bar-icons"
            }, [Object(n["j"])("div", {
                class: "bar-icon"
            }), Object(n["j"])("div", {
                class: "bar-icon"
            }), Object(n["j"])("div", {
                class: "bar-icon"
            })], -1);
        Object(n["r"])();
        var vr = ur((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("div", hr, [fr, Object(n["u"])(e.$slots, "default")])
            })),
            br = {};
        r("1545");
        br.render = vr, br.__scopeId = "data-v-b8ac04ae";
        var jr = br,
            gr = {
                data: function() {
                    return {
                        currentImage: "remote-brainstorm"
                    }
                },
                components: {
                    BrowserWindow: jr,
                    MarqueeBar: Ut
                },
                methods: Object(w["a"])(Object(w["a"])({}, Object(O["b"])(["setCursor"])), {}, {
                    showImage: function(e) {
                        this.currentImage = e
                    },
                    moveImage: function(e) {
                        var t = this.$el.getBoundingClientRect().top,
                            r = this.$refs.imgWindow.offsetHeight;
                        this.$refs.imgWindow.style.visibility = "visible", this.$refs.imgWindow.style.top = "".concat(e.clientY - t - r - 20, "px"), this.$refs.imgWindow.style.right = "".concat(e.clientX, "px")
                    },
                    hideImage: function() {
                        this.$refs.imgWindow.style.visibility = "hidden"
                    }
                })
            };
        r("72ab");
        gr.render = dr, gr.__scopeId = "data-v-2aeca896";
        var pr = gr,
            mr = r("3fc0"),
            wr = r.n(mr),
            Or = r("56a0"),
            Mr = r.n(Or),
            xr = Object(n["F"])("data-v-3b938de0");
        Object(n["s"])("data-v-3b938de0");
        var kr = {
                class: "section"
            },
            zr = {
                class: "bg-transition-lines"
            },
            yr = {
                class: "bg-transition-rectangle",
                ref: "transitionRectangle"
            },
            Lr = Object(n["i"])(" Why "),
            Br = Object(n["j"])("span", {
                class: "text--yellow"
            }, "you will love", -1),
            Cr = Object(n["i"])(" Boldare Boards "),
            Fr = Object(n["i"])(" Boldare Boards helps to make online meetings as good as offline. Minus a pile of sticky notes on the floor, of course. Thanks to Boldare Boards you can: "),
            Vr = {
                class: "feature-container"
            },
            Ar = {
                class: "siema"
            },
            qr = {
                class: "arrow-carousel arrow-carousel--prev"
            },
            Ir = Object(n["j"])("span", {
                class: "arrow-shadow"
            }, null, -1),
            Hr = {
                class: "arrow-carousel arrow-carousel--next"
            },
            Sr = Object(n["j"])("span", {
                class: "arrow-shadow"
            }, null, -1),
            Er = {
                class: "nav"
            },
            Tr = {
                class: "features-bg",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 974 1160",
                ref: "featuresBg"
            },
            Dr = Object(n["j"])("path", {
                fill: "#f99c9d",
                "fill-rule": "evenodd",
                d: "",
                transform: "rotate(90 1210 264.007)"
            }, null, -1);
        Object(n["r"])();
        var Rr = xr((function(e, t) {
                var r = Object(n["v"])("rectangles-shape"),
                    c = Object(n["v"])("base-heading"),
                    a = Object(n["v"])("base-paragraph"),
                    o = Object(n["v"])("base-container"),
                    s = Object(n["v"])("feature-organize"),
                    i = Object(n["v"])("feature-collaboration"),
                    l = Object(n["v"])("feature-prioritize"),
                    d = Object(n["v"])("feature-timer"),
                    u = Object(n["v"])("feature-save"),
                    h = Object(n["v"])("feature-merge");
                return Object(n["q"])(), Object(n["e"])("section", kr, [Object(n["j"])("div", zr, [(Object(n["q"])(), Object(n["e"])(n["b"], null, Object(n["t"])(20, (function(e) {
                    return Object(n["j"])("div", {
                        key: e,
                        class: "bg-transition-line"
                    })
                })), 64))]), Object(n["j"])("div", yr, null, 512), Object(n["j"])(o, {
                    class: "features-heading-container"
                }, {
                    default: xr((function() {
                        return [Object(n["j"])(r, {
                            class: "small-rectangles"
                        }), Object(n["j"])(c, {
                            class: "feature-heading",
                            level: "2",
                            color: "white"
                        }, {
                            default: xr((function() {
                                return [Lr, Br, Cr]
                            })),
                            _: 1
                        }), Object(n["j"])(a, null, {
                            default: xr((function() {
                                return [Fr]
                            })),
                            _: 1
                        })]
                    })),
                    _: 1
                }), Object(n["j"])("div", Vr, [Object(n["j"])("div", Ar, [Object(n["j"])("div", null, [Object(n["j"])(s, {
                    class: "feature"
                })]), Object(n["j"])("div", null, [Object(n["j"])(i, {
                    class: "feature"
                })]), Object(n["j"])("div", null, [Object(n["j"])(l, {
                    class: "feature"
                })]), Object(n["j"])("div", null, [Object(n["j"])(d, {
                    class: "feature"
                })]), Object(n["j"])("div", null, [Object(n["j"])(u, {
                    class: "feature"
                })]), Object(n["j"])("div", null, [Object(n["j"])(h, {
                    class: "feature"
                })])]), Object(n["j"])("div", qr, [Object(n["j"])("img", {
                    class: "prev pointer",
                    onClick: t[1] || (t[1] = function(t) {
                        return e.siema.prev()
                    }),
                    src: wr.a
                }), Ir]), Object(n["j"])("div", Hr, [Object(n["j"])("img", {
                    class: "next pointer",
                    onClick: t[2] || (t[2] = function(t) {
                        return e.siema.next()
                    }),
                    src: Mr.a
                }), Sr])]), Object(n["j"])("div", Er, [(Object(n["q"])(), Object(n["e"])(n["b"], null, Object(n["t"])(6, (function(t) {
                    return Object(n["j"])("div", {
                        key: t,
                        class: ["nav-item pointer", [e.currentSlide === t - 1 && "nav-item--active"]],
                        onClick: function(r) {
                            return e.siema.goTo(t - 1)
                        }
                    }, null, 10, ["onClick"])
                })), 64))]), (Object(n["q"])(), Object(n["e"])("svg", Tr, [Dr], 512))])
            })),
            Wr = r("a06b"),
            Yr = r.n(Wr),
            Pr = r("f5de"),
            Gr = r.n(Pr),
            Jr = r("17e4"),
            Xr = r.n(Jr),
            Ur = Object(n["F"])("data-v-c1adc4de");
        Object(n["s"])("data-v-c1adc4de");
        var Qr = {
                class: "feature-collaboration"
            },
            Kr = Object(n["i"])("Collaborate with your team remotely"),
            Nr = Object(n["i"])(" Make your online meetings really meaningful and effective for everyone, regardless of whether they’re working from the beach or dad’s garage. "),
            Zr = {
                class: "feature-images"
            },
            _r = Object(n["j"])("img", {
                src: Gr.a
            }, null, -1),
            $r = Object(n["j"])("img", {
                src: Xr.a
            }, null, -1);
        Object(n["r"])();
        var ec = Ur((function(e, t) {
                var r = Object(n["v"])("text-browser-window"),
                    c = Object(n["v"])("browser-window");
                return Object(n["q"])(), Object(n["e"])("div", Qr, [Object(n["j"])(r, {
                    class: "feature-text"
                }, {
                    header: Ur((function() {
                        return [Kr]
                    })),
                    paragraph: Ur((function() {
                        return [Nr]
                    })),
                    _: 1
                }), Object(n["j"])("div", Zr, [Object(n["j"])(c, {
                    class: "feature-img--1"
                }, {
                    default: Ur((function() {
                        return [_r]
                    })),
                    _: 1
                }), Object(n["j"])(c, {
                    class: "feature-img--2"
                }, {
                    default: Ur((function() {
                        return [$r]
                    })),
                    _: 1
                })])])
            })),
            tc = Object(n["F"])("data-v-a8d93c42");
        Object(n["s"])("data-v-a8d93c42");
        var rc = {
                class: "window-content"
            },
            cc = {
                class: "window-heading"
            };
        Object(n["r"])();
        var nc = tc((function(e, t) {
                var r = Object(n["v"])("base-paragraph"),
                    c = Object(n["v"])("browser-window");
                return Object(n["q"])(), Object(n["e"])(c, {
                    class: "text-browser-window"
                }, {
                    default: tc((function() {
                        return [Object(n["j"])("div", rc, [Object(n["j"])("h3", cc, [Object(n["u"])(e.$slots, "header")]), Object(n["j"])(r, {
                            color: "black"
                        }, {
                            default: tc((function() {
                                return [Object(n["u"])(e.$slots, "paragraph")]
                            })),
                            _: 3
                        })])]
                    })),
                    _: 3
                })
            })),
            ac = {
                components: {
                    BrowserWindow: jr
                }
            };
        r("2bf4");
        ac.render = nc, ac.__scopeId = "data-v-a8d93c42";
        var oc = ac,
            sc = {
                components: {
                    BrowserWindow: jr,
                    TextBrowserWindow: oc
                }
            };
        r("4fc5");
        sc.render = ec, sc.__scopeId = "data-v-c1adc4de";
        var ic = sc,
            lc = r("3234"),
            dc = r.n(lc),
            uc = Object(n["F"])("data-v-53e40f68");
        Object(n["s"])("data-v-53e40f68");
        var hc = {
                class: "feature-organize"
            },
            fc = Object(n["j"])("img", {
                class: "feature-img",
                src: dc.a
            }, null, -1),
            vc = Object(n["i"])("Merge similar cards for clarity"),
            bc = Object(n["i"])(" Join cards with similar content to make the workspace more readable, accessible and easier to navigate. As Confucius once said, the less cards you see on the screen, the better your decisions are! "),
            jc = {
                class: "feature-cards"
            };
        Object(n["r"])();
        var gc = uc((function(e, t) {
                var r = Object(n["v"])("browser-window"),
                    c = Object(n["v"])("text-browser-window"),
                    a = Object(n["v"])("board-card");
                return Object(n["q"])(), Object(n["e"])("div", hc, [Object(n["j"])(r, {
                    class: "feature-img-window"
                }, {
                    default: uc((function() {
                        return [fc]
                    })),
                    _: 1
                }), Object(n["j"])(c, {
                    class: "feature-text"
                }, {
                    header: uc((function() {
                        return [vc]
                    })),
                    paragraph: uc((function() {
                        return [bc]
                    })),
                    _: 1
                }), Object(n["j"])(r, {
                    class: "feature-cards-window"
                }, {
                    default: uc((function() {
                        return [Object(n["j"])("div", jc, [Object(n["j"])(a, {
                            initValue: "Yassss.. Friday!",
                            isInitInEditMode: !0,
                            author: "Clo"
                        }), Object(n["j"])(a, {
                            initValue: "We survived this week, Yeah!",
                            isMergeMode: !0,
                            author: "Petki"
                        })])]
                    })),
                    _: 1
                })])
            })),
            pc = (r("1393"), Object(n["F"])("data-v-6ae0568b"));
        Object(n["s"])("data-v-6ae0568b");
        var mc = {
                class: "card-content"
            },
            wc = {
                key: 0,
                class: "card-footer card-footer-invisible"
            },
            Oc = {
                class: "card-owner"
            },
            Mc = {
                class: "card-owner-name"
            },
            xc = {
                class: "card-footer-right"
            },
            kc = {
                class: "card-merge-info"
            },
            zc = Object(n["i"])(" Merge with card ");
        Object(n["r"])();
        var yc = pc((function(e, t) {
                var r = Object(n["v"])("svg-icon"),
                    a = Object(n["v"])("board-card-container");
                return Object(n["q"])(), Object(n["e"])(a, {
                    class: ["board-card", {
                        "card--static": e.isStatic,
                        "board-card--big": e.big
                    }],
                    color: e.color,
                    ref: "card"
                }, {
                    default: pc((function() {
                        return [Object(n["j"])("div", mc, [e.isEditMode ? Object(n["E"])((Object(n["q"])(), Object(n["e"])("textarea", {
                            key: 0,
                            class: "card-textarea",
                            "onUpdate:modelValue": t[1] || (t[1] = function(t) {
                                return e.value = t
                            }),
                            ref: "textarea",
                            onKeydown: t[2] || (t[2] = Object(c["e"])((function() {}), ["stop"]))
                        }, null, 544)), [
                            [c["d"], e.value]
                        ]) : (Object(n["q"])(), Object(n["e"])("p", {
                            key: 1,
                            class: "card-text",
                            ref: "cardText"
                        }, Object(st["F"])(e.value), 513)), e.showVotes ? (Object(n["q"])(), Object(n["e"])("button", {
                            key: 2,
                            class: "card-thumb pointer",
                            onClick: t[3] || (t[3] = function(t) {
                                return e.$emit("voted")
                            })
                        }, [Object(n["i"])(Object(st["F"])(e.votes) + " ", 1), Object(n["j"])(r, {
                            class: "like-icon",
                            icon: "like"
                        })])) : Object(n["f"])("", !0)]), e.isMergeMode ? (Object(n["q"])(), Object(n["e"])("div", {
                            key: 1,
                            class: "card-footer card-footer--merge",
                            onClick: t[4] || (t[4] = function(t) {
                                return e.$emit("merge")
                            })
                        }, [Object(n["j"])("div", kc, [zc, Object(n["j"])(r, {
                            icon: "merge"
                        })])])) : (Object(n["q"])(), Object(n["e"])("div", wc, [Object(n["j"])("div", Oc, [Object(n["j"])(r, {
                            icon: "user"
                        }), Object(n["j"])("span", Mc, Object(st["F"])(e.author), 1)]), Object(n["j"])(r, {
                            class: "card-dots",
                            icon: "move"
                        }), Object(n["j"])("div", xc, [Object(n["j"])(r, {
                            icon: "merge"
                        }), Object(n["j"])(r, {
                            icon: "trash"
                        })])]))]
                    })),
                    _: 1
                }, 8, ["class", "color"])
            })),
            Lc = Object(n["F"])("data-v-b2bf3ec6"),
            Bc = Lc((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("div", {
                    class: ["card", "card--".concat(e.color)]
                }, [Object(n["u"])(e.$slots, "default")], 2)
            })),
            Cc = {
                props: {
                    color: {
                        type: String,
                        default: "violet",
                        validator: function(e) {
                            return ["violet", "marine", "red"].includes(e)
                        }
                    }
                }
            };
        r("db11");
        Cc.render = Bc, Cc.__scopeId = "data-v-b2bf3ec6";
        var Fc = Cc,
            Vc = {
                components: {
                    BoardCardContainer: Fc,
                    SvgIcon: Q
                },
                props: {
                    author: {
                        type: String,
                        required: !0
                    },
                    color: {
                        type: String,
                        default: "violet",
                        validator: function(e) {
                            return ["violet", "marine", "red"].includes(e)
                        }
                    },
                    initValue: {
                        type: String,
                        required: !0
                    },
                    isInitInEditMode: {
                        type: Boolean,
                        default: !1
                    },
                    showVotes: {
                        type: Boolean,
                        default: !1
                    },
                    isMergeMode: {
                        type: Boolean,
                        default: !1
                    },
                    votes: {
                        type: Number,
                        default: 0
                    },
                    isStatic: {
                        type: Boolean,
                        default: !1
                    },
                    big: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        value: this.initValue,
                        isEditMode: this.isInitInEditMode
                    }
                },
                mounted: function() {
                    this.isStatic || document.addEventListener("click", this.onClick)
                },
                beforeUnmount: function() {
                    document.removeEventListener("click", this.onClick)
                },
                methods: {
                    onClick: function(e) {
                        this.isEditMode ? this.$refs.textarea.contains(e.target) || (this.isEditMode = !1) : this.$refs.cardText.contains(e.target) && (this.isEditMode = !0)
                    }
                }
            };
        r("3b7c");
        Vc.render = yc, Vc.__scopeId = "data-v-6ae0568b";
        var Ac = Vc,
            qc = {
                components: {
                    BrowserWindow: jr,
                    BoardCard: Ac,
                    TextBrowserWindow: oc
                }
            };
        r("826b");
        qc.render = gc, qc.__scopeId = "data-v-53e40f68";
        var Ic = qc,
            Hc = r("0019"),
            Sc = r.n(Hc),
            Ec = Object(n["F"])("data-v-1cc92ba1");
        Object(n["s"])("data-v-1cc92ba1");
        var Tc = {
                class: "feature-organize"
            },
            Dc = Object(n["i"])("Create, sort and organize ideas"),
            Rc = Object(n["i"])(" Let everyone participate by writing down their ideas and sharing them with the rest of the team. No worries, we have enough cards for everyone! "),
            Wc = {
                class: "feature-cards"
            },
            Yc = Object(n["j"])("img", {
                class: "feature-organize-icon",
                src: Sc.a
            }, null, -1);
        Object(n["r"])();
        var Pc = Ec((function(e, t) {
                var r = Object(n["v"])("text-browser-window"),
                    c = Object(n["v"])("board-card"),
                    a = Object(n["v"])("browser-window");
                return Object(n["q"])(), Object(n["e"])("div", Tc, [Object(n["j"])(r, {
                    class: "feature-text"
                }, {
                    header: Ec((function() {
                        return [Dc]
                    })),
                    paragraph: Ec((function() {
                        return [Rc]
                    })),
                    _: 1
                }), Object(n["j"])(a, {
                    class: "feature-cards-window"
                }, {
                    default: Ec((function() {
                        return [Object(n["j"])("div", Wc, [Object(n["j"])(c, {
                   
                        }), Object(n["j"])(c, {
                        
                        })])]
                    })),
                    _: 1
                }), Yc])
            })),
            Gc = {
                components: {
                    BrowserWindow: jr,
                    BoardCard: Ac,
                    TextBrowserWindow: oc
                }
            };
        r("29d6");
        Gc.render = Pc, Gc.__scopeId = "data-v-1cc92ba1";
        var Jc = Gc,
            Xc = r("cc42"),
            Uc = r.n(Xc),
            Qc = r("fbd1"),
            Kc = r.n(Qc),
            Nc = Object(n["F"])("data-v-a74a9f5a");
        Object(n["s"])("data-v-a74a9f5a");
        var Zc = {
                class: "feature-prioritize"
            },
            _c = Object(n["j"])("img", {
                class: "feature-img",
                src: Uc.a
            }, null, -1),
            $c = Object(n["i"])("Prioritize cards with the most votes"),
            en = Object(n["i"])(" Need to decide which topics or ideas need to be discussed first? Vote, and then sort the cards by number of votes! So, shall we discuss margaritas or whiskey sour? "),
            tn = Object(n["j"])("img", {
                class: "feature-prioritize-icon",
                src: Kc.a
            }, null, -1);
        Object(n["r"])();
        var rn = Nc((function(e, t) {
                var r = Object(n["v"])("browser-window"),
                    a = Object(n["v"])("text-browser-window"),
                    o = Object(n["v"])("board-card");
                return Object(n["q"])(), Object(n["e"])("div", Zc, [Object(n["j"])(r, {
                    class: "feature-img-window"
                }, {
                    default: Nc((function() {
                        return [_c]
                    })),
                    _: 1
                }), Object(n["j"])(a, {
                    class: "feature-text"
                }, {
                    header: Nc((function() {
                        return [$c]
                    })),
                    paragraph: Nc((function() {
                        return [en]
                    })),
                    _: 1
                }), Object(n["j"])(r, {
                    class: "feature-cards-window"
                }, {
                    default: Nc((function() {
                        return [Object(n["j"])(c["b"], {
                            name: "flip-list",
                            tag: "div",
                            class: "feature-cards"
                        }, {
                            default: Nc((function() {
                                return [(Object(n["q"])(!0), Object(n["e"])(n["b"], null, Object(n["t"])(e.orderedCards, (function(t) {
                                    return Object(n["q"])(), Object(n["e"])(o, {
                                        key: t.author,
                                        author: t.author,
                                        initValue: t.initValue,
                                        votes: t.votes,
                                        showVotes: !0,
                                        color: "marine",
                                        onVoted: function(r) {
                                            return e.increaseCardVote(t)
                                        }
                                    }, null, 8, ["author", "initValue", "votes", "onVoted"])
                                })), 128))]
                            })),
                            _: 1
                        })]
                    })),
                    _: 1
                }), tn])
            })),
            cn = (r("c740"), r("a434"), r("2909")),
            nn = {
                data: function() {
                    return {
    
                    }
                },
                components: {
                    BrowserWindow: jr,
                    BoardCard: Ac,
                    TextBrowserWindow: oc
                },
                methods: {
                    increaseCardVote: function(e) {
                        var t = this.cards.findIndex((function(t) {
                            return t === e
                        }));
                        this.cards.splice(t, 1, Object(w["a"])(Object(w["a"])({}, e), {}, {
                            votes: e.votes + 1
                        }))
                    }
                },
                computed: {
                    orderedCards: function() {
                        return Object(cn["a"])(this.cards).sort((function(e, t) {
                            return t.votes - e.votes
                        }))
                    }
                }
            };
        r("e910");
        nn.render = rn, nn.__scopeId = "data-v-a74a9f5a";
        var an = nn,
            on = r("aa81"),
            sn = r.n(on),
            ln = Object(n["F"])("data-v-12a59b2c");
        Object(n["s"])("data-v-12a59b2c");
        var dn = {
                class: "feature-save"
            },
            un = Object(n["i"])("Save and export your boards"),
            hn = Object(n["i"])(" Log in using Google Account to gain access to all the boards you ever created and export the results to a CSV file. As long as spreadsheets are your thing (we don’t judge!) ... "),
            fn = {
                class: "settings-wrapper"
            },
            vn = {
                class: "settings"
            },
            pn = Object(n["j"])("li", null, [Object(n["j"])("button", {
                class: "dropdown-item disabled"
            }, "Set votes per user")], -1);
        Object(n["r"])();
        var mn = ln((function(e, t) {
                var r = Object(n["v"])("text-browser-window"),
                    c = Object(n["v"])("browser-window");
                return Object(n["q"])(), Object(n["e"])("div", dn, [Object(n["j"])(r, {
                    class: "feature-text"
                }, {
                    header: ln((function() {
                        return [un]
                    })),
                    paragraph: ln((function() {
                        return [hn]
                    })),
                    _: 1
                }), Object(n["j"])("div", fn, [Object(n["j"])(c, {
                    class: "settings-window"
                }, {
                    default: ln((function() {
                        return [Object(n["j"])("div", vn, [bn, Object(n["j"])("ul", jn, [gn, pn, Object(n["j"])("li", null, [Object(n["j"])("button", {
                            class: "dropdown-item pointer",
                            onClick: t[1] || (t[1] = function(t) {
                                return e.showDisc = !0
                            })
                        }, "Save board")])])])]
                    })),
                    _: 1
                }), Object(n["j"])(c, {
                    class: "feature-img pointer ".concat(e.iconClass)
                }, {
                    default: ln((function() {
                        return [Object(n["j"])("img", {
                            onClick: t[2] || (t[2] = function(t) {
                                return e.showDisc = !1
                            }),
                            src: sn.a
                        })]
                    })),
                    _: 1
                }, 8, ["class"])])])
            })),
            wn = {
                components: {
                    BrowserWindow: jr,
                    TextBrowserWindow: oc
                },
                data: function() {
                    return {
                        showDisc: !1
                    }
                },
                computed: {
                    iconClass: function() {
                        return this.showDisc ? "disc-visible" : "disc-invisible"
                    }
                }
            };
        r("21fa");
        wn.render = mn, wn.__scopeId = "data-v-12a59b2c";
        var On = wn,
            Mn = r("2917"),
            xn = r.n(Mn),
            kn = r("3326"),
            zn = r.n(kn),
            yn = Object(n["F"])("data-v-3ea7f28f");
        Object(n["s"])("data-v-3ea7f28f");
        var Ln = {
                class: "feature-timer"
            },
            Bn = Object(n["i"])("Keep the agenda on track"),
            Cn = Object(n["i"])(" Set the timer to facilitate meetings easier and fit into even the tightest timebox. Imagine meetings that last only as long as they need to - how cool is that? "),
            Fn = {
                class: "feature-content"
            },
            Vn = Object(n["j"])("img", {
                src: xn.a
            }, null, -1),
            An = {
                class: "timer-container"
            },
            qn = {
                class: "timer-counter"
            },
            In = Object(n["j"])("span", {
                class: "timer-button-icon timer-button-icon-play"
            }, "▶", -1),
            Hn = Object(n["j"])("img", {
                class: "feature-timer-icon",
                src: zn.a
            }, null, -1);
        Object(n["r"])();
        var Sn = yn((function(e, t) {
                var r = Object(n["v"])("text-browser-window"),
                    c = Object(n["v"])("browser-window"),
                    a = Object(n["v"])("svg-icon");
                return Object(n["q"])(), Object(n["e"])("div", Ln, [Object(n["j"])(r, {
                    class: "feature-text"
                }, {
                    header: yn((function() {
                        return [Bn]
                    })),
                    paragraph: yn((function() {
                        return [Cn]
                    })),
                    _: 1
                }), Object(n["j"])("div", Fn, [Object(n["j"])(c, {
                    class: "feature-img"
                }, {
                    default: yn((function() {
                        return [Vn]
                    })),
                    _: 1
                }), Object(n["j"])(c, {
                    class: "timer-window"
                }, {
                    default: yn((function() {
                        return [Object(n["j"])("div", An, [Object(n["j"])("button", {
                            class: "timer-button pointer",
                            onClick: t[1] || (t[1] = function(t) {
                                return e.addSecondsToTimer(-30)
                            }),
                            disabled: e.secondsLeft <= 30
                        }, [Object(n["j"])(a, {
                            class: "timer-button-icon",
                            icon: "minus"
                        })], 8, ["disabled"]), Object(n["j"])("button", {
                            class: "timer-button pointer",
                            onClick: t[2] || (t[2] = function(t) {
                                return e.addSecondsToTimer(30)
                            })
                        }, [Object(n["j"])(a, {
                            class: "timer-button-icon",
                            icon: "plus"
                        })]), Object(n["j"])("span", qn, Object(st["F"])(e.timer), 1), e.timerInterval ? (Object(n["q"])(), Object(n["e"])("button", {
                            key: 0,
                            class: "timer-button pointer",
                            onClick: t[3] || (t[3] = function(t) {
                                return e.pauseTimer()
                            })
                        }, [Object(n["j"])(a, {
                            class: "timer-button-icon",
                            icon: "pause"
                        })])) : (Object(n["q"])(), Object(n["e"])("button", {
                            key: 1,
                            class: "timer-button pointer",
                            onClick: t[4] || (t[4] = function(t) {
                                return e.playTimer()
                            })
                        }, [In])), Object(n["j"])("button", {
                            class: "timer-button pointer",
                            onClick: t[5] || (t[5] = function() {
                                return e.resetTimer.apply(e, arguments)
                            })
                        }, [Object(n["j"])(a, {
                            class: "timer-button-icon",
                            icon: "stop"
                        })])]), Hn]
                    })),
                    _: 1
                })])])
            })),
            En = {
                data: function() {
                    return {
                        secondsLeft: 300,
                        timerInterval: null
                    }
                },
                components: {
                    BrowserWindow: jr,
                    SvgIcon: Q,
                    TextBrowserWindow: oc
                },
                mounted: function() {
                    this.playTimer()
                },
                beforeUnmount: function() {
                    this.pauseTimer()
                },
                methods: {
                    createTimerInterval: function() {
                        var e = this;
                        return setInterval((function() {
                            e.secondsLeft > 0 && (e.secondsLeft -= 1)
                        }), 1e3)
                    },
                    pauseTimer: function() {
                        clearInterval(this.timerInterval), this.timerInterval = null
                    },
                    playTimer: function() {
                        this.timerInterval = this.createTimerInterval()
                    },
                    addSecondsToTimer: function(e) {
                        this.secondsLeft += e
                    },
                    resetTimer: function() {
                        this.pauseTimer(), this.secondsLeft = 300
                    }
                },
                computed: {
                    timer: function() {
                        var e = Math.floor(this.secondsLeft / 60),
                            t = this.secondsLeft % 60;
                        return e < 10 && (e = "0".concat(e)), t < 10 && (t = "0".concat(t)), "".concat(e, ":").concat(t)
                    }
                }
            };
        r("6a76");
        En.render = Sn, En.__scopeId = "data-v-3ea7f28f";
        var Tn = En,
            Dn = {
                data: function() {
                    return {
                        currentSlide: 0,
                        siema: null
                    }
                },
                components: {
                    FeatureCollaboration: ic,
                    FeatureOrganize: Jc,
                    FeaturePrioritize: an,
                    FeatureSave: On,
                    FeatureTimer: Tn,
                    FeatureMerge: Ic,
                    RectanglesShape: Ae
                },
                mounted: function() {
                    var e = this;
                    this.siema = new Yr.a({
                        loop: !0,
                        onChange: function() {
                            e.currentSlide = e.siema.currentSlide
                        }
                    }), window.addEventListener("keydown", this.onKeyDown), z["b"].matchMedia({
                        "(min-width: 1024px)": function() {
                            k["a"].timeline({
                                scrollTrigger: {
                                    trigger: e.$el,
                                    toggleActions: "play none reverse none",
                                    start: "top 100%-=200",
                                    end: "top 0+=200",
                                    onEnter: function() {
                                        var e = document.querySelector("#features").offsetTop - 50;
                                        setTimeout((function() {
                                            e > window.scrollY && k["a"].to(window, {
                                                duration: .3,
                                                scrollTo: {
                                                    y: e
                                                }
                                            })
                                        }), 600)
                                    }
                                }
                            }).to(".bg-transition-line:nth-of-type(odd)", {
                                duration: .5,
                                yPercent: -100
                            }).to(".bg-transition-line:nth-of-type(even)", {
                                duration: .5,
                                yPercent: -100
                            }, "<0.25").to(e.$refs.featuresBg, {
                                duration: .5,
                                x: 0
                            }), k["a"].to(e.$el.querySelectorAll(".text-browser-window"), {
                                y: 100,
                                scrollTrigger: {
                                    trigger: e.$el,
                                    start: "top 80%",
                                    end: "bottom 0",
                                    scrub: .5
                                }
                            }), k["a"].to(e.$el.querySelectorAll(".browser-window:not(.text-browser-window):not(.feature-img"), {
                                y: -50,
                                scrollTrigger: {
                                    trigger: e.$el,
                                    start: "top 80%",
                                    end: "bottom 0",
                                    scrub: .5
                                }
                            })
                        }
                    }), k["a"].timeline({
                        scrollTrigger: {
                            trigger: "#how-to-use",
                            toggleActions: "play none reverse none",
                            start: "top 100%-=200",
                            end: "top 0+=200",
                            onEnter: function() {
                                var e = document.querySelector("#how-to-use").offsetTop - 50;
                                setTimeout((function() {
                                    e > window.scrollY && k["a"].to(window, {
                                        duration: .2,
                                        scrollTo: {
                                            y: e
                                        }
                                    })
                                }), 600)
                            }
                        }
                    }).to(this.$refs.featuresBg.querySelector("path"), {
                        duration: .5,
                        fill: "#e0dcfa"
                    }).to(this.$refs.featuresBg, {
                        duration: .5,
                        xPercent: -100
                    }, "<0.2").to(this.$refs.transitionRectangle, {
                        duration: .5,
                        x: 0
                    }, "<")
                },
                beforeUnmount: function() {
                    window.removeEventListener("keydown", this.onKeyDown)
                },
                methods: {
                    onKeyDown: function(e) {
                        37 === e.keyCode ? this.siema.prev() : 39 === e.keyCode && this.siema.next()
                    }
                }
            };
        r("e41e");
        Dn.render = Rr, Dn.__scopeId = "data-v-3b938de0";
        var Rn = Dn,
            Wn = Object(n["F"])("data-v-1f5d8909");
        Object(n["s"])("data-v-1f5d8909");
        Object(n["r"])();
        var Xn = Wn((function(e, t) {
                var r = Object(n["v"])("base-heading"),
                    c = Object(n["v"])("rectangles-shape"),
                    a = Object(n["v"])("svg-icon"),
                    o = Object(n["v"])("patience-card"),
                    s = Object(n["v"])("base-container");
                return Object(n["q"])(), Object(n["e"])("section", {
                    class: "testimonials",
                    onMouseenter: t[1] || (t[1] = function(t) {
                        return e.setCursor("heart")
                    }),
                    onMouseLeave: t[2] || (t[2] = function(t) {
                        return e.setCursor("point")
                    })
                }, [(Object(n["q"])(), Object(n["e"])("svg", Yn, [Pn], 512)), Object(n["j"])(s, {
                    class: "testimonials-container"
                }, {
                    default: Wn((function() {
                        return [Object(n["j"])(r, {
                            class: "testimonials-heading",
                            level: "2"
                        }, {
                            default: Wn((function() {
                                return [Gn, Jn]
                            })),
                            _: 1
                        }), Object(n["j"])(c, {
                            class: "small-rectangles",
                            animate: !0
                        }), Object(n["j"])(a, {
                            class: "handshake",
                            icon: "handshake"
                        }), Object(n["j"])(o, {
                            class: "patience-card--1",
                            steps: [{
                                x: "0.5vw",
                                y: 10
                            }, {
                                x: "1vw",
                                y: 20
                            }, {
                                x: "1.5vw",
                                y: 30
                            }, {
                                x: "2vw",
                                y: 40
                            }, {
                                x: "2.5vw",
                                y: 50
                            }, {
                                x: "3vw",
                                y: 50
                            }, {
                                x: "3.5vw",
                                y: 50
                            }, {
                                x: "4vw",
                                y: 60
                            }, {
                                x: "4.5vw",
                                y: 80
                            }, {
                                x: "5vw",
                                y: 100
                            }, {
                                x: "5.5vw",
                                y: 110
                            }, {
                                x: "6vw",
                                y: 120
                            }, {
                                x: "6.5vw",
                                y: 130
                            }, {
                                x: "7vw",
                                y: 140
                            }, {
                                x: "7.5vw",
                                y: 130
                            }, {
                                x: "8vw",
                                y: 120
                            }, {
                                x: "8.5vw",
                                y: 110
                            }, {
                                x: "9vw",
                                y: 100
                            }, {
                                x: "9.5vw",
                                y: 90
                            }, {
                                x: "10vw",
                                y: 80
                            }, {
                                x: "10.5vw",
                                y: 70
                            }],
                            text: "I like the simplicity of the tool, and that I can utilize and adapt it for various online meetings and workshops.",
                            author: "Michael Roehrig, Manager Global Learning & Organizational Development, Freudenberg Performance Materials",
                            color: "violet"
                        }), Object(n["j"])(o, {
                            class: "patience-card--2",
                            steps: [{
                                x: "-0.5vw",
                                y: -10
                            }, {
                                x: "-1vw",
                                y: -20
                            }, {
                                x: "-1.5vw",
                                y: -30
                            }, {
                                x: "-2vw",
                                y: -40
                            }, {
                                x: "-2.5vw",
                                y: -30
                            }, {
                                x: "-3vw",
                                y: -20
                            }, {
                                x: "-3.5vw",
                                y: -10
                            }, {
                                x: "-4vw",
                                y: 0
                            }, {
                                x: "-4.5vw",
                                y: 10
                            }, {
                                x: "-5vw",
                                y: 20
                            }, {
                                x: "-5.5vw",
                                y: 30
                            }, {
                                x: "-6vw",
                                y: 40
                            }, {
                                x: "-6.5vw",
                                y: 50
                            }, {
                                x: "-7vw",
                                y: 60
                            }, {
                                x: "-7.5vw",
                                y: 50
                            }, {
                                x: "-8vw",
                                y: 60
                            }, {
                                x: "-8.5vw",
                                y: 50
                            }, {
                                x: "-9vw",
                                y: 40
                            }, {
                                x: "-9.5vw",
                                y: 30
                            }, {
                                x: "-10vw",
                                y: 20
                            }, {
                                x: "-10.5vw",
                                y: 10
                            }],
                            text: "Over the past few months I have recommended Boldare Boards to more than 20 teams and I encourage you to try it as well!",
                            author: "Kate Hobler, Coach and Consultant, Founder of Brass Willow",
                            color: "red"
                        }), Object(n["j"])(o, {
                            class: "patience-card--3",
                            steps: [{
                                x: "0.5vw",
                                y: 10
                            }, {
                                x: "1vw",
                                y: 20
                            }, {
                                x: "1.5vw",
                                y: 32
                            }, {
                                x: "2vw",
                                y: 45
                            }, {
                                x: "2.5vw",
                                y: 55
                            }, {
                                x: "3vw",
                                y: 40
                            }, {
                                x: "3.5vw",
                                y: 30
                            }, {
                                x: "4vw",
                                y: 20
                            }, {
                                x: "4.5vw",
                                y: 12
                            }, {
                                x: "5vw",
                                y: 20
                            }, {
                                x: "5.5vw",
                                y: 30
                            }, {
                                x: "6vw",
                                y: 40
                            }, {
                                x: "6.5vw",
                                y: 50
                            }, {
                                x: "7vw",
                                y: 60
                            }, {
                                x: "7.5vw",
                                y: 70
                            }, {
                                x: "8vw",
                                y: 80
                            }, {
                                x: "8.5vw",
                                y: 90
                            }, {
                                x: "9vw",
                                y: 100
                            }, {
                                x: "9.5vw",
                                y: 110
                            }, {
                                x: "10vw",
                                y: 120
                            }, {
                                x: "10.5vw",
                                y: 130
                            }],
                            text: "It’s my favorite tool for virtual brainstorming - I love its simplicity and how it lets all participants write down their ideas, merge, vote and prioritize easily.",
                            author: "Gerald Mitterer, Founding Member and Catalyst, dwarfs and Giants",
                            color: "marine"
                        })]
                    })),
                    _: 1
                })], 32)
            })),
            Un = Object(n["F"])("data-v-54d031d2");
        Object(n["s"])("data-v-54d031d2");
        var Qn = {
            class: "patience-card-container"
        };
        Object(n["r"])();
        var Kn = Un((function(e, t) {
                var r = Object(n["v"])("board-card-container"),
                    c = Object(n["v"])("board-card");
                return Object(n["q"])(), Object(n["e"])("div", Qn, [Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(r, {
                    class: "patience-bg",
                    color: e.color
                }, null, 8, ["color"]), Object(n["j"])(c, {
                    class: "patience-card",
                    color: e.color,
                    initValue: e.text,
                    isStatic: !0,
                    author: e.author,
                    big: !0
                }, null, 8, ["color", "initValue", "author"])])
            })),
            Nn = (r("fb6a"), {
                props: {
                    author: {
                        type: String,
                        required: !0
                    },
                    text: {
                        type: String,
                        required: !0
                    },
                    steps: {
                        type: Array,
                        validator: function(e) {
                            return 21 === e.length
                        }
                    },
                    color: {
                        type: String,
                        required: !0
                    }
                },
                components: {
                    BoardCard: Ac,
                    BoardCardContainer: Fc
                },
                mounted: function() {
                    for (var e = k["a"].timeline({
                            scrollTrigger: {
                                trigger: this.$el,
                                start: "top 100%-=100",
                                end: "+=400",
                                scrub: .5
                            }
                        }), t = 0; t <= this.$el.childNodes.length; t += 1) {
                        var r = Object(cn["a"])(this.$el.childNodes).slice(t + 1);
                        e.to(r, Object(w["a"])({
                            duration: .2
                        }, this.steps[t]))
                    }
                }
            });
        r("fbcb");
        Nn.render = Kn, Nn.__scopeId = "data-v-54d031d2";
        var Zn = Nn,
            _n = {
                components: {
                    PatienceCard: Zn,
                    RectanglesShape: Ae,
                    SvgIcon: Q
                },
                mounted: function() {
                    var e = this.$refs.triangle,
                        t = this.$el.querySelector(".handshake");
                    k["a"].from(e, {
                        scaleY: 0,
                        scrollTrigger: {
                            trigger: this.$el,
                            start: "top 100%-=200",
                            end: "+=500",
                            scrub: .5
                        }
                    }), k["a"].from(t, {
                        scale: .5,
                        duration: .5,
                        scrollTrigger: {
                            trigger: t,
                            start: "top 70%",
                            end: "+=1",
                            toggleActions: "play none reverse none"
                        }
                    })
                },
                methods: Object(w["a"])({}, Object(O["b"])(["setCursor"]))
            };
        r("1499");
        _n.render = Xn, _n.__scopeId = "data-v-1f5d8909";
        var $n = _n,
            ea = r("f9ed"),
            ta = r.n(ea),
            ra = Object(n["F"])("data-v-67e3ca7c");
        Object(n["s"])("data-v-67e3ca7c");
        var ca = {
                class: "footer"
            },
            na = Object(n["j"])("div", {
                class: "footer-container"
            }, [Object(n["j"])("a", {
                href: "https://boldare.com",
                rel: "noopener noreferrer",
                target: "_blank"
            }, [Object(n["j"])("img", {
                class: "footer-logo",
                src: ta.a
            })]), Object(n["j"])("p", null, "The digital product design & development company.")], -1),
            aa = Object(n["j"])("div", {
                class: "footer-container __space"
            }, [Object(n["j"])("a", {
           
            }, "  "), Object(n["j"])("a", {
       
            }, "Rules")], -1),
            oa = Object(n["j"])("div", {
                class: "footer-container"
            }, [Object(n["j"])("p", null, [Object(n["i"])(" Help us to improve Boldare Boards for you! If you’ve found a bug or have an idea on how to enhance something - let us know: "), Object(n["j"])("a", {
                href: "mailto:help.boards@boldare.com",
                class: "text__bold"
            }, "help.boards@boldare.com")])], -1);
        Object(n["r"])();
        var sa = ra((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("footer", ca, [na, aa, oa])
            })),
            ia = {};
        r("ce81");
        ia.render = sa, ia.__scopeId = "data-v-67e3ca7c";
        var la = ia,
            da = r("e347"),
            ua = r.n(da),
            ha = Object(n["F"])("data-v-040954a4");
        Object(n["s"])("data-v-040954a4");
        var fa = {
                class: "header-wrapper"
            },
            va = {
                class: "header"
            },
            ba = Object(n["j"])("a", {
                class: "header-logo",
                href: "/"
            }, [Object(n["j"])("img", {
                src: ua.a
            })], -1),
            ja = {
                class: "header-options"
            },
            ga = {
                key: 1,
                class: "create-board-text"
            },
            pa = Object(n["j"])("span", null, "", -1),
            ma = {
                class: "form-wrapper",
                ref: "formWrapper"
            },
            wa = {
                class: "nav",
                ref: "nav"
            },
            Oa = {
                class: "nav-items"
            };
        Object(n["r"])();
        var Ma = ha((function(e, t) {
                var r = Object(n["v"])("hamburger-icon"),
                    c = Object(n["v"])("svg-icon"),
                    a = Object(n["v"])("create-board-form"),
                    o = Object(n["v"])("base-container"),
                    s = Object(n["v"])("base-heading");
                return Object(n["q"])(), Object(n["e"])("div", fa, [Object(n["j"])("header", va, [ba, Object(n["j"])("div", ja, [Object(n["j"])("button", {
                    class: "create-board pointer",
                    onClick: t[1] || (t[1] = function() {
                        return e.toggleForm.apply(e, arguments)
                    })
                }, [e.isFormOpen ? Object(n["j"])(r, {
                    key: 0,
                    open: !0
                }) : (Object(n["q"])(), Object(n["e"])("div", ga, [pa, Object(n["j"])(c, {
                    class: "create-board-icon",
                    icon: "arrow-down"
                })]))]), Object(n["j"])(r, {
                    class: "hamburger-container",
                    open: e.isNavOpen,
                    onClick: e.toggleMenu
                }, null, 8, ["open", "onClick"])])]), Object(n["j"])("div", ma, [Object(n["j"])(o, {
                    class: "form-container"
                }, {
                    default: ha((function() {
                        return [Object(n["j"])(a, {
                            shadow: !0,
                            onMouseenter: t[2] || (t[2] = function(t) {
                                return e.setCursor("input")
                            }),
                            onMouseLeave: t[3] || (t[3] = function(t) {
                                return e.setCursor("point")
                            })
                        })]
                    })),
                    _: 1
                })], 512), Object(n["j"])("nav", wa, [Object(n["j"])("ul", Oa, [(Object(n["q"])(!0), Object(n["e"])(n["b"], null, Object(n["t"])(e.navItems, (function(r) {
                    return Object(n["q"])(), Object(n["e"])("li", {
                        key: r.id,
                        class: "nav-item"
                    }, [Object(n["j"])("a", {
                        href: "/#".concat(r.id),
                        onClick: t[4] || (t[4] = function() {
                            return e.toggleMenu.apply(e, arguments)
                        })
                    }, [Object(n["j"])(s, {
                        class: "nav-heading",
                        is: "p",
                        mouseShadow: !1
                    }, {
                        default: ha((function() {
                            return [Object(n["i"])(Object(st["F"])(r.text), 1)]
                        })),
                        _: 2
                    }, 1024)], 8, ["href"])])
                })), 128))])], 512)])
            })),
            xa = Object(n["F"])("data-v-3156939a");
        Object(n["s"])("data-v-3156939a");
        var ka = {
                class: "pointer"
            },
            za = Object(n["j"])("span", null, null, -1),
            ya = Object(n["j"])("span", null, null, -1),
            La = Object(n["j"])("span", null, null, -1),
            Ba = Object(n["j"])("span", null, null, -1);
        Object(n["r"])();
        var Ca = xa((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("button", ka, [Object(n["j"])("div", {
                    class: ["hamburger", {
                        "hamburger--active": e.open
                    }],
                    "aria-label": "menu-button"
                }, [za, ya, La, Ba], 2)])
            })),
            Fa = {
                props: {
                    open: {
                        type: Boolean,
                        default: !1
                    }
                }
            };
        r("14e1");
        Fa.render = Ca, Fa.__scopeId = "data-v-3156939a";
        var Va = Fa,
            Aa = k["a"].timeline({
                paused: !0
            }),
            qa = k["a"].timeline({
                paused: !0
            }),
            Ia = {
                data: function() {
                    return {
                        isNavOpen: !1,
                        isFormOpen: !1,
                        navItems: [{
                            id: "hero",
                            text: "Home"
                        }, {
                            id: "create-board",
                            text: "Create your board"
                        }, {
                            id: "features",
                            text: "Features"
                        }]
                    }
                },
                components: {
                    CreateBoardForm: N,
                    HamburgerIcon: Va,
                    SvgIcon: Q
                },
                mounted: function() {
                    var e = this.$refs,
                        t = e.nav,
                        r = e.formWrapper;
                    Aa.from(t, {
                        duration: .5,
                        yPercent: -100,
                        ease: "slow(0.7, 0.7, false)"
                    }), Aa.from(t.querySelectorAll(".nav-heading"), {
                        duration: .5,
                        xPercent: -100,
                        autoAlpha: 0,
                        ease: "sine.inOut",
                        stagger: {
                            each: .05
                        }
                    }, "<0.1"), qa.from(r, {
                        duration: .3,
                        yPercent: -100,
                        ease: "slow(0.7, 0.7, false)"
                    }), qa.from(r.querySelector(".form-container"), {
                        duration: .3,
                        yPercent: -50,
                        ease: "sine.inOut"
                    }, "<")
                },
                methods: Object(w["a"])({
                    toggleMenu: function() {
                        this.isNavOpen ? Aa.reverse() : Aa.play(), this.isFormOpen && (qa.reverse(), this.isFormOpen = !1), this.isNavOpen = !this.isNavOpen
                    },
                    toggleForm: function() {
                        this.isFormOpen ? qa.reverse() : qa.play(), this.isNavOpen && (Aa.reverse(), this.isNavOpen = !1), this.isFormOpen = !this.isFormOpen
                    }
                }, Object(O["b"])(["setCursor"]))
            };
        r("58bc");
        Ia.render = Ma, Ia.__scopeId = "data-v-040954a4";
        var Ha = Ia,
            Sa = Object(n["F"])("data-v-4b6c26ca");
        Object(n["s"])("data-v-4b6c26ca");
        var Ea = {
                class: "loader-container"
            },
            Ta = Object(n["j"])("div", {
                class: "loader"
            }, null, -1);
        Object(n["r"])();
        var Da = Sa((function(e, t) {
                return Object(n["q"])(), Object(n["e"])("div", Ea, [Ta])
            })),
            Ra = {};
        r("77ff");
        Ra.render = Da, Ra.__scopeId = "data-v-4b6c26ca";
        var Wa = Ra,
            Ya = (r("adcf"), {
                name: "App",
                data: function() {
                    return {
                        loading: !0,
                        isTouchScreen: !0
                    }
                },
                components: {
                    DrawContainer: fe,
                    TheBlocks: De,
                    TheCreateBoard: ae,
                    TheHero: cr,
                    TheUse: pr,
                    TheFeatures: Rn,
                    TheFooter: la,
                    TheTestimonials: $n,
                    TheHeader: Ha,
                    PageLoader: Wa
                },
                mounted: function() {
                    var e = this;
                    this.isTouchScreen = "ontouchstart" in window || window.DocumentTouch, window.addEventListener("load", (function() {
                        e.loading = !1
                    }), {
                        once: !0
                    })
                }
            });
        r("9cdc");
        Ya.render = B;
        var Pa = Ya,
            Ga = Object(O["a"])({
                state: {
                    cursor: "point"
                },
                mutations: {
                    setCursor: function(e, t) {
                        e.cursor = t
                    }
                }
            });
        k["a"].registerPlugin(z["a"]), k["a"].registerPlugin(y["a"]);
        var Ja = Object(c["c"])(Pa).use(Ga);
        Ja.component("BaseContainer", l), Ja.component("BaseHeading", f), Ja.component("BaseParagraph", g), Ja.component("BaseCursor", x), Ja.mount("#app")
    },
    "58bc": function(e, t, r) {
        "use strict";
        r("3555")
    },
    5989: function(e, t, r) {
        "use strict";
        r("1b3d")
    },
    "5a2e": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=117 height=95 viewBox="0 0 117 95"> <path fill-rule=evenodd stroke=#000 stroke-width=3 d="M205.672 736L189.756 751.859 207.204 769.258 138 769.258 138 791.745 207.204 791.745 189.756 809.141 205.672 825 250 780.5z" transform="rotate(-180 126.5 414)"/> </svg> ';
        e.exports = r
    },
    "5aa6": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=43 height=50 viewBox="0 0 43 50"> <path fill-rule=evenodd d="M102.403 73L102.403 111.885 116.872 97.492 121 101.598 99.485 123 78 101.628 82.128 97.522 96.566 111.885 96.566 73z" transform="translate(-78 -73)"/> </svg> ';
        e.exports = r
    },
    "5dec": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=227 height=149 viewBox="0 0 227 149"> <defs> <path id=8sl8l3t0sa d="M0 0.057L213.979 0.057 213.979 73 0 73z"/> <path id=5a5wi4zghc d="M0 73L214 73 214 0 0 0z"/> </defs> <g fill=none fill-rule=evenodd transform="rotate(22 11.65 72.981)"> <path fill=#AAC5DA d="M177.844 72H36.156C16.82 72 1 56.025 1 36.5S16.82 1 36.156 1h141.688C197.18 1 213 16.975 213 36.5S197.18 72 177.844 72"/> <mask id=ppjs6exu4b fill=#fff> <use xlink:href=#8sl8l3t0sa /> </mask> <path fill=#000 d="M36.357 2.678c-8.975 0-17.438 3.532-23.83 9.945-6.393 6.413-9.914 14.902-9.914 23.905 0 9.003 3.52 17.493 9.913 23.906 6.393 6.413 14.856 9.945 23.831 9.945h141.266c8.974 0 17.437-3.532 23.83-9.945 6.393-6.413 9.914-14.903 9.914-23.906 0-9.003-3.521-17.492-9.914-23.905s-14.856-9.945-23.83-9.945H36.357zM177.623 73H36.357c-9.673 0-18.792-3.804-25.678-10.712C3.793 55.379 0 46.23 0 36.528 0 26.825 3.793 17.677 10.68 10.77 17.565 3.861 26.684.057 36.357.057h141.266c9.672 0 18.791 3.804 25.678 10.712 6.886 6.908 10.679 16.056 10.679 25.76 0 9.702-3.793 18.85-10.68 25.759C196.415 69.196 187.296 73 177.624 73z" mask=url(#ppjs6exu4b) /> <path fill=#000 d="M65.521 28.095L62 28.095 62 25 73 25 73 28.095 69.561 28.095 69.561 48 65.521 48zM78.565 39.226L74 25 77.842 25 80.625 34.115 83.242 25 87 25 82.49 39.226 82.49 48 78.565 48zM94.96 34.825c1.168 0 1.957-.242 2.366-.724.409-.483.613-1.35.613-2.599 0-.908-.068-1.604-.204-2.087-.137-.482-.414-.846-.833-1.093-.419-.246-1.066-.369-1.943-.369h-1.665v6.872h1.665zM89 25h6.953c4.031 0 6.047 2.177 6.047 6.53 0 4.166-2.114 6.248-6.34 6.248h-2.366V48H89V25zM104 25L112.947 25 112.947 27.953 107.868 27.953 107.868 34.569 111.868 34.569 111.868 37.494 107.868 37.494 107.868 45.132 113 45.132 113 48 104 48zM122 25L126.154 25 126.154 34.598 130.817 34.598 130.817 25 135 25 135 48 130.817 48 130.817 37.608 126.154 37.608 126.154 48 122 48zM139 25L147.947 25 147.947 27.953 142.868 27.953 142.868 34.569 146.868 34.569 146.868 37.494 142.868 37.494 142.868 45.132 148 45.132 148 48 139 48zM155.459 34.853c1.182 0 2.021-.274 2.518-.823.497-.55.746-1.449.746-2.698 0-1.211-.22-2.091-.661-2.64-.441-.55-1.234-.824-2.378-.824h-1.548v6.985h1.323zM150 25h5.487c2.401 0 4.193.46 5.375 1.377 1.181.919 1.772 2.495 1.772 4.728 0 1.458-.21 2.646-.633 3.563-.422.919-1.15 1.586-2.18 2.002L163 48h-4.165l-2.729-10.535h-1.97V48H150V25zM166 25L174.947 25 174.947 27.953 169.868 27.953 169.868 34.569 173.868 34.569 173.868 37.494 169.868 37.494 169.868 45.132 175 45.132 175 48 166 48zM45.5 52.938l.376.291c.68.527 1.674.771 3.128.771H51v-1.507h-1.996c-2.458 0-2.787-.526-2.787-2.617V38.252h1.792v-1.507h-1.792v-11.91c0-2.126.491-2.328 2.787-2.328H51V21h-1.996c-1.48 0-2.48.218-3.15.69l-.354.248-.354-.248c-.67-.472-1.67-.69-3.15-.69H40v1.507h1.996c1.795 0 2.28.325 2.49.573.28.329.297.855.297 1.756v11.909h-1.795v1.507h1.795v11.621c0 2.09-.329 2.616-2.787 2.616H40v1.508h1.996c1.425 0 2.449-.252 3.128-.77l.376-.289z"/> <path fill=#000 d="M45.75 22.658c.143.232.226.49.275.77.073-.33.179-.603.32-.83l-.345.22-.25-.16zM46 51.352c-.062.326-.165.632-.332.906l.335-.233.324.228c-.165-.273-.266-.577-.327-.901zM53 55h-3.108c-1.746 0-2.989-.277-3.895-.87-.906.583-2.18.867-3.89.867H39v-3.221h3.108c.404 0 1.636 0 1.955-.292.221-.203.25-.908.25-1.498V39.109h-1.994v-3.221h1.994V24.72c0-.355 0-1.095-.102-1.203-.013-.014-.297-.296-2.103-.296H39V20h3.108c1.761 0 3.003.247 3.892.777.887-.53 2.13-.777 3.892-.777H53v3.22h-3.108c-.588 0-1.684 0-1.977.206-.15.106-.228.542-.228 1.294v11.168h1.99v3.22h-1.99V49.99c0 .59.029 1.295.25 1.498.32.292 1.55.292 1.955.292H53V55z"/> <mask id=26zkdqdmsd fill=#fff> <use xlink:href=#5a5wi4zghc /> </mask> <path fill=#000 d="M37.18 11.78h6.524V9H37.18v2.78zm13.049 0h6.524V9h-6.524v2.78zm13.048 0H69.8V9h-6.524v2.78zm13.048 0h6.524V9h-6.524v2.78zm13.048 0h6.524V9h-6.524v2.78zm13.048 0h6.524V9h-6.524v2.78zm13.048 0h6.524V9h-6.524v2.78zm13.048 0h6.524V9h-6.524v2.78zm13.048 0h6.525V9h-6.525v2.78zm13.049 0h6.524V9h-6.524v2.78zm13.048 0h6.524V9h-6.524v2.78zm18.866 1.634c-1.922-.746-3.935-1.244-5.98-1.477l.31-2.763c2.278.26 4.519.815 6.66 1.646l-.99 2.594zm-161.166 1.47l-1.34-2.429c2.006-1.128 4.146-1.995 6.36-2.576l.694 2.69c-1.988.522-3.91 1.301-5.714 2.315zm171.125 5.69c-1.332-1.588-2.858-3.006-4.535-4.212l1.6-2.264c1.862 1.341 3.558 2.916 5.038 4.68l-2.103 1.797zM16.48 23.369l-2.328-1.485c1.221-1.951 2.685-3.747 4.35-5.338l1.894 2.02c-1.5 1.43-2.816 3.047-3.916 4.803zm185.334 8.302c-.403-2.033-1.064-4.014-1.964-5.887l2.478-1.213c1.002 2.084 1.738 4.29 2.187 6.555l-2.7.545zM12.75 35.106L10 34.95c.129-2.313.55-4.601 1.249-6.8l2.623.849c-.629 1.975-1.006 4.03-1.122 6.107zm191.008 9.717l-2.623-.846c.626-1.976 1-4.031 1.115-6.109l2.75.154c-.127 2.313-.544 4.601-1.242 6.801zm-191.1 3.582c-1-2.086-1.733-4.292-2.18-6.558l2.701-.542c.402 2.034 1.06 4.015 1.959 5.889l-2.48 1.21zm183.86 8.03l-1.897-2.017c1.497-1.433 2.813-3.05 3.91-4.808l2.331 1.482c-1.22 1.953-2.682 3.75-4.345 5.343zm-175.094 2.45c-1.862-1.343-3.556-2.92-5.034-4.686l2.105-1.793c1.33 1.59 2.855 3.009 4.53 4.218l-1.6 2.261zm163.22 4.229l-.697-2.69c1.988-.524 3.91-1.305 5.712-2.32l1.343 2.427c-2.006 1.13-4.145 2-6.358 2.583zm-150.531.709c-2.278-.263-4.519-.82-6.658-1.653l.992-2.594c1.921.75 3.933 1.249 5.979 1.485l-.313 2.762zm6.673.177h6.524v-2.78h-6.524V64zm13.048 0h6.524v-2.78h-6.524V64zm13.048 0h6.524v-2.78h-6.524V64zm13.048 0h6.525v-2.78H79.93V64zm13.048 0h6.525v-2.78h-6.525V64zm13.049 0h6.524v-2.78h-6.524V64zm13.048 0h6.524v-2.78h-6.524V64zm13.048 0h6.524v-2.78h-6.524V64zm13.048 0h6.524v-2.78h-6.524V64zm13.048 0h6.524v-2.78h-6.524V64zm13.048 0h6.578v-2.78h-6.578V64z" mask=url(#26zkdqdmsd) /> </g> </svg> ';
        e.exports = r
    },
    "5eb5": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=45 height=39 viewBox="0 0 45 39"> <defs> <path id=11u8jwcgda d="M0 0.194L42.816 0.194 42.816 36 0 36z"/> </defs> <g fill=none fill-rule=evenodd transform="rotate(-3 54.412 -.541)"> <path fill=#FFF d="M42 10.208c0-.67-.52-1.242-1.252-1.476-.127-.072-.272-.116-.428-.116-.046 0-.09.007-.135.014-.058-.004-.114-.014-.173-.014-.751 0-1.397.337-1.735.83-.023-.004-.043-.009-.066-.012-1.896-.262-3.553.437-3.702 1.563-.013.105-.01.21.003.313-.38.225-.685.525-.874.874-1.099.125-1.998 1.161-2.265 2.534-.538.168-1.009.634-1.346 1.29-.874-1.088-2.054-1.816-3.375-1.974.03-.29.048-.583.048-.882 0-1.388-.334-2.693-.923-3.833.484-.648.79-1.595.79-2.65 0-1.956-1.043-3.542-2.331-3.542-1.074 0-1.975 1.103-2.246 2.601-.188-.082-.381-.155-.577-.221.003-.045.013-.087.013-.133 0-1.24-.982-2.247-2.194-2.247s-2.194 1.007-2.194 2.247l.003.03c-.532.153-1.043.36-1.522.624-.424-.32-.94-.51-1.499-.51-1.442 0-2.61 1.256-2.61 2.804 0 .667.217 1.279.58 1.76-.32.814-.51 1.697-.559 2.62-.171.04-.34.082-.504.127.023-.18.036-.365.036-.554 0-.442-.068-.86-.187-1.234-.038-.543-.396-1.035-.966-1.41-.02-.014-.04-.028-.06-.04-.269-.17-.578-.315-.922-.426.05-.178.077-.36.077-.55 0-1.065-.83-1.973-1.998-2.337-.046-.105-.106-.204-.18-.3.3-.168.504-.49.504-.865 0-.548-.433-.992-.967-.994C6.264 2.397 5.086 1 3.632 1 2.178 1 1 2.397 1 4.12c0 .917.336 1.738.868 2.309-.034.113-.053.228-.053.347 0 .526.355.991.905 1.312-.046.17-.07.347-.07.528 0 .685.343 1.306.897 1.759-.143.237-.225.493-.225.76 0 .808.713 1.513 1.778 1.908-.054.235-.092.48-.092.738 0 .938.387 1.758.967 2.227-.129.298-.198.606-.198.92 0 .71.343 1.382.954 1.986-.018.19-.029.386-.029.586 0 .953.207 1.816.542 2.448-.137.34-.215.694-.215 1.057 0 .973.523 1.877 1.414 2.638-.282.282-.441.594-.441.922 0 .54.429 1.037 1.143 1.43-.155.515-.24 1.062-.24 1.63 0 1.194.372 2.292.993 3.184-.012.087-.02.177-.02.269 0 .786.464 1.424 1.035 1.424.2 0 .385-.083.544-.218.744.453 1.604.716 2.523.716.942 0 1.82-.277 2.576-.75.546.456 1.4.75 2.362.75.505 0 .98-.081 1.395-.223.4.142.823.223 1.26.223 2.506 0 4.536-2.502 4.536-5.588 0-.188-.008-.373-.022-.556.065.007.129.022.196.022 1.098 0 1.987-1.008 2.012-2.261 1.546-.817 2.713-2.473 3.115-4.49.131.037.266.06.404.06 1.172 0 2.138-1.407 2.298-3.236 1.302-.167 2.32-1.617 2.32-3.382 0-.137-.008-.271-.02-.403 1.156-.089 2.097-.746 2.375-1.612 1.391-.085 2.47-.71 2.588-1.606.025-.185.003-.37-.052-.551.412-.292.677-.714.677-1.189"/> <path fill=#000 d="M13.633 6.46c-1.251 0-2.16.78-2.16 1.855v9.069c0 1.039.676 2.156 2.16 2.156 1.3 0 1.893-1.117 1.893-2.156v-9.07c0-1.16-.963-1.854-1.893-1.854m0 14.54C11.528 21 10 19.48 10 17.383V8.315C10 6.425 11.562 5 13.633 5 15.52 5 17 6.456 17 8.315v9.069C17 19.479 15.584 21 13.633 21"/> <path fill=#000 d="M18.963 4.456c-1.483 0-1.599 1.555-1.599 2.032v10.906c0 1.186.717 2.15 1.599 2.15 1.552 0 1.673-1.645 1.673-2.15V6.488c0-.937-.439-2.032-1.673-2.032m0 16.544C17.302 21 16 19.416 16 17.394V6.488C16 4.402 17.19 3 18.963 3 20.723 3 22 4.467 22 6.488v10.906C22 19.551 20.78 21 18.963 21"/> <path fill=#000 d="M22.423 19c-.121 0-.243-.035-.354-.108-.68-.448-1.069-1.26-1.069-2.23V5.553C21 3.495 22.258 2 23.99 2 25.678 2 27 3.561 27 5.553V16.38c0 .41-.306.741-.682.741-.377 0-.682-.331-.682-.741V5.553c0-1.18-.708-2.07-1.646-2.07-1.117 0-1.626 1.073-1.626 2.07v11.11c0 .451.143.784.413.962.322.213.425.669.23 1.019-.13.229-.354.356-.584.356"/> <mask id=qwv235frpb fill=#fff> <use xlink:href=#11u8jwcgda /> </mask> <path fill=#000 d="M8.734 34.573c-.055-.58-.16-4.072-.216-4.333-.43-2.039-2.997-8.251-2.992-12.087L.288 4.792l-.02-.058c-.38-1.238-.7-3.411 1.596-4.325 2.492-.991 3.847 1.717 4.269 2.539.021.04 2.674 5.019 3.61 6.643.465.806 1.21.859 1.242.86.4.024.713.371.696.78-.016.41-.363.741-.744.72-.58-.015-1.747-.368-2.456-1.597-.949-1.646-3.53-6.493-3.64-6.699-.818-1.592-1.616-2.271-2.556-1.81-1.099.54-.874 1.594-.627 2.41 0 0 5.304 13.38 5.308 13.46l.024.393c-.003 3.579 2.502 9.64 2.962 11.816.08.377.105 1.122.139 2.306.067 2.303.14 2.217.532 2.25.215.017.327.02.352.02h12.696c.397-.005.741-.091.893-.851.695-3.479 1.089-4.732 1.684-5.15 2.414-1.694 7.659-9.017 10.094-12.652.737-1.099 4.848-4.259 4.992-5.133.114-.693-1.83-1.651-5.176-.33-1.58.625-5.472 6.227-6.66 6.375-.89.117-3.298-2.315-3.715-4.402-.081-.406.174-.802.571-.885.398-.083.784.178.866.584.28 1.404 1.707 2.55 2.262 2.938.606-.265 4.325-5.067 5.706-5.755 1.85-.92 5.11-1.458 6.92-.05.608.474.825 1.162.65 1.885-.333 1.371-4.602 4.719-5.206 5.62-.293.437-7.183 10.692-10.438 13.016-.384.508-1.273 5.052-1.317 5.196-.337 1.101-1.852 1.103-2.15 1.093h-12.64c-1.59-.066-2.14-.036-2.273-1.426" mask=url(#qwv235frpb) /> <path fill=#000 d="M18.705 23c-.133 0-.267-.038-.386-.119-.326-.22-.417-.67-.204-1.006 2.885-4.539 10.666-6.757 10.995-6.85.374-.105.763.124.865.512.102.387-.12.786-.495.891-.076.021-7.595 2.169-10.185 6.243-.135.213-.36.329-.59.329"/> </g> </svg> ';
        e.exports = r
    },
    "60eb": function(e, t, r) {},
    "637f": function(e, t, r) {},
    "68cb": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=216 height=48 viewBox="0 0 216 48"> <defs> <path id=ksj1eps2ga d="M0 0.048L106.559 0.048 106.559 24.775 0 24.775z"/> <path id=h6yoknix7c d="M0 47L215.351 47 215.351 0.018 0 0.018z"/> </defs> <g fill=none fill-rule=evenodd> <path fill=#F1D624 d="M48.193 0L25 47 50.808 47 74 0z"/> <g transform="translate(0 11.097)"> <mask id=oowgofnd8b fill=#fff> <use xlink:href=#ksj1eps2ga /> </mask> <path fill=#000 d="M95.167 6.313h-4.822v5.81h4.822c2.37 0 3.7-1.278 3.7-2.926 0-1.69-1.33-2.884-3.7-2.884zM82.861 24.28V.543c0-.248.249-.495.498-.495h12.473c6.154 0 10.518 3.627 10.518 9.15 0 3.503-1.912 6.016-4.822 7.417v.083s.54.742.998 1.442l3.741 5.729c.208.329.292.453.292.618 0 .165-.125.288-.416.288h-7.65c-.208 0-.457-.082-.582-.288l-4.2-6.512h-3.366v6.306c0 .247-.25.494-.5.494H83.36c-.25 0-.498-.247-.498-.494zM63.154 6.313h-3.825V18.51h3.866c4.366 0 6.486-2.349 6.486-6.099 0-3.874-2.66-6.1-6.527-6.1zm.083 18.462H52.344c-.25 0-.499-.247-.499-.494V.543c0-.248.25-.495.5-.495h10.809c8.19 0 14.01 4.822 14.01 12.364 0 7.418-4.905 12.363-13.927 12.363zM32.263.543v21.1h13.72c.249 0 .581.33.581.577v1.978c0 .247-.332.577-.582.577H29.103c-.25 0-.499-.247-.499-.494V.543c0-.248.25-.495.5-.495h2.66c.25 0 .499.247.499.495zM12.099 3.18h-8.44v7.047h9.271c3.367 0 4.075-1.525 4.075-3.545 0-1.978-1.206-3.502-4.906-3.502zm-8.44 18.462h8.648c3.99 0 5.737-1.4 5.737-4.162 0-2.72-1.788-4.121-5.737-4.121H3.659v8.283zm8.73 3.132H.5c-.25 0-.5-.247-.5-.494V.543C0 .295.25.048.5.048h11.683c5.57 0 8.48 2.803 8.48 6.635 0 2.143-.83 3.71-2.285 4.822v.083c2.078 1.195 3.325 3.214 3.325 5.893 0 4.74-3.45 7.294-9.312 7.294z" mask=url(#oowgofnd8b) /> </g> <mask id=7mms0leiod fill=#fff> <use xlink:href=#h6yoknix7c /> </mask> <path fill=#020202 d="M123.322 41.75h85.937V10.745h-85.937V41.75zm-3.624 3.593h93.185V7.153h-93.185v38.19z" mask=url(#7mms0leiod) /> <path fill=#FFF d="M124.473 40.935L214.034 40.935 214.034 5.359 124.473 5.359z" mask=url(#7mms0leiod) /> <path fill=#020202 d="M125.79 39.63h86.927V6.663H125.79V39.63zm-2.634 2.61h92.195V4.054h-92.195v38.188z" mask=url(#7mms0leiod) /> <path fill=#000 d="M138.02 30.386c1.009 0 1.708-.239 2.096-.716.387-.476.581-1.26.581-2.352 0-1.123-.213-1.942-.64-2.458-.427-.515-1.145-.772-2.153-.772h-1.21v6.298h1.327zm-.139-8.652c.993 0 1.672-.219 2.037-.658.364-.438.547-1.15.547-2.134 0-.953-.237-1.603-.71-1.95-.474-.345-1.26-.518-2.362-.518h-.7v5.26h1.188zm-4.608-7.636h4.654c1.785 0 3.15.361 4.097 1.084.946.722 1.42 1.96 1.42 3.714 0 1.139-.233 2.027-.698 2.665-.466.638-1.14 1.027-2.025 1.165 2.172.415 3.258 1.954 3.258 4.614 0 1.8-.442 3.157-1.327 4.072-.884.916-2.195 1.373-3.933 1.373h-5.446V14.098zM152.916 29.809c.264-.476.397-1.169.397-2.077v-8.605c0-.908-.129-1.592-.384-2.053-.257-.462-.773-.692-1.548-.692-.777 0-1.296.234-1.56.703-.265.47-.396 1.15-.396 2.042v8.605c0 .908.131 1.6.396 2.077.264.476.783.715 1.56.715.76 0 1.272-.239 1.535-.715m-5.725 1.673c-.838-1.038-1.257-2.557-1.257-4.557V19.91c0-1.984.419-3.484 1.257-4.499.838-1.015 2.234-1.523 4.19-1.523 1.939 0 3.328.508 4.166 1.523.838 1.015 1.256 2.515 1.256 4.5v7.013c0 1.984-.422 3.5-1.268 4.545-.846 1.046-2.23 1.569-4.154 1.569-1.956 0-3.352-.52-4.19-1.557M165.16 26.302l-1.281-7.844-1.28 7.844h2.56zm-3.143-12.204h3.677l3.77 18.687h-3.188l-.745-4.314h-3.281l-.768 4.314h-3.236l3.771-18.687zM175.865 22.103c.978 0 1.672-.222 2.083-.669.411-.446.617-1.177.617-2.192 0-.984-.183-1.7-.547-2.146-.365-.445-1.02-.669-1.967-.669h-1.28v5.676h1.094zm-4.515-8.005h4.538c1.987 0 3.468.372 4.446 1.118.978.747 1.466 2.027 1.466 3.841 0 1.185-.174 2.15-.523 2.896-.35.746-.951 1.289-1.804 1.627l2.63 9.205h-3.445l-2.258-8.56h-1.628v8.56h-3.422V14.098zM188.899 30.409c.76 0 1.31-.13 1.652-.393.34-.26.559-.626.652-1.095.093-.47.14-1.165.14-2.088V19.68c0-.83-.055-1.46-.163-1.892-.109-.43-.338-.749-.687-.957-.349-.207-.896-.31-1.64-.31h-1.025v13.888h1.07zm-4.492-16.311h4.445c1.52 0 2.716.203 3.585.61.868.409 1.485 1.031 1.85 1.87.364.838.547 1.949.547 3.333v6.807c0 1.415-.183 2.56-.547 3.437-.365.876-.974 1.534-1.827 1.973-.854.438-2.01.657-3.468.657h-4.585V14.098zM198.29 31.608c-.846-.953-1.307-2.376-1.385-4.268l2.956-.577c.047 1.185.236 2.088.57 2.711.334.624.858.935 1.572.935.527 0 .918-.158 1.174-.474.258-.314.385-.74.385-1.28 0-.737-.167-1.364-.5-1.88-.335-.515-.859-1.08-1.572-1.696l-2.374-2.053c-.73-.615-1.277-1.277-1.64-1.984-.365-.708-.547-1.553-.547-2.538 0-1.461.43-2.596 1.292-3.403.86-.808 2.05-1.212 3.571-1.212 1.631 0 2.797.459 3.504 1.373.706.916 1.113 2.15 1.221 3.703l-2.955.508c-.046-1.016-.19-1.78-.43-2.296-.242-.515-.71-.772-1.409-.772-.497 0-.885.165-1.164.496-.28.33-.418.75-.418 1.257 0 .6.12 1.104.36 1.511.241.407.632.842 1.176 1.304l2.35 2.053c.886.754 1.575 1.561 2.072 2.422.496.862.745 1.862.745 3 0 .892-.198 1.684-.594 2.376-.395.692-.95 1.234-1.664 1.626-.714.393-1.536.589-2.468.589-1.706 0-2.983-.476-3.828-1.43" mask=url(#7mms0leiod) /> </g> </svg> ';
        e.exports = r
    },
    "6a76": function(e, t, r) {
        "use strict";
        r("8250")
    },
    "71c7": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=152 height=70 viewBox="0 0 152 70"> <g fill=none fill-rule=evenodd transform="rotate(5 -5.663 65.856)"> <rect width=146 height=56 fill=#F1D624 rx=8 /> <rect width=133.905 height=44 x=6.047 y=6 fill=#F1D624 stroke=#242424 rx=6 /> <text fill=#242424 font-family="TTCommons-Bold, TT Commons" font-size=20 font-weight=bold letter-spacing=1> <tspan x=36.891 y=34.495>TRY ME</tspan> </text> </g> </svg> ';
        e.exports = r
    },
    "72ab": function(e, t, r) {
        "use strict";
        r("dc1c")
    },
    "747a": function(e, t, r) {},
    7784: function(e, t, r) {},
    "77ff": function(e, t, r) {
        "use strict";
        r("1c7a")
    },
    "78a7": function(e, t, r) {},
    "78e3": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 12 12"> <path fill=#242424 fill-rule=evenodd d="M420 1703H432V1715H420z" transform="translate(-420 -1703)"/> </svg> ';
        e.exports = r
    },
    "7be0": function(e, t, r) {
        "use strict";
        r("9951")
    },
    "7c44": function(e, t, r) {
        e.exports = "img/cursor-heart.ea530583.png"
    },
    8250: function(e, t, r) {},
    "826b": function(e, t, r) {
        "use strict";
        r("c500")
    },
    "83dd": function(e, t, r) {},
    "87d2": function(e, t, r) {
        e.exports = "img/hand1.00d5ecb8.svg"
    },
    "8a23": function(e, t, r) {
        "use strict";
        r("637f")
    },
    9064: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg><path d="M6.68 13H.96c-.12 0-.24-.12-.24-.24V1.24c0-.12.12-.24.24-.24h5.62c2.68 0 4.08 1.36 4.08 3.22 0 1.04-.4 1.8-1.1 2.34v.04c1 .58 1.6 1.56 1.6 2.86 0 2.3-1.66 3.54-4.48 3.54zm-4.2-1.52h4.16c1.92 0 2.76-.68 2.76-2.02 0-1.32-.86-2-2.76-2H2.48v4.02zm4.06-8.96H2.48v3.42h4.46c1.62 0 1.96-.74 1.96-1.72 0-.96-.58-1.7-2.36-1.7zM21.24.8c3.6 0 6.48 2.32 6.48 6.2 0 3.88-2.9 6.2-6.48 6.2-3.56 0-6.48-2.32-6.48-6.2 0-3.88 2.92-6.2 6.48-6.2zm0 1.52c-2.58 0-4.72 1.72-4.72 4.68 0 2.92 2.14 4.68 4.72 4.68 2.62 0 4.72-1.76 4.72-4.68 0-2.96-2.08-4.68-4.72-4.68zM34.2 1.24v10.24h6.6c.12 0 .28.16.28.28v.96c0 .12-.16.28-.28.28h-8.12c-.12 0-.24-.12-.24-.24V1.24c0-.12.12-.24.24-.24h1.28c.12 0 .24.12.24.24zM50.1 13h-5.24c-.12 0-.24-.12-.24-.24V1.24c0-.12.12-.24.24-.24h5.2C54 1 56.8 3.34 56.8 7c0 3.6-2.36 6-6.7 6zm-.04-8.96h-1.84v5.92h1.86c2.1 0 3.12-1.14 3.12-2.96 0-1.88-1.28-2.96-3.14-2.96zm19.28 8.7l-.58-1.34h-5.24l-.58 1.34c-.1.22-.18.26-.42.26h-3.36c-.12 0-.16-.08-.16-.14 0-.06.04-.14.08-.24L64.46 1h3.36l5.38 11.62c.04.08.08.18.08.24s-.04.14-.16.14h-3.36c-.24 0-.32-.04-.42-.26zm-4.04-5.4l-.54 1.22h2.76l-.54-1.22c-.32-.74-.78-2.28-.78-2.28h-.12s-.46 1.54-.78 2.28zm11.32 5.42V1.24c0-.12.12-.24.24-.24h6c2.96 0 5.06 1.76 5.06 4.44 0 1.7-.92 2.92-2.32 3.6v.04s.26.36.48.7l1.8 2.78c.1.16.14.22.14.3 0 .08-.06.14-.2.14h-3.68c-.1 0-.22-.04-.28-.14L81.84 9.7h-1.62v3.06c0 .12-.12.24-.24.24h-3.12c-.12 0-.24-.12-.24-.24zm5.92-8.72h-2.32v2.82h2.32c1.14 0 1.78-.62 1.78-1.42 0-.82-.64-1.4-1.78-1.4zm18.66 4.32h-5.88v1.6h6.56c.12 0 .28.16.28.28v2.48c0 .12-.16.28-.28.28h-9.92c-.12 0-.24-.12-.24-.24V1.24c0-.12.12-.24.24-.24h9.84c.12 0 .28.16.28.28v2.48c0 .12-.16.28-.28.28h-6.48v1.48h5.88c.12 0 .28.16.28.28v2.28c0 .12-.16.28-.28.28z" fill=#ffffff fill-rule=evenodd /></svg>';
        e.exports = r
    },
    "921a": function(e, t, r) {},
    9285: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 12 12"> <path fill=#242424 fill-rule=evenodd d="M8 0v3.999L12 4v4H8v4H4V8H0V4h4V0h4z"/> </svg> ';
        e.exports = r
    },
    "92dc": function(e, t, r) {
        e.exports = "img/remote-brainstorm.e693a4d7.png"
    },
    9474: function(e, t, r) {},
    "950f": function(e, t, r) {},
    9526: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=22 height=4 viewBox="0 0 22 4"> <g fill-rule=evenodd> <circle cx=2 cy=2 r=2 /> <circle cx=11 cy=2 r=2 /> <circle cx=20 cy=2 r=2 /> </g> </svg> ';
        e.exports = r
    },
    "96f2": function(e, t, r) {},
    9951: function(e, t, r) {},
    "9a13": function(e, t, r) {
        "use strict";
        r("45df")
    },
    "9a2f": function(e, t, r) {
        e.exports = "img/cursor-eye.ce37000f.png"
    },
    "9b0c": function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=197 height=198 viewBox="0 0 197 198"> <defs> <path id=rft0ymklea d="M0 0.115L196.886 0.115 196.886 197 0 197z"/> </defs> <g fill=none fill-rule=evenodd> <path fill=#E4EDF3 d="M195 98.5c0 53.295-43.204 96.5-96.5 96.5S2 151.795 2 98.5 45.204 2 98.5 2 195 45.205 195 98.5"/> <mask id=i08rr8tedb fill=#fff> <use xlink:href=#rft0ymklea /> </mask> <path fill=#000 d="M98.443 4.133c-12.748 0-25.113 2.496-36.754 7.419-11.243 4.755-21.342 11.564-30.014 20.237-8.672 8.673-15.482 18.77-20.236 30.014-4.925 11.64-7.42 24.005-7.42 36.755 0 12.747 2.495 25.114 7.42 36.753 4.754 11.244 11.564 21.342 20.236 30.015 8.672 8.672 18.771 15.481 30.014 20.237 11.64 4.923 24.006 7.419 36.754 7.419 12.748 0 25.114-2.496 36.754-7.42 11.244-4.755 21.342-11.564 30.015-20.236 8.672-8.673 15.481-18.77 20.236-30.015 4.924-11.64 7.42-24.006 7.42-36.753 0-12.75-2.496-25.114-7.42-36.755-4.755-11.243-11.564-21.341-20.236-30.014-8.673-8.673-18.771-15.482-30.015-20.237-11.64-4.923-24.006-7.42-36.754-7.42m0 192.868c-13.289 0-26.18-2.603-38.319-7.737-11.722-4.958-22.25-12.056-31.29-21.096-9.04-9.04-16.138-19.568-21.096-31.29C2.603 124.737 0 111.846 0 98.556c0-13.289 2.603-26.181 7.738-38.32 4.958-11.721 12.055-22.25 21.096-31.29 9.04-9.04 19.568-16.137 31.29-21.096C72.262 2.717 85.154.114 98.444.114c13.289 0 26.18 2.603 38.318 7.737 11.723 4.96 22.25 12.057 31.29 21.097 9.04 9.04 16.14 19.568 21.097 31.29 5.134 12.138 7.737 25.03 7.737 38.32 0 13.288-2.603 26.18-7.737 38.318-4.958 11.723-12.056 22.25-21.096 31.291-9.04 9.04-19.568 16.138-31.291 21.096-12.138 5.134-25.03 7.737-38.319 7.737" mask=url(#i08rr8tedb) /> <g fill=#000> <path d="M2.286 13.339c-.685-.565-1.148-1.483-1.389-2.753L2.91 9.92c.15.795.37 1.388.666 1.777.294.39.691.552 1.19.485.37-.05.63-.192.777-.43.149-.236.196-.536.143-.9-.072-.498-.25-.906-.534-1.222-.285-.317-.707-.65-1.267-1L2.021 7.467C1.451 7.12 1.002 6.724.678 6.28.353 5.836.143 5.281.047 4.617c-.145-.986.045-1.792.57-2.418.522-.625 1.316-1.009 2.38-1.15 1.14-.151 2.002.049 2.586.6.584.553.99 1.348 1.22 2.387l-2.02.618c-.132-.681-.308-1.184-.527-1.51-.219-.326-.573-.455-1.061-.39-.348.045-.603.193-.766.443-.162.249-.22.545-.17.888.06.405.193.734.402.986.208.253.524.51.95.771L5.458 7.01c.692.425 1.254.907 1.687 1.443.432.535.704 1.187.816 1.955.088.602.027 1.155-.182 1.66-.209.504-.544.921-1.004 1.253-.462.33-1.018.54-1.67.627-1.193.158-2.133-.045-2.819-.61M10.019 12.974c-.553-.72-.85-1.753-.888-3.099L9.004 5.35c-.039-1.388.195-2.45.703-3.186.507-.736 1.406-1.123 2.696-1.161 1.208-.036 2.074.252 2.6.863.525.61.805 1.506.838 2.685l.03 1.065-2.162.065-.032-1.097c-.012-.448-.043-.8-.09-1.054-.048-.255-.158-.46-.33-.617-.172-.157-.436-.23-.791-.22-.366.01-.638.106-.815.283-.179.178-.292.41-.339.7-.048.288-.065.662-.052 1.121l.155 5.496c.02.72.126 1.236.318 1.549.192.314.526.462 1.004.448.345-.01.6-.101.76-.273.164-.173.265-.397.302-.675.039-.278.05-.647.039-1.106l-.033-1.143 2.162-.065.03 1.018c.034 1.221-.188 2.176-.666 2.864-.48.689-1.333 1.05-2.561 1.087-1.28.039-2.197-.302-2.751-1.023M20.73 5.992c.67.06 1.158-.056 1.466-.35.309-.293.494-.802.554-1.527.059-.703-.024-1.224-.246-1.565-.223-.34-.659-.54-1.306-.6l-.876-.077-.34 4.052.749.067zM18.119 0l3.108.278c1.36.121 2.352.48 2.976 1.071.625.594.882 1.537.774 2.833-.072.846-.248 1.523-.532 2.035-.284.511-.728.86-1.333 1.05L24.361 14l-2.358-.211-1.033-6.25-1.115-.099-.513 6.111-2.342-.21L18.118 0zM30.646 12.937c.255-.28.45-.723.583-1.328l1.266-5.727c.133-.604.145-1.078.032-1.42-.112-.342-.439-.567-.982-.673-.544-.107-.943-.022-1.196.254-.254.276-.446.711-.577 1.304l-1.267 5.729c-.133.604-.143 1.082-.027 1.436.113.353.443.584.987.69.532.104.926.016 1.181-.265m-4.257.327c-.435-.805-.505-1.875-.21-3.205l1.03-4.669c.293-1.32.806-2.26 1.543-2.821.737-.56 1.79-.707 3.16-.438 1.358.265 2.256.795 2.694 1.585.438.79.511 1.846.218 3.167l-1.03 4.668c-.292 1.32-.812 2.271-1.558 2.851-.747.58-1.794.738-3.14.474-1.37-.268-2.273-.805-2.707-1.612M37.832 4L40 4.718 36.645 15.501 39.55 16.463 39.072 18 34 16.32zM45.901 7L48 7.912 43.711 18.298 46.524 19.52 45.913 21 41 18.866zM52.57 22.608c.454.286.832.412 1.134.382.302-.031.568-.172.799-.423.231-.25.52-.656.866-1.217L58.05 17c.312-.506.516-.91.613-1.212.096-.303.08-.583-.05-.841-.132-.257-.42-.525-.864-.805l-.61-.384-5.206 8.448.639.402zM56.004 11l2.653 1.67c.907.57 1.544 1.142 1.91 1.716.366.574.5 1.184.404 1.831-.097.647-.405 1.391-.923 2.234l-2.551 4.14c-.53.86-1.069 1.488-1.615 1.885-.546.396-1.155.567-1.829.515-.674-.055-1.446-.356-2.316-.903L49 22.367 56.003 11zM61.647 27.98c.334-.14.691-.447 1.069-.922l3.585-4.511c.378-.476.598-.888.657-1.237.06-.349-.108-.684-.508-1.007-.4-.323-.766-.416-1.097-.28-.331.136-.683.438-1.055.905l-3.585 4.51c-.378.476-.598.894-.66 1.254-.063.36.105.702.505 1.024.392.316.755.406 1.089.265M58 26.475c0-.894.418-1.865 1.25-2.913l2.922-3.677c.827-1.04 1.668-1.651 2.522-1.835.855-.182 1.786.133 2.793.947 1 .808 1.504 1.652 1.513 2.533.009.881-.4 1.84-1.227 2.882l-2.921 3.676c-.828 1.04-1.677 1.658-2.548 1.854-.871.196-1.803-.106-2.794-.907-1.007-.815-1.51-1.668-1.51-2.56M72.979 24L74.311 25.412 69.064 31.915 75.921 27.167 77.003 28.316 71.996 35.026 78.68 30.051 80 31.451 69.566 39 68.267 37.623 73.47 30.659 66.331 35.567 65 34.155zM81.162 33L82.098 34.327 78.094 41.179 83.891 36.865 85 38.437 74.837 46 73.947 44.737 78.218 37.668 72.145 42.187 71 40.564zM83.195 52.508l4.514-3.1-5.306 1.58.792 1.52zM89.864 47L91 49.185 80.467 57l-.986-1.894 2.471-1.73-1.015-1.949-2.938.831-.999-1.92L89.864 47zM92.774 54L93.317 55.583 87.64 61.185 94.356 58.61 95 60.485 83.225 65 82.709 63.494 88.7 57.754 81.664 60.452 81 58.515zM86.387 68.463c.123.497.304.837.542 1.02.237.183.527.27.87.258.342-.012.836-.089 1.48-.232l4.993-1.106c.58-.128 1.012-.262 1.295-.4.282-.136.468-.336.557-.596.088-.26.072-.635-.048-1.123l-.166-.67-9.696 2.148.173.7zM97.047 63l.72 2.91c.246.996.297 1.809.153 2.44-.143.633-.479 1.132-1.004 1.501-.527.368-1.273.66-2.24.873l-4.75 1.052c-.989.22-1.818.278-2.489.174-.67-.103-1.229-.4-1.673-.89-.444-.492-.784-1.214-1.02-2.169L84 65.89 97.046 63zM87.942 78.423c.701-.644 1.724-1.01 3.068-1.1l4.517-.303c1.386-.092 2.456.131 3.208.67.753.542 1.17 1.53 1.252 2.966.077 1.346-.182 2.323-.776 2.93-.592.607-1.479.95-2.655 1.03l-1.063.07-.137-2.409 1.094-.073c.448-.03.799-.076 1.052-.139.252-.062.454-.19.605-.39.15-.197.215-.493.192-.889-.023-.407-.126-.707-.31-.899-.183-.193-.42-.31-.71-.353-.29-.043-.665-.05-1.122-.017l-5.488.367c-.72.048-1.232.184-1.538.409-.306.225-.444.603-.413 1.135.021.384.12.665.298.84.177.175.405.279.685.312.278.032.647.034 1.106.002l1.14-.076.138 2.409-1.016.068c-1.22.082-2.181-.132-2.885-.641-.703-.51-1.094-1.449-1.171-2.817-.081-1.425.229-2.46.93-3.102M94.434 89.636c-.035.697.09 1.202.377 1.513.286.31.772.485 1.457.524.665.038 1.153-.064 1.468-.307.314-.243.488-.702.522-1.378l.046-.914-3.83-.219-.04.78zM100 86.723l-.163 3.24c-.071 1.417-.377 2.46-.915 3.128-.54.67-1.42.97-2.646.899-.8-.047-1.444-.208-1.935-.486-.491-.278-.836-.728-1.034-1.35L87 93.673l.124-2.458 5.858-1.28.059-1.163-5.777-.332.123-2.441 12.613.723zM99 96.931L98.121 102 96.436 101.752 96.936 98.874 93.164 98.319 92.771 100.585 91.102 100.34 91.496 98.074 87.14 97.433 86.635 100.34 85 100.099 85.886 95zM88.164 106.554l5.547.529-5.089-2.173-.458 1.644zm8.836.085L96.343 109 83 108.2l.57-2.046 3.057.265.588-2.106-2.788-1.237.578-2.076L97 106.639zM93.596 114.065L94.327 112.04 96 112.673 93.716 119 92.043 118.368 92.758 116.389 82 112.324 82.84 110zM92 120.322L89.666 125 88.169 124.317 89.495 121.661 86.143 120.13 85.1 122.222 83.617 121.545 84.661 119.454 80.792 117.686 79.453 120.37 78 119.707 80.348 115zM86 131.385L85.101 132.755 77.497 131.165 83.382 135.377 82.317 137 72 129.616 72.855 128.311 80.748 130.089 74.583 125.676 75.683 124zM81 139.698L77.591 144 76.361 142.883 78.297 140.441 75.544 137.94 74.019 139.862 72.802 138.756 74.327 136.833 71.149 133.944 69.193 136.412 68 135.328 71.429 131zM76 145.099L74.565 146.406 68.115 141.084 72.781 147.99 71.614 149.052 64.952 143.966 69.849 150.702 68.426 152 61 141.487 62.401 140.211 69.314 145.496 64.49 138.308 65.926 137zM57.456 153.446c-.583.375-.9.764-.951 1.168-.052.405.106.905.472 1.502.354.579.734.884 1.14.915.407.032.934-.16 1.58-.576l.411-.264-1.955-3.193-.697.448zm-3.298-5.197c-.592.38-.913.788-.964 1.224-.05.436.127.985.533 1.648.417.682.847 1.098 1.29 1.25.441.151.959.037 1.55-.344l.71-.457-2.34-3.823-.779.502zM63 156.34l-2.733 1.758c-1.048.673-1.983.97-2.808.888-.825-.082-1.563-.654-2.215-1.718-.423-.692-.616-1.318-.58-1.881.036-.563.288-1.054.756-1.472-1.43.568-2.639.045-3.629-1.57-.668-1.092-.914-2.083-.734-2.973.178-.888.779-1.66 1.8-2.317L56.052 145 63 156.341zM45.18 153.976c-.021.376.1.848.365 1.417l2.519 5.388c.265.568.544.96.836 1.173.293.214.677.208 1.153-.02.478-.227.728-.526.753-.898.025-.371-.093-.836-.354-1.393l-2.519-5.39c-.265-.568-.549-.963-.85-1.184-.301-.22-.69-.218-1.168.01-.467.222-.712.522-.735.897m3.028-2.725c.82.405 1.52 1.233 2.106 2.485l2.053 4.392c.58 1.242.761 2.304.544 3.185-.217.882-.926 1.608-2.128 2.181-1.191.568-2.194.658-3.005.268-.812-.39-1.509-1.206-2.089-2.45l-2.052-4.391c-.58-1.242-.764-2.315-.55-3.218.213-.903.91-1.636 2.093-2.2 1.201-.572 2.21-.656 3.028-.252M38.243 158.816l2.576 4.9-.91-5.468-1.666.568zM43 166.184l-2.394.816L34 155.487l2.075-.707 1.444 2.686 2.136-.728-.46-3.021 2.107-.717L43 166.184zM31.778 164.177c-.662.146-1.1.405-1.312.78-.214.374-.247.919-.098 1.632.143.692.371 1.167.682 1.426.313.26.788.318 1.43.178l.864-.19-.826-3.988-.74.162zM36 169.131l-3.072.675c-1.343.295-2.4.254-3.17-.125s-1.288-1.207-1.553-2.481c-.172-.833-.195-1.537-.067-2.113.128-.576.456-1.046.983-1.41L26 157.6l2.331-.513 2.775 5.68 1.102-.243-1.247-6.015 2.315-.509L36 169.131zM21.881 159.89c-.521.047-.89.169-1.108.368-.218.198-.344.459-.378.783-.035.325-.022.8.036 1.427l.454 4.854c.053.564.13.988.231 1.274.102.286.28.489.532.608.253.12.636.156 1.146.11l.704-.063-.88-9.428-.737.067zM26 170.685l-3.052.273c-1.044.094-1.876.03-2.498-.194-.622-.223-1.086-.607-1.389-1.154-.304-.546-.5-1.29-.587-2.23l-.432-4.619c-.09-.96-.037-1.75.157-2.368.195-.616.572-1.1 1.13-1.45.558-.35 1.338-.57 2.339-.66l3.146-.283L26 170.685z" transform="translate(84 12)"/> </g> </g> </svg> ';
        e.exports = r
    },
    "9c78": function(e, t) {
        var r = '<svg width=130 height=130 viewBox="0 0 206 210" fill=none xmlns=http://www.w3.org/2000/svg> <path d="M103 0L114.682 53.8163L148.558 10.3983L135.733 63.9538L185.092 39.5336L150.301 82.2211L205.367 81.6353L155.5 105L205.367 128.365L150.301 127.779L185.092 170.466L135.733 146.046L148.558 199.602L114.682 156.184L103 210L91.3176 156.184L57.4422 199.602L70.2668 146.046L20.9077 170.466L55.6991 127.779L0.632568 128.365L50.5 105L0.632568 81.6353L55.6991 82.2211L20.9077 39.5336L70.2668 63.9538L57.4422 10.3983L91.3176 53.8163L103 0Z" fill=#f99c9d stroke=black stroke-width=4 /> </svg> ';
        e.exports = r
    },
    "9cdc": function(e, t, r) {
        "use strict";
        r("c701")
    },
    a454: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=37 height=43 viewBox="0 0 37 43"> <defs> <path id=6brnbhyula d="M0 0.168L36.777 0.168 36.777 43 0 43z"/> </defs> <g fill=none fill-rule=evenodd> <path fill=#FFF d="M7.12 18.457c.113-.003.226-.007.338-.012-.12.026-.238.054-.354.082.006-.023.01-.047.015-.07M36 22.409c0-.942-1.384-1.705-3.091-1.705-1.565 0-2.854.64-3.06 1.472-.697.179-1.271.65-1.59 1.278-.139-.083-.283-.14-.437-.14-.581 0-1.08.65-1.294 1.577-.207-.12-.43-.189-.664-.189-.919 0-1.686 1.008-1.863 2.347-.175-.065-.354-.125-.54-.173.323-.399.502-.823.502-1.265 0-.527-.259-1.029-.713-1.492.026-.257.041-.525.041-.804 0-.227-.01-.448-.027-.66.58-.424.905-.891.905-1.383 0-.5-.335-.975-.934-1.404.02-.203.032-.426.032-.66 0-.087-.002-.172-.006-.256.442-.728.702-1.579.702-2.493 0-.468-.07-.92-.195-1.348.245-.52.401-1.293.401-2.158 0-.368-.029-.718-.08-1.04.865-.635 1.4-1.51 1.4-2.475 0-.739-.316-1.424-.85-1.99.126-.283.204-.606.204-.955 0-1.08-.695-1.955-1.552-1.955-.729 0-1.336.635-1.503 1.488l-.06-.012c.006-.072.011-.145.011-.22 0-.32-.057-.625-.156-.91.015-.185.025-.375.025-.57 0-1.83-.694-3.314-1.55-3.314-.392 0-.75.315-1.022.83-.117-.091-.247-.147-.386-.147-.489 0-.885.639-.885 1.427 0 .166.021.322.053.47-.686.474-1.14 1.289-1.14 2.215 0 .493.131.954.355 1.35-.73.615-1.174 1.415-1.174 2.293 0 .276.048.543.13.8-.675.293-1.166 1.125-1.166 2.116 0 .52.14.993.365 1.372-.313.454-.548.965-.691 1.513-.072-.034-.147-.057-.225-.057-.522 0-.946.817-.946 1.824 0 .303.042.584.11.836-.45 0-.893.011-1.328.03.009-.063.02-.125.02-.19 0-.37-.14-.706-.365-.967-.062-.311-.386-.599-.907-.839.03-.142.051-.293.051-.452 0-.762-.384-1.379-.863-1.395 0-.002 0-.003-.002-.005.193-.366.304-.76.304-1.175 0-.941-.546-1.79-1.422-2.398.282-.399.448-.872.448-1.381 0-1.201-.913-2.208-2.145-2.493.168-.287.273-.61.273-.96 0-1.11-.968-2.01-2.161-2.01s-2.161.9-2.161 2.01c0 .777.479 1.443 1.173 1.778-.428.45-.688 1.034-.688 1.675 0 .252.042.495.116.725l-.145.05c-.229-.104-.494-.168-.78-.168-.85 0-1.538.525-1.538 1.172 0 .19.065.366.17.524-.309.445-.486.945-.486 1.476 0 .906.506 1.726 1.324 2.328-.007.096-.013.192-.013.293 0 .2.018.389.045.569-.388.232-.609.5-.609.783 0 .273.207.53.569.757-.002.04-.005.078-.005.117 0 1.019.459 1.91 1.148 2.416-.405.362-.627.753-.627 1.16 0 .314.134.618.38.907-.022.203-.034.412-.034.626 0 .651.108 1.256.29 1.764-.219.333-.347.682-.347 1.042 0 .779.553 1.504 1.498 2.126-.726.228-1.134.483-1.134.751 0 .287.468.558 1.294.8-.247.371-.389.785-.389 1.223 0 .779.436 1.483 1.142 2-.356.347-.562.746-.562 1.172 0 .645.47 1.23 1.231 1.662 0 .015-.003.029-.003.044 0 .828.385 1.544.953 1.934-.093.306-.148.627-.148.959 0 2.054 1.905 3.718 4.254 3.718.908 0 1.747-.25 2.438-.673.51.178 1.048.279 1.605.279.549 0 1.077-.098 1.58-.271.533.201 1.256.326 2.055.326 1.635 0 2.96-.52 2.96-1.161 0-.257-.213-.493-.571-.684.748-.374 1.246-1.029 1.246-1.775 0-.346-.108-.67-.296-.958.84-.345 1.466-1.097 1.64-2.01.016 0 .032.004.049.004 1.219 0 2.207-.684 2.207-1.527 0-.225-.074-.436-.2-.628.412-.485.69-1.05.804-1.66.08.009.159.02.242.02 1.025 0 1.856-.626 1.856-1.398 0-.328-.156-.626-.408-.864.19-.162.373-.36.547-.585.395.365.902.481 1.248.242.423-.293.44-1.001.038-1.582-.015-.022-.034-.04-.05-.063.072.007.141.022.216.022 1.14 0 2.09-.773 2.382-1.82.071.01.145.018.22.018.662 0 1.198-.434 1.198-.969 0-.114-.029-.222-.073-.323 1.067-.27 1.81-.862 1.81-1.55"/> <mask id=brepk9oqwb fill=#fff> <use xlink:href=#6brnbhyula /> </mask> <path fill=#000 d="M19.91 43H8.576c-.295-.014-1.168-.108-1.679-.615-.804-.798-.606-3.317-1.02-3.646-.193-.155-.402-.43-.613-.892-1.175-2.574-2.488-9.254-2.921-12.387-.211-1.528-.096-4.413-2.197-12.972-.48-1.65.243-3.184 1.725-3.617.396-.116.782-.139 1.141-.079L2.296 6.22c-.008-.025-.012-.05-.017-.075-.13-.771-.222-2.763 2.196-3.398 2.024-.531 2.837 1.54 3.13 2.251l4.584 12.425 4.638-14.558c.287-.88.95-2.924 3.025-2.676 1.67.203 2.538 1.252 2.379 2.875-.032.323-2.498 11.957-3.556 16.945-.084.397-.474.647-.867.564-.394-.084-.646-.474-.561-.87 1.38-6.507 3.461-16.354 3.534-16.81.067-.687-.091-1.126-1.105-1.249-.485-.06-.924.027-1.459 1.672l-5.281 16.577c-.096.298-.368.503-.68.51h-.016c-.305 0-.578-.191-.685-.48l-5.31-14.39c-.57-1.381-1.043-1.489-1.526-1.34-1.171.36-1.068 1.257-1.005 1.672L7.81 20.557c.11.39-.118.794-.506.903-.386.11-.791-.117-.9-.507l-.001-.004-2.684-9.605c-.18-.62-.581-1.316-1.439-1.066-.794.233-.932 1.111-.723 1.83 2.146 8.746 2.055 11.733 2.246 13.32.251 2.08 1.833 10.256 3.035 11.914.974 1.344 1.069 3.954 1.133 4.053.054.04.387.125.643.14l11.201-.001c.127-.04.443-.225.786-.57.614-.614-.177-3.195 1.352-4.457.744-.615 2.349-1.825 3.1-3.09 1.707-2.873 9.772-11.186 10.004-11.444-1.127-.602-2.237-.749-3.316-.444-1.633.463-2.715 1.792-3.095 2.505-.05.093-.12.175-.204.239-4.921 3.72-5.15 3.658-5.534 3.562-.392-.098-.63-.496-.532-.889.07-.28 3.168-2.321 5.064-3.751.647-1.12 2.019-2.543 3.905-3.077 1.524-.432 3.134-.187 4.657.704.514.3.844.918.76 1.128-.112.283-8.827 9.478-10.455 12.218-.893 1.503-3.686 3.671-3.748 3.724-.273.473-.287 1.136-.3 1.78-.015.776-.032 1.58-.504 2.191-.7.905-1.608 1.104-1.71 1.123-.045.01-.09.014-.137.014" mask=url(#brepk9oqwb) /> <path fill=#000 d="M20 6.457c.296-1.604 1.867-2.7 3.566-2.41 2.403.41 2.537 2.497 2.395 3.264-.823 6.222-2.109 16.363-2.112 17.58.168.332.473.476.904.651l.177.073c.397.171.568.604.38.968-.135.262-.422.417-.72.417-.113 0-.23-.022-.34-.07l-.143-.059c-.484-.196-1.384-.561-1.788-1.555-.086-.21-.263-.646 2.066-18.214.082-.445.04-1.493-1.084-1.622-.946-.107-1.71.475-1.84 1.179M16.71 32c-.108 0-.22-.025-.325-.077-.349-.176-.486-.596-.306-.937 2.182-4.13 7.03-3.99 7.239-3.984.392.015.697.338.681.722-.015.383-.35.672-.736.667-.173-.007-4.161-.1-5.921 3.233-.126.239-.374.376-.631.376M5.658 23c-.184 0-.367-.093-.496-.274-.239-.331-.21-.834.064-1.122C6.016 20.775 7.743 20 8.341 20h.004c.363.002.656.36.655.799-.001.437-.295.79-.656.792-.313.021-1.709.642-2.255 1.215-.124.13-.278.194-.43.194M10.78 21c-.277 0-.545-.147-.685-.407-.206-.377-.065-.848.313-1.053.77-.417 3.002-.677 3.98-.464.42.092.685.506.594.925-.092.419-.507.686-.926.593-.697-.151-2.525.106-2.905.312-.119.063-.246.094-.372.094"/> <path fill=#000 d="M19.222 21c-.105 0-.213-.022-.315-.07-.65-.296-2.492-.415-2.904-.286-.411.127-.845-.11-.97-.532-.124-.422.108-.867.519-.995.837-.26 3.072-.06 3.986.356.392.179.57.65.395 1.052-.13.298-.413.475-.711.475"/> </g> </svg> ';
        e.exports = r
    },
    a972: function(e, t, r) {},
    a9d5: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=117 height=95 viewBox="0 0 117 95"> <defs> <filter id=z3nc9ae09b width=106.8% height=109.3% x=-3.1% y=-4.6% filterUnits=objectBoundingBox> <feGaussianBlur in=SourceAlpha result=shadowBlurInner1 stdDeviation=1.5 /> <feOffset dy=1 in=shadowBlurInner1 result=shadowOffsetInner1 /> <feComposite in=shadowOffsetInner1 in2=SourceAlpha k2=-1 k3=1 operator=arithmetic result=shadowInnerInner1 /> <feColorMatrix in=shadowInnerInner1 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/> </filter> <path id=hjvzxh2mma d="M202.672 728L186.756 743.859 204.204 761.258 135 761.258 135 783.745 204.204 783.745 186.756 801.141 202.672 817 247 772.5z"/> </defs> <g fill=none fill-rule=evenodd transform="rotate(-180 125 410)"> <use fill=#FFF xlink:href=#hjvzxh2mma /> <use fill=#000 filter=url(#z3nc9ae09b) xlink:href=#hjvzxh2mma /> <use stroke=#000 stroke-width=3 xlink:href=#hjvzxh2mma /> </g> </svg> ';
        e.exports = r
    },
    aa81: function(e, t, r) {
        e.exports = "img/disk.bbeb0a65.png"
    },
    ac68: function(e, t, r) {
        e.exports = "img/system-story.366efbe8.png"
    },
    ad1a: function(e, t, r) {},
    adcf: function(e, t, r) {},
    b264: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=28 height=36 viewBox="0 0 28 36"> <path fill=#242424 fill-rule=evenodd stroke=#242424 d="M1529.375 36.5L1527.478 38.38 1537.362 48.171 1507.5 48.171 1507.5 50.829 1537.362 50.829 1527.478 60.62 1529.375 62.5 1542.5 49.501z" transform="rotate(90 785 -721.5)"/> </svg> ';
        e.exports = r
    },
    b523: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 15 15"> <g fill=none fill-rule=evenodd> <path fill=#000 d="M7.34.25L4.247 4.733H.25v9.314h12.071l1.703-2.976.022-.041V4.733h-3.362V.25H7.34zM5.082 5.453l2.835-4.106h1.671v4.482h3.363v4.91l-1.264 2.212H5.083V5.453zM1.346 12.95h2.64V5.829h-2.64v7.122z"/> <path stroke=#000 stroke-width=.5 d="M5.082 12.95V5.452l2.834-4.106h1.673V5.83h3.361v4.91l-1.264 2.211H5.082zm-3.735 0h2.639V5.83H1.347v7.12zm9.339-8.218V.25H7.34L4.246 4.732H.25v9.315h12.073l1.701-2.977.023-.04V4.732h-3.361z"/> </g> </svg> ';
        e.exports = r
    },
    b54f: function(e, t, r) {},
    b5f5: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=22 height=43 viewBox="0 0 22 43"> <defs> <path id=ob8asv8ema d="M11.789.319c-1.348.029-2.22.785-2.46 2.136-.021.116-1.1 9.9-1.373 12.33L5.858 3.958C5.246 1.5 3.694 1.42 2.824 1.591c-.86.168-2.258.818-1.986 3.287.591 4.861 1.348 11.263 1.847 15.808-.748.553-2.437 1.974-2.609 3.636-.108 1.041-.101 2.775.02 4.123.084.956 2.023 6.017 4.4 9.864.169.308.104 3.384.186 3.64.316.988 1.713 1.045 1.994 1.046l11.47-.001c.065.004.13.006.195.006.906 0 1.853-.408 1.953-1.359.049-.471.113-3.537.178-3.761 1.074-3.354 1.313-9.775 1.323-13.509v-.489c-.004-1.172-.03-2.009-.055-2.292-.125-1.37-1.239-2.292-2.772-2.292-.43 0-.832.072-1.184.199v-.41c0-1.338-1.589-2.166-3.061-2.166-.386 0-.742.06-1.062.171l.492-14.056c0-1.29-.693-2.678-2.217-2.717h-.147zM8.846 19.688c.085-.387 1.904-16.82 1.927-16.981.122-.684.419-.939 1.097-.939.809 0 .818 1.217.819 1.245l-.561 15.964c-.003.047-.005.093-.005.14 0 .396.321.718.72.725.395.015.733-.305.746-.7l.003-.078c.037-.411.491-.693 1.132-.693.88 0 1.594.433 1.594.716v2.236c0 .401.328.724.734.724.405 0 .733-.323.733-.724 0-.338.622-.574 1.184-.574.367 0 1.23.095 1.31.973.098 1.078.192 11.362-1.205 15.72-.121.378-.194 3.599-.235 4.014-.104.059-12.619.045-12.757-.012-.008-.193.031-3.298-.333-3.887-2.408-3.894-4.123-8.618-4.193-9.237-.11-1.248-.12-2.903-.021-3.85.075-.714.719-1.48 1.339-2.05.225 2.116.293 3.497.347 3.872.055.393.262.747.664.782.403.035.76-.257.796-.656.103-1.121-1.971-18.284-2.387-21.704-.165-1.51.472-1.634.815-1.701.381-.075.958-.188 1.318 1.254l2.982 15.401c.065.337.361.583.71.588.326-.006.651-.233.727-.568z"/> <path id=tor5toog2c d="M1.064 0C.555 0 .128.273.107.628L.001 2.314c-.022.364.382.67.905.686h.041c.504 0 .923-.276.946-.628L1.999.686C2.021.322 1.617.016 1.094 0h-.03z"/> <path id=15y3cgn2ye d="M0 .55v.901C0 1.755.447 2 1 2c.552 0 1-.245 1-.549V.55C2 .245 1.552 0 1 0 .447 0 0 .245 0 .55z"/> </defs> <g fill=none fill-rule=evenodd> <path fill=#FFF d="M5.697 41.519L4.697 38.519 0.697 29.519 0.697 23.481 2.697 21.519 3.697 20.519 1.697 4.519 2.697 2.519 3.697 2.519 5.697 4.519 7.697 17.519 8.697 13.519 10.697 1.519 12.697 1.519 13.697 2.519 12.697 18.519 15.697 17.519 16.697 19.519 17.697 20.519 20.697 20.519 20.697 22.519 20.697 35.519 18.697 42.519z"/> <mask id=ir7kum4gob fill=#fff> <use xlink:href=#ob8asv8ema /> </mask> <path fill=#000 d="M-5 48L26.796 48 26.796 -4.682 -5 -4.682z" mask=url(#ir7kum4gob) /> <g transform="translate(12 18)"> <mask id=zkbktd8vdd fill=#fff> <use xlink:href=#tor5toog2c /> </mask> <path fill=#000 d="M-5 8L7 8 7 -5 -5 -5z" mask=url(#zkbktd8vdd) /> </g> <g transform="translate(16 22)"> <mask id=cr3demfx7f fill=#fff> <use xlink:href=#15y3cgn2ye /> </mask> <path fill=#000 d="M-5 7L7 7 7 -5 -5 -5z" mask=url(#cr3demfx7f) /> </g> </g> </svg> ';
        e.exports = r
    },
    b725: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=252 height=252 viewBox="0 0 252 252"> <g fill=none fill-rule=evenodd> <path fill=#F99C9D d="M123 0L136.379 21.377 154.835 4.19 162.225 28.302 184.5 16.478 185.398 41.681 209.974 36.026 204.319 60.602 229.521 61.5 217.698 83.775 241.809 91.165 224.623 109.621 246 123 224.623 136.379 241.809 154.834 217.698 162.225 229.521 184.5 204.319 185.398 209.974 209.974 185.398 204.319 184.5 229.521 162.225 217.698 154.835 241.809 136.379 224.623 123 246 109.621 224.623 91.165 241.809 83.775 217.698 61.5 229.521 60.602 204.319 36.026 209.974 41.681 185.398 16.479 184.5 28.303 162.225 4.191 154.834 21.377 136.379 0 123 21.377 109.621 4.191 91.165 28.303 83.775 16.479 61.5 41.681 60.602 36.026 36.026 60.602 41.681 61.5 16.478 83.775 28.302 91.165 4.19 109.621 21.377z" transform="translate(3 3)"/> <path stroke=#000 stroke-width=3 d="M123 0L136.379 21.377 154.835 4.19 162.225 28.302 184.5 16.478 185.398 41.681 209.974 36.026 204.319 60.602 229.521 61.5 217.698 83.775 241.809 91.165 224.623 109.621 246 123 224.623 136.379 241.809 154.834 217.698 162.225 229.521 184.5 204.319 185.398 209.974 209.974 185.398 204.319 184.5 229.521 162.225 217.698 154.835 241.809 136.379 224.623 123 246 109.621 224.623 91.165 241.809 83.775 217.698 61.5 229.521 60.602 204.319 36.026 209.974 41.681 185.398 16.479 184.5 28.303 162.225 4.191 154.834 21.377 136.379 0 123 21.377 109.621 4.191 91.165 28.303 83.775 16.479 61.5 41.681 60.602 36.026 36.026 60.602 41.681 61.5 16.478 83.775 28.302 91.165 4.19 109.621 21.377z" transform="translate(3 3)"/> <g> <path fill=#FFF d="M179.47 90.227c0 49.537-40.159 89.696-89.697 89.696-49.538 0-89.696-40.159-89.696-89.696C.077 40.689 40.235.53 89.773.53s89.697 40.158 89.697 89.696" transform="translate(3 3) translate(32 32)"/> <path stroke=#1D1D1B stroke-width=3 d="M179.47 90.227c0 49.537-40.159 89.696-89.697 89.696-49.538 0-89.696-40.159-89.696-89.696C.077 40.689 40.235.53 89.773.53s89.697 40.158 89.697 89.696z" transform="translate(3 3) translate(32 32)"/> <path stroke=#1D1D1B stroke-width=3 d="M39.216 57.372l-22.06 43.584 14.361 6.581L53.323 63.53l-14.107-6.158zM56.656 68.815l-18.31 37.548c2.925 1.759 5.85 3.516 8.773 5.275" transform="translate(3 3) translate(32 32)"/> <path stroke=#1D1D1B stroke-linecap=round stroke-width=3 d="M56.656 68.815c.408.414 1.7 1.614 3.756 1.882 3.103.403 5.271-1.662 5.52-1.907 0 0 1.765-.923 7.03-3.166 6.773-2.886 14.56-1.408 21.126-.162 1.789.34 3.403.747 6.34 1.115 4.31.54 4.713.152 7.028.821 2.604.753 3.036 1.518 6.06 2.212 1.47.338 2.66.611 4.12.497 2.985-.234 5.235-1.937 6.542-3.205l16.484 36.625-6.913 3.911" transform="translate(3 3) translate(32 32)"/> <path stroke=#1D1D1B stroke-width=3 d="M94.088 65.462c-3.962.888-10.98 3.13-16.386 9.196-4.78 5.364-9.128 14.65-5.834 18.644.945 1.146 2.705 2.105 4.553 2.36.26.036 3.116.388 5.504-1.329 1.303-.938 1.04-1.467 3.572-4.68.982-1.245 1.59-2.01 2.595-2.943 1.16-1.076 2.335-2.147 4.182-2.806 1.472-.524 2.801-.585 3.681-.554 6.895 4.926 12.817 8.205 16.975 10.297 1.327.668 3.807 1.885 7.028 3.72 1.357.772 2.78 1.582 4.29 2.559 5.562 3.598 9.323 6.03 9.395 9.151.045 1.991-1.41 4.305-3.47 5.305-6.863 3.329-20.064-8.092-20.112-8.024-.046.065 14.678 7.126 13.91 14.034-.24 2.155-1.975 4.186-4.028 4.956-7.036 2.64-18.054-9.448-18.012-9.495.018-.02 2.294 1.8 9.885 7.964.143.359 1.33 3.468-.466 5.913-1.703 2.318-4.86 2.368-5.784 2.382-6.78.106-12.346-7.058-12.265-7.144.027-.029.844.606 4.555 3.747.147.12 3.111 2.605 2.424 5.877-.065.307-.405 1.724-1.696 2.853-2.249 1.97-5.653 1.327-7.215 1.032-3.377-.637-5.634-2.495-6.704-3.528M56.656 113.589c0-2.775-2.341-5.024-5.23-5.024-2.887 0-5.228 2.25-5.228 5.024s2.341 5.024 5.229 5.024 5.229-2.25 5.229-5.024zM66.836 115.508c-2.004-2.286-6.2-2.06-9.372.507-3.17 2.566-4.117 6.5-2.113 8.787 2.004 2.286 6.2 2.06 9.371-.508 3.172-2.566 4.118-6.5 2.114-8.786z" transform="translate(3 3) translate(32 32)"/> <path stroke=#1D1D1B stroke-width=3 d="M78.836 120.513c-1.802-2.388-6.483-2.08-10.456.686-3.974 2.766-5.735 6.944-3.934 9.332 1.8 2.388 6.482 2.081 10.456-.685 3.973-2.767 5.735-6.945 3.934-9.333zM83.832 136.14c3.065-2.134 4.208-5.642 2.553-7.837-1.655-2.194-5.482-2.244-8.547-.11-3.065 2.135-4.209 5.644-2.554 7.838 1.655 2.194 5.482 2.243 8.548.11zM126.916 60.923l20.514 44.274 14.487-6.322-21.016-44.36-13.985 6.408z" transform="translate(3 3) translate(32 32)"/> </g> </g> </svg> ';
        e.exports = r
    },
    b8c4: function(e, t, r) {},
    b8e3: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=14 height=15 viewBox="0 0 14 15"> <g fill=none fill-rule=evenodd> <path fill=#000 d="M4.34.25v1.894H.25v1.107h1.227l.869 11.312.003.038h9.014l.872-11.35h1.394V2.144H9.337V.25H4.34zm1.108 1.878h2.799V1.34h-2.8v.788zM2.567 3.234h8.545l-.8 10.244H3.349L2.567 3.234z"/> <path stroke=#000 stroke-width=.5 d="M2.566 3.234h8.545l-.8 10.244H3.348L2.566 3.234zm2.881-1.106h2.8V1.34h-2.8v.788zm3.89.016V.25H4.34v1.894H.25v1.107h1.226l.87 11.311.002.04h9.014l.872-11.35h1.395V2.143H9.337z"/> <path fill=#000 d="M6.286 12.137L7.392 12.137 7.392 4.626 6.286 4.626z"/> <path stroke=#000 stroke-width=.5 d="M6.286 12.137L7.392 12.137 7.392 4.626 6.286 4.626z"/> <path fill=#000 d="M9.268 12.17L9.674 4.695 9.676 4.653 8.613 4.596 8.571 4.594 8.165 12.069 8.164 12.111 9.226 12.168z"/> <path stroke=#000 stroke-width=.5 d="M9.268 12.17L9.674 4.695 9.676 4.653 8.613 4.596 8.571 4.594 8.165 12.069 8.164 12.111 9.226 12.168z"/> <path fill=#000 d="M4.407 12.17L5.47 12.113 5.512 12.111 5.107 4.636 5.105 4.594 4.043 4.651 4.001 4.653 4.405 12.128z"/> <path stroke=#000 stroke-width=.5 d="M4.407 12.17L5.47 12.113 5.512 12.111 5.107 4.636 5.105 4.594 4.043 4.651 4.001 4.653 4.405 12.128z"/> </g> </svg> ';
        e.exports = r
    },
    bdc3: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 12 4"> <path fill=#242424 fill-rule=evenodd d="M195 1703H199V1715H195z" transform="rotate(90 955 760)"/> </svg> ';
        e.exports = r
    },
    c2f7: function(e, t, r) {
        e.exports = "img/hand3.5cf0a41a.svg"
    },
    c33e: function(e, t, r) {
        "use strict";
        r("78a7")
    },
    c360: function(e, t, r) {
        e.exports = "img/team-feedback.44c7e143.png"
    },
    c475: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=1967 height=1966 viewBox="0 0 1967 1966"> <g fill=none fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=round stroke-width=2.631> <path d="M284.203 281.55c376.652 0 682 305.34 682 682M129.626 483.532c363.702-97.167 737.546 118.037 835 480.67M34.21 713.837c325.974-188.26 742.798-76.54 931 249.549M.974 963.096c265.922-265.334 697.07-265.334 963 0M33.83 1214.417c188.203-326.09 605.018-437.812 931-249.542M131.247 1444.303c97.454-362.633 471.299-577.837 835-480.67M284.298 1645.656c0-376.657 305.34-682 682-682M484.316 1798.198c-97.168-363.702 118.036-737.547 480.668-835M716.588 1895.648c-188.267-325.977-76.539-742.796 249.546-931M965.879 1926.884c-265.334-265.923-265.334-697.076 0-963M1215.166 1895.994c-326.09-188.197-437.813-605.024-249.542-931M1447.05 1798.61c-362.635-97.453-577.841-471.298-480.665-835M1646.404 1645.525c-376.657 0-682-305.343-682-682M1798.946 1445.508c-363.702 97.167-737.546-118.037-835-480.67M1896.396 1213.233c-325.971 188.271-742.802 76.54-931-249.544M1929.633 963.98c-265.924 265.333-697.076 265.333-963 0M1896.742 714.657c-188.198 326.089-605.029 437.81-931 249.55M1799.36 482.773c-97.455 362.64-471.3 577.835-835 480.668M1646.308 281.42c0 376.652-305.342 682-682 682M1446.29 128.878c97.169 363.71-118.03 737.546-480.668 835M1213.984 33.427c188.265 325.977 76.541 742.796-249.546 931M964.728.19c265.333 265.925 265.333 697.077 0 963M715.406 33.081c326.088 188.197 437.81 605.024 249.549 931M483.556 128.464c362.632 97.454 577.836 471.299 480.669 835" transform="rotate(-1 2063.092 -115.592)"/> </g> </svg> ';
        e.exports = r
    },
    c500: function(e, t, r) {},
    c701: function(e, t, r) {},
    c77d: function(e, t, r) {
        e.exports = "img/scroll-inner.298bc22e.svg"
    },
    ca7e: function(e, t, r) {},
    cc42: function(e, t, r) {
        e.exports = "img/drink.353cd250.png"
    },
    ce81: function(e, t, r) {
        "use strict";
        r("60eb")
    },
    d027: function(e, t, r) {},
    d78c: function(e, t, r) {
        e.exports = ""
    },
    d86c: function(e, t, r) {
        e.exports = ""
    },
    d9cc: function(e, t, r) {},
    db11: function(e, t, r) {
        "use strict";
        r("921a")
    },
    db9e: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    dc03: function(e, t, r) {
        "use strict";
        r("a972")
    },
    dc1c: function(e, t, r) {},
    de64: function(e, t, r) {},
    e078: function(e, t, r) {
        var c = {
            "./beach.png": "f5de",
            "./cursor-default.png": "08c9",
            "./cursor-eye.png": "9a2f",
            "./cursor-heart.png": "7c44",
            "./cursor-input.png": "3a51",
            "./cursor-pencil.png": "0551",
            "./cursor-pointer.png": "db9e",
            "./disk.png": "aa81",
            "./dog.png": "3234",
            "./drink.png": "cc42",
            "./garage.png": "17e4",
            "./hero-modern-computer.png": "069c",
            "./kanban-style.png": "faea",
            "./meeting.png": "2917",
            "./remote-brainstorm.png": "92dc",
            "./system-story.png": "ac68",
            "./team-feedback.png": "c360"
        };

        function n(e) {
            var t = a(e);
            return r(t)
        }

        function a(e) {
            if (!r.o(c, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return c[e]
        }
        n.keys = function() {
            return Object.keys(c)
        }, n.resolve = a, e.exports = n, n.id = "e078"
    },
    e30b: function(e, t) {
        var r = '<?xml version="1.0" encoding="utf-8"?> <svg version=1.1 id=Warstwa_1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink x=0px y=0px viewBox="0 0 1926.25 1926.25" style="enable-background:new 0 0 1926.25 1926.25" xml:space=preserve> <style>.st0{fill:none;stroke:#fff;stroke-width:1.7187;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}</style> <g> <path class=st0 d=M282.7,282.7c375.79,0,680.43,304.64,680.43,680.43 /> <path class=st0 d=M129.78,481.99c362.98-97.26,736.09,118.15,833.35,481.13 /> <path class=st0 d=M33.65,714.07c325.44-187.89,741.58-76.39,929.48,249.05 /> <path class=st0 d=M0.86,963.13c265.72-265.72,696.54-265.72,962.27,0 /> <path class=st0 d=M33.65,1212.18c187.89-325.44,604.04-436.95,929.48-249.05 /> <path class=st0 d=M129.78,1444.26c97.26-362.98,470.36-578.39,833.35-481.13 /> <path class=st0 d=M282.7,1643.55c0-375.79,304.64-680.42,680.43-680.42 /> <path class=st0 d=M481.99,1796.47c-97.26-362.98,118.15-736.09,481.13-833.35 /> <path class=st0 d=M714.07,1892.6c-187.89-325.44-76.39-741.58,249.05-929.48 /> <path class=st0 d=M963.13,1925.39c-265.72-265.72-265.72-696.54,0-962.27 /> <path class=st0 d=M1212.18,1892.6c-325.44-187.89-436.95-604.04-249.05-929.48 /> <path class=st0 d=M1444.26,1796.47c-362.98-97.26-578.39-470.36-481.13-833.35 /> <path class=st0 d=M1643.55,1643.55c-375.79,0-680.42-304.64-680.42-680.42 /> <path class=st0 d=M1796.47,1444.26c-362.98,97.26-736.09-118.15-833.35-481.13 /> <path class=st0 d=M1892.6,1212.18c-325.44,187.89-741.58,76.39-929.48-249.05 /> <path class=st0 d=M1925.39,963.13c-265.72,265.72-696.54,265.72-962.27,0 /> <path class=st0 d=M1892.6,714.07c-187.89,325.44-604.04,436.95-929.48,249.05 /> <path class=st0 d=M1796.47,481.99c-97.26,362.98-470.36,578.39-833.35,481.13 /> <path class=st0 d=M1643.55,282.7c0,375.79-304.64,680.43-680.42,680.43 /> <path class=st0 d=M1444.26,129.78c97.26,362.98-118.15,736.09-481.13,833.35 /> <path class=st0 d=M1212.18,33.65c187.89,325.44,76.39,741.58-249.05,929.48 /> <path class=st0 d=M963.13,0.86c265.72,265.72,265.72,696.54,0,962.27 /> <path class=st0 d=M714.07,33.65c325.44,187.89,436.95,604.04,249.05,929.48 /> <path class=st0 d=M481.99,129.78c362.98,97.26,578.39,470.36,481.13,833.35 /> </g> </svg> ';
        e.exports = r
    },
    e347: function(e, t, r) {
        e.exports ="img/logo.acfa44c0.svg"
    },
    e41e: function(e, t, r) {
        "use strict";
        r("52a0")
    },
    e910: function(e, t, r) {
        "use strict";
        r("26bd")
    },
    e92b: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=225 height=225 viewBox="0 0 225 225"> <g fill=none fill-rule=evenodd> <path fill=#C8EDE9 d="M174.243 71.411L211.779 71.67 185.42 98.396 220 113 185.42 127.604 211.779 154.33 174.243 154.589 188.368 189.368 153.589 175.243 153.33 212.779 126.604 186.42 112 221 97.396 186.42 70.67 212.779 70.411 175.243 35.633 189.367 49.757 154.589 12.221 154.33 38.58 127.604 4 113 38.58 98.396 12.221 71.67 49.757 71.411 35.633 36.632 70.411 50.757 70.67 13.221 97.396 39.58 112 5 126.604 39.58 153.33 13.221 153.589 50.757 188.368 36.632z"/> <path fill=#000 d="M112.5 0L97.287 36.02 69.448 8.565l-.27 39.1L32.95 32.95l14.714 36.228-39.1.27 27.456 27.84L0 112.5l36.02 15.213-27.456 27.839 39.1.27-14.714 36.227 36.228-14.713.27 39.1 27.84-27.457L112.5 225l15.213-36.02 27.839 27.456.27-39.1 36.228 14.713-14.714-36.227 39.1-.27-27.456-27.84L225 112.5l-36.02-15.213 27.457-27.839-39.1-.27L192.05 32.95l-36.228 14.714-.27-39.1-27.84 27.457L112.5 0zm0 9.059l13.988 33.12 25.597-25.246.249 35.952 33.31-13.529-13.529 33.31 35.952.249-25.246 25.597 33.12 13.988-33.12 13.988 25.246 25.597-35.952.249 13.529 33.31-33.31-13.529-.249 35.952-25.597-25.246-13.988 33.12-13.988-33.12-25.597 25.246-.249-35.952-33.31 13.529 13.529-33.31-35.952-.249 25.246-25.597L9.059 112.5l33.12-13.988-25.246-25.597 35.952-.249-13.529-33.31 33.31 13.529.249-35.952 25.597 25.246L112.5 9.059z"/> <g fill=#000> <path d="M8.826 27.568c-1.223-.452-2.405-1.51-3.545-3.173l-3.444-5.024C.663 17.66.097 16.15.14 14.841c.042-1.309.843-2.501 2.402-3.577 1.473-1.017 2.779-1.379 3.92-1.087 1.14.293 2.204 1.159 3.192 2.6l.532.775-2.596 1.792-.582-.85c-.372-.541-.7-.949-.988-1.223-.287-.273-.597-.422-.93-.446-.333-.024-.714.112-1.144.408-.454.314-.715.658-.784 1.032-.069.374-.019.757.15 1.148.169.392.443.864.823 1.418l4.293 6.262c.583.85 1.131 1.406 1.646 1.667.513.263 1.084.178 1.71-.255.613-.423.888-.94.823-1.548-.065-.608-.401-1.356-1.009-2.242l-.962-1.404-1.602 1.105-1.178-1.718 4.05-2.795 5.205 7.591-1.767 1.22-1.185-1.332c.294 1.43-.167 2.565-1.382 3.403-1.411.975-2.729 1.236-3.952.783M11.63 6.24L14.617 4.925 21.893 21.553 18.906 22.869zM18.72 3.2L21.543 2.514 26.878 14.437 26.06 1.418 28.949.717 29.665 19.227 26.515 19.991zM33.814.272L41.409.09 41.464 2.421 37.153 2.524 37.278 7.747 40.673 7.665 40.728 9.974 37.333 10.055 37.477 16.085 41.832 15.98 41.887 18.244 34.247 18.428zM54.089 1.774L57.315 2.909 55.591 15.632 62.248 4.646 65.39 5.752 59.716 23 57.397 22.184 61.308 10.183 54.719 21.241 52.843 20.581 54.554 7.759 50.144 19.631 47.803 18.807zM71.113 8.967L77.44 13.187 76.154 15.128 72.562 12.734 69.681 17.084 72.509 18.97 71.235 20.894 68.407 19.007 65.08 24.03 68.709 26.45 67.46 28.336 61.095 24.092zM73.387 32.49c.224-1.214 1.034-2.418 2.428-3.613l2.193 1.892c-.874.747-1.45 1.433-1.726 2.06s-.202 1.21.221 1.751c.313.4.666.602 1.058.606.392.005.793-.155 1.203-.478.562-.444.94-.946 1.134-1.509.194-.562.314-1.298.36-2.208l.154-3.031c.035-.922.214-1.733.537-2.434.321-.701.857-1.348 1.607-1.939 1.112-.877 2.232-1.233 3.357-1.066 1.126.167 2.14.826 3.042 1.978.967 1.234 1.311 2.393 1.034 3.477-.278 1.084-.976 2.134-2.094 3.15l-2.14-1.934c.745-.645 1.242-1.213 1.492-1.705.249-.491.167-1.001-.247-1.53-.295-.376-.651-.57-1.069-.584-.417-.012-.82.134-1.206.439-.456.36-.769.753-.936 1.18-.168.427-.266.985-.295 1.673l-.168 3.014c-.05 1.122-.255 2.13-.615 3.024-.362.893-.975 1.681-1.842 2.365-.679.536-1.4.862-2.161.978-.762.116-1.504.021-2.226-.283-.722-.305-1.36-.81-1.912-1.515-1.013-1.292-1.407-2.545-1.183-3.758M83.374 45.215c.526.04 1.188-.123 1.989-.488l7.587-3.46c.8-.366 1.352-.753 1.658-1.163.305-.41.303-.956-.005-1.636-.308-.68-.722-1.042-1.24-1.085-.519-.042-1.171.116-1.957.475l-7.588 3.46c-.8.365-1.358.759-1.673 1.182-.316.423-.32.974-.011 1.655.302.667.715 1.02 1.24 1.06m-3.749-4.349c.583-1.152 1.755-2.13 3.518-2.934l6.184-2.82c1.75-.798 3.238-1.034 4.466-.708 1.228.327 2.23 1.348 3.007 3.062.77 1.701.875 3.123.312 4.266-.562 1.143-1.717 2.113-3.467 2.911l-6.184 2.82c-1.75.798-3.253 1.037-4.51.716-1.26-.321-2.27-1.326-3.035-3.013-.776-1.714-.873-3.147-.29-4.3M100.769 48.697L101.272 52.09 89.253 56.493 102.043 57.279 102.533 60.583 84.681 63.591 84.319 61.152 96.722 59.026 83.901 58.336 83.608 56.362 95.71 51.901 83.187 53.523 82.821 51.062zM102.356 67.203L101.566 74.784 99.255 74.542 99.704 70.238 94.526 69.695 94.173 73.084 91.884 72.844 92.237 69.455 86.259 68.827 85.806 73.176 83.561 72.94 84.356 65.314zM95.55 86.782L96.691 84.126 98.928 85.094 95.364 93.391 93.127 92.424 94.241 89.829 79.858 83.609 81.167 80.561zM93.306 96.811L91.56 99.576 76.273 89.854 78.02 87.089zM88.117 104.669L85.711 107.106 74.997 100.086 82.031 110.833 79.688 113.206 66.594 100.664 68.324 98.912 77.45 107.604 70.321 96.889 71.721 95.472 82.529 102.523 73.734 93.433 75.479 91.665zM74.299 117.03L67.775 120.937 66.584 118.934 70.287 116.717 67.62 112.231 64.703 113.977 63.524 111.994 66.44 110.248 63.36 105.069 59.618 107.309 58.462 105.365 65.024 101.435z" transform="translate(73 50)"/> </g> <path fill=#FFF d="M133 115c0 10.493-8.507 19-19 19s-19-8.507-19-19 8.507-19 19-19 19 8.507 19 19"/> <g fill=#000> <path d="M21.51 45.58c-8.856 0-16.071-7.185-16.071-16.076 0-8.89 7.183-16.076 16.07-16.076 8.886 0 16.072 7.185 16.072 16.076 0 8.891-7.186 16.077-16.071 16.077m2.694-37.296v-2.85h4.829V.078H13.52v5.357h5.326v2.85C7.109 9.77-1.19 20.49.265 32.199c1.456 11.708 12.202 20.04 23.907 18.586 11.736-1.486 20.037-12.203 18.58-23.914-1.208-9.728-8.856-17.378-18.548-18.586" transform="translate(93 86)"/> <path d="M21.51 29.257h12.322c0-6.846-5.478-12.422-12.322-12.577v12.577z" transform="translate(93 86)"/> </g> <path fill=#0A0A0A d="M111.697 172c-7.653 0-15.078-1.496-22.07-4.447-6.752-2.85-12.815-6.928-18.02-12.123-5.207-5.195-9.295-11.245-12.15-17.982C56.498 130.47 55 123.062 55 115.426c0-14.808 5.694-28.81 16.034-39.426l3.75 3.637C65.4 89.274 60.23 101.984 60.23 115.426c0 13.717 5.353 26.614 15.074 36.313 9.721 9.7 22.645 15.042 36.393 15.042 6.353 0 12.553-1.14 18.43-3.39l1.873 4.873c-6.476 2.479-13.307 3.736-20.303 3.736"/> </g> </svg> ';
        e.exports = r
    },
    e972: function(e, t, r) {},
    f594: function(e, t, r) {
        "use strict";
        r("747a")
    },
    f5de: function(e, t, r) {
        e.exports = "img/beach.84e881f1.png"
    },
    f9ed: function(e, t, r) {
        e.exports = "img/boldare-white.54308db6.svg"
    },
    fa54: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=134 height=134 viewBox="0 0 134 134"> <g fill=none fill-rule=evenodd> <path fill=#F67474 d="M67 3L73.962 14.123 83.564 5.181 87.41 17.727 99 11.575 99.467 24.688 112.255 21.745 109.312 34.533 122.426 35 116.274 46.59 128.819 50.436 119.877 60.039 131 67 119.877 73.962 128.819 83.564 116.274 87.41 122.426 99 109.312 99.467 112.255 112.255 99.467 109.312 99 122.426 87.41 116.274 83.564 128.819 73.962 119.877 67 131 60.039 119.877 50.436 128.819 46.59 116.274 35 122.426 34.533 109.312 21.745 112.255 24.688 99.467 11.574 99 17.727 87.41 5.181 83.564 14.123 73.962 3 67 14.123 60.039 5.181 50.436 17.727 46.59 11.574 35 24.688 34.533 21.745 21.745 34.533 24.688 35 11.575 46.59 17.727 50.436 5.181 60.039 14.123z"/> <path fill=#000 d="M60.346 117.541L67 128.173l6.654-10.632 9.179 8.547 3.675-11.991 11.078 5.88.447-12.534 12.223 2.813-2.813-12.223 12.534-.447-5.88-11.078 11.991-3.675-8.547-9.179L128.173 67l-10.632-6.654 8.547-9.179-11.99-3.675 5.88-11.078-12.535-.447 2.813-12.223-12.223 2.813-.447-12.534-11.078 5.88-3.675-11.991-9.18 8.547L67 5.827 60.346 16.46l-9.179-8.547-3.675 11.991-11.078-5.88-.447 12.534-12.223-2.813 2.813 12.223-12.534.447 5.88 11.078-11.991 3.675 8.547 9.18L5.827 67l10.632 6.654-8.547 9.179 11.991 3.675-5.88 11.078 12.534.447-2.813 12.223 12.223-2.813.447 12.534 11.078-5.88 3.675 11.991 9.18-8.547zM67 134l-7.288-11.644-10.053 9.361-4.025-13.134-12.134 6.44-.489-13.727-13.387 3.08 3.08-13.387-13.728-.489 6.44-12.133L2.284 84.34l9.362-10.053L0 67l11.645-7.288L2.283 49.66l13.134-4.025L8.977 33.5l13.728-.49-3.08-13.386 13.386 3.08.49-13.728 12.133 6.44 4.025-13.133 10.053 9.361L67 0l7.288 11.644L84.34 2.283l4.026 13.134 12.133-6.44.49 13.728 13.386-3.081-3.08 13.387 13.728.489-6.44 12.134 13.133 4.025-9.361 10.053L134 67l-11.644 7.288 9.361 10.053-13.134 4.026 6.44 12.133-13.727.49 3.08 13.386-13.387-3.08-.49 13.728-12.132-6.44-4.026 13.133-10.053-9.361L67 134z"/> </g> </svg> ';
        e.exports = r
    },
    fabe: function(e, t) {
        var r = '<svg xmlns=http://www.w3.org/2000/svg width=44 height=44 viewBox="0 0 44 44"> <g fill=none fill-rule=evenodd> <path fill=#FFF stroke=#000 stroke-width=3 d="M0 0H40V40H0z" transform="translate(2 2) rotate(90 20 20)"/> <g> <path stroke=#000 stroke-width=.25 d="M0.588 21.212L2.192 22.816 21.132 3.875 19.529 2.271z" transform="translate(2 2) translate(9 8)"/> <path fill=#000 d="M0.588 21.212L19.528 2.271 21.133 3.875 2.192 22.817z" transform="translate(2 2) translate(9 8)"/> <path stroke=#000 stroke-width=.25 d="M0.588 21.212L19.528 2.271 21.133 3.875 2.192 22.817z" transform="translate(2 2) translate(9 8)"/> <g> <path stroke=#000 stroke-width=.25 d="M9.552 20.241c-3.815 0-6.924-3.094-6.924-6.923s3.095-6.924 6.924-6.924c3.828 0 6.924 3.095 6.924 6.924 0 3.83-3.096 6.923-6.924 6.923m1.16-16.062V2.952h2.08V.645H6.11v2.307h2.295V4.18C3.348 4.82-.225 9.436.4 14.48c.628 5.041 5.256 8.63 10.298 8.004 5.057-.64 8.632-5.256 8.005-10.299-.52-4.19-3.815-7.485-7.99-8.005" transform="translate(2 2) translate(9 8) translate(1 .25)"/> <path fill=#000 d="M9.552 20.241c-3.815 0-6.924-3.094-6.924-6.923s3.095-6.924 6.924-6.924c3.828 0 6.924 3.095 6.924 6.924 0 3.83-3.096 6.923-6.924 6.923m1.16-16.062V2.952h2.08V.645H6.11v2.307h2.295V4.18C3.348 4.82-.225 9.436.4 14.48c.628 5.041 5.256 8.63 10.298 8.004 5.057-.64 8.632-5.256 8.005-10.299-.52-4.19-3.815-7.485-7.99-8.005" transform="translate(2 2) translate(9 8) translate(1 .25)"/> <path stroke=#000 stroke-width=.25 d="M9.552 20.241c-3.815 0-6.924-3.094-6.924-6.923s3.095-6.924 6.924-6.924c3.828 0 6.924 3.095 6.924 6.924 0 3.83-3.096 6.923-6.924 6.923zm1.16-16.062V2.952h2.08V.645H6.11v2.307h2.295V4.18C3.348 4.82-.225 9.436.4 14.48c.628 5.041 5.256 8.63 10.298 8.004 5.057-.64 8.632-5.256 8.005-10.299-.52-4.19-3.815-7.485-7.99-8.005z" transform="translate(2 2) translate(9 8) translate(1 .25)"/> <path fill=#000 d="M14.699 12.89c0-2.762-2.238-5-5-5v5h5z" transform="translate(2 2) translate(9 8) translate(1 .25)"/> <path stroke=#000 stroke-width=.25 d="M14.699 12.89c0-2.762-2.238-5-5-5v5h5z" transform="translate(2 2) translate(9 8) translate(1 .25)"/> </g> </g> </g> </svg> ';
        e.exports = r
    },
    faea: function(e, t, r) {
        e.exports = "img/kanban-style.579bca0a.png"
    },
    fbcb: function(e, t, r) {
        "use strict";
        r("9474")
    },
    fbd1: function(e, t, r) {
        e.exports = "img/letsvote.2d6250c1.svg"
    },
    fed4: function(e, t) {
        var r = ' <svg xmlns=http://www.w3.org/2000/svg width=69 height=52 viewBox="0 0 69 52"> <path fill=#242424 fill-rule=evenodd d="M1187.124 1013L1183.385 1016.76 1202.87 1036.343 1144 1036.343 1144 1041.657 1202.87 1041.657 1183.385 1061.241 1187.124 1065 1213 1039.001z" transform="translate(-1144 -1013)"/> </svg>';
        e.exports = r
    }
});
//# sourceMappingURL=app.5ea64f2b.js.map