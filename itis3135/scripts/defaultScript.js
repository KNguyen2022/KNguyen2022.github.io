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

function randomName(){
    var ranChoice = Math.floor(Math.random()*5);
    let ranName="";
    switch(ranChoice){
        case(0):
            ranName = "Gundam Barbatos";
            document.getElementById("ranName").innerHTML = ranName;
        break;
        case(1):
            ranName = "Iron Giant";
            document.getElementById("ranName").innerHTML = ranName;
        break;
        case(2):
            ranName = "Astro Boy";
            document.getElementById("ranName").innerHTML = ranName;
        break;
        case(3):
            ranName = "Clank";
            document.getElementById("ranName").innerHTML = ranName;
        break;
        case(4):
            ranName = "R2-D2";
            document.getElementById("ranName").innerHTML = ranName;
        break;
        case(5):
            ranName = "Bumblebee";
            document.getElementById("ranName").innerHTML = ranName;
        break;
        case(6):
            ranName = "Wall-E";
            document.getElementById("ranName").innerHTML = ranName;
        break;
        case(7):
            ranName = "Optimus Prime";
            document.getElementById("ranName").innerHTML = ranName;
        break;
        case(8):
            ranName = "C3P0";
            document.getElementById("ranName").innerHTML = ranName;
        break;
        case(9):
            ranName = "T-800";
            document.getElementById("ranName").innerHTML = ranName;
        break;
    }
}

function squareNum(){
    let numInput = prompt("What number would you like to multiple by itself?");
    let num = numInput * numInput;
    document.getElementById("numSquared").innerHTML = num;
}