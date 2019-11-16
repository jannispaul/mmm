import React from "react";
// import Img from "gatsby-image";

import { Link } from "gatsby";
import styled from "styled-components";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

// import propTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

const RecipeCard = styled.div`
  position: relative;
  overflow: hidden;
  background: white;
  box-shadow: 2px 2px 10px rgba(64, 0, 0, 0.05);
  border-radius: 3px;
  transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    box-shadow: 2px 7px 15px rgba(64, 0, 0, 0.12);
    transform: translateY(-2px);
    transition: all var(--time-short);
  }
`;
const Title = styled.h3`
  padding: 1rem;
  margin-bottom: 54px;
  font-weight: 600;
  line-height: 26px;
  font-size: 18px;
  /* box-shadow: 0px 0px 10px rgba(64,0,0,0.09); */
  z-index: 10;
`;
// const StyledImage = styled(Img)`
//   width: 100%;
//   height: 200px;
//   background: gray;
//   overflow: hidden;
// `;
const MetaInfoContainer = styled.div`
  width: 100%;
  bottom: 0;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-transform: uppercase;
  padding: 1rem;
  border-top: 3px solid var(--color-light);
`;
const MetaDetail = styled.p`
  color: var(--color-black);
  align-self: center;
`;

const RecipeCardItem = props => (
  <RecipeCard>
    <Link to={props.slug}>
      {/* <StyledImage sizes={props.featuredImage.sizes} /> */}
      {props.featuredImage ? (
        <div className="featured-thumbnail">
          <PreviewCompatibleImage
            imageInfo={{
              image: props.featuredImage,
              alt: `featured image thumbnail for post ${props.title}`
            }}
          />
        </div>
      ) : null}
      <Title>{props.title}</Title>
      <MetaInfoContainer>
        <MetaDetail>
          <span role="img" aria-label="time">
            ⌛
          </span>{" "}
          {props.time} min
        </MetaDetail>
        <MetaDetail>
          <span role="img" aria-label="portions">
            🍽️
          </span>{" "}
          {props.portions}
        </MetaDetail>
      </MetaInfoContainer>
    </Link>
  </RecipeCard>
);

export default RecipeCardItem;
