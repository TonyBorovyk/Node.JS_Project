const {getAlbums, getAlbumById} = require('../controllers/albums.controller')

async function routes(fastify, options) {
  fastify.get('/list', async (req, res) => {
    res.send(await getAlbums(req, res))
  });
  fastify.get('/:id', async (req, res) => {
    res.send(await getAlbumById(req, res))
  });
}

module.exports = routes;
