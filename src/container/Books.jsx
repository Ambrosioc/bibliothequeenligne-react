import React from "react";
import Card from "../components/cards/Card";
import { getAllBooks } from "../services/apis/books/apiBookServices";
import { useFetchwithToken } from "../utils/hooks";

export default function Books() {
const { data, isLoading, error } = useFetchwithToken(getAllBooks());

  return (
    <div>
      <Card data={data} isLoading={isLoading} error={error} />
    </div>
  );
}
