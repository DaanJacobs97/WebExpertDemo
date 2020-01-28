var express = require('express');
var router = express.Router();
var db = require('./db');
var Car = require('./models/car');

/** Root */
router.get('/', (req, res) => {
    //TODO: uitleg gebruik API
    res.send('usage: send requests to /api/cars');
});

/** GET all cars */
router.get('/cars', (req, res) => {
    Car.find((err, cars) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(cars);
        }
    });
});

/** GET car by id */
router.get('/cars/:id', (req, res) => {
    Car.findById(req.params.id, (err, car) => {
        if (err)
            res.send(err);

        res.json(car);
    });
});

/** POST new car */
router.post('/cars', (req, res) => {
    let car = new Car({
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        code: req.body.code,
        style: req.body.style,
        productionStart: req.body.productionStart,
        productionEnd: req.body.productionEnd,
        wiki: req.body.wiki
    });

    car.save((err, car) => {
        if (err)
            res.send(err); console.log('Request failed');

        res.json(car);
        console.log(car);
    });
});

/** DELETE car by id */
router.delete('/cars/:id', (req, res) => {
    Car.remove({_id: req.params.id}, (err, removed) => {
        if (err)
            res.send(err);
        
        res.json(removed);
    });
});

/** PUT/UPDATE existing car */
router.put('/cars', (req, res) => {
    Car.findById(req.body._id, (err, car) => {
        car.manufacturer = req.body.manufacturer;
        car.model = req.body.model;
        car.code = req.body.code;
        car.style = req.body.style;
        car.productionStart = req.body.productionStart;
        car.productionEnd = req.body.productionEnd;
        car.wikipedia = req.body.wiki;

        car.save((saveErr, saveCar) => {
            if (saveErr) 
                res.send(saveErr);

            res.send(saveCar);
        });
    });
});

module.exports = router;