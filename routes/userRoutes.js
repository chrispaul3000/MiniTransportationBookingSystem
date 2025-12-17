import express from 'express';
import { createUser, getUsers, getUserById, getPassengers, getDrivers, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.get('/users/passengers', getPassengers);
router.get('/users/drivers', getDrivers);
router.delete('/users/:id', deleteUser);

export default router;