const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");

dotenv.config();
app.use(express.json());

// Database connection
const debConnect = async (connectionString) => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection established!");
  } catch (err) {
    console.log("Database connection failed!!", err);
  }
};

debConnect(process.env.MONGO_URL);

// Routes
app.use("/api/auth", authRoutes);

app.listen("5000", () => {
  console.log(`App listening at port 5000`);
});
