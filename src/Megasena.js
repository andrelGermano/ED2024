function verificarVencedor(sorteio, apostas){
    let vencedoresSena = [];
    let vencedoresQuina = [];
    let venceu = false;

    for (let i=0; i<=apostas.length; i++) {
        let apostador = apostas[i];
        let acertos = 0;
        for (let j = 0; j < apostador.length; j++) {
            if (sorteio.contains(apostador[j])) {
                acertos++;
            }
        }
        if (acertos === 6) {
            vencedoresSena.push(apostador);
            venceu = true;
        } else if (acertos === 5) {
            vencedoresQuina.push(apostador);
            venceu = true;
        }
    } 
    return venceu;  
}

export default verificarVencedor;

// A Caixa Econômica Federal tem que descobrir se existem vencedores do concurso da Mega-sena. A Mega-sena é um concurso 
// que paga um prêmio milionário para os apostadores que acertarem seis dezenas e um prêmio simples para os apostadores 
// que acertarem cinco dezenas dentre as sorteadas. Cada apostador pode apostar de 6 a 15 dezenas. As dezenas são valores 
// inteiros de 01 a 60. Implemente uma função que receba os 6 números sorteados Mega-sena e os números dos apostadores em 
// uma matriz e determine se houve vencedor da sena ou quina dentre os apostadores.