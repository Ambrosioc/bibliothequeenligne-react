import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, deleteBook as deleteBookAPI } from "../services/apis/books/apiBookServices";
import { Container, Button, colors } from "../utils/styles/GlobalStyle";
import { Loader } from "../utils/styles/Loading";
import Footer from "../components/layout/footer/Footer";

const BookDetailContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const BookHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const BookContent = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BookCover = styled.div`
  position: sticky;
  top: 100px;
  align-self: start;

  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 12px 40px ${colors.shadowMedium};
    object-fit: cover;
    background: linear-gradient(135deg, ${colors.backgroundCard}, ${colors.borderLight});
  }

  @media (max-width: 968px) {
    position: relative;
    top: 0;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const BookDetails = styled.div`
  background: ${colors.backgroundCard};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px ${colors.shadowMedium};
  border: 1px solid ${colors.borderLight};

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const BookMeta = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${colors.borderLight};

  h2 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  p {
    margin: 0.75rem 0;
    font-size: 1.125rem;
    line-height: 1.8;

    strong {
      color: ${colors.textPrimary};
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }
`;

const BookDescription = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: ${colors.textSecondary};
    line-height: 1.9;
    text-align: justify;
    font-size: 1.125rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid ${colors.borderLight};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const DeleteButton = styled(Button)`
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  
  &:hover {
    background: linear-gradient(135deg, #b91c1c 0%, #991b1b 100%);
  }
`;

const BackButton = styled(Button)`
  background: transparent;
  border: 2px solid ${colors.tertiary};
  color: ${colors.tertiary};
  
  &:hover {
    background: ${colors.tertiary};
    color: ${colors.textLight};
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: ${colors.backgroundCard};
  border-radius: 16px;
  border: 1px solid ${colors.borderLight};

  h1 {
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textSecondary};
    font-size: 1.125rem;
  }
`;

export default function BookInfo() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();

  const findBook = (id) => {
    const token = sessionStorage.getItem("token");
    setIsLoading(true);
    fetch(getBookById(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            setData(null);
            setIsLoading(false);
            return;
          }
          throw new Error("Erreur lors du chargement du livre");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setData(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
        setIsLoading(false);
        setData(null);
      });
  };

  const handleDeleteBook = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce livre ? Cette action est irréversible.")) {
      deleteBookAPI(id)
        .then(() => {
          navigate("/bookslist");
        })
        .catch((error) => {
          console.error("Error deleting book:", error);
          alert(error.message || "Une erreur s'est produite lors de la suppression.");
        });
    }
  };

  useEffect(() => {
    findBook(id);
  }, [id]);

  if (!token) {
    return (
      <>
        <Container>
          <ErrorMessage>
            <h1>🔒 Accès Restreint</h1>
            <p>Vous devez être connecté pour voir les détails de ce livre.</p>
          </ErrorMessage>
        </Container>
        <Footer />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Container>
          <Loader />
        </Container>
        <Footer />
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Container>
          <ErrorMessage>
            <h1>📚 Livre non trouvé</h1>
            <p>Le livre que vous recherchez n'existe pas ou a été supprimé.</p>
          </ErrorMessage>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Container>
        <BookDetailContainer>
          <BookHeader>
            <h1>{data.title}</h1>
          </BookHeader>

          <BookContent>
            <BookCover>
              <img 
                src={data.coverImage || (() => {
                  // Créer un SVG placeholder sans emojis (compatible avec btoa)
                  const svgString = `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="600" fill="#f5f0e8"/>
                    <circle cx="200" cy="250" r="60" fill="#d4af37" opacity="0.3"/>
                    <rect x="170" y="260" width="60" height="100" rx="6" fill="#8b4513" opacity="0.6"/>
                    <rect x="180" y="270" width="40" height="85" rx="3" fill="#2c5530" opacity="0.4"/>
                    <text x="50%" y="380" text-anchor="middle" font-size="24" fill="#8b4513" font-family="Arial, sans-serif">Couverture</text>
                    <text x="50%" y="410" text-anchor="middle" font-size="16" fill="#6b5b4a" font-family="Arial, sans-serif">non disponible</text>
                  </svg>`;
                  return `data:image/svg+xml;base64,${btoa(svgString)}`;
                })()}
                alt={data.title}
                onError={(e) => {
                  // Si l'image réelle échoue, utiliser le SVG placeholder
                  const svgString = `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="600" fill="#f5f0e8"/>
                    <circle cx="200" cy="250" r="60" fill="#d4af37" opacity="0.3"/>
                    <rect x="170" y="260" width="60" height="100" rx="6" fill="#8b4513" opacity="0.6"/>
                    <rect x="180" y="270" width="40" height="85" rx="3" fill="#2c5530" opacity="0.4"/>
                    <text x="50%" y="380" text-anchor="middle" font-size="24" fill="#8b4513" font-family="Arial, sans-serif">Couverture</text>
                    <text x="50%" y="410" text-anchor="middle" font-size="16" fill="#6b5b4a" font-family="Arial, sans-serif">non disponible</text>
                  </svg>`;
                  e.target.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
                  e.target.onerror = null;
                }}
              />
            </BookCover>

            <BookDetails>
              <BookMeta>
                <h2>Informations du livre</h2>
                <p>
                  <strong>Auteur :</strong>
                  {data.author?.firstName} {data.author?.lastName}
                </p>
                {data.dateAt && (
                  <p>
                    <strong>Date de publication :</strong>
                    {new Date(data.dateAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                )}
              </BookMeta>

              {data.coverText && (
                <BookDescription>
                  <h3>Description</h3>
                  <p>{data.coverText}</p>
                </BookDescription>
              )}

              <ActionButtons>
                <BackButton onClick={() => navigate("/bookslist")}>
                  ← Retour à la liste
                </BackButton>
                <DeleteButton onClick={() => handleDeleteBook(id)}>
                  🗑️ Supprimer le livre
                </DeleteButton>
              </ActionButtons>
            </BookDetails>
          </BookContent>
        </BookDetailContainer>
      </Container>
      <Footer />
    </>
  );
}
