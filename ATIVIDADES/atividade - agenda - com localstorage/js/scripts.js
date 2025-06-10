/*
    Crie uma aplicação de gerenciamento de eventos de uma agenda.
    A aplicação deve permitir cadastrar, listar, editar e excluir eventos com atributos:
    - data e hora;
    - local
    - título
*/

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

document.getElementById("form-tarefa").addEventListener("submit", function (e) {
  e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const datahora = document.getElementById("datahora").value;

const novaTarefa = {
    id: Date.now(),
    titulo,
    descricao,
    datahora,
    feito: false
};


  tarefas.push(novaTarefa);
  renderizarTarefas();
  this.reset();
});

function renderizarTarefas() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";

  tarefas.map((tarefa) => {
    const div = document.createElement("div");
    div.className = "tarefa";

    div.innerHTML = `
      <div>
        <strong>${tarefa.titulo}</strong>
        <span>${tarefa.descricao}</span>
        <span>Data/Hora: ${new Date(tarefa.datahora).toLocaleString('pt-BR')}</span>

      </div>
      <div class="botoes">
        <button onclick="editarTarefa(${tarefa.id})">Editar</button>
        <button onclick="excluirTarefa(${tarefa.id})">Excluir</button>
      </div>
    `;
    lista.appendChild(div);
  });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function editarTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    const novoTitulo = prompt("Novo título:", tarefa.titulo);
    const novaDescricao = prompt("Nova descrição:", tarefa.descricao);
    const novaDatahora = prompt("Nova data e hora:", tarefa.datahora);

    tarefas = tarefas.map(t =>
        t.id === id ? {...t, 
            titulo: novoTitulo, 
            descricao: novaDescricao, 
            datahora: novaDatahora
        } : t
  );

  renderizarTarefas();
}

function excluirTarefa(id) {
  tarefas = tarefas.filter(t => t.id !== id);
  renderizarTarefas();
}

window.addEventListener("load", function () {
  tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  renderizarTarefas();
});