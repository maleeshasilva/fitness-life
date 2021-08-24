const express = require("express");
const Router = express.Router();
var db = require('../config/connection');


Router.get("/physical", (req, res) => {
  db.query("SELECT t.trainerId, t.firstName, t.lastName, a.date, a.time, t.type, COUNT(*) AS 'count' FROM trainer t, appointment a WHERE t.trainerId = a.trainerID AND t.type = 0 GROUP BY t.trainerId", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

Router.get("/online", (req, res) => {
    db.query("SELECT t.trainerId, t.firstName, t.lastName, a.date, a.time, t.type, COUNT(*) AS 'count' FROM trainer t, appointment a WHERE t.trainerId = a.trainerID AND t.type = 1 GROUP BY t.trainerId", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/attendance-online", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM trainerattendance a, trainer t WHERE attendance = 1 AND t.trainerId = a.trainerId AND t.type = 1", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/attendance-physical", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM trainerattendance a, trainer t WHERE attendance = 1 AND t.trainerId = a.trainerId AND t.type = 0", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});


module.exports = Router;