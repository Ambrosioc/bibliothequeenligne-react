import React from "react";
import styled from "styled-components";
import LastBooks from "../components/cards/LastBooks";
import { useFetch } from "../utils/hooks";
import { Loader } from "../utils/styles/Loading";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const { loading } = useFetch("");

  return (
    <HomeContainer>
      <h1>Bienvenue sur la bibliothèque en ligne</h1>
      <div>
        <h2>Les derneiers sortis par catégorie</h2>
        {loading ? <Loader /> : <LastBooks />}
      </div>
      <div>
        <h2>Les mieux notés</h2>
        {loading ? <Loader /> : <div>Pas de livre noté pour le moment !</div>}
      </div>
      <div>
        <h2>Les plus populaires</h2>
        {loading ? (
          <Loader />
        ) : (
          <div>Pas de livre populaire pour le moment !</div>
        )}
      </div>
    </HomeContainer>
  );
}
