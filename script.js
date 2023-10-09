//alert('Olá Mundo ;/')/*Usasse para criar uma coixa que ira abrir logo quango o site for aberto*/


function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12 ){
        // Foto manha
        img.src = 'img/manha.png'
        document.body.style.background = '#f0d0bc'
    } else if (hora >= 12 && hora <= 18){
        //Foto tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#cb5608'
    } else {
        //Foto noite
        img.src = 'img/noite.png'
        document.body.style.background = '#4e555e'
    }
    


}

