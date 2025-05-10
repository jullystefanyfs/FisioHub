document.addEventListener("DOMContentLoaded", () => {
  const medicoSelect = document.getElementById("medico");
  const horarioSelect = document.getElementById("horario");
  const dataInput = document.getElementById("data");

  // Carrega médicos disponíveis (requisitar da API)
  fetch("http://localhost:3000/medicos")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((medico) => {
        const option = document.createElement("option");
        option.value = medico.id;
        option.textContent = medico.nome;
        medicoSelect.appendChild(option);
      });
    });

  // Atualiza horários disponíveis ao escolher um médico e data
  dataInput.addEventListener("change", loadHorarios);
  medicoSelect.addEventListener("change", loadHorarios);

  function loadHorarios() {
    const medicoId = medicoSelect.value;
    const dataSelecionada = dataInput.value;

    if (!medicoId || !dataSelecionada) return;

    fetch(
      `http://localhost:3000/disponibilidade?medicoId=${medicoId}&data=${dataSelecionada}`
    )
      .then((res) => res.json())
      .then((horarios) => {
        horarioSelect.innerHTML = "";
        horarios.forEach((horario) => {
          const option = document.createElement("option");
          option.value = horario;
          option.textContent = horario;
          horarioSelect.appendChild(option);
        });
      });
  }

  document
    .getElementById("agendamentoForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const dados = {
        medicoId: medicoSelect.value,
        data: dataInput.value,
        horario: horarioSelect.value,
      };

      fetch("http://localhost:3000/agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      }).then((res) => {
        if (res.ok) {
          alert("Consulta agendada com sucesso!");
          window.location.href = "../paciente-dashboard/dashboard.html";
        } else {
          alert("Erro ao agendar consulta.");
        }
      });
    });
});
