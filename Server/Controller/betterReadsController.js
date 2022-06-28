const { nextTick } = require('process');
const db = require('../Models/betterReadsModel');

const betterReadsController = {};

// res.locals.postIDs + res.locals.threeobjects
const postOne = {
    name: "user1",
    title: "Catcher in the Rye",
    author: "Salinger",
    comments:"loved it!",
        plotline: 10,
        unpredictability: 10,
        pace: 10,
        writingStyle: 10,
        ending: 10,
        overallEnjoyability: 10,
        tags: ["fiction", "angst", "haha"]
      };

const postTwo ={
    name: "user2",
    title: "Harry Potter and the Half Blood Prince",
    author: "J.K Rowlin ",
    comments: "super fun", 
    plotline: 10, 
    unpredability: 6,
    pace: 6 , writingStyle: 6,
    ending: 2,
    overallEnjoyability: 9,
    tags: ["mystery","teenage angst", "Awesome"]
};
const postThree = {
    name: "God",
      title: "Green Eggs and Ham",
      author: "BEST AUTHOR",
      comments: "Greatest Book Ever!",
      plotline: 10,
      unpredictability: 10,
      pace: 10,
      writingStyle: 10,
      ending: 10,
      overallEnjoyability: 10,
      tags: ["mystery","action","love"],
}

betterReadsController.threePost_Table = (req, res, next) => {
    res.locals.posts = [postOne, postTwo, postThree];

    // const threePost_TableQuery = 'SELECT * FROM post_table'

    // db.query(threePost_TableQuery)
    // .then((data) => {
    //     data
    //     console.log("--------------------------------------------------THREE MOST RECENT:", data);

    //     // res.locals.posts
    //     next();
    // }).catch((err) => {
    //     next({
    //         log: 'sendPostData error',
    //         message: {err: 'An error occured in sendPostData'}
    //     });
    // })
    next();  
};

betterReadsController.threeRatings_Table = (req, res, next) => {

    const threeRatings_TableQuery = ''

    db.query(threeRatings_TableQuery)
    .then((data) => {
        console.log("THREE MOST RECENT:", data);
        // res.locals.posts
        next();
    }).catch((err) => {
        next({
            log: 'sendPostData error',
            message: {err: 'An error occured in sendPostData'}
        });
    })
    next();  
};

betterReadsController.threeBook_Table = (req, res, next) => {

    const threeBook_TableQuery = ''

    db.query(threeBook_TableQuery)
    .then((data) => {
        console.log("THREE MOST RECENT:", data);
        // res.locals.posts
        next();
    }).catch((err) => {
        next({
            log: 'sendPostData error',
            message: {err: 'An error occured in sendPostData'}
        });
    })
    next();  
};


module.exports = betterReadsController;
