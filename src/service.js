import createProviderMatrix from './createProviderMatrix'
import createConsumerMatrix from './createConsumerMatrix'
import aggregateApplicationMatrix from './aggregateApplicationMatrix'
import getApplicationIds from './getApplicationIds'

// let createProviderMatrix = require('./createProviderMatrix')
// let createConsumerMatrix = require('./createConsumerMatrix')
// let aggregateApplicationMatrix = require('./aggregateApplicationMatrix')

export default function service (graphQLMappedData) {
  let providerMatrix = createProviderMatrix(graphQLMappedData)
  let consumerMatrix = createConsumerMatrix(providerMatrix)
  let result = aggregateApplicationMatrix(providerMatrix, consumerMatrix)
  let ids = getApplicationIds(providerMatrix, consumerMatrix)

  return {result, ids}
}
