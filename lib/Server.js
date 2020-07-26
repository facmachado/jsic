/**
 * server.js - Web server for JSIC (using Express)
 *
 * Copyright (c) 2020 Flavio Augusto (@facmachado)
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 *
 * Usage: import Server from './lib/Server';
 */


/* jshint esversion: 6 */


/**
 * Initialize
 */

import express from 'express';

const Server = express();

Server.use(express.static('www', {
  setHeaders: res => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT');
    res.setHeader('Robots', 'noindex, nofollow, noarchive');
    res.setHeader('X-UA-Compatible', 'IE=edge, chrome=1');
  }
}));


/**
 * Server UP
 */
Server.listen(3000, 'localhost', _ => {
  console.log('Example web server started at localhost:3000');
});


/**
 * Send back to app.js
 */
export default Server;
