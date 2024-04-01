import express from 'express';
import tempo from './api/tempo.js';
import path from 'path';

const app = express();

// Rota para retornar a data e hora atual
app.get('/datetime', tempo);

// Servindo arquivos estáticos na pasta 'public'
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// Porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
