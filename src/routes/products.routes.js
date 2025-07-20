//router
import { Router } from "express";
import productsControllers from '../controllers/products.controllers.js'

const router = Router()

router.get('/', productsControllers.getAll);

router.post('/', productsControllers.create);

export default router;