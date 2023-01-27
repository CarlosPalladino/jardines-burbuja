const Router = require('express')
const router = Router()
 const {hijos} = require('../validations/hijos')
const {created,list} = require('../controllers/hijosController')

router.get('/list',list)
router.post('/create',created)

module.exports=router