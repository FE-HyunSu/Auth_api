import { Router } from 'express';
import UserRouter from './router/UserRouter';

const router = Router();

router.use('/user', UserRouter);

export default router;
