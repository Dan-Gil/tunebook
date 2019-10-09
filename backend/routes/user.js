const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {isAuth} = require('../middleware/auth');
const {getPartialSearchQuery} = require('../util');

function addSearchParam(req, search, field) {
  if (req.query[field]) {
    if (!search.$or) {
      search.$or = [];
    }
    search.$or.push(getPartialSearchQuery(field, req.query[field]));
  }
}

function addArraySearch(req, search, field) {
  if (req.query[field]) {
    if (!search.$or) {
      search.$or = [];
    }
    const query = Array.isArray(req.query[field])
      ? {
          $or: req.query[field].map(item => ({[field]: item}))
        }
      : req.query[field];

    search.$or.push(query);
  }
}

router.get('/user', (req, res, next) => {
  let search = {};
  const options = {};

  ['username', 'name', 'lastName', 'location'].forEach(item => {
    if (req.query[item]) {
      addSearchParam(req, search, item);
    }
  });

  addArraySearch(req, search, 'instruments');
  addArraySearch(req, search, 'genres');
  addArraySearch(req, search, 'influences');

  if (req.query.musicReading) {
    if (!search.$or) {
      search.$or = [];
    }
    search.$or.push({
      musicReading: true
    });
  }

  if (req.query.skip) {
    options.skip = Number(req.query.skip);
  }

  if (req.query.limit) {
    options.limit = Number(req.query.limit);
  }

  console.log(JSON.stringify(search));

  User.find(search, null, options)
    .populate('instruments genres friends files')
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({err}));
});

router.get('/user/:id', async (req, res, next) => {
  await User.findById(req.params.id)
    .populate('instruments genres friends files')
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({err}));
});

router.post('/user', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({err}));
});

router.put('/user', isAuth, (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({err}));
});

module.exports = router;
