document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    fetch("https://multiplataformaetapa2-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token && data.tipo) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("tipo", data.tipo);
  
          switch (data.tipo) {
            case "paciente":
              window.location.href = "../dashboard-paciente/index.html";
              break;
            case "medico":
              window.location.href = "../dashboard-medico/index.html";
              break;
            case "adm":
              window.location.href = "../dashboard-adm/index.html";
              break;
            default:
              alert("Tipo de usuário não reconhecido.");
          }
        } else {
          alert("Credenciais inválidas.");
        }
      })
      .catch(error => {
        console.error("Erro ao fazer login:", error);
        alert("Erro no servidor.");
      });
  });
  