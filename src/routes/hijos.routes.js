const Router = require('express')
const router = Router()
const {created,list} = require('../controllers/hijosController')

router.get('/list',list)
router.post('/create',created)

module.exports=router