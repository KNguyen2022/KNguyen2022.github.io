// Validates Entry
function validateEntry(){
    // Ask user for input
    let input= prompt("Please enter the amount of sides from 0-10:");
    // Convert words to number
    let numSides = parseInt(input);
    // Check if userInput is within number range
    if(numSides>=0 && numSides <11){
        getShape(numSides); // Runs getShape function
    }
    else{
        alert("You did not enter a number within the range of 0-10"); // Message telling user the input is not within range
    }
}
// Takes in userInput and outputs polygon sides
function getShape(numSides){
    switch(numSides){
        case(1):
            polygonOutput = "Henagon has 1 side";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;        
        break;
        case(2):
            polygonOutput = "Digon has 2 sides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
        break;
        case(3):
            polygonOutput = "Trigon has 3 sides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
        break;
        case(4):
            polygonOutput = "Tetragon has 4 sides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
        break;
        case(5):
            polygonOutput = "Pentagon has 5 sides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
        break;
        case(6):
            polygonOutput = "Hexagon has 6 sides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
        break;
        case(7):
            polygonOutput = "Heptagon has 7 sides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
        break;
        case(8):
            polygonOutput = "Octagon has 8 sides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
        break;
        case(9):
            polygonOutput = "Enneagon has 9 sides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
        break;
        case(10):
            polygonOutput = "Decagon has 10 ides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
        break;
        default:
            polygonOutput = "Polygon has 0 sides";
            document.getElementById("polygonOutput").innerHTML = polygonOutput;
    }
}