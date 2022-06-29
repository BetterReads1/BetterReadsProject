const request = require('supertest');

const server = 'http://localhost:3000';

/*
 * Read the docs! https://www.npmjs.com/package/supertest
*/

/*
  describe('/markets', () => {

    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/markets')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });

      it('markets from "DB" json are in body of response', () => {
        return request(server)
          .get('/markets')
          .then((res) => {
            expect(res.body).toEqual(null);
          });
      });
    });

  });
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


//   describe('/addRating', () => {
//     describe()
//   })

});
