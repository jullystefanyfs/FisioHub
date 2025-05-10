document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "../login/login.html";
});

// Aqui futuramente integrar com API
// Exemplo de simulação temporária para teste (remova ao integrar)
const users = [
  { nome: "Carlos", email: "carlos@teste.com", perfil: "Paciente" },
  { nome: "Dra. Ana", email: "ana@teste.com", perfil: "Médico" },
  { nome: "João ADM", email: "joao@teste.com", perfil: "Administrador" },
];

const tbody = document.getElementById("userList");

users.forEach((user) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${user.nome}</td>
    <td>${user.email}</td>
    <td>${user.perfil}</td>
    <td>
      <button class="acao">Editar</button>
      <button class="acao">Excluir</button>
    </td>
  `;
  tbody.appendChild(tr);
});
