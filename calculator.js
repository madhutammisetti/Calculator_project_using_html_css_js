
let outputScreen = document.getElementById("output_screen");

function display(num){
outputScreen.value += num;
}
function calculate(){
try{
    outputScreen.value = eval(outputScreen.value);
}
catch(err){
alert("invalid")
}
}
function clear(){
outputScreen.value= "";
}
function del(){
outputScreen.value=outputScreen.value.slice(0,-1);
}
