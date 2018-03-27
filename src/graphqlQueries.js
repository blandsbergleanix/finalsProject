export default {
  LISTOFINTERFACES: `query($factSheetType:FactSheetType){
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
  }`,
  LISTOFAPPLICATIONS: `query($factSheetType:FactSheetType){
    allFactSheets(factSheetType: $factSheetType) {
      edges {
        node {
          name
          id
        }
      }
    }
  }`
}
