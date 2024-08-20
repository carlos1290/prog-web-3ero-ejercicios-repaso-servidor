const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send("Hola mundo");
});

app.get('/:nombre', (req, res) => {
  // <- Aquí va la linea de código que debes escribir
  res.send(`Tu nombre es ${_______}`);
});

app.listen(3000);