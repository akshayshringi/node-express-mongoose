const CountryModel = require('./countries_model');
 
/**
 * Class to perform countries CRUD operations
 */
class Countries {

    /**
     * constructor
     */
    constructor(){
    }

    /**
     * get countries listing
     * 
     * @method getCountries
     * @params req
     * @return res
     */
    getCountries = async (req, res) => {
        let response = {
            message: '',
            error: '',
            data: ''
        }
        try{
            const countriesData = await CountryModel.find({});
            response.data = countriesData;
            response.message = 'Success';
            res.status(200).send(response);
        }catch(err){
            response.message = err.message;
            res.status(200).send(response);
        }
    }

    /**
     * save country data
     * 
     * @method saveCountry
     * @params req | request
     * @params res | response
     * @return res | response
     */
    saveCountry = async (req, res) => {
        let response = {
            message: '',
            error: '',
            data: ''
        }
        try{
            // create country object and pass the body to save the data 
            const countryObj = new CountryModel(req.body);
            let isSaved = await countryObj.save();
            if(isSaved){
                response.message = `successfully saved ${req.body.code}`;
            }else{
                response.message = `something went wrong`;
            }
            res.status(200).send(response);
        }catch(err){
            response.message = err.message;
            res.status(200).send(response);
        }
    }

    /**
     * update country data
     * 
     * @method updateCountry
     * @params req | request
     * @params res | response
     * @return res | response
     */
    updateCountry = async (req, res) => {
        let response = {
            message: '',
            error: '',
            data: ''
        }
        try{
            const countryData = await CountryModel.findByIdAndUpdate(
                req.params.id,
                req.body
            );
            if(!countryData){
                response.message = 'no record found';
                return res.status(200).send(response);
            }
            const isUpdated = await countryData.save();
            if(isUpdated){
                response.message = `successfully upsated ${req.body.code}`;
            }else{
                response.message = `something went wrong`;
            }
            res.status(200).send(response);
        }catch(err){
            response.message = err.message;
            res.status(200).send(response);
        }
    }

    /**
     * get single country data
     * 
     * @method getSingleCountry
     * @params req | request
     * @params res | response
     * @return res | response
     */
    getSingleCountry = async (req, res) => {
        let response = {
            message: '',
            error: '',
            data: ''
        }
        try{
            const countryData = await CountryModel.findById(
                req.params.id
            );
            if(!countryData){
                response.message = 'no record found';
                return res.status(200).send(response);
            }
            response.data = countryData;
            response.message = 'Success';
            res.status(200).send(response);
        }catch(err){
            response.message = err.message;
            res.status(200).send(response);
        }
    }

    /**
     * update country data
     * 
     * @method deleteCountry
     * @params req | request
     * @params res | response
     * @return res | response
     */
    deleteCountry = async (req, res) => {
        let response = {
            message: '',
            error: '',
            data: ''
        }
        try{
            const countryData = await CountryModel.findByIdAndDelete(
                req.params.id
            );
            if(!countryData){
                response.message = 'no record found';
                return res.status(200).send(response);
            }
            response.message = `successfully deleted`;
            res.status(200).send(response);
        }catch(err){
            response.message = err.message;
            res.status(200).send(response);
        }
    }

}

module.exports = Countries;