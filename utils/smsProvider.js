const twilio = require('twilio');
const smsConfig = require('../config/sms.config');

const twilioClient = twilio(smsConfig.accountSid, smsConfig.authToken);



async function sentOtp(phoneNumber,otp){
    try{
        await twilioClient.verify.v2.services(smsConfig.verifySid).verifications.create({
            to: "+91" + phoneNumber,
            channel: "sms",
            body: `Your otp is : ${otp}`
          });
        
    }catch(err){
        console.log(`Error while the sending the otp : ${err}`);
        return err
    }
}


module.exports = {
    sentOtp
}