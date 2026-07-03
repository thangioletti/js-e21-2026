function getData() {
    const entidade = {
        id: 12,
        cliente: "Tiago",
        produto: "Curso de C#",
        valor: "R$ 400,00",
        status: {
            colorClass: "text-emerald-800",
            bgClass: "bg-emerald-100",
            label: "Pago"
        },
        data: "02/07/2026"
    }

    const rows = [
        entidade,
        entidade,
        entidade,
        entidade,
        entidade,
        entidade
    ];


    for (const item of rows) {
        createTr(item);   
    }
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

const add = document.querySelector('#add');
add.addEventListener("click", () => {
    createTr(entidade);
});

getData();

/* 
//ex recursivo 
function mapRows(rows, index = 0) {
    if (index < rows.length) {
        createTr(rows[index]);
        setTimeout(() => {
            mapRows(rows, index+1); 
        }, 1000);
    }        
}

mapRows(rows);
*/