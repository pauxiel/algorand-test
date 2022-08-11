// import { useQuery } from "@tanstack/react-query";
// import { gql, request } from "graphql-request";

// const API_URL = "https://analytics-api.herokuapp.com/analytics";

// const query = gql`
//   query {
//     asalist {
//       results {
//         logo
//         name
//         available
//         assetId
//       }
//     }
//   }
// `;

// export function AlgorandList() {
//   return useQuery(["asalist"], async () => {
//     const { getAlgorandList } = await request(API_URL, query);
//     console.log(getAlgorandList);
//     return getAlgorandList;
//   });
// }

import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";

const API_URL = "https://analytics-api.herokuapp.com/analytics";

export default function useList() {
  return useQuery(["asalist"], async () => {
    const {
      asalist: { results }
    } = await request(
      API_URL,
      gql`
        query {
          asalist {
            results {
              logo
              name
              available
              assetId
            }
          }
        }
      `
    );
    return results;
  });
}
