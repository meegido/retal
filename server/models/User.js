const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  password:{ type: String, required: true },
  email: { type: String, required: true },
  userType: {type: String, enum: ['maker', 'buyer']}
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);
module.exports = User;
