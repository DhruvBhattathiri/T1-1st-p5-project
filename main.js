function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 620, 440);
    tint(tint_color);

    
    stroke(0,250, 0);
    square(0, 0, 640, 480)

    
    
    stroke(250,0, 0);
    circle(290, 130, 50);

    
    
    stroke(250,0, 0);
    circle(920, 130, 50);

    
    
    stroke(250,0, 0);
    circle(290, 610, 50);


    
    stroke(250,0, 0);
    circle(920, 610, 50);
}

function take_snapshot() {
    save('studet_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}    
    