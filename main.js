Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(pic){
        document.getElementById("snap").innerHTML=`<img id="captured pic" src=${pic}>`
    });
}

console.log('ml5 version' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/szyhCdU1y/model.json',modelloaded);

function modelloaded(){
    console.log("Model loaded");
}

function check(){
    picture=document.getElementById("captured pic");
    classifier.classify( picture,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        result1=results[0].label;
        result2=results[1].label;
        document.getElementById("emotion1_name").innerHTML=result1;
        document.getElementById("emotion2_name").innerHTML=result2;
    if(result1=="Thumbs down"){
    document.getElementById("emoji1").innerHTML="&#128078;";
    } 
    if(result1=="Thumbs up"){
    document.getElementById("emoji1").innerHTML="&#128077;";
    }
    if(result1=="Victory"){
    document.getElementById("emoji1").innerHTML="&#128406;";
    }  
    if(result2=="Thumbs down"){
        document.getElementById("emoji2").innerHTML="&#128078;";
        } 
        if(result2=="Thumbs up"){
        document.getElementById("emoji2").innerHTML="&#128077;";
        }
        if(result2=="Victory"){
        document.getElementById("emoji2").innerHTML="&#128406;";
        }  
    }
    }