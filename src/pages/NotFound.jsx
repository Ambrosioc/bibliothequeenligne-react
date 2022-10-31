import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundh1 = styled.h1`
  font-size: 2rem;
  color: #f00;
`;
export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundh1>NotFound 404</NotFoundh1>
    </NotFoundContainer>
  );
}
