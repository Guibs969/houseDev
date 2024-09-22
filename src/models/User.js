const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
 
});

// Exporta o modelo usando module.exports
module.exports = model('User', UserSchema);
