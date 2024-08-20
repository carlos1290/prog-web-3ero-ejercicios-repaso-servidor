const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send("Hola mundo");
});

app.get('/usuario/perfil', (_, res) => {
  res.send('Bienvenido a tu perfil');
});

app.get('/usuario/:nombreUsuario', (req, res) => {
  const nombreUsuario = req.params.nombreUsuario;
  res.send(`Bienvenido al perfil del usuario ${nombreUsuario}`);

  if (nombreUsuario === 'admin') {
    res.send('Bienvenido oh gran administrador');
  }
});

const PUERTO = 3001;

app.listen(PUERTO, () => {
  console.log('Servidor corriendo en puerto', PUERTO);
});