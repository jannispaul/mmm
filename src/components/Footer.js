import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background: var(--color-light);
  width: 100%;
  padding: var(--space-l);
  z-index: 0;
  position: relative;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`

const Footer = ({ siteTitle }) => (
  <FooterContainer>
    <div>
      <Link to="/impressum">Impressum</Link>
      <Link to="/datenschutz">Datenschutz</Link>
    </div>
  </FooterContainer>
)

export default Footer
