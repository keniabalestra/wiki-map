const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/user_queries');
const cookieSession = require('cookie-session');
const db = require('../db/connection');
const helper_queries = require('./helper_queries')

router.get('/', (req, res) => {

  helper_queries.getMapbyId(1)
  //   .then((users) => {
      res.render('map_landing');


    });

// });

module.exports = router;
