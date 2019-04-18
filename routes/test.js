var db = require('../db/index.js');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.status(404).send('hi i am here');
});
router.get('/tester/:foo', (req, res, next) => {
    var foo = req.params.foo;
    res.send('tester test testing it');
});
router.post('/tester', (req, res, next) => {
    var foo = req.body.foo;
    res.send('hey this is ' + foo);
});
router.post('/create-user', (req, res, next) => {
    db.none("insert into users (username, password_digest, email) values (${username}, ${password}, ${email})", req.body)
    .then(() => res.status(204).send())
    .catch(err =>  next(err));
})
module.exports = router;