const request = require('request')

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bulan%20Sorsogon.json?access_token=pk.eyJ1IjoianVhbm1hdHRlbyIsImEiOiJja3VwdTJ3OHI0bzA4MndvOGtvZWhrY20wIn0.c2s4TtrNnvq0YfiXGoXp-g&limit=1'


request({ url : geocodeURL, json:true}, (error, response) => {
    if (error){
        console.log('Unable to connect to the location services!')
    }
    else if(response.body.features.length === 0 ){
        console.log('Location cannot be found. Try another location')
    }
    else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
}
    
})