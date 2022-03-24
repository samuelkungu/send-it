

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

   module.exports = {
       sendEmail
   }


   
   const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to:  `${req.body.email}`,
    subject: `${req.body.name}`,
    text: `${req.body.message}`,

  }