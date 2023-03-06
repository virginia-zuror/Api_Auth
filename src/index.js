const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connect = require('./utils/connect.js');
const { configCloudinary } = require('./middlewares/files.middlewares');

dotenv.config();

configCloudinary();

const PORT = process.env.PORT || 8081;

const server = express();

connect();

server.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
server.use(express.json({ limit: '5mb' }));
server.use(express.urlencoded({ limit: '5mb', extended: true }));

const AlbumsRoutes = require('./api/routes/albums.routes');
server.use('/api/v1/albums', AlbumsRoutes);

const ArtistsRoutes = require('./api/routes/artists.routes');
server.use('/api/v1/artists', ArtistsRoutes);


server.use('*', (req, res, next) => {
  const error = new Error('Route not found 🙊');
  return next(error);
});

server.disable('x-powered-by');
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 😎`);
});
