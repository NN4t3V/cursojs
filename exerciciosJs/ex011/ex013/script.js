function verificar(){
    // window.alert('FUNCIONOU!')
    // Esse pode ser um teste para ver se seu código está funcionando.
    var data = new Date()
    var ano = data.getFullYear()
    // vai pegar 4 dígitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique seus dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `idade calculada: ${idade}
        // Você pode fazer um teste para ver se o cálculo de idade está funcionando`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        // como se eu fosse no HTML e colocasse como id foto
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 3){
                //bebê
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 12){
                //Criança
                img.setAttribute('src', 'crianca.jpg')
            } else if (idade < 25){
                //Jovem
                img.setAttribute('src', 'xovem.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','adulto.jpg')
            } else {
                //velho
                img.setAttribute('src', 'velho.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 3){
                //bebê
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 12){
                //Criança
                img.setAttribute('src', 'crianca.jpg')
            } else if (idade < 25){
                //Jovem
                img.setAttribute('src', 'xovemfem.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'adultfem.jpg')
            } else {
                //velho
                img.setAttribute('src', 'oldfem.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}