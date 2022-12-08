// Alert Message
function scriptTest(){
    alert("Hey my script is running");
}
// Welcome Message
    let nameInput = prompt("What is your name?");
    let emotionInput = prompt("How are you feeling?");
    let greeting = "Welcome " + nameInput + "!";
    document.getElementById("greeting").innerHTML = greeting;
    let greetMsg = "KNTech Welcomes you, " + nameInput + "!\nWe're glad you are doing " + emotionInput + "!";
    document.getElementById("greetMsg").innerHTML = greetMsg;

// Incrementing Clock
    setInterval(() =>{
    var dt = new Date();
    document.getElementById("date-time").innerHTML=dt;
    },1000);

