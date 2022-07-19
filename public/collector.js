var c, ctx;
var cScale, cWidth, cHeight, cDepth;
var cPoints;
var dsWidth, dsDepth, dsTab;
var transitionHeight;
var tLengthFront,tLengthSide;

$(function() {

	c = $('#theCanvas').get(0);
	ctx = c.getContext('2d');

	cPoints = [];
	setDefaults();
	sizeCanvas();
});

// Calculate button clicked
$('#bCalc').click(function(){

	clearCanvas();
	// Collect values from html inputs and set to js variables
	cScale = parseInt($('#iScale').val());
	cWidth = parseInt($('#iCWidth').val());
	cHeight = parseInt($('#iCHeight').val());
	cDepth = parseInt($('#iCDepth').val());
	dsWidth = parseInt($('#iDSWidth').val());
	dsDepth = parseInt($('#iDSDepth').val());
	transitionHeight = parseInt($('#iTransitionHeight').val());
	dsTab = parseInt($('#iDSTab').val());

	calcTrueLength();
	setPoints();
	scalePoints();
	drawCollector();
	drawPoints();
	drawText();

});

function clearCanvas() {
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
};

function Point(x,y) {
	this.x = x;
	this.y = y;
};

function drawPoints() {
	cPoints.forEach(function(p, i) {
		ctx.beginPath();
		ctx.arc(p.x,p.y,4,0,2*Math.PI);
		ctx.fillStyle = 'black';
		ctx.fill();
	});
};

function scalePoints() {
	cPoints.forEach(function(p, i) {
		p.x = (p.x * cScale) + c.width/2;
		p.y = (p.y * cScale * -1) + 50;
	});
};

function drawLine(p1, p2) {
	ctx.moveTo(p1.x, p1.y);
	ctx.lineTo(p2.x, p2.y);
	ctx.strokeStyle = '#5f5f5f';
	ctx.lineWidth = 3;
	ctx.stroke();
};

function calcTrueLength() {
	var a,b,c;

	a = (cWidth - dsWidth) / 2;
	b = (cDepth - dsDepth);

	tLengthFront = Math.sqrt(transitionHeight*transitionHeight + b*b);
	tLengthSide = Math.sqrt(transitionHeight*transitionHeight + a*a);

};

function setPoints() {

	cPoints[0] = new Point((-cWidth/2)-cDepth, 0);
	cPoints[1] = new Point(-cWidth/2, 0);
	cPoints[2] = new Point(cWidth/2, 0);
	cPoints[3] = new Point(cWidth/2+cDepth, 0);


	cPoints[4] = new Point(cPoints[0].x, cPoints[0].y-cHeight);
	cPoints[5] = new Point(cPoints[1].x, cPoints[0].y-cHeight);
	cPoints[6] = new Point(cPoints[2].x, cPoints[0].y-cHeight);
	cPoints[7] = new Point(cPoints[3].x, cPoints[0].y-cHeight);


	cPoints[8] = new Point(cPoints[0].x, cPoints[4].y-tLengthSide);
	cPoints[9] = new Point(cPoints[0].x+dsDepth, cPoints[4].y-tLengthSide);
	cPoints[10] = new Point(-dsWidth/2, cPoints[4].y-tLengthFront);
	cPoints[11] = new Point(dsWidth/2, cPoints[4].y-tLengthFront);
	cPoints[12] = new Point(cPoints[3].x-dsDepth, cPoints[4].y-tLengthSide);
	cPoints[13] = new Point(cPoints[3].x, cPoints[4].y-tLengthSide);

	cPoints[14] = new Point(cPoints[8].x, cPoints[8].y-dsTab);
	cPoints[15] = new Point(cPoints[9].x, cPoints[8].y-dsTab);
	cPoints[16] = new Point(cPoints[10].x, cPoints[10].y-dsTab);
	cPoints[17] = new Point(cPoints[11].x, cPoints[10].y-dsTab);
	cPoints[18] = new Point(cPoints[12].x, cPoints[8].y-dsTab);
	cPoints[19] = new Point(cPoints[13].x, cPoints[8].y-dsTab);
};

function drawCollector() {
	drawLine(cPoints[0],cPoints[1]);
	drawLine(cPoints[1],cPoints[2]);
	drawLine(cPoints[2],cPoints[3]);
	drawLine(cPoints[0],cPoints[4]);
	drawLine(cPoints[1],cPoints[5]);
	drawLine(cPoints[2],cPoints[6]);
	drawLine(cPoints[3],cPoints[7]);
	drawLine(cPoints[4],cPoints[5]);
	drawLine(cPoints[5],cPoints[6]);
	drawLine(cPoints[6],cPoints[7]);
	drawLine(cPoints[4],cPoints[8]);
	drawLine(cPoints[8],cPoints[9]);
	drawLine(cPoints[9],cPoints[5]);
	drawLine(cPoints[10],cPoints[11]);
	drawLine(cPoints[10],cPoints[5]);
	drawLine(cPoints[11],cPoints[6]);
	drawLine(cPoints[12],cPoints[13]);
	drawLine(cPoints[12],cPoints[6]);
	drawLine(cPoints[13],cPoints[7]);
	drawLine(cPoints[14],cPoints[15]);
	drawLine(cPoints[16],cPoints[17]);
	drawLine(cPoints[18],cPoints[19]);
	drawLine(cPoints[14],cPoints[8]);
	drawLine(cPoints[15],cPoints[9]);
	drawLine(cPoints[16],cPoints[10]);
	drawLine(cPoints[17],cPoints[11]);
	drawLine(cPoints[18],cPoints[12]);
	drawLine(cPoints[19],cPoints[13]);
};

function setDefaults() {
	$('#iScale').val(15);
	$('#iCWidth').val(14);
	$('#iCHeight').val(10);
	$('#iCDepth').val(10);
	$('#iDSWidth').val(4);
	$('#iDSDepth').val(4);
	$('#iTransitionHeight').val(4);
	$('#iDSTab').val(3);
};

function sizeCanvas() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
};

function drawText() {
	var theFont = new FontFace(
		'Orbitron',
		"url(https://fonts.gstatic.com/s/orbitron/v24/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyKS6BoWgz.woff2) format('woff2')"
	);

	var f = '12px Orbitron';

	theFont.load();
	document.fonts.add(theFont);

	ctx.fillStyle = 'black';

	ctx.beginPath();
	ctx.font = f;
	ctx.textAlign = 'center';
	ctx.fillText(ctm(new Fraction(tLengthSide)).toFraction(true),cPoints[4].x-25,(cPoints[4].y+cPoints[8].y)/2);

	ctx.beginPath();
	ctx.font = f;
	ctx.textAlign = 'center';
	ctx.fillText(ctm(new Fraction(tLengthFront)).toFraction(true),(cPoints[10].x+cPoints[11].x)/2,(cPoints[10].y+cPoints[5].y)/2);

	ctx.beginPath();
	ctx.font = f;
	ctx.textAlign = 'center';
	ctx.fillText(ctm(new Fraction(cHeight)).toFraction(true),cPoints[0].x-25,(cPoints[0].y+cPoints[4].y)/2);

	ctx.beginPath();
	ctx.font = f;
	ctx.textAlign = 'center';
	ctx.fillText(ctm(new Fraction(cDepth)).toFraction(true),(cPoints[0].x+cPoints[1].x)/2,cPoints[0].y-20);

	ctx.beginPath();
	ctx.font = f;
	ctx.textAlign = 'center';
	ctx.fillText(ctm(new Fraction(cWidth)).toFraction(true),(cPoints[1].x+cPoints[2].x)/2,cPoints[0].y-20);

	ctx.beginPath();
	ctx.font = f;
	ctx.textAlign = 'center';
	ctx.fillText(ctm(new Fraction(dsTab)).toFraction(true),cPoints[0].x-25,(cPoints[8].y+cPoints[14].y)/2);

	ctx.beginPath();
	ctx.font = f;
	ctx.textAlign = 'center';
	ctx.fillText(ctm(new Fraction(dsDepth)).toFraction(true),(cPoints[14].x+cPoints[15].x)/2,cPoints[14].y+20);

	ctx.beginPath();
	ctx.font = f;
	ctx.textAlign = 'center';
	ctx.fillText(ctm(new Fraction(dsWidth)).toFraction(true),(cPoints[16].x+cPoints[17].x)/2,cPoints[16].y+20);

};
