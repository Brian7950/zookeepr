const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals.json');
const router = require('express').Router();


router.get('/animals', (req, res) => {
    //first parameter is request
    //using send method from res Parameter to send strings like hello! to client / res Obj has a lot more methods then send
    //to send JSON change send() to json()
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results)
});

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/animals', (req, res) => {
    //set id based on what the next index of the arry will be
    req.body.id = animals.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {

        // add animla to json file and animals array in this function 
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
});

module.exports = router;

