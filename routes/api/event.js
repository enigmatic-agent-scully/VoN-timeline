const router = require('express').Router();
const eventsController = require('../../controllers/eventscontroller');

router.route('/').get(eventsController.findAll);

router.route('/new').post(eventsController.createEvent);

router
  .route('/:id')
  .get(eventsController.findById)
  .put(eventsController.updateEvent)
  .delete(eventsController.deleteEvents);

module.exports = router;
