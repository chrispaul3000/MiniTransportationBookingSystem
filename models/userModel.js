import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact_number:{
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ['passenger', 'driver'],
  }
});

const User = mongoose.model("User", userSchema);

export default User;