const fs = require('fs');
const logger = fs.createWriteStream('user.log' , {flags : 'a'})


process.stdin
.setEncoding('utf-8')
.on('data', data =>{
    if(data.trim()== "exit")
        process.exit()


    if(data.trim() == "showall"){
         fs.readFile('user.log', (err,data) =>{
            console.log(data.toString() )
        })
    }else{
        //  fs.appendFile('user.log',data,() => {
        // console.log('saved' , data)
            // })
        logger.write(data+ '\n')
  
    }  
})