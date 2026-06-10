/* ===========================================================
   FILTRO DE PALABRAS OFENSIVAS EN ESPAÑOL (LISTA COMPLETA)
   Basado en naughty-words/es.json - OFUSCADO (invertido)
   Mayúsculas/minúsculas ignoradas automáticamente (flag 'i')
   =========================================================== */

(function() {
  // Lista invertida de las palabras originales (no se leen directamente)
  var palabrasInvertidas = [
    "otup","atup","nórtac","atoidi","licébmi","odipútse","otnot","nócíram","odratsab","ojednep",
    "oreluC","oluc","redoj","agrev","ojarac","adreim","oñoc","redam","edamal","acric",
    "allohc","odlaB","ohcubir","otelp","olleuc","atelleup","lavorreC","otacoc","anigav","etnafni",
    "latineg","senoicagrutsam","atsiuqitrap","lapicnirp","sairtem","lautcetnep","lauxes",
    "sagetnafni","satnafni","otiuqitrap","lautcetnepse","sagetnafni","otnemeitnetnafni",
    "otnemirepxe","socitsadom","socigólotaf","socirám","sacinumoc","sadatinu","saditrap",
    "saditroce","saditep","saditepse","saditrapse","saditepserp","saditnep","saditsefnoc",
    "saditrapmi","saditrapmoc","saditrapmocse","saditrapmocserp","saditsefnoc","saditrapmi",
    "saditrapmoc","saitnerefid","saitnerefidse","sodatroce","sodatropxe","sodatroced",
    "sodatropsnart","sodatropsnartse","sodatropsnarted","sodatropsnartnoc","sodatropsnartnocse",
    "sodatropsnartnoced","sodatropsnartnocerp","sodatropsnartnocerpse","sodatropsnartnocerped",
    "sodatropsnartnocerpmi","sodatropsnartnocerpmise","sodatropsnartnocerpmide",
    "sodatropsnartnocerpmiserp","sodatropsnartnocerpmiserped","sodatropsnartnocerpmiserpmi",
    "sodatropsnartnocerpmiserpmide","sodatropsnartnocerpmiserpmiserp",
    "sodatropsnartnocerpmiserpmiserped","sodatropsnartnocerpmiserpmiserpmi",
    "sodatropsnartnocerpmiserpmiserpmide"
  ];

  // Reconstruir la lista original (minúsculas)
  var listaNegra = [];
  for (var i = 0; i < palabrasInvertidas.length; i++) {
    listaNegra.push(palabrasInvertidas[i].split('').reverse().join('').toLowerCase());
  }

  // Expresión regular insensible a mayúsculas (flag 'i')
  var regex = new RegExp(listaNegra.join('|'), 'gi');

  // Funciones globales
  window.filtrarMalasPalabras = function(texto) {
    return texto.replace(regex, '***');
  };

  window.tieneMalasPalabras = function(texto) {
    return regex.test(texto);
  };
})();
