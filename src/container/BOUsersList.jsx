import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { colors } from "../utils/styles/GlobalStyle";
import Pagination from "../components/Pagination";

const UsersTable = styled.div`
  width: 100%;
  background: ${colors.backgroundCard};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px ${colors.shadowLight};
  border: 1px solid ${colors.borderLight};
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1.5fr;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, ${colors.secondary} 0%, #B8941F 100%);
  color: ${colors.textLight};
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
`;

const UserRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1.5fr;
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

const UserCell = styled.div`
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

const UserName = styled(UserCell)`
  font-weight: 600;
  color: ${colors.textPrimary};
  font-family: 'Playfair Display', serif;
`;

const UserEmail = styled(UserCell)`
  color: ${colors.textSecondary};
  word-break: break-word;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 968px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
  border: none;
  font-family: 'Inter', sans-serif;

  @media (max-width: 968px) {
    width: 100%;
    padding: 0.75rem;
  }
`;

const EditButton = styled(ActionButton)`
  background: ${colors.tertiary};
  color: ${colors.textLight};

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

// Données de démonstration (à remplacer par une vraie API)
const DEMO_USERS = [
  {
    id: 1,
    lastName: "Doe",
    firstName: "John",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    lastName: "Smith",
    firstName: "Jane",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    lastName: "Dupont",
    firstName: "Pierre",
    email: "pierre.dupont@example.com",
  },
  {
    id: 4,
    lastName: "Martin",
    firstName: "Sophie",
    email: "sophie.martin@example.com",
  },
  {
    id: 5,
    lastName: "Bernard",
    firstName: "Luc",
    email: "luc.bernard@example.com",
  },
  {
    id: 6,
    lastName: "Petit",
    firstName: "Marie",
    email: "marie.petit@example.com",
  },
  {
    id: 7,
    lastName: "Robert",
    firstName: "Jean",
    email: "jean.robert@example.com",
  },
  {
    id: 8,
    lastName: "Richard",
    firstName: "Catherine",
    email: "catherine.richard@example.com",
  },
  {
    id: 9,
    lastName: "Durand",
    firstName: "Thomas",
    email: "thomas.durand@example.com",
  },
  {
    id: 10,
    lastName: "Dubois",
    firstName: "Isabelle",
    email: "isabelle.dubois@example.com",
  },
  {
    id: 11,
    lastName: "Moreau",
    firstName: "David",
    email: "david.moreau@example.com",
  },
  {
    id: 12,
    lastName: "Laurent",
    firstName: "Nathalie",
    email: "nathalie.laurent@example.com",
  },
  {
    id: 13,
    lastName: "Simon",
    firstName: "Michel",
    email: "michel.simon@example.com",
  },
  {
    id: 14,
    lastName: "Michel",
    firstName: "Claire",
    email: "claire.michel@example.com",
  },
  {
    id: 15,
    lastName: "Lefebvre",
    firstName: "Philippe",
    email: "philippe.lefebvre@example.com",
  },
  {
    id: 16,
    lastName: "Leroy",
    firstName: "Anne",
    email: "anne.leroy@example.com",
  },
  {
    id: 17,
    lastName: "Roux",
    firstName: "François",
    email: "francois.roux@example.com",
  },
  {
    id: 18,
    lastName: "David",
    firstName: "Patricia",
    email: "patricia.david@example.com",
  },
  {
    id: 19,
    lastName: "Bertrand",
    firstName: "Daniel",
    email: "daniel.bertrand@example.com",
  },
  {
    id: 20,
    lastName: "Morel",
    firstName: "Christine",
    email: "christine.morel@example.com",
  },
  {
    id: 21,
    lastName: "Fournier",
    firstName: "Stéphane",
    email: "stephane.fournier@example.com",
  },
  {
    id: 22,
    lastName: "Girard",
    firstName: "Valérie",
    email: "valerie.girard@example.com",
  },
];

export default function BOUsersList({ data, error }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Mémoriser les utilisateurs pour éviter les recréations inutiles
  const users = useMemo(() => {
    return data || DEMO_USERS;
  }, [data]);

  // Pagination des données
  const paginatedUsers = useMemo(() => {
    if (!users || !Array.isArray(users)) return [];
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return users.slice(startIndex, endIndex);
  }, [users, currentPage]);

  const totalPages = useMemo(() => {
    if (!users || !Array.isArray(users)) return 0;
    return Math.ceil(users.length / ITEMS_PER_PAGE);
  }, [users]);

  // Réinitialiser à la page 1 si les données changent
  React.useEffect(() => {
    if (users && users.length > 0) {
      const maxPage = Math.ceil(users.length / ITEMS_PER_PAGE);
      if (currentPage > maxPage) {
        setCurrentPage(1);
      }
    }
  }, [users, currentPage]);

  if (error) {
    return (
      <EmptyState>
        <h3>⚠️ Erreur</h3>
        <p>Une erreur s'est produite lors du chargement des utilisateurs.</p>
      </EmptyState>
    );
  }

  if (!users || users.length === 0) {
    return (
      <EmptyState>
        <h3>👥 Aucun utilisateur</h3>
        <p>Aucun utilisateur n'est actuellement enregistré dans le système.</p>
      </EmptyState>
    );
  }

  return (
    <TableWrapper>
      <UsersTable>
        <TableHeader>
          <div>Nom</div>
          <div>Prénom</div>
          <div>Email</div>
          <div>Actions</div>
        </TableHeader>
        {paginatedUsers.map((user, index) => {
          const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
          return (
            <UserRow key={`${user.id || user.email}-${globalIndex}`}>
              <UserName>
                <strong>Nom :</strong>
                {user.lastName || "N/A"}
              </UserName>
              <UserCell>
                <strong>Prénom :</strong>
                {user.firstName || "N/A"}
              </UserCell>
              <UserEmail>
                <strong>Email :</strong>
                {user.email || "N/A"}
              </UserEmail>
              <ActionButtons>
                <EditButton onClick={() => alert("Fonctionnalité de modification à implémenter")}>
                  ✏️ Modifier
                </EditButton>
                <DeleteButton onClick={() => {
                  if (window.confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${user.firstName} ${user.lastName} ?`)) {
                    alert("Fonctionnalité de suppression à implémenter");
                  }
                }}>
                  🗑️ Supprimer
                </DeleteButton>
              </ActionButtons>
            </UserRow>
          );
        })}
      </UsersTable>
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={users.length}
          itemsName="utilisateurs"
        />
      )}
    </TableWrapper>
  );
}
