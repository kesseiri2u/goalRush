var express = require('express');
var router = express.Router();
var con = require('./db/connector');

router.get('/tickets', function(req, res, next) {
      con.query('SELECT * FROM tickets', (err, rows) => {
      if(err) throw err;
      res.send(rows);

      res.render('All matchs', {
        title: rows
    })
  });
});

module.exports = router;