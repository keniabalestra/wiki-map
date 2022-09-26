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
router.get('/', (req, res) => {
      res.render('register');
    });

// //POST requests for register//
// router.post('/', (req, res) => {
//   // let emailLogin = req.body.email;
//   // let passwordLogin = req.body.password;
//   const query = `SELECT * FROM users`;
//     console.log(query);
//     db.query(query)
//       .then(data => {
//         const users = data.rows;
//         console.log(data)
//         res.render('register');
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });

module.exports = router
