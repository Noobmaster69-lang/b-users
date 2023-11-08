const express = require('express');
const allUserRouter = require('./allUser.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/User', allUserRouter);

module.exports = router;