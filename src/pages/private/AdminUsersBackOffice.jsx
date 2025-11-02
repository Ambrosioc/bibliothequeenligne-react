import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BOUsersList from "../../container/BOUsersList";
import { Container, Button, colors } from "../../utils/styles/GlobalStyle";
import { Loader } from "../../utils/styles/Loading";
import Footer from "../../components/layout/footer/Footer";

const AdminHeader = styled.div`
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

const AdminNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const AdminLink = styled(Link)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, ${colors.secondary} 0%, #B8941F 100%);
  color: ${colors.textLight};
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px ${colors.shadowMedium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${colors.shadowStrong};
    background: linear-gradient(135deg, #B8941F 0%, ${colors.secondary} 100%);
  }

  &.active {
    background: linear-gradient(135deg, ${colors.primary} 0%, #6B3410 100%);
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid ${colors.borderLight};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
  }

  h2 {
    margin: 0;
    color: ${colors.primary};
    font-size: 2rem;
  }
`;

const AddButton = styled(Button)`
  background: linear-gradient(135deg, ${colors.tertiary} 0%, #3A6B40 100%);
  
  &:hover {
    background: linear-gradient(135deg, #3A6B40 0%, ${colors.tertiary} 100%);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

export default function AdminUsersBackOffice() {
  // TODO: Remplacer par un vrai appel API quand l'endpoint sera disponible
  const isLoading = false;
  const error = null;
  const data = null; // Les données viendront de l'API

  return (
    <>
      <Container>
        <AdminHeader>
          <h1>👥 Gestion des Utilisateurs</h1>
          <p>
            Gérez tous les utilisateurs de votre bibliothèque en ligne. 
            Consultez, modifiez ou supprimez les comptes utilisateurs.
          </p>
        </AdminHeader>

        <AdminNav>
          <AdminLink to={"/admin"}>
            📚 Gestion des livres
          </AdminLink>
          <AdminLink to={"/admin/user"} className="active">
            👥 Gestion des utilisateurs
          </AdminLink>
        </AdminNav>

        <SectionContainer>
          <SectionHeader>
            <h2>📋 Liste des utilisateurs</h2>
            <AddButton as="button" onClick={() => alert("Fonctionnalité de création d'utilisateur à implémenter")}>
              ➕ Créer un utilisateur
            </AddButton>
          </SectionHeader>

          {isLoading ? (
            <LoadingContainer>
              <Loader />
              <p style={{ marginTop: "1.5rem", color: colors.textSecondary }}>
                Chargement de la liste des utilisateurs...
              </p>
            </LoadingContainer>
          ) : (
            <BOUsersList data={data} error={error} />
          )}
        </SectionContainer>
      </Container>
      <Footer />
    </>
  );
}

