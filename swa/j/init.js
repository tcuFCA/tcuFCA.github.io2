jQuery(function($){function a(a){switch($this=$(this),a.type){case"seconds":case"minutes":case"hours":case"days":case"weeks":case"daysLeft":$this.find("div span#"+a.type).html(a.value),s&&($this.fadeTo(0,1),s=!1);break;case"finished":$this.fadeTo("slow",.5),s=!0}}function t(){$(".parallax1").parallax("50%",.1),$(".parallax2").parallax("50%",.1),$(".parallax3").parallax("50%",.1),$(".parallax4").parallax("50%",.1),$(".parallax5").parallax("50%",.1),$(".parallax6").parallax("50%",.1),$(".parallax7").parallax("50%",.1),$(".parallax8").parallax("50%",.1)}var e=window.NATIVE||{};if(e.ContactForm=function(){$(".contact-form").each(function(){var a=$(this);a.submit(function(){var a=$(this).attr("action");return $("#message").slideUp(750,function(){$("#message").hide(),$("#submit").after('<img src="images/assets/ajax-loader.gif" class="loader" />').attr("disabled","disabled"),$.post(a,{name:$("#name").val(),email:$("#email").val(),phone:$("#phone").val(),comments:$("#comments").val()},function(a){document.getElementById("message").innerHTML=a,$("#message").slideDown("slow"),$(".contact-form img.loader").fadeOut("slow",function(){$(this).remove()}),$("#submit").removeAttr("disabled"),null!=a.match("success")&&$(".contact-form").slideUp("slow")})}),!1})})},e.navMenu=function(){$(".menu-toggle").click(function(){return $(this).toggleClass("opened"),$(".main-menu-wrapper").slideToggle(500),!1}),$(window).resize(function(){$(".menu-toggle").hasClass("opened")?$(".main-menu-wrapper").css("display","block"):$(".menu-toggle").css("display","none")})},e.scrollToTop=function(){var a=$(window).width(),t=!1,e=$("#back-to-top");e.click(function(a){$("body,html").animate({scrollTop:"0"},750,"easeOutExpo"),a.preventDefault()}),$(window).scroll(function(){t=!0}),setInterval(function(){t&&(t=!1,$(window).scrollTop()>200?e.fadeIn():e.fadeOut())},250)},e.accordion=function(){var a=$(".accordion-heading.accordionize");a.delegate(".accordion-toggle","click",function(t){$(this).hasClass("active")?($(this).removeClass("active"),$(this).addClass("inactive")):(a.find(".active").addClass("inactive"),a.find(".active").removeClass("active"),$(this).removeClass("inactive"),$(this).addClass("active")),t.preventDefault()})},e.toggle=function(){var a=$(".accordion-heading.togglize");a.delegate(".accordion-toggle","click",function(a){$(this).hasClass("active")?($(this).removeClass("active"),$(this).addClass("inactive")):($(this).removeClass("inactive"),$(this).addClass("active")),a.preventDefault()})},e.toolTip=function(){$("a[data-toggle=tooltip]").tooltip()},e.TwitterWidget=function(){$(".twitter-widget").each(function(){var a=$(this);twitterTweets=a.attr("data-tweets-count")?a.attr("data-tweets-count"):"1",a.twittie({dateFormat:"%b. %d, %Y",template:'<li><i class="fa fa-twitter"></i> {{tweet}} <span class="date">{{date}}</span></li>',count:twitterTweets,hideReplies:!0})})},e.FlexSlider=function(){$(".flexslider").each(function(){var a=$(this);carouselAutoplay="yes"==a.attr("data-autoplay")?!0:!1,carouselPagination="yes"==a.attr("data-pagination")?!0:!1,carouselArrows="yes"==a.attr("data-arrows")?!0:!1,carouselDirection=a.attr("data-direction")?a.attr("data-direction"):"horizontal",carouselStyle=a.attr("data-style")?a.attr("data-style"):"fade",carouselSpeed=a.attr("data-speed")?a.attr("data-speed"):"5000",carouselPause="yes"==a.attr("data-pause")?!0:!1,a.flexslider({animation:carouselStyle,easing:"swing",direction:carouselDirection,slideshow:carouselAutoplay,slideshowSpeed:carouselSpeed,animationSpeed:600,initDelay:0,randomize:!1,pauseOnHover:carouselPause,controlNav:carouselPagination,directionNav:carouselArrows,prevText:"",nextText:""})})},e.PrettyPhoto=function(){$("a[data-rel^='prettyPhoto']").prettyPhoto({opacity:.5,social_tools:"",deeplinking:!1})},e.NivoSlider=function(){$(".nivoslider").each(function(){var a=$(this);nivoAutoplay="no"==a.attr("data-autoplay")?!0:!1,nivoPagination="yes"==a.attr("data-pagination")?!0:!1,nivoArrows="yes"==a.attr("data-arrows")?!0:!1,nivoThumbs="yes"==a.attr("data-thumbs")?!0:!1,nivoEffect=a.attr("data-effect")?a.attr("data-effect"):"random",nivoSlices=a.attr("data-slices")?a.attr("data-slices"):"15",nivoanimSpeed=a.attr("data-animSpeed")?a.attr("data-animSpeed"):"500",nivopauseTime=a.attr("data-pauseTime")?a.attr("data-pauseTime"):"3000",nivoPause="yes"==a.attr("data-pauseonhover")?!0:!1,a.nivoSlider({effect:nivoEffect,slices:nivoSlices,animSpeed:nivoanimSpeed,pauseTime:nivopauseTime,directionNav:nivoArrows,controlNav:nivoPagination,controlNavThumbs:nivoThumbs,pauseOnHover:nivoPause,manualAdvance:nivoAutoplay})})},e.PrettyPhoto=function(){$("a[data-rel^='prettyPhoto']").prettyPhoto({opacity:.5,social_tools:"",deeplinking:!1})},e.Counters=function(){$(".counters").each(function(){$(".timer .count").appear(function(){var a=$(this).html();$(this).countTo({from:0,to:a,speed:2e3,refreshInterval:60})})})},e.SuperFish=function(){$(".sf-menu").superfish({delay:200,animation:{opacity:"show",height:"show"},speed:"fast",cssArrows:!1,disableHI:!0}),$(".navigation > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-down'></i>"),$(".navigation > ul > li > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-right'></i>")},e.IsoTope=function(){$("ul.sort-source").each(function(){var a=$(this),t=$("ul.sort-destination[data-sort-id="+$(this).attr("data-sort-id")+"]");t.get(0)&&$(window).load(function(){t.isotope({itemSelector:".grid-item",layoutMode:"sloppyMasonry"}),a.find("a").click(function(e){e.preventDefault();var i=$(this),n=i.parent().attr("data-option-value");return a.find("li.active").removeClass("active"),i.parent().addClass("active"),t.isotope({filter:n}),(""!=window.location.hash||"*"!=n.replace(".",""))&&(self.location="#"+n.replace(".","")),!1}),$(window).bind("hashchange",function(e){var i="."+location.hash.replace("#",""),n="."==i||".*"==i?"*":i;a.find("li.active").removeClass("active"),a.find("li[data-option-value='"+n+"']").addClass("active"),t.isotope({filter:n})});var e="."+(location.hash.replace("#","")||"*"),i=a.find("li[data-option-value='"+e+"'] a");i.get(0)?a.find("li[data-option-value='"+e+"'] a").click():a.find("li:first-child a").click()})}),$(window).load(function(){if(IsoTopeCont=$(".isotope-grid"),IsoTopeCont.isotope({itemSelector:".grid-item",layoutMode:"sloppyMasonry"}),$(".grid-holder").length>0){var a=$(".grid-holder");a.isotope({itemSelector:".grid-item"}),$(window).resize(function(){var a=$(".grid-holder");a.isotope({itemSelector:".grid-item"})})}})},e.StickyNav=function(){if($("body").hasClass("boxed"))return!1;$(window).width()>992&&$(".main-menu-wrapper").sticky({topSpacing:0});var a=$(window).width(),t=!1,e=$(".site-header");$(window).scroll(function(){t=!0}),setInterval(function(){$(window).scrollTop()>20?e.addClass("sticky-header"):e.removeClass("sticky-header")},250)},$(document).ready(function(){e.ContactForm(),e.scrollToTop(),e.accordion(),e.toggle(),e.toolTip(),e.navMenu(),e.TwitterWidget(),e.FlexSlider(),e.NivoSlider(),e.PrettyPhoto(),e.SuperFish(),e.Counters(),e.IsoTope(),e.StickyNav()}),$(".container, .hero-slider").fitVids(),$(".events-listing .item").each(function(){var a=$(this).height();$(this).find(".to-event-url").css("height",a)}),$(window).resize(function(){$(".events-listing .item").each(function(){var a=$(this).height();$(this).find(".to-event-url").css("height",a)})}),$(".navigation ul li").mouseover(function(){the_width=$(this).find("a").width(),child_width=$(this).find("ul").width(),width=parseInt((child_width-the_width)/2),$(this).find("ul").css("left",-width)}),$(window).load(function(){$(".format-image").each(function(){$(this).find(".media-box").append("<span class='zoom'><i class='fa fa-search'></i></span>")}),$(".format-standard").each(function(){$(this).find(".media-box").append("<span class='zoom'><i class='fa fa-plus'></i></span>")}),$(".format-video").each(function(){$(this).find(".media-box").append("<span class='zoom'><i class='fa fa-play'></i></span>")}),$(".format-link").each(function(){$(this).find(".media-box").append("<span class='zoom'><i class='fa fa-link'></i></span>")}),$(".media-box .zoom").each(function(){mpwidth=$(this).parent().width(),mpheight=$(this).parent().find("img").height(),$(this).css("width",mpwidth),$(this).css("height",mpheight),$(this).css("line-height",mpheight+"px")}),$(".goingon-events-floater").animate({opacity:1},[1e3])}),$(window).resize(function(){$(".media-box .zoom").each(function(){mpwidth=$(this).parent().width(),mpheight=$(this).parent().find("img").height(),$(this).css("width",mpwidth),$(this).css("height",mpheight),$(this).css("line-height",mpheight+"px")}),$(window).width()>992?$(".main-menu-wrapper").css("display","block"):$(".main-menu-wrapper").css("display","none")}),$("ul.checks li").prepend('<i class="fa fa-check"></i> '),$("ul.angles li, .nav-list-primary li a, .widget ul > li > a:first-child").prepend('<i class="fa fa-angle-right"></i> '),$("ul.inline li").prepend('<i class="fa fa-check-circle-o"></i> '),$("ul.chevrons li").prepend('<i class="fa fa-chevron-right"></i> '),$("ul.carets li").prepend('<i class="fa fa-caret-right"></i> '),$("a.external").prepend('<i class="fa fa-external-link"></i> '),$(".goingon-events-floater").prepend('<i class="fa flo-arrow fa-caret-down"></i> '),$(".featured_event_widget").find(".sidebar-widget-title h3").prepend("<span class='featured-star'><i class='fa fa-star'></i></span>"),$(".featured_event_widget").find("h4.featured-event-title a").append(" <i class='fa fa-caret-right'></i>"),$(".featured_event_widget").has("img.featured-event-image").find(".featured-event-time").css("position","absolute"),$(".donate-paypal").click(function(){CauseName=$(this).parents(".cause-item").find("h3").html(),$(".payment-to-cause").html(CauseName)}),$('select[name="donation amount"]').change(function(){"Custom"===$(this).val()?($(".custom-donate-amount").show(),$('input[name="Custom Donation Amount"]').focus()):$(".custom-donate-amount").hide()}),$(".audio-player").length){var i=new MediaElementPlayer(".audio-player");$(".audio-player").css("max-width","100%"),setTimeout(function(){$(window).trigger("resize"),$(".video-container").length&&$(".audio-container").hide(),"#play-audio"==window.location.hash&&($(".video-container").hide(),$(".audio-container").show())},500),$(window).bind("load debouncedresize",function(){$(".mejs-time-rail").width($(".mejs-time-rail").width()-2)})}$(".play-video-link").click(function(a){a.preventDefault();var t=$(this).attr("href"),e=$(".video-container");if(t&&e){var n=e.html().replace("autoplay=0","autoplay=1");if(n){var o=$(".audio-container");o.length&&(i.pause(),o.hide()),e.html(n).show()}}}),$(".play-audio-link").click(function(a){a.preventDefault(),$(".video-container").hide();var t=$(".video-container");if(t.length){var e=t.html().replace("autoplay=1","autoplay=0");t.html(e)}$(".audio-container").show(),i.pause(),i.play(),$(window).trigger("resize")});var n=$("#counter").data("date"),o=new Date(n),s=!1,r={set15daysFromNow:1296e6,set5minFromNow:3e5,set1minFromNow:6e4};$("#counter").countdown(o.valueOf(),a),$("[data-appear-animation]").each(function(){var a=$(this);a.addClass("appear-animation"),!$("html").hasClass("no-csstransitions")&&$(window).width()>767?a.appear(function(){var t=a.attr("data-appear-animation-delay")?a.attr("data-appear-animation-delay"):1;t>1&&a.css("animation-delay",t+"ms"),a.addClass(a.attr("data-appear-animation")),setTimeout(function(){a.addClass("appear-animation-visible")},t)},{accX:0,accY:-150}):a.addClass("appear-animation-visible")}),$("[data-appear-progress-animation]").each(function(){var a=$(this);a.appear(function(){var t=a.attr("data-appear-animation-delay")?a.attr("data-appear-animation-delay"):1;t>1&&a.css("animation-delay",t+"ms"),a.addClass(a.attr("data-appear-animation")),setTimeout(function(){a.animate({width:a.attr("data-appear-progress-animation")},1500,"easeOutQuad",function(){a.find(".progress-bar-tooltip").animate({opacity:1},500,"easeOutQuad")})},t)},{accX:0,accY:-50})}),Modernizr.touch||$(window).bind("load",function(){t()}),wheighter=$(window).height(),wwidth=$(window).width(),$(".wheighter").css("height",wheighter),$(".wwidth").css("width",wwidth),$(window).resize(function(){wheighter=$(window).height(),wwidth=$(window).width(),$(".wheighter").css("height",wheighter),$(".wwidth").css("width",wwidth)})});