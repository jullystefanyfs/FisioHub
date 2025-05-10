document
  .getElementById("form-prontuario")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const paciente = document.getElementById("paciente").value;
    const diagnostico = document.getElementById("diagnostico").value;
    const tratamento = document.getElementById("tratamento").value;

    // dirceu integrar com a API para salvar o prontuário
    console.log("Prontuário enviado:", { paciente, diagnostico, tratamento });

    alert("Prontuário salvo com sucesso!");
    this.reset();
  });
