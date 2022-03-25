const nodemailer = require('nodemailer');
var cron = require('node-cron');
require("dotenv").config

    let transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 587,
        secure : false,
        requireTLS : true,
        auth : {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        },

    });
 
    let mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to:  `${req.body.email}`,
        subject: `${req.body.name}`,
        text: `${req.body.message}`,
        attachments : [{
            filename : "secure.txt",
            content : "This Is Not A Drill, I Repeat, This Is Not A Drill!",
        }]
    };
    
    cron.schedule('*/15 * * * * *', () => {
        transporter.sendMail(mailOptions, function (err, info) {
            if(err) 
              console.log(err);
            else
              console.log("Email is sent to :" + process.env.EMAIL_TO);
             });
        });

