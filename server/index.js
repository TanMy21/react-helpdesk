// require //
const express = require("express");

const config = require('config');

const db = require('./config/db_config');

const app = express();

const cors = require('cors');

const users = require('./routes/users');

const auth = require('./routes/auth');

const admin = require('./routes/admin');



if(!config.get('jwtPrivateKey')){
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}


// port //
const port = 8000;

// middleware //
app.use(express.json());

app.use(cors());

app.use('/api/users', users);

app.use('/api/auth', auth);

app.use('/api/admin', admin);



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
