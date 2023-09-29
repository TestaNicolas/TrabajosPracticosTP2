const fs = require('fs');
const {Info} = require('./Info')

const archivoPackageJson = './../package.json'

console.log('---------------------------------');

try {
    // 1) Leer el archivo package.json y declare un objeto Info
    let infoJson = new Info (
        contenidoStr = fs.readFileSync(archivoPackageJson, 'utf-8'),
        contenidoObj = JSON.parse(contenidoStr), 
        size = fs.statSync(archivoPackageJson).size
    )
    let infoString = JSON.stringify(infoJson, null, 2) // Creo objeto Info String
    
    // 2) Muestre por consola el objeto info luego de leer el archivo
    console.log(infoString);

     // 3) Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json.
    fs.writeFileSync('./../info(ms.js).txt', infoString,  'utf-8')

} catch (err) {
    console.log('ERRRR', err);
}



