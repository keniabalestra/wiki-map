const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/user_queries');
const cookieSession = require('cookie-session');
const db = require('../db/connection');
const helper_queries = require('./helper_queries');

router.get('/', (req, res) => {
const user = req.session.id
 helper_queries.getMapbyId(user)
    .then((maps) => {
     const templateVars = {maps}
      res.render('map_landing', templateVars);
    });
});


// router.get('/', (req,res) => {
// const user= req.session
// console.log("USER ID: ", user)
// helper_queries.getFavoriteMapsOfUser(user.id)
// .then((favourites) => {

// }

// })


//Creates new Map
// router.post("/", (req, res) => {
//   const templateVars = {};
//   if (!req.session.id) {
//     templateVars.user = null;
//     templateVars.id = null;
//     templateVars.mapName = null;
//     res.statusCode = 401;
//     res.render('401', templateVars);
//   } else {
//     templateVars.user = req.session.email;
//     templateVars.id = req.session.id;
//     const values = req.body;
//     console.log("values: ", values)
//     const { title, country, city } = values;
//     getCoordinates(country, city)
//       .then(coordinates => {
//         const parsedCoords = JSON.parse(coordinates);
//         const resultsArray = parsedCoords.results[0];
//         const resultsCoords = resultsArray.locations[0];
//         const latitude = resultsCoords.latLng.lat;
//         const longitude = resultsCoords.latLng.lng;
//         const user_id = req.session.user_id;
//         const map = {
//           // title,
//           // country,
//           // city,
//           latitude,
//           longitude,
//          // created_at: new Date(),
//           user_id
//         };
//         createNewMap(db, map)
//           .then(newMap => {
//             res.redirect(`/maps/${newMap.id}`);
//           })
//           .catch((err) => {
//             console.log("query error", err.stack);
//             res.statusCode = 400;
//             templateVars.mapName = null;
//             templateVars.message = "Oops, something went wrong.";
//             res.render('400', templateVars);
//           });
//       });
//   }
// });

module.exports = router;
