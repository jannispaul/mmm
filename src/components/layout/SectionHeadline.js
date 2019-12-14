import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 100%;
`;
const Header2 = styled.h2`
  color: var(--color-black);
  transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1);
  position: relative;
  line-height: 20px;
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;

  &::before {
    content: "";
    height: 15px;
    background: yellow;
    width: calc(100% - 30px);
    position: absolute;
    left: -10px;
    bottom: -10px;
    z-index: -1;
    transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &::after {
    content: "→";
    display: inline-block;
    margin-bottom: 2px;
    opacity: 0.5;
    transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover {
    &::after {
      opacity: 1;
      transform: translateX(10px);
      transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1);
      color: var(--color-black);
    }
    &::before {
      height: 2.6rem;
      width: calc(100% + 40px);
      left: -15px;
      bottom: -12px;
      transition: all var(--time-short) cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;

const SectionHeadline = ({ link, children }) => (
  <StyledLink to={link}>
    <Header2>{children} </Header2>
  </StyledLink>
);

export default SectionHeadline;
