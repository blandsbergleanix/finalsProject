import mapResultDataTest from '../../src/mapResultData'

test('Sample aggregated Matrix (Z1) expected result', () => {
  var aggregatedMatrix = {
    '1': { providing: 0, consuming: 1, total: 1 },
    '2': { providing: 2, consuming: 0, total: 2 },
    '3': { providing: 0, consuming: 1, total: 1 }
  }

  const expectedResult = [
    { appId: '1', providing: 0, consuming: 1, total: 1 },
    { appId: '2', providing: 2, consuming: 0, total: 2 },
    { appId: '3', providing: 0, consuming: 1, total: 1 }
  ]
  expect(mapResultDataTest(aggregatedMatrix)).toEqual(expectedResult)
})
