import React from "react";
import BookInfo from "../container/BookInfo";
import { Container, StyledLink } from "../utils/styles/GlobalStyle";

export default function BookShow() {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return (
      <Container>
        <h1>Vous devez être connecté pour accéder à cette page</h1>
        <StyledLink to="/sign-in">Se connecter</StyledLink>
      </Container>
    );
  }
  return (
    <div>
      <BookInfo />
    </div>
  );
}
