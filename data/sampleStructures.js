var samples =
  {
    interfaceStructureZ1: [
      { id: 'a', providedBy: 2, consumedBy: [1, 3] }
    ],

    interfaceStructureZ2: [
      { id: 'a', providedBy: 2, consumedBy: [1] },
      { id: 'b', providedBy: 1, consumedBy: [3] },
      { id: 'c', providedBy: 3, consumedBy: [2] }
    ],

    interfaceStructureZ3: [
      { id: 'a', providedBy: 1, consumedBy: [3] },
      { id: 'b', providedBy: 2, consumedBy: [1] }
    ],

    interfaceStructureZ4: [
      { id: 'a', providedBy: 3, consumedBy: [2] },
      { id: 'b', providedBy: 3, consumedBy: [2] },
      { id: 'c', providedBy: 2, consumedBy: [1] },
      { id: 'd', providedBy: 4, consumedBy: [2] }
    ],

    interfaceStructureZ8: [
      { id: 'a', providedBy: 1, consumedBy: [2] },
      { id: 'b', providedBy: 2, consumedBy: [3] },
      { id: 'c', providedBy: 2, consumedBy: [4] },
      { id: 'd', providedBy: 5, consumedBy: [2] },
      { id: 'e', providedBy: 4, consumedBy: [5] },
      { id: 'f', providedBy: 3, consumedBy: [1] }
    ]
  }

module.exports = samples
