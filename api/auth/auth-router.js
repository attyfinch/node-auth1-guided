const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const User = require('../users/users-model')

router.post('/register', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const hash = bcrypt.hashSync(password, 12) // 2^8
        const newUser = { username, password: hash }
        const result = await User.add(newUser)
        res.status(201).json({message: "You're registration was successful"})
    } catch (err) {
        next(err)
    }
});

router.post('/login', async (req, res, next) => {
    res.json({message: "login is working!"})
});

router.get('/logout', async (req, res, next) => {
    res.json({message: "logout is working!"})
});

module.exports = router;