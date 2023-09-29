const fs = require('fs/promises');
const {Info} = require('./Info')

const archivo = './../package.json'

console.log('---------------------------------');

function ejecutar() {
    let contenidoStr, contenidoObj, size;

    fs.readFile(archivo, { encoding: 'utf-8' })
    .then(res => {
        contenidoStr = res

        contenidoObj = JSON.parse(contenidoStr)

        return fs.stat(archivo)

    }).then(res => {
        size = res.size
    }).catch(err => console.log(`Error: ${err}`))
    .then(() => {
            const info = new Info ({
            contenidoStr,
            contenidoObj,
            size
        })

        console.log(`Contenido info: ${JSON.stringify(info, null , 2)}`);

        return fs.writeFile('./../info(maptc).txt', JSON.stringify(info, null, 2), 'utf-8')
    }).then(res => {
        console.log('El archivo info.txt se creo correctamente');
    }).catch(err => {
        err => console.log(`Error: ${err}`)
    })
    
    .catch(err => console.log(`Error: ${err}`))

}

ejecutar()

