import createMultihopProviderMatrix from '../../src/createMultihopProviderMatrix'

test('SinglehopMatrix (simple) expected result', () => {
  let providerMatrix = {
    'a': ['c'],
    'b': ['a'],
    'c': ['b']
  }
  expect(createMultihopProviderMatrix(providerMatrix)).toEqual({
    'a': ['c', 'b'],
    'b': ['a', 'c'],
    'c': ['b', 'a']
  })
})

test('SinglehopMatrix (complex) expected result', () => {
  let providerMatrix = {
    'a': ['c'],
    'b': ['a', 'e'],
    'c': ['b'],
    'd': ['b'],
    'e': ['d']
  }
  expect(createMultihopProviderMatrix(providerMatrix)).toEqual({
    'a': ['c', 'b', 'e', 'd'],
    'b': ['a', 'e', 'c', 'd'],
    'c': ['b', 'a', 'e', 'd'],
    'd': ['b', 'a', 'e', 'c'],
    'e': ['d', 'b', 'a', 'c']
  })
})
