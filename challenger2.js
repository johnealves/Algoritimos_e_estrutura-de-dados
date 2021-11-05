// 2 Crie um hashmap (ou um objeto simples em PHP) que contenha as funções elementares de adição, subtração, multiplicação e divisão.
// A função de divisão aceita dois parâmetros: a e b.
  // Leve em consideração que a divisão não deve permitir dividendo 0
  // A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
  // A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
  // Função de multiplicação - Idem

const sumArray = (array) => array.reduce((a, b) => a + b);
const subArray = (array) => array.reduce((a, b) => a - b);
const multArray = (array) => array.reduce((a, b) => a * b);
const divArray = (a, b) => {
  if (!a || !b || b === 0) {
    return "Devem ser passados dois paramentros e o segundo deve ser fiferente de 0";
  }
  return a / b;
}

const operations = {
  sum: (array) => sumArray(array),
  sub: (array) => subArray(array),
  mult: (array) => multArray(array),
  div: (a, b) => divArray(a, b),
}

const exemplo = [5, 2]
const num = 5
const den = 2
console.log(operations.sum(exemplo))
console.log(operations.sub(exemplo))
console.log(operations.mult(exemplo))
console.log(operations.div(num, den))
