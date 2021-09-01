const assert = require('assert');
const { prependListener } = require('process');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const funcao = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    const expected1 = Array.isArray(funcao);
    assert.strictEqual(expected1, true);
    // Teste que o array retornado pela função contém dois itens dentro.
    const expected2 = Object.keys(funcao).length;
    assert.strictEqual(expected2, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const expected3 = typeof funcao[0];
    assert.strictEqual(expected3, 'object');
    // Teste que os dois objetos são diferentes entre si.
    const obj1 = funcao[0];
    const obj2 = funcao[1];
    let result1 = false;
    if (obj1 !== obj2) {
      result1 = true;
    }
    assert.strictEqual(result1, true);
    // Teste que os dois productIds terminam com 123.
    const final1 = obj1.details.productId.substr(-3, 3);
    const final2 = obj2.details.productId.substr(-3, 3);
    let resul2 = false;
    if (final1 === '123' && final2 === '123') {
      resul2 = true;
    }
    assert.strictEqual(resul2, true);
  });
});
