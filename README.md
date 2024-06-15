# Mummy Kata

You are given strings of different lengths. If the number of vowels are more than 30% of the string length then insert ‘mummy’ for each continuous set of vowels.

- ✅ his → hmummys
- ✅ hear → hmummyr
- ❌ hear → hmummymummyr

## Samples

```
“” → “” // empty string
“str” → “str” // no vowels
“a” → “mummy” // single vowel
“blah” → “blah” // < 30% length
“bla” → “blmummy” // > 30% length
“blaa” → “blmummy” // continuous vowels
“blaaha” → “blmummyhmummy” // multi sets of vowels
“blA” → “blmummy” // capital letters
```
