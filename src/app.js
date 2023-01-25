const express = require('express');
const app = express();
const sequelize = require('sequelize');
const {port,callback} = require('./modules/port')

app.listen(port,callback )

// app.use
app.use(express.urlencoded({extended:false}));
app.use("/padres",require('./routes/padres.routes'))
app.use( "/hijos", require ('./routes/hijos.routes'))
app.use( "/mensajes", require ('./routes/mensajes.routes'))