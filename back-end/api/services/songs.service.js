/* eslint-disable camelcase */
const fs = require('fs');

const getAllSongsService = () => {
  const songs = fs.readFileSync('api/db/songs.json');
  return JSON.parse(songs).songs;
};

const getAllSongsByOrdersService = ( orders ) => {
  const songs = getAllSongsService();
  return songs;
};

const getSongByIdService = (id) => {
  const songs = getAllSongsService();
  return songs.filter( song => song.track_id == id)[0];
};

module.exports = {
  getAllSongsService,
  getSongByIdService,
  getAllSongsByOrdersService
};
