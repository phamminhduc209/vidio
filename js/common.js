(function($){
  "use strict";

	// When you hover over menu, the background of the body will be background: rgba(0,0,0,0.8);
	$('.sidebar_menu-row-collapsible')
	.mouseenter(function() {
		$('body').find(".overlay").show();
	})
	.mouseleave(function() {
		$('body').find(".overlay").hide();
	});

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
	    // $(".sidebar").toggle(
	    //     function(){$(".sidebar").css({"display": "block"});},
	    //     function(){$(".sidebar").css({"display": "none"});},
	    // );
	});

	var sidebarSelector = $(".sidebar");
	var adjustedHeight = $(".footer").height() + $(".site-header").height();
	// console.log(adjustedHeight);
	$(sidebarSelector).height($(window).height() - adjustedHeight);



})(jQuery); // End of use strict