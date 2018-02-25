const express = require('express');
const bodyParser = require(`body-parser`);
const Card = require(`./db/models/Card`);
const cardsRoute = require(`./routes/cards`)
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get(`/`, (req, res) => {
//   console.log('HELLO')
//   res.send(`Smoke Test`);
// })

app.use(`/api/cards`, cardsRoute)

app.listen(PORT, () => {
  console.log(`Server Listening On Port: ${PORT}`);
 })