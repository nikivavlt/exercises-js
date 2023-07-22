/* eslint-disable no-return-assign */
/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

const findCell = (cell, sheet) => {
  const normalizedCell = cell.replace('=', '');

  const rowIndex = Number(normalizedCell[1]) - 1;
  const columnIndex = alphabet.indexOf(normalizedCell[0]);

  return sheet[rowIndex][columnIndex];
};

const useFormula = (operator, operands, sheet) => {
  let formulaResult;

  const filteredOperands = operands.map((operand) => {
    if (operand.length === 2) {
      return (operand.includes(' ')) ? operand : findCell(operand, sheet);
    }

    if (typeof operand === 'boolean') return operand;
    if (operand.match(/^[0-9]+$/)) return Number(operand);
    return operand;
  });

  switch (operator) {
    case 'SUM':
      formulaResult = filteredOperands.reduce((accumulator, operand) => {
        accumulator += operand;
        return accumulator;
      }, 0);
      break;

    case 'MULTIPLY':
      formulaResult = filteredOperands.reduce((accumulator, operand) => {
        accumulator *= operand;
        return accumulator;
      }, 1);
      break;

    case 'DIVIDE':
      formulaResult = filteredOperands[0] / filteredOperands[1];
      break;

    case 'GT':
      formulaResult = filteredOperands[0] > filteredOperands[1];
      break;

    case 'EQ':
      formulaResult = filteredOperands[0] === filteredOperands[1];
      break;

    case 'NOT':
      formulaResult = !filteredOperands[0];
      break;

    case 'AND':
      formulaResult = filteredOperands.reduce((accumulator, operand) => {
        if (typeof operand !== 'boolean') {
          return accumulator = '#ERROR: type does not match';
        }
        if (operand === true) {
          return accumulator = true;
        }
        return accumulator = false;
      }, '');
      break;

    case 'OR':
      formulaResult = filteredOperands.reduce((accumulator, operand) => {
        if (typeof operand !== 'boolean') {
          return accumulator = '#ERROR: type does not match';
        }
        if (operand === true) accumulator = true;
        return accumulator;
      }, false);
      break;

    case 'CONCAT':
      formulaResult = filteredOperands.reduce((accumulator, operand) => {
        accumulator += operand;

        return accumulator;
      }, '');
      break;

    case 'IF':
      formulaResult = (typeof filteredOperands[0] === 'boolean' && filteredOperands[0] === true)
        ? filteredOperands[1]
        : filteredOperands[2];
      break;

    default:
      formulaResult = '#ERROR: Wrong operator';
      break;
  }

  return formulaResult;
};

const calculateFormula = (formula, sheet) => {
  const operator = formula.substr(1, formula.indexOf('(') - 1);
  const operands = formula.substring(formula.indexOf('(') + 1, formula.length - 1).split(',')
    .map((operand) => {
      if (!operand.includes('"')) return operand.replace(/\s/g, '');
      return operand;
    }).join(',');

  if (operands.includes('(')) {
    const normalizedOperator = operands.substr(0, formula.indexOf('(') - 1);
    const operandsWithOutOperator = operands.replace(normalizedOperator, '');
    const normalizedOperands = operandsWithOutOperator.substring(operandsWithOutOperator.indexOf('(') + 1, operandsWithOutOperator.indexOf(')'));
    const otherOperands = operandsWithOutOperator.replace(`(${normalizedOperands}),`, '').split(',').map((operand) => `=${operand}`);

    const result = useFormula(normalizedOperator, normalizedOperands.split(','), sheet);
    const otherResult = otherOperands.map((operand) => String(findCell(operand, sheet)));

    return useFormula(operator, [result, ...otherResult], sheet);
  }

  if (!operands.includes('"')) {
    const normalizedOperands = operands.split(',');
    return useFormula(operator, normalizedOperands, sheet);
  }

  const newOperands = operands.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/).map((operand) => {
    if (operand.substr(0, 2) === ' "') return operand.substring(1).replaceAll('"', '');
    return operand.replaceAll('"', '');
  });

  return useFormula(operator, newOperands, sheet);
};

const calculateCell = (cell, sheet) => {
  let newCell = cell;

  while (typeof newCell === 'string' && newCell.includes('=')) {
    newCell = findCell(newCell, sheet);
  }

  return newCell;
};

const calculateRow = (row, sheet) => {
  const calculatedRow = row.map((cell) => {
    if (typeof cell === 'string' && cell[0] === '=') {
      if (cell.includes('(')) return calculateFormula(cell, sheet);

      return calculateCell(cell, sheet);
    }

    return cell;
  });

  return calculatedRow;
};

const handleSheet = (sheet) => {
  const sheetData = sheet.data;
  const handledData = sheetData.map((sheetRow) => calculateRow(sheetRow, sheetData));

  return { id: sheet.id, data: handledData };
};

const filterSheets = (sheets) => sheets.map((sheet) => handleSheet(sheet));

module.exports = { filterSheets };
