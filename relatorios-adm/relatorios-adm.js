document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("http://localhost:3000/pacientes").then((res) => res.json()),
    fetch("http://localhost:3000/medicos").then((res) => res.json()),
    fetch("http://localhost:3000/consultas").then((res) => res.json()),
  ])
    .then(([pacientes, medicos, consultas]) => {
      document.getElementById("total-pacientes").textContent = pacientes.length;
      document.getElementById("total-medicos").textContent = medicos.length;
      document.getElementById("total-consultas").textContent = consultas.length;
    })
    .catch((err) => {
      console.error("Erro ao carregar dados dos relatórios:", err);
    });
});
