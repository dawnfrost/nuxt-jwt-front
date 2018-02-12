import express from 'express';
import {Nuxt, Builder} from 'nuxt';
import api from './api';
import conf from '../config/conf';

const app = express();
const router = express.Router();
app.set('port', conf.service.port);

// Import API Routes
router.use(conf.service.path, api);

app.use(router);

// Import and Set Nuxt.js options
const nuxtConfig = require('../nuxt.config.js');

// Init Nuxt.js
const nuxt = new Nuxt(nuxtConfig);

// Build only in dev mode
if (nuxtConfig.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(conf.service.port);
console.log('Server listening on ' + conf.service.port); // eslint-disable-line no-console
