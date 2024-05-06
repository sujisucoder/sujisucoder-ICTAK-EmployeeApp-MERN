const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
});

const AdminModel = mongoose.model('Admin', adminSchema);

module.exports = AdminModel;