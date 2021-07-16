
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video,230,150,220,200);
    fill(250,0,0);
    stroke(250,0,0);
    circle(50,50,80);

    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,460,20);
    rect(90,40,460,20);

    fill(250,0,0);
    stroke(250,0,0);
    circle(550,50,80);
    
    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,460,20);
    rect(90,430,460,20);
    
    fill(250,0,0);
    stroke(250,0,0);
    circle(560,450,80);
    tint(tint_color);
}
function take_snapshot() {
    save('natasha_name.png');
}
