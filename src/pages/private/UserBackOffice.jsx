import React from "react";
import styled from "styled-components";
import { Container, colors } from "../../utils/styles/GlobalStyle";
import Footer from "../../components/layout/footer/Footer";

const UserDashboard = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const UserHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textSecondary};
    font-size: 1.125rem;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const UserCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const UserCard = styled.div`
  background: ${colors.backgroundCard};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px ${colors.shadowMedium};
  border: 1px solid ${colors.borderLight};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${colors.shadowStrong};
    border-color: ${colors.secondary};
  }

  h3 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p {
    color: ${colors.textSecondary};
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;

    li {
      color: ${colors.textSecondary};
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;

      &::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: ${colors.tertiary};
        font-weight: bold;
      }
    }
  }
`;

export default function UserBackOffice() {
  return (
    <>
      <Container>
        <UserDashboard>
          <UserHeader>
            <h1>👤 Mon Compte</h1>
            <p>
              Bienvenue dans votre espace personnel. Gérez vos informations 
              et consultez vos activités.
            </p>
          </UserHeader>

          <UserCards>
            <UserCard>
              <h3>📚 Mes Livres</h3>
              <p>
                Consultez votre historique de lecture et vos livres favoris.
              </p>
              <ul>
                <li>Livres consultés</li>
                <li>Favoris</li>
                <li>Historique</li>
              </ul>
            </UserCard>

            <UserCard>
              <h3>⚙️ Paramètres</h3>
              <p>
                Gérez vos préférences et vos informations personnelles.
              </p>
              <ul>
                <li>Profil</li>
                <li>Notifications</li>
                <li>Confidentialité</li>
              </ul>
            </UserCard>

            <UserCard>
              <h3>📊 Statistiques</h3>
              <p>
                Consultez vos statistiques de lecture et vos préférences.
              </p>
              <ul>
                <li>Livres lus</li>
                <li>Genres préférés</li>
                <li>Activité récente</li>
              </ul>
            </UserCard>
          </UserCards>
        </UserDashboard>
      </Container>
      <Footer />
    </>
  );
}
