let valor = 3 
let valor2 = "3"

console.log(valor)
console.log(typeof (valor))
console.log(typeof (valor2))



function ola() {
    console.log("Olá Mundo !!")
}
ola()

function soma(numero1, numero2) {
    return numero1 + numero2
}
console.log(soma(7, 15))

// Arrow Functions

const olaMundo = () => console.log("Olá Mundo, que interessante !!")
olaMundo()

const somaNum = (num1, num2) => num1 + num2
console.log(somaNum(30, 76))