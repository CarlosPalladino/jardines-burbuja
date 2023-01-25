    const Router = require('express')
    const router = Router()
    const {created,list,deelete} = require('../controllers/mensajesController')

    router.post('/create',created);
    router.get('/lista', list);
    router.delete('/eliminar',deelete)

    module.exports = router
