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
    })
};

exports.getUserbyEmail = getUserbyEmail;
