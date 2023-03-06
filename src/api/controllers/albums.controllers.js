const Album = require('../models/album.model');

const getAllAlbums = async (req, res, next) => {
  try {
    const allAlbums = await Album.find();
    return res.status(200).json(allAlbums);
  } catch (error) {
    return next("Could't find albums 😿", error);
  }
};

const createAlbum = async (req, res, next) => {
  try {
    const album = new Album({
      ...req.body,
      image: req.file
        ? req.file.path
        : 'https://res.cloudinary.com/do7bnejaz/image/upload/v1678112977/images_wf0gdd.jpg',
    });
    const createdAlbum = await album.save();
    return res.status(201).json(createdAlbum);
  } catch (error) {
    return next('Error creating album 😖', error);
  }
};

module.exports = { getAllAlbums, createAlbum };
