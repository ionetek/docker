import fs from 'fs'

fs.appendFile('my-file.txt', 'File has been created by node.js', (err) => {
    if (err) throw err
    console.log('File has been created!')
})

setTimeout(()=> {
    console.log('Timeout')
}, 100000)