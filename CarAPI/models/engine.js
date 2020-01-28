var mongoose = require('mongoose');

const engineSchema = mongoose.Schema({
    manufacturer: {type: String, required: true},
    code : {type: String, required: true},
    displacement: {type: String, required: true},
    bore: {type: String, required: true},
    stroke: {type: String, required: true},
    power: {type: String, required: true},
    torque: {type: String, required: true},
    compression: {type: String, required: true},
    redline: {type: String, required: true},
    revlimit: {type: String, required: true},
    wiki : {type: String, required: true}
});

var Engine = mongoose.model('Engine', engineSchema);
module.exports = Engine;