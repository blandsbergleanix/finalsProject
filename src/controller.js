import createProviderMatrix from './createProviderMatrix'
import createConsumerMatrix from './createConsumerMatrix'
import aggregateApplicationMatrix from './aggregateApplicationMatrix'

// let createProviderMatrix = require('./createProviderMatrix')
// let createConsumerMatrix = require('./createConsumerMatrix')
// let aggregateApplicationMatrix = require('./aggregateApplicationMatrix')

export default function controller (graphQLMappedData) {
  let providerMatrix = createProviderMatrix(graphQLMappedData)
  let consumerMatrix = createConsumerMatrix(providerMatrix)
  return aggregateApplicationMatrix(providerMatrix, consumerMatrix)
}
