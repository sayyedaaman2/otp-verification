const express = require('express');
const router = express.Router();
const OtpController = require('../controller/otp.controller')

router.post('/sendOtp',OtpController.sendOtp);

router.post('/verifyOtp',OtpController.verifyOtp);


module.exports = router;