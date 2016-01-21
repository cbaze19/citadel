var imgs = [];

$(function() {

	if (document.images) {

		img1 = new Image();
		img2 = new Image();
		img3 = new Image();

		img1.src = 'roof_1.jpg';
		img2.src = 'roof_2.jpg';
		img3.src = 'roof_3.jpg';

		imgs.push(img1);
		imgs.push(img2);
		imgs.push(img3);
	}

	startGallery();



	$('#menu-img').on('click', function() {

		this.toggle = !this.toggle;
		$('.hlink').stop().fadeTo(300, this.toggle ? 1 : 0);
		$('.hlink').toggleClass('disableClick');
			
	});

});

function startGallery() {

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

}