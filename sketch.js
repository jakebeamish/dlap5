let body = [];
let grain;
let r = 1.5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    body[0] = createVector(width / 2, height / 2);
}

function draw() {
    background(0);
    noStroke();


    for (let a = 0; a < 1000; a++) {
        // let dice = floor(random(4));
        // let dice = 0;
        // if (dice === 0) {
            // grain = createVector(random(width), 0);
        // } else if (dice === 1) {
            // grain = createVector(random(width), height);
        // }
        // grain.add(p5.Vector.random2D().mult(200))
        grain = createVector(random(width), random(height));
        fill(128, 50);
        circle(grain.x, grain.y, r * 2);
        for (let i = 0; i < body.length; i++) {
            let distance = p5.Vector.dist(grain, body[i]);
            if (distance < r * 2) {
                body.push(grain);
                break;
            } else {

            }
        }
    }

    for (g of body) {
        if (dist(g.x, g.y, width / 2, height / 2) > 150) {
            noLoop();
        }
        fill(255, 50);
        stroke(255, 50);
        circle(g.x, g.y, r * 2);
    }

}