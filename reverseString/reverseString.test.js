const reverseString = require("./reverseString")

test('awikwok to kowkiwa', () => {
  expect(reverseString("awikwok")).toBe("kowkiwa")
})

test('lmao to oaml', () => {
  expect(reverseString("lmao")).toBe("oaml")
})

test('raihan to nahiar', () => {
  expect(reverseString("raihan")).toBe("nahiar")
})
