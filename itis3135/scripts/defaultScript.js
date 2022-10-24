function scriptTest(){
    alert("Hey my script is running");
}

function dateAndTime(){
    setInterval(() =>{
    var dt = new Date();
    document.getElementById('date-time').innerHTML=dt;
    },1000);
}
