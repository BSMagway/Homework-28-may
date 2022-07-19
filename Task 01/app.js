let header = document.querySelectorAll('h1');
let paragraph = document.querySelectorAll('p');

for (let element of header) {
    element.classList.add('header');
}

for (let element of paragraph) {
    element.classList.add('paragraph');
}