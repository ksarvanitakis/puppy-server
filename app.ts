import express from 'express';
import { Request, Response, Application } from 'express';
import {readFile} from 'fs';
import { join } from 'path';

const app: Application = express();

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

app.get('api/puppies', async(_req: Request, res: Response) => {
  const rawData = readFile('puppies.json', 'utf-8')
  const AllPuppies = await JSON.parse(rawData);
  return res.status(200).json(AllPuppies);
});

export default app;
