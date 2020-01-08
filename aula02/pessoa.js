/**
 * 07/jan/2020
 * 
 * Escopo e Hoisting
 * 
 */

function Pessoa (nome = null) {
    this.nome = nome

    this.dizeNome = function(){
        console.log('Meu nome é ' + this.nome)
    }
}

var p1 = new Pessoa('Everton')
p1.dizeNome()

var p2 = new Pessoa('Ana')
p2.dizeNome()