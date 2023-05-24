const fs = require('fs')

fs.readFile('./test.txt','utf8', (error, data)=> {
    fs.mkdir('./files', ()=> {
        fs.writeFile('./files/test2.txt', `${data} New data`, 'utf8', (error)=> {
            error ? console.log(error) : null
        })
    })
})

setTimeout(()=> {
    fs.unlink('./files/test2.txt', ()=> {})
}, 4000)

setTimeout(()=> {
   if (fs.existsSync('./files')) {
        fs.rmdir('./files', ()=> {})
    }
}, 6000)






const Logger = require('./log')
const logger = new Logger()

logger.on('res', (args)=> {
    const {id, test} = args
    console.log(id, test)
})

logger.log("res")













