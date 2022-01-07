const router = require('express').Router();
const homeRoute = require('./home-Route');
const apiRoute = require('./api');
const dashboardRoute = require('./dashboard-Route');

router.use('/', homeRoute);
router.use('/api', apiRoute);
router.use('/dashboard', dashboardRoute);

module.exports = router;
