import express from 'express';

import * as workoutController from '../controllers/workout-controller.js';

const workoutRouter = express.Router();

workoutRouter.route('/')
                 .post(workoutController.post)
                 .get(workoutController.index);


workoutRouter.route('/:id')
                 .put(workoutController.put)
                 .get(workoutController.index)
                 .delete(workoutController.deletebyid);

                 
export default workoutRouter;                 