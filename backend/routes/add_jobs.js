const express = require("express")
const { getData, postData, deleteData, patchData } = require("../controllers/add_jobs_controller")
const router = express.Router()

router.get('/', getData)
router.post('/',postData)
router.delete('/:id',deleteData)
router.patch('/:id',patchData)


module.exports = router