import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import RecipeCardItem from "../components/layout/RecipeCardItem";
import RecipeList from "../components/layout/RecipeList";
import Paddingcontainer from "../components/layout/PaddingContainer";
import PageHeadline from "../components/layout/PageHeadline";

const CategoryTemplate = props => {
  return (
    <Layout>
      <SEO title={`${props.data.CategoryByID.frontmatter.name}`} />

      <Paddingcontainer>
        <PageHeadline
          title={props.data.CategoryByID.frontmatter.name}
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
            featuredpost
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
