const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

const countryModel = mongoose.model('countries', countrySchema);
module.exports = countryModel;