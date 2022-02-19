const url = 'https://swapi.dev/api/people'

const axios = require('axios')

// axios.get(url)
//   .then(response => {
//     console.log(response.data.results[0].homeworld)
//     // by returning a promise from a dot then -- we can dot then again
//     return axios.get(response.data.results[0].homeworld)
//   })
//   .then(response => {
//     console.log(response.data)
//   })
//   .catch(console.log)

axios.get(url + '/?search=' + 'r2')
  .then(response => {
    console.log(response.data)
  })