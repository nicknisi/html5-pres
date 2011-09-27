jQuery(function () {
	var ctx = document.querySelector('canvas').getContext('2d'),
	ballctx,
	x = 100,
	y = 50,
	dx = 2,
	dy = 4,
	width = ctx.canvas.width,
	height = ctx.canvas.height;
	
	var ballImg = document.createElement('img');
	ballImg.src = "img/cf.jpg";
	
	ballImg.onload = function () {
		var ball = document.createElement('canvas');
		ball.style.display = 'none';
		ball.height = 50;
		ball.width = 50;
		
		document.body.appendChild(ball);
		
		ballctx = ball.getContext('2d');
		ballctx.translate(25, 25);
		
		setInterval(draw, 30);
	};
	
	function draw() {
		ctx.clearRect(0,0,width,height);
		
		ballctx.rotate(Math.PI/180*5); // 5 degrees
		
		ballctx.drawImage(ballImg, 0, 0, ballImg.width, ballImg.height, -25, -25, 50, 50);
		
		ctx.drawImage(ballctx.canvas, x, y);
		
		if (x + dx > width || x + dx < 0) {
			dx = -dx;
		}
		if (y + dy > height || y + dy < 0) {
			dy = -dy;
		}
		
		x += dx;
		y += dy;
	}
	
});
	