import request from 'supertest';
import app from './app';

describe('Testing api endpoint test version', () => {
  test('sanity check for /test', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      test: 'is working as it should',
    });
  });
});

describe('Testing api endpoint', () => {
  test('GET all puppies at api/puppies', async () => {
      const res = await request(app)
        .get('/api/puppies')
        .expect('content-type', 'application/json; charset=utf-8')
        .expect(200);

      expect(res.body.length).toBeGreaterThan(0);
  });
  test('GET one puppy by ID at api/puppies/:id', async () => {
    const res = await request(app)
      .get('/api/puppies/1')
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(200);

    expect(res.body).toEqual({
      "id": 1,
      "breed": "Cavapoo",
      "name": "Charlie",
      "Birthdate": "1 Jan 2017"
    });
  });
  test('should get 404 at api/puppies/:id with non existing id', async () => {
    const res = await request(app)
      .get('/api/puppies/foo')
      .expect(404);

    expect(res.text).toEqual('Sorry, no puppy by that ID');
  });
  test('POST should create new puppy in database', async () => {
    const res = await request(app)
      .post('/api/puppies')
      .send({ 
        "breed": "Labradoodle",
        "name": "Fido",
        "birthdate": "24 May 2022"
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(201);

    expect(res.body.id).toBeDefined();
  });
  test('POST should not accept request without all required parameters', async () => {
    const res = await request(app)
      .post('/api/puppies')
      .send({ 
        "name": "Fido",
        "birthdate": "24 May 2022"
      })
      .expect(409);

    expect(res.text).toEqual('Please supply name, breed and birthdate to add your puppy to the database.');
  });

  test('PUT should edit puppy in database', async () => {
    const res = await request(app)
      .put('/api/puppies/5')
      .send({ 
        "breed": "Husky",
        "name": "Scruff",
        "birthdate": "25 May 2022"
      })
      .expect('content-type', 'application/json; charset=utf-8')
      .expect(204);

    expect(res.body).toEqual({ 
      "id": 5,
      "breed": "Husky",
      "name": "Scruff",
      "birthdate": "25 May 2022"
    });
  });
});
