var createConsumingMatrix = require('../../src/aggregateApplicationMatrix')

test('Sample Matrix expected result', () => {
  var providingMatrix = { '2': ['1', '3'] }
  var consumingMatrix = { '1': ['2'], '3': ['2'] }
  expect(createConsumingMatrix(providingMatrix, consumingMatrix)).toEqual(
    { '1': { providing: 0, consuming: 1, total: 1 },
      '2': { providing: 2, consuming: 0, total: 2 },
      '3': { providing: 0, consuming: 1, total: 1 }
    }
  )
})
