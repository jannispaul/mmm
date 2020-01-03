import React from "react";
import Img from "gatsby-image";

import { Link } from "gatsby";
import styled from "styled-components";
// import PreviewCompatibleImage from "../PreviewCompatibleImage";

// import propTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

const StyledImage = styled(Img)`
  width: 100%;
  height: 400px;
  /* background: gray; */
  overflow: visible !important;
  & img {
    border-radius: 10px;
  }

  /* box-shadow: 2px 2px 10px rgba(64, 0, 0, 0.05);
  transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1); */

  /* box-shadow: 0px 0px 10px rgba(64, 0, 0, 0.09); */
  /* display: flex;
  align-items: center; */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 10%;
    border-radius: 10px;
    width: 80%;
    height: 80%;
    /* background: red; */
    opacity: 1;
    z-index: -1;
    box-shadow: 2px 20px 20px var(--color-medium);
    transition: all var(--time-short);
  }
`;
const RecipeCard = styled.div`
  position: relative;
  background: none;
  /* border-radius: 3px; */
  /* &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 10%;
    border-radius: 10px;
    width: 75%;
    height: 60%;
    background: red;
    z-index: -1;
    box-shadow: 2px 20px 20px var(--color-dark);
    opacity: 0.5;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  } */

  &:hover ${StyledImage} {
    transform: translateY(-2px);
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    ::after {
      transform: scale(1.15, 1.15);
      opacity: 0.5;
      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
`;
const Title = styled.h3`
  /* padding: 1rem 0; */
  margin-bottom: 5px;
  font-weight: 600;
  line-height: 26px;
  font-size: 18px;
  z-index: 10;
`;
const MetaInfoContainer = styled.div`
  width: 100%;
  bottom: 0;
  /* position: absolute; */
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  /* align-items: center;
  justify-content: center; */
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 1rem 0 0.5rem;
  /* border-top: 3px solid var(--color-light); */
`;
const MetaDetail = styled.p`
  color: var(--color-medium);
  align-self: center;
  display: inline-block;
  margin-right: 1rem;
`;

const RecipeCardItem = props => (
  <RecipeCard>
    <Link to={props.slug}>
      {/* <StyledImage sizes={props.featuredImage.sizes} /> */}
      {props.featuredImage ? (
        <StyledImage
          // fixed={props.featuredImage.childImageSharp.fixed}
          fluid={props.featuredImage.childImageSharp.fluid}
        >
          {/* <PreviewCompatibleImage
            imageInfo={{
              image: props.featuredImage,
              alt: `featured image thumbnail for post ${props.title}`
            }}
          /> */}
        </StyledImage>
      ) : null}
      <MetaInfoContainer>
        <MetaDetail>
          {/* <span role="img" aria-label="time">
            ⌛
          </span>{" "} */}
          {props.time} min
        </MetaDetail>
        <MetaDetail>
          {props.portions > 0 ? `${props.portions} Portionen` : ``}
        </MetaDetail>
      </MetaInfoContainer>

      <Title>{props.title}</Title>
    </Link>
  </RecipeCard>
);

export default RecipeCardItem;
