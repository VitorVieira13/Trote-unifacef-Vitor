function calcular(){
//pontuação dos itens avulsos

//recupera para uma variavel do JS quantidade de arroz digitado pelo usuario
let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
//calcula a pontuação total
let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 4) + (qtdeOleo * 2)

//pontuação dos kits de alimentos
//recupera a cor escolhida pelo usuario
let cor = document.getElementById("cor").value
//estrutura de seleção
let metaKit // meta do kit de alimentação
if (cor == "verde"){
    metaKit = 61
}

else if (cor == "vermelho"){
    metaKit = 32
}

else if (cor == "laranja"){
    metaKit = 21
}

//obter o valor que usuario informou de qtde de kits
let qtdeKits = Number(document.getElementById("qtdeKits").value)
//vamos verificar se bateu a meta de kit
if (qtdeKits >= metaKit){ //bateu a meta
    pontos = pontos + 5000 //acumulador
    if(qtdeKits > metaKit){ //maior que a meta
        pontos = pontos + (qtdeKits - metaKit) * (5000 / metaKit)
    }
}
else { // não bateu a meta
    pontos = pontos + (qtdeKits) * (5000 / metaKit)
}

//define a meta do suplemento
let metaSuplemento
if(metaKit % 2 == 0){ //é par
    metaSuplemento = metaKit / 2 //divisão de um inteiro por outro inteiro da inteiro
}
else{
    metaSuplemento = (metaKit / 2) + 0.5
}

//obter valor do usuario
let qtdeSuplemento = Number(document.getElementById("qtdeSuplemento").value)
if(qtdeSuplemento >= metaSuplemento){
    pontos = pontos + 5000
    if(qtdeSuplemento > metaSuplemento){
        pontos = pontos + (qtdeSuplemento - metaSuplemento) * (5000 /metaSuplemento)
    }
    
}
 else{
        pontos = pontos + (qtdeSuplemento) * (5000 / metaSuplemento)
    }

let metaLeite = metaKit
let metaSangue = metaSuplemento

//mostramos a pontuação total ao usuario
document.getElementById("result").innerText = "Pontuação: R$ " + pontos.toFixed(2)
                            
}

