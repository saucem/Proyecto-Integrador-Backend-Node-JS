//router
import { Router } from "express";
import productsControllers from '../controllers/products.controllers.js'

const router = Router()

router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.getById);
router.post('/', productsControllers.create);
router.delete('/:id', productsControllers.deleteById);

export default router;