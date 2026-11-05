// //Para alterar algo preciso guardar a tag inteira

// //Pega o elemento pelo id
// const paragrafo = document.getElementById ("mensagem");
// //chamar o document para começar a manipular o html e "." para pegar um elemento

// const titulo = document.getElementById ("titulo");

// console.log (paragrafo);
// console.log (titulo);

// //textContent = lê e altera o texto, colocando "=" atribui um novo valor
// paragrafo.textContent = "O DOM permitiu que o JS me alterasse";
// paragrafo.style.color = "green";
// paragrafo.style.borderBottom = "2px solid pink" 

// const botao = document.getElementById ("btn-acao"); //id tem que ser igaulzinho ao que está no html
// console.log ("Tag do botão:" + botao.tagName)


//Por TAG - 
// querySelector -> pega o primeiro que aparece e não roda mais, NÃO USAR XXX Usar sempre um ID e uma classe
// const primeiroP = document.querySelector("p"); //seleciona qualquer coisa, o primeiro que achar com base no que você pediu
// primeiroP.style.backgroundColor = "orange";

// const alerta = document.querySelector(".alerta") //colocando o "." funciona como uma classe
// console.log ("Por Classe:" , alerta.textContent)

// const span = document.querySelector("#unico") //# para entender que é um id
// console.log (span);

// span.textContent = "Alterado pelo QuerySelector!"

// const pNoDiv = document.querySelector("div p") //chama primeiro a div
// pNoDiv.style.fontWeight = "bold";

// const itens = document.querySelectorAll(".item"); // . -> chamar uma classe
// console.log (itens);

// for (let i = 0; i < itens.length; i++) { //percorre lista, primeiro elemento do array é 0; (variavél, consdição pra passar no array, incremento)
//     console.log ("Item" + (i+1) + ": " + itens [i].textContent); //textContent = ler ou alterar o texto

//     if (i % 2 !== 0) { //ou seja, o resto da divisão é diferente de 0
//         itens[i].style.backgroundColor = "#ccc" //[i]= cada um dos elementos do array
//     } 
// };

// for (const item of itens){ //item da const itens
//     item.style.fontWeight = "bold"; //valor que é atribuído é sempre em aspas
// };

// itens.forEach((item, index) => { //forEach - só funciona quando tenho uma Node list
//     console.log (index + ": " + item.textContent); //textContent para ler e trazer a informação
// }) 


// const saudacao = document.getElementById("saudacao"); //chamar id = getElementById, cuidado para não colocar o nome do id diferente do html
// const nome = document.getElementById ("nome");
// const link = document.getElementById ("link");

// function mudarDados () { //não recebe nenhum dado
//     saudacao.textContent = "O conteúdo foi alterado ;)"; //aqui é um texto puro

//     nome.value = "Novo valor (Amanda)";
    
//     saudacao.innerHTML += '<p style=" color: blue;">Conteúdo injetado com innerHTML</p>' //innerHTML = tag nova para ser criada, += para somar ao que já tem 

//     link.setAttribute("href", "https://www.google.com"); //mudar um atributo, dizer qual o atributo, nesse caso o href
//     console.log (link.getAttribute("href"));

//     saudacao.classList.add("destaque"); //criar uma classe dentro da minha tag, essa classe deve já estar no meu CSS
// };

// document.getElementById("btn-mudar").addEventListener ("click", mudarDados); //rodar a função, de acordo com a ação que eu colocar


const lista = document.getElementById ("lista");

function adicionarItem (){

    const novoItem = document.createElement("li"); //primeira coisa que pego pra mexer no html -> document

    novoItem.textContent = "Novo Item às " + new Date ().toLocaleTimeString(); //new Date -> traz a data do computador 

    lista.appendChild(novoItem); //adicionar um novo conteúdo
}

function removerUltimo() {

    const ultimo = lista.lastElementChild; //tirar o último elemento que está na minha li, sempre guarda o último elemento que tiver

    if (ultimo) {
        lista.removeChild(ultimo);
        console.log ("Último item removido.");
    } else {
        console.log ("Lista vazia. Nada a remover.");
    }
}

document.getElementById("btn-add").addEventListener ("click", adicionarItem); //botão tem que ficar esperando uma ação
document.getElementById("btn-remover").addEventListener ("click", removerUltimo);  

