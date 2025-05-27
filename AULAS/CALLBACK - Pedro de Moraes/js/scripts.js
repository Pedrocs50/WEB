let array  = [1, 2, 3.5, 4, 5];

for(let item of array)
    console.log(item);

array.forEach((el)=> {
    console.log(el);
}); // função de ordem superior, o foreac vai atribuir um elemente para cada interação

let array2 = array.map((el)=>{
    return el*2;
}); // o map voce pode alterar e atribuir um valor

console.dir(array);


