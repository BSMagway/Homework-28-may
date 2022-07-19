let box = document.querySelectorAll('div>div');

for (let element of box) {
    element.style.width = getRandomIntInclusive(1, 300) + 'px';
    element.style.height = getRandomIntInclusive(1, 300) + 'px';
}

setTimeout(changeSize, 3000, 0);
setTimeout(changeSize, 5000, 1);
setTimeout(changeSize, 6000, 2);











function changeSize(index) {
    let compStyle = getComputedStyle(box[index]);
    let width = compStyle.width;
    let height = compStyle.height;

    box[index].style.width = height;
    box[index].style.height = width;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}