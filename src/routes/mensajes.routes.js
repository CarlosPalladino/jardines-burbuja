    const Router = require('express')
    const router = Router()
<<<<<<< HEAD
    const {created,list,deelete} = require('../controllers/mensajesController')

    router.post('/create',created);
=======
    const {mensajes} = require('../validations/mensajes') 
    const {created,list,deelete} = require('../controllers/mensajesController')

    router.post('/create',mensajes,created);
>>>>>>> b87e22bf88ab24130f437b538fcecb7aceb71784
    router.get('/lista', list);
    router.delete('/eliminar',deelete)

    module.exports = router
