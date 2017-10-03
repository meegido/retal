const express = require('express');
const passport = require('passport');
const path = require('path');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const debug = require('debug')("retal:"+path.basename(__filename).split('.')[0]);

var authRoutes = express.Router();

authRoutes.post('/signup', (req, res, next) => {
  const {username, email, password} = req.body;

  if (!username || !password || !email)
    return res.status(400).json({ message: 'Provide username and password' });

  debug('Find user in DB');

  User.findOne({ username },'_id').exec().then(user =>{
    if(user)
      return res.status(400).json({ message: 'The username already exists' });

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    debug('creating user');
    const theUser = new User({
      username,
      email,
      password: hashPass
    });
    return theUser.save()
    .then(user =>{
      req.login(user, (err) => {
        if (err)
          return res.status(500).json({ message: 'Something went wrong' });

        res.status(200).json(req.user);
      });
    })
  })
  .catch(e => {
    console.log(e);
    res.status(400).json({ message: 'Something went wrong' })
  });
});


module.exports = authRoutes;
