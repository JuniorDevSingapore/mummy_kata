export const mummy = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount = str.split("").filter(char => vowels.includes(char.toLowerCase())).length;

  if (vowelCount > 0 && vowelCount / str.length > 0.3) {
    return str.replace(/[aeiou]{1,}/gi, "mummy");
  }

  return str
}