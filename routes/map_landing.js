const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/user_queries');
const cookieSession = require('cookie-session');
const db = require('../db/connection');

router.get('/', (req, res) => {
  // userQueries.getUsers()
  //   .then((users) => {
      res.render('map_landing');
    });

// });

module.exports = router;
