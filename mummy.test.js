import { mummy } from './mummy'

// “” → “” // empty string
// “str” → “str” // no vowels
// “a” → “mummy” // single vowel
// “blah” → “blah” // < 30% length
// “bla” → “blmummy” // > 30% length
// “blaa” → “blmummy” // continuous vowels
// “blaaha” → “blmummyhmummy” // multi sets of vowels
// “blA” → “blmummy” // capital letters

test('hello world', () => {
  expect(mummy("")).toBe("");
});