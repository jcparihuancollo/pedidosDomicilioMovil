const express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');

const usuario = require('./Routes/Usuario');
const restaurante = require('./Routes/Restaurante');
const producto = require('./Routes/Producto');
const cliente = require('./Routes/Cliente');
const pedido = require('./Routes/Pedido');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/usuario', usuario);
app.use('/restaurante', restaurante);
app.use('/producto', producto);
app.use('/cliente', cliente);
app.use('/pedido', pedido);

app.listen(process.env.PORT || 8081, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});


