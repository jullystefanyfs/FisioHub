document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/consultas")
    .then((res) => res.json())
    .then((dados) => {
      const tbody = document.querySelector("#tabela-consultas tbody");
      tbody.innerHTML = "";

      dados.forEach((consulta) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>${consulta.id}</td>
          <td>${consulta.paciente_nome}</td>
          <td>${consulta.medico_nome}</td>
          <td>${consulta.data}</td>
          <td>${consulta.hora}</td>
          <td>${consulta.status}</td>
        `;

        tbody.appendChild(tr);
      });
    })
    .catch((err) => {
      console.error("Erro ao carregar consultas:", err);
    });
});
