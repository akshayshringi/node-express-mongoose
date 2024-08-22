const express = require('express');
const router = express.Router();

// load all objects here
const Countries = require('../objects/countries');
const countriesObj = new Countries();

router.get('/country/countryListing', countriesObj.getCountries);
router.post('/country/saveCountry', countriesObj.saveCountry);
router.patch('/country/updateCountry/:id', countriesObj.updateCountry);
router.get('/country/countryById/:id', countriesObj.getSingleCountry);
router.delete('/country/delete/:id', countriesObj.deleteCountry);


module.exports = router;