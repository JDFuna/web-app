// const { notEqual } = require('assert')
const fs = require('fs')
const chalk= require('chalk')

// const getNotes = () => {
//     return 'Your notes...'
// } 

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    
    debugger 
    // const duplicateNotes = notes.filter(function (notes) {
    //     return notes.title === title
    // })
    // console.log(duplicateNote)
    // console.log(title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body 
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note remove'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else {
        console.log(chalk.red.inverse('Note not found1'))
    }
}
    
    // console.log(title)

    // notes.push ({
    //     title: title,
    //     body: body
    // })
    // saveNotes(notes)
    // console.log(notes)

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
  
}

module.exports = {
    // getNotes: getNotes,
    removeNote: removeNote,
    addNote: addNote,
    listNotes: listNotes,
    readNote: readNote
}