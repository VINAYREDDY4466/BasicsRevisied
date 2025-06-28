import express from 'express'
import { first, second } from '../controller/PracticeController.js';
import { login, register } from '../controller/AuthController.js';

const appRouter= express.Router();

appRouter.get('/testing/test1',first);
appRouter.post('/testing/test2', second);
appRouter.post('/login', login);
appRouter.post('/register', register);

export default appRouter;