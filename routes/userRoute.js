import express from 'express';

import {
  forgotPassword,
  login,
  protect,
  resetPassword,
  restrictTo,
  signup,
  updatePassword,
} from '../controller/authController.js';

import {
  createUser,
  deleteMe,
  deleteUser,
  getMe,
  getUserById,
  getUsers,
  updateMe,
  updateUser,
} from '../controller/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.use(protect);

router.patch('/updatePassword', updatePassword);

router.get('/me', getMe, getUserById);
router.patch('/updateMe', updateMe);
router.delete('/deleteMe', deleteMe);

router.use(restrictTo('admin', 'lead-guide'));
router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUser);

router.route('/').get(getUsers).post(createUser);

export default router;
