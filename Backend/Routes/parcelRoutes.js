const express = require('express')
const router = express.Router()
const parcelController = require('../Controllers/parcelController')

// --------------- ROUTES TO ACCESS PARCEL CONTROLLER FUNCTIONS -------------------- 

router.get('/',parcelController.getParcels)
router.get('/:id',parcelController.getAParcel)
router.post('/',parcelController.createParcel)
router.put('/:id',parcelController.updateParcel)
router.delete('/:id',parcelController.deleteParcel)

module.exports = router