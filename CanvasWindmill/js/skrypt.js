var rotation = 0; 
$(function(){
	
	// Canvas
	var context = $('#mycanvas')[0].getContext("2d");
	var WIDTH = $("#mycanvas").width(); 
	var HEIGHT = $("#mycanvas").height();

	function clear(){
		context.clearRect(0, 0, WIDTH+100, HEIGHT+100);
	}
	function drawLawn() {
		context.moveTo(0, 500);
		context.lineTo(0, 400);
		context.lineTo(700, 400);
		context.lineTo(800, 500);
		context.lineTo(0, 500);
		context.closePath();
		context.fillStyle = 'green';
		context.fill();
	}
	function drawSky() {
		context.beginPath();
		context.rect(0, 0, 700, 400);
		context.fillStyle = 'lightblue';
		context.fill();
	}
	function drawWindmill(){
		context.beginPath();
		context.moveTo(250, 450);
		context.lineTo(250, 200);
		context.lineTo(350, 100);
		context.lineTo(450, 200);
		context.lineTo(450, 450);
		context.lineTo(250, 450);
		context.lineJoin = 'round';
		context.closePath();
		context.lineWidth = 5;
		context.strokeStyle = '#000';
		context.stroke();
		context.fillStyle = 'brown';
		context.fill();
	}
	function drawWings() {
		context.save();
		context.translate(350,200);
        context.rotate( rotation ); 
        context.translate(-350,-200);
		context.beginPath();
		// middle
		context.moveTo(350, 200);
		context.lineTo(310, 30);
		context.lineTo(390, 30);
		// middle
		context.lineTo(350, 200);
		context.lineTo(310, 370);
		context.lineTo(390, 370);
		// middle
		context.lineTo(350, 200);
		context.lineTo(180, 240);
		context.lineTo(180, 160);
		// middle
		context.lineTo(350, 200);
		context.lineTo(520, 240);
		context.lineTo(520, 160);
		context.closePath();
		context.lineJoin = 'round';
		context.lineWidth = 5;
		context.strokeStyle = '#888';
		context.fillStyle = '#ddd';
		context.stroke();
		context.fill();
		context.restore();

	}
	function draw(){
		clear();
		drawLawn();
		drawSky();
		drawWindmill();
		drawWings();
	}

	intervalGame = setInterval(function(){
	 draw(); rotation+=0.1;
	}, 100);

});