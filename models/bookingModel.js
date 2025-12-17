import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  passenger: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },pickUpLocation: {
    type: String,
    required: true,
    },dropOffLocation: {
    type: String,
    required: true,
  },status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },fare:{type: Number,
     required: true
    },bookingTime: {
  type: Date,
  default: Date.now,
}});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;