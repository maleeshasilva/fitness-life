const express = require("express");
const Router = express.Router();
var db = require('../config/connection');


Router.get("/pending", (req, res) => {
  db.query("SELECT o.orderID, o.invoiceNo, p.productName, o.quantity, o.tStatus, p.price FROM `Order` o, Product p WHERE o.productID = p.productID AND tStatus = 0", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

Router.get("/delivery", (req, res) => {
    db.query("SELECT o.orderID, o.invoiceNo, p.productName, o.quantity, o.tStatus, p.price FROM `Order` o, Product p WHERE o.productID = p.productID AND tStatus = 1", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });
  
  Router.get("/complete", (req, res) => {
    db.query("SELECT o.orderID, o.invoiceNo, p.productName, o.quantity, o.tStatus, p.price FROM `Order` o, Product p WHERE o.productID = p.productID AND tStatus = 2", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  }); 
  
  Router.get("/new", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM `order` WHERE orderDate >= DATE(NOW()) - INTERVAL 7 DAY", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/revenue", (req, res) => {
    db.query("SELECT p.price, o.quantity FROM `order` o, product p WHERE o.productID = p.productID AND orderDate >= DATE(NOW()) - INTERVAL 30 DAY", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/graph/revenue", (req, res) => {
    db.query("SELECT date(o.orderDate),sum(p.price*o.quantity) FROM product p,`order` o WHERE p.productID=o.productID GROUP BY date(orderDate)", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/graph/sales", (req, res) => {
    db.query("SELECT (DATE(NOW()) - INTERVAL `day` DAY) AS `DayDate`, COUNT(orderid) AS 'count' FROM (SELECT 0 AS `day` UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6) AS `week` LEFT JOIN `order` ON DATE(`orderDate`) = (DATE(NOW()) - INTERVAL `day` DAY) GROUP BY `DayDate` ORDER BY `DayDate` ASC", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

module.exports = Router;