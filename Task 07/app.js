
let red = document.querySelector('.redDiv');
let yellow = document.querySelector('.yellowDiv');
let green = document.querySelector('.greenDiv');

ryg();
setInterval(ryg, 18000);


function changeColor(color) {
    if (color == 'red') {
        red.classList.toggle('red');
    } else if (color == 'yellow') {
        yellow.classList.toggle('yellow');
    } else {
        green.classList.toggle('green');
    }
}
function ryg() {
    for (let i = 1; i <= 18; i++) {
        if (i < 7) {
            setTimeout(changeColor, (i * 1000), 'red');
        } else if (i < 13) {
            setTimeout(changeColor, (i * 1000), 'yellow');
        } else {
            setTimeout(changeColor, (i * 1000), 'green');
        }
    }
}