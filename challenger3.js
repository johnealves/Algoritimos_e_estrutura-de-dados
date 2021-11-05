// 3  Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC
//     Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
//     O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
//     O resultado deve ser armazenado em uma variável. Por exemplo:
//       $id = generarId()
//       id vale ~ abc1-bb12-234a-bcc2

const ramdomCode = () => Math.random().toString(36).substring(7).slice(0, 4);
const generateId = () => `${ramdomCode()}-${ramdomCode()}-${ramdomCode()}-${ramdomCode()}`;

const id = generateId()
console.log(id)