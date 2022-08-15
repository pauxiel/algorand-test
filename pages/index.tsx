import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import List from "../components/List";
import { Algorand } from "../interfaces";

type Props = {
  items: Algorand[];
};

const queryClient = new QueryClient();

const IndexPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout title="List of Algorand Standard Asset on Asalytics">
        <List />
      </Layout>
    </QueryClientProvider>
  );
};

export default IndexPage;
