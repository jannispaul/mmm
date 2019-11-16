import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";
import styled from "styled-components";

const Hero = styled.div`
  width: 100vw;
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(600px, 1fr));
  }
`;
const MainContent = styled.div`
  padding: 0.5rem 0.5rem;
  position: relative;
  order: 2;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  text-align: center;

  @media (min-width: 1200px) {
    padding: 2rem;
    position: -webkit-sticky;
    position: sticky;
    height: calc(100vh - 80px);
    top: 80px;
    overflow-y: scroll;
    order: 0;
    padding: 4rem 2rem;
    padding-bottom: 5rem;
    display: flex;
    justify-content: center;
    text-align: left;
  }
`;
const CenterContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Title = styled.h1`
  max-width: 800px;
  background: var(--color-lighter);
  position: relative;
  padding: 2rem 2rem 0 2rem;

  @media (min-width: 800px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    bottom: 100%;
    padding: 3rem 2rem 0 2rem;
  }
  @media (min-width: 1200px) {
    position: relative;
    padding: 0;
    max-width: 600px;
    text-align: left;
  }
`;
const Headline2 = styled.h2`
  max-width: 600px;
  margin-bottom: calc(0.5 * var(--space-s));
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`;
const MetaInfoContainer = styled.div`
  display: inline-block;
  margin: 0.5rem 0 4rem 0;
  & > p {
    display: inline-block;
    text-transform: uppercase;
    font-size: 16px;
  }
  & > p:not(:last-child) {
    margin-right: 1rem;
  }
`;
const IngredientsContainer = styled.div`
  background: var(--color-light);
  padding: 1.5rem 2rem 3rem 2rem;
  margin-left: -2rem;
  margin-right: -2rem;
  & > hr {
    border: 1px solid var(--color-primary);
    margin-bottom: 1rem;
  }
`;

// const ScrollContent = styled.div`
//     background: var(--color-light);
//     order: 1;
// `

const StyledImage = styled(Img)`
  height: calc(70vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1;

  @media (min-width: 800px) {
    height: calc(90vh - 80px);
  }
  @media (min-width: 1200px) {
    height: calc(100vh - 80px);
  }
`;
// const Label = styled(Link)`
//   background: var(--color-primary);
//   color: var(--color-white);
//   padding: 4px 8px;
//   font-size: 16px;
//   text-transform: uppercase;
// `;
const DirectionsContainer = styled.div`
  padding: 6rem var(--space-l);
  display: flex;
  align-items: center;
  order: 3;
  grid-column: 2;
  background: var(--color-light);
  & > div {
    max-width: 600px;
    margin: auto;
  }
  @media (min-width: 1200px) {
    min-height: calc(100vh - 80px);
  }
`;

const IngredientListItem = styled.ul`
  & > li {
    padding-top: 0.5rem;
    line-height: 1.2;
    text-align: left;
  }

  @media (min-width: 600px) {
    column-count: 2;
  }
`;

export const RecipeTemplate = ({
  content,
  contentComponent,
  date,
  tags,
  title,
  portions,
  time,
  ingredients,
  featuredImage
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      <Hero>
        {/* <ScrollContent> */}
        <StyledImage fluid={featuredImage.childImageSharp.fluid} />
        <MainContent>
          <CenterContainer>
            {/* <Label to={category.slug}>{category.title}</Label> */}
            <Title>{title}</Title>
            <MetaInfoContainer>
              <p>{time} min</p>
              <p>{portions} Portionen</p>
              <p>{date}</p>
            </MetaInfoContainer>

            <IngredientsContainer>
              <Headline2>Zutaten</Headline2>
              <hr></hr>
              <IngredientListItem>
                {ingredients.map(node => (
                  <li key={node}>{node}</li>
                ))}
              </IngredientListItem>
            </IngredientsContainer>
          </CenterContainer>
        </MainContent>
        <DirectionsContainer>
          <div>
            <Headline2>Zubereitung</Headline2>
            <PostContent content={content} />
            {/* <p>Description:</p>
            <div>{description}</div> */}
            {tags && tags.length ? (
              <div>
                <h4>Tags</h4>
                <ul>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </DirectionsContainer>
        {/* </ScrollContent> */}
      </Hero>
    </section>
  );
};

RecipeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const Recipe = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RecipeTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        time={post.frontmatter.time}
        date={post.frontmatter.date}
        portions={post.frontmatter.portions}
        ingredients={post.frontmatter.ingredients}
        featuredImage={post.frontmatter.featuredImage}
      />
    </Layout>
  );
};

Recipe.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Recipe;

export const pageQuery = graphql`
  query RecipeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD. MMMM YYYY", locale: "DE_DE")
        title
        description
        tags
        portions
        time
        ingredients
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
`;
