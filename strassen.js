function strassenMatrixMultiplication(matrix1, matrix2) {
  const n = matrix1.length; // Utilisez matrix1 ou matrix2 selon votre logique

  //vérifie si les matrices sont 1x1
  if (n === 1) {
    return [[matrix1[0][0] * matrix2[0][0]]];
  }

  // division en sous-matrice
  const halfSize = n / 2;
  const a11 = new Array(halfSize);
  const a12 = new Array(halfSize);
  const a21 = new Array(halfSize);
  const a22 = new Array(halfSize);
  const b11 = new Array(halfSize);
  const b12 = new Array(halfSize);
  const b21 = new Array(halfSize);
  const b22 = new Array(halfSize);

  for (let i = 0; i < halfSize; i++) {
    a11[i] = matrix1[i].slice(0, halfSize);
    a12[i] = matrix1[i].slice(halfSize);
    a21[i] = matrix1[i + halfSize].slice(0, halfSize);
    a22[i] = matrix1[i + halfSize].slice(halfSize);

    b11[i] = matrix2[i].slice(0, halfSize);
    b12[i] = matrix2[i].slice(halfSize);
    b21[i] = matrix2[i + halfSize].slice(0, halfSize);
    b22[i] = matrix2[i + halfSize].slice(halfSize);
  }

  // Calcul des sous-produits
  const p1 = strassenMatrixMultiplication(a11, subtractMatrices(b12, b22));
  const p2 = strassenMatrixMultiplication(addMatrices(a11, a12), b22);
  const p3 = strassenMatrixMultiplication(addMatrices(a21, a22), b11);
  const p4 = strassenMatrixMultiplication(a22, subtractMatrices(b21, b11));
  const p5 = strassenMatrixMultiplication(
    addMatrices(a11, a22),
    addMatrices(b11, b22)
  );
  const p6 = strassenMatrixMultiplication(
    subtractMatrices(a12, a22),
    addMatrices(b21, b22)
  );
  const p7 = strassenMatrixMultiplication(
    subtractMatrices(a11, a21),
    addMatrices(b11, b12)
  );

  // Calcul du résultat final
  const c11 = addMatrices(subtractMatrices(addMatrices(p5, p4), p2), p6);
  const c12 = addMatrices(p1, p2);
  const c21 = addMatrices(p3, p4);
  const c22 = subtractMatrices(subtractMatrices(addMatrices(p5, p1), p3), p7);

  const resultMatrix = [];
  for (let i = 0; i < halfSize; i++) {
    resultMatrix[i] = c11[i].concat(c12[i]);
  }
  for (let i = 0; i < halfSize; i++) {
    resultMatrix[i + halfSize] = c21[i].concat(c22[i]);
  }

  return resultMatrix;
}

// Fonction utilitaire pour additionner deux matrices
function addMatrices(matrix1, matrix2) {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix1[i].length; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return result;
}

// Fonction utilitaire pour soustraire deux matrices
function subtractMatrices(matrix1, matrix2) {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix1[i].length; j++) {
      result[i][j] = matrix1[i][j] - matrix2[i][j];
    }
  }
  return result;
}

module.exports = strassenMatrixMultiplication;
