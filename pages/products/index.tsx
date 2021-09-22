import Page from "../../layouts/layout";
import Card from "../../components/Card/Card";

import { GetServerSideProps } from "next";

export default function Products({ data }) {
  return (
    <Page meta={{ title: "Products", description: "Products Page" }}>
      <Card results={data} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=5`);
  const data = await res.json();

  return {
    props: { data },
  };
};
