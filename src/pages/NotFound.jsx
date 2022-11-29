import React from "react";
import styled from "styled-components";
import { Container } from "../utils/styles/GlobalStyle";

const NotFoundh1 = styled.h1`
  font-size: 2rem;
  color: #f00;
`;
export default function NotFound() {
  return (
    <Container>
      <NotFoundh1>NotFound 404</NotFoundh1>
    </Container>
  );
}
