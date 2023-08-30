const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
});

const sendEmailEthereal = async (req, res) => {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "lauren83@ethereal.email",
            pass: "ySkQaaPB4H1MGmyfqS",
        },
    });

    const info = await transporter.sendMail({
        from: `"Shaharin Ahmed" <${process.env.email}>`,
        to: "bar@example.com",
        subject: "Hello",
        html: "<h2>Sending Emails with Node.js</h2>",
    });

    res.json(info);
};

const sendEmailSendGrid = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: "learncode@mail.com", // Change to your recipient
        from: "learncodetutorial@gmail.com", // Change to your verified sender
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    const info = await sgMail.send(msg);
    res.json(info);
};

const sendEmail = async (req, res) => {
    const info = await mg.messages.create("sandbox-123.mailgun.org", {
        from: "Excited User <ahmedshaharin7589@gmail.com>",
        to: ["kazishaharin@gmail.com"],
        subject: "Hello",
        text: "Testing some Mailgun awesomeness!",
        html: "<h1>Testing some Mailgun awesomeness!</h1>",
    });
    res.json(info);
};

module.exports = sendEmail;
