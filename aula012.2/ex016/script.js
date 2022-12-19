function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var hora = new Date();
    msg.innerHTML  = (`Agora são ${hora.getHours()} horas e ${hora.getMinutes()} minutos.`) 
    
    if(hora > 0 && hora < 12){
        msg.innerHTML += (`Bom dia`)
        img.src = 'img/imgmanha.png'
        document.body.style.background = '#afc0d4'
   
    }else if (hora >= 12 && hora <= 18){
        msg.innerHTML += (`<br>Boa tarde`)
        img.src = "img/imgtarde.png"
        document.body.style.background = '#fb9322'

    }else{
        msg.innerHTML += (`<br>Boa Noite`)
        img.src = "img/imgnoite.png"
        document.body.style.background = '#311b30'
    }
}
