const { Nuxt } = require('nuxt');
const serverless = require('serverless-http');
const express = require('express');
const nuxtConfig = require('./nuxt.config');

const config = { dev: false, ...nuxtConfig };
const nuxt = new Nuxt(config);

const app = express();
app.use((req, res) => setTimeout(() => nuxt.render(req, res), 0));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});