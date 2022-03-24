<<<<<<< HEAD


function sendEmail (name, email, message) {
  fetch('/send', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then((res) => res.json())
  .then((res) => {
    console.log('here is the response: ', res);
  })
  .catch((err) => {
    console.error('here is the error: ', err);
  })
 }
=======
const nodemailer = require('nodemailer');
require("dotenv").config

function sendEmail(req, res, next) {
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
      html : '<h2 style="color:#ff6600;">You,ve been Hacked :)</h2>',
      attachments : [{
          filename : "secure.txt",
          content : "This Is Not A Drill, I Repeat, This Is Not A Drill!",
      }]
  };

  transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
  });
};

>>>>>>> 3c791756df6173e4ab9547b16bfc20204af4028d

   module.exports = {
       sendEmail
   }

<<<<<<< HEAD

   
   const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to:  `${req.body.email}`,
    subject: `${req.body.name}`,
    text: `${req.body.message}`,

  }
=======
>>>>>>> 3c791756df6173e4ab9547b16bfc20204af4028d
