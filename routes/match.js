var express = require('express');
var router = express.Router();
var con = require('./db/connector');

router.get('/', async function(req, res, next) {
  await con.query('SELECT * FROM parties', (err, rows) => {
      const matchs = rows;

      res.render("match", {
        match : matchs
    })
  });
});

module.exports = router;