img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('kitchen.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {

    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            image(img, 0, 0, 640, 420);
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
        }
    }
}

function home() {
    setScreen = "index.html"
}