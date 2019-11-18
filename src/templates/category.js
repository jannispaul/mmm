import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import RecipeCardItem from "../components/layout/RecipeCardItem";
import RecipeList from "../components/layout/RecipeList";
import Paddingcontainer from "../components/layout/PaddingContainer";
import PageHeadline from "../components/layout/PageHeadline";
import styled from "styled-components";

const Spacer = styled.div`
  padding: 3rem;
`;

const CategoryTemplate = props => {
  return (
    <Layout>
      <SEO title={`${props.data.CategoryByID.frontmatter.title}`} />
      <Paddingcontainer>
        <PageHeadline
          title={props.data.CategoryByID.frontmatter.title}
          recipeCount={props.data.RecipeByCategory.edges.length}
        ></PageHeadline>
        <RecipeList>
          {props.data.RecipeByCategory.edges.map(recipe => (
            <RecipeCardItem
              key={recipe.id}
              slug={recipe.node.fields.slug}
              title={recipe.node.frontmatter.title}
              time={recipe.node.frontmatter.time}
              portions={recipe.node.frontmatter.portions}
              featuredImage={recipe.node.frontmatter.featuredImage}
            ></RecipeCardItem>
          ))}
        </RecipeList>
      </Paddingcontainer>
      <Spacer></Spacer>
    </Layout>
  );
};
export default CategoryTemplate;

export const pageQuery = graphql`
  query($id: String!, $category: String!) {
    CategoryByID: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        name
        title
      }
    }
    RecipeByCategory: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")

            portions
            time
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
