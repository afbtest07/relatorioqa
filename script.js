let userStories = [];
let bugs = [];

// Função para alternar entre as abas
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function adicionarUserStory() {
  const userStory = document.getElementById("userStory").value;
  const data = document.getElementById("dataUserStory").value;
  const projeto = document.getElementById("projeto").value;
  const motivo = document.getElementById("motivo").value;
  const status = document.getElementById("status").value;

  if (!userStory || !motivo) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  userStories.push({ userStory, data, projeto, motivo, status });
  alert("User Story adicionada com sucesso!");

  document.getElementById("userStory").value = "";
  document.getElementById("dataUserStory").value = "";
  document.getElementById("motivo").value = "";
  document.getElementById("status").value = "Impedimento";
}

function adicionarBug() {
  const bugTitle = document.getElementById("bugTitle").value;
  const projeto = document.getElementById("projetoBug").value;
  const descricao = document.getElementById("descricaoBug").value;
  const idUS = document.getElementById("idUS").value;
  const sprint = document.getElementById("sprint").value;
  const prioridade = document.getElementById("prioridadeBug").value;
  const ambiente = document.getElementById("ambienteBug").value;

  if (!bugTitle || !descricao) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  bugs.push({ bugTitle, projeto, descricao, idUS, sprint, prioridade, ambiente });
  alert("Bug adicionado com sucesso!");

  document.getElementById("bugTitle").value = "";
  document.getElementById("descricaoBug").value = "";
  document.getElementById("idUS").value = "";
  document.getElementById("sprint").value = "";
}

function gerarRelatorioFinal() {
  const wb = XLSX.utils.book_new();

  const wsUserStories = XLSX.utils.json_to_sheet(userStories);
  XLSX.utils.book_append_sheet(wb, wsUserStories, "User Stories");

  const wsBugs = XLSX.utils.json_to_sheet(bugs);
  XLSX.utils.book_append_sheet(wb, wsBugs, "Bugs");

  XLSX.writeFile(wb, "relatorio_final.xlsx");
}
