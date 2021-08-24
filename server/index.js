const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

var db = require('./config/connection');
var ShopRoutes = require('./routes/shop')
var PaymentRoutes = require('./routes/payments')
var TrainersRoutes = require('./routes/trainers')
var MembersRoutes = require('./routes/members')

app.use(cors());
app.use(express.json());

app.use("/orders", ShopRoutes);
app.use("/payments", PaymentRoutes);
app.use("/trainers", TrainersRoutes);
app.use("/members", MembersRoutes);

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});