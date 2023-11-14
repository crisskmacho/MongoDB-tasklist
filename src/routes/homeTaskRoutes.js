const express = require('express');
const router = express.Router();
const homeTaskController = require('../controllers/homeTaskController');



// Obtener todas las JobTasks
router.get('/hometasks', homeTaskController.getAllHomeTasks);

// Obtener una tarea por Id
router.get('/hometasks/:id', homeTaskController.getHomeTaskById)

// Agregar/Crear tarea
router.post('/create', homeTaskController.createHomeTask)

// Borrar Tarea por Id
router.delete('/delete/:id', homeTaskController.deleteHomeTaskById)

// Actualizar tarea por ID
router.put('/actualizar/:id', homeTaskController.updateHomeTaskById)


module.exports = router;