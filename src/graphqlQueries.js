export default {
  ALLFACTSHEETS: `query($factSheetType:FactSheetType){
    allFactSheets(factSheetType: $factSheetType) {
      edges {
        node {
          id
          ... on Interface {
            relInterfaceToProviderApplication {
              edges {
                node {
                  factSheet {
                    id
                  }
                }
              }
            }
            relInterfaceToConsumerApplication {
              edges {
                node {
                  factSheet {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }`
}
