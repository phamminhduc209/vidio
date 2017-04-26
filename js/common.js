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
  

})(jQuery); // End of use strict