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


//GET requests for index//

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then((users) => {
      res.render('index');
    })

});

//POST requests for index//

// router.post('/', (req, res) => {
//   // let emailLogin = req.body.email;
//   // let passwordLogin = req.body.password;
//   const query = `SELECT * FROM users`;
//     console.log(query);
//     db.query(query)
//       .then(data => {
//         const users = data.rows;
//         console.log(data)
//         res.json({ users });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });


//   //takes in the email and outputs the id attached to the email
// const findUserByEmail = (email, da) => {
//   for (const user in database) {
//     if (database[user].email === email) {
//       return database[user]
//     }
//   }
//   return null;
// }

//   let logininfo = {req.body.email, req.body.password}


//   if (user) {

//     req.session.user_id = user.id
//     res.redirect(`/map_landing`);

//   }
// })

// //error handling, if user and pass are zero return error
// if (email.length === 0 && password.length === 0) {
//   return res.status(400).send(`400 error - Missing E-mail or Password`);
// }
// //if emailmatch is true, then error
// const user = findUserByEmail(email, users)
// if (!user) {
//   return res.status(400).send(`400 error - No user found!`);
// }
// if (!bcrypt.compareSync(password, user.password)) {
//   return res.status(400).send(`400 error - Incorrect email or password!`);
// }


module.exports = router;
