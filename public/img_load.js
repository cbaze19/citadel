var imgs = [];

$(function() {

	if (document.images) {

		img1 = new Image();
		img2 = new Image();
		img3 = new Image();
		img4 = new Image();
		img5 = new Image();

		img1.src = 'roof_1.png';
		img2.src = 'roof_2.png';
		img3.src = 'roof_3.jpg';
		img4.src = 'roof_4.png';
		img5.src = 'roof_5.jpg';

		imgs.push(img1);
		imgs.push(img2);
		imgs.push(img3);
		imgs.push(img4);
		imgs.push(img5);
	}

});
