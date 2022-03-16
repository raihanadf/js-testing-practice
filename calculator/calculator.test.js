import calculator from './calculator'

test('add 1 + 2 to be 3', () => {
  expect(calculator(1, 2, 0)).toBe(3)
})

test('substract 1 - 1 to be 0', () => {
  expect(calculator(1, 1, 1)).toBe(0)
})

test('multiply 2 x 9 to be 18', () => {
  expect(calculator(2, 9, 2)).toBe(18)
})

test('divide 18 : 2 to be 9', () => {
  expect(calculator(18, 2, 3)).toBe(9)
})

