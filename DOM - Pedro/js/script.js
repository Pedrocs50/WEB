/*
    Faça um programa com 40 botões que alteram para sua cor de fundo e cor da borda para uma cor aleatória ao passar mouse sobre sua box. Caso seja um click do mouse, retira a cor.
*/

const buttons = document.querySelectorAll('#container button');

function randomColor() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    const bg = randomColor();
    const border = randomColor();
    const color = randomColor();
    button.style.color = color;
    button.style.backgroundColor = bg;
    button.style.borderColor = border;
  });

button.addEventListener('click', () => {
    button.style.color = "black"
    button.style.backgroundColor = '#eee';
    button.style.borderColor = 'transparent';
  });
});

