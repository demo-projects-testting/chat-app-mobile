import { loginController } from 'controllers/authenticateController/loginController';
import express from 'express';

const router = express.Router();

router.post('/login', loginController);

export default router;
