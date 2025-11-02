import React from "react";
import styled from "styled-components";
import { colors } from "../utils/styles/GlobalStyle";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  padding: 2rem 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

const PaginationButton = styled.button`
  min-width: 44px;
  height: 44px;
  padding: 0.75rem 1rem;
  border: 2px solid ${colors.borderLight};
  border-radius: 10px;
  background: ${props => props.active ? colors.tertiary : colors.backgroundCard};
  color: ${props => props.active ? colors.textLight : colors.textPrimary};
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: ${props => props.active ? 600 : 500};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${props => props.active ? '#3A6B40' : colors.backgroundLight};
    border-color: ${props => props.active ? colors.tertiary : colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${colors.shadowMedium};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    min-width: 40px;
    height: 40px;
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
  }
`;

const PaginationInfo = styled.span`
  color: ${colors.textSecondary};
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin: 0 1rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 1rem 0;
    font-size: 0.9rem;
  }
`;

const Ellipsis = styled.span`
  color: ${colors.textSecondary};
  font-size: 1.25rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
`;

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  itemsPerPage = 12,
  totalItems,
  itemsName = "éléments"
}) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      // Afficher toutes les pages si peu de pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logique pour afficher les pages avec ellipses
      if (currentPage <= 3) {
        // Début de la liste
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Fin de la liste
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Milieu de la liste
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Page précédente"
      >
        ‹
      </PaginationButton>

      {getPageNumbers().map((page, index) => {
        if (page === 'ellipsis') {
          return <Ellipsis key={`ellipsis-${index}`}>…</Ellipsis>;
        }
        
        return (
          <PaginationButton
            key={page}
            onClick={() => onPageChange(page)}
            active={page === currentPage}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </PaginationButton>
        );
      })}

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Page suivante"
      >
        ›
      </PaginationButton>

      <PaginationInfo>
        {startItem} - {endItem} sur {totalItems} {itemsName}
      </PaginationInfo>
    </PaginationContainer>
  );
}

