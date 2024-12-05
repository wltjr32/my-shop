const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nuser:1234@jangbyenogjoun.rokxrph.mongodb.net/?retryWrites=true&w=majority&appName=JangByenogJoun')
    } catch (error) {
        throw new Error ("Connection Failed!");
    }
};
module.exports = connectDB;