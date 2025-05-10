async function gerarRelatorio(tipo) {
  const resultado = document.getElementById("relatorio-resultado");
  resultado.innerHTML = "<p>Carregando relatório...</p>";

  try {
    const response = await fetch(`http://localhost:3000/relatorios/${tipo}`); // ajustar a rota conforme backend
    const data = await response.json();

    // Exibe JSON formatado
    resultado.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    resultado.innerHTML = "<p>Erro ao gerar relatório.</p>";
    console.error("Erro:", error);
  }
}
