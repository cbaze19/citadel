$(function() {
	var cur = 0;

	$('#scroll-left').on('click', function() {

		if (cur == 0) {
			cur = 4;
		} else {
			cur--;
		}

		$('.roof_image').attr('src', imgs[cur].src);

	});

	$('#scroll-right').on('click', function() {

		cur++;

		if (cur == 5) {
			cur = 0;
		}

		$('.roof_image').attr('src', imgs[cur].src);

	});

	$('.thumbnail').on('click', function() {
		$('.roof_image').attr('src', $(this).attr('src'));
		console.log($(this).attr('src'));
	});

});
