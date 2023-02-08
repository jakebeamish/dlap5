let particles = [];
let body = [];
let growth, tallest;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);

    for (let i = 0; i < windowWidth; i++) {
        body.push(new Particle(i, height + 2));
    }
}

function draw() {
    growth = body;
    growth.sort((a, b) => a.pos.y - b.pos.y);
    tallest = growth[0].pos.y - 5;

    if (tallest < height * 0.05) {
        noLoop();
        clear();
        background(0, 10);
        stroke(255);
        for (let b of body) {
            b.show();
        }
    }
    for (let z = 0; z < 30; z++) {
        background(0);
        while (particles.length < 1) {
            particles.push(new Particle(random(width), tallest));
        }

        for (let p of particles) {
            if (p.stuck) {
                body.push(p);
                particles.splice(p, 1);
            } else {
                p.move();
                p.wrap();
                stroke(255, 50);
                p.show();
                p.checkstuck();

            }
        }

        for (let b of body) {
            strokeWeight(1);
            stroke(255);
            fill(255);
            b.show();
        }
    }
}

class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        // this.pos = p5.Vector.random2D();
        this.stuck = false;
        this.d = 3;
    }

    show() {
        circle(this.pos.x, this.pos.y, this.d)
    }

    move() {
        this.pos.add(createVector(floor(random(3) - 1), floor(random(2))));
        // this.pos.add(createVector(width/2, height/2));
    }

    wrap() {

        if (this.pos.y > height) { this.pos.y = 0 };
        if (this.pos.y < 0) { this.pos.y = height };
        if (this.pos.x > width) { this.pos.x = 0 };
        if (this.pos.x < 0) { this.pos.x = width };
    }

    checkstuck() {
        if (body.length > 0) {
            for (let b of body) {
                // let d = dist(b.pos.x, b.pos.y, this.pos.x, this.pos.y);
                let d = distsq(b.pos.x, b.pos.y, this.pos.x, this.pos.y);
                if (d <= pow(this.d, 2)) { this.stuck = true };


            }
        }
    }

}

function distsq(x1, y1, x2, y2) {
    return sq(x1 - x2) + sq(y1 - y2);
}