	$(document).ready(function(){
			$("ul.layouts li.wide-layout").addClass("active");
        if ($.cookie('boxed') == "yes") {
            $("body").addClass("boxed");
			$("ul.layouts li.boxed-layout").addClass("active");
			$("ul.layouts li.wide-layout").removeClass("active");
        }
		
		if ($.cookie('boxed') == "no") {
			$("ul.layouts li.wide-layout").addClass("active");
        }
        if ($.cookie('BGIMAGE') != null) {
			StoredBgImage = $.cookie('BGIMAGE');
			$("body").css("background-image","url('"+StoredBgImage+"')");
			$("body").css("background-repeat","no-repeat");
			$("body").css("background-size","cover");
        }
		if ($.cookie('BGPATTERN') != null) {
			StoredBgPattern = $.cookie('BGPATTERN');
			$("body").css("background-image","url('"+StoredBgPattern+"')");
			$("body").css("background-repeat","repeat");
			$("body").css("background-size","auto");
        }
		if (($.cookie('BGPATTERN') == null) && ($.cookie('BGIMAGE') == null)){
            $("body").css("background-image",'none');
		}
		if ($.cookie('ColorScheme') != null) {
			StoredColorScheme = $.cookie('ColorScheme');
			$('link.alt').attr('href',StoredColorScheme);
        }
    });
	$(document).ready(function () {
		$(".color-scheme a").click(function () {
			SCHEME = $(this).attr('data-rel');
			$('link.alt').attr('href', $(this).attr('data-rel'));
           $.cookie('ColorScheme',SCHEME);
			return false;
		});
		imgPathStart = "style-switcher/backgrounds/patterns/";
		imgPathEnd = new Array("pt1.png","pt2.png","pt3.png","pt4.png","pt5.png","pt6.png","pt7.png","pt8.png","pt9.png","pt10.png","pt11.jpg","pt12.jpg","pt13.jpg","pt14.jpg","pt15.jpg");
		$(".background-selector li img").click(function() {
			backgroundNumber = $(this).attr("data-nr");
			bgPattern = imgPathStart+imgPathEnd[backgroundNumber]
			$("body").css("background-image","url('"+bgPattern+"')");
			$("body").css("background-repeat","repeat");
			$("body").css("background-size","auto");
           $.cookie('BGPATTERN',bgPattern);
		   $.removeCookie('BGIMAGE');
		});
		imgPathStart1 = "style-switcher/backgrounds/images/";
		imgPathEnd1 = new Array("img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg");
		$(".background-selector1 li img").click(function() {
			backgroundNumber1 = $(this).attr("data-nr");
			bgImage = imgPathStart1+imgPathEnd1[backgroundNumber1]
			$("body").css("background-image","url('"+bgImage+"')");
			$("body").css("background-repeat","no-repeat");
			$("body").css("background-size","cover");
           $.cookie('BGIMAGE',bgImage);
		   $.removeCookie('BGPATTERN');
		});
		$("ul.layouts li.wide-layout").click(function(){
			$("body").removeClass("boxed");
			$("body").css("background-image","none");
			$("ul.layouts li").removeClass("active");
           $.cookie('boxed','no',  {expires: 7, path: '/'});
           $("body").removeClass("boxed");
			$(this).addClass("active");
			$("body").css("background-image","none");
		   $.removeCookie('BGIMAGE');
		   $.removeCookie('BGPATTERN');
			return false;
		});
		$("ul.layouts li.boxed-layout").click(function(){
			$("body").addClass("boxed");
			$("ul.layouts li").removeClass("active");
           $.cookie('boxed','yes', {expires: 7, path: '/'});
           $("body").addClass("boxed");
			$(this).addClass("active");
           $.cookie('wide','no',  {expires: 7, path: '/'});
			return false;
		});
	});
	
	$(window).load(function(){
		$('.styleswitcher').animate({
					'left': '-206px'
				});
		$('.switch-button').addClass('closed');
	});
	$(document).ready(function () {		
		$('.switch-button').click(function () {	
			if ($(this).hasClass('open')) {
				$(this).addClass('closed');
				$(this).removeClass('open');
				$('.styleswitcher').animate({
					'left': '-206px'
				});
			} else {
				if ($(this).hasClass('closed')) {
				$(this).addClass('open');
				$(this).removeClass('closed');
				$('.styleswitcher').animate({
					'left': '0'
				});
				}
			}	
		});
	});
	



	(function() {
  var Util,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    return Util;

  })();

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        return this.start();
      } else {
        return document.addEventListener('DOMContentLoaded', this.start);
      }
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          window.addEventListener('scroll', this.scrollHandler, false);
          window.addEventListener('resize', this.scrollHandler, false);
          return this.interval = setInterval(this.scrollCallback, 50);
        }
      }
    };

    WOW.prototype.stop = function() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
    };

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute('style', 'visibility: visible;'));
      }
      return _results;
    };

    WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
      var style;
      style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
      if (duration) {
        style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
      }
      if (delay) {
        style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
      }
      if (iteration) {
        style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
      }
      return style;
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util || (this._util = new Util());
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);


wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100
  }
);
wow.init();