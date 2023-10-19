import express from 'express';
import 'dotenv/config';
import { router } from './routes';

const server = express();

server.use(express.json()); // Resolve a questão de não trazer os dados para dentro do body

server.use(router);

export { server };
