// We import express
const express = require("express");
const connection = require("./db/config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user-route");
const profileRoute = require("./routes/profile-route");
const updateRoute = require("./routes/update-route");
const leaderboardRoute = require("./routes/leaderboard-route");

// We store all express methods in a variable called app
const app = express();

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});
app.use(cookieParser());
app.use(express.json());
app.use(cors({origin : true, credentials : true}));

// We store the port we want to use in a variable.
const port = 3000;

app.get("/", (request, response) => {
  response.send("Welcome to Beesage API");
});

app.use("/lb", leaderboardRoute);
app.use("/auth", userRoute);
app.use("/profile", profileRoute);
app.use("/update", updateRoute);

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
