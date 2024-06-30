import { Router } from "express";
import { login, register } from "../controllers/authentication.controller";

const router = Router();

/** [POST] http://localhost/auth */
router.post('/', login);

/** [POST] http://localhost/auth/register */
router.post('/register', register);

export default router;