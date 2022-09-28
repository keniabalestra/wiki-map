const db = require('../db/connection');
// Add a new user to the database.
const addUser = function(user) {
  const queryString = `INSERT INTO users (
    email, password)
    VALUES ($1, $2)
    RETURNING *;`;
  return db
    .query(queryString, [user.email, user.password])
    .then((response) => {
      //console.log(response.rows)
      return response.rows[0];
    });
  //return Promise.resolve(user);
};
exports.addUser = addUser;


const getUserbyEmail = function(user) {
  const queryString = `SELECT * FROM users WHERE email = $1;`;
  return db
    .query(queryString, [user.email])
    .then((response) => {
      return response.rows;
    });
};

exports.getUserbyEmail = getUserbyEmail;

const getMapbyId = function(id) {
  const queryString = `SELECT * FROM maps WHERE id = $1;`;
  return db
    .query(queryString, [id])
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    });
};
exports.getMapbyId = getMapbyId;

///////////////////////////
//Get USERS FAVORITE MAPS//
//////////////////////////
const getFavoriteMapsOfUser = (user_id) => {
  console.log('user_id', user_id)

  // const favsgrabber = `SELECT * FROM favourites WHERE user_id = $1;`;
  // console.log(`SELECT * FROM favourites WHERE user_id = $1;`)
    return db.query(`SELECT * FROM favourites WHERE user_id = $1`, [user_id])
    .then((res) =>
    // res.render('maps first three maps and users maps')
    // console.log('favsdata', res);
    console.log('response', res.rows[0])
    )
  }

  exports.getFavoriteMapsOfUser = getFavoriteMapsOfUser;

  ///////////////////////////
//Get ALL COMMUNITY MAPS//
//////////////////////////


const getCommunityMaps = () => {

    return db.query(`SELECT * FROM maps`)
    .then((res) =>


    console.log('response', res.rows)
    )
  }

exports.getCommunityMaps = getCommunityMaps;
