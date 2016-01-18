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

		$('.roof_image').fadeTo('slow', 0, function() {
			$('.roof_image').attr('src', 'roof_' + cur + '.jpg');
			$('.roof_image').fadeTo('slow', 1);
		});
		

	}, 5000);

}