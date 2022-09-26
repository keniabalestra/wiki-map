/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/user_queries');
const cookieSession = require('cookie-session');
const db = require('../db/connection');

//GET requests for register//
router.get('/register', (req, res) => {
      res.render('register');
    });


//POST requests for register //
    router.post('/', (req, res) => {
      let emailLogin = req.body.email;
      let passwordLogin = req.body.password;


      //if emailmatch is true, then error
      if (emailLogin === users.email) {
        return res.status(400).send(`400 error - No user found!`);
      }

      const query = `SELECT * FROM users`;
      console.log(query);
      db.query(query)
      .then(data => {
        //if emailmatch is true, then error
        if (emailLogin === users.email) {
          return res.status(400).send(`400 error - No user found!`);
        }
        //error handling, if user and pass are zero return error
        if (emailLogin.length === 0 && passwordLogin.length === 0) {
          return res.status(400).send(`400 error - Missing E-mail or Password`);
        }
            const users = data.rows;
            console.log(data)
            res.redirect('map_landing');
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });
      });



module.exports = router
