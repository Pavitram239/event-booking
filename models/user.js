import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: [true, 'isAdmin is required'],
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default mongoose.model('User', userSchema);
