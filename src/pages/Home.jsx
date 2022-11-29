import React from "react";
import LastBooks from "../container/LastBooks";
import { Container } from "../utils/styles/GlobalStyle";
import { Loader } from "../utils/styles/Loading";

export default function Home() {
  return (
    <Container>
      <h1>Bienvenue sur la bibliothèque en ligne</h1>
      <div>
        <h2>Les dernières sortis</h2>
        <LastBooks />
      </div>
      <div>
        <h2>Les mieux notés</h2>
        <Loader />
      </div>
      <div>
        <h2>Les plus populaires</h2>
        <Loader />
      </div>
    </Container>
  );
}
