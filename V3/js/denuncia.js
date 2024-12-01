document.getElementById('denuncia-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const feedback = document.getElementById('feedback');

    // Captura a data e hora no momento do envio
    const now = new Date();
    const dataHora = `${now.toLocaleDateString()} às ${now.toLocaleTimeString()}`;

    // Mostra feedback visual com data/hora
    feedback.textContent = `Denúncia enviada com sucesso em ${dataHora}!`;
    feedback.classList.remove('hidden');

    // Reseta o formulário
    this.reset();
});
