// Alert Message
function scriptTest(){
    alert("Hey my script is running");
}
// Welcome Message
function promptUser(){
    let nameInput = prompt("What is your name?");
    let emotionInput = prompt("How are you feeling?");
    let greeting = "Welcome " + nameInput + "!";
    document.getElementById("greeting").innerHTML = greeting;
    let greetMsg = "KNTech Welcomes you, " + nameInput + "!\nWe're glad you are doing " + emotionInput + "!";
    document.getElementById("greetMsg").innerHTML = greetMsg;
}
// Incrementing Clock
function getTodaysDate(){
    const dt = new Date();
    document.getElementById("date-time").innerHTML = dt;
}
setInterval(getTodaysDate, 1000);
function displayToday(){
    var dt = new Date();
    let date = dt.toDateString();
    document.getElementById("day_of_week").innerHTML = date;
}
function randomName(){
    var ranChoice = Math.floor(Math.random()*9);
    let ranName="";
    switch(ranChoice){
        case(0):
            ranName = "Gundam Barbatos";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(1):
            ranName = "Iron Giant";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(2):
            ranName = "Astro Boy";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(3):
            ranName = "Clank";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(4):
            ranName = "R2-D2";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(5):
            ranName = "Bumblebee";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(6):
            ranName = "Wall-E";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(7):
            ranName = "Optimus Prime";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(8):
            ranName = "C3P0";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(9):
            ranName = "T-800";
            document.getElementById("random_name").innerHTML = ranName;
        break;random_name
    }
}

function squareNum(){
    let numInput = prompt("What number would you like to multiple by itself?");
    let num = numInput * numInput;
    document.getElementById("number_squared").innerHTML = num;
}

function randInsult(){
    var ranChoice = Math.floor(Math.random()*9);
    let insult="";
    switch(ranChoice){
        case(0):
            insult = "Silence is the best answer for a fool.";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(1):
            insult = "Your birth certificate is an apology letter from the condom factory.";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(2):
            insult = "You're so fake, Barbie is jealous.";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(3):
            insult = "You are so dumb, people mistaken your brain as a ball.";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(4):
            insult = "Brains aren't everything. In your case they're nothing.";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(5):
            insult = "Your family tree must be a cactus because everybody on it is a prick.";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(6):
            insult = "You, sir, are an oxygen thief!";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(7):
            insult = "If ugly were a crime, you'd get a life sentence.";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(8):
            insult = "Keep rolling your eyes, perhaps you'll find a brain back there.";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(9):
            insult = "There is no vaccine against stupidity.";
            document.getElementById("insult").innerHTML = insult;
        break;
    }
}

function randFact(){
    var ranChoice = Math.floor(Math.random()*9);
    let fact="";
    switch(ranChoice){
        case(0):
            fact = "The word technology was coined in 330 BC by the one and only Aristotle.";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(1):
            fact = "Motorola produced the first-ever portable mobile phone";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(2):
            fact = "Facebook was originally a directory of freshmen with their names and pictures.";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(3):
            fact = "The 'fox' in the Mozilla Firefox logo is a red panda.";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(4):
            fact = "The first computer virus was named 'Creeper'.";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(5):
            fact = "The word “robot” originated from a Czech word that means “forced labor.” ";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(6):
            fact = "The intense fear or dislike of new technology is called technophobia.";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(7):
            fact = "Every iPhone advertisement has the time set to 9:41.";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(8):
            fact = "The QWERTY keyboard was designed to slow you down.";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(9):
            fact = "Google's First Tweet was in binary.";
            document.getElementById("fact").innerHTML = fact;
        break;
    }
}