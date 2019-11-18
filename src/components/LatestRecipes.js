import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import RecipeCardItem from "./layout/RecipeCardItem";

import RecipeList from "./layout/RecipeList";
import SectionHeadline from "./layout/SectionHeadline";
import Paddingcontainer from "./layout/PaddingContainer";

class AllRecipes extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Paddingcontainer>
        <SectionHeadline link="/recipes">Neue Rezepte</SectionHeadline>
        <RecipeList>
          {posts &&
            posts.map(({ node: post }) => (
              <RecipeCardItem
                key={post.id}
                slug={post.fields.slug}
                featuredImage={post.frontmatter.featuredImage}
                title={post.frontmatter.title}
                portions={post.frontmatter.portions}
                time={post.frontmatter.time}
              ></RecipeCardItem>
            ))}
        </RecipeList>
      </Paddingcontainer>
    );
  }
}

AllRecipes.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query LatestRecipesQuery {
        allMarkdownRemark(
          limit: 5
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
    render={(data, count) => <AllRecipes data={data} count={count} />}
  />
);
