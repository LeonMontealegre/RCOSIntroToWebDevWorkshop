/**********************************************




import {V} from "../../ts/utils/vector";
import {Ball} from "./ball";

const W = 500, H = 300;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = W;
canvas.height = H;


// Get the 2D "context" which let's us draw on the canvas
const ctx = canvas.getContext("2d");

ctx.translate(0, H);
ctx.scale(1, -1); // Make it so that +y is up and -y is down

const balls = [new Ball(V(100, 100), 10, 1)];


function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw all the balls
    for (const ball of balls) {
        // Draw ball
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

function update() {
    for (const ball of balls) {
        // Add gravitational force
        ball.addForce(V(0, -9.8));

        ball.update(5*1/60);

        // Check if the ball went out of bounds and make it bounce
        if (ball.pos.y-ball.radius < 0) {
            ball.pos.y = ball.radius;
            ball.vel.y *= -1;
        }
        if (ball.pos.x-ball.radius < 0) {
            ball.pos.x = ball.radius;
            ball.vel.x *= -1;
        }
        if (ball.pos.x+ball.radius > W) {
            ball.pos.x = W - ball.radius;
            ball.vel.x *= -1;
        }
    }
}

function step() {
    update();
    draw();

    requestAnimationFrame(step);
}
requestAnimationFrame(step);




**********************************************/