const timerDisplay = document.querySelector(".timerDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;
let intervalId;

startBtn.addEventListener("click", () => {

    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});


pauseBtn.addEventListener("click", () => {

    if(!paused){
        paused = true;
        clearInterval(intervalId);
    }
});

resetBtn.addEventListener("click", () => {

    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timerDisplay.textContent = "00:00:00";
});

function updateTime(){

    elapsedTime = Date.now() - startTime;
    secs = update_unit(Math.floor((elapsedTime / 1000) % 60));
    mins = update_unit(Math.floor((elapsedTime / (1000 * 60)) % 60));
    hrs = update_unit(Math.floor((elapsedTime / (1000 * 60 * 60)) % 60));
    
    timerDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function update_unit(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
