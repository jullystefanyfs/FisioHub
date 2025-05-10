document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "../login/login.html"; // Caminho relativo corrigido
});
