document.addEventListener("DOMContentLoaded", () => {
  const historicoContainer = document.getElementById("historico-consultas");

  fetch("http://localhost:3000/consultas/paciente/1") // Trocar ID dinamicamente depois
    .then((response) => response.json())
    .then((consultas) => {
      consultas.forEach((consulta) => {
        const div = document.createElement("div");
        div.classList.add("consulta");

        div.innerHTML = `
            <h3>Dr. ${consulta.nome_medico}</h3>
            <p>Data: ${new Date(consulta.data).toLocaleDateString()}</p>
            <p>Hora: ${consulta.horario}</p>
            <p>Status: ${consulta.status}</p>
          `;

        historicoContainer.appendChild(div);
      });
    })
    .catch((error) => {
      historicoContainer.innerHTML =
        "<p>Não foi possível carregar as consultas.</p>";
      console.error("Erro ao carregar histórico:", error);
    });
});
