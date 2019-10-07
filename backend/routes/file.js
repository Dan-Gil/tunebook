const express = require('express');
const router = express.Router();
const File = require('../models/File');

router.get('/file/:id', (req, res, next) => {
  File.findById(req.params.id)
    .then((file) => res.status(200).json(file))
    .catch((err) => res.status(500).json({err}));
});

router.post('/file', (req, res, next) => {
  File.create(req.body)
    .then((file) => res.status(201).json(file))
    .catch((err) => res.status(500).json({err}));
});

router.put('/file/:id', (req, res, next) => {
  File.findByIdAndUpdate(req.params.id, req.body)
    .then((file) => res.status(201).json(file))
    .catch((err) => res.status(500).json({err}));
});


router.delete('/file/:id', (req, res, next) => {
  File.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({}))
    .catch((err) => res.status(500).json({err}));
});

module.exports = router;
