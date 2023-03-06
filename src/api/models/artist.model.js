const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    country: { type: String, required: true },
    photo: { type: String, required: true, trim: true },
    albums: [{type: mongoose.Schema.Types.ObjectId, ref: "Album"}],
  },
  { timestamps: true }
);

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
