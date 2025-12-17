import express from "express";
import { createBooking, getBookings, getBookingById, getUserBookings, updateBookingStatus, deleteBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/bookings", createBooking);
router.get("/bookings", getBookings);
router.get("/bookings/:id", getBookingById);
router.get("/bookings/user/:userId", getUserBookings);
router.put("/bookings/:id/status", updateBookingStatus);
router.delete("/bookings/:id", deleteBooking);

export default router;