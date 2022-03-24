const nodemailer = require('nodemailer');
require("dotenv").config

    let transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 587,
        secure : false,
        requireTLS : true,
        auth : {
            user : "anuanirasmi@gmail.com",
            pass : "anuanirasmi@21",
        },

    });
 
    let mailOptions = {
        from : "anuanirasmi@gmail.com",
        to : "kungusamuel64@gmail.com",
        subject : "Sending Email Using NodeJS",
        text : "You,ve been Hacked :) ",
        attachments : [{
            filename : "secure.txt",
            content : "This Is Not A Drill, I Repeat, This Is Not A Drill!",
        }]
    };

    transporter.sendMail(mailOptions , function(error, info){
        if (error){
            console.log("Error");
        } else {      
                 console.log("Email sent : " + info.response);
                } 
    })