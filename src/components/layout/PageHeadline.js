import React from 'react'
// import { Link } from "gatsby"
import styled from 'styled-components'

const StyledPageHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const StyledH1 = styled.h1`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;

  &::after {
    content: '';
    height: 20px;
    background: yellow;
    width: 100%;
    position: absolute;
    left: -10px;
    bottom: 5px;
    z-index: -1;
  }
`
const NumberOfRecipes = styled.span`
  color: var(--color-medium);
  opacity: 1;
`

const pageHeadline = ({ title, recipeCount }) => (
  <StyledPageHeadline>
    <StyledH1>{title}</StyledH1>
    <NumberOfRecipes>{recipeCount} Rezepte</NumberOfRecipes>
  </StyledPageHeadline>
)

export default pageHeadline
