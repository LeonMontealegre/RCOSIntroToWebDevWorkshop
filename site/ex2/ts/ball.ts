import {V,Vector} from "../../ts/utils/vector";

export class Ball {
    public pos: Vector;
    public vel: Vector;
    public acc: Vector;

    public radius: number;
    public mass: number;

    public color: string;

    public constructor(pos: Vector, radius: number, mass: number) {
        this.pos = pos;
        this.vel = V(0, 0);
        this.acc = V(0, 0);
        this.radius = radius;
        this.mass = mass;

        this.color = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    }

    public update(dt: number): void {
        // Euler step, x = v*t, v = a*t
        this.pos = this.pos.add(this.vel.scale(dt));
        this.vel = this.vel.add(this.acc.scale(dt));
        this.acc = V(0, 0);
    }

    public addForce(f: Vector): void {
        // a = F/m
        this.acc = this.acc.add(f.scale(1.0 / this.mass));
    }
}