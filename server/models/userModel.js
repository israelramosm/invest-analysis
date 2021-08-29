import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;
export const schema = {
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  token: String,

  facebook: String,
  twitter: String,
  google: String,

  profile: {
    name: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
    gender: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
    location: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
    website: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
    picture: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
  },
};

const UserSchema = new Schema(schema, { timestamp: true });

// Do not change to arrow functions
// eslint-disable-next-line func-names
UserSchema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) => {
    if (error) return next(error);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

// Do not change to arrow functions
// eslint-disable-next-line func-names
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
const User = mongoose.model('User', UserSchema);

export default User;
