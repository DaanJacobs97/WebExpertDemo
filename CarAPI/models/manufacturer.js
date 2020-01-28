var mongoose = require('mongoose');

const manufacturerSchema = mongoose.Schema({
    name: { type: String, required: true},
    foundedPlace: { type: String, required: true},
    foundedDate: { type: String, required: true},
    logo: { type: String, required: true},
    wiki: { type: String, required: true}
});

var Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);
module.exports = Manufacturer;