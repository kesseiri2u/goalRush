var express = require('express');
var router = express.Router();
var con = require('./db/connector');

router.get('/tickets/:resultat', function(req, res, next) {
      con.query('SELECT * FROM tickets WHERE result = ?', , [req.params.result], (err, rows) => {
      if(err) throw err;
      res.end((rows[0].bet).toString());

      res.render('All matchs', {
        title: rows
    })
  });
});

module.exports = router;