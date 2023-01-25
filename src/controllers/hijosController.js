const { hijos } = require('../database/models')
const db = require('..//database/models')
const alumnos = {
    list: async (req, res) => {

        try {
            let hijosdb = await hijos.findAll({ include: { all: true } })
            return res.status(200).json(hijosdb)
            
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    created: async (req, res) => {
        await hijos.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            turno: req.body.turno
        })

    },
    findOne: async (req, res) => {
        try {
            let hijosdb = await hijos.findByPk(rq.params.id)
            return res.status(200).json(hijosdb)
        }
        catch (error) {
            return res.status(500).json(error)

        }
    },
    edit: async (req, res) => {
        try {
            await hijos.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                turno: req.body.turno

            })
        } catch (error) {
            return res.status(500).json(error)
        }

    },

    delete: async (req, res) => {

        await hijos.delete({ where: req.params.id })
    },
    add: async (req, res) => {

        let hijosdb = await hijosdb

    }
}



module.exports = alumnos