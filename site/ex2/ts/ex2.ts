import {V} from "../../ts/utils/vector";
import {Ball} from "./ball";

const W = 500, H = 300;

// Get the canvas and set its size
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = W;
canvas.height = H;


// Get the 2D "context" which let's us draw on the canvas
const ctx = canvas.getContext("2d");

// Make it so that +y is up and -y is down
ctx.translate(0, H);
ctx.scale(1, -1);


// Create list of balls
// TODO: add more balls
const balls = [new Ball(V(100, 100), 10, 1)];


function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw all the balls
    for (const ball of balls) {
        // Draw ball

        // TODO
        // Draw ball as a filled circle
        // Don't forget to set color
        //  Use ctx.arc
    }
}

function update() {
    for (const ball of balls) {
        // Add gravitational force as V(0, -9.8)
        // TODO

        // Update the ball
        ball.update(5*1/60);

        // Check if the ball went out of bounds and make it bounce
        // TODO
    }
}


// This is a function that get's called at 60fps
//  and repeatedly updates it
function step() {
    update();
    draw();

    // This function requests a function call at 60fps
    requestAnimationFrame(step);
}
requestAnimationFrame(step);