const { rejects } = require('assert')
const { error } = require('console')
const fs = require('fs')
const path = require('path');

// --------------------------------------------------------------------------------------------------------- //

async function leerArchivoComoString(archivo) {
    return new Promise((resolve, reject) => {                           // Devuelve una promesa
        fs.readFile(archivo, 'utf8', (error, data) => {                 // Lee el archivo pasado por parametro    
            if (!error) resolve(data)                                   // Si hay un error al leer el archivo, se rechaza la promesa
            else reject(error)                                          // Si se lee correctamente, se resuelve la promesa con el contenido del archivo como string
        });
    });
}

leerArchivoComoString('./datos.txt')
.then((contenido) => console.log('Contenido del archivo:', contenido))
.catch((error) => console.error('ERROR:', error))

// --------------------------------------------------------------------------------------------------------- //

async function combinarDosArrays(array1, array2) {
    return new Promise((resolve, reject) => {
      try {
        const arrayUnificado = array1.concat(array2);
        const arrayOrdenado = arrayUnificado.sort((a, b) => a - b);
        resolve(arrayOrdenado);
      } catch (error) {
        reject(error);
      }
    });
  }
  
array1 = [1, 5, 10], array2 = [2, 3, 8, 11];
  
combinarDosArrays(array1, array2)
.then((response) => console.log('Array combinado: ', response))
.catch((error) => console.log('ERROR: ', error));

// --------------------------------------------------------------------------------------------------------- //

async function escribirTextoEnArchivo(ruta, texto, flag) {
    try {
      const rutaAbsoluta = path.resolve(ruta);
      const archivoExiste = await existeArchivo(rutaAbsoluta);
  
      if (archivoExiste || flag) {
        await fs.writeFile(rutaAbsoluta, texto);
        return 'Escritura exitosa';
      } else {
        throw new Error('El archivo no existe');
      }
    } catch (error) {
      throw error;
    }
  }
  
async function existeArchivo(ruta) {
try {
    await fs.access(ruta, fs.constants.F_OK);
    return true;
} catch (error) {
    return false;
}
}

escribirTextoEnArchivo('RutaFuncion02.txt', 'Texto a escribir', true)
.then((resultado) => { console.log(resultado)})
.catch((error) => { console.error('Ocurrió un error:', error.message)});

// --------------------------------------------------------------------------------------------------------- //

function transformarArrayDeNumerosAUnSoloString(array, separador) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
        reject(new Error('No pasaste un ARRAY'));
        return;
        }
    
        const strings = array.map((element) => String(element));
        const resultado = strings.join(separador);
    
        resolve(resultado);
    });
    }
      
array = [123, 456, 789, 10], separador = ',';
transformarArrayDeNumerosAUnSoloString(array, separador)
.then((resultado) => {console.log(resultado)})
.catch((error) => {console.error('ERROR:', error.message)});

// --------------------------------------------------------------------------------------------------------- //

function transformarStringEnArrayDeNumeros(texto, separador) {
    return new Promise((resolve, reject) => {
      const partes = texto.split(separador);
      const numeros = [];
  
      partes.forEach((parte) => {
        const numero = parseFloat(parte.trim());
        if (!isNaN(numero)) {
          numeros.push(numero);
        }
      });
  
      resolve(numeros);
    });
  }
  
texto = '123 | 456 | 789 | 1bc | 10', separador = ' | ';

transformarStringEnArrayDeNumeros(texto, separador)
.then((resultado) => {console.log(resultado)})
.catch((error) => {console.error('Ocurrió un error:', error.message);});

// --------------------------------------------------------------------------------------------------------- //

function combinarNArrays(arrays) {
    return new Promise((resolve) => {
      const resultado = arrays.flat().sort((a, b) => a - b);
      resolve(resultado);
    });
  }
  
  const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
  combinarNArrays(arrays)
    .then((resultado) => {console.log(resultado)})
    .catch((error) => {console.error('Ocurrió un error:', error.message);});
  
  