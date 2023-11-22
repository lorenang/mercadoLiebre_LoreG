const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.get('/crearcuenta', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'crearcuenta.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`click para dirigirte al sitio: http://localhost:${PORT}/`);
});
