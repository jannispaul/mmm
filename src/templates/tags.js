import React from "react";
import { graphql, Link } from "gatsby";
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
      <SEO title={`${props.pageContext.tag}`} />

      <Paddingcontainer>
        <PageHeadline
          title={props.pageContext.tag}
          recipeCount={props.data.RecipeByTag.edges.length}
        ></PageHeadline>
        <RecipeList>
          {props.data.RecipeByTag.edges.map(recipe => (
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
        <Link to="/tags/">Browse all tags</Link>
      </Paddingcontainer>
      <Spacer></Spacer>
    </Layout>
  );
};
export default CategoryTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    RecipeByTag: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
                fluid(maxWidth: 289, quality: 65) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
