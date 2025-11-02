import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, colors } from "../utils/styles/GlobalStyle";
import { Form, Label, Input } from "../utils/styles/auth";
import { getBookById, updateBook as updateBookAPI } from "../services/apis/books/apiBookServices";
import { Loader } from "../utils/styles/Loading";
import Footer from "../components/layout/footer/Footer";

const UpdateBookContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textSecondary};
    font-size: 1.125rem;
  }
`;

const BookForm = styled(Form)`
  width: 100%;
  max-width: 100%;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  border: 2px solid ${colors.borderLight};
  border-radius: 12px;
  background: ${colors.backgroundLight};
  padding: 1.25rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: ${colors.textPrimary};
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${colors.tertiary};
    box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.1);
    background: white;
  }

  &:hover {
    border-color: ${colors.primary};
  }

  &::placeholder {
    color: ${colors.textSecondary};
    opacity: 0.6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const CancelButton = styled(Button)`
  background: transparent;
  border: 2px solid ${colors.borderLight};
  color: ${colors.textPrimary};
  
  &:hover {
    background: ${colors.backgroundCard};
    border-color: ${colors.primary};
  }
`;

export default function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    idAuthor: "",
    coverText: "",
    dateAt: "",
    coverImage: ""
  });

  useEffect(() => {
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
          throw new Error("Livre non trouvé");
        }
        return response.json();
      })
      .then((data) => {
        // Format date pour l'input date
        const dateAt = data.dateAt 
          ? new Date(data.dateAt).toISOString().split('T')[0] 
          : "";
          
        setFormData({
          title: data.title || "",
          idAuthor: data.author?.id?.toString() || "",
          coverText: data.coverText || "",
          dateAt: dateAt,
          coverImage: data.coverImage || ""
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
        setError(error.message || "Erreur lors du chargement du livre");
        setIsLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.title || !formData.idAuthor) {
      setError("Le titre et l'ID de l'auteur sont requis.");
      setIsSubmitting(false);
      return;
    }

    const bookData = {
      title: formData.title,
      coverText: formData.coverText,
      coverImage: formData.coverImage,
      dateAt: formData.dateAt || new Date().toISOString().split('T')[0],
      idAuthor: parseInt(formData.idAuthor),
    };

    updateBookAPI(id, bookData)
      .then(() => {
        alert("Livre modifié avec succès !");
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        setError(error.message || "Une erreur s'est produite lors de la mise à jour du livre.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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

  if (error && !formData.title) {
    return (
      <>
        <Container>
          <div style={{
            padding: "3rem 2rem",
            textAlign: "center",
            background: colors.backgroundCard,
            borderRadius: "16px",
            border: `1px solid ${colors.borderLight}`
          }}>
            <h2 style={{ color: colors.primary, marginBottom: "1rem" }}>⚠️ Erreur</h2>
            <p style={{ color: colors.textSecondary }}>{error}</p>
            <Button onClick={() => navigate("/admin")} style={{ marginTop: "2rem" }}>
              Retour à l'administration
            </Button>
          </div>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Container>
        <UpdateBookContainer>
          <PageHeader>
            <h1>✏️ Modifier le livre</h1>
            <p>Modifiez les informations du livre ci-dessous</p>
          </PageHeader>

          <BookForm onSubmit={handleSubmit}>
            <Label htmlFor="title">Titre du livre *</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: Le Petit Prince"
              required
            />

            <Label htmlFor="idAuthor">ID de l'auteur *</Label>
            <Input
              type="number"
              id="idAuthor"
              name="idAuthor"
              value={formData.idAuthor}
              onChange={handleChange}
              placeholder="Ex: 1"
              required
              min="1"
            />
            <p style={{ fontSize: "0.9rem", color: colors.textSecondary, marginTop: "-1rem", marginBottom: "1.5rem" }}>
              Entrez l'ID numérique de l'auteur existant
            </p>

            <Label htmlFor="coverText">Description</Label>
            <TextArea
              id="coverText"
              name="coverText"
              value={formData.coverText}
              onChange={handleChange}
              placeholder="Décrivez le livre..."
            />

            <FormRow>
              <div>
                <Label htmlFor="dateAt">Date de publication</Label>
                <Input
                  type="date"
                  id="dateAt"
                  name="dateAt"
                  value={formData.dateAt}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="coverImage">URL de l'image de couverture</Label>
                <Input
                  type="url"
                  id="coverImage"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>
            </FormRow>

            {error && (
              <div style={{
                padding: "1rem",
                background: "#fee2e2",
                border: "1px solid #dc2626",
                borderRadius: "8px",
                color: "#dc2626",
                marginBottom: "1rem"
              }}>
                {error}
              </div>
            )}

            <ButtonGroup>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "⏳ Enregistrement..." : "💾 Enregistrer les modifications"}
              </Button>
              <CancelButton type="button" onClick={() => navigate("/admin")} disabled={isSubmitting}>
                Annuler
              </CancelButton>
            </ButtonGroup>
          </BookForm>
        </UpdateBookContainer>
      </Container>
      <Footer />
    </>
  );
}
