import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardBookInfo,
  CardBookLi,
  CardBookUl,
  CardContainer,
  LastBooksImg,
} from "../../utils/styles/StyledCard";

export default function Card({ data }) {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <CardBookUl>
        {data.map((book, index) => (
          <CardBookLi
            key={`${book.name}-${index}`}
            onClick={() =>
              navigate(`/book/${book._links.self.href.split("/").pop()}`)
            }
          >
            <LastBooksImg
              src="https://via.placeholder.com/400"
              // src={book.coverImage}
              alt={book.title}
            />
            <CardBookInfo>
              <p>
                {book.title} <br /> {book.author.firstName}{" "}
                {book.author.lastName}
              </p>
            </CardBookInfo>
          </CardBookLi>
        ))}
      </CardBookUl>
    </CardContainer>
  );
}