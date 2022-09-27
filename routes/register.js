/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/user_queries');
const cookieSession = require('cookie-session');
const db = require('../db/connection');
const helperQueries = require('./helper_queries');

//GET requests for register//
router.get('/', (req, res) => {
  res.render('register');
});


//POST requests for register //
router.post('/', (req, res) => {
  const user = req.body;
  const existingUser = helperQueries.getUserbyEmail(user);
  existingUser.then(users => {

    if (!user.email || !user.password) {
      return res.status(400).send(`400 error - Missing E-mail or Password`);
    }
    if (users.length > 0) {
      return res.status(400).send(`400 error - You're alredy registered! Click here to login`); //add href
    } else {
      helperQueries.addUser(user);
      console.log("Adds new user");

      res.redirect('map_landing')
    }
  })// .catch(err => {
    //   res
    //     .status(500)
    //     .json({ error: err.message });
  ;


  //if emailmatch is true, then error
  // if (emailLogin === user.email) {
  //   return res.status(400).send(`400 error - No user found!`);
  // }
  // //error handling, if user and pass are zero return error
  // if (emailLogin.length === 0 && passwordLogin.length === 0) {
  //   return res.status(400).send(`400 error - Missing E-mail or Password`);
  // }
  //     const users = data.rows;
  //     console.log(data)
  //     res.redirect('map_landing');

  // })
  // .catch(err => {
  //   res
  //     .status(500)
  //     .json({ error: err.message });

});



module.exports = router;
