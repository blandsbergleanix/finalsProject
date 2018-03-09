var samples = require('../../data/sampleStructures')
var count = require('../../src/dependencyCounter')

// Rename count
test('adds 1 + 2 to equal 3', () => {
    expect(count(samples.interfaceStructureZ1)).toEqual({
        2: [1, 3]
    })
  })
