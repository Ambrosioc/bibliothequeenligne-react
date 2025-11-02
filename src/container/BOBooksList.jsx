import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../utils/styles/GlobalStyle";
import Pagination from "../components/Pagination";

const BooksTable = styled.div`
  width: 100%;
  background: ${colors.backgroundCard};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px ${colors.shadowLight};
  border: 1px solid ${colors.borderLight};
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, ${colors.primary} 0%, #6B3410 100%);
  color: ${colors.textLight};
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
`;

const BookRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${colors.borderLight};
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.backgroundLight};
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1rem;
  }
`;

const BookCell = styled.div`
  color: ${colors.textPrimary};
  font-size: 1rem;
  line-height: 1.5;

  strong {
    color: ${colors.primary};
    font-weight: 600;
    display: block;
    margin-bottom: 0.25rem;

    @media (min-width: 969px) {
      display: none;
    }
  }

  @media (max-width: 968px) {
    font-size: 0.95rem;
  }
`;

const BookTitle = styled(BookCell)`
  font-weight: 600;
  color: ${colors.textPrimary};
  font-family: 'Playfair Display', serif;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 968px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ActionButton = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 968px) {
    width: 100%;
    padding: 0.75rem;
  }
`;

const EditButton = styled(ActionButton)`
  background: ${colors.tertiary};
  color: ${colors.textLight};
  border: none;

  &:hover {
    background: #3A6B40;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${colors.shadowMedium};
  }
`;

const DeleteButton = styled(ActionButton)`
  background: transparent;
  color: #dc2626;
  border: 2px solid #dc2626;

  &:hover {
    background: #dc2626;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${colors.textSecondary};

  p {
    font-size: 1.125rem;
    margin-top: 1rem;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
`;

const ITEMS_PER_PAGE = 10;

export default function BOBooksList({ data }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination des données
  const paginatedData = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage]);

  const totalPages = useMemo(() => {
    if (!data || !Array.isArray(data)) return 0;
    return Math.ceil(data.length / ITEMS_PER_PAGE);
  }, [data]);

  // Réinitialiser à la page 1 si les données changent
  React.useEffect(() => {
    if (data && data.length > 0) {
      const maxPage = Math.ceil(data.length / ITEMS_PER_PAGE);
      if (currentPage > maxPage) {
        setCurrentPage(1);
      }
    }
  }, [data, currentPage]);

  if (!data || data.length === 0) {
    return (
      <EmptyState>
        <h3>📚 Aucun livre disponible</h3>
        <p>Aucun livre n'est actuellement enregistré dans la bibliothèque.</p>
      </EmptyState>
    );
  }

  return (
    <TableWrapper>
      <BooksTable>
        <TableHeader>
          <div>Titre</div>
          <div>Nom</div>
          <div>Prénom</div>
          <div>Actions</div>
          <div></div>
        </TableHeader>
        {paginatedData.map((book, index) => {
          const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
          return (
            <BookRow key={`${book.name || book.id}-${globalIndex}`}>
              <BookTitle>
                <strong>Titre :</strong>
                {book.title || "Sans titre"}
              </BookTitle>
              <BookCell>
                <strong>Nom :</strong>
                {book.author?.lastName || "N/A"}
              </BookCell>
              <BookCell>
                <strong>Prénom :</strong>
                {book.author?.firstName || "N/A"}
              </BookCell>
              <ActionButtons>
                <EditButton to={"/"}>✏️ Modifier</EditButton>
                <DeleteButton as="button" onClick={() => alert("Fonctionnalité à implémenter")}>
                  🗑️ Supprimer
                </DeleteButton>
              </ActionButtons>
              <div></div>
            </BookRow>
          );
        })}
      </BooksTable>
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={data.length}
          itemsName="livres"
        />
      )}
    </TableWrapper>
  );
}
