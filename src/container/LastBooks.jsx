import React from "react";
import Card from "../components/cards/Card";
import { lastBooks } from "../data";

export default function LastBooks() {
  const lastBook = lastBooks;

  return (
    <>
      <Card lastBook={lastBook} />
    </>
  );
}
