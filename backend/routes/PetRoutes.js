const router = require('express').Router()

const PetController = require('../controllers/PetController')

//middlewares
const checkToken = require('../helpers/check-token')
const { imageUpload } = require('../helpers/image-upload')

//routes
router.post('/create',
  checkToken,
  imageUpload.array('images'),
  PetController.create
  )
router.get('/', PetController.getAll)
router.get('/mypets', checkToken, PetController.getAllUserPets)
router.get('/myadoptions', checkToken, PetController.getAllUserAdoptions)
router.get('/:id', PetController.getPetById)
router.delete('/:id', checkToken, PetController.removePetById)

module.exports = router