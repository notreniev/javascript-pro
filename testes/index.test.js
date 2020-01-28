const { sum, isEvenNumber, print } = require('./index')

test('adds 1 + 2 é igual a 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('Garante que 4 é par', () => {
    expect(isEvenNumber(4)).toBe(true)
})

test('Garante que 3 não é par', () => {
    expect(isEvenNumber(3)).not.toBe(true)
})

test('Garante que a função print está chamando o console.log', () => {
    console.log = jest.fn()
    print('imprimir')
    expect(console.log).toHaveBeenCalledWith('imprimir')
})