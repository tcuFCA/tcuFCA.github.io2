$(document).ready(function(){$("ul.layouts li.wide-layout").addClass("active"),"yes"==$.cookie("boxed")&&($("body").addClass("boxed"),$("ul.layouts li.boxed-layout").addClass("active"),$("ul.layouts li.wide-layout").removeClass("active")),"no"==$.cookie("boxed")&&$("ul.layouts li.wide-layout").addClass("active"),null!=$.cookie("BGIMAGE")&&(StoredBgImage=$.cookie("BGIMAGE"),$("body").css("background-image","url('"+StoredBgImage+"')"),$("body").css("background-repeat","no-repeat"),$("body").css("background-size","cover")),null!=$.cookie("BGPATTERN")&&(StoredBgPattern=$.cookie("BGPATTERN"),$("body").css("background-image","url('"+StoredBgPattern+"')"),$("body").css("background-repeat","repeat"),$("body").css("background-size","auto")),null==$.cookie("BGPATTERN")&&null==$.cookie("BGIMAGE")&&$("body").css("background-image","none"),null!=$.cookie("ColorScheme")&&(StoredColorScheme=$.cookie("ColorScheme"),$("link.alt").attr("href",StoredColorScheme))}),$(document).ready(function(){$(".color-scheme a").click(function(){return SCHEME=$(this).attr("data-rel"),$("link.alt").attr("href",$(this).attr("data-rel")),$.cookie("ColorScheme",SCHEME),!1}),imgPathStart="style-switcher/backgrounds/patterns/",imgPathEnd=new Array("pt1.png","pt2.png","pt3.png","pt4.png","pt5.png","pt6.png","pt7.png","pt8.png","pt9.png","pt10.png","pt11.jpg","pt12.jpg","pt13.jpg","pt14.jpg","pt15.jpg"),$(".background-selector li img").click(function(){backgroundNumber=$(this).attr("data-nr"),bgPattern=imgPathStart+imgPathEnd[backgroundNumber],$("body").css("background-image","url('"+bgPattern+"')"),$("body").css("background-repeat","repeat"),$("body").css("background-size","auto"),$.cookie("BGPATTERN",bgPattern),$.removeCookie("BGIMAGE")}),imgPathStart1="style-switcher/backgrounds/images/",imgPathEnd1=new Array("img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"),$(".background-selector1 li img").click(function(){backgroundNumber1=$(this).attr("data-nr"),bgImage=imgPathStart1+imgPathEnd1[backgroundNumber1],$("body").css("background-image","url('"+bgImage+"')"),$("body").css("background-repeat","no-repeat"),$("body").css("background-size","cover"),$.cookie("BGIMAGE",bgImage),$.removeCookie("BGPATTERN")}),$("ul.layouts li.wide-layout").click(function(){return $("body").removeClass("boxed"),$("body").css("background-image","none"),$("ul.layouts li").removeClass("active"),$.cookie("boxed","no",{expires:7,path:"/"}),$("body").removeClass("boxed"),$(this).addClass("active"),$("body").css("background-image","none"),$.removeCookie("BGIMAGE"),$.removeCookie("BGPATTERN"),!1}),$("ul.layouts li.boxed-layout").click(function(){return $("body").addClass("boxed"),$("ul.layouts li").removeClass("active"),$.cookie("boxed","yes",{expires:7,path:"/"}),$("body").addClass("boxed"),$(this).addClass("active"),$.cookie("wide","no",{expires:7,path:"/"}),!1})}),$(window).load(function(){$(".styleswitcher").animate({left:"-206px"}),$(".switch-button").addClass("closed")}),$(document).ready(function(){$(".switch-button").click(function(){$(this).hasClass("open")?($(this).addClass("closed"),$(this).removeClass("open"),$(".styleswitcher").animate({left:"-206px"})):$(this).hasClass("closed")&&($(this).addClass("open"),$(this).removeClass("closed"),$(".styleswitcher").animate({left:"0"}))})}),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(){}return t.prototype.extend=function(t,e){var o,i;for(o in t)i=t[o],null!=i&&(e[o]=i);return e},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=e(this.scrollCallback,this),this.scrollHandler=e(this.scrollHandler,this),this.start=e(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start)},o.prototype.start=function(){var t,e,o,i;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(i=this.boxes,e=0,o=i.length;o>e;e++)t=i[e],this.applyStyle(t,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},o.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass},o.prototype.applyStyle=function(t,e){var o,i,n;return i=t.getAttribute("data-wow-duration"),o=t.getAttribute("data-wow-delay"),n=t.getAttribute("data-wow-iteration"),t.setAttribute("style",this.customStyle(e,i,o,n))},o.prototype.resetStyle=function(){var t,e,o,i,n;for(i=this.boxes,n=[],e=0,o=i.length;o>e;e++)t=i[e],n.push(t.setAttribute("style","visibility: visible;"));return n},o.prototype.customStyle=function(t,e,o,i){var n;return n=t?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",e&&(n+="-webkit-animation-duration: "+e+"; -moz-animation-duration: "+e+"; animation-duration: "+e+";"),o&&(n+="-webkit-animation-delay: "+o+"; -moz-animation-delay: "+o+"; animation-delay: "+o+";"),i&&(n+="-webkit-animation-iteration-count: "+i+"; -moz-animation-iteration-count: "+i+"; animation-iteration-count: "+i+";"),n},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,o,i,n;for(i=this.boxes,n=[],e=0,o=i.length;o>e;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):n.push(t));return n}.call(this),!this.boxes.length)?this.stop():void 0},o.prototype.offsetTop=function(t){var e;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,o,i,n,a;return o=t.getAttribute("data-wow-offset")||this.config.offset,a=window.pageYOffset,n=a+this.element.clientHeight-o,i=this.offsetTop(t),e=i+t.clientHeight,n>=i&&e>=a},o.prototype.util=function(){return this._util||(this._util=new t)},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}.call(this),wow=new WOW({animateClass:"animated",offset:100}),wow.init();