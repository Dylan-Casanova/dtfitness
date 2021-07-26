const mongoose = require('mongoose');

// Creating user Schema, user will have the traditional requierment for 
// name and password and it will also have a relation ship of with workouts
// user has many workouts

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },


  password: {
    type: String,
    required: true
  },
 
});

const User = mongoose.model('User', UserSchema);

module.exports = User;