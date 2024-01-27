function preload() {

}

function draw() {
    rect(30, 20, 100, 100);
    rect(670, 20, 100, 100);
    rect(30, 670, 100, 100);
    rect(670, 670, 100, 100);

    fill(100 ,100,100,100);
    image(video,250,250,300,250);

}

function setup() {
    
    canvas = createCanvas(100, 100);
    canvas.size(800, 800);
    canvas.center()
    background("white");
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}