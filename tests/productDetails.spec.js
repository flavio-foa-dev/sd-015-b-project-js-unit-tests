const assert = require('assert');
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
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(typeof (productDetails('Alcool Gel', 'Máscara')), "object");
    assert.deepStrictEqual((productDetails('Alcool Gel', 'Máscara').length), 2);

    const obj1 = productDetails('Alcool Gel','Máscara')[0];
    const obj2 = productDetails('Alcool Gel','Máscara')[1];
    assert.deepStrictEqual(typeof (obj1), 'object');
    assert.deepStrictEqual(typeof (obj2), 'object');
    assert.notDeepStrictEqual(obj1, obj2);

    assert.strictEqual(obj1.details.productId.endsWith('123'),true);
    assert.strictEqual(obj2.details.productId.endsWith('123'),true); // visto no https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
  });
});
