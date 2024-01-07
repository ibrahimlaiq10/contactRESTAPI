const mongoose = require("mongoose");

const connectDB = async () => {
  try {
      console.log("inside connect bd func");
      console.log(process.env.MONGO_URL);
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("DATABASE connected");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
module.exports = connectDB;
