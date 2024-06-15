import { mummy } from './mummy'

// “” → “” // empty string
// “str” → “str” // no vowels
// “a” → “mummy” // single vowel
// “blah” → “blah” // < 30% length
// “bla” → “blmummy” // > 30% length
// “blaa” → “blmummy” // continuous vowels
// “blaaha” → “blmummyhmummy” // multi sets of vowels
// “blA” → “blmummy” // capital letters

test('empty string', () => {
  expect(mummy("")).toBe("");
});

test('no vowels', () => {
  expect(mummy("str")).toBe("str");
});

test('single vowels', () => {
  expect(mummy("blah")).toBe("blah");
});

test('< 30% length', () => {
  expect(mummy("a")).toBe("mummy");
});

test('> 30% length', () => {
  expect(mummy("bla")).toBe("blmummy");
});

test('continuous vowels', () => {
  expect(mummy("blaa")).toBe("blmummy");
});