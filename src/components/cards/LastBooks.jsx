import React from "react";
import styled from "styled-components";
import { useFetch } from "../../utils/hooks";
import { StyledLink } from "../../utils/styles/GlobalStyle";
import { Loader } from "../../utils/styles/Loading";
import {
  CardBookLi,
  CardBookUl,
  CardContainer,
} from "../../utils/styles/StyledCard";

const LastBooksImg = styled.img`
  width: 100px;
  height: 150px;
`;

export default function LastBooks() {
  const { data, loading, error } = useFetch(
    `https://book-api-projet-fin.herokuapp.com/api/lastbooks`
  );

  const lastBooks = data;
  // console.log(lastBooks);

  if (error) {
    return <div>Une erreur est survenue</div>;
  }

  return (
    <CardContainer>
      {loading ? (
        <Loader />
      ) : (
        <CardBookUl>
          {lastBooks.map((book, index) => (
            <CardBookLi key={`${book.name}-${index}`}>
              <h3>{book.title}</h3>
              <p>{book.coverText}</p>
              <p>
                {book.author.firstName} {book.author.lastName}
              </p>
              <LastBooksImg src={book.coverImage} alt={book.title} />
              <StyledLink to={book._links.self.href}>Plus d'infos</StyledLink>
            </CardBookLi>
          ))}
        </CardBookUl>
      )}
    </CardContainer>
  );
}
