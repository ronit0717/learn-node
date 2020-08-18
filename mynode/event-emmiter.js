const EventEmmiter = require('events') //Class
const emmiter = new EventEmmiter(); //Object

const Logger = require('./logger')  //class imported

//Create listener
emmiter.on('messageLogged', () => {
    console.log('Anonymous ES6 Function Listener')
})

//Listener with args registered
emmiter.on('logging', (e) => {
    console.log('RC LOG =>', e);
})

console.log('Before calling the event')
//Raise an event
emmiter.emit('messageLogged')

let logObject = 'Normal log message';
emmiter.emit('logging', logObject)

logObject = {'id' : 1, 'name': 'RC'}
emmiter.emit('logging', logObject)

const logger = new Logger(); //object created of Class

//register listener for the object
logger.on('logger2', (e) => {
    console.log('RC LOG 2 =>,', e)
})

logger.log('my message') //method called of the object