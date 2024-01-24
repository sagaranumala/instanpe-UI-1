export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: 'sagar.anumala@instanpe.com',
              pass: '7013826217@194',
           },
      secure: true,
    });
    
    const mailData = {
        from: 'sagar.anumala@instanpe.com',
        to: 'sagarpatelanumala7522@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
        console.log(" jjkkk kj jk");
    })
  
    console.log(req.body)
    res.send('success')
  }