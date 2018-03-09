function count (interfaces) {
    var providingMultiMap = {};
//TODO extract providingMultiMap[providerId] into variable
    interfaces.forEach(interfaceNode => {
        var providerId = interfaceNode.providedBy
        if (providingMultiMap[providerId] === undefined) {
            // add consumer as new array
            providingMultiMap[providerId] = interfaceNode.consumedBy
        } else {
            // add each consumer to existing set (check for duplicates)
            interfaceNode.consumedBy.forEach(consumer => {
                if (!providingMultiMap[providerId].includes(consumer)) {
                    providingMultiMap[providerId].push(consumer)
                }  
            });
        }
    })

    return providingMultiMap
  }
  module.exports = count
