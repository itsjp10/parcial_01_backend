const datos = require("./datos.json");

/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne la cantidad de estudiantes en matricula condicional
 * (promedio por debajo de 3.3).
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoUno(estudiantes) {
  // CODIGO DE PUNTO 1 AQUI
  var condicional = 0
  for (var i = 0; i < estudiantes.length; i++){
    var suma = 0;
    for (var j = 0; j < estudiantes[i].cursos.length; j++){
      suma += estudiantes[i].cursos[j].nota;   
    }  
    var prom;
    prom = suma/estudiantes[i].cursos.length
    if(prom < 3.3){
      condicional = condicional + 1;
    }  
  }  
  return condicional;
}

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne una lista con el nombre completo de cada estudiante.
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoDos(estudiantes) {
  // CODIGO DE PUNTO 2 AQUI
  var estArray = []
  for (var i = 0; i < estudiantes.length; i++){
    estArray.push(estudiantes[i].nombre + " " + estudiantes[i].apellido);
  }  
  return estArray;
}

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne una lista con los id de cada estudiante unicamente, y tras
 * ser ordenados ascendentemente por altura.
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoTres(estudiantes) {
  // CODIGO DE PUNTO 3 AQUI
  var ids = [];
  var alturas = [];
  for (var i = 0; i < estudiantes.length; i++){
    ids.push(estudiantes[i]._id);
    alturas.push(estudiantes[i].altura);    
  }  
  var n = estudiantes.length;
  for (var k = 1; k < n; k++) {
    for (var i = 0; i < (n - k); i++) {
        if (alturas[i] > alturas[i + 1]) {
            aux = alturas[i];
            alturas[i] = alturas[i + 1];
            alturas[i + 1] = aux;
            aux = ids[i];
            ids[i] = ids[i + 1];
            ids[i + 1] = aux;
        }
    }
  }
  return ids;
}

/**
 * Implemente una funcion que reciba una lista de numeros y
 * retorne el promedio de la lista.
 */
function puntoCuatro(numeros) {
  // CODIGO DE PUNTO 4 AQUI
  var suma = 0;
  for (var i = 0; i < numeros.length; i++){
      suma += numeros[i];      
  } 
  return suma/numeros.length;
}

/**
 * Implemente una funcion que reciba una palabra y retorne si
 *  la palabra es palindroma o no.
 */
function puntoCinco(palabra) {
  // CODIGO DE PUNTO 5 AQUI
  var n = palabra.length;
  for (var i = 0; i < (palabra.length / 2); i++){
    if(palabra[i] != palabra[(n - i - 1)]){      
      return false;
    }      
  }
  return true;
}

/**
 * Implemente una funcion que reciba una palabra y la invierta.
 */
function puntoSeis(palabra) {
  // CODIGO DE PUNTO 6 AQUI
  var nuevo = ""
  for (let i = 0; i < palabra.length; i++) {
    nuevo += palabra[palabra.length-i-1];
  }
  return nuevo;
}

/**
 * Implemente una funcion que reciba una lista de objetos cualquiera
 * y un parametro y retorne la lista de objetos ordenada ascendemente
 * segun el valor del parametro.
 */

function puntoSiete(lista, campo) {
  // CODIGO DE PUNTO 7 AQUI 
  var n = lista.length;
  for (var k = 0; k < n; k++) {
    for (var i = 0; i < n; i++) {
        if (lista[k][campo] < lista[i][campo]) {
            aux = lista[k];
            lista[k] = lista[i];
            lista[i] = aux;
        }
    }
  }
  return lista;
}


module.exports = {
  puntoUno,
  puntoDos,
  puntoTres,
  puntoCuatro,
  puntoCinco,
  puntoSeis,
  puntoSiete,
};
