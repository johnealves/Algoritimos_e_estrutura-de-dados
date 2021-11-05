// 1  Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]
//   Obtenha uma array contendo apenas as letras
//   Obtenha uma array contendo apenas os números
//   Obtenha o maior número da array acima

const list = [ "a", 10, "b", "hola", 122, 15]

const sliceArray = (array) => {
  const arrayStrings = array.filter((value) => typeof value === "string");
  const arrayNumbers = array.filter((value) => typeof value === "number");
  const highestNumber = arrayNumbers.reduce((a, b) => Math.max(a, b));

  return {
    arrayStrings,
    arrayNumbers,
    highestNumber
  }
}

const result = sliceArray(list)
console.log(result)
