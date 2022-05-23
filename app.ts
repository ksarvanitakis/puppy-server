import express from 'express';
import { Request, Response, Application } from 'express';
import { readFileSync } from 'fs';
import { Puppies } from './ts-utils/interfaces';

const app: Application = express();

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

app.get('/api/puppies', async(_req: Request, res: Response) => {
  const data : Puppies = JSON.parse(readFileSync('./puppies.json', 'utf-8'));
  const AllPuppies = data.puppies;
  return res.status(200).setHeader('Content-Type', 'application/json').json(AllPuppies);
});

export default app;
