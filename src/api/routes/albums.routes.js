const express = require('express');
const AlbumsRoutes = express.Router();

const { upload } = require('../../middlewares/files.middlewares');
const {
  getAllAlbums,
  createAlbum,
} = require('../controllers/albums.controllers');

AlbumsRoutes.get('/', getAllAlbums);
AlbumsRoutes.post('/', upload.single('image'), createAlbum);

module.exports = AlbumsRoutes;
