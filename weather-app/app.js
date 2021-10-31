
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



geocode ('Prieto Diaz', (error, data) =>{
    console.log('Error', error)
    console.log('Data', data)
})



forecast(12.6650, 123.8877, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })