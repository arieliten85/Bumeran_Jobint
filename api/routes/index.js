const express = require('express');
const router = express.Router();
const search = require('./searchRouter');
const recruitersAri = require('./recruiterRouter');
const recruiters = require('./recruiter');
const countries = require('./countryRoute');
const areas = require('./areaRouter');

router.use('/recruiter', recruitersAri);
router.use('/search', search);
router.use('/recruiter', recruiters); // MODULARIZADA EN recruitersAri
router.use('/country', countries);
router.use('/area', areas);

module.exports = router;
