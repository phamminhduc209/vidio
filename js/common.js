(function($){
  "use strict";

	// Show suggestion saerch
  
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 200) {
	  		$('#return-to-top').addClass('td-scroll-up-visible');
		} else {
	  		$('#return-to-top').removeClass('td-scroll-up-visible');
		}
	});
	$('#return-to-top').click(function() {
		$('body,html').animate({
	  		scrollTop : 0
		}, 'slow');
	});

	$(".site-footer_language-button a").click(function() {
		if ($(".site-footer_language-table").hasClass("hide-me")) {
			$(".site-footer_language-table").removeClass("hide-me");
		}else{
			$(".site-footer_language-table").addClass("hide-me");
		}
	})

	// Set width and location fixed for button ranking navigation
	var e = $("#video-ranking-header").width() + 90;
	var	t = $(window).height() / 2;
	$(".ranking_navigation").css("width", e), $(".ranking_navigation").css("top", t);

	$(".site-footer_language-table").click(function() {
		/* Act on the event */
		if (".site-footer_language-table") {}
	});

	$(".nav-trigger_bar").click(function(){
		var $this = $("body");
		if ($this.hasClass('menu-close')) {
	        $this.removeClass('menu-close').addClass('menu-open');
	    } else if ($this.hasClass('menu-open')) {
	        $this.removeClass('menu-open').addClass('menu-close');
	    } else {
	        $this.addClass('menu-close');
	    }
	});

	var sidebarSelector = $(".sidebar");
	var adjustedHeight = $(".footer").height() + $(".site-header").height();
	$(sidebarSelector).height($(window).height() - adjustedHeight);

	// var s = $(".js-mega-menu_handle"),
	//     l = ($(".js-mega-menu"), $(".js-mega-menu_handle span")),
	//     c = $(".js-sidebar-adjust"),
	//     d = $(window),
	//     u = $(".submenu_container"),
	//     p = $(".category_wrapper", ".site-header_left");
	//     d.on("scroll", function() {
	// 	    d.scrollTop() > 0 && "62px" !== u.css("top") ? (p.animate({
	// 	        top: "-90"
	// 	    }, {http://localhost/www/vidio/#
	// 	        duration: 1e3
	// 	    }), s.removeClass("invisible"), l.removeClass("caret-open"), l.addClass("caret-close"), c.css("margin-top", 62), u.css("top", 62)) : 0 === d.scrollTop() && "62px" === u.css("top") && (p.animate({
	// 	        top: "64"
	// 	    }, 1e3), s.addClass("invisible"), l.removeClass("caret-close"), l.addClass("caret-open"), c.css("margin-top", 101), u.css("top", 101))
	// 	})

	// When you hover over menu, the background of the body will be background: rgba(0,0,0,0.8);
	// var c = $(".sidebar_menu-url-collapsible"),
 //    	s = $(".submenu_container").css("left", "-340px");

 	var c = $(".sidebar_menu-url-collapsible"),
    	s = $(".submenu_container").css("left", "-340px");
    $(c).mouseenter(function(){
    	$(".submenu_container .sidebar_section-column").remove();
        $(this).next().clone().appendTo(s);
        $(s).css("left", "250px")
    });
	$(".sidebar_menu-url-collapsible")
	.mouseenter(function() {
		$("body").find(".overlay").show();
	})
	.mouseleave(function() {
		$("body").find(".overlay").hide();
		$(s).css("left", "-340px");
	});

})(jQuery); // End of use strict