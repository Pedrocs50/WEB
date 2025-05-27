/*
    Faça uma aplicação que mude a cor de fundo da página para as cores do arco-íris a cada 2 segundos. Mantenha em loop.
*/

const cores = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let index = 0;

let retornaPromessa = (cor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.background = cor;
      console.log(`Cor atual: ${cor}`);
      resolve("Cor aplicada!");
    }, 2000);
  });
};

let sincroniza = async () => {
  while (true) {
    await retornaPromessa(cores[index]);
    index = (index + 1) % cores.length; // é o operador módulo, que garante que index volte para zero
  }
};

sincroniza();