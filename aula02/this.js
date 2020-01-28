var text = 'Escopo em Javascript';
var myObject = {
    textA: 'Entendendo como funciona ',
    textB: 'Quando uma função é chamada com um método',
    createPhrase: function (textC) {
    console.log(this.textA + textC + ' - ' + this.textB);
    // Entendendo como funciona Escopo em Javascript
    // Quando uma função é chamada com um método
    }
};

myObject.createPhrase(text);