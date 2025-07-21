//router
import { Router } from "express";
import userController from '../controllers/users.controllers.js'

const router = Router()

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.delete('/:id', userController.deleteById);

export default router
