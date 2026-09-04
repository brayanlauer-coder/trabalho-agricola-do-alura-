// Simula um sensor de umidade
const umidade = Math.floor(Math.random() * 81) + 10;

// Simula a temperatura
const temperatura = Math.floor(Math.random() * 16) + 20;

// Atualiza a porcentagem
document.getElementById("valorUmidade").textContent = umidade;
document.getElementById("umidadeInfo").textContent = umidade + "%";

// Atualiza a temperatura
document.getElementById("temperatura").textContent =
    temperatura + " °C";

// Atualiza a barra
const barra = document.getElementById("barraUmidade");
barra.style.width = umidade + "%";

// Atualiza o horário
const agora = new Date();

document.getElementById("ultimaLeitura").textContent =
    agora.toLocaleTimeString("pt-BR");

const status = document.getElementById("status");
const alerta = document.getElementById("alerta");

// Verifica a condição do solo
if (umidade < 40) {

    status.textContent = "🔴 Solo muito seco";
    status.style.color = "#d32f2f";

    barra.style.background = "#f44336";

    alerta.style.display = "block";

} else if (umidade < 60) {

    status.textContent = "🟡 Umidade moderada";
    status.style.color = "#f57c00";

    barra.style.background = "#ff9800";

    alerta.style.display = "none";

} else {

    status.textContent = "🟢 Solo com boa umidade";
    status.style.color = "#2e7d32";

    barra.style.background = "#2196f3";

    alerta.style.display = "none";
}
