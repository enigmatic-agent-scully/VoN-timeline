import axios from 'axios';

export default {
  // Get all events
  getEvents: () => {
    return axios.get('/api/events');
  },

  // Get event by id
  getEvent: id => {
    return axios.get(`/api/events/${id}`);
  },

  // Post a new event
  postEvent: eventData => {
    return axios.post('/api/events', eventData);
  },

  // Change the status of event

  deleteEvent: id => {
    return axios
      .delete(`/api/events/${id}`)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getUserInfo: id => {
    return axios.get(`/api/user/${id}`);
  }
};
