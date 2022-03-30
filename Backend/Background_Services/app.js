const express = require('express')
const nodemailer = require('nodemailer');
const app = express();
var cron = require('node-cron');
require("dotenv").config();
// const email = require("./Helpers/email");


// app.route('./Helpers/email').post('/send', email.sendEmail);

app.post('/send', function(req, res, next) {
    const transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 587,
        secure : false,
        requireTLS : true,
        auth : {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        },

    });
 
    const mailOptions = {
        from : process.env.EMAIL_USERNAME,
        to : process.env.EMAIL_TO,
        subject : "Sending Email Using NodeJS",
        html : '<h2 style="color:#ff6600;"> You,ve been Hacked :) </h2>',
        attachments : [{
            filename : "secure.txt",
            content : "This Is Not A Drill, I Repeat, This Is Not A Drill!",
        }]
    };

    cron.schedule('*/10 * * * * *', () => {
        transporter.sendMail(mailOptions, function (err, info) {
            if(err) 
              console.log(err);
            else
              console.log("Email is sent to : " + process.env.EMAIL_TO);
             });
        });


  })


app.listen(4000, ()=> {
    console.log("Server Is Running on port 4000")
})