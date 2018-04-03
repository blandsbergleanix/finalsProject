import createProviderMatrix from './createProviderMatrix'
import createConsumerMatrix from './createConsumerMatrix'
import aggregateApplicationMatrix from './aggregateApplicationMatrix'
import getApplicationIds from './getApplicationIds'
import createMultihopProviderMatrix from './createMultihopProviderMatrix'

// let createProviderMatrix = require('./createProviderMatrix')
// let createConsumerMatrix = require('./createConsumerMatrix')
// let aggregateApplicationMatrix = require('./aggregateApplicationMatrix')

export default function service (graphQLMappedData) {
  let providerMatrix = createProviderMatrix(graphQLMappedData)
  let multihopProviderMatrix = createMultihopProviderMatrix(providerMatrix)
  console.log(multihopProviderMatrix)
  let consumerMatrix = createConsumerMatrix(multihopProviderMatrix)
  let result = aggregateApplicationMatrix(providerMatrix, consumerMatrix)
  let ids = getApplicationIds(providerMatrix, consumerMatrix)

  return {result, ids}
}
