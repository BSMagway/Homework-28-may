let second = document.querySelector('#second');
let minute = document.querySelector('#minute');
let hour = document.querySelector('#hour');

let secondAngle = 0;
let minuteAngle = 0;
let hourAngle = 0;


setInterval(arrowMove, 1000);

function arrowMove() {
    secondAngle += 6;
    second.style.transform = `rotate(${secondAngle}deg)`;
    if (secondAngle == 360) {
        secondAngle = 0;
        minuteMove();
    }
}

function minuteMove() {
    minuteAngle += 6;
    minute.style.transform = `rotate(${minuteAngle}deg)`;
    if (minuteAngle == 360) {
        minuteAngle = 0;
        hourMove();
    }    
}

function hourMove() {
    hourAngle += 30;
    hour.style.transform = `rotate(${hourAngle}deg)`;
    if (hourAngle == 360) {
        hourAngle = 0;
    }
}