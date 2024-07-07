const nodeCron = require('node-cron');
const nodemailer = require('nodemailer');
const Email = require('../models/Email');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ecommission82@gmail.com',
        pass: 'sfxj hcud yydt ousg',
    },
});

// Helper function to convert Date to Cron format
const convertDateToCron = (date) => {
    const seconds = date.getUTCSeconds();
    const minutes = date.getUTCMinutes();
    const hours = date.getUTCHours();
    const dayOfMonth = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // getUTCMonth() is zero-based
    const dayOfWeek = '*'; // Not used here

    return `${seconds} ${minutes} ${hours} ${dayOfMonth} ${month} ${dayOfWeek}`;
};

const scheduleEmail = (email) => {
    const scheduleTime = new Date(email.scheduleTime);
    const cronString = convertDateToCron(scheduleTime);
    const job = nodeCron.schedule(cronString, async () => {
        try {
            await transporter.sendMail({
                from: 'rahulsaidupur232103@gmail.com',
                to: email.recipient,
                subject: email.subject,
                text: email.body,
            });

            email.status = 'sent';
            await email.save();
        } catch (error) {
            console.error('Failed to send email:', error);
        }
    }, {
        timezone: "Asia/Kolkata"
    });

    job.start();
};

module.exports = { scheduleEmail };
