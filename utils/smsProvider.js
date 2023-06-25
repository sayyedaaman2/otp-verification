const twilio = require('twilio');
const smsConfig = require('../config/sms.config');

const twilioClient = twilio(smsConfig.accountSid, smsConfig.authToken);

async function sendOtp(phoneNumber, otp) {
  try {
    const response = await twilioClient.messages.create({
      body: `Your OTP: ${otp}`,
      from: '+917020611797', // Replace with your Twilio phone number
      to: '+91' + phoneNumber
    });

    console.log(response);
  } catch (err) {
    console.log(`Error while sending the OTP: ${err}`);
  }
}

module.exports = {
  sendOtp
};
