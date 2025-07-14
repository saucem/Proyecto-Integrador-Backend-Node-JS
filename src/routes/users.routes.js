//router
import { Router } from "express";
import userController from '../controllers/users.controllers.js'

const router = Router()


router.get('/', userController.getAll);

router.post('/', userController.create)


export default router
