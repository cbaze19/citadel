$(function() {
	var cur = 0;

	$('#scroll-left').on('click', function() {

		if (cur == 0) {
			cur = 2;
		} else {
			cur--;
		}

		$('.roof_image').attr('src', imgs[cur].src);

	});

	$('#scroll-right').on('click', function() {

		cur++;

		if (cur == 3) {
			cur = 0;
		}

		$('.roof_image').attr('src', imgs[cur].src);

	});

});