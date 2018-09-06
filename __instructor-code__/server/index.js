require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
  app.set('db', database);
  console.log('database is kickin :call_me_hand:');
}).catch(error => {
  console.log('-------------- database issue', error);
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});