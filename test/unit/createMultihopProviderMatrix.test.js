import createMultihopProviderMatrix from '../../src/createMultihopProviderMatrix'

let providerMatrix = {
  'a': ['c'],
  'b': ['a'],
  'c': ['b']
}

test('SinglehopMatrix expected result', () => {
  expect(createMultihopProviderMatrix(providerMatrix)).toEqual({
    'a': ['c', 'b'],
    'b': ['a', 'c'],
    'c': ['a', 'b']
  })
})
