const userCtrl = {};
const User = require('../models/User');

userCtrl.gettUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        console.log(users);
        res.json({
            response: true,
            data: users
        });
    } catch (error) {
        res.json({
            response: false,
            error,
            message: 'Data not found'
        });
    }
};

userCtrl.insertUser = async (req, res) => {
    try {
        const {
            firstName,
            secondName,
            lastNameP,
            lastNameM,
            birthdate,
            email,
            tel
        }= req.body;
        const us = await User.create({ 
            firstName,
            secondName,
            lastNameP,
            lastNameM,
            birthdate,
            email,
            tel,
        });
        res.json({
            response: true,
            id: us.id,
            message: 'User was saved to the database!'
        });
    } catch (error) {
        res.json({
            response: false,
            error,
            message: 'User was not saved to the database!'
        });
    }
};

module.exports = userCtrl;