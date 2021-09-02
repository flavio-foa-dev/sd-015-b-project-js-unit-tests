/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {
    
  const arr = numbers([1, 2, 3, 4, 5]);
  const arr2 = numbers([1, 2, '3', 4, 5]);
  const arr3 = numbers([1, 'a', 3]);
  const arr4 = numbers([' ']);

  assert.strictEqual(arr, true, 'Numbers');
  assert.strictEqual(arr2, false, 'Error');
  assert.strictEqual(arr3, false, 'Error');
  assert.strictEqual(arr4, false, 'Error');
    
  });
});
