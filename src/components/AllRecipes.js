import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
// import PreviewCompatibleImage from "./PreviewCompatibleImage";
import RecipeCardItem from "./layout/RecipeCardItem";

class AllRecipes extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: recipes } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {recipes &&
          recipes.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <RecipeCardItem
                slug={post.fields.slug}
                featuredImage={post.frontmatter.featuredImage}
                title={post.frontmatter.title}
                key={post.id}
                portions={post.frontmatter.portions}
                time={post.frontmatter.time}
              ></RecipeCardItem>
            </div>
          ))}
      </div>
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
      query AllRecipesQuery {
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
                    fluid(maxWidth: 289, quality: 100) {
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
