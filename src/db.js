const env = require('dotenv');
const { default: mongoose } = require("mongoose")

env.config();


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
        return connection;
    }catch (error){
        console.log('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = connectDB;