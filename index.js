const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 5000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/teams', db.getTeams)
app.get('/managers', db.getManagers)
app.get('/players', db.getPlayers)
app.get('/match', db.getMatch)
app.get('/referee', db.getReferee)
app.get('/match_referees', db.getMatchReferees)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
