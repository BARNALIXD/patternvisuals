function setup() {
    createCanvas (500,500);
    frameRate(10); // set the frame rate to control the speed of the animation
    noStroke();
}

function draw() {
    bacground(0);
    let centerX = width / 2;
    let centerY = height / 2;
    let angle = 0;
    let radius=0;
    let angleIncrement = 0.1;
    let radiusincrement = 5;

    while (radius < width / 1.5){
        let x = centreX + cos(angle) * radius;
        let y = centreY + sin(angle) * radius;
        drawShape (x,y,25);

        angle += angleIncrement;
        radius += radiusIncrement * angleIncrement;
    }
    
}
function drawShape(x,y,size){
    //Change the colours randomly for each circle
    fill(random(255), random(255),random(255));
    ellipse(x,y,size,size);
}