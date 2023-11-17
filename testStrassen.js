// Importez la fonction d'algorithme de multiplication de matrices de Strassen
const strassenMatrixMultiplication = require("./strassen");

// Matrices de test (adaptées à vos besoins)
const matrixA = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const matrixB = [
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [25, 26, 27, 28],
  [29, 30, 31, 32],
];

// Appelez la fonction de multiplication de matrices de Strassen
const result = strassenMatrixMultiplication(matrixA, matrixB);

// Affichez les résultats
console.log(
  "Résultat de la multiplication de matrices avec l'algorithme de Strassen :"
);
console.log(result);
