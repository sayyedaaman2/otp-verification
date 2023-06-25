
const admin = require('../model/index');
const {sendOtp} = require('../utils/smsProvider')
exports.sendOtp = async (req, res) => {
    try {

        const phoneNumber = req.body.phoneNumber;
        const otp = Math.floor(100000 + Math.random() * 900000);

        admin.database().ref(`otp/${phoneNumber}`).set({
            otp: otp,
            timestamp: Date.now()
        })
        await sendOtp(phoneNumber,otp)
        console.log("otp", otp);
        res.status(200).send({
            message: "OTP sent successfully",
            success: true
        })

    }
    catch (err) {
        console.log(`Some error while the sending the otp : ${err}`);
        res.status(500).send({
            message: "Internal Server Error",
            success: false,
        })
    }
}

exports.verifyOtp = async (req, res) => {
    try {

        const phoneNumber = req.body.phoneNumber;
        const userOTP = req.body.otp;

       admin.database().ref(`otp/${phoneNumber}`).once('value',snapshot=>{
        const otpData = snapshot.val();
        if(otpData&& otpData.otp === userOTP){

            admin.database().ref(`otp/${phoneNumber}`).remove();
            return res.status(200).send({
                message : 'OTP verification successful',
                success : true,
            })
        }
        else{
            res.status(400).send({ message: 'Invalid OTP', success : false });
        }
       })

    }
    catch (err) {
        console.log(`Some error while the sending the otp : ${err}`);
        res.status(500).send({
            message: "Internal Server Error",
            success: false,
        })
    }
}

