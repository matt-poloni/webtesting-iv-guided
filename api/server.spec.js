const request = require('supertest');
const server = require('./server.js');

describe('server', () => {
  it("sets the environment to 'testing'", () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
});
