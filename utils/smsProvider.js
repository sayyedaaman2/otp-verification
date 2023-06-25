const twilio = require('twilio');
const smsConfig = require('../config/sms.config');

const twilioClient = twilio(smsConfig.accountSid, smsConfig.authToken);



async function sentOtp(phoneNumber, otp) {
    try {
       const response = await twilioClient.messages.create({
                body: `Your Otp : ${otp}`,
                from: '+917020611797',
                to: '+91'+ phoneNumber
            })

            console.log(response);
            return response;
            
    } catch (err) {
        console.log(`Error while the sending the otp : ${err}`);
        return err
    }
}


module.exports = {
    sentOtp
}