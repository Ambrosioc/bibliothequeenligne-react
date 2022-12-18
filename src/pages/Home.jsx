import React from "react";
import Footer from "../components/layout/footer/Footer";
import LastBooks from "../container/LastBooks";
import { Container } from "../utils/styles/GlobalStyle";
import { Loader } from "../utils/styles/Loading";

export default function Home() {
  return (
    <>
      <Container>
        <h1>Bienvenue sur la bibliothèque en ligne</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptatibus quae voluptatum quas quibusdam
          voluptatem quos quidem quas quibusdam voluptatem quos quidem quas
          quibusdam voluptatem quos quidem quas quibusdam voluptatem quos quidem
          quas quibusdam voluptatem quos quidem quas quibusdam voluptatem quos
          quidem quas quibusdam voluptatem quos quidem quas quibusdam voluptatem
          quos quidem quas quibusdam voluptatem quos quidem quas quibusdam
          voluptatem quos quidem quas quibusdam
        </p>
        <div>
          <h2>Les dernière sortis</h2>
          <LastBooks />
        </div>
        <div>
          <h2>Les auteaurs les plus populaires</h2>
          <Loader />
        </div>
        <div>
          <h2>Les mieux notés</h2>
          <Loader />
        </div>
      </Container>
      <Footer />
    </>
  );
}
