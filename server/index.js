// require //
const express = require("express");

const cors = require("cors");

// const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const passport = require("passport");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const db = require("./config/db_config");

const jwtStrategy = require("./strategies/JwtStrategy");

const localStrategy = require("./strategies/LocalStrategy");

const authenticate = require("./config/authenticate");

const userRouter = require("./routes/userRoutes");


// call //
const app = express();
// port //
const port = 8000;

// middleware //
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// whitelist url //
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

// CORS Policy //
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};

app.use(cors(corsOptions));

app.use(passport.initialize());

app.use("/user", userRouter);

// routes //
app.get("/", function (req, res) {
  res.send({ status: "success" });
});

//Start the server on port
app.listen(port, function (err) {
  if (err) {
    console.log(`Server is running on port: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
