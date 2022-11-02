import React from "react";
import styled from "styled-components";
import LastBooks from "../components/cards/LastBooks";
import { Loader } from "../utils/styles/Loading";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <HomeContainer>
      <h1>Bienvenue sur la bibliothèque en ligne</h1>
      <div>
        <h2>Les derneiers sortis par catégorie</h2>
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
    </HomeContainer>
  );
}
