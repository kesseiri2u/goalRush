var express = require('express');
var router = express.Router();
var con = require('./db/connector');

/* GET users listing. */
router.get('/matchs', function(req, res, next) {
      con.query('SELECT * FROM parties', (err, rows) => {
      if(err) throw err;
      res.send(rows);

      res.render('All matchs', {
        title: rows
    })
  });
});

module.exports = router;