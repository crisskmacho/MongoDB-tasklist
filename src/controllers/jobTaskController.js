const JobTaskModel = require('../models/jobTaskModel');

//obtener todas las tareas
const getAllJobTasks = async (req, res) => {
    try{
        const jobTasks = await JobTaskModel.find();
        res.json(jobTasks);
    }catch (error){
        res.status(500).json({ error: 'Error al obtener las JobTasks' });
    }
};

//obtener una tarea por el id
const getJobTaskById = async (req, res) => {
    const taskId = req.params.id;
    try{
        const task = await JobTaskModel.findById(taskId);
        if (!task){
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({ error: 'Error al buscar la tarea por ID'});
    }
};

//crear nueva tarea
const createJobTask = async (req, res) => {
    try {
        const newTask = new JobTaskModel(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    }catch (error){
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
}


//borrar tarea por ID
const delteJobTaskById = async (req, res) =>{
    const taskId = req.params.id;
    try {
        const deletedTask = await JobTaskModel.findByIdAndDelete(taskId);
        if (!deletedTask){
            return res.status(404).json({ error: 'Tarea no encontrada para borrar'});
        }
        res.status(200).json(deletedTask);
    }catch (error){
        res.status(500).json({ error: 'Error al borrar la tarea por ID'})
    }
};

const updateJobTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const updateTask = await JobTaskModel.findByIdAndUpdate(taskId, req.body, {new: true });
        if (!updateTask){
            return res.status(404).json({ error: 'Tarea no encontrada para actualizar'});
        }
        res.status(200).json(updateTask);
    }catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea por Id'});
    }
};




const CRUD = {
    getAllJobTasks,
    getJobTaskById,
    createJobTask,
    delteJobTaskById,
    updateJobTaskById
}

module.exports = CRUD;  