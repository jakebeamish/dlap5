let body = [];

let grain;

let r = 2;

function setup() {
    createCanvas(400, 400);
    body[0] = createVector(width / 2, height / 2);
}

function draw() {
    background(0);

    
    for (g of body) {
        if (dist(g.x, g.y, width/2, height/2) > 100) {
            noLoop();
        }
        fill(255, 100);
        circle(g.x, g.y, r * 2);
    }

    for (let a = 0; a < 3000; a++) {
        grain = createVector(random(width), random(height));

        // stroke(128);
        // circle(grain.x, grain.y, r * 2);
        for (let i = 0; i < body.length; i++) {
            let distance = p5.Vector.dist(grain, body[i]);
            if (distance < r * 2) {
                body.push(grain);
                break;
            }
        }
    }

}
