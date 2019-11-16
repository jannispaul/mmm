import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
// import Features from "../components/Features";
import LatestRecipes from "../components/LatestRecipes";
import AllDesserts from "../components/AllDesserts";

const Spacer = styled.div`
  padding: 3rem;
`;

const IndexPage = () => (
  <Layout>
    <LatestRecipes />
    <AllDesserts />
    <Spacer></Spacer>
  </Layout>
);

export default IndexPage;
