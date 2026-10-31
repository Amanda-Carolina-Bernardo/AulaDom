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
const primeiroP = document.querySelector("p"); //seleciona qualquer coisa, o primeiro que achar com base no que você pediu
primeiroP.style.backgroundColor = "orange";

const alerta = document.querySelector(".alerta") //colocando o "." funciona como uma classe
console.log ("Por Classe:" , alerta.textContent)

const span = document.querySelector("#unico") //# para entender que é um id
console.log (span);

span.textContent = "Alterado pelo QuerySelector!"

const pNoDiv = document.querySelector("div p") //chama primeiro a div
pNoDiv.style.fontWeight = "bold";
pNoDiv.style.color= "blue";
