import express from 'express';
import {createProduct,getProduct,getProducts,getCategories} from '../controllers/product.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const productsRouter = express.Router();

productsRouter.post('/',authMiddleware,createProduct);
productsRouter.get('/',authMiddleware,getProducts);

// Must stay above '/:id' — Express matches routes in order, so '/categories'
// would otherwise be swallowed by '/:id' and rejected as an invalid ObjectId.
productsRouter.get('/categories',authMiddleware,getCategories);

productsRouter.get('/:id',authMiddleware,getProduct);


export default productsRouter;
