const functions = require('firebase-functions');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.REACT_APP_GMAIL_ADDRESS,
    pass: process.env.REACT_APP_GMAIL_PASSWORD,
  },
});

const sendContactForm = form => {
  return transporter.sedMail({
    subject: '포트폴리오 앱에서 발송된 이메일입니다.',
    bcc: ['ryankim.h.dev@gmail.com'],
    html: `<h3></h3>
    <p>Name: ${form.name}</p>
    <p>Address: ${form.email}</p>
    <p>Subject: ${form.subject}</p>
    <p>Message: ${form.message}</p>
    `,
  });
};

exports.contactForm = functions.https.onRequest((req, res) => {
  if (req.body.secret !== 'firebaseIsCool') return res.send('Missing secret');
  sendContactForm(req.body);
});

//   const mailOption = {
//     from: name,
//     to: process.env.REACT_APP_GMAIL_ADDRESS,
//     subject: subject,
//     html: `포트폴리오 앱에서 발송된 메세지입니다. <br />
//       Email : ${email} <br />
//       Name: ${name} <br />
//       Message: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOption);
//     return 'success';
//   } catch (error) {
//     return error;
//   }
// };
