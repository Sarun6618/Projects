const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');

router.post('/signup', (req, res) => {
  console.log(req.body.Username);
  User.findOne({ Username: req.body.Username })
    .then(user => {
      if (user) {
        res.send({ message: `User with the username ${req.body.Username} already exists` });
      } else {
        let newUser = new User({
          Username: req.body.Username,
          Email: req.body.Email,
          MobileNo: req.body.MobileNo,
          Password: req.body.Password,
          ConfirmPassword: req.body.ConfirmPassword
        });

        newUser.save()
          .then(() => {
            console.log("User added");
            res.send({ message: `${req.body.Username} registered successfully` });
          })
          .catch(err => {
            console.error(err);
            res.send({ message: "An error occurred during user registration" });
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.send({ message: "An error occurred during user lookup" });
    });
});

router.get("/getUsers", (req, res) => {
  User.find({})
    .then(users => {
      // console.log(users);
      res.send(users);
      // console.log('displayed')
    })
    .catch(err => {
      console.error(err);
      res.send({ message: "An error occurred while retrieving users" });
    });
  });

module.exports = router;
