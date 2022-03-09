const capitalize = require("./capitalize.js")

test('monyet to Monyet', () => {
  expect(capitalize("monyet")).toMatch("Monyet")
})

test('kumpulan to Kumpulan', () => {
  expect(capitalize("kumpulan")).toMatch("Kumpulan")
})
