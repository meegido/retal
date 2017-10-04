const express = require('express');
const router= express.Router();
const authRoutes = require('./auth');
//aquí requiero las rutas de modelos

router.use('/auth', authRoutes);
//aquí uso las rutas (ruta y archivo)

module.exports = router;
