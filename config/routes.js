const express = require('express')
const router = express.Router()
const cityController = require('../app/controllers/cityController')
const cuisineController = require('../app/controllers/cuisineController')
const restaurantController = require('../app/controllers/restaurantController')

router.get('/city', cityController.list)
router.post('/city', cityController.create)
router.get('/city/:id', cityController.show)
router.put('/city/:id', cityController.update)
router.delete('/city/:id', cityController.destroy)


router.get('/cuisine', cuisineController.list)
router.post('/cuisine', cuisineController.create)
router.get('/cuisine/:id', cuisineController.show)
router.put('/cuisine/:id', cuisineController.update)
router.delete('/cuisine/:id', cuisineController.destroy)

router.get('/restaurant', restaurantController.list)
router.post('/restaurant', restaurantController.create)
router.get('/restaurant/:id', restaurantController.show)
router.put('/restaurant/:id', restaurantController.update)
router.delete('/restaurant/:id', restaurantController.destroy)


module.exports = router