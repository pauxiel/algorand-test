// import * as React from 'react'
// import ListItem from './ListItem'
// import { Algorand } from '../interfaces'

// type Props = {
//   items: Algorand[]
// }

// const List = ({ items }: Props) => (

//   <>
//       {items.map((item) => (
//       <div key={item.assetId}>
//           <h1>{item.available}</h1>
//            <p>{item.name}</p>
//       </div>
//     ))}

//   </>
// )

// export default List

import * as React from "react";
import { Algorand } from "../interfaces";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import useList from "../pages/api/algorandRequest";

type Props = {
  items: Algorand[];
};

// Create a client
// const queryClient = new QueryClient()

function List() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useList();
  // Access the client
  //  const queryClient = useQueryClient()

  // Queries
  // const query = useQuery(["asalists"], asalist);
  console.log(data);
  return (
    <>
      {data?.map((list) => (
        <div key={list.assetId}>{list.name}</div>
      ))}
    </>
  );
}

export default List;
