import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../utils/styles/GlobalStyle";

export default function BookInfo() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const findBook = (id) => {
    const token = localStorage.getItem("token");
    fetch(`https://book-api-projet-fin.herokuapp.com/api/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  const deleteBook = (id) => {
    const token = localStorage.getItem("token");
    fetch(`https://book-api-projet-fin.herokuapp.com/api/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    findBook(id);
  }, [id]);
  console.log(data);

  return (
    <Container>
      {data && (
        <>
          <h1>{data.title}</h1>
          <div style={styles.info}>
            <img src={data.coverImage} alt={data.title} />
            <div>
              <p>{data.author.firstName}</p>
              <p>{data.author.lastName}</p>
              <p>{data.coverText}</p>
              <p>{data.dateAt}</p>
            </div>
            <button
              onClick={() => {
                deleteBook(id);
              }}
            >
              Supprimer le livre
            </button>
          </div>
        </>
      )}
    </Container>
  );
}

const styles = {
  info: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
};
