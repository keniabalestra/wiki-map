const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/user_queries');
const cookieSession = require('cookie-session');
const db = require('../db/connection');
const helper_queries = require('./helper_queries');

router.get('/', (req, res) => {
const user = req.session.id
console.log(user)
// const userID =


 helper_queries.getMapbyId(user)
//  console.log("helper_queries:", helper_queries.getMapbyId())
    .then((maps) => {
     const templateVars = {maps}
      res.render('map_landing', templateVars);
    });




});

module.exports = router;
