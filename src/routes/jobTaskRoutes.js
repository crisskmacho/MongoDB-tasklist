const express = require('express');
const router = express.Router();
const jobTaskController = require('../controllers/jobTaskController');


// Obtener todas las JobTasks
router.get('/jobtasks', jobTaskController.getAllJobTasks);

// Obtener una tarea por Id
router.get('/jobtasks/:id', jobTaskController.getAllJobTasks)

// Agregar/Crear tarea
router.post('/create', jobTaskController.createJobTask)

// Borrar Tarea por Id
router.delete('/delete/:id', jobTaskController.delteJobTaskById)

// Actualizar tarea por ID
router.put('/actualizar/:id', jobTaskController.updateJobTaskById)


module.exports = router;