import Link from "next/link";
// import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import List from "../components/List";
import { Algorand } from "../interfaces";
// import { GetStaticProps, GetServerSideProps } from "next";
// import { AlgorandList } from "./api/algorandRequest";

type Props = {
  items: Algorand[];
};

// export const getStaticProps: GetStaticProps = async () => {
//   const { data, error, isLoading, isSuccess } = AlgorandList();

//   const items: Algorand[] = data.asalist;
//   return { props: { items } };
// };

const queryClient = new QueryClient();

const IndexPage = () => {
  // const { data, error, isLoading, isSuccess } = AlgorandList();
  // console.log(data);

  // const items: Algorand[] = data.asalists;
  // const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Layout title="Home | Next.js + TypeScript Example">
        <List />
      </Layout>
    </QueryClientProvider>
  );
};

export default IndexPage;
