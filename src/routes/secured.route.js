// secured.route.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/secured', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'Esta ruta está protegida con JWT' });
});

module.exports = router;
