function teste() {
    let numero1 = window.prompt(`Digite um número`)
    let numero2 = window.prompt(`Digite outro número`)
    relacao = numero1 - numero2

    resposta = document.getElementById('resultado');
    if(relacao == 0) {
        resposta.innerHTML = `<p>O número <strong>${numero1}</strong> é igual ao <strong>${numero2}</strong>.</p>`;    
    } 
    else if(relacao > 0) { 
        resposta.innerHTML = `<p>O número <strong>${numero1}</strong> é maior que o <strong>${numero2}</strong></p>`
    } 
    else {
        resposta.innerHTML = `<p>O número <strong>${numero1}</strong> é menor que o <strong>${numero2}</strong></p>`
    }
}