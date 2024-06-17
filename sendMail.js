const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'mail.estrrado.com',
    port: 465,
    secure: true,
    auth: {
        user: 'jinson@estrrado.com', 
        pass: 'jinson@2021' 
    }
});

const mailOptions = {
    from: 'jinson@estrrado.com', 
    to: 'jinson@estrrado.com', 
    subject: 'Hello from Nodemailer!',
    text: 'This is a test email sent using Nodemailer'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
