// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

app.get('/artists', (req, res) => {
  const artists = getAllArtists();
  res.json({artists});
});

app.get('/artists/:artistId', (req, res) => {
  const { artistId } = req.params;
  const artist = getArtistByArtistId(artistId);
  res.json({artist});
});

app.post('/artists', (req, res) => {
  const newArtist = addArtist(req.body);
  res.json({newArtist});
});

// Your code here

const port = 5000;
app.listen(5000, () => console.log('Server is listening on port', port));