$(function() {

	startGallery();

});

function startGallery() {

	var cur = 1;

	setInterval(function() {

		cur++;

		if (cur == 4) {
			cur = 1;
		}

		$('.roof_image').fadeOut('slow', function() {
			$('.roof_image').attr('src', 'roof_' + cur + '.jpg');
		});
		
		$('.roof_image').fadeIn('slow');
		

	}, 5000);

}