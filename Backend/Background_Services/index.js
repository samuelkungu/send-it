const fs = require("fs");
const nodemailer = require("nodemailer");
const ejs = require("ejs");

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


const data = await ejs.renderFile(__dirname + "/test.ejs", { name: 'Stranger' });

const mainOptions = {
    from : process.env.EMAIL_USERNAME,
    to : process.env.EMAIL_TO,
    subject : "Sending Email Using NodeJS",
    html: data
};

cron.schedule('*/30 * * * * *', () => {
    transporter.sendMail(mailOptions, function (err, info) {
        if(err) 
          console.log(err);
        else
          console.log("Email is sent to :" + process.env.EMAIL_TO);
         });
});