
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



console.log(__dirname)

const app = express()

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname, '../templates/partials')


// Set Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup Static directory to server
app.use(express.static(publicDirectoryPath))



// app.com
app.get('', (req, res) =>{
    res.render('index',{
        title: 'Weather',
        name: "Judy D. Funa"
    })
})

// app.com/help
app.get('/help', (req, res) =>{
    res.render('help',{
        helpText: ' This is the text',
        title: 'Help',
        name: 'Judy D. Funa'
    })
})

// app.com/about
app.get('/about', (req, res) =>{
    res.render('about',{
        title: "About Me",
        name: "Judy D. Funa"

    })
})

// app.com/weather
app.get('/weather', (req, res) =>{
    if(!req.query.address){
        return res.send({
            error: 'Must provide an address'
        })
    }
    
    geocode(req.query.address, (error, {latitude, longitude, location}) =>{
        if (error){
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) =>{
    if (!req.query.search){
        return res.send({
            error: 'Must provide search term'
        })    
    }
    

    console.log(req.query.search)
    res.send({
        products: []
    })
})

// /help/404
app.get('/help/*', (req, res) =>{
    res.render('404',{
        title:'404',
        name: 'Judy D. Funa',
        errorMessage: 'Help Article not found'
    })
})


// 404
app.get('*', (req, res) =>{
    res.render("404",{
        title: '404',
        name: 'Judy D. Funa',
        errorMessage: 'Page not found'
    })
})

// to start server
app.listen(3000, () =>{
    console.log("Server is up on port 3000")
})