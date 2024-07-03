const prompt = require('prompt-sync')()

const operacao = prompt('digite o operador: ')
const valor1 = Number(prompt('digite o primeiro valor: '))    //pergunta a ser feita
const valor2 = Number(prompt('digite o segundo valor: '))
//console.log(``)   //ações que o codigo irá realizar

let res = 0
if(isNaN(valor1)){
    console.log('primeiro valor invalido')
}else if(isNaN(valor2)){
    console.log('segundo valor invalido')
}else {
    calcular()
}
function calcular(){
    switch(operacao){
        case '+':
            res = valor1 + valor2
            console.log(res)
            break
        case '-':
            res = valor1 - valor2
            console.log(res)
            break
        case '*': 
            res = valor1 * valor2
            console.log(res)
            break
        case '/': 
            res = valor1 / valor2
            console.log(res)
            break
        case '%':
            res = (valor1 / 100) * valor2
            console.log(res)
            break
        default:
            console.log('operador invalido')
            break
    }
}