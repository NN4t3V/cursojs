var agora = new Date()
var hora = agora.getHours()
// Ele vai colocar a hora atual que está rodando o script
console.log(`São exatamente ${hora} horas`)
if (hora >= 8 && hora < 12){
    console.log('Good Morning!')
} else if (hora == 12){
    console.log('This is Midday!')
} else if(hora > 12 && hora < 18){
    console.log('Good Afternoon!')
} else if (hora > 18 && hora <= 20){
    console.log('Good Evening!')
}else{
    console.log('Good Night!')
}