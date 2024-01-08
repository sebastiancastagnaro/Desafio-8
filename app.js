// app.js
const express = require('express');
const passport = require('passport');
const app = express();

require('./passport-config')(passport); // Asegúrate de tener la ruta correcta

// ... otras configuraciones de express ...

app.use(passport.initialize());
