const admin = require('firebase-admin');

const serviceAccount =require('../config/firebase.config');

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL : "https://durable-melody-373211-default-rtdb.firebaseio.com/"
})


module.exports = firebase