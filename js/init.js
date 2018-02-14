(function($){
	$(function(){

		$('.parallax').parallax();

		$('.modal-trigger').leanModal();   

		$('.button-collapse').sideNav();
		
		// scroll arrow behavior
		$(window).scroll(function() {   
			var scroll = $(window).scrollTop();

			// if (scroll > 0) {
			// 	$(".scroll-up").show();
			// 	$(".hero").fadeOut(2000);;
			// } else {
			// 	$(".scroll-up").hide();
			// 	$(".hero").fadeIn(2000);;
			// };
		});

		// smooth scrolling - nav links
		$('nav a').on('click', function(event) {
			if (this.hash !== "") { // Make sure this.hash has a value before overriding default behavior
				event.preventDefault(); // Prevent default anchor click behavior
				var hash = this.hash; // Store hash
				$('html, body').animate({ // Using jQuery's animate() method to add smooth page scroll
					scrollTop: $(hash).offset().top
				}, 700, function() {
					window.location.hash = hash; // Add hash (#) to URL when done scrolling (default click behavior)
				});
			}
		});

		$("a[href='#top']").click(function(e) {
			e.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}); // end of document ready
})(jQuery); // end of jQuery name space