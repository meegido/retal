const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  description: String,
  files: [{
    pic_path: String,
    pic_name: String
  }]
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);
module.exports = User;
