const request = require('supertest');
const server = 'http://localhost:3000';

/*
 * Read the docs! https://www.npmjs.com/package/supertest
*/

 describe('Route integration', () => {

  // Default GET Request 
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

  describe('/books', () => {
    describe('GET', () => {
      it('responds with a 200 status and application/json content type', () => {
        return request(server)
          .get('/books')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })

      it('returns an array', () => {
        return request(server)
          .get('/books')
          .then((res) => {
            expect(Array.isArray(res.body)).toBe(true);
          }
        );
      })
    })
  });

// POST
//   describe('/addBook')

// GET
  // describe('/ratings', () => {
  //   describe('GET', () => {
      
  //   })
  // });

// POST
  // describe('/addRating', () => {
  //   describe('POST', () => {
  //     it('')
  //   })
  // })

});
