import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 100%;
`;
const Header2 = styled.h2`
  color: var(--color-primary);
  transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1);
  position: relative;
  line-height: 20px;
  &::after {
    opacity: 0.5;
    display: inline-block;
    content: "→";
    transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover {
    &::after {
      opacity: 1;
      transform: translateX(10px);
      transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1);
      color: var(--color-primary);
    }
  }
`;

const SectionHeadline = ({ link, children }) => (
  <StyledLink to={link}>
    <Header2>{children} </Header2>
  </StyledLink>
);

export default SectionHeadline;
