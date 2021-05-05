require('dotenv').config();

const fatalError = require('../utils/fatalError.js');

module.exports = {
  tables: {
    ARTIST: 'Artist',
    TRACK_CATEGORY: 'Track_Category',
    USER: 'User',
    ROOM: 'Room',
    ALBUM: 'Album',
    PLAYLIST: 'Playlist',
    TRACK_INFO: 'Track_Info',
  },

  errors: {
    DATABASE: 'DatabaseError',
  },

  db: {
    defaultType: process.env.DB_WRAPPER_TYPE || 'knex',

    names: {
      KNEX: 'knex',
    },

    config: {
      knex: {
        client: 'postgresql',
        connection: {
          user:
            process.env.POSTGRES_USER ||
            fatalError('POSTGRES_USER is not defined'),
          host:
            process.env.POSTGRES_HOST ||
            fatalError('POSTGRES_HOST is not defined'),
          port:
            process.env.EXTERNAL_POSTGRES_PORT ||
            fatalError('EXTERNAL_POSTGRES_PORT is not defined'),
          database:
            process.env.POSTGRES_DB || fatalError('POSTGRES_DB is not defined'),
          password:
            process.env.POSTGRES_PASSWORD ||
            fatalError('POSTGRES_PASSWORD is not defined'),
        },
        pool: {
          min: 2,
          max: 10,
        },
        debug: true,
      },
    },
  },
};