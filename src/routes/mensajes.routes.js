    const Router = require('express')
    const router = Router()
    const {mensajes} = require('../validations/mensajes') 
    const {created,list,deelete} = require('../controllers/mensajesController')

    router.post('/create',mensajes,created);
    router.get('/lista', list);
    router.delete('/eliminar',deelete)

    module.exports = router
