import React from "react";
import styled from "styled-components";
import Footer from "../components/layout/footer/Footer";
import { Container, colors } from "../utils/styles/GlobalStyle";

const AboutSection = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const AboutTitle = styled.h1`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
`;

const AboutSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${colors.textSecondary};
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ContentCard = styled.div`
  background: ${colors.backgroundCard};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 32px ${colors.shadowMedium};
  border: 1px solid ${colors.borderLight};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${colors.borderLight};
  box-shadow: 0 4px 12px ${colors.shadowLight};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${colors.shadowMedium};
    border-color: ${colors.secondary};
  }

  h3 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: ${colors.textSecondary};
    line-height: 1.8;
  }
`;

const ContentText = styled.div`
  p {
    margin-bottom: 1.5rem;
    text-align: justify;
    line-height: 1.9;
  }
`;

export default function About() {
  return (
    <>
      <Container>
        <AboutSection>
          <AboutHeader>
            <AboutTitle>À Propos de Notre Bibliothèque</AboutTitle>
            <AboutSubtitle>
              Découvrez l'histoire et les valeurs qui font de notre bibliothèque 
              un espace unique pour tous les passionnés de lecture.
            </AboutSubtitle>
          </AboutHeader>

          <ContentCard>
            <ContentText>
              <h2>Notre Mission</h2>
              <p>
                Notre bibliothèque en ligne a pour mission de rendre la lecture 
                accessible à tous, peu importe où vous vous trouvez. Nous croyons 
                fermement que les livres ont le pouvoir de transformer les vies, 
                d'ouvrir des esprits et de créer des connexions entre les personnes.
              </p>
              <p>
                Depuis notre création, nous avons travaillé sans relâche pour 
                constituer une collection diversifiée et de qualité, comprenant 
                des œuvres classiques et contemporaines, des genres variés et 
                des auteurs du monde entier.
              </p>
            </ContentText>
          </ContentCard>

          <FeatureGrid>
            <FeatureCard>
              <h3>📚 Collection Variée</h3>
              <p>
                Plus de milliers de livres disponibles dans toutes les catégories : 
                romans, mangas, BD, comics et bien plus encore.
              </p>
            </FeatureCard>

            <FeatureCard>
              <h3>🌍 Accessible Partout</h3>
              <p>
                Accédez à notre bibliothèque depuis n'importe quel appareil, 
                n'importe où dans le monde, à tout moment.
              </p>
            </FeatureCard>

            <FeatureCard>
              <h3>✨ Expérience Moderne</h3>
              <p>
                Une interface intuitive et élégante conçue pour offrir une 
                expérience de lecture agréable et fluide.
              </p>
            </FeatureCard>
          </FeatureGrid>

          <ContentCard>
            <ContentText>
              <h2>Notre Vision</h2>
              <p>
                Nous envisageons un futur où chaque personne a un accès facile 
                et immédiat à la connaissance et à l'imagination que les livres 
                peuvent offrir. Notre plateforme continue d'évoluer pour mieux 
                répondre aux besoins de nos utilisateurs et pour promouvoir 
                l'amour de la lecture.
              </p>
              <p>
                Rejoignez notre communauté de lecteurs passionnés et embarquez 
                pour d'innombrables aventures littéraires. Votre prochain livre 
                préféré vous attend !
              </p>
            </ContentText>
          </ContentCard>
        </AboutSection>
      </Container>
      <Footer />
    </>
  );
}
