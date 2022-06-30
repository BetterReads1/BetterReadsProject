const request = require('supertest');
const server = 'http://localhost:3000';
// require('dotenv').config();

// const command = `psql -d ${process.env.POSTGRESQL_BBR_DB_TEST} -f ../Server/Models/db_setup.sql`;
// const exec = require('child_process').exec;
// exec(command);

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
 
// GET
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

  
// POST
// CHECKLIST 
// [] Successfully passed 
// [] Status
// [] Data/Content type
// [] Expected output (value)
describe('/addBook', () => {
  let validBook;

  beforeEach(() => {
    validBook = {
      book_id: expect.any(Number),
      title: 'ABook',
      author: 'writer',
    };
  });

  

  describe('POST', () => {
    afterEach(() => {
      //Remove the latest entry from DB
    });

    // One test to see if the changes go through
    it('responds with a 200 status and application/json content type', () => {
      return request(server)
        .post('/addBook')
        .expect('Content-Type', /application\/json/)
        .expect(200);
    })

    it('extra stuff', () => {
      return request(server)
        .post('/addBook')
        .send(validBook)
        .expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
    })
    //A bunch of edge cases // ! The server returning an error is a good thing here
    
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



/*
[
{
  title:
  author:
  pages:
  year:
  genre:
  series: 
  series_name:
  place_in_series:  
},

{
  user_id: <Assume its 0 for now>
  comments:
  overall_enjoyability: (THIS IS AN INTEGER BETWEEN 1/5)
  tags: [tag1, tag2, tag3]
}
]
*/
