const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { userRoutes } = require("./src/routes");

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.on("open", () => console.log("connected to Database"));

// app.get("/", (req, res) => {
//   res.send("<h1>User Data API</h1>");
// });

// app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

app.listen(PORT, () => {
  console.log("Listening in port", PORT);
});

module.exports = app;
