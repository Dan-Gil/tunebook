const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const {isAuth} = require('../middleware/auth');

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => res.status(201).json({user}))
    .catch(err => res.status(500).json({err}));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  User.findById(req.user._id)
    .populate('instruments genres friends files')
    .then(user => res.status(200).json({user}))
    .catch(err => res.status(500).json({err}));
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({msg: 'Logged out'});
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .populate('instruments genres friends files')
    .then(user => res.status(200).json({user}))
    .catch(err => res.status(500).json({err}));
});

module.exports = router;
