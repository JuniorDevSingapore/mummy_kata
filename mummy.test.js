import { mummy } from './mummy'

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
  expect(mummy("blaaaaaa")).toBe("blmummy");
});

test('multi sets of vowels', () => {
  expect(mummy("blaaha")).toBe("blmummyhmummy");
});

test('capital letters', () => {
  expect(mummy("blA")).toBe("blmummy");
});
