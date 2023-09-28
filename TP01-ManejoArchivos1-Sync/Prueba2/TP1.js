const fs = require('fs/promises')

// --------------------------------------------------------------------------------------------------------------//
// leerArchivoComoString                                                                                         //
// Recibe la ruta del archivo que se quiere leer, y devuelve un único string con todo el contenido del mismo.    //
// --------------------------------------------------------------------------------------------------------------//

async function leerArchivoComoString(archivoALeer) {
    try{
        const contenidoArchivoALeer = await fs.readFile(archivoALeer, 'utf-8') 
        // Espera la lectura del archivo para continuar
        console.log(`Contenido del archivo: ${contenidoArchivoALeer}`);
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//escribirTextoEnArchivo                                                                                                                                                            //
//Recibe una ruta, un texto, y un flag, y graba ese texto en un archivo en la ruta dada. Si el directorio es válido pero el archivo no existe, decide que hacer según el flag:      //
//● Con el flag en true, crea el archivo y lo escribe.                                                                                                                              //
//● Con el flag en false, lanza el error “el archivo no existe”.                                                                                                                    //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

async function escribirTextoEnArchivo(archivoAEscribir, textoAEscribir, flag) {
  try {
    await fs.access(archivoAEscribir); // Verificar si el archivo existe
    await fs.writeFile(archivoAEscribir, textoAEscribir, 'utf-8');
    console.log(`Texto: ${textoAEscribir} , se escribio correctamente`)
  } catch (error) {
    if (!flag) {
      console.log('El archivo no existe.');
    } else {
      console.log(`ERROR AL ESCRIBIR: ${error}`);
    }
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//transformarStringEnArrayDeNumeros                                                                                                                                                 //
//Recibe un texto y una secuencia de caracteres que usará como separador. Devuelve un array con todos los números producto de partir el texto cada vez que aparezca la secuencia    //
//separadora. En el caso de que alguna de las partes no sea numérica, no se incluirá en el resultado, pero no debe lanzar ningún error.                                             //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Input: texto = ‘123 | 456 | 789 | 1bc | 10’ , separador = ‘ | ’
// Output: [123, 456, 789, 10]

async function transformarStringEnArrayDeNumeros(texto, separador) {
    try {
        const array = await texto.split(separador) // [123 , 456 , 789 , 1bc , 10]
        console.log(`Array original: ${array}`)

        const arrayFiltrado  = array.filter(element => !isNaN(element))
        console.log(`Array filtrado: ${arrayFiltrado}`) 
    } catch (error) {
        console.log(error);
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// transformarArrayDeNumerosAUnSoloString                                                                                                                              //
// Recibe un array con strings, y una secuencia de caracteres para usar como separador. Devuelve un único string que es la unión de todos los strings del array,       //
//intercalando la secuencia separadora entre cada uno.                                                                                                                 // 
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Ejemplo
// Input: array = [123, 456, 789, 10] , separador = ‘,’
// Output: ‘123,456,789,10’

async function transformarArrayDeNumerosAUnSoloString(array, separador) {
    try {
        const arrayDeStrings = await array.map(String);
        const resultado = await arrayDeStrings.join(separador);
        console.log(resultado)
    } catch {
        console.log(error);
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// combinarDosArrays                                                                                                                                                              //  
// Recibe dos arrays, ambos con datos de tipo numérico, ambos ordenados en forma ascendente,y sin repetidos dentro de cada archivo (puede haber repetidos entre un archivo y otro)//
// Devuelve un nuevo array, que contenga todos los datos de ambos arrays, también ordenados en forma ascendente, y también sin repetidos.                                         //  
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Ejemplo
// Input: array1 = [1, 5, 10] , array2 = [2, 3, 8, 11]
// Output: [1, 2, 3, 5, 8, 10, 11]

async function combinarDosArrays(array1, array2) {
    try{
        const arrayUnificado = array1.concat(array2);
        const arrayOrdenado = arrayUnificado.sort((a, b) => a - b);
        console.log(arrayOrdenado)
    } catch {
        console.log(error);
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// combinarNArrays                                                                                                                                                                //
// Igual que la función anterior, solo que ésta recibe un array de arrays de números ordenados en forma ascendente y sin repetidos, y devuelve un nuevo array, con la combinación //
// de todos los números de todos los arrays recibidos, también ordenados en forma ascendente, y también sin repetidos.                                                            //  
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Ejemplo
// Input: arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]
// Output: [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]

async function combinarNArrays(array) {
    try {
        const resultado = array.flat().sort((a, b) => a - b);
        console.log(resultado)
    } catch(error) {
        console.log(error);
    }
}

async function main() {
    await leerArchivoComoString('./leerArchivoComoString.txt');
    await escribirTextoEnArchivo('escribirTextoEnArchivo.txt', 'Escribieno texto...', true)
    await transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10' ,  ' | ')
    await transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ',')
    await combinarDosArrays([1, 5, 10], [2, 3, 8, 11])
    await combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]])
}
main();