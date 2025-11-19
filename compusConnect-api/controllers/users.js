const { Usuarios } = require('../models');

const createNewUser = async (req, res) => {
    // verify that request body contains data
    try {
        console.log('createNewUser body:', req.body);

        if (!req.body || Object.keys(req.body).length === 0) {
            res.status(400).json({
                status: 'BAD REQUEST',
                message: 'No data provided in request body. Make sure to include user data.'
            });
        }

        // validate required fields
        const required = ['nombre', 'correo', 'password'];
        const missing = required.filter(f => !req.body[f]);
        if (missing.length > 0) {
            res.status(400).json({
                status: 'BAD REQUEST',
                message: 'Missing required fields',
                missing
            });
        }

        // check for existing user by email
        const repeatEmail = await Usuarios.findOne({ where: { correo: req.body.correo } });

        if (!repeatEmail) {
            const nuevoUsuario = await Usuarios.create(req.body);
            res.status(201).json({
                status: 'User Created',
                message: 'The user has been created successfully',
                data: nuevoUsuario
            });
        }

        res.status(409).json({
            status: 'Email Conflict',
            message: 'Email already in use, please use another email.'
        });
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error.message
        });
    }

};

const GetAllUsers = async (req, res) => {
    try {
        const users = await Usuarios.findAll();
        res.status(200).json({
            status: 'Success',
            data: users
        });
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error.message
        });
    }
};


module.exports = {
    createNewUser,
    GetAllUsers,

};