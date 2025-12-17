import User from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
    const {name, email, contact_number, role} = req.body;
    
    if(!name || !email || !contact_number || !role){
        return res.status(400).json({message: "all fields are required"});
        return
    }

    const newUser = await User.create({
        name,
        email,
        contact_number,
        role
    });
    res.status(201).json({message: "User created successfully", user: newUser});

}catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const getUsers = async (req, res) => {
    try {
    const users = await User.find();
    res.status(200).json(users);
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const getUserById = async (req, res) => {
    try {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({message: "User not found"});
    }
    res.status(200).json(user);
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const getPassengers = async (req, res) => {
    try {
    const passengers = await User.find({role: 'passenger'});
    res.status(200).json(passengers);
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const getDrivers = async (req, res) => {
    try {
    const drivers = await User.find({role: 'driver'});
    res.status(200).json(drivers);
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const updateUser = async (req, res) => {
    try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!user) {
        return res.status(404).json({message: "User not found"});
    }
    res.status(200).json({message: "User updated successfully", user});
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};

export const deleteUser = async (req, res) => {
    try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return res.status(404).json({message: "User not found"});
    }
    res.status(200).json({message: "User deleted successfully"});
} catch (error) {
    res.status(500).json({message: "Server Error", error: error.message});
}};