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
  next();
});

app.get('/artists', (req, res) => {
  const artists = getAllArtists();
  res.json({artists});
});

app.get('/artists/:artistId(\\d+)', (req, res) => {
  const { artistId } = req.params;
  const artist = getArtistByArtistId(artistId);
  res.json({artist});
});

app.post('/artists', (req, res) => {
  const newArtist = addArtist(req.body);
  res.json({newArtist});
});

app.patch('/artists/:artistId(\\d+)', (req, res) => {
  const { artistId } = req.params;
  const editedArtist = editArtistByArtistId(artistId, req.body);
  res.json({editedArtist});
});

app.delete('/artists/:artistId(\\d+)', (req, res) => {
  const { artistId } = req.params;
  deleteArtistByArtistId(artistId);
  res.send('Successfully deleted');
});

app.get('/artists/latest', (req, res) => {
  const latest = getLatestArtist();
  res.json({latest});
});

app.get('/artists/:artistId(\\d+)/albums', (req, res) => {
  const { artistId } = req.params;
  const albums = getAlbumsByArtistId(artistId);
  res.json({albums});
});

app.get('/artists/latest/albums', (req, res) => {
  const albums = getAlbumsForLatestArtist();
  res.json({albums});
})

// Your code here

const port = 5000;
app.listen(5000, () => console.log('Server is listening on port', port));