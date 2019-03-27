const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  type: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: false
  },
  primaryDate: {
    type: String,
    required: true
  },
  secondaryDate: {
    type: String,
    required: false
  },
  tertiaryDate: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: true
  },
  concertSeason: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  imgURL: {
    type: String,
    required: false
  }
  // createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
