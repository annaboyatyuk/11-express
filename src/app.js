'use strict';

import express from 'express';
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

import router from './api/api.js';
app.use( router );

let isRunning = false;

let server;
module.exports = {

  start: (port) => {
    if(! isRunning) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        isRunning = true;
        console.log('Server is up on port', port);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    server.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};
