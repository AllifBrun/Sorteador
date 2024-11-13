const form = document.querySelector("form");
const sort = document.querySelector(".sort")
const checkbox = document.getElementById("switch")

const botao = document.querySelector("button");

const numbers = document.getElementById("numeros")
const start = document.getElementById("de")
const end = document.getElementById("ate")
const container = document.querySelector(".numeros-container")

const sorteio = document.getElementById("sorteio")

const novamente = document.querySelector("#novamente")

var switchToggle = 0;

botao.addEventListener('click', (e)=>{
    e.preventDefault()
    
var num = Number(numbers.value)
var s = Number(start.value)
var e = Number(end.value)




 var lista = gerar(num, s, e)

   console.log(lista)

   //continua pra proxima etapa
  
   sort.classList.add("none")
   sorteio.classList.remove("none")
   sorteio.classList.add("show")
    
   carimbarSequencial(lista);

})


// Removendo letras dos inputs
numbers.oninput = () =>{
    let value = numbers.value.replace(/\D/g, "")
    numbers.value = value

    if(numbers.value >= 5){
     numbers.value = ""
    }

}

start.oninput = () =>{
    let value = start.value.replace(/\D/g, "")
    start.value = value
}

end.oninput = () =>{
    let value = end.value.replace(/\D/g, "")
   end.value = value
}

// Função que retorna um Array com os números sorteados
var gerar = function(num, start, end){

    let qtd = [(num -1)]

    for(let i = 0; i<num; i++){

       let valor = randomNumber(start, end)
        qtd[i] = valor
        
    }
    
    if(switchToggle === 1 && new Set(qtd).size !== qtd.length){
    return gerar(num, start, end)

    }else{
        return qtd
    }

}



const randomNumber = (min, max) =>
    {
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand
}

function carimbarSequencial(lista) {
    let index = 0;

    function addNextNumber() {
        
        if (index < lista.length) {
            let divNum = document.createElement("div");
            divNum.classList.add("numeros-item");

            let num = document.createElement("span");
            num.textContent = lista[index];

            container.appendChild(divNum);
            divNum.appendChild(num);

            // Escuta o final da animação para adicionar o próximo número
            divNum.addEventListener("animationend", () => {
                index++;
                addNextNumber();

                
            });
       
        }else{
            teste()
        }
    }

    addNextNumber();
}

function checkboxStatus(){
    if(checkbox.checked){
        switchToggle = 1
    }
}

checkbox.addEventListener("change", ()=>{
    checkboxStatus()
    
})



function teste(){
    novamente.style.display = "flex"
    sorteio.classList.add("subir")
    sorteio.style.top = "25%"
    console.log("executado")

    novamente.addEventListener("click", ()=>{
        location.reload()
    })
}