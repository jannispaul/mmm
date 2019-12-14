import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Navigation = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 80px;
  background: var(--color-black);
  display: flex;
  justify-content: space-between;
  /* grid-template-columns: repeat(6, 1fr); */
  align-items: center;
  /* text-transform: uppercase; */
  font-weight: 500;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding-left: var(--space-m);
  padding-right: var(--space-m);
`;
const activeClassName = "active";

const Logo = styled(Link).attrs({ activeClassName: activeClassName })`
  font-family: "PP Woodland";
  font-size: 1.5rem;
  color: var(--color-white);
  opacity: 0.9;

  &.${activeClassName} {
    opacity: 1;
  }

  &:hover {
    color: var(--color-primary);
    opacity: 1;
  }
`;

const NavLink = styled(Link).attrs({
  activeClassName: activeClassName
})`
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-white);
  opacity: 0.8;
  margin-left: 1rem;

  &.${activeClassName} {
    color: var(--color-primary);
    opacity: 1;
  }
  &:hover {
    color: var(--color-primary);
    opacity: 1;
  }
`;

const Nav = () => (
  <Navigation>
    <Logo to="/">MMM</Logo>
    <div>
      <NavLink to="/categories/appetizers">Vorspeisen</NavLink>
      <NavLink to="/categories/maindishes">Hauptgerichte</NavLink>
      <NavLink to="/categories/sidedishes">Beilagen</NavLink>
      <NavLink to="/categories/desserts">Desserts</NavLink>
      <NavLink to="/categories/drinks">Getränke</NavLink>
    </div>
  </Navigation>
);

export default Nav;
