/**
 * 07/jan/2020
 * 
 * Escopo e Hoisting
 * 
 */

 var val = 1 
scopeBloc()

function scopeBloc(){
    for (var i = 0; i < 10; i++){
        let newVal = val + i
        console.log(newVal) //10
    }
    console.log('fora do for', newVal) //10
    console.log(val) //1
}

