import express from 'express';

import { protect, restrictTo  } from '../controller/authController.js';

import {
  createTour,
  deleteTour,
  getTour,
  getTourById,
  updateTour,
} from '../controller/tourController.js';

import reviewRouter from './reviewRoute.js';

const router = express.Router();

router.use(protect);
router.use('/:tourId/reviews', reviewRouter);

// router.route('/tour-within/:distance/center/:latlng/unit/:unit').get();



router
  .route('/')
  .get(getTour)
  .post(restrictTo('admin', 'lead-guide'), createTour);

router
  .route('/:id')
  .get(getTourById)
  .patch(restrictTo('admin', 'lead-guide'), updateTour)
  .delete(restrictTo('admin', 'lead-guide'), deleteTour);

export default router;
