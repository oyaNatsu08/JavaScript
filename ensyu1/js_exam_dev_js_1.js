'use strict';

document.getElementById('edit').addEventListener('click', () => {
    const color = document.getElementById('color').value;
    const image = document.getElementById('image').value;

    switch (color) {
        case 'red':
            document.getElementById('text').textContent = 'red';
            document.getElementById('color-text').setAttribute('class', 'red');
            document.getElementById('color-img').setAttribute('class', 'red');
            break;
        case 'blue':
            document.getElementById('text').textContent = 'blue';
            document.getElementById('color-text').setAttribute('class', 'blue');
            document.getElementById('color-img').setAttribute('class', 'blue');
            break;
        case 'green':
            document.getElementById('text').textContent = 'green';
            document.getElementById('color-text').setAttribute('class', 'green');
            document.getElementById('color-img').setAttribute('class', 'green');
            break;
    }

    switch (image) {
        case 'cafe.jpg':
            document.getElementById('set-image').src = 'img/cafe.jpg';
            break;
        case 'cats.jpg':
            document.getElementById('set-image').src = 'img/cats.jpg';
            break;
        case 'line.jpg':
            document.getElementById('set-image').src = 'img/line.jpg';
            break;
    }
});