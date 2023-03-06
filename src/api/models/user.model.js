const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      validate: [validator.isEmail, 'Email not valid'],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, 'Min 5 characters'],
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    next('Error hashing password', error);
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
