const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fileUpload = require('express-fileupload');

var db = require('./config/connection');
var ShopRoutes = require('./routes/shop')
var PaymentRoutes = require('./routes/payments')
var TrainersRoutes = require('./routes/trainers')
var MembersRoutes = require('./routes/members')
var UploadRoutes = require('./routes/fileupload')
var ProductRoutes = require('./routes/products')

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/orders", ShopRoutes);
app.use("/payments", PaymentRoutes);
app.use("/trainers", TrainersRoutes);
app.use("/members", MembersRoutes);
app.use("/file", UploadRoutes);
app.use("/product", ProductRoutes);

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});