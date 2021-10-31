const fs = require('fs')


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(dataBuffer.toString())
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Judy'
user.age = 23

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)







// const book = {
//     title: 'Ego is the Energy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// console.log(bookJSON)

// const parse = JSON.parse(bookJSON)
// consolelog(parseData.author)