const router = require('express').Router();
const eventRoutes = require('./event');

router.use('/events', eventRoutes);

module.exports = router;
