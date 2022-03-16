function caesarCipher(s) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let cipheredText = "";
  for (let i = 0; i < s.length; i++) {
    const index = alphabets.indexOf(s[i].toLowerCase());
    if (index === -1) {
      cipheredText += s[i];
      continue;
    }
    const newIndex = (index + 1) % 26;
    const newLetter = alphabets[newIndex];
    cipheredText +=
      s[i] === s[i].toUpperCase() ? newLetter.toUpperCase() : newLetter;
  }
  return cipheredText;
}

console.log(caesarCipher("sampai kau harus berteduh menghindariku"))

export default caesarCipher;

