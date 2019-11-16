import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  padding: var(--space-l) var(--space-l) 0 var(--space-l);
`;

const Paddingcontainer = ({ children }) => (
  <ContentContainer>{children}</ContentContainer>
);

export default Paddingcontainer;
