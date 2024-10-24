const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = '24px serif';

// Dimensiones del lienzo
const WIDTH = 600;
const HEIGHT = 400;
const GAME_AREA_HEIGHT = 360;
const SCORE_AREA_HEIGHT = 40;

let snake, food, direction, score, gameOver, gameInterval;
let highScore = 0;

function init() {
    snake = [
        { x: 5, y: 1 },
        { x: 4, y: 1 },
        { x: 3, y: 1 }
    ];

    food = {
        x: 0,
        y: 1,
        show: function () {
            ctx.fillText('🤠', this.x * 20, this.y * 20 + SCORE_AREA_HEIGHT);
        },
        fadeIn: function () {
            do {
                this.x = Math.floor(Math.random() * 30);
                this.y = Math.floor(Math.random() * 18) + 1;
            } while (snake.some(segment => segment.x === this.x && segment.y === this.y));
        }
    };

    // Iniciar variables del juego
    direction = { x: 1, y: 0 };
    score = 0;
    gameOver = false;

    food.fadeIn();
    document.getElementById('reiniciar').style.display = 'none';
}

function eat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.fadeIn();
        snake.push({ ...snake[snake.length - 1] });
        score++;
    }
}

function nextMove() {
    // Mover la serpiente
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i] = { ...snake[i - 1] };
    }
    snake[0].x += direction.x;
    snake[0].y += direction.y;
}

function checkCollision() {
    // Colisión con el cuerpo
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            gameOver = true;
            break;
        }
    }

    // Colisión con los límites
    if (snake[0].x < 0 || snake[0].x > 29 || snake[0].y < 1 || snake[0].y > 18) {
        gameOver = true;
    }
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Área del marcador
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(0, 0, WIDTH, SCORE_AREA_HEIGHT);

    ctx.fillStyle = 'black';
    ctx.font = '24px serif';
    ctx.textAlign = 'center';

    // Marcador
    ctx.fillText(`Score: ${score}`, WIDTH / 2, 30);
    ctx.fillText(`High Score: ${highScore}`, WIDTH / 2, 60);

    if (gameOver) {
        if (score > highScore) {
            highScore = score;
        }

        // Ventana emergente de Game Over
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(50, 100, 500, 200);
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Perdiste', WIDTH / 2, 150);
        ctx.font = '20px serif';
        ctx.fillText(`Puntaje final: ${score}`, WIDTH / 2, 200);
        ctx.fillText(`Tu mejor puntaje: ${highScore}`, WIDTH / 2, 230);
        ctx.fillText('Presiona Enter para continuar', WIDTH / 2, 260);

        document.getElementById('reiniciar').style.display = 'block';

        clearInterval(gameInterval);
        return;
    }

    ctx.fillStyle = 'white';
    ctx.fillRect(0, SCORE_AREA_HEIGHT, WIDTH, GAME_AREA_HEIGHT);

    nextMove();
    eat();
    checkCollision();

    // Mostrar comida y serpiente
    food.show();
    snake.forEach(s => ctx.fillText('👻', s.x * 20, s.y * 20 + SCORE_AREA_HEIGHT));
}

// Inicializa el juego
init();

gameInterval = setInterval(() => {
    draw();
}, 200);

// Control de dirección
document.querySelector('body').addEventListener('keydown', (e) => {
    if (!gameOver) {
        // Cambiar la dirección solo si no es opuesta a la actual
        if (e.key === 'ArrowRight' && direction.x !== -1) {
            direction = { x: 1, y: 0 };
        } else if (e.key === 'ArrowDown' && direction.y !== -1) {
            direction = { x: 0, y: 1 };
        } else if (e.key === 'ArrowLeft' && direction.x !== 1) {
            direction = { x: -1, y: 0 };
        } else if (e.key === 'ArrowUp' && direction.y !== 1) {
            direction = { x: 0, y: -1 };
        }
    } else if (e.key.toLowerCase() === 'enter') { // Reiniciar el juego con la tecla R
        clearInterval(gameInterval);
        init(); // Reinicia el juego
        gameInterval = setInterval(draw, 200); // Reinicia el intervalo
    }
});

// Reiniciar juego con botón
document.getElementById('reiniciar').addEventListener('click', () => {
    clearInterval(gameInterval);
    init();
    gameInterval = setInterval(draw, 200);
});
