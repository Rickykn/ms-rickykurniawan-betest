const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const { userRoutes } = require("./routes");

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.on("open", () => console.log("connected to Database"));

app.get("/", (req, res) => {
  res.send("<h1>User Data API</h1>");
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("Listening in port", PORT);
});

module.exports = app;
