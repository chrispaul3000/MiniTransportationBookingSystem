import express from 'express';
import { createUser, getUsers, getUserById, getPassengers, getDrivers, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/passengers', getPassengers);
router.get('/users/drivers', getDrivers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;