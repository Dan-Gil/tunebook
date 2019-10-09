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
    search.read = {$ne: true};
  }

  if (req.query.skip) {
    options.skip = Number(req.query.skip);
  }

  if (req.query.limit) {
    options.limit = Number(req.query.limit);
  }

  Message.find(search, null, options)
    .populate('to from')
    .then(messages => res.status(200).json(messages))
    .catch(err => res.status(500).json({err}));
});

router.put('/message/read', isAuth, (req, res, next) => {
  Message.update({
    to: req.user._id,
    read: {$ne: true}
  }, {$set: {read: true}}, {multi: true})
    .then(() => res.status(200).json({}))
    .catch(err => res.status(500).json({err}));
});

router.get('/message/:id', (req, res, next) => {
  Message.findById(req.params.id)
    .populate('to from')
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
