const form = document.querySelector("#form");

form.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const cliente = document.querySelector("#cliente");
    const produto = document.querySelector("#produto");
    const valor = document.querySelector("#valor");
    const data = document.querySelector("#data");
    const id = document.querySelector("#id");

    const entidade = {
      "cliente": cliente.value,
      "produto": produto.value,
      "valor": valor.value,
      "status": {
        "colorClass": "text-emerald-800",
        "bgClass": "bg-emerald-100",
        "label": "Pago"
      },
      "data": data.value
    };
    let url = "http://localhost:3000/pedidos";
    let method = "POST";

    if (id.value) {
        method = "PUT";
        url = `${url}/${id.value}`;
    }
    await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entidade)
    });
    
    cliente.value = "";
    produto.value = "";
    valor.value = "";
    data.value = "";
    id.value = "";

    getData();
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