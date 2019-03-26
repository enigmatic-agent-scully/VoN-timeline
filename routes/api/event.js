const router = require('express').Router();
const EventController = require('../../controllers/eventscontroller');

router
  .route('/')
  .get(EventController.findAll)
  .post(EventController.createEvent);

router
  .route('/:id')
  .get(EventController.findById)
  .put(EventController.updateEvent)
  .delete(EventController.removeEvent);

module.exports = router;
