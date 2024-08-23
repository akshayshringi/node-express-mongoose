const express = require('express');
const router = express.Router();

// load all controllers here
const Countries = require('../controllers/countries');
const countriesObj = new Countries();

router.get('/country/countryListing', countriesObj.getCountries);
router.post('/country/saveCountry', countriesObj.saveCountry);
router.patch('/country/updateCountry/:id', countriesObj.updateCountry);
router.get('/country/countryById/:id', countriesObj.getSingleCountry);
router.delete('/country/delete/:id', countriesObj.deleteCountry);


module.exports = router;