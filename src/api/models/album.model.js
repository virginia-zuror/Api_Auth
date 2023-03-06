const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    image: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
