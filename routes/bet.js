var express = require('express');
var router = express.Router();
var con = require('./db/connector');
const { v4: uuidv4 } = require('uuid');

router.get('/matchs', function(req, res, next) {
      con.query('SELECT * FROM parties', (err, rows) => {
      res.send(rows);

      res.render('All matchs', {
        title: rows
    })
  });
});

module.exports = router;