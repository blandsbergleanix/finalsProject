import createProviderMatrix from './createProviderMatrix'
import createConsumerMatrix from './createConsumerMatrix'
import aggregateApplicationMatrix from './aggregateApplicationMatrix'
import getApplicationIds from './getApplicationIds'
import createMultihopProviderMatrix from './createMultihopProviderMatrix'

export default function service (graphQLMappedData) {
  let providerMatrix = createProviderMatrix(graphQLMappedData)
  let multihopProviderMatrix = createMultihopProviderMatrix(providerMatrix)
  let consumerMatrix = createConsumerMatrix(multihopProviderMatrix)
  let result = aggregateApplicationMatrix(providerMatrix, consumerMatrix)
  let ids = getApplicationIds(providerMatrix, consumerMatrix)

  return {result, ids}
}
