/*
    Faça uma aplicação que mude a cor de fundo da página para as cores do arco-íris a cada 2 segundos. Mantenha em loop.
*/

let retornaPromessa = (ordem)=> {
    return new Promise((resolve, reject)=>{ //utilizamos o reject para tratar as funções assíncronas
        setTimeout(()=> {
            console.log(ordem)
            resolve("Promessa cumprimda!");
        }, 2000);
    });
}

// async function sincroniza(){

// }

let sincroniza = async()=>{
    await retornaPromessa("Primeiro!");
    await retornaPromessa("Segundo!");
    await retornaPromessa("Terceiro!");
}

sincroniza();