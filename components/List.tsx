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
import Image from "next/image";

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

  const algo = data?.filter(
    (searchRes) =>
      searchRes.name.toLowerCase().includes("Algo".toLowerCase()) &&
      searchRes.logo !== null
  );
  return (
    <>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error</span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pl-10 pr-10">
          {algo?.map((list) => (
            <div className="border-[#B7BECC] border rounded-lg" key={list.assetId}>
              <div className="py-2 px-2 text-center">
                <Image
                  className="bg-cover bg-no-repeat bg-center"
                  src={list?.logo || ""}
                  width={60}
                  height={60}
                />
                <p>{list.name}</p>
                <p>{list.available === true ? "available" : "not available"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default List;
