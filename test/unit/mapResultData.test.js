import mapResultDataTest from '../../src/mapResultData'

test('Sample aggregated Matrix (Z1) expected result', () => {
  var aggregatedMatrix = {
    '1': { providing: 0, consuming: 1, total: 1, name: 'test1' },
    '2': { providing: 2, consuming: 0, total: 2, name: 'test2' },
    '3': { providing: 0, consuming: 1, total: 1, name: 'test3' }
  }

  const expectedResult = [
    { appName: 'test1', providing: 0, consuming: 1, total: 1 },
    { appName: 'test2', providing: 2, consuming: 0, total: 2 },
    { appName: 'test3', providing: 0, consuming: 1, total: 1 }
  ]
  expect(mapResultDataTest(aggregatedMatrix)).toEqual(expectedResult)
})
