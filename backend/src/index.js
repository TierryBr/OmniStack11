const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors()) // Determina quem pode acessar a API, pode pasar origin: 'http://meusite.com'
app.use(express.json())

app.use(routes);


app.listen(3333)


