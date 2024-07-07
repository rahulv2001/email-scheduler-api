const express = require('express');
const router = express.Router();
const {
    scheduleEmail,
    getScheduledEmails,
    getScheduledEmailById,
    cancelScheduledEmail,
} = require('../controllers/emailController');

router.post('/schedule-email', scheduleEmail);
router.get('/scheduled-emails', getScheduledEmails);
router.get('/scheduled-emails/:id', getScheduledEmailById);
router.delete('/scheduled-emails/:id', cancelScheduledEmail);

module.exports = router;
