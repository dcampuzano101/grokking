const spiralTraverse = (array) => {
  // instantiate 4 variables to set the bounds of the loop

  let startCol = 0;
  let startRow = 0;
  let endCol = array.length - 1;
  let endRow = array[0].length - 1;
  let result = [];

  while (startCol <= endCol && startRow < endRow) {
    for (let col = startCol; col < endCol; col++) {
      result.push(array[startCol][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[startRow][row]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startCol === endCol) break;
      result.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row >= endCol; row--) {
      if (startRow === endRow) break;
      result.push(array[endRow][row]);
    }

    startCol++;
    startRow++;
    endCol++;
    endRow--;
  }
  return result;
};
