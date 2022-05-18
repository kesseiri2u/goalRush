var express = require('express');
var router = express.Router();
var con = require('./db/connector');

router.get("/ticket/:result", async function (req, res) {
    try {
        await con.query('SELECT * FROM tickets WHERE result = ?', [req.params.result], (error, results, fields) => {
            con.release();
            res.end((results[0].bet).toString());
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
