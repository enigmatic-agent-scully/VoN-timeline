const db = require('../models/');

const EventController = {
  findAll = (req, res) => {
    db.Event.find({})
    .sort({primaryDate: 1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findById = (req, res) => {
    db.Event.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findByCategory = (req, res) => {
    db.Event.find({
      type: req.query.type
    })
  },
  createEvent = (req, res) => {
    const newEvent = req.body;
    db.Event.create(newEvent)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  updateEvent = (req, res) => {
    db.Event.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  removeEvent = (req, res) => {
    db.Event.findOneAndDelete({_id: req.params.id})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
  };

export default EventController;