import React from "react";
import styled from "styled-components";
import { useFetch } from "../../utils/hooks";
import { Loader } from "../../utils/styles/Loading";

const LastBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LastBooksUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
  flex-wrap: wrap;
`;

const LastBooksLi = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const LastBooksImg = styled.img`
  width: 100px;
  height: 150px;
`;

export default function LastBooks() {
  const { data, loading, error } = useFetch(
    `https://book-api-projet-fin.herokuapp.com/api/lastbooks`
  );

  const lastBooks = data;
  //   console.log(lastBooks);

  if (error) {
    return <div>Une erreur est survenue</div>;
  }

  return (
    <LastBooksContainer>
      {loading ? (
        <Loader />
      ) : (
        <LastBooksUl>
          {lastBooks.map((book, index) => (
            <LastBooksLi key={`${book.name}-${index}`}>
              <h3>{book.title}</h3>
              <p>{book.coverText}</p>
              <p>
                {book.author.firstName} {book.author.lastName}
              </p>
              <LastBooksImg src={book.coverImage} alt={book.title} />
            </LastBooksLi>
          ))}
        </LastBooksUl>
      )}
    </LastBooksContainer>
  );
}
