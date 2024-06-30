import { Router } from "express";

import auth from './authentication.routes.js';

const router = Router();

/** http://localhost/auth */
router.use('/auth', auth);

export default router;