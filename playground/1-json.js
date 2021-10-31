const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)
data.name = "Mathew"
data.age = 21

const JStoJSON = JSON.stringify(data)

console.log(JStoJSON)

fs.writeFileSync('1-json.json',JStoJSON)