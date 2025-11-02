import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Card from "../components/cards/Card";
import Pagination from "../components/Pagination";
import { getAllBooks } from "../services/apis/books/apiBookServices";
import { useFetchwithToken } from "../utils/hooks";
import { colors } from "../utils/styles/GlobalStyle";
import { Loader } from "../utils/styles/Loading";

const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: ${colors.backgroundCard};
  border-radius: 16px;
  border: 1px solid ${colors.borderLight};
  box-shadow: 0 4px 12px ${colors.shadowLight};

  h2 {
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textSecondary};
    font-size: 1.125rem;
  }
`;

const BooksContainer = styled.div`
  width: 100%;
`;

const ITEMS_PER_PAGE = 12;

export default function Books({ searchQuery = "" }) {
  const { data, isLoading, error } = useFetchwithToken(getAllBooks());
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrer les données selon la recherche
  const filteredData = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    if (!searchQuery.trim()) return data;
    
    const query = searchQuery.toLowerCase().trim();
    return data.filter((book) => {
      const title = book.title?.toLowerCase() || "";
      const authorLastName = book.author?.lastName?.toLowerCase() || "";
      const authorFirstName = book.author?.firstName?.toLowerCase() || "";
      
      return (
        title.includes(query) ||
        authorLastName.includes(query) ||
        authorFirstName.includes(query)
      );
    });
  }, [data, searchQuery]);

  // Pagination des données filtrées
  const paginatedData = useMemo(() => {
    if (!filteredData || !Array.isArray(filteredData)) return [];
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage]);

  const totalPages = useMemo(() => {
    if (!filteredData || !Array.isArray(filteredData)) return 0;
    return Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  }, [filteredData]);

  // Réinitialiser à la page 1 si les données changent
  React.useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      const maxPage = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
      if (currentPage > maxPage) {
        setCurrentPage(1);
      }
    }
  }, [filteredData, currentPage, searchQuery]);

  if (error) {
    return (
      <ErrorMessage>
        <h2>⚠️ Erreur de connexion</h2>
        <p>
          Une erreur s'est produite lors du chargement des livres. 
          Veuillez vérifier votre connexion internet ou réessayer plus tard.
        </p>
      </ErrorMessage>
    );
  }

  return (
    <BooksContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {paginatedData.length > 0 ? (
            <>
              <Card data={paginatedData} />
              {filteredData && filteredData.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  itemsPerPage={ITEMS_PER_PAGE}
                  totalItems={filteredData.length}
                  itemsName="livres"
                />
              )}
            </>
          ) : (
            <ErrorMessage>
              <h2>🔍 Aucun résultat</h2>
              <p>
                Aucun livre ne correspond à votre recherche "{searchQuery}".
                Veuillez essayer avec d'autres mots-clés.
              </p>
            </ErrorMessage>
          )}
        </>
      )}
    </BooksContainer>
  );
}
