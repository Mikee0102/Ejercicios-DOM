const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext("2d");

//
// fillRect (x, y, width, height)
//strokeRect (x, y, width, height)
//arc(x, y, radius, startAngle, endAngle, sentidoHorario)


// ctx.strokeRect(0, 0, 200, 200);
// ctx.fillRect(20, 20, 160, 160);

// ctx.fillStyle = "orange";
// ctx.beginPath();
// ctx.arc(100, 100, 60, 0, 2 * Math.PI, true);
// ctx.fill();

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(80, 90);
// ctx.lineTo(130, 90);
// ctx.lineTo(80, 130);
// ctx.fill();

// carita

// ctx.fillStyle= 'green'
// ctx.beginPath();
// ctx.arc(300, 200, 50, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.fillStyle= 'red'
// ctx.fillRect(270, 180, 20, 5);
// ctx.fillRect(310, 180, 20, 5);

// ctx.beginPath();
// ctx.arc(280, 190, 5, 0, Math.PI * 2, true);
// ctx.fill();
// ctx.beginPath();
// ctx.arc(315, 190, 5, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(300, 220, 20, 0, Math.PI, false);
// ctx.fill();


ctx.beginPath();
ctx.roundRect(250, 0, 50, 50);
ctx.closePath();
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 0, 50, 50);
ctx.closePath();
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(350, 0, 50, 50);
ctx.closePath();
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();

//1
ctx.beginPath();
ctx.roundRect(150, 50, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 50, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(250, 50, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 50, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(350, 50, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();
//2
ctx.beginPath();
ctx.roundRect(100, 100, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(150, 100, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 100, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(250, 100, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 100, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(350, 100, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(400, 100, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

//3

ctx.beginPath();
ctx.roundRect(50, 150, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(100, 150, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(150, 150, 50, 50);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 150, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(250, 150, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 150, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(350, 150, 50, 50);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(400, 150, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(450, 150, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

//4

ctx.beginPath();
ctx.roundRect(50, 200, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(100, 200, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(150, 200, 50, 50);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 200, 50, 50);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(250, 200, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 200, 50, 50);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(350, 200, 50, 50);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(400, 200, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(450, 200, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

//5

ctx.beginPath();
ctx.roundRect(50, 250, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(100, 250, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(150, 250, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 250, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(250, 250, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 250, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(350, 250, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(400, 250, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(450, 250, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

//6

ctx.beginPath();
ctx.roundRect(100, 300, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(150, 300, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 300, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(250, 300, 50, 50);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 300, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(350, 300, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(400, 300, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

//7

ctx.beginPath();
ctx.roundRect(150, 350, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 350, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(250, 350, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 350, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(350, 350, 50, 50);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();