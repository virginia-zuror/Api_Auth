const express = require('express');
const ArtistsRoutes = express.Router();

const { upload } = require('../../middlewares/files.middlewares');

const {
  getAllArtists,
  createArtist,
  updateArtistById,
} = require('../controllers/artists.controllers');

ArtistsRoutes.get('/', getAllArtists);
ArtistsRoutes.post('/', upload.single('photo'), createArtist);
ArtistsRoutes.patch("/:id", upload.single("photo"), updateArtistById );

module.exports = ArtistsRoutes;
