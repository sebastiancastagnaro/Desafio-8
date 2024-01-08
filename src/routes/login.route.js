// login.route.js
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Ruta para autenticación con sesión
router.post('/login', passport.authenticate('local', { session: true }), (req, res) => {
  res.json({ message: 'Inicio de sesión exitoso con sesión' });
});

// Ruta para autenticación con JWT
router.post('/login-jwt', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Autenticación fallida con JWT' });
    }

    const payload = { sub: user._id };
    const token = jwt.sign(payload, 'tu_secreto', { expiresIn: '1h' });

    res.json({ message: 'Inicio de sesión exitoso con JWT', token });
  })(req, res, next);
});

module.exports = router;
