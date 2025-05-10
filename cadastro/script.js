document.getElementById("cadastroForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;
  
    try {
      const response = await fetch("https://multiplataformaetapa2-production.up.railway.app/pacientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha, telefone })
      });
  
      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "../login/index.html";
      } else {
        const data = await response.json();
        alert("Erro ao cadastrar: " + (data.message || "Tente novamente."));
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro na conexão com o servidor.");
    }
  });
  