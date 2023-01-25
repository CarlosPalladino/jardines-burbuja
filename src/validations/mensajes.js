const { body } = require('express-validator')
const { mensajes } = require('../database/models/index')
const validationResult = [
    body("email")
        .notEmpty()
        .withMessage("El e-mail debe ser valido.")
        .bail()
        .isEmail()
        .withMessage("No corresponde a un email")
        .bail()
        .custom(async (value) => {
            let users = await usuarios.findAll({
                include: {
                    all: true
                }
            })
            users = users.map(u => u.email)
            if (users.includes(value)) {
                throw new Error("El email ya esta en uso");
            }
            return true;
        })
        .bail(), // por que tiene que ir el bail al final 
    body('nombre')
        .isEmpty()
        .isLength({ min: 2 })
        .withMessage('el nombre debe contener minimo dos caracteres')
        .bail(),
    body("apellido")
        .notEmpty()
        .withMessage("El apellido debe contener minimo dos caracteres")
        .bail()
        .isLength({ min: 2, max: 16 })
        .withMessage("El nombre debe contener minimo dos caracteres")
        .bail(),
        body("mensajes")
        .notEmpty()
        .withMessage("El mensaje debe contener minimo dos caracteres")
        .bail()
        .isLength({ min: 2, max: 200 })
        .withMessage("El nombre debe contener maximo cien(100) caracteres")
        .bail(),
]







module.exports = validationResult