import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import RecipeList from "../../components/layout/RecipeList";
import Paddingcontainer from "../../components/layout/PaddingContainer";
import PageHeadline from "../../components/layout/PageHeadline";
import RecipeCardItem from "../../components/layout/RecipeCardItem";

class AllRecipesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Alle Rezepte" />

        <Paddingcontainer>
          <PageHeadline
            title="All Rezepte"
            recipeCount={this.props.data.allMarkdownRemark.edges.length}
          ></PageHeadline>
          <RecipeList>
            {this.props.data.allMarkdownRemark.edges.map(({ node: recipe }) => (
              <RecipeCardItem
                key={recipe.id}
                slug={recipe.fields.slug}
                featuredImage={recipe.frontmatter.featuredImage}
                title={recipe.frontmatter.title}
                portions={recipe.frontmatter.portions}
                time={recipe.frontmatter.time}
              ></RecipeCardItem>
            ))}
          </RecipeList>
        </Paddingcontainer>
      </Layout>
    );
  }
}
export default () => (
  <StaticQuery
    query={graphql`
      query RecipesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "recipe" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
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
    `}
    render={(data, count) => <AllRecipesIndexPage data={data} count={count} />}
  />
);
