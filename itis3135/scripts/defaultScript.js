// Alert Message
function scriptTest(){
    alert("Hey my script is running");
}
// Welcome Message
    let input = prompt("What is your name?");
    let greeting = "Welcome " + input + "!";
    document.getElementById("greeting").innerHTML = greeting;

// Incrementing Clock
    setInterval(() =>{
    var dt = new Date();
    document.getElementById("date-time").innerHTML=dt;
    },1000);

