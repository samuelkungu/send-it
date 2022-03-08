const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

// --------------- ROUTES TO ACCESS USER CONTROLLER FUNCTIONS -------------------- 

router.get('/',userController.getUsers)
router.get('/:id',userController.getAUser)
router.post('/',userController.createUser)
router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)

module.exports = router