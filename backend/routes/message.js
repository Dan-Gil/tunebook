const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const {isAuth} = require('../middleware/auth');

router.get('/message', isAuth, (req, res, next) => {
  const options = {};
  const search = {
    to: req.user._id
  };

  if (req.query.unread) {
    search.read = false;
  }

  if (req.query.skip) {
    options.skip = Number(req.query.skip);
  }

  if (req.query.limit) {
    options.limit = Number(req.query.limit);
  }

  Message.find(search, null, options)
    .then(messages => res.status(200).json(messages))
    .catch(err => res.status(500).json({err}));
});

router.get('/message/:id', (req, res, next) => {
  Message.findById(req.params.id)
    .then(message => res.status(200).json(message))
    .catch(err => res.status(500).json({err}));
});

router.post('/message', (req, res, next) => {
  Message.create(req.body)
    .then(message => res.status(201).json(message))
    .catch(err => res.status(500).json({err}));
});

router.delete('/message/:id', (req, res, next) => {
  Message.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({}))
    .catch(err => res.status(500).json({err}));
});

module.exports = router;
