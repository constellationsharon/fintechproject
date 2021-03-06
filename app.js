const express = require('express')
const app = express()
require('dotenv').config();
 const { auth } = require('express-openid-connect');

app.use(
  auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: process.env,
  })
);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)