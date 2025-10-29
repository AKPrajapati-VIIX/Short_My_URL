import express from 'express';
import { pingHandler } from '../../controllers/ping.controller.js';
import {  validateRequestBody } from '../../validators/index.js';
import { pingSchema } from '../../validators/ping.validator.js';

const pingRouter = express.Router();

pingRouter.get('/', validateRequestBody(pingSchema), pingHandler); // TODO: Resolve this TS compilation issue

pingRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default pingRouter;