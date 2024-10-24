const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function(){
        ctx.fillStyle = `hsl(${this.x}, 50%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.fill();
    }
}

let x =10;
let y = 10;
let rigth = true;
let down = false;

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show();
    //Validar rigth para x
    if (rigth) x +=2;
    else x -=2;
    //Validar down para y
    if (down) y ++;
    else y --;
    //validar x para cambiar rigth
    rigth = x > 600 ? !rigth : rigth;
    rigth = x < 1 ? !rigth : rigth;
    //validar y para cambiar down
    down = y > 403 ? !down : down;
    down = y < 1 ? !down : down;

}, 1);