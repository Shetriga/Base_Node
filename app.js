const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const fixedRoutes = require("./routes/fixed");

const port = process.env.PORT || 3000;

app.use("/fixed", fixedRoutes);

// Error Handler
app.use((error, req, res, next) => {
  console.log(error.message);
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  res.status(error.statusCode).json({
    errorMessage: error.message,
  });
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(port, () => {
      console.log("Database Connected and server is listening");
    });
  })
  .catch((e) => {
    console.log(e);
  });
