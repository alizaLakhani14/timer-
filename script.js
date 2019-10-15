let hrs = document.querySelector('.hours');
let mins = document.querySelector('.minutes');
let secs = document.querySelector('.seconds');
let timer;
let isWorking = true;
const sound = new Audio("success.wav");
const tickTock = new Audio("ticktock.wav");

function timerFunction() {
	if (hrs.value == 0 && mins.value == 0 && secs.value == 0) {
		timesUp();
	} else {
		if (secs.value == 0) {
			if (mins.value == 0) {
				mins.value = 59;
				hrs.value--;
			} else {
				secs.value = 59;
				mins.value--;
			}
		} else {
			secs.value--;
			tickTock.play();
		}
	}
	
	if(secs.value > 59 || mins.value > 59 ){
		location.reload();
	}
}

function timesUp() {
	clearInterval(timer);
	isWorking = true;
	sound.play();
}

function startTimer() {
	if (isWorking == true) {
		timer = setInterval(timerFunction, 1000);
	}
	isWorking = false;
}

function resetTimer() {
    location.reload();
}

document.getElementById("eggs").addEventListener("click", () =>{
    hrs.value =0;
    mins.value = 10;
    secs.value = 0;
    startTimer();
});
document.getElementById("mask").addEventListener("click", () =>{
    hrs.value =0;
    mins.value = 15;
    secs.value = 0;
    startTimer();
});
document.getElementById("nap").addEventListener("click", () =>{
    hrs.value =0;
    mins.value = 45;
    secs.value = 0;
    startTimer();
});
