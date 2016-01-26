$(function() {

	var cur = 0;

	setInterval(function() {

		cur++;

		if (cur == 3) {
			cur = 0;
		}

		$('.roof_image').fadeTo('slow', 0, function() {
			$('.roof_image').attr('src', imgs[cur].src);
		});
		
		$('.roof_image').fadeTo('slow', 1);

	}, 10000);

});