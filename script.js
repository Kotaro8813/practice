$(function() {
	$('.slidein').fadeIn(3000);

	$('.lesson').hover(
		function() {
			$(this).find('.lesson-text').addClass('text-active');
		},
		function() {
			$(this).find('.lesson-text').removeClass('text-active');
		}
	);
});
