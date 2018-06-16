'use strict';

require('dotenv').config();
// import 'dotenv';

require('babel-register');
// import 'babel-register';

require('./src/app.js').start(process.env.PORT);
