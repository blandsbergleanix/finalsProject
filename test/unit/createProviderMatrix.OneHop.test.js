import samples from '../../data/sampleStructures'
import providingMatrix from '../../src/createProviderMatrix'

test('Sample data Z1 expected result', () => {
  expect(providingMatrix(samples.interfaceStructureZ1)).toEqual({
    2: [1, 3]
  })
})

test('Sample data Z2 expected result', () => {
  expect(providingMatrix(samples.interfaceStructureZ2)).toEqual({
    1: [3],
    2: [1],
    3: [2]
  })
})

test('Sample data Z3 expected result', () => {
  expect(providingMatrix(samples.interfaceStructureZ3)).toEqual({
    1: [3],
    2: [1]
  })
})

test('Sample data Z4 expected result', () => {
  expect(providingMatrix(samples.interfaceStructureZ4)).toEqual({
    2: [1],
    3: [2],
    4: [2]
  })
})

test('Sample data Z8 expected result', () => {
  expect(providingMatrix(samples.interfaceStructureZ8)).toEqual({
    1: [2],
    2: [3, 4],
    3: [1],
    4: [5],
    5: [2]
  })
})
