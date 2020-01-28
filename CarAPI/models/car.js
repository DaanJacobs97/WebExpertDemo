var mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    manufacturer: {type: String, required: true},
    model: {type: String, required: true},
    code: {type: String, required: true},
    style: {type: String},
    productionEnd: {type: Number},
    productionStart: {type: Number},
    wiki: {type: String}
});

var Car = mongoose.model('Car', carSchema);
module.exports = Car;