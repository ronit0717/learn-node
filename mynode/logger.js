const EventEmmiter = require('events')

class Logger extends EventEmmiter {
    
    //method of the class
    log(message) {
        console.log(message);

        //call listener
        this.emit('logger2', {id: 1, name: 'NITRO'})
    }
}

module.exports = Logger