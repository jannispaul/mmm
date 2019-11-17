import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
// import Features from "../components/Features";
import LatestRecipes from "../components/LatestRecipes";
import AllDesserts from "../components/AllDesserts";
import SEO from "../components/Seo";

const Spacer = styled.div`
  padding: 3rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title={`MMM`} />
    <LatestRecipes />
    <AllDesserts />
    <Spacer></Spacer>
  </Layout>
);

export default IndexPage;
