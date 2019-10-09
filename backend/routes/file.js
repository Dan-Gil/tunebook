const express = require('express');
const router = express.Router();
const File = require('../models/File');
const User = require('../models/User');
const {isAuth} = require('../middleware/auth');
const uploadCloudinary = require('../config/cloudinary');

router.get('/file/:id', (req, res, next) => {
  File.findById(req.params.id)
    .then((file) => res.status(200).json(file))
    .catch((err) => res.status(500).json({err}));
});

router.post('/file', isAuth, uploadCloudinary.single('photo'), (req, res, next) => {
  if(req.file){
    req.body.photo = req.file.secure_url
  }
  let createdFile;
  File.create(req.body)
    .then((file) => {
      createdFile = file;
      return User.findByIdAndUpdate(req.user._id, {
        $push: { files: file }
      })
    })
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
