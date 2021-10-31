const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=029fb500b2b64b0652d7f09c39c7af5e/40,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''
  response.on('data', (chunk) => {
    data = data + chunk.toString()
    // console.log(chunk)
  })  
  response.on('end', () => {
    // console.log(data)
    const body = JSON.parse(data)
    console.log(body)
  })
})
request.on('error', (error) => {
    console.log('An error', error)
})
request.end()
