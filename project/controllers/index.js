const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-Route.js');
const dashboardRoutes = require('./dashboard-Route.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
