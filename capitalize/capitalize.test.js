import capitalize from "./capitalize"

test('monyet to Monyet', () => {
  expect(capitalize("monyet")).toMatch("Monyet")
})

test('kumpulan to Kumpulan', () => {
  expect(capitalize("kumpulan")).toMatch("Kumpulan")
})
