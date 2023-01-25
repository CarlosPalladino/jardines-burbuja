const Router = require('express')
const router = Router()
<<<<<<< HEAD
const {created,list} = require('../controllers/hijosController')

router.get('/list',list)
router.post('/create',created)
=======
 const {hijos} = require('../validations/hijos')
const {created,list} = require('../controllers/hijosController')

router.get('/list',list)
router.post('/create',hijos,created)
>>>>>>> b87e22bf88ab24130f437b538fcecb7aceb71784

module.exports=router