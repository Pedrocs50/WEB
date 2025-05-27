setTimeout(()=> {
    console.log("Executou!")
}, 3000);

setInterval(()=> {
    console.log("Intervalo!!")
}, 3000);

// executa os ambos ao mesmo tempo (em paralelo), são assincronas.
