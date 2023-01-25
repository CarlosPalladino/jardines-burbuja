const { mensajes } = require('../database/models/index')
const db = require('../database/models')
const { validationResult } = require('express-validator');
const mensaje = {
    list: async (req, res) => {
        try {
            let mensajesdb = await mensajes.findAll({ include: { all: true } })
            return res.status(200).json(mensajesdb)
        }
        catch (error) {
            return res.status(500).json(error)
        }
    },
    findOne: async (req, res) => {
        try {
            let mensajesdb = await mensajes.findByPk(rq.params.id)
            return res.status(200).json(mensajesdb)
        }
        catch (error) {
            return res.status(500).json(error)
        }
    },
    created: async (req, res) => {

        console.log('req.body')
        // let validaciones = validationResult(req)
        // let errors = validaciones
        // if (errors && errors.length > 0) {
        //      validaciones.mapped()
        // }
        // else {
            await mensajes.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                mensajes: req.body.mensajes
            })
            return res.send('tu consulta fue realizada')
    // }
    },

    deelete: async (req, res) => {
        await mensajes.delete({ where: req.params.id })
    }
}
module.exports = mensaje