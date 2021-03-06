import aggregateApplicationMatrix from '../../src/aggregateApplicationMatrix'

test('Sample landscape (Z1) expected result', () => {
  var providingMatrix = { '2': ['1', '3'] }
  var consumingMatrix = { '1': ['2'], '3': ['2'] }
  expect(aggregateApplicationMatrix(providingMatrix, consumingMatrix)).toEqual(
    { '1': { providing: 0, consuming: 1, total: 1, name: '' },
      '2': { providing: 2, consuming: 0, total: 2, name: '' },
      '3': { providing: 0, consuming: 1, total: 1, name: '' }
    }
  )
})

test('Sample landscape (Z3) expected result', () => {
  var providingMatrix = {'1': ['3'], '2': ['1']}
  var consumingMatrix = {'1': ['2'], '3': ['1']
  }
  expect(aggregateApplicationMatrix(providingMatrix, consumingMatrix)).toEqual(
    { '1': { providing: 1, consuming: 1, total: 2, name: '' },
      '2': { providing: 1, consuming: 0, total: 1, name: '' },
      '3': { providing: 0, consuming: 1, total: 1, name: '' }
    }
  )
})

test('Sample landscape (Z2) expected result', () => {
  let providingMatrix = { '1': ['3'], '2': ['1'], '3': ['2'] }
  let consumingMatrix = { '1': ['2'], '2': ['3'], '3': ['1'] }
  expect(aggregateApplicationMatrix(providingMatrix, consumingMatrix)).toEqual(
    { '1': { providing: 1, consuming: 1, total: 2, name: '' },
      '2': { providing: 1, consuming: 1, total: 2, name: '' },
      '3': { providing: 1, consuming: 1, total: 2, name: '' }
    }
  )
})
