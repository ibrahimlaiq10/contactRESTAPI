const express = require("express");
const dotenv = require("dotenv").config();
const contactRoute = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const port = process.env.PORT || 4500;

connectDB();
const app = express();

app.use(express.json());

app.use("/api/contacts", contactRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App running on Port ${port}`);
});
