const nodemailer = require('nodemailer');

const { mailTemplate } = require('../helpers');

require('dotenv').config();

const config = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
};

const transporter = nodemailer.createTransport(config);

const sendOrderedMail = async (data) => {
    const { email } = data.user;
    const mail = mailTemplate(data);
    const emailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Лист замовлення',
        html: mail,
        envelope: {
            from: process.env.EMAIL,
            to: email,
        },
    };

    const response = await transporter.sendMail(emailOptions);
};

module.exports = { sendOrderedMail };
