const { padres } = require('../database/models/index')
const { hijos } = require('../database/models/index')
const db = require('../database/models')
const tutores = {
    list: async (req, res) => {
        try {
            let padresdb = await padres.findAll({ include: { all: true } })
            let padresDB = await padresdb.map(padres=>
                Object ({
                nombre:padres.nombre,
                apellido:padres.apellido,
                email :padres.email,
                hijos: padres.hijos.map(hijos=> Object({
                    nombre:hijos.nombre,
                    apellido:hijos.apellido,
                    turno:hijos.turno
                }))
            }))
            return res.status(200).json(padresDB)
        }
        catch (error) {
            return res.status(500).json(error)
        }

    },
    findOne: async (req, res) => {
        try {
            let padresdb = await padres.findByPk(rq.params.id)
            return res.status(200).json(padresdb)
        }
        catch (error) {
            return res.status(500).json(error)

        }
    },

    created: async (req, res) => {
        let padresdb = await padres.create({
<<<<<<< HEAD
            nombre: req.body.nombre0, 
=======
            nombre: req.body.nombre0,
>>>>>>> b87e22bf88ab24130f437b538fcecb7aceb71784
            apellido: req.body.apellido0,
            email: req.body.email,
            telefono: req.body.telefono,
        })
        let hijosdb = await hijos.create({
            nombre: req.body.nombre1,
            apellido: req.body.apellido1,
            turno: req.body.turno,
        })
        await padresdb.addHijos(hijosdb)

    },

    delete: async (req, res) => {

        await padres.delete({ where: req.params.id })
    }

}


module.exports = tutores