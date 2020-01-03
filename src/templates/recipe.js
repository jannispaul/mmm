import React from "react";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
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
  overflow: visible;

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

  position: relative;
  padding: 2rem 2rem 0 2rem;

  @media (min-width: 800px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    bottom: 100%;
    padding: 3rem 2rem 0 2rem;
    background: var(--color-white);
  }
  @media (min-width: 1200px) {
    position: relative;
    padding: 0;
    max-width: 600px;
    text-align: left;
  }
  /* span {
    text-decoration: underline;
  } */
  /* span::after {
    content: "";
    height: 200px;
    background: yellow;
    width: 200px;
    position: absolute;
    left: -100px;
    bottom: -50px;
    top: -5px;
    border-radius: 100%;
    z-index: -1;
  } */
`;
const Headline2 = styled.h2`
  max-width: 600px;
  margin-bottom: var(--space-s);
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
  background: var(--color-lighter);
  padding: 3rem 4rem;
  margin-left: -4rem;
  margin-right: -4rem;
  border-radius: 10px;
  z-index: 1;
  & > hr {
    border: 1px solid var(--color-black);
    margin-bottom: 1rem;
  }
`;

// const ScrollContent = styled.div`
//   background: var(--color-light);
//   order: 1;
// `;

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
  /* display: flex;
  align-items: flex-start; */
  order: 3;
  grid-column: 2;
  background: var(--color-lighter);
  & > div {
    max-width: 600px;
    margin: auto;
  }
  & ol li {
    counter-increment: my-awesome-counter;
    display: flex;
    width: 100%;
    /* font-size: 0.8rem; */
    margin-bottom: 1.5rem;
  }
  & ol li::before {
    content: counter(my-awesome-counter) ".";
    font-weight: bold;
    min-width: 1rem;
    font-size: 18px;
    /* opacity: 0.1; */
    text-align: right;
    /* margin-top: -1rem; */
    /* margin-left: -6rem; */
    margin-right: 0.2rem;
    font-family: "PP Woodland";
    /* line-height: 1; */
    font-weight: 600;
    color: var(--color-black);
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

const Tags = styled.div`
  li {
    display: inline-block;
    padding: 8px 16px;
    background: var(--color-light);
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 3px;
    /* font-size: 16px; */
    /* text-transform: uppercase; */
    font-weight: 500;

    :hover {
      background: yellow;
    }
  }
`;

const RecipeTemplate = props => {
  return (
    <Layout>
      <Hero>
        {/* <ScrollContent> */}
        <StyledImage
          fluid={
            props.data.markdownRemark.frontmatter.featuredImage.childImageSharp
              .fluid
          }
        />
        <MainContent>
          <CenterContainer>
            <Title>
              <span>{props.data.markdownRemark.frontmatter.title}</span>
            </Title>
            <MetaInfoContainer>
              <p>{props.data.markdownRemark.frontmatter.time} min</p>
              <p>
                {props.data.markdownRemark.frontmatter.portions > 0
                  ? `${props.data.markdownRemark.frontmatter.portions} Portionen`
                  : ``}
              </p>
              <p>{props.data.markdownRemark.frontmatter.date}</p>
            </MetaInfoContainer>

            <IngredientsContainer>
              <Headline2>Zutaten</Headline2>
              <hr></hr>
              <IngredientListItem>
                {props.data.markdownRemark.frontmatter.ingredients.map(node => (
                  <li key={node}>{node}</li>
                ))}
              </IngredientListItem>
            </IngredientsContainer>
          </CenterContainer>
        </MainContent>
        <DirectionsContainer>
          <div>
            <Headline2>Zubereitung</Headline2>
            {/* <PostContent content={content} /> */}
            <div
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html
              }}
            />
            {/* <div>{props.data.markdownRemark.html}</div> */}
            {/* <div
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.HTMLContent
              }}
            /> */}
            {/* {props.data.markdownRemark.HTMLContent} */}
            {/* {props.data.markdownRemark.frontmattertags &&
            props.data.markdownRemark.frontmattertags.length ? ( */}
            <Tags>
              <h4>Tags</h4>
              <ul>
                {props.data.markdownRemark.frontmatter.tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </Tags>
            {/* ) : null} */}
          </div>
        </DirectionsContainer>
        {/* </ScrollContent> */}
      </Hero>
    </Layout>
  );
};

export default RecipeTemplate;

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
            fluid(maxWidth: 2890, quality: 65) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
