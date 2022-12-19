function calcular(){
    var pa = document.getElementById('paragrafo')
    var inpano = document.getElementById('ano')
    var ano = inpano.value
    var inpfem = document.getElementById('fem').value
    var inpmasc = document.getElementById('masc')
    var masc = inpmasc.value
    var nel = new Date()
    var  nell = nel.getFullYear()

    //var teste = ano + inpfem
    //pa.innerHTML = (`${teste}`)

    if(nell - ano == 21 && inpfem ){
        pa.innerHTML += `você tem ${nell-ano} anos` 
    }

    
}