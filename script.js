const displayTimerInput = document.getElementById("displaytimer-input");

const displayTimeCountDown = document.getElementById("timer");

const startButton = document.querySelector("button");

let countdown = "";

startButton.addEventListener("click", () => {
    let time = parseInt(displayTimerInput.value);
    console.log(`Time : ${time}`);
    if(isNaN(time) || time <= 0 ) {
        alert("Please give me a Real Number");
        return;
    }
    updateTimerDisplay(time);
    clearInterval(countdown);
    displayTimerInput.value = ""
    countdown = setInterval(() => {
        time--;
        updateTimerDisplay(time);
        if(time <= 0) {
            clearInterval(countdown);
            displayTimeCountDown.textContent = "Time's up!";
        }
    },1000);

    function updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        displayTimeCountDown.textContent = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2,"0")}`;
    }
});