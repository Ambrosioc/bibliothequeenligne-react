import React from "react";
import Card from "../components/cards/Card";
import { getAllBooks } from "../services/apis/books/apiBookServices";
import { useFetchwithToken } from "../utils/hooks";
import { Container } from "../utils/styles/GlobalStyle";
import { Loader } from "../utils/styles/Loading";

export default function Books() {
  const { data, isLoading, error } = useFetchwithToken(getAllBooks());

  if (error) {
    <Container>
      <h1>Erreur de reseau</h1>
      <p>Verifier ça connexion internet ou son navigateur</p>
    </Container>
  }
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Card data={data} />
      )}
    </div>
  );
}
