# otp-verification

## One Time Password verification

This project is node.js back-end for a otp-verification
application..

<br/>

## Features

# Dependencies

| npm modules    |
|-|
| express        |
| firebase       |
| dotenv         |
| body-parser    |
| firebase-admin |
| twilio         | (https://console.twilio.com/) |

<br/>

## Installation

This app requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and
start the server

```sh
cd server
npm install
npm start
```

<br/>

## Enviroment

# .env

```sh
PORT=8000
TYPE="service_account"
PROJECT_ID=xxxxxx
PRIVATE_KEY_ID=xxxxxx
PRIVATE_KEY=xxxxxxxxxxxx
CLIENT_EMAIL=xxxxxxxx
CLIENT_ID=xxxxxxxxxx
AUTH_URI=xxxxxxx
TOKEN_URI=xxxxxxxxxx
AUTH_PROVIDER_X509_CERT_URL=xxxxxxx
CLIENT_X509_CERT_URL=xxxxxxxxxx
UNIVERSE_DOMAIN=xxxxxx

ACCOUNT_SID=xxxxxx
TWILIO_AUTH_TOKEN=xxxxxx
VERIFY_SID=xxxxxx
```

### REST API endpoints

### 1.1 Send Otp request

```sh
POST /support/api/v1/sendOtp

sample request body :
{
    "phoneNumber" : "xxxxxxxxx"

}

sample response body :
{
    "message": "OTP sent successfully",
    "success": true
}
```

---

### 1.2 verifyOtp request

```sh
POST /support/api/v1/verifyOtp

sample request body :
{
    "phoneNumber" : "xxxxxxxxx",
    "otp" : 131241
}

sample response body :
{
    "message": "OTP verification successful",
    "success": true
}

For invalid otp;
{
    "message": "Invalid OTP",
    "success": false
}
```
