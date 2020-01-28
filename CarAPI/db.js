//db.js - logica voor verbinden met MongoDB
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/CarStudyDb',{ useNewUrlParser: true, useUnifiedTopology: true }, function () {
	console.log('mongoose connected');
});
module.exports = db;