jQuery(function(t){t("#topmenu .topmenu-inner").affix();new Rellax(".rellax");if(t("a.scrollto, li.scrollto a").click(function(){var n=t(this).attr("href");return t("html, body").animate({scrollTop:t(n).offset().top-200},1e3),window.location.hash=n,!1}),t(".cf7-floating .form-control").focus(function(){t(this).parents(".inputWrap").addClass("active")}),t(".cf7-floating .form-control").blur(function(){!t(this).val()&&t(this).parents(".inputWrap").removeClass("active")}),t('.sub-services input[type="checkbox"]').on("click",function(){t(this).prop("checked")?t(this).parents("label").addClass("checked"):t(this).parents("label").removeClass("checked")}),t(".letterUp").length>0){function n(){var n=anime.timeline({easing:"easeOutExpo",loop:!1});n.add({targets:".letterUp .letter",translateX:["1.1em",0],opacity:[0,1],translateZ:0,duration:350,delay:(t,n)=>50*n}),t(".letterUp").addClass("ran")}t(window).on("resize scroll",function(){t(".letterUp").isInViewport()&&!t(".letterUp").hasClass("ran")&&n()})}t(".serviceBox1:not(.showmore) a.boxlink").click(function(t){t.preventsDefault()})}),jQuery(document).ready(function(t){t(".highlight").length>0&&(t(".highlight:not(.show)").each(function(){if(t(this).isInViewport()){var n=.2*t(this).text().length*60;n=n<750?750:n,t(this).css("background-position","0px 0px").animate({"background-position-x":"-100%","background-position-y":"0"},n).addClass("show")}}),t(window).on("resize scroll",function(){t(".highlight:not(.show)").each(function(){if(t(this).isInViewport()){var n=.2*t(this).text().length*60;n=n<750?750:n,t(this).css("background-position","0px 0px").animate({"background-position-x":"-100%","background-position-y":"0"},n).addClass("show")}})}))});