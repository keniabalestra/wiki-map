const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/user_queries');
const cookieSession = require('cookie-session');
const db = require('../db/connection');
const helper_queries = require('./helper_queries');

router.get('/', (req, res) => {
  const user = req.session.id;
  helper_queries.getMapbyId(user)
    .then((maps) => {
      const templateVars = { maps };
      res.render('map_landing', templateVars);
    });
});

router.get('/map_fav', (req, res) => {
  const user_id = req.session.id;
  helper_queries.getFavoriteMapsOfUser(user_id)
    .then(favourites => {
      const templateVars = {favourites}
      res.render('map_favourite', templateVars);
      //res.json({ favourites });

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



module.exports = router;
