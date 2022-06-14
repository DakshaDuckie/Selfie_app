var speechRec = window.webkitSpeechRecognition;
//rec = recognition
var rec = new speechRec();

function start(){
    document.getElementById("textbox").innerHTML="";
    rec.start();
}
 rec.onresult =function(event){
     console.log(event);
     var content = event.results[0][0].transcript;
     console.log(content);
     document.getElementById("textbox").innerHTML=content;
     speak();
 }

 function speak(){
     var synth = window.speechSynthesis;
     var speak_data = document.getElementById("textbox").innerHTML;
     var utter_this = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utter_this);
 }
 