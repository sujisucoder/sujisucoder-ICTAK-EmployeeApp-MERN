const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const AdminModel = require('../model/adminUser');
const UserModel = require('../model/user');

router.use(express.json());

// Admin signup route
router.post('/admin/signup', async (req, res) => {
  try {
    const data = req.body;
    let newUser = await AdminModel(data).save();
    let payload = { user: newUser.username, role: 'admin' };
    console.log("in auth jwt",process.env.JWT_SECRET)
    let token = jwt.sign(payload, process.env.JWT_SECRET);
    res.status(200).send({ message: "Admin created successfully", token: token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while creating admin" });
  }
});

// User signup route
router.post('/user/signup', async (req, res) => {
  try {
    const data = req.body;
    let newUser = await UserModel(data).save();
    res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while creating user" });
  }
});

// Admin login route
router.post('/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists in admin collection
    const admin = await AdminModel.findOne({ username: username });
    if (admin && admin.password === password) {
      let payload = { user: admin.username, role: 'admin' };
      let token = jwt.sign(payload, process.env.JWT_SECRET);
      res.send({ message: 'Admin login success', token: token });
      return;
    }

    res.status(401).send({ message: 'Invalid username or password' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while login" });
  }
});

// User login route
router.post('/user/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists in user collection
    const user = await UserModel.findOne({ username: username });
    if (user && user.password === password) {
      res.send({ message: 'User login success' });
      return;
    }

    res.status(401).send({ message: 'Invalid username or password' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while login" });
  }
});

module.exports = router;