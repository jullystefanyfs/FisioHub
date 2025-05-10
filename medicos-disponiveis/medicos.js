document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-medicos");

  fetch("http://localhost:3000/medicos")
    .then((response) => response.json())
    .then((medicos) => {
      medicos.forEach((medico) => {
        const div = document.createElement("div");
        div.classList.add("medico");

        div.innerHTML = `
            <h3>${medico.nome}</h3>
            <p>Especialidade: ${medico.especialidade}</p>
            <p>CRM: ${medico.crm}</p>
          `;

        lista.appendChild(div);
      });
    })
    .catch((error) => {
      lista.innerHTML = "<p>Erro ao carregar os médicos.</p>";
      console.error("Erro:", error);
    });
});
