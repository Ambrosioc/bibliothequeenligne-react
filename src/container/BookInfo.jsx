import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById } from "../services/apis/books/apiBookServices";
import { Container } from "../utils/styles/GlobalStyle";

export default function BookInfo() {
  const [data, setData] = useState();
  const token = sessionStorage.getItem("token");
  const { id } = useParams();
  const findBook = (id) => {
    const token = sessionStorage.getItem("token");
    fetch(getBookById(id), {
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
    const token = sessionStorage.getItem("token");
    fetch(getBookById(id), {
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
  const navigate = useNavigate();

  useEffect(() => {
    findBook(id)
  }, [id]);
  console.log(data);


  if (!token) {
    return <h1>Vous n'êtes pas connecté</h1>;
  }

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
            <button onClick={() => {
              deleteBook(id);
              navigate("/bookslist")
              alert("suprimer")
            }}
            >
              Supprimer le livre
            </button>
          </div>
        </>
      )
      }
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
