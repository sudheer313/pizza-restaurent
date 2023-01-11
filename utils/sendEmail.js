const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    //service: process.env.EMAIL_SERVICE,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: options.subject,
    html: options.html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
};
sendEmail({ subject: "hi there", html: "<h1>hello</h1>" });
module.exports = sendEmail;
