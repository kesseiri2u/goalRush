var express = require('express');
var router = express.Router();
var con = require('./db/connector');

router.get('/', async function(req, res, next) {
  await con.query('SELECT parties.id as id, team_home.name as "team_home", team_away.name as "team_away", parties.home_team_rating, parties.away_team_rating, parties.draft_rating, DATE_FORMAT(parties.date,"%d/%m/%Y") as date FROM parties inner join teams as team_home on parties.home_team = team_home.id inner join teams as team_away on parties.away_team = team_away.id'
  , (err, rows) => {
      const matchs = rows;

      res.render("match", {
        match : matchs
    })
  });
});

module.exports = router;