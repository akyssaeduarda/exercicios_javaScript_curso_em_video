function comecar(){
    let pa = window.document.getElementById('paragrafo')
    let number1 = Number(window.prompt('Digite um número:'));
    let number2 = Number(prompt('Digite o segundo número:'));

    let num1 = number1
    let num2 = number2
    
    if(num1>num2){
        pa.innerHTML = `Entre o número ${num1} e o número ${num2} o número <strong>${num1}</strong> é maior.`
    
    }else if(num1 == num2){
        pa.innerHTML = `O número ${num1} e o número ${num2} são iguais.  `

    }else{
        pa.innerHTML = `Entre o número ${num1} e o número ${num2} o número ${num2} é maior.`
    }
}