/**
 * 07/jan/2020
 * 
 * Escopo e Hoisting
 * 
 */

var text = 'Escopo em Javascript'

function createPhrase(textA, textB) {
    var textC = 'Função é chamada diretamente'
    console.log(this); // imprime window (se rodar da console)
    console.log(textA + textB + ' - ' + textC);
    // Entendendo como funciona Escopo em Javascript
    // Quando uma função é chamada diretamente
}
createPhrase('Entendendo como funciona ', text);