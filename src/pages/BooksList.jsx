import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/layout/footer/Footer";
import Books from "../container/Books";
import { Container, StyledLink, Button, colors } from "../utils/styles/GlobalStyle";

const ErrorContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    margin-bottom: 1.5rem;
    color: ${colors.textPrimary};
  }

  p {
    margin-bottom: 2rem;
    color: ${colors.textSecondary};
    font-size: 1.125rem;
  }
`;

const PageHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    margin-bottom: 1rem;
  }
  
  p {
    color: ${colors.textSecondary};
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 1rem;
  width: 20px;
  height: 20px;
  color: ${colors.textSecondary};
  pointer-events: none;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  outline: none;
  padding: 0 1rem 0 3rem;
  border: 1.5px solid ${colors.borderLight};
  background: ${colors.backgroundCard};
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px ${colors.shadowLight};
  color: ${colors.textPrimary};

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 4px 12px ${colors.shadowMedium};
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;

const BooksList = () => {
  const token = sessionStorage.getItem("token");
  const [searchQuery, setSearchQuery] = useState("");

  if (!token) {
    return (
      <>
        <Container>
          <ErrorContainer>
            <h1>🔒 Accès Restreint</h1>
            <p>
              Vous devez être connecté pour accéder à notre collection de livres. 
              Connectez-vous pour découvrir tous nos ouvrages disponibles.
            </p>
            <Button as={StyledLink} to="/sign-in">
              Se connecter
            </Button>
          </ErrorContainer>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Container>
        <PageHeader>
          <h1>Notre Collection</h1>
          <p>Découvrez tous les livres disponibles dans notre bibliothèque</p>
          <SearchContainer>
            <SearchIcon
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Rechercher des livres, auteurs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
        </PageHeader>
        <Books searchQuery={searchQuery} />
      </Container>
      <Footer />
    </>
  );
};

export default BooksList;
