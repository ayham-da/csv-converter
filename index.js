const fs = require('fs')
const path = require('path')
const util = require('util')
const csvtojson = require('csvtojson')
const writeFile = util.promisify(fs.writeFile)

const args = process.argv.slice(2)
const absSourcePath = path.resolve(args[0])
const targetFileName = args[1] || path.parse(absSourcePath).name + '.json'

if(args.length < 1) {
    console.error("Please provide a csv file to convet to JSON")
    process.exit()
}

convert(args[0])

async function convert(csvFilePath) {
    const jsonArray = await csvtojson().fromFile(csvFilePath);
    saveFile(JSON.stringify(jsonArray))
}

async function saveFile(content) {
    try {
        await writeFile(path.join(__dirname, targetFileName), content)
        console.log(`saved file at ${targetFileName}`)
    } catch (error) {
        console.error(`Something went wrong, Could not write json to: ${targetFileName}`)
    }
    
}