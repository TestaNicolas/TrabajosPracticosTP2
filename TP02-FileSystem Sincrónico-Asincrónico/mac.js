const fs = require('fs')
const {Info} = require('./Info')

const archivoPackageJson = './../package.json'

function ejecutar() {
    let contenidoStr,contenidoObj, size
    
    // 1) Leer el archivo package.json y declare un objeto Info
    fs.readFile(archivoPackageJson, 'utf-8', (err, resolve) => {
        if (err){
            console.log(`ERROR: ${err}`);
        } else {
            contenidoStr = resolve
            contenidoObj = JSON.parse(contenidoStr)
            fs.stat(archivoPackageJson, (err, resolve) => {
                if (err) console.log(`ERROR: ${err}`);
                else{
                    size = resolve.size
                    
                    let infoJson = new Info (contenidoStr, contenidoObj, size) // Creo objeto info Json
                    let infoString = JSON.stringify(infoJson, null, 2) // Creo objeto Info String

                    // 2) Muestre por consola el objeto info luego de leer el archivo.
                    console.log('Contenido info', infoString)

                    // 3) Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json.
                    fs.writeFile('./../info(mac.js).txt', infoString,  'utf-8', (err, resolve) => {
                        if (err) {
                            console.log(`ERROR: ${err}`);
                        } else {
                            console.log("Archivo escrito correctamente");
                        }
                    });
                }
            })
        }
    })







}

ejecutar();
