import express from 'express';
import { Request, Response, Application } from 'express';
import { readFileSync, writeFile } from 'fs';
import { Puppies } from './ts-utils/interfaces';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.json());

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

app.get('/api/puppies', (_req: Request, res: Response) => {
  const data : Puppies = JSON.parse(readFileSync('./puppies.json', 'utf-8'));
  const AllPuppies = data.puppies;
  return res.status(200).setHeader('Content-Type', 'application/json').json(AllPuppies);
});

app.get('/api/puppies/:id', (req: Request, res: Response) => {
  const data : Puppies = JSON.parse(readFileSync('./puppies.json', 'utf-8'));
  const puppy = data.puppies.find(e => e.id === Number(req.params.id));
  return res.status(200).setHeader('Content-Type', 'application/json').json(puppy);
});

app.post('/api/puppies', (req: Request, res: Response) => {
  if (!req.body.name || !req.body.breed || !req.body.birthdate) {
    return res.status(409).send('Please supply name, breed and birthdate to add your puppy to the database.')
  }

  const data : Puppies = JSON.parse(readFileSync('./puppies.json', 'utf-8'));

  const id = data.puppies.length + 1;
  const newData = data;
  const newPuppy = {
    id: id,
    name: req.body.name,
    breed: req.body.breed,
    birthdate: req.body.birthdate
  }
  newData.puppies.push(newPuppy);

  writeFile('./puppies.json', JSON.stringify(newData), function(err) {
    if (err) throw err;
    console.log('New puppy added to file');
    })
  return res.status(201).json(newPuppy);
})

export default app;
