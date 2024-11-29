// Exemplo de dados de vagas (simulado para fins de protótipo)
const vagas = [
    {
        id: 1,
        titulo: "Desenvolvedor Front-End",
        empresa: "Tech Solutions",
        localizacao: "São Paulo, SP",
        link: "https://www.techsolutions.com/apply"
    },
    {
        id: 2,
        titulo: "Professor de Inglês",
        empresa: "Language School",
        localizacao: "Rio de Janeiro, RJ",
        link: "https://www.languageschool.com/careers"
    }
];

// Exemplo de histórico (salvo localmente para fins de demonstração)
const historico = JSON.parse(localStorage.getItem("historicoCandidaturas")) || [];

// Renderizar vagas na página
function renderizarVagas() {
    const vagasContainer = document.getElementById("vagas-container");
    vagasContainer.innerHTML = "";

    if (vagas.length === 0) {
        vagasContainer.innerHTML = "<p class='no-jobs'>Nenhuma vaga encontrada.</p>";
        return;
    }

    vagas.forEach((vaga) => {
        const vagaElement = document.createElement("div");
        vagaElement.className = "job-card";
        vagaElement.innerHTML = `
            <h4>${vaga.titulo}</h4>
            <p><strong>Empresa:</strong> ${vaga.empresa}</p>
            <p><strong>Localização:</strong> ${vaga.localizacao}</p>
            <a href="${vaga.link}" class="btn-primary" target="_blank">Candidate-se</a>
        `;
        vagasContainer.appendChild(vagaElement);
    });
}

// Renderizar histórico de candidaturas
function renderizarHistorico() {
    const historicoContainer = document.getElementById("historico-container");
    historicoContainer.innerHTML = "";

    if (historico.length === 0) {
        historicoContainer.innerHTML = "<p class='no-history'>Nenhuma candidatura enviada ainda.</p>";
        return;
    }

    historico.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `Vaga: ${item.titulo} - Empresa: ${item.empresa}`;
        historicoContainer.appendChild(li);
    });
}

// Salvar candidatura no histórico
function salvarHistorico(vaga) {
    historico.push(vaga);
    localStorage.setItem("historicoCandidaturas", JSON.stringify(historico));
}

// Simular envio de candidatura
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-primary") && e.target.textContent === "Candidate-se") {
        e.preventDefault();
        const vaga = vagas.find((v) => v.link === e.target.href);
        if (vaga) {
            salvarHistorico(vaga);
            alert(`Candidatura enviada para a vaga: ${vaga.titulo}`);
            renderizarHistorico();
        }
    }
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    renderizarVagas();
    renderizarHistorico();
});
