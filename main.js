var SpeechRecongnition = window.webkitSpeechRecognition;
var recognition = new SpeechRecongnition();

function start(){
    document.getElementById("textbox").innerHTML = ""
    recognition.start();
    
}
recognition.onresult = function run (event){
    console.log(event)

    var content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML = content;
    if(content == 'take a pic'){
        speak()

    }
    
    
} 
function speak(){
    var sinth = window.speechSynthesis
    var speak_data = "Taking Your Picture in 5 Seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    sinth.speak(utterThis) 
    Webcam.attach(camera)

    setTimeout(function(){
    take_snapshot();

    },5000)
}
Webcam.set({
    width : 250,
    height : 300,
    image_format : 'png',
    png_quality:100
})
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"> ';

    })
}
function save(){
    link = document.getElementById("link")
    image = document.getElementById("selfie_image").src
    link.href = image;
    link.click()
}
