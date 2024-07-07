const Email = require('../models/Email');
const { scheduleEmail } = require('../services/emailService');

exports.scheduleEmail = async (req, res) => {
    const { recipient, subject, body, scheduleTime } = req.body;

    try {
        const email = new Email({ recipient, subject, body, scheduleTime });
        await email.save();

        scheduleEmail(email);
        
        res.status(201).json(email);
    } catch (error) {
        res.status(500).json({ error: 'Failed to schedule email' });
    }
};

exports.getScheduledEmails = async (req, res) => {
    try {
        const emails = await Email.find();
        res.status(200).json(emails);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve emails' });
    }
};

exports.getScheduledEmailById = async (req, res) => {
    try {
        const email = await Email.findById(req.params.id);
        if (email) {
            res.status(200).json(email);
        } else {
            res.status(404).json({ error: 'Email not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve email' });
    }
};

exports.cancelScheduledEmail = async (req, res) => {
    try {
        const email = await Email.findByIdAndDelete(req.params.id);
        if (email) {
            res.status(200).json({ message: 'Email cancelled successfully' });
        } else {
            res.status(404).json({ error: 'Email not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to cancel email' });
    }
};
