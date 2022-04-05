var halfButton;
var halfInput;
var fortuneButton;
var fortuneInput;
var fortuneOutput;
var text;
var restyleButton;

var fortune_names = ["charlie","dylan","finley","alex","jackie"]
var fortune_lastname = ["smith","johnson","williams","jones","clarke"]


document.addEventListener("DOMContentLoaded", function(){
  halfButton = document.getElementById("half-button");
  halfInput = document.getElementById("half-input");
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");
  text = document.getElementById("text");
  restyleButton = document.getElementById("restyle-button");

  halfButton.addEventListener("click", function(){
    var currentHalfInput = halfInput.value;;
    halfNumber(currentHalfInput);
  });

  fortuneButton.addEventListener("click", function(){
    var currentFortuneInput = fortuneInput.value;
    fortune(currentFortuneInput);
  });

  restyleButton.addEventListener("click", restyle);
});



function halfNumber(num){
  half_num = num / 2;
  alert(half_num);

  console.log("Half of " + num.toString() + " is " + half_num.toString());
}


function fortune(name){
  var fortune_output = name + ", you are";
    fortune_output += " " + fortune_names[Math.floor(Math.random() * fortune_names.length)];
    fortune_output += " " + fortune_lastname[Math.floor(Math.random() * fortune_lastname.length)] + ".";
    text.innerText = fortune_output;
    var randomFont = Math.random() * name.length;
    var randomFont2 = Math.random() * name.length;
    var randomFont3 = Math.random() * name.length;
    text.style.fontSize = (randomFont+randomFont2+randomFont3);
  }

function restyle(){
  var red = Math.random() * 255;
  var green = Math.random() * 255;
  var blue = Math.random() * 255;
  var outputColorString = "rgb(" + red + "," + green + "," + blue + ")";
  fortuneOutput.style.backgroundColor = outputColorString;
  text.style.fontSize = (Math.random() * (30 - 10) + 10) + "px";
  text.style.padding = (Math.random() * (50 - 10) + 10) + "px";

}
