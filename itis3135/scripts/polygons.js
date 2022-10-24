function validateEntry(){
    let numSides = document.getElementByID("userNumInput");
    if(numSides<=0 && numSides >=10){
        getShape();
    }
    else{
        alert("You did not enter a number within the range of 0-10")
    }
}
function getShape(){
    let numSidesChoice = document.getElementByID("userNumInput");
    switch(numSidesChoice){
        case(1):
            alert("Henagon has 1 Side");
        break;
        case(2):
            alert("Digon has 2 Side");
        break;
        case(3):
            alert("Trigon has 3 Side");
        break;
        case(4):
            alert("Tetragon has 4 Side");
        break;
        case(5):
            alert("Pentagon has 5 Side");
        break;
        case(6):
            alert("Hexagon has 6 Side");
        break;
        case(7):
            alert("Heptagon has 7 Side");
        break;
        case(8):
            alert("Octagon has 8 Side");
        break;
        case(9):
            alert("Enneagon has 9 Side");
        break;
        case(10):
            alert("Decagon has 10 Side");
        break;
        default:
            alert("Polygon has 0 sides");
    }
}