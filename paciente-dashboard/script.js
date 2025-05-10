// Ponto para integração com a API
document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Exemplo de requisição (descomente quando a API estiver pronta)
      // const res = await fetch('http://localhost:3000/consultas/paciente/ID');
      // const data = await res.json();
  
      // document.getElementById('consultasFuturas').textContent = `${data.futuras.length} consultas agendadas`;
      // document.getElementById('consultasRealizadas').textContent = `${data.realizadas.length} consultas realizadas`;
      // document.getElementById('medicosDisponiveis').textContent = `${data.medicos.length} médicos disponíveis`;
    } catch (error) {
      console.error('Erro ao carregar dados do paciente:', error);
    }
  });
  