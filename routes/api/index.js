const router = require('express').Router();
const eventRoutes = require('./event');
const userRoutes = require('./user');

router.use('/events', eventRoutes);
router.use('/user', userRoutes);

module.exports = router;
