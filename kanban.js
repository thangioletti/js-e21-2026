function loadData() {
  const tarefa = {
    titulo: "Tarefa",
    descricao: "Base para usar map e renderizar linhas automaticamente.",
    dono: "Diego",
    prazo: "2 dias",
  };

  const data = [
    {
      name: "A Fazer",
      items: [tarefa, tarefa, tarefa],
    },
    {
      name: "Fazendo",
      items: [tarefa, tarefa, tarefa],
    },
    {
      name: "Feito",
      items: [tarefa, tarefa, tarefa],
    },
  ];

  for (const lane of data) {
    createLane(lane.name, lane.items);
  }
}
function createLane(nome, items) {
  const container = document.querySelector("#container");

  const article = document.createElement("article");
  article.classList.add("rounded-lg");
  article.classList.add("border");
  article.classList.add("border-slate-200");
  article.classList.add("bg-white");

  const header = document.createElement("div");
  header.classList.add("flex");
  header.classList.add("items-center");
  header.classList.add("justify-between");
  header.classList.add("border-b");
  header.classList.add("border-slate-200");
  header.classList.add("px-4");
  header.classList.add("py-3");

  const h2 = document.createElement("h2");
  h2.classList.add("font-bold");
  h2.classList.add("text-slate-950");
  h2.innerHTML = nome;

  header.appendChild(h2);
  article.appendChild(header);

  const cardContainer = document.createElement("div");
  cardContainer.className = "space-y-3 p-4";
  article.appendChild(cardContainer);

  for (const item of items) {
    createCard(cardContainer, item);
  }
  container.appendChild(article);
}

function createCard(container, item) {
  

  const card = document.createElement("div");
  card.className = "rounded-lg border border-slate-200 bg-slate-50 p-4";

  // Header
  const header = document.createElement("div");
  header.className = "flex items-start justify-between gap-3";

  const title = document.createElement("h3");
  title.className = "font-bold";
  title.textContent = item.titulo;

  const badge = document.createElement("span");
  badge.className =
    "rounded bg-teal-100 px-2 py-1 text-xs font-bold text-teal-800";
  badge.textContent = "HTML";

  header.appendChild(title);
  header.appendChild(badge);

  // Descrição
  const description = document.createElement("p");
  description.className = "mt-2 text-sm text-slate-600";
  description.textContent = item.descricao;

  // Footer
  const footer = document.createElement("div");
  footer.className = "mt-4 flex items-center justify-between text-sm";

  const author = document.createElement("span");
  author.className = "font-medium text-slate-700";
  author.textContent = item.dono;

  const date = document.createElement("span");
  date.className = "text-slate-500";
  date.textContent = item.prazo;

  footer.appendChild(author);
  footer.appendChild(date);

  // Montagem final
  card.appendChild(header);
  card.appendChild(description);
  card.appendChild(footer);

  container.appendChild(card);
  // Adiciona ao documento
}
loadData();
