import asyncHandler from 'express-async-handler';

import Tour from '../models/tourModel.js';
import AppError from '../utils/appError.js';
import {deleteOne,updateOne,createOne,getOne,getAll} from './handlerFactory.js'

//----------------------------------------------------------------------------------------
export const createTour = createOne(Tour);

//-------------------------------------------------------------------------------------------
export const getTour = getAll(Tour);

//----------------------------------------------------------------------------------------
export const getTourById =getOne(Tour,{path:'reviews',select:'-__v -createdAt -updatedAt'})

//----------------------------------------------------------------------------------------
export const updateTour = updateOne(Tour)

//----------------------------------------------------------------------------------------
export const deleteTour = deleteOne(Tour)
