var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//	Ideally I'd get a list of users from db and return
  res.send('Here you go. --List of users--');
});

module.exports = router;
