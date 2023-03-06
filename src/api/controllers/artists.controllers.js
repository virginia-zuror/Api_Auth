const Artist = require('../models/artist.model');
const { deleteImgCloudinary } = require('../../middlewares/files.middlewares');
const getAllArtists = async (req, res, next) => {
  try {
    const allArtists = await Artist.find().populate('albums');
    return res.status(200).json(allArtists);
  } catch (error) {
    return next("couldn't find artists 😿", error);
  }
};

const createArtist = async (req, res, next) => {
  try {
    const artist = new Artist({
      ...req.body,
      photo: req.file
        ? req.file.path
        : 'https://res.cloudinary.com/do7bnejaz/image/upload/v1678112977/images_wf0gdd.jpg',
    });
    const createdArtist = await artist.save();
    return res.status(202).json(createdArtist);
  } catch (error) {
    return next('Error creating artist 😖', error);
  }
};

const updateArtistById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newArtist = new Artist(req.body);
    newArtist._id = id;

    const originalArtist = await Artist.findById(id);

    if (req.file) {
      deleteImgCloudinary(originalArtist.photo); //borra la existente
      newArtist.photo = req.file.path; //coge la que pasamos nueva
    }
    await Artist.findByIdAndUpdate(id, newArtist);
    return res.status(200).json(newArtist); //muestra la nueva
  } catch (error) {
    return next('Failling updating artist 🥺', error);
  }
};

module.exports = { getAllArtists, createArtist, updateArtistById };
