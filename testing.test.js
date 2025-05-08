const { capitalize, reverse, calculator, caesarCipher, analyzeArray } = require('./functions')


test('uppercases the first letter of a string', () => {
    expect (capitalize('pineapple')).toBe('Pineapple')
})

test('reverses a string', () => {
    expect(reverse('god')).toBe('dog')
})




test('adds 1 + 2 equals 3', () => {
     expect(calculator.sum(1, 2)).toBe(3)
})

test('subtracts 2 - 1 equals 1', () => {
     expect(calculator.subtract(2, 1)).toBe(1)
})

test('multiplies 2 * 1 equals 2', () => {
    expect(calculator.multiply(2, 1)).toBe(2)
})

test('divides 8 / 2 equals 4', () => {
    expect(calculator.divide(8, 2)).toBe(4)
})
test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Pick a higher number than 0');
});


test('cipher letters should shift to next letter provided number of times', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})
test('cipher letters with case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})
test('cipher letters should preserve non letters', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})


test('function that takes an array of values and returns an object with their min, max, average and length', () => {
    expect(analyzeArray([1, 2, 4, 6])).toEqual({
        min: 1,
        max: 6,
        length: 4,
        average: 3.25
     })
})