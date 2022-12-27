import React from "react";
import Card from "../components/cards/Card";
import { useFetchwithToken } from "../utils/hooks";
import { Container, StyledLink } from "../utils/styles/GlobalStyle";

export default function Books() {
  const token = localStorage.getItem("token");

  const { data, isLoading, error } = useFetchwithToken(
    "https://book-api-projet-fin.herokuapp.com/api/books",
    token
  );

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
      <Card data={data} isLoading={isLoading} error={error} />
    </div>
  );
}
