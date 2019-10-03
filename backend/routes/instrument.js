const express = require('express');
const router = express.Router();
const Instrument = require('../models/Instrument');
const {getPartialSearchQuery} = require("../util");

router.get('/instrument', (req, res, next) => {
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

  Instrument.find(search, null, options)
    .then((instruments) => res.status(200).json(instruments))
    .catch((err) => res.status(500).json({ err }));
});

router.get('/instrument/:id', (req, res, next) => {
  Instrument.findById(req.params.id)
    .then((instrument) => res.status(200).json(instrument))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/instrument', (req, res, next) => {
  Instrument.create(req.body)
    .then((instrument) => res.status(201).json(instrument))
    .catch((err) => res.status(500).json({ err }));
});

router.put('/instrument/:id', (req, res, next) => {
  Instrument.findByIdAndUpdate(req.params.id, req.body)
    .then((instrument) => res.status(201).json(instrument))
    .catch((err) => res.status(500).json({ err }));
});


router.delete('/instrument/:id', (req, res, next) => {
  Instrument.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({}))
    .catch((err) => res.status(500).json({ err }));
});

module.exports = router;
