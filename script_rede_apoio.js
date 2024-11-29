document.getElementById("filter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const specialty = document.getElementById("specialty").value;
    const location = document.getElementById("location").value;
  
    alert(`Filtrando por especialidade: ${specialty} e localização: ${location}`);
    // Adicione lógica de filtro aqui
  });
  
  const scheduleButtons = document.querySelectorAll(".schedule-button");
  scheduleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(`Agendamento solicitado para o profissional ID: ${button.dataset.id}`);
    });
  });
  