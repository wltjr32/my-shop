const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }, // 올바른 설정
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;