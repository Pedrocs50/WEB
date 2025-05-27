// document.body.style.backgroundColor = "lightgreen"

// document.body.style.color = "red"

// let h1 = document.getElementById("titulo1");

// h1.style.backgroundColor = "green";


// Query Selector e o queryselectorall obtém o primeiro elemento HTML que combina com o seletor do pâmetro.
// let parArray = document.querySelectorAll(".paragrafo");

// parArray[0].style.backgroundColor = "red";
// parArray[1].style.backgroundColor = "green";
// parArray[2].style.backgroundColor = "blue";



// console.log(parArray)

function changeColor(){
    let parArray = document.querySelectorAll(".paragrafo");

    parArray[0].style.backgroundColor = "red";
    parArray[1].style.backgroundColor = "green";
    parArray[2].style.backgroundColor = "blue";

    console.log(parArray)
}

let bt1 = document.querySelector('button');
bt1.addEventListener('click', ()=>{
    changeColor();
});

