// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const getNotes = require ('./notes.js')

// const command = process.argv[2]
//customize yargs version
yargs.version('1.1.0')

// Create ADD command
yargs.command ({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
        // console.log('Adding a new note!', argv)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command ({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
        // console.log('Removing the note!')
    }
})
// Create list command
yargs.command ({
    command: 'list',
    describe: 'List your note',
    handler() {
        notes.listNotes()
        // console.log('Listing out all note!')
    }
})
// Create read command
yargs.command ({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
        // console.log('Reading a note!')
    }
})
// add, remove, read, list 
// console.log(yargs.argv)
yargs.parse()


// console.log(process.argv)
// console.log(yargs.argv)

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }


// const msg = getNotes()
// console.log(msg)

// const greenMsg = chalk.inverse.bold.blue('Success!')
// console.log(greenMsg)

// console.log(process.argv(2));

// console.log(validator.isURL('https/mead.io'))
// console.log(validator.isEmail('@example.com'))
// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)