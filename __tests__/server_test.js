const request = require('supertest');
const server = 'http://localhost:3000';

/*
 * Read the docs! https://www.npmjs.com/package/supertest
*/

 describe('Route integration', () => {

  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

//   describe('/books', () => {
    
//   })

//   describe('/addBook')

//   describe('/ratings')

  describe('/addRating', () => {
    describe()
  })

});
