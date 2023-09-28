const fs = require('fs/promises');
const {Info} = require('./Info')

console.log('-----------------------------------------------------------------------')

const archivo = './../package.json'

async function ejecutar() {

    try{
        // 1) Leer el archivo package.json y declare un objeto Info
        let info = new Info(
            contenidoStr = await fs.readFile(archivo, 'utf-8'),
            contenidoObj = await JSON.parse(contenidoStr),
            size = await (await fs.stat(archivo)).size
        )

        // 2) Muestre por consola el objeto info luego de leer el archivo.
        const string = info.getInfo()
        console.log(`Contenido Info: ${string}`)

        // 3) Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json.
        fs.writeFile('./../info.txt', info.getInfo())

        return info 
    } catch (error) {
        console.error('ERROR', error)
        return
    }
   
}

ejecutar()



