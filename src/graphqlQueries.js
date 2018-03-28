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
  LISTOFAPPLICATIONS: `query($filter:FilterInput){
    allFactSheets(filter: $filter) {
      edges {
        node {
          name
          id
        }
      }
    }
  }`
}
