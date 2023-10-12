//alert('Olá Mundo ;/')/*Usasse para criar uma coixa que ira abrir logo quango o site for aberto*/


function carregar(){
    var msn = window.document.getElementById('msn')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') // Pega a img
    var data = new Date() // Parte onde puxa a hora do sistema
    var hora = data.getHours() //Onde transforma a hora
    msg.innerHTML = `Agora são ${hora} horas.`
    //Teste logo abaixo
    //var hora = 7

    if (hora >= 0 && hora <= 12 ){
        // Foto manha
        img.src = 'img/manha.png'
        msn.innerHTML = `Bom Dia!!!`
        document.body.style.background = '#00a2ff'

    } else if (hora >= 12 && hora <= 18){
        //Foto tarde
        img.src = 'img/tarde.png'
        msn.innerHTML = `Boa Tarde!!!`
        document.body.style.background = '#cb5608'

    } else {
        //Foto noite
        img.src = 'img/noite.png'
        msn.innerHTML = `Boa Noite!!!`
        document.body.style.background = '#4e555e'
    }


}

