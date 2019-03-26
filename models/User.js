var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String },
  email: { type: String },
  password: { type: String }
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
