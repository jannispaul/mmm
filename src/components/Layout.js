import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "../theme/font-face.css";
import "../theme/variables.css";
import "../theme/styles.css";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

const AppContent = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: relative;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content:
                "Wir freuen uns auf Sie – Ihre Hausarztpraxis Schulzendorf. Ärztin Peggy von Niederhäusern sofgt für die ganze Familie ✓ Öffnungszeiten ✓ Kontakt ✓ Termine"
            },
            {
              name: "keywords",
              content:
                "Hausarzt, Arztpraxis, krank, Schulzendorf, Peggy von Niederhäusern, Familienarzt, Kinderarzt, Grippe, Impfung, Untersuchung, Hausbesuch"
            }
          ]}
        >
          <html lang="de" />
        </Helmet>
        <Nav />
        <AppContent>{children}</AppContent>
        <Footer></Footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
