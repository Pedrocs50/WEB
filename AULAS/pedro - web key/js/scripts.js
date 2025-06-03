/*
    Mova o único botão da página com as setas do teclado.
*/

let player = document.querySelector('.player');
let moveBy = 10;

window.addEventListener('load', () => {
    player.style.position = 'absolute';
    player.style.left = '0px';
    player.style.top = '0px';
});

window.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            player.style.left = (parseInt(player.style.left) - moveBy) + 'px';
            break;
        case 'ArrowRight':
            player.style.left = (parseInt(player.style.left) + moveBy) + 'px';
            break;
        case 'ArrowUp':
            player.style.top = (parseInt(player.style.top) - moveBy) + 'px';
            break;
        case 'ArrowDown':
            player.style.top = (parseInt(player.style.top) + moveBy) + 'px';
            break;
    }
});

/*
let player = document.querySelector('.player');
let moveBy = 5;
let interval = null;
let currentKey = null;

player.style.position = 'absolute';
player.style.left = '0px';
player.style.top = '0px';

function movePlayer(key) {
    let left = parseInt(player.style.left) || 0;
    let top = parseInt(player.style.top) || 0;

    switch(key) {
        case 'ArrowLeft':
            player.style.left = (left - moveBy) + 'px';
            break;
        case 'ArrowRight':
            player.style.left = (left + moveBy) + 'px';
            break;
        case 'ArrowUp':
            player.style.top = (top - moveBy) + 'px';
            break;
        case 'ArrowDown':
            player.style.top = (top + moveBy) + 'px';
            break;
    }
}

// Quando a tecla for pressionada, começa a mover
window.addEventListener('keydown', (e) => {
    if (e.key.startsWith('Arrow') && currentKey !== e.key) {
        currentKey = e.key;
        clearInterval(interval); // Evita múltiplos intervalos
        interval = setInterval(() => movePlayer(currentKey), 30); // Move a cada 30ms
    }
});

// Quando a tecla for solta, para o movimento
window.addEventListener('keyup', (e) => {
    if (e.key === currentKey) {
        clearInterval(interval);
        currentKey = null;
    }
});

*/