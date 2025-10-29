import express from 'express';
import pingRouter from './ping.router.js';

const v1Router = express.Router();



v1Router.get('/ping' , pingRouter); //eg..= /ping/4/comments

export default v1Router;