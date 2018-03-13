var createConsumingMatrix = require('../../src/aggregateApplicationMatrix')

test('Sample landscape (Z1) expected result', () => {
  var providingMatrix = { '2': ['1', '3'] }
  var consumingMatrix = { '1': ['2'], '3': ['2'] }
  expect(createConsumingMatrix(providingMatrix, consumingMatrix)).toEqual(
    { '1': { providing: 0, consuming: 1, total: 1 },
      '2': { providing: 2, consuming: 0, total: 2 },
      '3': { providing: 0, consuming: 1, total: 1 }
    }
  )
})

test('Sample landscape (Z3) expected result', () => {
  var providingMatrix = {'1': ['3'], '2': ['1']}
  var consumingMatrix = {'1': ['2'], '3': ['1']
  }
  expect(createConsumingMatrix(providingMatrix, consumingMatrix)).toEqual(
    { '1': { providing: 1, consuming: 1, total: 2 },
      '2': { providing: 1, consuming: 0, total: 1 },
      '3': { providing: 0, consuming: 1, total: 1 }
    }
  )
})

test('Sample landscape (Z2) expected result', () => {
  var providingMatrix = { '1': ['3'], '2': ['1'], '3': ['2'] }
  var consumingMatrix = { '1': ['2'], '2': ['3'], '3': ['1'] }
  expect(createConsumingMatrix(providingMatrix, consumingMatrix)).toEqual(
    { '1': { providing: 1, consuming: 1, total: 2 },
      '2': { providing: 1, consuming: 1, total: 2 },
      '3': { providing: 1, consuming: 1, total: 2 }
    }
  )
})
