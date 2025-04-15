function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
// var hora = data.getHours()
window.alert('Olá mero visitante, seja bem vindo!')
var hora = window.prompt('Digite uma hora: ')
// var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    // BOM DIA 
    img.src = 'manhã1.jpg' 
    document.body.style.background = '#F2C879'
} else if (hora >= 12 && hora <= 18){
    // BOA TARDE 
    img.src = 'tarde2.jpg'
    document.body.style.background = '#BE8B56'
} else {
    // BOA NOITE 
    img.src = 'noite1.jpg'
    document.body.style.background = '#4C3E4D'
}
} 