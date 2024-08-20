const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send("Hola mundo");
});

app.get('/colores/:color', (req, res) => {
  const color = req.body.nombreColor;
  res.send(`Bienvenido a la página del color ${color}`);
});

const PUERTO = 3001;

app.listen(PUERTO, () => {
  console.log('Servidor corriendo en puerto', PUERTO);
});