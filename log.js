const EventEmitter = require('events')

class Logger extends EventEmitter {
    log = (args) => {
        console.log(args)
        this.emit('res', {id: 10, test: 'hello_event'})
    }
}

module.exports = Logger