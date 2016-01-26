
$(function() {

	$('#menu-img').on('click', function() {

		this.toggle = !this.toggle;
		$('.hlink').stop().fadeTo(300, this.toggle ? 1 : 0);
		$('.hlink').toggleClass('disableClick');
			
	});

});