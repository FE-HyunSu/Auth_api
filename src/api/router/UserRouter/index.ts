import { Router } from 'express';
import { UserController } from '../../../controllers';
import { body, validationResult } from 'express-validator';

const router = Router();

router.use(
  '/join',
  body('id', 'Id is required').not().isEmpty(),
  body('pwd', 'Password is required').not().isEmpty(),
  UserController.join
);
router.use('/list', UserController.list);

export default router;
