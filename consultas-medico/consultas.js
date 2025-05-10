// Exemplo de integração futura com backend (dados reais)
// container preparado para receber via API
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("consultas-container");

  // Simulando uma futura chamada a API
  fetch("http://localhost:3000/consultas") // rota do backend
    .then((res) => res.json())
    .then((data) => {
      data.forEach((consulta) => {
        const div = document.createElement("div");
        div.className = "consulta";
        div.innerHTML = `
            <p><strong>Paciente:</strong> ${consulta.nomePaciente}</p>
            <p><strong>Data:</strong> ${consulta.data}</p>
            <p><strong>Horário:</strong> ${consulta.horario}</p>
          `;
        container.appendChild(div);
      });
    })
    .catch((err) => {
      container.innerHTML = "<p>Não foi possível carregar as consultas.</p>";
    });
});
