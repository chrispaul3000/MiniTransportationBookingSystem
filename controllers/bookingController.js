import Booking from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
    try {
    const {passenger, driver, pickUpLocation, dropOffLocation, fare} = req.body;
    if(!passenger || !driver || !pickUpLocation || !dropOffLocation || !fare){
        return res.status(400).json({message: "All fields are required"});
    }
    const newBooking = await Booking.create({
        passenger,
        driver,
        pickUpLocation,
        dropOffLocation,
        fare
    });
    res.status(201).json(newBooking);
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const getBookings = async (req, res) => {
    try {
    const bookings = await Booking.find()
    .populate('passenger', 'name email contact_number')
    .populate('driver', 'name email contact_number');
    res.status(200).json(bookings);
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const getBookingById = async (req, res) => {
    try {
    const booking = await Booking.findById(req.params.id)
    .populate('passenger', 'name email contact_number')
    .populate('driver', 'name email contact_number');
    if (!booking) {
        return res.status(404).json({message: "Booking not found"});
    }
    res.status(200).json(booking);
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const getUserBookings = async (req, res) => {
    try {
    const {userId} = req.params;
    const bookings = await Booking.find({
        $or: [{passenger: userId}, {driver: userId}]
    })
    .populate('passenger', 'name email contact_number')
    .populate('driver', 'name email contact_number');
    res.status(200).json(bookings);
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const updateBookingStatus = async (req, res) => {
    try {
    const {status} = req.params;

    const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({message: "Invalid status value"});
    }
    
    const booking = await Booking.findByIdAndUpdate(
        req.params.id,
        {status},
        {new: true}
    );
    if (!booking) {
        return res.status(404).json({message: "Booking not found"});
    }
    res.status(200).json(booking);
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const deleteBooking = async (req, res) => {
    try {
    const booking = await
        Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
        return res.status(404).json({message: "Booking not found"});
    }
    res.status(200).json({message: "Booking deleted successfully"});
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};