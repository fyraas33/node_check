const fs = require('fs')
const list=fs.readFileSync(process.argv[2])
var listF=list.toString().split('\n')
console.log(listF.length-1)