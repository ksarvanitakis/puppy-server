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
    const res = await request(app).get('/api/puppies');
    expect(res.statusCode).toEqual(200);
    expect(res.header).toEqual('JSON');
  });
});

