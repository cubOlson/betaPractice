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
});

app.get('/albums/:albumId(\\d+)', (req, res) => {
  const { albumId } = req.params;
  const album = getAlbumByAlbumId(albumId);
  res.json({ album });
});

app.post('/artist/:artistId(\\d+)/albums', (req, res) => {
  const { artistId } = req.params;
  const album = addAlbumByArtistId(artistId, req.body);
  res.json({album});
});

app.put('/albums/:albumId(\\d+)', (req, res) => {
  const { albumId } = req.params;
  const editedAlbum = editAlbumByAlbumId(albumId, req.body);
  res.json({editedAlbum});
});

app.delete('/albums/:albumId(\\d+)', (req, res) => {
  const { albumId } = req.params;
  deleteAlbumByAlbumId(albumId);
  res.send('Successfully deleted');
});

app.get('/albums', (req, res) => {
  const album = getFilteredAlbums(req.query.startsWith);
  res.json({album});
});

app.get('/artists/:artistId(\\d+)/songs', (req, res) => {
  const { artistId } = req.params;
  const songs = getSongsByArtistId(artistId);
  res.json({songs});
});

app.get('/albums/:albumId(\\d+)/songs', (req, res) => {
  const { albumId } = req.params;
  const songs = getSongsByAlbumId(albumId);
  res.json({songs});
});

app.get('/songs/:songId(\\d+)', (req, res) => {
  const { songId } = req.params;
  const song = getSongBySongId(songId);
  res.json({song});
});

app.post('/albums/:albumId(\\d+)/songs', (req, res) => {
  const { albumId } = req.params;
  const song = addSongByAlbumId(albumId, req.body);
  res.json({song});
});
// Your code here

const port = 5000;
app.listen(5000, () => console.log('Server is listening on port', port));