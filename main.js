img = "";
alarm = "";
status = "";
video = "";
objects = "";

function preload() {
    img = loadImage('background.jpeg');
    alarm = loadSound('alarm.mp3');
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}


function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);

    if (status != "") {
        document.getElementById("status").innerHTML = "Status : Baby Detected";
        alarm.stop();

    } else {
        alarm.play();
        alarm.loop();
        alarm.speed(1);
        alarm.volume(2);

        if (objects.length < 0) {
            document.getElementById("status").innerHTML = "Status : Baby Not Detected";
            alarm.play();
            alarm.loop();
            alarm.speed(1);
            alarm.volume(2);
        }
    }
}