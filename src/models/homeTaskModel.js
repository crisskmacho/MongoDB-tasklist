const mongoose = require('mongoose');

const homeTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ['baja', 'media', 'alta'],
        default: 'media',
    },
    status: {
        type: String,
        enum: ['pendiente', 'en progreso', 'completada'],
        default: 'pendiente',
    },
});

const HomeTaskModel = mongoose.model('HomeTask', homeTaskSchema);

module.exports = HomeTaskModel;