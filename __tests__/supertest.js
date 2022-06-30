const request = require('supertest');
const server = 'http://localhost:3000';

/*
 * Read the docs! https://www.npmjs.com/package/supertest
*/

/*
LIST OF TESTINGS END POINTS

   END POINTS       Request Type            Connected Table             WHEN
  1) '/'               GET                  * index.html *             load page
  2) '/books'          GET                  * book_table *             load all books
  3) '/ratings'        GET                  * rating_table *           load each book ratings
  4) '/addRating'      POST                 * rating_table *           add new rating
  5) Local Error       USE (all)                   -                   
  6) Global Error      USE (all)                   -                  


  CHECKLIST 
  [] Successfully passed 
  [] Status
  [] Data/Content type
  [] Expected output value
*/

jest.setTimeout(30000);

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
          });
      })

      // * Tests to add:
      it('Contains an object that contains the correct keys inside it: book_id, title, author, pages, year, genre_id, series, series_name, place_in_series', () => {
        return request(server)
          .get('/books')
          .then((res) => {
            const testObj = {
              book_id: expect.any(Number),
              title: expect.any(String),
              author: expect.any(String),
              pages: expect.any(Number),
              year: expect.any(Number),
              genre_id: expect.any(Number),
              series: expect.any(Boolean),
              series_name: expect.any(String),
              place_in_series: expect.any(Number)
            };
            expect(res.body[0]).toEqual(expect.objectContaining(testObj));
          });
      });
    })
  });

  describe('/genre', () => {
    describe('GET', () => {
      it('responds status 200', () => {
        return request(server)
          .get('/genre')
          .expect('Content-Type', /application\/json/)
          .expect(200)
      })
      
      it('returns an array', () => {
        return request(server)
          .get('/genre')
          .then((res) => {
            expect(typeof res === 'object').toBe(true)
          });
      })

      it('Contains all the data type in the right format', () => {
        return request(server)
          .get('/genre')
          .then((res) => {
            const genre = res.body;
            const keys = Object.keys(genre);

            for(let i = 0; i < keys.length; i++) {
              const curKey = keys[i];
              expect(typeof parseInt(curKey)).toBe('number');
              expect(typeof genre[curKey]).toBe('string');
            }
            // const firstKey = Object.keys(genre)[0]; // genre_id
            // const testing = genre[firstKey];        // genre
            // expect(typeof testing).toBe('string');
            // expect(typeof parseInt(firstKey)).toBe('number');
          })
      });
    });
});

  
// POST
// CHECKLIST 
// [] Successfully passed 
// [] Status
// [] Data/Content type
// [] Expected output (value)
describe('/addBook', () => {
  let book1;
  let book2;
  beforeEach(() => {
    book1 = {
      title: 'ABook',
      author: 'writer',
      pages: 5,
      year: 1993,
      genre_id: 3,
      series: true,
      series_name: 'Testing',
      place_in_series: 1
    };
    book2 = {
      title: 'ABook 2',
      author: 'writer',
      pages: 10,
      year: 1994,
      genre_id: 3,
      series: true,
      series_name: 'Testing',
      place_in_series: 2
    };
  });
  
  describe('POST', () => {
    // One test to see if the changes go through
    it('responds with a 200 status and application/json content type', () => {
      return request(server)
        .post('/addBook')
        .send(book1)
        .expect('Content-Type', /application\/json/)
        .expect(200);
    })

    it('Ensure that the book added is at the end of the database', () => {
      return request(server)
        .post('/addBook')
        .send(book1)
        .then((res) => {
          expect(res.body[res.body.length - 1]).toEqual(expect.objectContaining(book1));
        })
    })

    // ! EDGE CASES:
    
    // Should return an error if you don't send a json
    
    // Should return an error if you attempt to add a book with missing info

    // Should return an error if you attempt to add a book with invalid data types

    // ! STRETCH:
    // Should not add a book to the database if the (loosely equal) title/author combo already exists in the DB
    it('Ensure that the book added is at the end of the database', () => {
      return request(server)
        .post('/addBook')
        .send(book1) // return array of all 
        .then((res) => {
          const errorObj = {
            'err': expect.any(String)
          };

          expect(res.body).toEqual(expect.objectContaining(errorObj))
        })
    })
  })
})


//GET
  describe('/ratings', () => {
    describe('GET', () => {
      it('responds with a 200 status and application/json content type', () => {
        return request(server)
          .get('/ratings')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })

      it('returns an array', () => {
        return request(server)
          .get('/ratings')
          .then((res) => {
            expect(Array.isArray(res.body)).toBe(true);
          });
      })

      xit('Contains an object that contains the correct keys inside it: rating_id, book_id, user_id, comments, overall_enjoyability, tags', () => {
        return request(server)
          .get('/books')
          .then((res) => {

            const testObj = {
              rating_id: expect.any(Number),
              book_id: expect.any(Number),
              user_id: expect.any(Number),
              comments: expect.any(Number),
              overall_enjoyability: expect.any(Number),
              tags: expect.any(Array)
            };

            expect(res.body[0]).toEqual(expect.objectContaining(testObj));
          });
      });
    })
  });


// POST
  // describe('/addRating', () => {
  //   describe('POST', () => {
  //     it('')
  //   })
  // })