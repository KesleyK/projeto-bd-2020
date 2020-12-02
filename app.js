const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./DB/connection");
const institutionRoutes = require("./routes/institution");
const messageRoutes = require("./routes/message");
const userRoutes = require("./routes/user");
const userTypeRoutes = require("./routes/userType");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/institution", institutionRoutes);
app.use("/users", userRoutes);
app.use("/usertypes", userTypeRoutes);
app.use("/message", messageRoutes);

connection.connect((err) => {
  if (err) {
    console.log("Something went wrong. Could not connect to database.");
  }

  app.listen(3001, () => console.log("Listening at 3001."));
});
