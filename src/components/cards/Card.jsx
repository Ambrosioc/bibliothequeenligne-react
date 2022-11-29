import React from "react";
import { StyledLink } from "../../utils/styles/GlobalStyle";
import { Loader } from "../../utils/styles/Loading";
import {
  CardBookInfo,
  CardBookLi,
  CardBookUl,
  CardContainer,
  LastBooksImg,
} from "../../utils/styles/StyledCard";

export default function Card(props) {
  const { data, isLoading, error } = props;

  // const data = lastBooks;

  if (error) {
    return (
      <CardContainer>
        <h1>Une erreur est survenue</h1>
      </CardContainer>
    );
  }

  return (
    <CardContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <CardBookUl>
          {data.map((book, index) => (
            <CardBookLi key={`${book.name}-${index}`}>
              <LastBooksImg
                src="https://via.placeholder.com/400"
                alt={book.title}
              />
              <CardBookInfo>
                <h3>{book.title}</h3>
                <p>{book.coverText}</p>
                <p>
                  {book.author.firstName} {book.author.lastName}
                </p>
              </CardBookInfo>
              <div>
                <StyledLink to={book._links.self.href}>Plus d'infos</StyledLink>
              </div>
            </CardBookLi>
          ))}
        </CardBookUl>
      )}
    </CardContainer>
  );
}
