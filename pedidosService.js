
async function getData() {
    const result = await fetch("http://localhost:3000/pedidos");
    const data = await result.json();

    const tabela = document.querySelector("#tabela");
    tabela.innerHTML = "";
    for (const item of data) {
        createTr(item);   
    }
}

async function getById(id) {
    const result = await fetch(`http://localhost:3000/pedidos/${id}`);
    const dados = await result.json();
    const cliente = document.querySelector("#cliente");
    const produto = document.querySelector("#produto");
    const valor = document.querySelector("#valor");
    const data = document.querySelector("#data");
    const idCampo = document.querySelector("#id");

    cliente.value = dados.cliente;
    produto.value =dados.produto;
    valor.value = dados.valor;
    data.value = dados.data;
    idCampo.value = dados.id;
}

async function deleteItem(id) {
 const result = await fetch(`http://localhost:3000/pedidos/${id}`, {
    method: "DELETE"
 });
 getData();
}

function createTr(entidade) {

    const tabela = document.querySelector("#tabela");

    //Monta a TR
    const tr = document.createElement('tr');
    tr.classList.add('hover:bg-slate-50');
    //Monta a coluna do ID
    const idTd = createTd(`#${entidade.id}`);
    idTd.classList.add("font-bold");
    idTd.classList.add("text-slate-950");
    tr.appendChild(idTd); // Adiciona a td a tr
    //Monta a td do nome
    const nomeTd = createTd(entidade.cliente);
    tr.appendChild(nomeTd); // Adiciona a td a tr

    //Monta a td do produto
    const produtoTd = createTd(entidade.produto);
    tr.appendChild(produtoTd); // Adiciona a td a tr
    
    //Monta a td do preco
    const precoTd = createTd(entidade.valor);
    precoTd.classList.add("font-semibold");
    tr.appendChild(precoTd); // Adiciona a td a tr
    
    //Monta a td do status
    const statusTd = createTd();
    const span = document.createElement('span'); //cria o span da tag
    span.innerHTML = entidade.status.label; //adiciona o label dela
    span.classList.add('px-4');
    span.classList.add('py-2');
    span.classList.add('text-sm');
    span.classList.add('font-bold');
    span.classList.add('rounded-full');
    span.classList.add(entidade.status.bgClass);
    span.classList.add(entidade.status.colorClass);
    statusTd.appendChild(span); // Coloca o span dentro da td
    tr.appendChild(statusTd); // Adiciona a td a tr

    //Monta a td da data
    const dataTd = createTd(entidade.data);
    dataTd.classList.add("text-slate-500");
    tr.appendChild(dataTd); // Adiciona a td a tr

    const actionTd = createTd();
    const button = document.createElement('button');
    button.innerText = "Editar";
    button.dataset.id = entidade.id;
    button.addEventListener("click", async (event) => {
       await getById(event.srcElement.dataset.id);
    })
    actionTd.appendChild(button);

    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = "Deletar";
    buttonDelete.classList.add("text-red-500");
    buttonDelete.classList.add("ml-4");
    buttonDelete.dataset.id = entidade.id;
    buttonDelete.addEventListener("click", async (event) => {
       await deleteItem(event.srcElement.dataset.id);
    })
    actionTd.appendChild(buttonDelete);
    tr.appendChild(actionTd); // Adiciona a td a tr

    tabela.appendChild(tr);
    
}

function createTd(value) {
    const td = document.createElement('td');
    td.classList.add('px-5');
    td.classList.add('py-4');
    if (value) {
      td.innerHTML = value;
    }
    return td;
}
