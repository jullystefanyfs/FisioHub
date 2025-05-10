document.getElementById("config-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // requisição para a API real
  console.log("Alterações salvas:", { nome, email, senha });

  alert("Configurações atualizadas com sucesso!");
});
