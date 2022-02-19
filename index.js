const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 3002
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})
// http://localhost:3002/swapi?search=hello

// GET request -- use query strings -- req.query
// POST, PUT, PATCH -- use the request body -- req.body
// url params /:id -- use the url -- req.params
app.get('/swapi', (req, res) => {
  const url = `https://swapi.dev/api/people/?search=${req.query.search}`
  console.log(url)
  axios.get(url)
    .then(response => {
      const searchResults = response.data.results
      res.render('results.ejs', { results: searchResults })
    })
})

app.listen(PORT, err => {
  if (err) console.log(err)
  console.log(`listening on port ${PORT} 🎧`) 
})