// Posso criar instancia de um objeto proprio JS
console.log(typeof Object)
console.log(typeof new Object) 

// Posso criar instancia de uma função **  FUNÇÃO É UM OBJETO
const Cliente = function(){}
console.log(typeof new Cliente)

// Posso criar instancia de uma classe  ** CLASSE É UMA FUNÇÃO
class Produto{} 
console.log(typeof Produto)
console.log(typeof new Produto())
