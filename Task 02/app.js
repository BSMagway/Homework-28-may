let header = document.querySelectorAll('h1');
let paragraph = document.querySelectorAll('p');

for (let element of header) {
    element.classList.add('red');
}

for (let element of paragraph) {
    element.classList.add('blue');
}

setTimeout(changeColor, 2000);

function changeColor() {
    for (let element of header) {
        element.classList.replace('red', 'blue');
    }

    for (let element of paragraph) {
        element.classList.replace('blue', 'red');
    }
}