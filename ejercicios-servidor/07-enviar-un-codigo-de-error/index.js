const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send("Hola mundo");

  console.log('Ruta GET / usada, código de respuesta:', res.statusCode);
});

app.get('/error', (_, res) => {
  // Cambia el código de respuesta a 404
  res.status(___).send('Error 404: No encontrado');

  console.log('Ruta GET /error usada, código de respuesta:', res.statusCode);
})

app.get('/:nombre', (req, res) => {
  const nombreUrl = req.params.nombre;
  res.send(`Tu nombre es ${nombreUrl}`);

  console.log('Ruta GET /:nombre usada, código de respuesta:', res.statusCode);
});

const PUERTO = 3001;

app.listen(PUERTO);