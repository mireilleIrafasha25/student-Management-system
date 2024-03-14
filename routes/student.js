const studentcontroller=require('../controllers/studentcontroller')
const express=require('express')
const router= express.Router()
router.get('/',studentcontroller.index)
router.post('/show',studentcontroller.show)
router.post('/store',studentcontroller.store)
router.post('/update',studentcontroller.update)
router.post('/destroy',studentcontroller.destroy)

module.exports=router