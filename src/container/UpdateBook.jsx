import React from "react";
import { useFetchwithToken } from "../utils/hooks";

export default function UpdateBook() {
  const token = sessionStorage.getItem("token");

  const { data, isLoading, error } = useFetchwithToken(
    "https://book-api-projet-fin.herokuapp.com/api/books/`id`",
    token
  );
  return <div>C'est mort pour moi</div>;
}
