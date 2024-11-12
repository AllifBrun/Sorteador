const form = document.querySelector("form");
const botao = document.querySelector("button");

const numbers = document.getElementById("numeros")
const start = document.getElementById("de")
const end = document.getElementById("ate")


botao.addEventListener('click', (e)=>{
    e.preventDefault()
    
var num = Number(numbers.value)
var s = Number(start.value)
var e = Number(end.value)

 var lista = gerar(num, s, e)
   console.log(lista)

    carimbar(lista)
})


// Removendo letras dos inputs e limitando o número de caracteres para 4
numbers.oninput = () =>{
    let value = numbers.value.replace(/\D/g, "")
    numbers.value = value
}

start.oninput = () =>{
    let value = start.value.replace(/\D/g, "")
    start.value = value
}

end.oninput = () =>{
    let value = end.value.replace(/\D/g, "")
   end.value = value
}


var gerar = function(num, start, end){

    let qtd = [(num -1)]

    for(let i = 0; i<num; i++){

       let valor = randomNumber(start, end)
        qtd[i] = valor
        
    }
    return qtd

}



const randomNumber = (min, max) =>
    {
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand
}

//Colocando o valor gerado na página
const carimbar = (lista) =>{
    var num1 = document.create()
}

