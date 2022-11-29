import React from "react";

import Card from "../components/cards/Card";
import { getAllBooks } from "../services/apis/books/apiBookServices";
import { useFetchwithToken } from "../utils/hooks";
import { StyledLink } from "../utils/styles/GlobalStyle";
import { CardContainer } from "../utils/styles/StyledCard";

export default function Books() {
  const token = localStorage.getItem("token");

  //   fetchBooks();
  //   setIsLoading(true);
  // }, []);
  const { data, isLoading, error } = useFetchwithToken(getAllBooks());
  console.log(data);

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
