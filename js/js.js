//javascript for main page
function nameAlert(){
    var name = document.getElementById('name').value;
    console.log(name);
    if(name == ""){
        alert("Please input your character's name");
        return false;
    }
}

function saveData(){
    let username = document.getElementById('name').value;
    sessionStorage.setItem('name', username);
} 

// //javascript for game timer
// var initialTime =  10; // in seconds
// var timerVar;
// var currentTime;

// window.addEventListener('load', function(){
//     timerVar = setInterval(timer,1000);
// })

// function timer(){
//     saveTime();
//     console.log(initialTime);
//     var minutes = Math.floor(initialTime/60);
//     var seconds = initialTime - (minutes * 60);
//     currentTime = initialTime--;
//     if(minutes < 10)
//         minutes = "0"+minutes;
//     if(seconds < 10)
//         seconds = "0"+seconds;
//     if(initialTime <= 10)
//         document.querySelector('#timer').style.color = 'red';
//     if(initialTime >= 0){
//         document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
//     }else{
//         clearInterval(timerVar);
//         //window.location.replace("gameOver.html");
//     }

// }

// function saveTime(){
//     let timeRem = currentTime;
//     sessionStorage.setItem('timer', timeRem);
// }

//javascript for adrian's webpages
function litup(){
    var eqColor = document.querySelector('#equation');
    eqColor.style.color = "#9D00FF";
}

function falseChoice(){
    alert('Wrong answer!')
    return false;
}

function show(){
    document.getElementById('paper').style.display = "block";
    document.getElementById("btn").style.display = "none";
    document.getElementById("storyBox").style.display = "none";
    var qColor = document.querySelector('#question');
    qColor.style.color = "red";
}

function moveNextPG(){
    window.location.href='adrianRoom2.html';
}

function validateAns(){
    var ans = document.getElementById('codeInput').value;
    if(ans.toUpperCase() == 'CSC1030')
        setTimeout(window.location.href='lastRoom.html', 3000);
    else
        alert("You entered the wrong code!");
    
}


