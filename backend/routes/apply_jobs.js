const express = require("express")
const { applyJob } = require("../controllers/add_jobs_controller")
const router = express.Router()
const upload = require('./multer')


router.post('/applyjob',upload.single('resume') , applyJob)

module.exports = router