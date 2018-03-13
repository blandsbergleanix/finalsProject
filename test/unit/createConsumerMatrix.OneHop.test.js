var createConsumingMatrix = require('../../src/createConsumerMatrix')

test('Sample provider (Z1) expected result', () => {
  var providingMatrix = {'2': ['1', '3']}
  expect(createConsumingMatrix(providingMatrix)).toEqual({
    '1': ['2'],
    '3': ['2']
  })
})

test('Sample provider (Z2) expected result', () => {
  var providingMatrix = {
    '1': ['3'],
    '2': ['1'],
    '3': ['2']
  }

  expect(createConsumingMatrix(providingMatrix)).toEqual({
    '1': ['2'],
    '2': ['3'],
    '3': ['1']
  })
})

test('Sample provider (Z3) expected result', () => {
  var providingMatrix = {
    '1': ['3'],
    '2': ['1'],
    '3': ['2']
  }

  expect(createConsumingMatrix(providingMatrix)).toEqual({
    '1': ['2'],
    '2': ['3'],
    '3': ['1']
  })
})

test('Sample provider (Z4) expected result', () => {
  var providingMatrix = {
    '2': ['1'],
    '3': ['2'],
    '4': ['2']
  }

  expect(createConsumingMatrix(providingMatrix)).toEqual({
    '1': ['2'],
    '2': ['3', '4']
  })
})

test('Sample provider (Z8) expected result', () => {
  var providingMatrix = {
    '1': ['2'],
    '2': ['3', '4'],
    '3': ['1'],
    '4': ['5'],
    '5': ['2']
  }

  expect(createConsumingMatrix(providingMatrix)).toEqual({
    '1': ['3'],
    '2': ['1', '5'],
    '3': ['2'],
    '4': ['2'],
    '5': ['4']
  })
})
