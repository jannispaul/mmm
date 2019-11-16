import React from "react";
// import { Link } from "gatsby"
import styled from "styled-components";
const NumberOfRecipes = styled.span`
  color: var(--color-primary);
  opacity: 0.5;
`;

const pageHeadline = ({ title, recipeCount }) => (
  <div>
    <h1>{title}</h1>
    <NumberOfRecipes>{recipeCount} Rezepte</NumberOfRecipes>
  </div>
);

export default pageHeadline;
