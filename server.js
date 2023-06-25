const express = require('express');
const bodyParser = require('body-parser')

const serverConfig = require('./config/server.config');
const serviceAccount =require('./config/firebase.config');
const OtpRoutes = require('./route/otp.routes')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :  true}));

require('./model/index');

app.get("/", (req,res)=>{
    res.send(200).send({
        message :'hello world'
    })
})
app.use("/support/api/v1",OtpRoutes);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server is running on PORT : ${serverConfig.PORT}`);
})
