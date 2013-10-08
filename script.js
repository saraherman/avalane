$( document ).ready(function() {
	$('.hide').hide();
	$(".featured-img").mouseenter(function() {
		$(this).find('.hide').fadeIn(200);
	});
	$(".featured-img").mouseleave(function() {
		$('.hide').fadeOut('500');
	});


	$(".testimonials .post").mouseenter(function() {
		$(this).css('border-color','#6fadf7');
	});
	$(".testimonials .post").mouseleave(function() {
		$(this).css('border-color','#9A9A9A');
	});

});