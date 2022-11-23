import React from "react";
import { StyledLink } from "../../utils/styles/GlobalStyle";
import {
  CardBookInfo,
  CardBookLi,
  CardBookUl,
  CardContainer,
  LastBooksImg,
} from "../../utils/styles/StyledCard";

export default function Card(props) {
  const { lastBook } = props;
  return (
    <CardContainer>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <CardBookUl>
        {lastBook.map((book, index) => (
          <CardBookLi key={`${book.name}-${index}`}>
            <LastBooksImg src={book.coverImage} alt={book.title} />
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
      {/* )} */}
    </CardContainer>
  );
}
