let paragraphs = document.querySelectorAll('p');

for (let element of paragraphs) {
    let random = Math.random();
    if (random < 0.33) {
        element.classList.add('red');
    } else if (random < 0.66) {
        element.classList.add('green');
    } else {
        element.classList.add('yellow');
    }
}