import React from "react";
import styled from "styled-components";
import Footer from "../components/layout/footer/Footer";
import LastBooks from "../container/LastBooks";
import { Container, colors } from "../utils/styles/GlobalStyle";
import { Loader } from "../utils/styles/Loading";

const HeroSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-bottom: 3rem;
  }
`;

const HeroTitle = styled.h1`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
`;

const HeroDescription = styled.p`
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 5rem;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    padding-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, ${colors.secondary}, ${colors.primary});
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection>
          <HeroTitle>Bienvenue sur la bibliothèque en ligne</HeroTitle>
          <HeroDescription>
            Découvrez une vaste collection de livres numériques à portée de main. 
            Explorez des milliers d'ouvrages, des derniers best-sellers aux classiques intemporels. 
            Votre prochaine aventure littéraire commence ici.
          </HeroDescription>
        </HeroSection>

        <Section>
          <h2>Les dernières sorties</h2>
          <LastBooks />
        </Section>

        <Section>
          <h2>Les auteurs les plus populaires</h2>
          <Loader />
        </Section>

        <Section>
          <h2>Les mieux notés</h2>
          <Loader />
        </Section>
      </Container>
      <Footer />
    </>
  );
}
