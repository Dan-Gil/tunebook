const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');
const {getPartialSearchQuery} = require("../util");

router.get('/genre', (req, res, next) => {
  let search = {};
  const options = {};
  if (req.query.name) {
    search = getPartialSearchQuery('name', req.query.name);
  }

  if (req.query.skip) {
    options.skip = Number(req.query.skip);
  }

  if (req.query.limit) {
    options.limit = Number(req.query.limit);
  }

  Genre.find(search, null, options)
    .then((genres) => res.status(200).json(genres))
    .catch((err) => res.status(500).json({ err }));
});

router.get('/genre/:id', (req, res, next) => {
  Genre.findById(req.params.id)
    .then((genre) => res.status(200).json(genre))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/genre', (req, res, next) => {
  Genre.create(req.body)
    .then((genre) => res.status(201).json(genre))
    .catch((err) => res.status(500).json({ err }));
});

router.put('/genre/:id', (req, res, next) => {
  Genre.findByIdAndUpdate(req.params.id, req.body)
    .then((genre) => res.status(201).json(genre))
    .catch((err) => res.status(500).json({ err }));
});


router.delete('/genre/:id', (req, res, next) => {
  Genre.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({}))
    .catch((err) => res.status(500).json({ err }));
});

module.exports = router;
