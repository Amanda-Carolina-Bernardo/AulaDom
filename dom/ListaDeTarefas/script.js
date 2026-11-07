const input = document.getElementById ("nova-tarefa");
const btnAdd = document.getElementById ("btn-add");
const lista = document.getElementById ("lista-tarefas");

function adicionarTarefa(){

    const texto = input.value.trim(); //trim = tirar espaços que tenham ficado no começo ou no fim, tirando caracteres vazios
    if (texto === "") { //sem valor no input, vem zerado -> tratar o erro
        alert ("Digite uma tarefa!")
        return; //parar a função aqui e volta para o input
    }

    const item = document.createElement ("li"); //quando precisar criar um elemento HTML -> createElement
    item.textContent = texto //texto que for colocado no input
    item.addEventListener("click", function(){
        item.classList.toggle("feita")  //atribuir uma classe -> class List
    });

    const btnRemover = document.createElement ("button");
    btnRemover.textContent = " X ";
    btnRemover.addEventListener ("click", function (e){  //e = especificando que estou clicando exatamente no botao
        
        e.stopPropagation(); //só vai funcionar o click do botão deletar e não o anterior

        item.remove();
    });

    item.appendChild (btnRemover); //colocar como um filho

    lista.appendChild (item); //item vai dentro da lista

    input.value = ""; //zerar o valor do input depois que clicar
    input.focus(); //quando esvaziar o input, cursor vai permanecer dentro do input
};

//AQUI É QUANDO ELA CLICA NO BOTÃO
btnAdd.addEventListener("click", adicionarTarefa); //quando clicar vai chamar a função adicionarTarefa

//AQUI É QUANDO ELA DIGITA E APERTA ENTER
input.addEventListener("keydown", function (e){  //keydown -> clicando no teclado ele já pega o que foi clicado, e -> representa cada tecla que for apertada
    
    if (e.key === "Enter") { //saber qual tecla foi selecionada
        adicionarTarefa();
    }
});
 