

require('dotenv').config();


module.exports = {
    accountSid: process.env.ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    verifySid: process.env.VERIFY_SID
}