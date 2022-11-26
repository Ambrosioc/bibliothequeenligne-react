import React from "react";
import Card from "../components/cards/Card";
import { useFetchwithToken } from "../utils/hooks";
import { StyledLink } from "../utils/styles/GlobalStyle";
import { CardContainer } from "../utils/styles/StyledCard";

export default function Books() {
  const token = localStorage.getItem("token");
  const { data, isLoading, error } = useFetchwithToken(
    "https://book-api-projet-fin.herokuapp.com/api/books"
  );

  if (!token) {
    return (
      <CardContainer>
        <h1>Vous devez être connecté pour accéder à cette page</h1>
        <StyledLink to="/sign-in">Se connecter</StyledLink>
      </CardContainer>
    );
  }

  return (
    <div>
      <Card data={data} isLoading={isLoading} error={error} />
    </div>
  );
}
