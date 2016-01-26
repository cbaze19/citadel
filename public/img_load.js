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

});