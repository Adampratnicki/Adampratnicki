var version;

function t_throttle(i, r, n) {
	var a, c;
	return r = r || 250,
		function () {
			var e = n || this,
				t = +new Date,
				o = arguments;
			a && t < a + r ? (clearTimeout(c), c = setTimeout(function () {
				a = t, i.apply(e, o)
			}, r)) : (a = t, i.apply(e, o))
		}
}

function t_onFuncLoad(t, o, i) {
	"function" == typeof window[t] ? o() : setTimeout(function e() {
		if ("function" != typeof window[t]) {
			if ("complete" === document.readyState && "function" != typeof window[t]) throw new Error(t + " is undefined");
			setTimeout(e, i || 100)
		} else o()
	})
}
window.isSearchBot = !1, /Bot/i.test(navigator.userAgent) && (window.isSearchBot = !0), window.isMobile = !1, window.$isMobile = !1, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.isMobile = !0, window.$isMobile = !0), window.isiOS = !1, /iPhone|iPad|iPod/i.test(navigator.userAgent) && (window.isiOS = !0), window.isiOSVersion = "", !window.isiOS || null !== (version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && (window.isiOSVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)]), window.browserLang = (window.navigator.userLanguage || window.navigator.language).toUpperCase().slice(0, 2), window.tildaBrowserLang = window.browserLang,
	function (u) {
		var e;
		u(document).ready(function () {
			var e = window.navigator.userAgent,
				t = -1 !== e.indexOf("Instagram"),
				o = -1 !== e.indexOf("FBAV"),
				i = -1 !== e.indexOf("YaSearchBrowser"),
				r = -1 !== e.indexOf("SamsungBrowser"); - 1 !== e.indexOf("Android") && (o || t || i || r) && ((i = document.createElement("p")).style.lineHeight = "100px", i.style.padding = "0", i.style.margin = "0", i.style.height = "auto", i.style.position = "absolute", i.style.opacity = "0.001", i.innerText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", document.body.appendChild(i), r = 100 / i.getBoundingClientRect().height, i.parentNode.removeChild(i), r < .98 && u("body").append('<style>.t396 [data-elem-type="text"] .tn-atom {zoom: ' + 100 * r + "%;}</style>"))
		}), 1 == window.isMobile && (e = function () {
			for (var e = document.body.querySelectorAll(".t-cover__carrier"), t = u(window).height(), o = 0, i = 0, r = e.length; i < r; i++) - 1 < (a = (n = e[i]).style).height.indexOf("vh") && (o = parseInt(a.height, 10) / 100, c = Math.round(t * o) + "px", (d = (d = u(n).parent(".t-cover")) && d[0]) && (s = d.querySelector(".t-cover__filter"), l = d.querySelector(".t-cover__wrapper"), s && (s.style.height = c), l && (l.style.height = c), a.height = d.style.height = c));
			for (var n, a, c, d, s, l, p = document.body.querySelectorAll("[data-height-correct-vh]"), t = u(window).height(), o = 0, i = 0, r = p.length; i < r; i++) - 1 < (a = (n = p[i]).style).height.indexOf("vh") && (o = parseInt(a.height) / 100, c = t + "px", d = u(n).parent(".t-cover"), a.height = c)
		}, u(document).ready(function () {
			setTimeout(function () {
				e()
			}, 400)
		}), u(window).load(function () {
			setTimeout(function () {
				e()
			}, 400)
		}), u(window).width() < 480 ? (u(document).ready(function () {
			var t;
			u("div[data-customstyle=yes]").each(function (e) {
				26 < u(this).css("font-size").replace("px", "") && (u(this).css("font-size", ""), u(this).css("line-height", ""))
			}), u("[field]").find("span").each(function (e) {
				26 < u(this).css("font-size").replace("px", "") && u(this).css("font-size", "")
			}), u(".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-subtitle").not(".tn-elem, .tn-atom, [data-auto-correct-line-height=false]").each(function () {
				var e;
				void 0 !== (t = u(this).attr("style")) && "" != t && -1 < t.indexOf("font-size") && 26 < u(this).css("font-size").replace("px", "") && (e = "rem" === u(this).attr("data-auto-correct-font-size") ? (e = new RegExp(/font-size.*px;/, "gi"), t.replace(e, "font-size: 1.6rem;").replace("line-height", "lineheight")) : t.replace("font-size", "fontsize").replace("line-height", "lineheight"), u(this).attr("style", e))
			})
		}), u(window).load(function () {
			var o = u(window).width();
			u(".r:visible").each(function () {
				var t = u(this);
				u(this).find("div").not("[data-auto-correct-mobile-width=false], .tn-elem, .tn-atom, .tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__videoiframe, .tn-atom .t-form *, .tn-atom__sticky-wrapper, .t-store__relevants__container, .t-slds__items-wrapper, .js-product-controls-wrapper, .js-product-edition-option, .t-product__option-variants").each(function () {
					var e = parseInt(u(this).outerWidth(!0));
					o < e && (u(this).is('[data-customstyle="yes"]') && u(this).parent().is("[data-auto-correct-mobile-width=false]") || (console.log("Block not optimized for mobile width. Block width:" + e + " Block id:" + t.attr("id")), console.log(u(this)), t.css("overflow", "auto"), o < e - 3 && t.css("word-break", "break-all")))
				})
			})
		})) : u(window).width() < 900 && u(document).ready(function () {
			var o;
			u("div[data-customstyle=yes]").each(function (e) {
				30 < u(this).css("font-size").replace("px", "") && (u(this).css("font-size", ""), u(this).css("line-height", ""))
			}), u("[field]").find("span").each(function (e) {
				30 < u(this).css("font-size").replace("px", "") && u(this).css("font-size", "")
			}), u(".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-subtitle").not(".tn-elem, .tn-atom").each(function (e) {
				var t;
				void 0 !== (o = u(this).attr("style")) && "" != o && -1 < o.indexOf("font-size") && 30 < u(this).css("font-size").replace("px", "") && (t = "rem" === u(this).attr("data-auto-correct-font-size") ? (t = new RegExp(/font-size.*px;/, "gi"), o.replace(t, "font-size: 1.6rem;").replace("line-height", "lineheight")) : o.replace("font-size", "fontsize").replace("line-height", "lineheight"), u(this).attr("style", t))
			})
		}))
	}(jQuery),
	function (c) {
		function e() {
			this.setScrollListener()
		}
		e.prototype.videoTags = [], e.prototype.defaultConfig = {
			isNeedStop: !1
		}, e.prototype.videoConfigs = [], e.prototype.registerNewVideo = function (e, t) {
			if (!(e instanceof HTMLVideoElement)) throw new Error("Wrong tag passed into registerNewVideo");
			return -1 == this.videoTags.indexOf(e) && (this.videoTags.push(e), this.videoConfigs.push(void 0 === t ? this.defaultConfig : t), this.scrollCb("", !0), !0)
		}, e.prototype.unergisterVideo = function (e) {
			if (!(e instanceof HTMLVideoElement)) throw new Error("Wrong tag passed into unregisterNewVideo");
			var t;
			return -1 < (t = this.videoTags.indexOf(e)) && ("function" == typeof e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e), this.pauseVideo(e, this.videoConfigs[t]), this.videoTags.splice(t, 1), this.videoConfigs.splice(t, 1), !0)
		}, e.prototype.pauseVideo = function (e, t) {
			if (!t) throw new Error("Wrong config type!");
			e.pause(), t.isNeedStop && e.load()
		}, e.prototype.setScrollListener = function () {
			c(window).bind("scroll", t_throttle(jQuery.proxy(this.scrollCb, this), 200))
		}, e.prototype.scrollCb = function (e, t) {
			for (var o = c(window).height(), i = null, r = 0, n = this.videoTags.length; r < n; r++) {
				var a, i = this.videoTags[r];
				_vrect = this.getVideoBoundingRect(i, !1), Math.abs(_vrect.top) < o && Math.abs(_vrect.top) > o / 2 && (0 < (a = 1 - (Math.abs(_vrect.top) - o / 2) / (o / 2) - .2) && a <= 1 && 0 != i.volume && (i.volume = a)), Math.abs(_vrect.top) > o || 0 == _vrect.height ? this.pauseVideo(i, this.videoConfigs[r]) : (t && i.play(), i.paused && i.loop && i.play())
			}
		}, e.prototype.getVideoObject = function (e) {
			for (var t = 0, o = this.videoTags.length; o < t; t++) {
				var i = this.videoTags[t];
				if (i.v === e) return i
			}
			return null
		}, e.prototype.getVideoBoundingRect = function (e, t) {
			void 0 === t && (t = !0);
			return (t && c(e).parents(".r")[0] || e).getBoundingClientRect()
		}, window.videoLoadProcessor = new e
	}(jQuery),
	function (b) {
		function e() {
			this.setScrollCb(), this.itemHeight = screen.availHeight;
			this.itemTransitionTop = .25 * this.itemHeight, this.activeItemIndex = null, this.windowHeight = document.documentElement.clientHeight || window.innerHeight || screen.availHeight, this.topOffsetShift = -150, b(window).resize(jQuery.proxy(this.recalculateAllSequencesOffsets, this)), this._resizeInterval = setInterval(jQuery.proxy(this.scrollCb, this), 500)
		}

		function _(e) {
			var t = b("#rec" + e),
				e = t.find(".t-cover").height(),
				o = t.find("div[data-hook-content]").outerHeight();
			if (300 < o && e < o + 40 && (1e3 < (o = o + 120) && (o += 100), console.log("auto correct cover height: " + o), t.find(".t-cover").height(o), t.find(".t-cover__filter").height(o), t.find(".t-cover__carrier").height(o), t.find(".t-cover__wrapper").height(o), 0 == window.isMobile && setTimeout(function () {
					var e = t.find(".t-cover__carrier");
					0 < e.find("iframe").length && (console.log("correct video from cover_fixcontentheight"), c(e, o + "px")), 0 < e.find("video").length && console.log("correct html5video from cover_fixcontentheight")
				}, 2e3), "function" == typeof window.t_lazyload_updateResize_elem)) try {
				window.t_lazyload_updateResize_elem(t.find(".t-cover__carrier"))
			} catch (e) {
				console.log("error:" + e)
			}
		}

		function x(e) {
			var t = document.body.querySelector("#rec" + e);
			if (t) {
				var o, i, r, n = t.querySelector(".t-cover__carrier");
				null !== n && (o = n.getAttribute("data-content-video-url-youtube"), i = n.getAttribute("data-content-video-url-mp4"), r = n.getAttribute("data-content-video-url-webm"));
				t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
				return !(window.isMobile || /Macintosh/.test(navigator.userAgent) && "ontouchend" in document || !t || o || i || r || !n || "fixed" !== n.getAttribute("data-content-cover-parallax") || window["cover" + e + "fixbackgroundstyles"])
			}
		}

		function k(e) {
			var t, o, i = document.body.querySelector("#rec" + e);
			x(e) && (console.log("new fix style background-position: fixed"), t = i.querySelector(".t-cover__container"), i = (o = i.querySelector(".t-cover")).style.height, o.style.height = 0, t.style.height = i, window["cover" + e + "fixbackgroundstyles"] = !0)
		}

		function l(e, t, o, i) {
			var r = e.offset().top,
				n = e.height(),
				a = t.scrollTop(),
				e = t.height(),
				t = o.getPlayerState();
			r < a + e && a <= r + n ? (1 !== t && o.playVideo(), "yes" == i && (r + n - 100 < a ? o.setVolume(30) : r + n - 200 < a ? o.setVolume(70) : a + e < r + 200 ? o.setVolume(30) : o.setVolume(100))) : a + e < r && r - 500 < a + e ? 2 !== t && (o.playVideo(), o.pauseVideo()) : 2 !== t && o.pauseVideo()
		}
		e.prototype.defaultConfig = {
			orientation: "vertical",
			speedFactor: 1,
			automated: !1
		}, e.prototype.sequenceObjects = [], e.prototype.recalculateAllSequencesOffsets = function () {
			this._resizeTimeout && clearTimeout(this._resizeTimeout), this._resizeInterval && clearInterval(this._resizeInterval), this._resizeTimeout = setTimeout(jQuery.proxy(function () {
				this.scrollCb(), this._resizeInterval = setInterval(jQuery.proxy(this.scrollCb, this), 500)
			}, this), 10)
		}, e.prototype.registerNewBlock = function (t) {
			if (!(t instanceof HTMLElement)) throw new Error("Wrong node type in registerNewBlock");
			for (var e = 0, o = this.sequenceObjects.length; e < o; e++)
				if (this.sequenceObjects[e].sequenceBlock === t) return !1;
			var i = t.querySelector('[data-hook="sequence-holder"]'),
				a = 0,
				r = this.getAbsoluteTopOffset(i),
				n = function () {
					var e = Array.prototype.slice.call(t.querySelectorAll('[data-hook="sequence-item"]'), 0),
						n = [];
					return e.forEach(jQuery.proxy(function (e, t, o) {
						var i = this.getItemHeight(e),
							r = e.querySelector('[data-hook="item-background"]');
						e.style.height = i + "px", r.style.height = this.itemHeight + "px", t < o.length - 1 && (a += i), n.push({
							node: e,
							height: i,
							topOffset: this.getAbsoluteTopOffset(e.querySelector(".txt-holder")) - (t == o.length - 1 ? 0 : this.topOffsetShift),
							backgroundHolder: r
						})
					}, this)), n
				}.call(this),
				n = (this.itemHeight, {
					sequenceBlock: t,
					sequenceHolder: i,
					sequenceHolderTopOffset: r,
					sequenceHeight: a,
					items: n,
					started: !1,
					prevBackgroundColor: ""
				});
			return this.sequenceObjects.push(n), this.scrollCb(), !0
		}, e.prototype.getItemHeight = function (e) {
			var t = e.querySelector("[data-hook='item-text']");
			e.querySelector("[data-hook='item-background']");
			st = e.style;
			e = parseFloat(getComputedStyle(t).top);
			return t.style.top = e + "px", Math.max(t.clientHeight + e, this.itemHeight)
		}, e.prototype.fixTextBlocksPosition = function (e) {
			txtBlocks = Array.prototype.slice.call(e.querySelectorAll('[data-hook="item-text"]'), 0), txtBlocks.forEach(function (e, t, o) {
				e.parentNode.querySelector("[data-hook='item-background']").style.top = "-" + e.clientHeight + "px"
			})
		}, e.prototype.unergisterBlock = function (e) {
			for (var t = 0, o = this.sequenceObjects.length, i = null; t < o; t++)
				if (this.sequenceObjects[t].sequenceBlock === e) {
					i = t;
					break
				}
			return null !== i && (this.sequenceObjects.splice(i, 1), !0)
		}, e.prototype.getAbsoluteTopOffset = function (e) {
			var t = e.offsetTop;
			for (e = e.offsetParent; null != e;) t += e.offsetTop, e = e.offsetParent;
			return t
		}, e.prototype.processSequence = function (e) {
			0 == e.started && (e.prevBackgroundColor = document.body.style.backgroundColor, document.body.style.backgroundColor = "rgb(0, 0, 0)", e.started = !0);
			e.sequenceBlock, e.sequenceHolder;
			for (var t, o, i, r, n = e.items, a = null, c = 0, d = n.length; c < d; c++)
				if ((t = n[c].node).querySelector(".txt-holder"), (r = t.getBoundingClientRect()).top < this.itemTransitionTop && r.bottom < r.height + this.itemTransitionTop && r.bottom > this.itemTransitionTop) {
					a = c;
					break
				}
			if (null != a) {
				1 < (i = r.top / this.itemTransitionTop) ? i = 1 : i < 0 && (i = 0);
				for (c = 0, d = n.length; c < d; c++) t = n[c].node, "fixed" != (o = n[c].backgroundHolder.style).position && (o.position = "fixed"), c == a ? (o.opacity = 1 - i, t.querySelector(".txt-holder").style.opacity = 1 - i) : c == a - 1 ? (o.opacity = i, t.querySelector(".txt-holder").style.opacity = i) : (o.opacity = 0, t.querySelector(".txt-holder").style.opacity = 0)
			}
		}, e.prototype.stopSequence = function (e) {
			0 != e.started && (e.items.forEach(function (e, t, o) {
				e.backgroundHolder.style.position = "relative", e.backgroundHolder.style.display = "block", e.backgroundHolder.style.opacity = 1
			}), document.body.style.backgroundColor = e.prevBackgroundColor, e.started = !1)
		}, e.prototype.scrollCb = function () {
			b(window).scrollTop();
			for (var e, t = 0, o = this.sequenceObjects.length; t < o; t++) {
				var i = (e = this.sequenceObjects[t]).sequenceHolder.getBoundingClientRect();
				i.top < 0 && 0 < i.bottom && i.bottom > i.height - e.sequenceHeight - 100 ? this.processSequence(e) : this.stopSequence(e)
			}
		}, e.prototype.setScrollCb = function () {
			this._scrollCb = jQuery.proxy(this.scrollCb, this), b(window).bind("scroll", t_throttle(this._scrollCb, 200))
		}, window.sequenceController = new e, window.processVideo = function (e) {
			mp4Src = b(e).attr("data-content-video-url-mp4"), webmSrc = b(e).attr("data-content-video-url-webm"), b(e).css("background-color", "transparent"), b(e).css("background-image", "");
			var t = {
				mp4: mp4Src,
				webm: webmSrc,
				preload: "none",
				autoplay: !1,
				loop: !0,
				scale: !0,
				zIndex: 0,
				width: "100%"
			};
			vid = b(e).videoBG(t), videoLoadProcessor.registerNewVideo(vid, {
				isNeedStop: !1
			})
		}, window.cover_init = function (y) {
			b(document).ready(function () {
				var i = document.body.querySelector("#coverCarry" + y),
					r = b(i),
					e = r.attr("data-content-cover-bg"),
					n = r.attr("data-content-cover-height"),
					a = r.attr("data-content-cover-parallax"),
					c = r.attr("data-content-video-url-mp4"),
					d = r.attr("data-content-video-url-webm"),
					t = r.attr("data-content-video-url-youtube"),
					o = r.attr("data-content-video-noloop"),
					s = r.attr("data-content-video-nomute"),
					l = r.attr("data-content-bg-base64"),
					p = r.attr("data-content-video-nocover"),
					e = e || "",
					n = n || "",
					a = a || "",
					c = c || "",
					d = d || "",
					o = o || "",
					s = s || "";
				t = (t = t || "") || "", l = l || "", p && "yes" == p && (t = d = c = ""), !window.isMobile || "" == d && "" == c && "" == t || r.css("background-image", "url('" + e + "')"), setTimeout(function () {
						_(y), k(y)
					}, 500),
					function (e) {
						{
							var t, o, i, r, n;
							x(e) && (t = document.body.querySelector("#rec" + e), r = document.body.querySelector("#rec" + e + " .t-cover").parentNode, console.log("new fix node background-position: fixed"), window.cover_fixBackgroundStyles || (n = ".t-cover__container {position: relative;}.t-cover__container .t-cover {clip: rect(0, auto, auto, 0);position: absolute;top: 0;left: 0;width: 100%;height: 100% !important;}.t-cover__container .t-cover .t-cover__carrier {position: fixed;display: block;top: 0;left: 0;width: 100%;height: 100%!important;background-size: cover;background-position: center center;transform: translateZ(0);will-change: transform;}", o = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style"), o.appendChild(i), i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = n : i.appendChild(document.createTextNode(n)), window.cover_fixBackgroundStyles = !0), (i = document.createElement("div")).classList.add("t-cover__container"), r.prepend(i), n = t.querySelector(".t-cover"), r = n.style.height, i.style.height = r, i.append(n), void 0 !== (n = {
								275: ".t256__video-container",
								286: ".t266__video-container",
								337: ".t-container",
								906: ".t906__video-container"
							}[t.getAttribute("data-record-type")]) && (n = t.querySelector(n), i.append(n)), window["cover" + e + "fixbackgroundnodes"] = !0)
						}
					}(y);
				var u, h, m, f, w, g, v, p = b("#rec" + y).find("img[data-hook-clogo]");
				p.length && p.load(function () {
					setTimeout(function () {
						_(y), k(y)
					}, 500)
				}), window.isMobile && b(window).on("orientationchange", function () {
					_(y), k(y)
				}), "" === c && "" === d && "" === t || 0 == window.isMobile && ("" != t || "" == c && "" == d ? "" != t && (r.css("background-color", "#000000"), r.css("background-image", ""), r.attr("data-content-cover-bg", ""), w = 0, (g = b(window)).scroll(function () {
					f && window.clearTimeout(f), f = window.setTimeout(function () {
						var e, t, o;
						0 < (w = r.find("iframe").length) || (e = r.offset().top, t = r.height(), e - 500 < (o = g.scrollTop()) + g.height() && o <= e + t + 500 && processYoutubeVideo(i, n))
					}, 100)
				}), g.scroll()) : (r.css("background-color", "#000000"), r.css("background-image", "url('https://tilda.ws/img/spinner-white.gif')"), r.css("background-size", "auto"), r.attr("data-content-cover-bg", ""), u = !1, u = "" == o, h = !0, h = "" == s, m = "", "fixed" == a && (-1 < n.indexOf("vh") && 100 < parseInt(n) && (r.css("height", "100vh"), m = "yes"), -1 < n.indexOf("px") && parseInt(n) > b(window).height() && (r.css("height", "100vh"), m = "yes")), w = "", g = b(window), v = r.parent(), g.scroll(function () {
					var e, t, o;
					f && window.clearTimeout(f), f = window.setTimeout(function () {
						var e, t, o;
						0 < w || (e = r.offset().top, t = r.height(), e - 500 < (o = g.scrollTop()) + g.height() && o <= e + t + 500 && ((t = r.videoBG({
							mp4: c,
							webm: d,
							poster: "",
							preload: "none",
							autoplay: "true",
							loop: u,
							volume: 1,
							scale: !0,
							zIndex: 0,
							width: "100%"
						})).setAttribute("muted", h), t.setAttribute("playsinline", ""), videoLoadProcessor.registerNewVideo(t), w = 1))
					}, 100), "fixed" == a && "yes" == m && (e = v.offset().top, t = v.height(), o = g.scrollTop(), e + t - g.height() <= o ? (r.css("position", "absolute"), r.css("bottom", "0px"), r.css("top", "auto")) : e <= o ? (r.css("position", "fixed"), r.css("top", "0px")) : o < e && (r.css("position", "relative"), r.css("top", "auto")))
				}), g.scroll())), "dynamic" == a && 0 == window.isMobile && (s = r.offset().top - (r.offset().top - b(window).height()), r.height() < b(window).height() && r.height(r.height() + .2 * s), r.parallax(.2, !0)), "yes" == l && "" != e && "" == c && "" == d && "" == t && (b("<img/>").attr("src", e).load(function () {
					b(this).remove(), r.css("background-image", "url('" + e + "')"), r.css("opacity", "1")
				}), r.css("background-image", ""), r.css("opacity", "0"), r.css("transition", "opacity 25ms"));
				t = b("#rec" + y).find(".t-cover__arrow-wrapper");
				0 < t.length && t.click(function () {
					var e = b("#rec" + y).height();
					0 < e && b("html, body").animate({
						scrollTop: b("#rec" + y).offset().top + e
					}, 500)
				})
			})
		}, b(document).ready(function () {
			"edit" != b(".t-records").attr("data-tilda-mode") && b(".t-cover__carrier").each(function () {
				var e = b(this).attr("data-content-cover-id");
				0 < e && cover_init(e)
			})
		});
		var t = b.Deferred();

		function c(e, t) {
			console.log("setWidthHeightYoutubeVideo:" + t);
			var o, i, r, n, a = e.find("iframe"),
				c = e.attr("data-content-video-nocover"),
				d = e.attr("data-content-video-noadcut-youtube"),
				s = e.attr("data-content-video-ratio"),
				l = .5625;
			0 < s && (l = +parseFloat(s)), "yes" != c ? (i = -1 < (t = t || "100vh").indexOf("vh") ? (o = (o = window.innerHeight) || b(window).height(), Math.floor(o * (parseInt(t) / 100))) : parseInt(t), s = n = (r = (r = Math.floor(parseInt(window.innerWidth))) || b(window).width()) * l, c = n, o = 1, "yes" == d || (s = s + 110 + 110, c = n - 220), c < i && (o = n < i ? i / n + .02 : n / i + .02), c = Math.floor(r * o), i = (o = Math.floor(s * o)) - i, r = c - r, a.height(o + "px"), a.width(c + "px"), 0 < i && a.css("margin-top", -Math.floor(i / 2) + "px"), 0 < r && a.css("margin-left", -Math.floor(r / 2) + "px")) : (t || (n = Math.floor(e.width() * l)), t && -1 < t.indexOf("vh") ? n = Math.floor(window.innerHeight * (parseInt(t) / 100)) : t && (n = parseInt(t)), a.css("width", "100%"), a.height(n + "px"))
		}
		window.processYoutubeVideo = function (s, a) {
			! function () {
				{
					var e, t;
					"yes" !== window.loadytapi_flag && (window.loadytapi_flag = "yes", (e = document.createElement("script")).src = "https://www.youtube.com/iframe_api", (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t))
				}
			}();
			t.then(function () {
				var t, e = b(s),
					o = e.attr("data-content-video-url-youtube"),
					d = e.attr("data-content-video-nomute"),
					i = e.attr("data-content-video-noloop"),
					r = e.attr("data-content-video-nocover"),
					n = document.createElement("iframe");
				n.src = function (e, t, o) {
					-1 == e.indexOf("https://www.youtube.com/embed") && (e = "https://www.youtube.com/embed" + ("/" == e[0] ? e : "/" + e));
					var i = location.protocol + "//" + location.host;
					return e = "yes" != t ? (e[e.length - 1], e + "?autoplay=1&loop=1&enablejsapi=1&&playerapiid=featuredytplayer&controls=0&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&theme=light&wmode=transparent&origin=" + i + "&playlist=" + function (e) {
						for (var t = e.split("/"), o = null, i = 0, r = t.length; i < r; i++) "embed" == t[i] && (o = t[i + 1]);
						return o
					}(e)) : (e[e.length - 1], e + "?autoplay=0&loop=0&enablejsapi=1&&playerapiid=featuredytplayer&controls=1&modestbranding=1&rel=0&showinfo=0&color=black&iv_load_policy=3&theme=dark&wmode=transparent&origin=" + i), "yes" !== o && (e += "&mute=1"), e
				}(o, r, d), n.frameBorder = 0, n.allow = "autoplay", s.appendChild(n), 0 == window.isMobile && new YT.Player(n, {
					events: {
						onReady: function (e) {
							var t, o, i, r, n, a, c;
							t = s, o = e.target, i = d, n = b(window), a = b(t), c = 0, n.scroll(function () {
								r && (window.clearTimeout(r), 15 <= c && (l(a, n, o, i), c = 0), c++), r = window.setTimeout(function () {
									l(a, n, o, i), c = 0
								}, 100)
							}), n.scroll(), e.target.setVolume && "yes" != d && e.target.setVolume(0), e.target.setLoop(!0)
						},
						onStateChange: function (o) {
							var e;
							o.target.setVolume && "yes" != d && o.target.setVolume(0), -1 !== o.data || 0 <= (e = window.fix_scrolltop_beforestop_youtube) && (b("html, body").scrollTop(e), delete window.fix_scrolltop_beforestop_youtube), o.data === YT.PlayerState.PLAYING ? t = window.setInterval(function () {
								var e = o.target.getCurrentTime(),
									t = o.target.getDuration();
								t < e + 1 && 0 !== t && (o.target.seekTo(0), "yes" === i && (o.target.stopVideo(), o.target.clearVideo()))
							}, 1e3) : window.clearTimeout(t)
						}
					}
				}), c(e, a)
			})
		}, window.onYouTubeIframeAPIReady = function () {
			t.resolve()
		}
	}(jQuery),
	function () {
		function e() {
			this.callbacks = {}
		}
		e.prototype.defaultConfig = {
			single: !1,
			context: null
		}, e.prototype.addEventListener = function (e, t, o) {
			evtCallbacks = this._getEventCallbacks(e), evtCallbacks = evtCallbacks || (this.callbacks[e] = []), evtCallbacks.push({
				callback: t,
				config: "object" == typeof o ? o : this.defaultConfig
			})
		}, e.prototype._getEventCallbacks = function (e) {
			return this.callbacks[e]
		}, e.prototype.removeEventListener = function (e, t) {
			var o = this._getEventCallbacks(e);
			if (!o) return !1;
			for (var i = 0, r = o.length; i < r; i++)
				if (t === o[i].callback) return o.splice(i, 1), !0;
			return !1
		}, e.prototype.emitEvent = function (e, t) {
			var o = [];
			extend(o, this._getEventCallbacks(e));
			for (var i, r, n = 0, a = o.length; n < a; n++) i = (r = o[n]).callback, (r = r.config).context ? i.call(r.context, t) : i(t), r.single && this.removeEventListener(e, i)
		}, window.observer = new e
	}(jQuery),
	function (r) {
		r(document).ready(function () {
			function e() {
				if (o.length)
					for (var e, t = o.length - 1; 0 <= t; t--)(e = r(o[t])).offset().top < (e.outerHeight() <= 100 ? i.scrollTop() + i.height() : i.scrollTop() + i.height() - 100) && (e.removeClass("r_hidden"), e.addClass("r_showed"), o.splice(t, 1))
			}
			var o, i;
			0 == window.isMobile && "yes" !== r("#allrecords").attr("data-blocks-animationoff") && 0 == window.isSearchBot && (r(".r").each(function (e) {
				r(this).attr("style") && -1 !== r(this).attr("style").indexOf("background-color") && r(this).attr("data-animationappear", "off")
			}), o = r(".r").not("[data-animationappear=off], [data-screen-min], [data-screen-max]"), i = r(window), o.each(function (e) {
				a = r(this).offset().top, b = i.scrollTop() + i.height() + 300, 1e3 < a && a > b ? r(this).addClass("r_hidden") : r(this).addClass("r_showed"), r(this).addClass("r_anim")
			}), i.bind("scroll", t_throttle(e, 200)), e()), "none" === r("html").css("display") && r("html").css("display", "block"), r("body").height() + 70 < r(window).height() ? r(".t-tildalabel").css("display", "none") : r(".t-tildalabel").attr("style", "display: block !important")
		})
	}(jQuery),
	function (n) {
		function e() {
			var e = n(window);
			window.winWidth = e.width(), window.winHeight = e.height()
		}

		function t() {
			var t, o, i, r = n(window).width();
			n("div.r[data-screen-max], div.r[data-screen-min]").each(function (e) {
				"yes" !== n(this).attr("data-connect-with-tab") && (i = n(this).css("display"), void 0 === (t = n(this).attr("data-screen-max")) && (t = 1e4), t = parseInt(t), void 0 === (o = n(this).attr("data-screen-min")) && (o = 0), (o = parseInt(o)) <= t && (r <= t && o < r ? "block" != i && n(this).css("display", "block") : "none" != i && n(this).css("display", "none")))
			})
		}
		n(document).ready(function () {
			0 === n("#allrecordstable").length && (e(), t(), n(window).bind("resize", t_throttle(e, 200)), n(window).bind("resize", t_throttle(t, 200)))
		})
	}(jQuery),
	function (l) {
		l.fn.videoBG = function (e, t) {
			t = {};
			if ("object" == typeof e) t = l.extend({}, l.fn.videoBG.defaults, e);
			else {
				if (e) return l(e).videoBG(t);
				t = l.fn.videoBG.defaults
			}
			var o = l(this);
			if (o.length) {
				"static" != o.css("position") && o.css("position") || o.css("position", "relative"), 0 == t.width && (t.width = o.width()), 0 == t.height && (t.height = o.height()), t.textReplacement && (t.scale = !0, o.width(t.width).height(t.height).css("text-indent", "-9999px"));
				e = l.fn.videoBG.video(t);
				return t.scale && e.height(t.height).width(t.width), o.append(e), void 0 === o.attr("data-content-video-nomute") && o.find("video").prop("muted", "true"),
					function (e, t) {
						var o = e.closest(".t-cover__carrier"),
							i = t + "";
						console.log("setWidthHeightHTMLVideo:" + i);
						var r, n, a = o.find("video"),
							c = o.attr("data-content-video-nocover"),
							d = o.attr("data-content-video-ratio"),
							s = .5625;
						0 < d && (s = +parseFloat(d)), "yes" != c ? (e = -1 < (i = i || "100vh").indexOf("vh") ? (r = (r = window.innerHeight) || l(window).height(), Math.floor(r * (parseInt(i) / 100))) : parseInt(i), d = n = (t = (t = Math.floor(parseInt(window.innerWidth))) || l(window).width()) * s, c = n < e ? n < e ? e / n + .02 : n / e + .02 : 1, r = Math.floor(t * c), e = (c = Math.floor(d * c)) - e, t = r - t, a.height(c + "px"), a.width(r + "px"), 0 < e && a.css("margin-top", -Math.floor(e / 2) + "px"), 0 < t && a.css("margin-left", -Math.floor(t / 2) + "px")) : (i || (n = Math.floor(o.width() * s)), i && -1 < i.indexOf("vh") ? n = Math.floor(window.innerHeight * (parseInt(i) / 100)) : i && (n = parseInt(i)), a.css("width", "100%"), a.height(n + "px"))
					}(e, t.height), e.find("video")[0]
			}
		}, l.fn.videoBG.setFullscreen = function (e) {
			var t, o = l(window).width(),
				i = l(window).height();
			e.css("min-height", 0).css("min-width", 0), e.parent().width(o).height(i), o / i > e.aspectRatio ? (e.width(o).height("auto"), (t = (e.height() - i) / 2) < 0 && (t = 0), e.css("top", -t)) : (e.width("auto").height(i), (t = (e.width() - o) / 2) < 0 && (t = 0), e.css("left", -t), 0 === t && setTimeout(function () {
				l.fn.videoBG.setFullscreen(e)
			}, 500)), l("body > .videoBG_wrapper").width(o).height(i)
		}, l.fn.videoBG.video = function (e) {
			var t = l("<div/>");
			t.addClass("videoBG").css("position", e.position).css("z-index", e.zIndex).css("top", 0).css("left", 0).css("height", e.height).css("width", e.width).css("opacity", e.opacity).css("overflow", "hidden");
			var o, i = l("<video/>");
			i.css("position", "relative").css("z-index", e.zIndex).attr("poster", e.poster).css("top", 0).css("left", 0).css("min-width", "100%").css("min-height", "100%"), i.prop("autoplay", e.autoplay), i.prop("loop", e.loop), i.prop("muted", e.muted), 0 < e.volume ? i.prop("volume", e.volume) : i.prop("volume", 0), e.fullscreen && (i.bind("canplay", function () {
				i.aspectRatio = i.width() / i.height(), l.fn.videoBG.setFullscreen(i)
			}), l(window).resize(function () {
				clearTimeout(o), o = setTimeout(function () {
					l.fn.videoBG.setFullscreen(i)
				}, 100)
			}), l.fn.videoBG.setFullscreen(i));
			var r = i[0];
			e.loop && (loops_left = e.loop, i.bind("ended", function () {
				loops_left && r.play(), !0 !== loops_left && loops_left--
			})), i.bind("canplay", function () {
				e.autoplay && r.play()
			}), l.fn.videoBG.supportsVideo() && (l.fn.videoBG.supportType("webm") && "" != e.webm ? i.attr("src", e.webm) : l.fn.videoBG.supportType("mp4") && "" != e.mp4 ? i.attr("src", e.mp4) : i.attr("src", e.ogv));
			var n = l("<img/>");
			return n.attr("src", e.poster).css("position", "absolute").css("z-index", e.zIndex).css("top", 0).css("left", 0).css("min-width", "100%").css("min-height", "100%"), l.fn.videoBG.supportsVideo() ? t.html(i) : t.html(n), e.textReplacement && (t.css("min-height", 1).css("min-width", 1), i.css("min-height", 1).css("min-width", 1), n.css("min-height", 1).css("min-width", 1), t.height(e.height).width(e.width), i.height(e.height).width(e.width), n.height(e.height).width(e.width)), l.fn.videoBG.supportsVideo(), t
		}, l.fn.videoBG.supportsVideo = function () {
			return document.createElement("video").canPlayType
		}, l.fn.videoBG.supportType = function (e) {
			if (!l.fn.videoBG.supportsVideo()) return !1;
			var t = document.createElement("video");
			switch (e) {
				case "webm":
					return t.canPlayType('video/webm; codecs="vp8, vorbis"');
				case "mp4":
					return t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
				case "ogv":
					return t.canPlayType('video/ogg; codecs="theora, vorbis"')
			}
			return !1
		}, l.fn.videoBG.wrapper = function () {
			var e = l("<div/>");
			return e.addClass("videoBG_wrapper").css("position", "absolute").css("top", 0).css("left", 0), e
		}, l.fn.videoBG.defaults = {
			mp4: "",
			ogv: "",
			webm: "",
			poster: "",
			autoplay: !0,
			loop: !0,
			scale: !1,
			position: "absolute",
			opacity: 1,
			textReplacement: !1,
			zIndex: 0,
			width: 0,
			height: 0,
			fullscreen: !1,
			imgFallback: !0
		}
	}(jQuery),
	function (c) {
		var d = c(window),
			s = d.height();
		d.resize(function () {
			s = d.height()
		}), c.fn.parallax = function (r, e) {
			var n, t = c(this),
				a = void 0 !== document.body.style["-webkit-transform"];

			function o() {
				var i = d.scrollTop();
				t.each(function () {
					var e = c(this),
						t = e.offset().top,
						o = n(e),
						e = this.getBoundingClientRect();
					t + o < i || i + s < t || (e = -1 * Math.round(e.top * r), a ? this.style["-webkit-transform"] = "translateY(" + e + "px)" : this.style.top = e + "px")
				})
			}
			a && t.css("position", "relative"), window.correctFirstTop4Parallax = function () {
				t.each(function () {
					t.offset().top
				})
			}, window.correctFirstTop4Parallax(), n = e ? function (e) {
				return e.outerHeight(!0)
			} : function (e) {
				return e.height()
			}, (arguments.length < 1 || null === r) && (r = .1), (arguments.length < 2 || null === e) && (e = !0), o(), c(window).resize(window.correctFirstTop4Parallax), d.bind("scroll", o).resize(o), "complete" !== document.readyState && window.addEventListener("load", function () {
				o()
			})
		}
	}(jQuery), window.Tilda = window.Tilda || {},
	function (v) {
		Tilda.sendEcommerceEvent = function (e, t) {
			if (void 0 === t || 0 == t.length) return !1;
			if (void 0 === e || "add" != e && "remove" != e && "purchase" != e && "detail" != e) return !1;
			for (var o, i, r, n = "", a = 0, c = [], d = "", s = "", l = "", p = 0; p < t.length; p++) {
				"" < n && (n += ", "), n += (r = t[p]).name, a += r.price, i = "", void 0 !== r.options && 0 < r.options.length && v.each(r.options, function (e, t) {
					i += t.option + ": " + t.variant + "; "
				});
				var u = {
					name: r.name,
					price: r.price,
					variant: i,
					quantity: 1
				};
				r.id && 0 < r.id && (id = r.id, u.id = r.id), r.uid && 0 < r.uid && (s = r.uid, u.uid = r.uid), r.recid && 0 < r.recid && (d = r.recid, u.recid = r.recid), r.lid && 0 < r.lid && (l = r.lid, u.lid = r.lid), r.sku && 0 < r.sku && (u.sku = r.sku), c[c.length] = u
			}
			"add" != e && "remove" != e || (o = "/tilda/cart/" + e + "/", 0 < d && (o += "" + d), 0 < s ? o += "-u" + s : 0 < l && (o += "-" + l)), "detail" == e && (o = "/tilda/product/detail/", 0 < s ? o += s + "/" : (0 < d && (o += "r" + d), 0 < l && (o += "-l" + l))), "purchase" == e && (o = "/tilda/rec" + d + "/payment/"), (u = {
				ecommerce: {}
			}).ecommerce[e] = {
				products: c
			}, Tilda.sendEventToStatistics(o, n, u, a)
		}, Tilda.sendEventToStatistics = function (e, t, o, i) {
			var r, n = "/" == e.substring(0, 1),
				a = [],
				c = 0,
				d = !(!(d = v("#allrecords").data("fb-event")) || "nosend" != d),
				s = !(!(s = v("#allrecords").data("vk-event")) || "nosend" != s),
				l = v("#allrecords").data("tilda-currency") || v(".t706").data("project-currency-code") || "RUB";
			if (o = o || window.location.href, 0 < (i = i ? parseFloat(i) : 0))
				if (window.dataLayer || (window.dataLayer = []), -1 != e.indexOf("/tilda/") && -1 != e.indexOf("/payment/") && window.tildaForm && "" < window.tildaForm.orderIdForStat) o = {
					ecommerce: {
						purchase: {
							actionField: {
								id: window.tildaForm.orderIdForStat,
								revenue: window.tildaForm.amountForStat
							},
							products: window.tildaForm.arProductsForStat
						}
					}
				}, window.tildaForm.tildapayment && window.tildaForm.tildapayment.promocode && (o.ecommerce.purchase.actionField.coupon = window.tildaForm.tildapayment.promocode), o.event = "purchase";
				else if (o && o.ecommerce && (o.ecommerce.add && o.ecommerce.add.products ? a = o.ecommerce.add.products : o.ecommerce.remove && o.ecommerce.remove.products ? a = o.ecommerce.remove.products : o.ecommerce.detail && o.ecommerce.detail.products && (a = o.ecommerce.detail.products), a && 0 < a.length)) {
				for (c = 0; c < a.length; c++) a[c].id || (a[c].sku ? a[c].id = a[c].sku : a[c].uid ? a[c].id = a[c].uid : a[c].recid && a[c].lid && (a[c].id = a[c].recid + "_" + a[c].lid));
				o.ecommerce.add && o.ecommerce.add.products ? (o.ecommerce.add.products = a, o.event = "addToCart") : o.ecommerce.remove && o.ecommerce.remove.products ? (o.ecommerce.remove.products = a, o.event = "removeFromCart") : o.ecommerce.detail && o.ecommerce.detail.products ? (o.ecommerce.detail.products = a, o.event = "viewProduct") : (n ? (o.event = "pageView", o.eventAction = e) : o.event = e, o.title = t, o.value = i)
			}
			null != window.dataLayer && (n ? 0 < i ? o && o.ecommerce ? window.dataLayer.push(o) : window.dataLayer.push({
				event: "pageView",
				eventAction: e,
				title: t,
				value: i,
				product: o
			}) : window.dataLayer.push({
				event: "pageView",
				eventAction: e,
				title: t,
				referer: o
			}) : o && o.ecommerce ? window.dataLayer.push(o) : window.dataLayer.push({
				event: e,
				eventAction: t,
				value: i,
				referer: o
			}));
			try {
				window.gtagTrackerID && "gtag" == window.mainTracker && (n ? o && o.event ? "purchase" == o.event ? gtag("event", "purchase", {
					transaction_id: o.ecommerce.purchase.actionField.id,
					value: parseFloat(i).toFixed(2),
					currency: l,
					items: o.ecommerce.purchase.products
				}) : "addToCart" == o.event && o.ecommerce.add ? gtag("event", "add_to_cart", {
					items: o.ecommerce.add.products
				}) : "removeFromCart" == o.event && o.ecommerce.remove ? gtag("event", "remove_from_cart", {
					items: o.ecommerce.remove.products
				}) : "viewProduct" == o.event && o.ecommerce.detail && gtag("event", "view_item", {
					items: o.ecommerce.detail.products
				}) : gtag("config", window.gtagTrackerID, {
					page_title: t,
					page_path: e
				}) : gtag("event", e, {
					event_category: "tilda",
					event_label: t,
					value: i
				}))
			} catch (e) {}
			if (window.ga && "tilda" != window.mainTracker && "gtag" != window.mainTracker)
				if (n)
					if (o && o.event) {
						try {
							if (window.Tilda.isLoadGAEcommerce || (window.Tilda.isLoadGAEcommerce = !0, ga("require", "ec")), ga("set", "currencyCode", l), "purchase" == o.event) {
								var p = o.ecommerce.purchase.products.length;
								for (g = 0; g < p; g++) w = o.ecommerce.purchase.products[g], ga("ec:addProduct", {
									id: w.id || g,
									name: w.name,
									price: parseFloat(w.price).toFixed(2),
									quantity: w.quantity
								});
								ga("ec:setAction", "purchase", {
									id: o.ecommerce.purchase.actionField.id,
									revenue: parseFloat(i).toFixed(2)
								})
							} else if ("addToCart" == o.event && o.ecommerce.add) {
								p = o.ecommerce.add.products.length;
								for (g = 0; g < p; g++) w = o.ecommerce.add.products[g], ga("ec:addProduct", {
									id: w.id || g,
									name: w.name,
									price: parseFloat(w.price).toFixed(2),
									quantity: w.quantity
								});
								ga("ec:setAction", "add")
							} else if ("removeFromCart" == o.event && o.ecommerce.remove) {
								p = o.ecommerce.remove.products.length;
								for (g = 0; g < p; g++) w = o.ecommerce.remove.products[g], ga("ec:addProduct", {
									id: w.id || g,
									name: w.name,
									price: parseFloat(w.price).toFixed(2),
									quantity: w.quantity
								});
								ga("ec:setAction", "remove")
							} else if ("viewProduct" == o.event && o.ecommerce.detail) {
								p = o.ecommerce.detail.products.length;
								for (g = 0; g < p; g++) w = o.ecommerce.detail.products[g], ga("ec:addProduct", {
									id: w.id || g,
									name: w.name,
									price: parseFloat(w.price).toFixed(2),
									quantity: w.quantity
								});
								ga("ec:setAction", "detail")
							}
						} catch (e) {}
						ga("send", {
							hitType: "pageview",
							page: e,
							title: t,
							params: o
						})
					} else ga("send", {
						hitType: "pageview",
						page: e,
						title: t
					});
			else ga("send", {
				hitType: "event",
				eventCategory: "tilda",
				eventAction: e,
				eventLabel: t,
				eventValue: i
			});
			if (window.mainMetrikaId && 0 < window.mainMetrikaId && "function" == typeof ym && (n ? (r = {
					title: t
				}, 0 < i && (r.params = {
					order_price: i
				}, l && (r.params.currency = l)), ym(window.mainMetrikaId, "hit", e, r)) : 0 < i ? (r = {
					order_price: i
				}, l && (r.currency = l), ym(window.mainMetrikaId, "reachGoal", e, r)) : ym(window.mainMetrikaId, "reachGoal", e)), "" < window.mainMetrika && window[window.mainMetrika] && (n ? 0 < i ? window[window.mainMetrika].hit(e, {
					title: t,
					order_price: i,
					params: o
				}) : window[window.mainMetrika].hit(e, {
					title: t
				}) : 0 < i ? window[window.mainMetrika].reachGoal(e, {
					title: t,
					params: o,
					order_price: i
				}) : window[window.mainMetrika].reachGoal(e, {
					title: t,
					referer: o
				})), null != window.fbq && 0 == d) try {
				if (n)
					if (-1 == e.indexOf("tilda/") || -1 == e.indexOf("/payment/") && -1 == e.indexOf("/submitted/"))
						if (o && o.event && 0 < i)
							if ("addToCart" == o.event && o.ecommerce.add) {
								var p = o.ecommerce.add.products.length,
									u = [];
								for (g = 0; g < p; g++) w = o.ecommerce.add.products[g], u.push(w.id || w.uid || w.name);
								window.fbq("track", "AddToCart", {
									content_ids: u,
									content_type: "product",
									value: i,
									currency: l
								})
							} else if ("viewProduct" == o.event && o.ecommerce.detail) {
					p = o.ecommerce.detail.products.length, u = [];
					for (g = 0; g < p; g++) w = o.ecommerce.detail.products[g], u.push(w.id || w.uid || w.name);
					window.fbq("track", "ViewContent", {
						content_ids: u,
						content_type: "product",
						value: i,
						currency: l
					})
				} else e.indexOf("tilda/popup"), window.fbq("track", "ViewContent", {
					content_name: t,
					content_category: e
				});
				else e.indexOf("tilda/popup"), window.fbq("track", "ViewContent", {
					content_name: t,
					content_category: e
				});
				else 0 < i && l ? window.fbq("track", "InitiateCheckout", {
					content_name: t,
					content_category: e,
					value: i,
					currency: l
				}) : window.fbq("track", "Lead", {
					content_name: t,
					content_category: e
				});
				else window.fbq("track", e, {
					content_name: t,
					value: i
				})
			} catch (e) {}
			if (void 0 !== window.VK && void 0 !== window.VK.Retargeting && 0 == s) try {
				if (n) {
					var h = v("#allrecords").data("vk-price-list-id") ? parseInt(v("#allrecords").data("vk-price-list-id")) : 0,
						m = "",
						f = !1;
					if (o && o.event)
						if (f = {
								products: [],
								currency_code: "",
								total_price: 0
							}, "purchase" == o.event && o.ecommerce.purchase)
							if (0 < i && 0 < h) {
								f.currency_code = l;
								p = o.ecommerce.purchase.products.length, u = [];
								for (g = 0; g < p; g++) w = o.ecommerce.purchase.products[g], f.products.push({
									id: w.id || w.uid || w.name,
									price: w.price || 0
								}), f.total_price = i;
								m = "init_checkout"
							} else m = "t-purchase";
					else if ("addToCart" == o.event && o.ecommerce.add)
						if (0 < i && 0 < h) {
							f.currency_code = l;
							p = o.ecommerce.add.products.length, u = [];
							for (g = 0; g < p; g++) w = o.ecommerce.add.products[g], f.products.push({
								id: w.id || w.uid || w.name,
								price: w.price || 0
							}), f.total_price = i;
							m = "add_to_cart"
						} else m = "t-add-to-cart", o.ecommerce.add[0] && o.ecommerce.add[0].uid && (m += "-" + o.ecommerce.add[0].uid);
					else if ("viewProduct" == o.event && o.ecommerce.detail)
						if (0 < i && 0 < h) {
							f.currency_code = l;
							p = o.ecommerce.detail.products.length, u = [];
							for (g = 0; g < p; g++) w = o.ecommerce.detail.products[g], f.products.push({
								id: w.id || w.uid || w.name,
								price: w.price || 0
							}), f.total_price = i;
							m = "view_product"
						} else m = "t-view-product", o.ecommerce.detail[0] && o.ecommerce.detail[0].uid && (m += "-" + o.ecommerce.detail[0].uid);
					else if ("removeFromCart" == o.event && o.ecommerce.remmove)
						if (0 < i && 0 < h) {
							f.currency_code = l;
							var w, g, p = o.ecommerce.remove.products.length,
								u = [];
							for (g = 0; g < p; g++) w = o.ecommerce.remove.products[g], f.products.push({
								id: w.id || w.uid || w.name,
								price: w.price || 0
							}), f.total_price = i;
							m = "remove_from_cart"
						} else m = "t-remove-product", o.ecommerce.remove[0] && o.ecommerce.remove[0].uid && (m += "-" + o.ecommerce.remove[0].uid);
					else m = o.event;
					else m = -1 != e.indexOf("tilda/") && -1 != e.indexOf("/payment/") ? "t-purchase-" + e.replace("/tilda/", "").replace("tilda/", "").replace("/payment/", "") : -1 != e.indexOf("tilda/") && -1 != e.indexOf("/submitted/") ? "t-lead-" + e.replace("/tilda/", "").replace("tilda/", "").replace("/submitted/", "") : -1 != e.indexOf("tilda/popup") || -1 != e.indexOf("tilda/click") ? "t-" + e.replace("/tilda/", "").replace("/", "-") : "t-" + e.replace("/", "-");
					0 < h && f && f.currency_code ? (VK.Retargeting.Event("purchase"), VK.Retargeting.ProductEvent(h, m, f)) : VK.Retargeting.Event(m)
				} else VK.Retargeting.Event(e)
			} catch (e) {}
			"0" < window.mainMailruId && (s = window._tmr || (window._tmr = []), n ? 0 < i ? s.push({
				id: "" + window.mainMailruId,
				type: "pageView",
				url: e,
				value: i,
				start: (new Date).getTime()
			}) : s.push({
				id: "" + window.mainMailruId,
				type: "pageView",
				url: e,
				start: (new Date).getTime()
			}) : 0 < i ? s.push({
				id: "" + window.mainMailruId,
				type: "reachGoal",
				goal: e,
				value: i
			}) : s.push({
				id: "" + window.mainMailruId,
				type: "reachGoal",
				goal: e
			})), "function" == typeof window.tildastat && (n ? (0 < e.indexOf("payment") && -1 < e.indexOf("tilda/form") && (e = e.replace("tilda/form", "tilda/rec")), window.tildastat("pageview", {
				page: e
			})) : window.tildastat("pageview", {
				page: "/tilda/event/" + e
			}))
		}, Tilda.saveUTM = function () {
			try {
				var e = window.location.href,
					t = "",
					o = "";
				if (-1 !== e.toLowerCase().indexOf("utm_") && "string" == typeof (t = (t = (e = e.toLowerCase()).split("?"))[1])) {
					var i, r = t.split("&");
					for (i in r) "utm_" == r[i].split("=")[0].substring(0, 4) && (o = o + r[i] + "|||");
					0 < o.length && ((t = new Date).setDate(t.getDate() + 30), document.cookie = "TILDAUTM=" + encodeURIComponent(o) + "; path=/; expires=" + t.toUTCString())
				}
			} catch (e) {}
		}, v(document).ready(function () {
			var e = navigator.userAgent.toLowerCase(),
				e = -1 != e.indexOf("msie") && parseInt(e.split("msie")[1]);
			8 != e && 9 != e || v(".t-btn").each(function () {
				var e = v(this).attr("href");
				0 < v(this).find("table").length && "" < e && -1 == e.indexOf("#popup:") && -1 == e.indexOf("#price:") && v(this).click(function (e) {
					e.preventDefault();
					e = v(this).attr("href");
					window.location.href = e
				})
			});
			try {
				1 == v("#allrecords").length && "no" == v("#allrecords").data("tilda-cookie") || Tilda.saveUTM()
			} catch (e) {}
			v(".r").off("click", "a.js-click-stat"), v(".r").on("click", "a.js-click-stat", function (e) {
				var t = v(this).data("tilda-event-name"),
					o = v(this).text(),
					r = v(this).attr("href") || "",
					n = v(this).attr("target"),
					t = t || "/tilda/click/".$(this).closest(".r").attr("id") + "/?url=" + r;
				if (Tilda.sendEventToStatistics(t, o), "http" == r.substring(0, 4)) return window.setTimeout(function () {
					var e, t, o = "",
						i = "";
					if ("_blank" == n) {
						if (-1 != r.indexOf("?") && (r = (o = r.split("?"))[0], -1 != (o = o[1]).indexOf("#") && (o = o.split("#"), r = r + "#" + o[1], o = o[0]), o = o.split("&")), 0 == v("#tildaredirectform").length ? v("body").append('<form id="tildaredirectform" target="_blank" method="GET" action="' + r + '" style="display:none;"></form>') : v("#tildaredirectform").attr("method", "GET").attr("action", r), i = "", 0 < o.length)
							for (e in o)(t = o[e].split("=")) && 0 < t.length && (i += '<input type="hidden" name="' + t[0] + '" value="' + (t[1] || "") + '">');
						v("#tildaredirectform").html(i), v("#tildaredirectform").submit()
					} else window.location.href = r
				}, 300), e.preventDefault(), !1
			}), v("input.js-amount").each(function () {
				var e = (e = v(this).val()).replace(/,/g, ".");
				e = parseFloat(e.replace(/[^0-9\.]/g, "")), v(this).val(e)
			}), Tilda.showFormError = function (e, t) {
				var o = e.find(".js-errorbox-all");
				o && 0 != o.length || (e.prepend('<div class="js-errorbox-all"></div>'), o = e.find(".js-errorbox-all"));
				e = o.find(".js-rule-error-all");
				e && 0 != e.length || (o.append('<p class="js-rule-error-all"></p>'), e = o.find(".js-rule-error-all")), "string" == typeof t ? e.html(t) : t && t.responseText ? e.html(t.responseText + ". Later, plaese try again.") : t && t.statusText ? e.html("Error - " + t.statusText + ". Later, plaese try again.") : e.html("Unknown error. Later, plaese try again."), e.show(), o.show()
			}, Tilda.robokassaPayment = function (i, r, n) {
				return v.ajax({
					type: "POST",
					url: "https://forms.tildacdn.com/payment/robokassa/",
					data: i.serialize(),
					dataType: "text",
					success: function (e) {
						r.removeClass("t-btn_sending"), r.data("form-sending-status", "0"), r.data("submitform", "");
						var t, o = r.closest(".r").attr("id");
						"{" == e.substring(0, 1) ? (json = window.JSON && window.JSON.parse ? window.JSON.parse(e) : v.parseJSON(e), json ? "" < json.error && Tilda.showFormError(i, json.error) : Tilda.showFormError(i, !1)) : "http" == e.substring(0, 4) ? (Tilda.sendEventToStatistics("/tilda/payment/" + o + "/click/", "Payment button: " + r.val(), "", n), t = e, window.setTimeout(function () {
							window.location.href = t
						}, 500)) : Tilda.showFormError(i, e)
					},
					fail: function (e) {
						r.removeClass("t-btn_sending"), r.data("form-sending-status", "0"), r.data("submitform", "");
						Tilda.showFormError(i, e)
					},
					timeout: 15e3
				})
			}
		})
	}(jQuery),
	function (o) {
		o(document).ready(function () {
			setTimeout(function () {
				(o("#tildacopy").length || o(".t-tildalabel").length) && o(".t-tildalabel div").length ? o("body").height() + 70 > o(window).height() && o(".t-tildalabel").attr("style", "display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important;") : o("body").contents().filter(function () {
					return 8 == this.nodeType
				}).each(function (e, t) {
					-1 !== t.nodeValue.indexOf("'t remove this l") && o("#allrecords").after('<div class="t-tildalabel t-tildalabel-free"><div class="t-tildalabel-free__main"><a href="https://tilda.cc" target="_blank" style="padding-bottom:12px; display: block;"><img style="width:40px;" src="https://static.tildacdn.com/img/tildacopy.png"></a><div style="padding-bottom: 15px;">This site was made on <a href="https://tilda.cc" target="_blank" style="text-decoration: none; color:inherit;">Tilda — a website builder</a> that helps to create a website without any code</div><a href="https://tilda.cc/registration/" target="_blank" style="display: inline-block; padding: 10px 20px; font-size: 13px; border-radius: 50px; background-color: #fa8669; color: #fff; text-decoration: none;">Create a website</a></div><div class="t-tildalabel-free__links-wr"><a class="t-tildalabel-free__txt-link" href="https://help' + ("RU" === window.browserLang ? "-ru" : "") + '.tilda.cc/white-label" target="_blank">' + ("RU" === window.browserLang ? "Как удалить этот лейбл" : "How to remove this block") + "?</a></div></div>")
				})
			}, 500)
		})
	}(jQuery);