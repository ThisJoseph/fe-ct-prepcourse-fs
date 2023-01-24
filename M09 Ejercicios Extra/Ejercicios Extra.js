/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto)
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let deStringAArray = string.split('').sort(),
   elementosUnicos = [],
   vecesRepetidas = [],
   contador = 1,
   objeto = {}

   for(let i = 0; i < deStringAArray.length; i++) {
      if(deStringAArray[i + 1] === deStringAArray[i]) {
         contador++
      } else {
         elementosUnicos.push(deStringAArray[i]);
         vecesRepetidas.push(contador);
         contador = 1;
      }
   }

   for(let i = 0; i < elementosUnicos.length; i++) {
      objeto[elementosUnicos[i]] = vecesRepetidas[i]
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let array = string.split('')
   arrayInvertida = []
   for(let i = 0; i < array.length; i++) {
      if(array[i] === array[i].toUpperCase()) {
         arrayInvertida.push(array[i])
      }
   }
   
   for(let i = 0; i < array.length; i++) {
      if(array[i] === array[i].toLowerCase()) {
         arrayInvertida.push(array[i])
      }
   }
   let nuevaString = arrayInvertida.join('')

   return nuevaString;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let array = frase.split(' ')
   let nuevaFrase = ''
   for(let i = 0; i < array.length; i++) {
      array[i] = array[i].split('')
      array[i] = array[i].reverse()
      array[i] = array[i].join('')
   }
   nuevaFrase = array.join(' ')
   return nuevaFrase;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let pasarPorArray = String(numero).split('').map((numero) => {return Number(numero)})
   let invertir = Number(pasarPorArray.reverse().join(''))
   if(invertir === numero) {
      return 'Es capicua'
   } else {return 'No es capicua'}
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = string.split('')

for(let i = 0; i < array.length; i++) {
   if(array[i] === 'a' || array[i] === 'b' || array[i] === 'c' ) {
      delete array[i]
   }
}
let nuevaString = array.join('')
return nuevaString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let orden = arrayOfStrings.sort((a , b) => {
      if(a.length === b.length) {
         return 0
      }
      if(a.length < b.length) {
         return -1
      }
      return 1
   })
   return orden
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let unirArray = array1.concat(array2).sort((a, b) => {
      if(a === b) {
         return 0
      } 
      if(a < b) {
         return -1
      }
      return 1
   })
let nuevaArray = []

for(let i = 0; i < unirArray.length; i++) {
   if(unirArray[i] === unirArray[i + 1]) {
      nuevaArray.push(unirArray[i])
   }
}
return nuevaArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
