//Ex 1:
/*
const titulo = document.querySelector('#titulo');
const botao = document.querySelector("#botao");

console.log(titulo);

//titulo.innerHTML = "Banana";
document.querySelector('#titulo').innerHTML = "Oi";
titulo.style.color = "blue";
console.log(botao);
*/

//ex 2 
/*
function trocarNome() {
    const titulo = document.querySelector('#titulo');
    let nome = prompt("Digite seu nome");
    titulo.innerHTML = nome;
}

const botao = document.querySelector("#botao");
botao.addEventListener("click", trocarNome)
*/

//ex 3
const botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
    document.querySelector('#modal').classList.add('active');
});

document.querySelector("#close").addEventListener("click", ()=> {
    document.querySelector('#modal').classList.remove('active');
})

//ex 4 - Criando elemento
const ul = document.createElement('ul');
ul.id = "lista";
document.querySelector('body').appendChild(ul);

document.querySelector('#add').addEventListener("click", () => {
    let nome = prompt("Digita o nome");
    const li = document.createElement('li');
    li.innerHTML = nome;
    li.classList.add('red');
    ul.appendChild(li);
})

