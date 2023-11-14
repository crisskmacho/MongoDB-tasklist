const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectDB = require('./src/db');


const jobTaskRoutes = require('./src/routes/jobTaskRoutes');
const homeTaskRoutes = require('./src/routes/homeTaskRoutes');

require('dotenv').config();


const PORT = process.env.PORT;

//Middleware
app.use(express.json());


//Conectar la base de datos
connectDB();

//Rutas
app.use('/jobtasks', jobTaskRoutes);
app.use('/hometasks', homeTaskRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
  