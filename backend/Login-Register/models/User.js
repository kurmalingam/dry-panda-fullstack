const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  regType: { type: String, enum: ['customer', 'operator'], required: true },
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
