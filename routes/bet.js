var express = require('express');
var router = express.Router();
var con = require('./db/connector');
const { v4: uuidv4 } = require('uuid');

router.get('/', async function(req, res, next) {
    await con.query('SELECT * FROM bets', (err, rows) => {
        const bets = rows;
  
        res.render("bet", {
          bet : bets
      })
    });
  });

router.post("/parier/:id/:result", async function (req, res) {
    try {
        let team;
        switch (req.params.result) {
            case "1":
                team = "home_team_rating"
                break;
            case "2":
                team = "draft_rating"
                break;
            case "3":
                team = "away_team_rating"
                break;
          }
    await con.query("INSERT INTO `bets` (party_id, ticket_id, pronostic, potentialGain) VALUES (?, ?, ?, (SELECT " + team + " FROM parties WHERE parties.id = ?))", [req.params.id, uuidv4(), req.params.result, req.params.id], (error, results, fields) => {
        con.release();
            res.status(200).json();
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;