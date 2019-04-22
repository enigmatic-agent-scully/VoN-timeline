var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

const validateVONemail = val => {
  return val.includes('voicesofnote.org');
};

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, validate: validateVONemail, required: true },
  password: { type: String, required: true }
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
