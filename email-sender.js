const nodemailer = require('nodemailer');

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: 'your-email-service-provider',
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password'
    }
  });

  let mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email from Node.js'
  };

  let info = await transporter.sendMail(mailOptions);
  console.log('Email sent:', info.messageId);
}

sendEmail();
