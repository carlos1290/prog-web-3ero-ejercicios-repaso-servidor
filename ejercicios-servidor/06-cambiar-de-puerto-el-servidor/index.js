const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send("Hola mundo");
});

app.get('/:nombre', (req, res) => {
  const nombreUrl = req.params.nombre;
  res.send(`Tu nombre es ${nombreUrl}`);
});

const PUERTO = 3000;

app.listen(PUERTO);