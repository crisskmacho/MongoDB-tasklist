const HomeTaskModel = require('../models/homeTaskModel');


const getAllHomeTasks = async (req, res) => {
    try{
        const homeTasks = await HomeTaskModel.find();
        res.json(homeTasks);
    }catch (error){
        res.status(500).json({ error: 'Error al obtener las HomeTasks' });
    }
};

// Buscar tarea por ID
const getHomeTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const task = await HomeTaskModel.findById(taskId);
        if (!task) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la tarea por ID' });
    }
};

// Crear tarea
const createHomeTask = async (req, res) => {
    try {
        const newTask = new HomeTaskModel(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
};

// Borrar tarea por ID
const deleteHomeTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const deletedTask = await HomeTaskModel.findByIdAndDelete(taskId);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Tarea no encontrada para borrar' });
        }
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(500).json({ error: 'Error al borrar la tarea por ID' });
    }
};

// Actualizar tarea por ID
const updateHomeTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const updatedTask = await HomeTaskModel.findByIdAndUpdate(taskId, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ error: 'Tarea no encontrada para actualizar' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea por ID' });
    }
};



const CRUD = {
    getAllHomeTasks,
    getHomeTaskById,
    createHomeTask,
    deleteHomeTaskById,
    updateHomeTaskById
}

module.exports = CRUD;  