const express= require('express')
require('dotenv').config()

const app= express()

const credentials = {
    apiKey:"c959b9f0a7172613a7b50fd2d88265be8d3fef071b5671c68a834338c5757093",  
    username:'send-it22' 
};

const Africastalking = require('africastalking')(credentials);

const sms = Africastalking.SMS
const options = {
    to: '+2540113256693',
    message: "I'm a lumberjack and its ok, I work all night and sleep all day"
}

sms.send(options).then( response => {
        console.log(response);
    })

    .catch( error => {
        console.log(error);
    });



    app.listen(4000,()=>{
        console.log("Running on Port 4000")
    })