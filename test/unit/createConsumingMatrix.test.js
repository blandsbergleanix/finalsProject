var createConsumingMatrix = require('../../src/createConsumingMatrix')

test('Sample provider expected result', () => {
  var providingMatrix = {'2': ['1', '3']}
  expect(createConsumingMatrix(providingMatrix)).toEqual({
    '1': ['2'],
    '3': ['2']
  })
})
