function t_animate__onFuncLoad(t,a,e){"function"==typeof window[t]?a():setTimeout(function i(){if("function"!=typeof window[t]){if("complete"===document.readyState&&"function"!=typeof window[t])throw new Error(t+" is undefined");setTimeout(i,e||100)}else a()})}function t_animate__getAttrByRes(t,a,e){var i,n=e||$(window).width();return n>=1200?i=t.attr("data-animate-"+a):"y"==t.attr("data-animate-mobile")?n>=960?(void 0!==(i=t.attr("data-animate-"+a+"-res-960"))||e||(i=t.attr("data-animate-"+a)),i):n>=640?(void 0!==(i=t.attr("data-animate-"+a+"-res-640"))||e||(i=t.attr("data-animate-"+a+"-res-960")),void 0!==i||e||(i=t.attr("data-animate-"+a)),i):n>=480?(void 0!==(i=t.attr("data-animate-"+a+"-res-480"))||e||(i=t.attr("data-animate-"+a+"-res-640")),void 0!==i||e||(i=t.attr("data-animate-"+a+"-res-960")),void 0!==i||e||(i=t.attr("data-animate-"+a)),i):n>=320?(void 0!==(i=t.attr("data-animate-"+a+"-res-320"))||e||(i=t.attr("data-animate-"+a+"-res-480")),void 0!==i||e||(i=t.attr("data-animate-"+a+"-res-640")),void 0!==i||e||(i=t.attr("data-animate-"+a+"-res-960")),void 0!==i||e||(i=t.attr("data-animate-"+a)),i):void 0:void t.css("transition","none")}function t_animateFix__wrapEls(){$("[data-animate-fix], [data-animate-fix-res-960], [data-animate-fix-res-640], [data-animate-fix-res-480], [data-animate-fix-res-320]").each(function(){void 0!==t_animate__getAttrByRes($(this),"prx")&&($(this).removeAttr("data-animate-prx"),$(this).removeAttr("data-animate-prx-res-960"),$(this).removeAttr("data-animate-prx-res-640"),$(this).removeAttr("data-animate-prx-res-480"),$(this).removeAttr("data-animate-prx-res-320")),el=$(this),el_atom=$(this).find(".tn-atom"),el_atom.wrap("<div class='tn-atom__sticky-wrapper' style='display:table; width:inherit; height:inherit;'></div>"),el_fixedWrapper=el.find(".tn-atom__sticky-wrapper"),el.hasClass("t-animate")&&(el.removeClass("t-animate"),el_fixedWrapper.addClass("t-animate"),el_fixedWrapper.attr({"data-animate-style":t_animate__getAttrByRes(el,"style",1200),"data-animate-distance":t_animate__getAttrByRes(el,"distance",1200),"data-animate-scale":t_animate__getAttrByRes(el,"scale",1200),"data-animate-duration":t_animate__getAttrByRes(el,"duration",1200),"data-animate-delay":t_animate__getAttrByRes(el,"delay",1200),"data-animate-style-res-960":t_animate__getAttrByRes(el,"style",960),"data-animate-distance-res-960":t_animate__getAttrByRes(el,"distance",960),"data-animate-scale-res-960":t_animate__getAttrByRes(el,"scale",960),"data-animate-duration-res-960":t_animate__getAttrByRes(el,"duration",960),"data-animate-delay-res-960":t_animate__getAttrByRes(el,"delay",960),"data-animate-style-res-640":t_animate__getAttrByRes(el,"style",640),"data-animate-distance-res-640":t_animate__getAttrByRes(el,"distance",640),"data-animate-scale-res-640":t_animate__getAttrByRes(el,"scale",640),"data-animate-duration-res-640":t_animate__getAttrByRes(el,"duration",640),"data-animate-delay-res-640":t_animate__getAttrByRes(el,"delay",640),"data-animate-style-res-480":t_animate__getAttrByRes(el,"style",480),"data-animate-distance-res-480":t_animate__getAttrByRes(el,"distance",480),"data-animate-scale-res-480":t_animate__getAttrByRes(el,"scale",480),"data-animate-duration-res-480":t_animate__getAttrByRes(el,"duration",480),"data-animate-delay-res-480":t_animate__getAttrByRes(el,"delay",480),"data-animate-style-res-320":t_animate__getAttrByRes(el,"style",320),"data-animate-distance-res-320":t_animate__getAttrByRes(el,"distance",320),"data-animate-scale-res-320":t_animate__getAttrByRes(el,"scale",320),"data-animate-duration-res-320":t_animate__getAttrByRes(el,"duration",320),"data-animate-delay-res-320":t_animate__getAttrByRes(el,"delay",320)}),el.removeAttr("data-animate-style data-animate-distance data-animate-scale data-animate-duration data-animate-delay"),el.removeAttr("data-animate-style-res-960 data-animate-distance-res-960 data-animate-scale-res-960 data-animate-duration-res-960 data-animate-delay-res-960"),el.removeAttr("data-animate-style-res-640 data-animate-distance-res-640 data-animate-scale-res-640 data-animate-duration-res-640 data-animate-delay-res-640"),el.removeAttr("data-animate-style-res-480 data-animate-distance-res-480 data-animate-scale-res-480 data-animate-duration-res-480 data-animate-delay-res-480"),el.removeAttr("data-animate-style-res-320 data-animate-distance-res-320 data-animate-scale-res-320 data-animate-duration-res-320 data-animate-delay-res-320"))})}function t_animateFix__init(){var t=$("[data-animate-fix]:not([data-animate-fix-alw='yes']), [data-animate-fix-res-960]:not([data-animate-fix-alw-res='yes']), [data-animate-fix-res-640]:not([data-animate-fix-alw='yes']),[data-animate-fix-res-480]:not([data-animate-fix-alw='yes']),[data-animate-fix-res-320]:not([data-animate-fix-alw='yes'])"),a=$("[data-animate-fix][data-animate-fix-alw='yes'], [data-animate-fix-res-960][data-animate-fix-alw='yes'], [data-animate-fix-res-640][data-animate-fix-alw='yes'],[data-animate-fix-res-480][data-animate-fix-alw='yes'],[data-animate-fix-res-320][data-animate-fix-alw='yes']");0!=t.length&&(t_animateFix__cashElsInfo(t),t_animateFix__cashElsInfo(a),t_animateFix__updatePositions(t),t_animateFix__positionAlwaysFixed(a),"y"!==window.lazy&&"yes"!==$("#allrecords").attr("data-tilda-lazy")||t_animate__onFuncLoad("t_lazyload_update",function(){t_lazyload_update()}),$(window).resize(t_throttle(function(e){t_animateFix__cashElsInfo(t),t_animateFix__cashElsInfo(a),t_animateFix__updatePositions(t,!0),t_animateFix__positionAlwaysFixed(a)},100)),$(".t396").bind("displayChanged",function(){setTimeout(function(){t_animateFix__cashElsInfo(t),t_animateFix__updatePositions(t,!0)},10)}),$(window).bind("scroll",t_throttle(function(){t_animateFix__updatePositions(t,!1)},30)))}function t_animateFix__positionAlwaysFixed(t){for(var a=0;a<t.length;a++){var e=t[a];e.fixedWrapperEl.css({position:"fixed",top:e.triggerOffset+"px"})}}function t_animateFix__updatePositions(t,a){for(var e=$(window).scrollTop(),i=0;i<t.length;i++){var n=t[i];if(0==n.distance)return;var r=e+n.triggerOffset,s=r>=n.topOffset,o=r<n.topOffset,d=n.end>r,l=n.end<=r;(s&&d&&(0==n.fixedWrapperEl.hasClass("t-sticky_going")||a)||d&&n.fixedWrapperEl.hasClass("t-sticky_ended"))&&($(n).css({transform:""}),n.fixedWrapperEl.css({position:"fixed",top:n.triggerOffset+"px"}),n.fixedWrapperEl.addClass("t-sticky_going"),n.fixedWrapperEl.removeClass("t-sticky_ended")),l&&0==n.fixedWrapperEl.hasClass("t-sticky_ended")&&($(n).css({transform:"translateY("+n.distance+"px)"}),n.fixedWrapperEl.css({top:"",position:""}),n.fixedWrapperEl.removeClass("t-sticky_going"),n.fixedWrapperEl.addClass("t-sticky_ended")),o&&n.fixedWrapperEl.hasClass("t-sticky_going")&&(n.fixedWrapperEl.css({top:"",position:""}),n.fixedWrapperEl.removeClass("t-sticky_going"))}}function t_animateFix__cashElsInfo(t){for(var a=$(window).height(),e=0;e<t.length;e++){var i=t[e],n=1*$(i).css("top").replace("px",""),r=$(i).parents(".r"),s=r.offset().top+1*r.css("padding-top").replace("px","");i.topOffset=s+n,i.trigger=t_animate__getAttrByRes($(i),"fix"),i.distance=1*t_animate__getAttrByRes($(i),"fix-dist"),i.distance=void 0===i.distance||0==i.distance?0:i.distance,i.end=i.topOffset+i.distance,i.fixedWrapperEl=$(i).find(".tn-atom__sticky-wrapper"),t_animateFix__getElTrigger(i,a)}}function t_animateFix__getElTrigger(t,a){t.triggerOffset=t_animate__getAttrByRes($(t),"fix-trgofst"),t.triggerOffset=void 0===t.triggerOffset||0==t.triggerOffset?0:1*t.triggerOffset,"0.5"==t.trigger&&(t.triggerOffset+=a/2,t.triggerOffset>t.topOffset&&t.triggerOffset<=a/2&&(t.triggerOffset=t.topOffset)),"1"==t.trigger&&(t.triggerOffset+=a,t.triggerOffset>t.topOffset&&t.triggerOffset<=a&&(t.triggerOffset=t.topOffset))}function t_animateFix__reset(t){for(var a=0;a<t.length;a++){var e=t[a];$(e).css("transform",""),e.fixedWrapperEl.css("position",""),e.fixedWrapperEl.removeClass("t-sticky_ended t-sticky_going")}}function t_animateParallax__wrapEls(){$("[data-animate-prx='scroll'] .tn-atom, [data-animate-prx='mouse'] .tn-atom,[data-animate-prx-res-960='scroll'] .tn-atom, [data-animate-prx-res-960='mouse'] .tn-atom,[data-animate-prx-res-640='scroll'] .tn-atom, [data-animate-prx-res-640='mouse'] .tn-atom,[data-animate-prx-res-480='scroll'] .tn-atom, [data-animate-prx-res-480='mouse'] .tn-atom,[data-animate-prx-res-320='scroll'] .tn-atom, [data-animate-prx-res-320='mouse'] .tn-atom").each(function(){$(this).wrap("<div class='tn-atom__prx-wrapper' style='display:table; width:inherit; height:inherit;'></div>")})}function t_animateParallax__initScroll(){var t=$("[data-animate-prx='scroll'],[data-animate-prx-res-960='scroll'],[data-animate-prx-res-640='scroll'],[data-animate-prx-res-480='scroll'],[data-animate-prx-res-320='scroll']"),a=$(window).scrollTop();if(0!=t.length){for(var e=[],i=0;i<t.length;i++){var n=t[i];if(n.topOffset=$(n).offset().top,n.bottomOffset=n.topOffset+$(n).height(),n.bottomOffset<a){if(t.splice(i,1),i--,0==t.length)break}else if($(n).is(":hidden"))t.splice(i,1),i--,e.push(n);else{var r=t_animate__getAttrByRes($(n),"prx-s");$(n).find(".tn-atom__prx-wrapper").attr("data-rellax-speed",Math.round((r-100)/10))}}t.length>0&&Rellax("[data-rellax-speed]",{round:!0,onscroll:!0}),$(window).bind("scroll",t_throttle(function(){for(var t=[],a=0;a<e.length;a++){var i=$(e[a]);i.is(":visible")&&(e.splice(a,1),a--,t.push(i))}if(0!=t.length){var n=t_animate__getAttrByRes($(i),"prx-s"),r="rellax"+Date.now();$(t).each(function(){$(this).find(".tn-atom__prx-wrapper").attr("data-rellax-speed",Math.round((n-100)/10)),$(this).addClass(r)}),Rellax("."+r,{round:!0,onscroll:!0})}},50))}}function t_animateParallax__initMouse(){var t=$("[data-animate-prx='mouse'],[data-animate-prx-res-960='mouse'],[data-animate-prx-res-640='mouse'],[data-animate-prx-res-480='mouse'],[data-animate-prx-res-320='mouse']");if(0!=t.length){for(var a=$(window).height(),e=$(window).width(),i=0;i<t.length;i++){var n=t[i];n.pathX=t_animate__getAttrByRes($(n),"prx-dx"),n.pathY=t_animate__getAttrByRes($(n),"prx-dy"),n.animEl=$(n).find(".tn-atom__prx-wrapper"),t_animateParallax__cashOffsets(n),"image"===$(n).attr("data-elem-type")&&t_animateParallax__cashOffsets__OnImgLoad(n)}$(window).resize(t_throttle(function(i){a=$(window).height(),e=$(window).width();for(var n=0;n<t.length;n++){t_animateParallax__cashOffsets(t[n])}},50));for(i=0;i<t.length;i++)t_animateParallax__moveEl(t[i],a,e)}}function t_animateParallax__cashOffsets(t){t.topOffset=$(t).offset().top,t.bottomOffset=t.topOffset+$(t).height();var a=$(t).parents(".r"),e=a.offset().top,i=a.offset().top+a.height();e>t.topOffset&&(t.parentTopOffset=e),i<t.bottomOffset&&(t.parentBottomOffset=i)}function t_animateParallax__cashOffsets__OnImgLoad(t){window.lazy&&$(t).find("img").on("load",function(){t_animateParallax__cashOffsets(t)})}function t_animateParallax__moveEl(t,a,e){var i=t.pathX,n=t.pathY,r=0,s=0,o=0,d=0,l=!1;function m(){l||(requestAnimationFrame(m),0!=r&&(o+=.02*(r-o)),0!=s&&(d+=.02*(s-d)),Math.abs(o-r)<1&&Math.abs(d-s)<1?l=!0:$(t.animEl).css("transform","translate3d("+o+"px, "+d+"px, 0px)"))}$("body").on("mousemove",t_throttle(function(o){if(!(void 0===o||$(window).width()<1200)){var d=o.pageY-o.clientY-100,f=o.pageY+a+100;if(!(t.bottomOffset<d||t.topOffset>f||t.parentTopOffset>o.pageY||t.parentBottomOffset<o.pageY)){if(void 0!==i){var _=e/2,c=(_-o.clientX)/_;r=Math.round(i*c)}if(void 0!==n){var p=a/2,x=(p-o.clientY)/p;s=Math.round(n*x)}l=!1,m()}}},50))}function t_animateParallax__checkOldIE(){var t=window.navigator.userAgent,a=t.indexOf("MSIE"),e="",i=!1;return a>0&&(8!=(e=parseInt(t.substring(a+5,t.indexOf(".",a))))&&9!=e&&10!=e||(i=!0)),i}$(document).ready(function(){1==window.isSearchBot||t_animateParallax__checkOldIE()||"edit"==$(".t-records").attr("data-tilda-mode")||(t_animateFix__wrapEls(),t_animateParallax__wrapEls(),setTimeout(function(){t_animateParallax__initScroll(),t_animateParallax__initMouse();var t=$("[data-animate-prx='mouse'],[data-animate-prx-res-960='mouse'],[data-animate-prx-res-640='mouse'],[data-animate-prx-res-480='mouse'],[data-animate-prx-res-320='mouse']"),a=$("[data-animate-fix]:not([data-animate-fix-alw='yes']), [data-animate-fix-res-960]:not([data-animate-fix-alw-res='yes']), [data-animate-fix-res-640]:not([data-animate-fix-alw='yes']),[data-animate-fix-res-480]:not([data-animate-fix-alw='yes']),[data-animate-fix-res-320]:not([data-animate-fix-alw='yes'])");if(t.length>0||a.length>0){var e=document.querySelector("body").getClientRects();if(e.length>0){var i=e[0].height;if("ResizeObserver"in window)new ResizeObserver(function(n){for(var r=0;r<n.length;r++)if(n[r].contentRect.height!==i&&(e=document.querySelector("body").getClientRects()).length>0){i=e[0].height;for(var s=0;s<t.length;s++){t_animateParallax__cashOffsets(t[s])}t_animateFix__cashElsInfo(a)}}).observe(document.querySelector("body"))}}},1e3),0==$(window).scrollTop()?setTimeout(function(){t_animateFix__init()},1e3):setTimeout(function(){t_animateFix__init()},50))}),function(t,a){"function"==typeof define&&define.amd?define([],a):"object"==typeof module&&module.exports?module.exports=a():t.Rellax=a()}(this,function(){var t=function(a,e){"use strict";var i=Object.create(t.prototype),n=0,r=0,s=0,o=0,d=[],l=!1,m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},f=window.transformProp||function(){var t=document.createElement("div");if(null===t.style.transform){var a=["Webkit","Moz","ms"];for(var e in a)if(void 0!==t.style[a[e]+"Transform"])return a[e]+"Transform"}return"transform"}(),_=function(t,a,e){return t<=a?a:t>=e?e:t};i.options={speed:-2,center:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},e&&Object.keys(e).forEach(function(t){i.options[t]=e[t]}),i.options.speed=_(i.options.speed,-10,10),a||(a=".rellax");var c="string"==typeof a?document.querySelectorAll(a):[a];if(!(c.length>0))throw new Error("The elements you're trying to select don't exist.");i.elems=c;var p=function(t){var a=t.getAttribute("data-rellax-percentage"),e=t.getAttribute("data-rellax-speed"),n=t.getAttribute("data-rellax-zindex")||0,s=i.options.vertical&&(a||i.options.center)?window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop:0,d=i.options.horizontal&&(a||i.options.center)?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0;i.options.onscroll&&(s=window.pageYOffset);var l=s+t.getBoundingClientRect().top,m=t.clientHeight||t.offsetHeight||t.scrollHeight,f=d+t.getBoundingClientRect().left,c=t.clientWidth||t.offsetWidth||t.scrollWidth,p=a||(s-l+r)/(m+r),x=a||(d-f+o)/(c+o);i.options.center&&(x=.5,p=.5);var g=e?_(e,-10,10):i.options.speed;(a||i.options.center)&&(g=_(e||i.options.speed,-5,5));var y=u(x,p,g),h=t.style.cssText,w="";if(h.indexOf("transform")>=0){var v=h.indexOf("transform"),O=h.slice(v),$=O.indexOf(";");w=$?" "+O.slice(11,$).replace(/\s/g,""):" "+O.slice(11).replace(/\s/g,"")}return{baseX:y.x,baseY:y.y,top:l,left:f,height:m,width:c,speed:g,style:h,transform:w,zindex:n}},x=function(){var t=n,a=s;return n=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,s=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,!(t==n||!i.options.vertical)||!(a==s||!i.options.horizontal)},u=function(t,a,e){var n={},r=e*(100*(1-t)),s=e*(100*(1-a));return n.x=i.options.round?Math.round(r):Math.round(100*r)/100,n.y=i.options.round?Math.round(s):Math.round(100*s)/100,n},g=function(){x()&&!1===l&&y(),m(g)},y=function(){for(var t=0;t<i.elems.length;t++)if(!(i.options.onscroll&&d[t].top>n+r)){var a=(n-d[t].top+r)/(d[t].height+r),e=(s-d[t].left+o)/(d[t].width+o),l=u(e,a,d[t].speed);0==d[t].inViewport&&(d[t].baseY=l.y,d[t].baseX=l.x),d[t].inViewport=!0;var m=l.y-d[t].baseY,_=l.x-d[t].baseX,c=d[t].zindex,p="translate3d("+(i.options.horizontal?_:"0")+"px,"+(i.options.vertical?m:"0")+"px,"+c+"px) "+d[t].transform;i.elems[t].style[f]=p}i.options.callback(l)};return i.destroy=function(){for(var t=0;t<i.elems.length;t++)i.elems[t].style.cssText=d[t].style;l=!0},function(){r=window.innerHeight,o=window.innerWidth,x();for(var t=0;t<i.elems.length;t++){var a=p(i.elems[t]);i.options.onscroll&&(a.inViewport=!1),d.push(a)}window.addEventListener("resize",function(){y()}),g(),y()}(),i};return t});