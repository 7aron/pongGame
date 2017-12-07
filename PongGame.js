const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-5;

const ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 15;
var dir = [1, -1];
var direction = dir[Math.round(Math.random())];
var dx = 5;
var dy = 5;
var score = 0; 
var score1 = 0; 



var fPlayerP = 10;
var fPlayerM = 10;
var width = 20;
var height = 80;

var sPlayerP = canvas.width - 30;
var sPlayerM = 10;
var width1 = 20;
var height1 = 80;



const loop = function() {

	requestAnimationFrame(loop);

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.strokeStyle = "#ffffff";
	ctx.stroke();
	ctx.fillStyle = "#ffffff";
	ctx.fill();



	if(x > canvas.width) {

		score = score + 1;
		x = canvas.width / 2;
	    y = canvas.height / 2;
		dir = [1, -1];
		direction = dir[Math.round(Math.random())];
		x += dx * direction;
		y += dy * direction;



	}

	else if (x < 0 ) {

		score1 = score1 + 1;
		x = canvas.width / 2;
		y = canvas.height / 2;
		dir = [1, -1];
		direction = dir[Math.round(Math.random())];
		x += dx * direction;
		y += dy * direction;


	}

	else if(y > canvas.height) {
		dy = -dy;
	}

else if(y < 0) {
	dy = -dy;
}
	x += dx * direction;
	y += dy * direction;

	ctx.fillStyle = "#ffffff";
	ctx.fillRect(fPlayerP,fPlayerM, width, height);

	ctx.fillStyle = "#ffffff";
	ctx.fillRect(sPlayerP,sPlayerM, width1, height1);




	if(x < sPlayerP + width1 && x + radius * 2 > sPlayerP && y < sPlayerM + height1 && y + radius * 2 > sPlayerM) {
		dx = -dx;
	}
	else if(x < fPlayerP + width && x + radius * 2 > fPlayerP && y < fPlayerM + height && y + radius * 2 > fPlayerM) {
		dx = -dx;
	}



	ctx.font = "30px Lucida Grande ";
	ctx.fillText("Score" + ' ' + score, 200, 50);

	ctx.font = "30px Lucida Grande";
	ctx.fillText("Score" + ' ' + score1, canvas.width - 300 ,50);

	ctx.beginPath();
	ctx.strokeStyle = "white";
	ctx.moveTo(canvas.width / 2, 0);
	ctx.lineTo(canvas.width / 2, canvas.height);
	ctx.stroke();


};

loop();



	const upKey = 38;
	const downKey = 40;
	const wKey = 87;
	const sKey = 83;

	document.addEventListener('keydown', function(event){

		if(event.keyCode === upKey) {
			fPlayerM = fPlayerM - 30;

			if(fPlayerM < 0) {
				fPlayerM = canvas.height;
			}

		}

		else if(event.keyCode === downKey){

			fPlayerM = fPlayerM + 30;

			if(fPlayerM > canvas.height) {
				fPlayerM = 0;
			}

		}

	}, false);





	document.addEventListener('keydown', function(event){

		if(event.keyCode === wKey) {
			sPlayerM = sPlayerM - 30;

			if(sPlayerM < 0) {
				sPlayerM = canvas.height;
				sPlayerP = canvas.width - 30;
			}

		}

		else if(event.keyCode === sKey){

			sPlayerM = sPlayerM + 30;

			if(sPlayerM > canvas.height) {
				sPlayerM = 0;
				sPlayerP = canvas.width - 30;
			}

		}

	}, false);
