// Salvar Dados Pessoais
document.getElementById("form-dados-pessoais").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Dados pessoais atualizados com sucesso!");
});

// Salvar Preferências de Notificação
document.getElementById("form-notificacoes").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Preferências de notificação salvas com sucesso!");
});

// Aplicar Tema
document.getElementById("form-tema").addEventListener("submit", function (e) {
    e.preventDefault();
    const tema = document.querySelector('input[name="tema"]:checked').value;
    document.body.className = tema === "escuro" ? "dark-theme" : "";
    alert(`Tema ${tema} aplicado com sucesso!`);
});

// Salvar Configurações de Segurança
document.getElementById("form-seguranca").addEventListener("submit", function (e) {
    e.preventDefault();
    const senhaAtual = document.getElementById("senha-atual").value;
    const novaSenha = document.getElementById("nova-senha").value;

    if (novaSenha.length < 6) {
        alert("A nova senha deve ter pelo menos 6 caracteres.");
        return;
    }

    alert("Configurações de segurança atualizadas com sucesso!");
});
