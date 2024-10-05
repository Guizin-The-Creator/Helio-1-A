const express = require('express'); // Importa o Express
const RouterHora = require('./router/RouterHora'); // Importa o RouterHora
const app = express(); // Recupera uma instância do Express
const portaServico = 3000; // Define a porta do servidor

app.use(express.json()); // Middleware para habilitar o parsing de JSON no corpo das requisições

// Cria uma instância do roteador de horas
const roteadorHora = new RouterHora();
// Rota: /horas
app.use('/horas', roteadorHora.criarRotasHora()); // Associa o roteador às rotas

// Inicia o servidor
app.listen(portaServico, () => {
    console.log(`API rodando no endereço: http://localhost:${portaServico}/`);
});
