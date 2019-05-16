const request = require('supertest');
const server = require('./server');

describe('server', () => {
  it("sets the environment to 'testing'", () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('/ GET', () => {
    it('should return 200 OK', () => {
      return request(server)
        .get('/')
        .expect(200);
    });
    
    it('should return a JSON object', async () => {
      const res = await request(server).get('/');
      expect(res.type).toEqual('application/json');
    });

    it('should return api:up', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ api: 'up' });
    });
  });
});
